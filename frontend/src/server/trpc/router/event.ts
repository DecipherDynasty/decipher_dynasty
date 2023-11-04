import { protectedProcedure, router } from '../trpc'
import { TRPCError } from '@trpc/server'
import { organisationCollection } from 'src/server/db/collections/organisationCollection'
import { eventCollection } from 'src/server/db/collections/eventCollection'
import { createEventFormSchema } from 'src/models/schema/createEventFormSchema'

/**
 * The following procedure will be called when an organisation or user
 * attempts to create a charity event. This event will verify if the
 * organisation is valid, following which creates an event object into
 * the database.
 */
const createEventProcedure = protectedProcedure.input(createEventFormSchema).mutation(async ({ ctx, input }) => {
  // We attempt to build the event object using the user data and input.
  const uid = ctx.session.user.id

  // Verify if the organisation exists
  const organisationSnapshot = await organisationCollection.doc(uid).get()
  if (!organisationSnapshot.exists) {
    throw new TRPCError({
      code: 'FORBIDDEN'
    })
  }

  // Create an event object and store it into the database.
  await eventCollection.doc().set({
    eventDescription: input.eventDescription,
    eventEndDate: FirebaseFirestore.Timestamp.fromDate(input.eventEndDate),
    eventLocation: input.eventLocation,
    eventName: input.eventName,
    eventStartDate: FirebaseFirestore.Timestamp.fromDate(input.eventStartDate),
    intendedAmountToRaise: input.intendedAmountToRaise,
    isVerified: false,
    organisationId: uid
  })
})

export const eventRouter = router({
  createEvent: createEventProcedure
})
