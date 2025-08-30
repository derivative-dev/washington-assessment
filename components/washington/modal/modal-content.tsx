import React from 'react';
import { DialogContent } from '@/components/ui/dialog';
import { cn } from '@/lib/utils';

const WModalContent = ({
    className,
    ...props
}: React.ComponentProps<typeof DialogContent>) => {
  return (
    <DialogContent
        className={cn("p-0 gap-0 shadow-modal border-0 !rounded-2xl", className)}
        {...props}
    />
  )
}

export default WModalContent