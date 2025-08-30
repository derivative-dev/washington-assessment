import React from 'react'
import { DrawerHeader } from '@/components/ui/drawer'
import { cn } from '@/lib/utils'

const WDrawerHeader = ({
    className,
    ...props
}: React.ComponentProps<typeof DrawerHeader>) => {
  return (
    <DrawerHeader 
        className={cn("relative p-6 w-full h-[120px] border-b border-fg-muted gap-2.5 flex flex-col items-start", className)}
        {...props}
    />
  )
}

export default WDrawerHeader
