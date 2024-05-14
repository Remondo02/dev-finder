import { Button } from '@/components/ui/button'
import { getUserRooms } from '@/data-access/rooms'
import { unstable_noStore as noStore } from 'next/cache'
import Image from 'next/image'
import Link from 'next/link'

import { UserRoomCard } from './user-room-card'

export default async function YourRoomsPage() {
  noStore()
  const rooms = await getUserRooms()

  return (
    <main className="min-h-screen p-16">
      <div className="mb-8 flex items-center justify-between">
        <h1 className="text-4xl">Your Rooms</h1>
        <Button asChild>
          <Link href="/create-room">Create Room</Link>
        </Button>
      </div>

      <div className="grid grid-cols-3 gap-4">
        {rooms.map((room) => {
          return <UserRoomCard key={room.id} room={room} />
        })}
      </div>

      {rooms.length === 0 && (
        <div className="mt-24 flex flex-col items-center justify-center gap-4">
          <Image
            src="/no-data.svg"
            width="300"
            height="300"
            alt="no data image"
          />
          <h2 className="text-2xl">You have no rooms</h2>
          <Button asChild>
            <Link href="/create-room">Create Room</Link>
          </Button>
        </div>
      )}
    </main>
  )
}
