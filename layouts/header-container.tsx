"use client";

import { cn } from "@workspace/ui/lib/utils";
import { cva } from "class-variance-authority";
import { ReactNode } from "react";

export type HeaderContainerVariant = "compact" | "relaxed" | "broad" | "full";

const headerContainerVariants = cva(
  "w-full z-50 transition-none border-b bg-background border-border",
  {
    variants: {
      sticky: {
        true: "sticky top-0",
        false: "relative",
      },
      blur: {
        true: "backdrop-blur-sm bg-background/80",
        false: "",
      },
    },
    defaultVariants: {
      sticky: false,
      blur: false,
    },
  },
);

const headerContentVariants = cva("px-6 py-4 mx-auto min-h-14 content-center", {
  variants: {
    variant: {
      compact: "max-w-4xl w-full",
      relaxed: "max-w-6xl w-full",
      broad: "max-w-7xl w-full",
      full: "w-full",
    },
  },
  defaultVariants: {
    variant: "relaxed",
  },
});

export interface HeaderContainerProps {
  children: ReactNode;
  className?: string;
  variant?: HeaderContainerVariant;
  sticky?: boolean;
  blur?: boolean;
}

/**
 * Header container component for page headers.
 * Provides consistent header styling with optional sticky positioning.
 * Designed to complement ContentContainer inside SidebarInset.
 *
 * @param children - The header content to display inside the container
 * @param className - Additional CSS classes for the container
 * @param variant - The variant of the container to use
 * @param sticky - Whether the header should stick to the top on scroll
 * @param blur - Whether the header should have a blur effect
 * @returns The header container component with the appropriate variant and classes
 */
export function HeaderContainer({
  children,
  className,
  variant = "relaxed",
  sticky = false,
  blur = false,
}: HeaderContainerProps): ReactNode {
  return (
    <header
      data-slot="header-container"
      className={cn(
        headerContainerVariants({
          sticky,
          blur,
        }),
        className,
      )}
    >
      <div className={headerContentVariants({ variant })}>{children}</div>
    </header>
  );
}
