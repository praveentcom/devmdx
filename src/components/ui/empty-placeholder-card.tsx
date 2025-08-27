"use client";

import { ReactNode } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { NewspaperIcon } from "lucide-react";

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
      <CardContent className="text-center py-8">
        <div className="grid items-center gap-5">
          <div className="grid text-center items-center justify-center gap-2">
            <NewspaperIcon className="size-4 text-muted-foreground mx-auto" />
            <div className="grid gap-1">
              <h3 className="text-foreground text-sm">{title}</h3>
              <p className="text-muted-foreground max-w-md text-xs">
                {subtitle}
              </p>
            </div>
          </div>
          {children ? (
            <div className="flex gap-2 mx-auto">{children}</div>
          ) : null}
        </div>
      </CardContent>
    </Card>
  );
}

export default EmptyPlaceholderCard;
