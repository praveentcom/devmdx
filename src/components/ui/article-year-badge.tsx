import Link from "next/link";
import { getArticleSlug } from "@/lib/helpers/config";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

interface ArticleYearBadgeProps {
  year: string;
  variant?: "default" | "secondary" | "destructive" | "outline";
  className?: string;
  asLink?: boolean;
}

export function ArticleYearBadge({
  year,
  variant = "outline",
  className,
  asLink = false,
}: ArticleYearBadgeProps) {
  const badgeContent = (
    <Badge variant={variant} className={cn("badge-container", className)}>
      <span className="text-xs font-medium">{year}</span>
    </Badge>
  );

  if (!asLink) {
    return badgeContent;
  }

  return <Link href={`/${getArticleSlug()}/${year}`}>{badgeContent}</Link>;
}
