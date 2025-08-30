'use client'

import * as React from 'react'
import { cn } from '@/lib/utils'

type DialogProps = {
  open: boolean
  onOpenChange?: (open: boolean) => void
  children?: React.ReactNode
}

function Dialog({ open, onOpenChange, children }: DialogProps) {
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

  if (!open) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center" onClick={() => onOpenChange?.(false)}>
      <div className="absolute inset-0 bg-black/40" />
      <div className="relative z-10" onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
    </div>
  )
}

type DialogContentProps = React.HTMLAttributes<HTMLDivElement>
function DialogContent({ className, ...props }: DialogContentProps) {
  return (
    <div
      className={cn(
        'w-[600px] max-w-[90vw] bg-background rounded-lg shadow-xl border border-fg-muted',
        className
      )}
      {...props}
    />
  )
}

type DialogHeaderProps = React.HTMLAttributes<HTMLDivElement>
function DialogHeader({ className, ...props }: DialogHeaderProps) {
  return <div className={cn('px-5 py-4 flex items-center justify-between', className)} {...props} />
}

type DialogFooterProps = React.HTMLAttributes<HTMLDivElement>
function DialogFooter({ className, ...props }: DialogFooterProps) {
  return <div className={cn('px-5 py-4 flex items-center justify-end gap-3', className)} {...props} />
}

type DialogTitleProps = React.HTMLAttributes<HTMLHeadingElement>
function DialogTitle({ className, ...props }: DialogTitleProps) {
  return <h3 className={cn('text-lg font-medium', className)} {...props} />
}

type DialogDescriptionProps = React.HTMLAttributes<HTMLParagraphElement>
function DialogDescription({ className, ...props }: DialogDescriptionProps) {
  return <p className={cn('text-sm text-muted-foreground', className)} {...props} />
}

export { Dialog, DialogContent, DialogHeader, DialogFooter, DialogTitle, DialogDescription }


