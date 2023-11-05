import { router } from '../trpc'
import { eventRouter } from './event'
import { organisationRouter } from './organisation'

export const appRouter = router({
  event: eventRouter,
  organisation: organisationRouter
})

export type AppRouter = typeof appRouter
