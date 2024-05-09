import { db } from '@/db'
import { room } from '@/db/schema'
import { eq, like } from 'drizzle-orm'
import { getSession } from "@/lib/auth";
import { unstable_noStore as noStore } from 'next/cache'

export async function getRooms(search: string | undefined) {
  noStore()
  const where = search ? like(room.tags, `%${search}%`) : undefined
  const rooms = await db.query.room.findMany({
    where,
  })
  return rooms
}

export async function getUserRooms() {
  noStore()
  const session = await getSession()
  if (!session) {
    throw new Error('User not authenticated')
  }
  const rooms = await db.query.room.findMany({
    where: eq(room.userId, session.user.id),
  })
  return rooms
}

export async function getRoom(roomId: string) {
  noStore()
  return await db.query.room.findFirst({
    where: eq(room.id, roomId),
  })
}
