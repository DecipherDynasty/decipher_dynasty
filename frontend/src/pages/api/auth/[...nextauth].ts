import NextAuth, { type NextAuthOptions } from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: 'NUS Email',
      credentials: {},
      authorize: async credential => {
        console.log(credential)

        return {
          id: '1'
        }
      }
    })
  ]
}

export default NextAuth(authOptions)
