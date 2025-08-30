'use client'

import * as React from 'react'
import { cn } from '@/lib/utils'

type DrawerProps = {
  open: boolean
  onOpenChange?: (open: boolean) => void
  direction?: 'left' | 'right'
  children?: React.ReactNode
}

function Drawer({ open, onOpenChange, direction = 'right', children }: DrawerProps) {
  React.useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <div
      aria-hidden={!open}
      className={cn(
        'fixed inset-0 z-50',
        open ? 'pointer-events-auto' : 'pointer-events-none'
      )}
      onClick={() => onOpenChange?.(false)}
    >
      {/* Scrim */}
      <div
        className={cn(
          'absolute inset-0 bg-black/40 transition-opacity',
          open ? 'opacity-100' : 'opacity-0'
        )}
      />
      {/* Panel container captures clicks */}
      <div
        className={cn(
          'absolute inset-y-0 flex',
          direction === 'right' ? 'right-0 justify-end' : 'left-0 justify-start'
        )}
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </div>
    </div>
  )
}

type DrawerContentProps = React.HTMLAttributes<HTMLDivElement>
function DrawerContent({ className, ...props }: DrawerContentProps) {
  return (
    <div
      className={cn(
        'relative h-full w-[480px] bg-background shadow-xl transition-transform',
        'data-[state=closed]:translate-x-full',
        className
      )}
      {...props}
    />
  )
}

type DrawerHeaderProps = React.HTMLAttributes<HTMLDivElement>
function DrawerHeader({ className, ...props }: DrawerHeaderProps) {
  return <div className={cn('px-6 py-4 border-b', className)} {...props} />
}

type DrawerFooterProps = React.HTMLAttributes<HTMLDivElement>
function DrawerFooter({ className, ...props }: DrawerFooterProps) {
  return <div className={cn('px-6 py-4 border-t', className)} {...props} />
}

type DrawerTitleProps = React.HTMLAttributes<HTMLHeadingElement>
function DrawerTitle({ className, ...props }: DrawerTitleProps) {
  return <h3 className={cn('text-lg font-medium', className)} {...props} />
}

export { Drawer, DrawerContent, DrawerHeader, DrawerFooter, DrawerTitle }


