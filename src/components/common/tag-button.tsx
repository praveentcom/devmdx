import { Badge } from "@workspace/ui/components/badge";
import { Button } from "@workspace/ui/components/button";
import { PrefetchLink } from "@workspace/ui/components/prefetch-link";

import { getTagImagePath } from "@/components/helpers/tag-mapper";
import { URLS } from "@/components/helpers/urls";

import { ImageWithFallback } from "./image-with-fallback";

interface TagButtonProps {
  tag: string;
  className?: string;
  showIcon?: boolean;
  asLink?: boolean;
  source?: "articles" | "projects" | "work";
  count?: number;
}

export function TagButton({
  tag,
  className,
  showIcon = true,
  asLink = false,
  count,
  source = "projects",
}: TagButtonProps) {
  const badgeContent = (
    <Button variant={"outline"} className={className}>
      {showIcon && (
        <ImageWithFallback
          src={getTagImagePath(tag)}
          alt={`${tag} icon`}
          width={20}
          height={20}
          className="shrink-0 size-5"
        />
      )}
      <span className="font-medium">{tag}</span>
      {count && count > 1 && <Badge variant="outline">{count}</Badge>}
    </Button>
  );

  if (asLink) {
    let href = "";
    switch (source) {
      case "articles":
        href = URLS.ARTICLES_TAG(tag);
        break;
      case "work":
      case "projects":
      default:
        href = URLS.PROJECTS_STACK(tag);
        break;
    }

    return (
      <PrefetchLink
        href={href}
        className="inline-block"
        aria-label={`View ${tag} ${source}`}
      >
        {badgeContent}
      </PrefetchLink>
    );
  }

  return badgeContent;
}
