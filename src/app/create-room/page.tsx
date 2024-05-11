import { CreateRoomForm } from './create-room-form'
import { unstable_noStore as noStore } from 'next/cache'

export default function CreateRoomPage() {
  noStore()
  return (
    <div className='container mx-auto flex flex-col gap-8'>
      <h1 className='text-4xl font-bold pt-12 pb-24'>Create Room</h1>
      <CreateRoomForm />
    </div>
  )
}
