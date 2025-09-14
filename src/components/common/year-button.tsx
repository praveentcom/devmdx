import Link from "next/link";
import { Button, ButtonProps } from "passport-ui/button";

import { URLS } from "@/components/helpers/urls";

interface YearButtonProps {
  year: string;
  type: "article" | "community";
  variant?: ButtonProps["variant"];
  className?: string;
  asLink?: boolean;
}

export function YearButton({
  year,
  type,
  variant = "outline",
  className,
  asLink = false,
}: YearButtonProps) {
  const safeYear = /^\d+$/.test(year) ? year : "unknown";
  const badgeContent = (
    <Button variant={variant} className={className}>
      <span className="text-xs font-medium">{safeYear}</span>
    </Button>
  );

  if (!asLink || safeYear === "unknown") {
    return badgeContent;
  }

  return (
    <Link
      href={
        type === "article"
          ? URLS.ARTICLES_YEAR(safeYear)
          : URLS.COMMUNITY_YEAR(safeYear)
      }
    >
      {badgeContent}
    </Link>
  );
}
