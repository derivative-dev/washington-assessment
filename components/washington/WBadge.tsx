import React from 'react'
import { cva } from 'class-variance-authority'
import { cn } from '@/lib/utils'
import { LucideIcon } from 'lucide-react'
import { ClipLoader } from 'react-spinners'

const badgeVariants = cva(
    "border border-solid rounded-full inline-flex gap-1 justify-center items-center py-[12px] px-[6px] text-body-xs",
    {
      variants: {
        intent: {
          primary:
            "bg-brand-muted border-button-primary-hover !text-brand-primary",
          constructive:
            "bg-constructive-muted border-constructive !text-constructive",
          destructive:
            "bg-destructive-muted border-destructive !text-destructive",
          warning:
            "bg-warning-silent border-warning !text-warning",
          secondary:
            "bg-fg-muted border-fg-secondary !text-fg-secondary",
        },
        size: {
          sm: "py-[2px] px-[10px]",
          md: "py-[6px] px-[12px]",
        },
      },
      defaultVariants: {
        intent: "primary",
        size: "md",
      },
    }
  )

interface WBadgeProps {
    style?: "primary" | "constructive" | "destructive" | "warning" | "secondary";
    size?: "sm" | "md";
    LeftIcon?: LucideIcon;
    RightIcon?: LucideIcon;
    leftLoader?: boolean;
    content?: string;
    className?: string;
}

const WBadge = ({
    style="primary",
    size="md",
    LeftIcon,
    RightIcon,
    leftLoader = false,
    content,
    className,
    ...props
}: WBadgeProps) => {

    const getIconSize = (buttonSize: string) => {
        switch(buttonSize) {
            case "sm" : return "size-3.5";
            case "md": return "size-4.5";
        }
    }

    const getLoaderSize = (buttonSize: string) => {
        switch(buttonSize) {
            case "sm" : return 14;
            case "md": return 18;
            default: return 18;
        }
    }

    const getLoaderColor = (badgeStyle: string) => {
        switch(badgeStyle) {
            case "primary": return "hsl(var(--brand-primary))";
            case "constructive": return "hsl(var(--constructive))";
            case "destructive": return "hsl(var(--destructive))";
            case "warning": return "hsl(var(--warning))";
            case "secondary": return "hsl(var(--fg-secondary))";
            default: return "hsl(var(--brand-primary))";
        }
    }

  return (
    <div 
        className={cn(badgeVariants({intent: style, size}), className)}
        {...props}
    >
        {leftLoader ? (
            <ClipLoader
                size={getLoaderSize(size)}
                color={getLoaderColor(style)}
                speedMultiplier={0.8}
            />
        ) : (
            LeftIcon && <LeftIcon className={getIconSize(size)}/>
        )}
        {content}
        {RightIcon && <RightIcon className={getIconSize(size)}/>}
    </div>
  )
}

export default WBadge