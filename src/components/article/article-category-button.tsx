import Link from "next/link";
import { Button } from "passport-ui/button";

import { URLS } from "@/components/helpers/urls";

interface ArticleCategoryButtonProps {
  category: string;
  className?: string;
  asLink?: boolean;
}

export function ArticleCategoryButton({
  category,
  className,
  asLink = false,
}: ArticleCategoryButtonProps) {
  const badgeContent = (
    <Button variant={"outline"} className={className}>
      <span className="text-xs font-medium">{category}</span>
    </Button>
  );

  if (!asLink) {
    return badgeContent;
  }

  return (
    <Link href={URLS.ARTICLES_CATEGORY(encodeURIComponent(category))}>
      {badgeContent}
    </Link>
  );
}
