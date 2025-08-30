import React from 'react'
import { DialogDescription } from '@/components/ui/dialog'
import { cn } from '@/lib/utils'

const WModalDescription = ({
    className,
    ...props
}: React.ComponentProps<typeof DialogDescription>) => {
  return (
    <DialogDescription 
        className={cn('text-body-l text-brand-primary', className)}
        {...props}
    />
  )
}

export default WModalDescription
