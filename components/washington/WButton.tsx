import { cva } from "class-variance-authority"
import { cn } from "@/lib/utils"
import { Button } from "../ui/button";
import { VariantProps } from "class-variance-authority";
import { LucideIcon, Loader2 } from "lucide-react";

const buttonVariants = cva(
  "inline-flex cursor-pointer items-center justify-center gap-[10px] rounded-full shadow-none",
  {
    variants: {
      intent: {
        default_primary:
          "bg-brand-primary !text-white hover:scale-[103%] hover:bg-button-primary-hover",
        default_subtle:
          "!text-brand-primary border-[1.5px] border-button-primary bg-bg-empty hover:bg-brand-muted hover:scale-105",
        default_danger:
          "border bg-bg-empty !text-destructive border-[1.5px] border-fg-muted hover:scale-105 hover:bg-bg-lighter",
        default_outlined:
          "!text-fg-secondary hover:!text-fg-primary hover:scale-[103%]",
        hover_primary:
          "bg-button-primary-hover !text-white color-bg-empty scale-[103%]",
        hover_subtle:
          "text-button-primary border-[1.5px] border-button-primary bg-brand-mute scale-[103%]",
        hover_danger:
          "border bg-bg-lighter text-destructive border-[1.5px] border-fg-muted scale-[103%]",
        hover_outlined:
          "text-fg-primary scale-[103%]",
        disabled_primary:
          "bg-bg-light !text-fg-hushed color-bg-empty pointer-events-none",
        disabled_subtle:
          "bg-bg-light !text-fg-hushed color-bg-empty pointer-events-none",
        disabled_danger:
          "bg-bg-light !text-fg-hushed color-bg-empty border-[1.5px] border-fg-muted pointer-events-none",
        disabled_outlined:
          "!text-fg-hushed pointer-events-none",
        loading_primary:
          "bg-brand-primary !text-white pointer-events-none px-[24px] py-[8px]",
      },
      size: {
        sm: "!px-4.5 text-body-xs",
        md: "!px-6 text-body-m",
      },
    },
    defaultVariants: {
      intent: "default_primary",
      size: "md",
    },
  }
)

export interface WButtonProps extends Omit<React.ComponentProps<"button">, "style">, VariantProps<typeof buttonVariants> {
  state?: "default" | "hover" | "disabled" | "loading";
  style?: "primary" | "subtle" | "danger" | "outlined";
  size?: "sm" | "md";
  leftIcon?: LucideIcon;
  rightIcon?: LucideIcon;
  content?: string;
  iconSize?: string;
  onClick?: () => void;
}

const WButton = ({
  state = "default",
  style = "primary",
  size = "md",
  leftIcon : LeftIcon,
  rightIcon : RightIcon,
  content,
  iconSize,
  onClick,
  className,
  ...props
}: WButtonProps) => {
  const loading = state === "loading"

  const intentValue = !loading ? `${state}_${style}` as const : "loading_primary";

  const getIconSize = (buttonSize: string) => {
      switch(buttonSize) {
          case "sm" : return "size-3.5";
          case "md": return "size-5";
      }
  }

  const icon = iconSize ? iconSize : getIconSize(size);

  return (
    <Button 
      className={cn(buttonVariants({ intent: intentValue, size }), className)}
      {...props}
      onClick={onClick}
    >
      {loading ? (
        <>
          <Loader2 className={`${icon} animate-spin`} />
        </>
      ) : (
        <>
          {LeftIcon && (
            <LeftIcon className={icon}/>
          )}
          {content}
          {RightIcon && (
            <RightIcon className={icon}/>
          )}
        </>
      )}
    </Button>
  )
}

export default WButton
