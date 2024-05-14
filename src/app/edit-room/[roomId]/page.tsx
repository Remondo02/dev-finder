import { getRoom } from '@/data-access/rooms'
import { unstable_noStore as noStore } from 'next/cache'

import { EditRoomForm } from './edit-room-form'

export default async function EditRoomPage({
  params,
}: {
  params: { roomId: string }
}) {
  noStore()
  const room = await getRoom(params.roomId)

  if (!room) {
    return <div>Room not found</div>
  }

  return (
    <div className="container mx-auto flex flex-col gap-8">
      <h1 className="pb-24 pt-12 text-4xl font-bold">Edit Room</h1>
      <EditRoomForm room={room} />
    </div>
  )
}
