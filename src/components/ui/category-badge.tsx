import Link from "next/link";
import { getArticleSlug } from "@/lib/helpers/config";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

interface CategoryBadgeProps {
  category: string;
  variant?: "default" | "secondary" | "destructive" | "outline";
  className?: string;
  asLink?: boolean;
}

export function CategoryBadge({
  category,
  variant = "outline",
  className,
  asLink = false,
}: CategoryBadgeProps) {
  const badgeContent = (
    <Badge variant={variant} className={cn("badge-container", className)}>
      <div className="size-1.5 bg-current/50 rounded-full" />
      <span className="text-xs font-medium">{category}</span>
    </Badge>
  );

  if (!asLink) {
    return badgeContent;
  }

  return (
    <Link
      href={`/${getArticleSlug()}/category/${encodeURIComponent(category)}`}
    >
      {badgeContent}
    </Link>
  );
}
