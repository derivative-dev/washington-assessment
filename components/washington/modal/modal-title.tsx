import React from 'react'
import { DialogTitle } from '@/components/ui/dialog'
import { cn } from '@/lib/utils'

const WModalTitle = ({
    className,
    ...props
}: React.ComponentProps<typeof DialogTitle>) => {
  return (
    <DialogTitle 
        className={cn('heading-s !font-medium', className)}
        {...props}
    />
  )
}

export default WModalTitle
