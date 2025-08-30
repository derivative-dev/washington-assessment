import React from 'react'
import { Dialog } from "@/components/ui/dialog";

const WModal = ({
    ...props
}: React.ComponentProps<typeof Dialog>) => {
  return (
    <Dialog
        {...props}
    />
  )
}

export default WModal