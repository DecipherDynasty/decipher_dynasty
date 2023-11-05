import { publicProcedure, router } from '../trpc'
import { TRPCError } from '@trpc/server'
import { organisationCollection } from 'src/server/db/collections/organisationCollection'
import { createAccountFormSchema } from 'src/models/schema/createAccountFormSchema'

const createOrganisation = publicProcedure.input(createAccountFormSchema).mutation(async ({ input }) => {
  // Check whether the email has been used before
  const existingOrganisation = await organisationCollection.where('email', '==', input.email).limit(1).get()
  if (!existingOrganisation.empty) {
    throw new TRPCError({
      code: 'BAD_REQUEST',
      message: 'The email has already been used.'
    })
  }

  // Create a new organisation object
  await organisationCollection.doc(input.uid).set({
    contactNumber: input.contactNumber,
    email: input.email,
    name: input.organisationName,
    permission: 'organisation'
  })
})

export const organisationRouter = router({
  createOrganisation
})
