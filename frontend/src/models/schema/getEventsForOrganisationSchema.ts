import { z } from 'zod'

export const getEventsForOrganisationInputSchema = z.object({
  id: z.string()
})

export const getEventsForOrganisationOutputSchema = z.array(
  z.object({
    eventEndDate: z.date(),
    eventName: z.string(),
    eventStartDate: z.date(),
    id: z.string(),
    status: z.enum(['approved', 'rejected', 'pending'])
  })
)
