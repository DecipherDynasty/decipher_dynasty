import { type MetaMaskInpageProvider } from '@metamask/providers'
import { type DefaultSession } from 'next-auth'

declare global {
  interface Window {
    ethereum?: MetaMaskInpageProvider
  }
}

declare module 'next-auth' {
  interface Session {
    user?: {
      id: string
    } & DefaultSession['user']
  }
}
