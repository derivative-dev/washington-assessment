import React from 'react'
import { DrawerTitle } from '@/components/ui/drawer'
import { cn } from '@/lib/utils'

const WDrawerTitle = ({
    className,
    ...props
}: React.ComponentProps<typeof DrawerTitle>) => {
  return (
    <DrawerTitle 
        className={cn('heading-s !font-medium', className)}
        {...props}
    />
  )
}

export default WDrawerTitle
