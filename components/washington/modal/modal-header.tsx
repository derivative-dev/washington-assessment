import React from 'react'
import { DialogHeader } from '@/components/ui/dialog'
import { cn } from '@/lib/utils'

const WModalHeader = ({
    className,
    ...props
}: React.ComponentProps<typeof DialogHeader>) => {
  return (
    <DialogHeader 
        className={cn("px-[20px] flex flex-row justify-between items-center shrink-0 h-[65px] bg-bg-lighter rounded-t-[20px]", className)}
        {...props}
    />
  )
}

export default WModalHeader
