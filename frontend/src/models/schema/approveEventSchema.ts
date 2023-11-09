import { z } from 'zod'

export const approveEventSchema = z.object({
  eventId: z.string()
})
