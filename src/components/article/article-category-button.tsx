import { Button } from "passport-ui/button";
import { PrefetchLink } from "passport-ui/prefetch-link";

import { URLS } from "@/components/helpers/urls";

interface ArticleCategoryButtonProps {
  category: string;
  className?: string;
  asLink?: boolean;
  count?: number;
}

export function ArticleCategoryButton({
  category,
  className,
  asLink = false,
  count,
}: ArticleCategoryButtonProps) {
  const badgeContent = (
    <Button variant="outline" className={className}>
      <span className="text-xs font-medium">{category}</span>
      {count && count > 1 && (
        <div className="rounded-full bg-secondary text-secondary-foreground items-center justify-center px-1 pt-0.5 py-0.25 h-min">
          <p className="leading-none pb-0 mb-0 text-xxs font-medium">{count}</p>
        </div>
      )}
    </Button>
  );

  if (!asLink) {
    return badgeContent;
  }

  return (
    <PrefetchLink href={URLS.ARTICLES_CATEGORY(encodeURIComponent(category))}>
      {badgeContent}
    </PrefetchLink>
  );
}
