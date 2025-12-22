import { Button } from "@workspace/ui/components/button";
import { PrefetchLink } from "@workspace/ui/components/prefetch-link";

import { URLS } from "@/components/helpers/urls";
import { Badge } from "@workspace/ui/components/badge";

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
    <Button variant={"outline"} className={className}>
      {category}
      {count && count > 1 && <Badge variant="outline">{count}</Badge>}
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
