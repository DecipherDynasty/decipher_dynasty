import { protectedProcedure, router } from '../trpc'
import { TRPCError } from '@trpc/server'
import { organisationCollection } from 'src/server/db/collections/organisationCollection'
import { Event, eventCollection } from 'src/server/db/collections/eventCollection'
import { createEventFormSchema } from 'src/models/schema/createEventFormSchema'
import { firestore } from 'firebase-admin'
import { getEventsForOrganisationOutputSchema } from 'src/models/schema/getEventsForOrganisationSchema'

/**
 * The following procedure will be called when an organisation or user
 * attempts to create a charity event. This event will verify if the
 * organisation is valid, following which creates an event object into
 * the database.
 */
const createEvent = protectedProcedure.input(createEventFormSchema).mutation(async ({ ctx, input }) => {
  // Verify if the organisation exists
  const organisationSnapshot = await organisationCollection.doc(ctx.session.user.id).get()
  if (!organisationSnapshot.exists) {
    throw new TRPCError({
      code: 'FORBIDDEN'
    })
  }

  // Create an event object and store it into the database.
  await eventCollection.doc().set({
    eventDescription: input.eventDescription,
    eventEndDate: firestore.Timestamp.fromDate(input.eventEndDate),
    eventLocation: input.eventLocation,
    eventName: input.eventName,
    eventStartDate: firestore.Timestamp.fromDate(input.eventStartDate),
    intendedAmountToRaise: input.intendedAmountToRaise,
    status: 'pending',
    organisationId: ctx.session.user.id
  })
})

/**
 * Depending on the permission of the user, the dashboard table will vary.
 *
 * If the user is admin, he should get all the events that have yet to be approved.
 * We do not need to worry about the approved event because it is approved and uploaded
 * onto the chain.
 *
 * If the user is a normal organisation, he will only get the events that are only for them.
 */
const getEventsForOrganisation = protectedProcedure
  .output(getEventsForOrganisationOutputSchema)
  .query(async ({ ctx }) => {
    // Validate whether the organisation exists.
    const organisationSnapshot = await organisationCollection.doc(ctx.session.user.id).get()
    if (!organisationSnapshot.exists) {
      throw new TRPCError({
        code: 'UNAUTHORIZED',
        message: 'No organisation found'
      })
    }
    const organisation = organisationSnapshot.data()

    // Populate the events table.
    let queryBuilder: FirebaseFirestore.Query<Event>
    if (organisation?.permission === 'admin') {
      queryBuilder = eventCollection.where('status', '!=', 'approved').where('eventStartTime', '>=', new Date())
    } else {
      queryBuilder = eventCollection.where('organisationId', '==', organisationSnapshot.id)
    }

    const events = await queryBuilder.orderBy('eventStartDate').get()

    return events.docs.map(eventSnapshot => {
      const event = eventSnapshot.data()
      const id = eventSnapshot.id

      return {
        eventEndDate: event.eventEndDate.toDate(),
        eventName: event.eventName,
        eventStartDate: event.eventStartDate.toDate(),
        id,
        status: event.status
      }
    })
  })

export const eventRouter = router({
  createEvent,
  getEventsForOrganisation
})
