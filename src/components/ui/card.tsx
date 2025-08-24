import * as React from "react";

import { cn } from "@/lib/utils";
import { BlurIn } from "@/components/motion-primitives/blur-in";

interface CardProps extends React.ComponentProps<"div"> {
  animated?: boolean;
  animationDelay?: number;
}

function Card({ className, animated = true, animationDelay = 0, ...props }: CardProps) {
  const cardContent = (
    <div
      data-slot="card"
      className={cn(
        "bg-card text-card-foreground flex flex-col gap-5 rounded-xl",
        "border border-transparent hover:border-border/75",
        "h-min py-4",
        className,
      )}
      {...props}
    />
  );

  if (!animated) {
    return cardContent;
  }

  return (
    <BlurIn delay={animationDelay + 0.05} duration={0.3}>
      {cardContent}
    </BlurIn>
  );
}

function CardHeader({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-header"
      className={cn(
        "@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start px-5 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6",
        className,
      )}
      {...props}
    />
  );
}

function CardTitle({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-title"
      className={cn("leading-none font-semibold", className)}
      {...props}
    />
  );
}

function CardDescription({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-description"
      className={cn("text-muted-foreground text-sm", className)}
      {...props}
    />
  );
}

function CardAction({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-action"
      className={cn(
        "col-start-2 row-span-2 row-start-1 self-start justify-self-end",
        className,
      )}
      {...props}
    />
  );
}

function CardContent({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-content"
      className={cn("px-5", className)}
      {...props}
    />
  );
}

function CardFooter({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-footer"
      className={cn("flex items-center px-5 [.border-t]:pt-6", className)}
      {...props}
    />
  );
}

export {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardAction,
  CardDescription,
  CardContent,
};
