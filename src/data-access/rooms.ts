import { db } from '@/db'
import { unstable_noStore as noStore } from 'next/cache'

export async function getRooms() {
  noStore()
  const rooms = await db.query.room.findMany()
  return rooms
}
