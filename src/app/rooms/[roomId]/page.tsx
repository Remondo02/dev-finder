import { TagsList } from '@/components/tags-list'
import { getRoom } from '@/data-access/rooms'
import { splitTags } from '@/lib/utils'
import { GithubIcon } from 'lucide-react'
import { unstable_noStore as noStore } from 'next/cache'
import Link from 'next/link'

import { DevFinderVideo } from './video-player'

export default async function RoomPage(props: { params: { roomId: string } }) {
  noStore()
  const roomId = props.params.roomId
  const room = await getRoom(roomId)

  if (!room) {
    return <div>No room of this ID found</div>
  }

  return (
    <div className="grid min-h-screen grid-cols-4">
      <div className="col-span-3 p-4 pl-2">
        <div className='shadow-sm" rounded-lg border bg-card p-4 text-card-foreground'>
          <DevFinderVideo room={room} />
        </div>
      </div>
      <div className="col-span-1 p-4 pl-2">
        <div className='shadow-sm" flex flex-col gap-4 rounded-lg border bg-card p-4 text-card-foreground'>
          <h1 className="text-xl font-semibold leading-none tracking-tight">
            {room?.name}
          </h1>
          {room.githubRepo && (
            <Link
              href={room.githubRepo}
              className="flex items-center gap-2 text-center text-sm"
              target="_blank"
              rel="noopener noreferrer"
            >
              <GithubIcon />
              Github Project
            </Link>
          )}
          <p className="text-base text-muted-foreground">{room?.description}</p>
          <TagsList tags={splitTags(room.tags)} />
        </div>
      </div>
    </div>
  )
}
