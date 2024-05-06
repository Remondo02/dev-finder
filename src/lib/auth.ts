import { db } from '@/db'
import { DrizzleAdapter } from '@auth/drizzle-adapter'
import { getServerSession } from 'next-auth'
import { Adapter } from 'next-auth/adapters'
import GoogleProvider from 'next-auth/providers/google'

export const authConfig = {
  adapter: DrizzleAdapter(db) as Adapter,
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
  ],
}

export function getSession() {
  return getServerSession(authConfig)
}
