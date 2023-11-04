import { z } from 'zod'

export const createAccountFormSchema = z.object({
  contactNumber: z.string(),
  email: z.string().email(),
  organisationName: z.string()
})
