import React from "react";
import { LucideIcon } from "lucide-react";
import { cva } from "class-variance-authority";
import { cn } from "@/lib/utils";

interface WLeadingVisualProps {
  icon?: LucideIcon;
  imageSrc?: string;
  alt?: string;
  size?: "sm" | "md" | "lg";
  className?: string;
}

const visualVariants = cva(
  "inline-flex items-center justify-center rounded-md border border-fg-muted bg-bg-lighter overflow-hidden", 
  {
    variants: {
      size: {
        sm: "size-6",
        md: "size-8",
        lg: "size-12",
      },
    },
    defaultVariants: {
      size: "md",
    },
  }
);

const iconSizeByVisual: Record<NonNullable<WLeadingVisualProps["size"]>, string> = {
  sm: "size-3.5",
  md: "size-4.5",
  lg: "size-7",
};

const WLeadingVisual = ({ icon: Icon, imageSrc, alt, size = "md", className }: WLeadingVisualProps) => {
  return (
    <div className={cn(visualVariants({ size }), className)}>
      {imageSrc ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={imageSrc} alt={alt ?? ""} className="w-full h-full object-cover" />
      ) : (
        Icon && <Icon className={iconSizeByVisual[size]} />
      )}
    </div>
  );
};

export default WLeadingVisual;
export type { WLeadingVisualProps };


