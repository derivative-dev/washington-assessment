import WLeadingVisual from "./WLeadingVisual";
import WButton from "./WButton";
import React from "react";
import { cn } from "@/lib/utils";
import { cva } from "class-variance-authority";
import WBadge from "./WBadge";

const paneVariants = cva(
    "flex justify-between items-center rounded-md p-[10px]",
    {
        variants: {
            intent: {
                default: "border border-fg-muted bg-bg-empty",
                compact: "w-fit",
            },
        },       
        defaultVariants: {
            intent: "default",
        }
    }
)

interface WPaneProps {
    title?: string;
    style?: "default" | "compact";
    description?: string;
    className?: string;
    buttonProps?: React.ComponentProps<typeof WButton>,
    rightOverride?: React.ReactNode,
    badgeProps?: React.ComponentProps<typeof WBadge>,
    visualProps?: React.ComponentProps<typeof WLeadingVisual>,
}

// WPane component with flexible width handling:
// - default: 500px standard width with border and background
// - compact: w-fit for content-based sizing
// - className can override any width via parent components

const WPane = ({
    title,
    style,
    description,
    visualProps,
    buttonProps,
    rightOverride,
    badgeProps,
    className,
    ...props
}: WPaneProps) => {
  return (
    <div 
        className={cn(paneVariants({intent: style}), className)}
        {...props}
    >
        <div className="flex gap-[10px] py-1">
            {visualProps && <WLeadingVisual 
                {...visualProps}
            />}
            <div className="flex flex-col flex-1 justify-center items-start">
                {title && <h3 className="flex gap-[4px] items-center text-body-s text-brand-primary self-stretch">
                    {title}
                    {badgeProps && 
                        <WBadge 
                            className="py-0"
                            {...badgeProps}
                        />
                    }
                </h3>}
                {description && <p className="text-body-xs text-fg-secondary self-stretch">{description}</p>}
            </div>
        </div>
        {style != "compact" && (rightOverride ? rightOverride : buttonProps && <WButton 
            style="subtle"
            size="sm"
            {...buttonProps}
        />)}
    </div>
  )
}

export default WPane