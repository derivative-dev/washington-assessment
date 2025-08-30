import type { ReactNode } from "react";
import type { LucideIcon } from "lucide-react";
import type { WButtonProps } from "@/components/washington/WButton";

export interface FormHandle {
  getValue?: () => unknown;
}

export interface DrawerOptions {
  title?: ReactNode;
  body: ReactNode;
  widthClass?: string;
  primary?: Partial<WButtonProps>;
  secondary?: Partial<WButtonProps>;
  discard?: Partial<WButtonProps>;
  onPrimary?: () => void | Promise<void>;
  onSecondary?: () => void | Promise<void>;
  onDiscard?: () => void | Promise<void>;
}

export interface ModalOptions {
  headerIcon?: LucideIcon;
  headerTitle?: ReactNode;
  title?: ReactNode;
  description?: ReactNode;
  body: ReactNode;
  width?: string;
  height?: string;
  primary?: Partial<WButtonProps>;
  secondary?: Partial<WButtonProps> | null;
  onPrimary?: () => void | Promise<void>;
  onSubmit?: (value: unknown) => void | Promise<void>;
}


