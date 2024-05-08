'use client'

import { ModeToggle } from '@/components/mode-toggle'
import { Button } from '@/components/ui/button'
import { signIn, signOut, useSession } from 'next-auth/react'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { LogInIcon, LogOutIcon } from 'lucide-react'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import Image from 'next/image.js'
import Link from 'next/link.js'

function AccountDropdown() {
  const session = useSession()

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant='link'>
          <Avatar className='mr-2'>
            <AvatarImage src={session.data?.user.image ?? ''} />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          {session.data?.user.name}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem
          onClick={() =>
            signOut({
              callbackUrl: '/',
            })
          }
        >
          <LogOutIcon className='mr-2' /> Sign Out
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export function Header() {
  const session = useSession()
  return (
    <header className='py-2 bg-slate-100 dark:bg-slate-900 container mx-auto'>
      <div className='flex justify-between items-center'>
        <Link
          className='flex gap-2 items-center text-xl hover:underline'
          href='/'
        >
          <Image
            src='/icon.png'
            width='60'
            height='60'
            alt='the application icon of a magnifying glass'
          />
          DevFinder
        </Link>
        <div className='flex items-center gap-4'>
          {session.data && <AccountDropdown />}
          {!session.data && (
            <Button onClick={() => signIn()} variant='link'>
              <LogInIcon className='mr-2' />
              Sign In
            </Button>
          )}
          <ModeToggle />
        </div>
      </div>
    </header>
  )
}
