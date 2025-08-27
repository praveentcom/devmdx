import { Badge } from "@/components/ui/badge";
import { TagMapper, EnumTag } from "@/lib/helpers/tag-mapper";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface TagBadgeProps {
  tag: EnumTag;
  className?: string;
  variant?: "default" | "secondary" | "destructive" | "outline";
  showIcon?: boolean;
  iconSize?: number;
  clickable?: boolean;
  source?: "articles" | "projects" | "work";
}

const tagMapper = new TagMapper();

export function TagBadge({
  tag,
  className,
  variant = "outline",
  showIcon = true,
  iconSize = 16,
  clickable = true,
  source = "projects",
}: TagBadgeProps) {
  const techDetails = tagMapper.getDetails(tag);

  if (!techDetails) {
    return (
      <Badge variant={variant} className={cn("text-xs", className)}>
        {tag}
      </Badge>
    );
  }

  const badgeContent = (
    <Badge variant={variant} className={cn("badge-container", className)}>
      {showIcon && (
        <Image
          src={techDetails.iconPath}
          alt={`${techDetails.label} icon`}
          width={iconSize}
          height={iconSize}
          className="flex-shrink-0"
        />
      )}
      <span>{techDetails.label}</span>
    </Badge>
  );

  if (clickable) {
    let href = "";
    switch (source) {
      case "articles":
        href = `/articles/tag/${tag}`;
        break;
      case "work":
      case "projects":
      default:
        href = `/projects/stack/${tag}`;
        break;
    }

    return (
      <Link
        href={href}
        className="inline-block"
        aria-label={`View ${techDetails?.label || tag} ${source}`}
      >
        {badgeContent}
      </Link>
    );
  }

  return badgeContent;
}
