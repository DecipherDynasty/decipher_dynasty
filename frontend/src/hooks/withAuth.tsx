/* eslint-disable react-hooks/rules-of-hooks */
import { CircularProgress } from '@mui/material'
import { useSession } from 'next-auth/react'

export const withAuth = (Component: any) => {
  const wrapper = (props: any) => {
    const { data: session, status } = useSession({ required: true })

    if (status === 'loading') {
      return <CircularProgress />
    }

    return <Component {...props} session={session} />
  }

  return wrapper
}
