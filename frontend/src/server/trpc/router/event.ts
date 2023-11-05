import { protectedProcedure, router } from '../trpc'
import { TRPCError } from '@trpc/server'
import { organisationCollection } from 'src/server/db/collections/organisationCollection'
import { eventCollection } from 'src/server/db/collections/eventCollection'
import { createEventFormSchema } from 'src/models/schema/createEventFormSchema'
import { firestore } from 'firebase-admin'
import {
  getEventsForOrganisationInputSchema,
  getEventsForOrganisationOutputSchema
} from 'src/models/schema/getEventsForOrganisationSchema'

/**
 * The following procedure will be called when an organisation or user
 * attempts to create a charity event. This event will verify if the
 * organisation is valid, following which creates an event object into
 * the database.
 */
const createEventProcedure = protectedProcedure.input(createEventFormSchema).mutation(async ({ ctx, input }) => {
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
 * The following procedure is used to get all the events that the organisation has submitted.
 * This will be used to display on the table in the dashboard.
 */
const getEventsForOrganisation = protectedProcedure
  .input(getEventsForOrganisationInputSchema)
  .output(getEventsForOrganisationOutputSchema)
  .query(async ({ input }) => {
    const events = await eventCollection.where('organisationId', '==', input.id).orderBy('eventStartDate').get()

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
  createEvent: createEventProcedure,
  getEventsForOrganisation
})
