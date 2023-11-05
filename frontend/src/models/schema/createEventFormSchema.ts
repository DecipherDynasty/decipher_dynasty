import { z } from 'zod'

/**
 * The request schema used for creating event. This schema will be used
 * on both the frontend and backend form validation to ensure that the
 * data sent and received are consistent.
 */
export const createEventFormSchema = z.object({
  eventEndDate: z.date(),
  eventStartDate: z.date(),
  eventLocation: z.string(),
  eventDescription: z.string(),
  eventName: z.string(),
  intendedAmountToRaise: z.number().positive()
})
