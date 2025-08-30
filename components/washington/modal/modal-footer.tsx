import React from 'react'
import { DialogFooter } from '@/components/ui/dialog'
import { cn } from '@/lib/utils'


const WModalFooter = ({
  className,
  children,
  ...props
}: React.ComponentProps<typeof DialogFooter>) => {
  return (
    <DialogFooter 
      className={cn("bg-bg-lighter px-5 h-[70px] flex !flex-row justify-end items-center shrink-0 gap-2.5 rounded-b-[20px]", className)}
      {...props}
    >
      {children}
    </DialogFooter>
  )
}

export default WModalFooter

