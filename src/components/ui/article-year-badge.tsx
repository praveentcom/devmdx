import Link from "next/link";

import { Badge } from "@/components/ui/badge";
import { URLS } from "@/lib/constants/urls";
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
  // Allow only 4 digit years, fallback to 'unknown'
  const safeYear = /^\d{4}$/.test(year) ? year : "unknown";
  const badgeContent = (
    <Badge variant={variant} className={cn("badge-container", className)}>
      <span className="text-xs font-medium">{safeYear}</span>
    </Badge>
  );

  if (!asLink || safeYear === "unknown") {
    return badgeContent;
  }

  // Only link if year is valid
  return <Link href={URLS.ARTICLES_YEAR(safeYear)}>{badgeContent}</Link>;
}
