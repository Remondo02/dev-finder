'use client'

import { cn } from '@/lib/utils'
import { useRouter } from 'next/navigation'

import { badgeVariants } from './ui/badge'

export function TagsList({ tags }: { tags: string[] }) {
  const router = useRouter()
  return (
    <div className="flex flex-wrap gap-2">
      {tags.map((tag) => (
        <button
          className={cn(badgeVariants())}
          key={tag}
          onClick={() => {
            router.push(`/?search=${tag}`)
          }}
          tabIndex={0}
          role="button"
        >
          {tag}
        </button>
      ))}
    </div>
  )
}
