import React from 'react'
import { Button } from '../ui/button';
import { LucideIcon } from 'lucide-react'
import { cn } from '@/lib/utils';
import { cva } from 'class-variance-authority';

interface WCircularButtonProps {
  icon: LucideIcon;
  onClick?: () => void;
  className?: string;
  size?: "sm" | "md" | "lg";
  style?: "primary" | "subtle" | "danger" | "outlined" | "constructive";
  state?: "default" | "hover" | "disabled";
}

const WCircularButton = ({ 
  icon : Icon, 
  onClick,
  className,
  size = "md",
  style = "primary", 
  state = "default",
  ...props 
}: WCircularButtonProps) => {
    const intentValue = `${state}_${style}` as const;

    const getIconSize = (buttonSize: string) => {
        switch (buttonSize) {
            case "sm" : return "size-1.75";
            case "md" : return "size-3";
            case "lg" : return "size-4.5";
            default : return "size-3";
        }
    };

    const circularButtonVariants = cva(
      "inline-flex items-center justify-center rounded-full shadow-none",
      {
        variants: {
          intent: {
            default_primary:
              "bg-brand-primary !text-white hover:scale-105 hover:bg-button-primary-hover",
            default_subtle:
              "!text-fg-secondary border-[1px] border-fg-muted bg-bg-lighter hover:bg-bg-light hover:scale-105",
            default_danger:
              "border bg-bg-empty !text-destructive border-[1px] border-fg-muted hover:scale-105 hover:bg-bg-lighter",
            default_outlined:
              "!text-fg-secondary hover:!text-fg-primary hover:scale-105",
            default_constructive:
              "bg-bg-empty !text-constructive border-2 border-constructive hover:scale-105 hover:bg-constructive-muted",
            hover_primary:
              "bg-button-primary-hover !text-white color-bg-empty scale-105",
            hover_subtle:
              "text-fg-secondary border-[1px] border-fg-muted bg-bg-light scale-105",
            hover_danger:
              "border bg-bg-lighter text-destructive border-[1.5px] border-fg-muted scale-105",
            hover_outlined:
              "text-fg-primary scale-105",
            hover_constructive:
              "bg-constructive-muted !text-white scale-105",
            disabled_primary:
              "bg-bg-light !text-fg-hushed color-bg-empty",
            disabled_subtle:
              "bg-bg-light !text-fg-hushed color-bg-empty",
            disabled_danger:
              "bg-bg-light !text-fg-hushed color-bg-empty border-[1.5px] border-fg-muted",
            disabled_outlined:
              "!text-fg-hushed",
            disabled_constructive:
              "bg-bg-light !text-bg-dark",
          },
          size: {
            sm : "size-4 p-0",
            md : "size-6 p-0",
            lg : "size-9 p-0",
          },
        },
        defaultVariants: {
          intent: "default_primary",
          size: "md",
        },
      }
    )

    const disabled = state === "disabled"

    return (
        <Button 
            onClick={onClick}
            disabled={disabled}
            className={cn(
                "!p-0 !min-h-0",
                circularButtonVariants({ intent: intentValue, size }),
                className
            )}
            {...props}
        >
            <Icon 
                className={getIconSize(size)} 
            />
        </Button>
    )
}

export default WCircularButton
export type { WCircularButtonProps }
