'use-client'
/* eslint-disable react-hooks/rules-of-hooks */
import { useSession } from 'next-auth/react'

export const withAuth = (Component: any) => {
  const wrapper = (props: any) => {
    useSession({ required: true })

    return <Component {...props} />
  }

  return wrapper
}
