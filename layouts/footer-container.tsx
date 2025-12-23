import { cn } from "@workspace/ui/lib/utils";
import { cva } from "class-variance-authority";
import { ReactNode } from "react";

export type FooterContainerVariant = "compact" | "relaxed" | "broad" | "full";

const footerContainerVariants = cva(
  "w-full z-50 transition-none border-t border-border bg-background",
  {
    variants: {
      sticky: {
        true: "sticky bottom-0",
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

const footerContentVariants = cva("px-6 py-4 mx-auto", {
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

export interface FooterContainerProps {
  children: ReactNode;
  className?: string;
  variant?: FooterContainerVariant;
  sticky?: boolean;
  blur?: boolean;
}

/**
 * Footer container component for page footers.
 * Provides consistent footer styling with optional sticky positioning.
 * Designed to complement ContentContainer inside SidebarInset.
 *
 * @param children - The footer content to display inside the container
 * @param className - Additional CSS classes for the container
 * @param variant - The variant of the container to use
 * @param sticky - Whether the footer should stick to the bottom on scroll
 * @param blur - Whether the footer should have a blur effect
 * @returns The footer container component with the appropriate variant and classes
 */
export function FooterContainer({
  children,
  className,
  variant = "relaxed",
  sticky = false,
  blur = false,
}: FooterContainerProps): ReactNode {
  return (
    <footer
      data-slot="footer-container"
      className={cn(footerContainerVariants({ sticky, blur }), className)}
    >
      <div className={footerContentVariants({ variant })}>{children}</div>
    </footer>
  );
}
