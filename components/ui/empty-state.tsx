"use client";

import { Button } from "@workspace/ui/components/button";
import { Card, CardContent } from "@workspace/ui/components/card";
import { PrefetchLink } from "@workspace/ui/components/prefetch-link";
import { ReactNode } from "react";

export interface EmptyStateProps {
  title?: string;
  subtitle?: string;
  children?: ReactNode;
  className?: string;
}

export function EmptyState({
  title = "Section empty",
  subtitle = "Check back later for updates.",
  children = (
    <PrefetchLink href="/">
      <Button>Navigate to Homepage</Button>
    </PrefetchLink>
  ),
  className,
}: EmptyStateProps) {
  return (
    <Card data-slot="empty-placeholder-card" className={className}>
      <CardContent className="text-center px-8 py-3 md:px-12">
        <div className="grid gap-8 items-center justify-center">
          <div className="items-center">
            <h4>{title}</h4>
            <p className="text-muted-foreground">{subtitle}</p>
          </div>
          {children ? (
            <div className="flex gap-2 mx-auto">{children}</div>
          ) : null}
        </div>
      </CardContent>
    </Card>
  );
}

export default EmptyState;
