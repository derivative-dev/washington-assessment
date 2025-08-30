import React from 'react'
import { DrawerContent } from '@/components/ui/drawer'
import { cn } from '@/lib/utils'

const WDrawerContent = ({
    className,
    ...props
}: React.ComponentProps<typeof DrawerContent>) => {
  return (
    <DrawerContent 
        className={cn(
          'flex flex-col justify-between absolute right-0 border-l border-fg-muted bg-fg-silent h-screen',
          "data-[state=closed]:animate-out data-[state=closed]:slide-out-to-right",
          "transition ease-in-out data-[state=closed]:duration-300",
          className
        )}
        {...props}
    />
  )
}

export default WDrawerContent
