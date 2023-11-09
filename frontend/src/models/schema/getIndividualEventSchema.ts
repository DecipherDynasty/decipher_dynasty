import { z } from 'zod'

export const getIndividualEventInputSchema = z.object({
  eventId: z.string()
})

export const getIndividualEventOutputSchema = z.object({
  canApprove: z.boolean(),
  eventDescription: z.string(),
  eventEndDate: z.date(),
  eventLocation: z.string(),
  eventName: z.string(),
  intendedAmountToRaise: z.number(),
  status: z.enum(['approved', 'pending', 'rejected']),
  organisationId: z.string(),
  photoUrl: z.string()
})
