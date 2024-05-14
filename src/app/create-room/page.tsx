import { unstable_noStore as noStore } from 'next/cache'

import { CreateRoomForm } from './create-room-form'

export default function CreateRoomPage() {
  noStore()
  return (
    <div className="container mx-auto flex flex-col gap-8">
      <h1 className="pb-24 pt-12 text-4xl font-bold">Create Room</h1>
      <CreateRoomForm />
    </div>
  )
}
