import { db } from '@/db'
import { room } from '@/db/schema'
import { eq } from 'drizzle-orm'
import { unstable_noStore as noStore } from 'next/cache'

export async function getRooms() {
  noStore()
  const rooms = await db.query.room.findMany()
  return rooms
}

export async function getRoom(roomId: string) {
  noStore()
  return await db.query.room.findFirst({
    where: eq(room.id, roomId),
  })
}
