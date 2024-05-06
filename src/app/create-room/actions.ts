'use server'

import { db } from '@/db'
import { Room, room } from '@/db/schema'
import { getSession } from '@/lib/auth'

export async function createRoomAction(roomData: Omit<Room, 'userId'>) {
  const session = await getSession()
  console.log(session)
  await db.insert(room).values({ ...roomData, userId: 'TODO' })
}
