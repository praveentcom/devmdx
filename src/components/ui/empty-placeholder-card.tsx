"use client";

import { NewspaperIcon } from "lucide-react";
import { ReactNode } from "react";

import { Card, CardContent } from "@/components/ui/card";

interface EmptyPlaceholderCardProps {
  title: string;
  subtitle: string;
  children?: ReactNode;
}

export function EmptyPlaceholderCard({
  title,
  subtitle,
  children,
}: EmptyPlaceholderCardProps) {
  return (
    <Card>
      <CardContent className="text-center py-6">
        <div className="grid items-center gap-5">
          <div className="grid text-center items-center justify-center gap-1.5">
            <NewspaperIcon className="size-4 text-muted-foreground mx-auto" />
            <div className="grid gap-1">
              <h3 className="text-foreground text-sm font-medium">{title}</h3>
              <p className="text-muted-foreground max-w-md text-xs">
                {subtitle}
              </p>
            </div>
          </div>
          {children ? (
            <div className="flex gap-1.5 mx-auto">{children}</div>
          ) : null}
        </div>
      </CardContent>
    </Card>
  );
}

export default EmptyPlaceholderCard;
