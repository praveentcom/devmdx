import { Fragment, ReactNode } from "react";

import { cva } from "class-variance-authority";

import { cn } from "@workspace/ui/lib/utils";

export type ContentContainerVariant = "compact" | "relaxed" | "broad" | "full";

const contentContainerVariants = cva("mx-auto px-6 py-7", {
  variants: {
    variant: {
      compact: "max-w-4xl w-full",
      relaxed: "max-w-6xl w-full",
      broad: "max-w-7xl w-full",
      full: "w-full",
    },
    blur: {
      true: "backdrop-blur-sm bg-background/80",
      false: "",
    },
  },
  defaultVariants: {
    variant: "relaxed",
  },
});

export interface ContentContainerProps {
  children: ReactNode;
  className?: string;
  variant?: ContentContainerVariant;
  blur?: boolean;
}

/**
 * Content container component for main page content.
 * Provides consistent page-level styling and spacing.
 *
 * @param children - The content to display inside the container
 * @param className - Additional CSS classes for the container
 * @param variant - The variant of the container to use
 * @param blur - Whether the content container should have a blur effect
 * @returns The content container component
 */
export function ContentContainer({
  children,
  className,
  variant = "relaxed",
  blur = false,
}: ContentContainerProps): ReactNode {
  const Comp = <Fragment>{children}</Fragment>;

  return (
    <div
      id="content-container"
      data-slot="content-container"
      className={cn(contentContainerVariants({ variant, blur }), className)}
    >
      {Comp}
    </div>
  );
}
