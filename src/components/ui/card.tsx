import * as React from "react";

import { cn } from "@/lib/utils";
import { BlurIn } from "@/components/motion-primitives/blur-in";
import { BorderTrail } from "@/components/motion-primitives/border-trail";

interface CardProps extends React.ComponentProps<"div"> {
  animated?: boolean;
  animationDelay?: number;
  borderTrail?: boolean;
}

function Card({
  className,
  animated = true,
  animationDelay = 0,
  borderTrail = false,
  children,
  ...props
}: CardProps) {
  const cardContent = (
    <div
      data-slot="card"
      className={cn(
        "text-card-foreground rounded-xl relative",
        "border border-border/50 bg-card dark:bg-card/25",
        "h-min py-4",
        "transition-all duration-100",
        className,
        borderTrail ? "hover:dark:bg-card/50" : "",
      )}
      {...props}
    >
      {borderTrail && (
        <div className="opacity-0 rounded-xl group-hover:opacity-100 transition-opacity duration-300">
          <BorderTrail
            className="bg-gradient-to-r from-primary/0 via-primary/5 to-primary/20"
            size={80}
            transition={{
              repeat: Infinity,
              duration: 4,
              ease: "linear",
            }}
          />
        </div>
      )}
      <div className="flex flex-col gap-5">{children}</div>
    </div>
  );

  if (!animated) {
    return cardContent;
  }

  return (
    <BlurIn delay={animationDelay + 0.05} duration={0.25}>
      {cardContent}
    </BlurIn>
  );
}

function CardHeader({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-header"
      className={cn(
        "@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start px-4 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6",
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
      className={cn("px-4", className)}
      {...props}
    />
  );
}

function CardFooter({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-footer"
      className={cn("flex items-center px-4 [.border-t]:pt-5", className)}
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
