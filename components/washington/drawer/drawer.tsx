import React from "react"
import { Drawer } from "@/components/ui/drawer"

const WDrawer = ({
  ...props
}: React.ComponentProps<typeof Drawer>) => {
  return (
    <Drawer 
      direction="right"
      {...props}
    />  
  )
}

export default WDrawer
