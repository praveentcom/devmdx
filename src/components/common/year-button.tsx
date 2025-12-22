import { Button } from "@workspace/ui/components/button";
import { PrefetchLink } from "@workspace/ui/components/prefetch-link";

import { URLS } from "@/components/helpers/urls";

interface YearButtonProps {
  year: string;
  type: "article" | "community";
  className?: string;
  asLink?: boolean;
}

export function YearButton({
  year,
  type,
  className,
  asLink = false,
}: YearButtonProps) {
  const safeYear = /^\d+$/.test(year) ? year : "unknown";
  const badgeContent = (
    <Button variant="outline" className={className}>
      {safeYear}
    </Button>
  );

  if (!asLink || safeYear === "unknown") {
    return badgeContent;
  }

  return (
    <PrefetchLink
      href={
        type === "article"
          ? URLS.ARTICLES_YEAR(safeYear)
          : URLS.COMMUNITY_YEAR(safeYear)
      }
    >
      {badgeContent}
    </PrefetchLink>
  );
}
