import { protectedProcedure, router } from '../trpc'
import { TRPCError } from '@trpc/server'
import { organisationCollection } from 'src/server/db/collections/organisationCollection'
import { eventCollection } from 'src/server/db/collections/eventCollection'
import { createEventFormSchema } from 'src/models/schema/createEventFormSchema'
import { firestore } from 'firebase-admin'

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
    isVerified: false,
    organisationId: ctx.session.user.id
  })
})

export const eventRouter = router({
  createEvent: createEventProcedure
})
