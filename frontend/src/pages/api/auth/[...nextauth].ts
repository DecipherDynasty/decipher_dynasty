import NextAuth, { type NextAuthOptions } from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from 'src/utils/firebase'

/**
 * Integrating Firebase Auth with NextAuth so that we can use the
 * user id within the TRPC. The user id and information will be
 * encoded as JWT and session token.
 *
 * We use jwt strategy and set the jwt token to expire in 24 hours
 * for enhanced security purposes.
 */
export const authOptions: NextAuthOptions = {
  secret: process.env.NEXTAUTH_SECRET,
  session: {
    strategy: 'jwt'
  },
  callbacks: {
    jwt({ token }) {
      return token
    },
    async session({ session, token }) {
      if (session && session.user && token) {
        session.user.id = token.sub || ''
      }

      return session
    }
  },
  providers: [
    CredentialsProvider({
      name: 'Login',
      credentials: {
        email: { type: 'email' },
        password: { type: 'password' }
      },
      authorize: async credential => {
        if (!credential || !credential.email || !credential.password) {
          throw Error('Please check your inputs')
        }

        const { user } = await signInWithEmailAndPassword(auth, credential.email, credential.password)

        return {
          id: user.uid
        }
      }
    })
  ]
}

export default NextAuth(authOptions)
