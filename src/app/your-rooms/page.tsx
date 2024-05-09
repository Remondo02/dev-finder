import { Button } from '@/components/ui/button'
import Link from 'next/link.js'
import { getUserRooms } from '@/data-access/rooms'
import { RoomCard } from '@/components/room-card'

export default async function YourRoomsPage() {
  const rooms = await getUserRooms()

  return (
    <main className='min-h-screen p-16'>
      <div className='flex justify-between items-center mb-8'>
        <h1 className='text-4xl'>Your Rooms</h1>
        <Button asChild>
          <Link href='/create-room'>Create Room</Link>
        </Button>
      </div>

      <div className='grid grid-cols-3 gap-4'>
        {rooms.map((room) => {
          return <RoomCard key={room.id} room={room} />
        })}
      </div>
    </main>
  )
}
