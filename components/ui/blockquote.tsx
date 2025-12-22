import React from "react";

import { cn } from "@workspace/ui/lib/utils";

export interface BlockquoteProps extends React.ComponentProps<"blockquote"> {
  /**
   * Whether this is a nested blockquote (affects styling)
   */
  nested?: boolean;
}

/**
 * A styled blockquote component for displaying quoted content
 *
 * @param nested - Whether this blockquote is nested within another
 * @param className - Additional CSS classes
 * @param children - The blockquote content
 */
function Blockquote({
  nested = false,
  className,
  children,
  ...props
}: BlockquoteProps) {
  return (
    <blockquote
      data-slot="blockquote"
      className={cn(
        "relative pl-6 py-2 pr-5 bg-border/50 rounded-md leading-relaxed text-muted-foreground",
        nested ? "my-2" : "my-4",
        className,
      )}
      {...props}
    >
      {!nested && (
        <div className="absolute left-2 top-2 bottom-2 w-1 bg-foreground/50 rounded-sm" />
      )}
      {children}
    </blockquote>
  );
}

export { Blockquote };
