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
    <Card className="text-center py-12 card-hover-shadow rounded-lg">
      <CardContent>
        <div className="flex flex-col items-center gap-5">
          <div className="grid text-center items-center justify-center gap-2">
            <NewspaperIcon className="icon-sm text-muted-foreground mx-auto" />
            <div className="flex flex-col">
              <h3 className="text-foreground text-sm font-medium">{title}</h3>
              <p className="text-muted-foreground max-w-md text-xs">
                {subtitle}
              </p>
            </div>
          </div>
          {children ? <div className="flex gap-2">{children}</div> : null}
        </div>
      </CardContent>
    </Card>
  );
}

export default EmptyPlaceholderCard;
