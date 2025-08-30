import React from 'react'
import { DrawerFooter } from '@/components/ui/drawer'
import { cn } from '@/lib/utils'


const WDrawerFooter = ({
  className,
  children,
  ...props
}: React.ComponentProps<typeof DrawerFooter>) => {
  return (
    <DrawerFooter 
      className={cn("flex !flex-row justify-between bg-bg-lighter px-5 py-3.5 border-t w-full border-fg-muted shadow-modal", className)}
      {...props}
    >
      {children}
    </DrawerFooter>
  )
}

export default WDrawerFooter

