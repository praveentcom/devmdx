import { Badge } from "@/components/ui/badge";
import {
  TechnologyMapper,
  EnumTechnology,
} from "@/lib/helpers/technology-mapper";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface TechnologyBadgeProps {
  technology: EnumTechnology;
  className?: string;
  variant?: "default" | "secondary" | "destructive" | "outline";
  showIcon?: boolean;
  iconSize?: number;
  clickable?: boolean;
}

const technologyMapper = new TechnologyMapper();

export function TechnologyBadge({
  technology,
  className,
  variant = "outline",
  showIcon = true,
  iconSize = 16,
  clickable = true,
}: TechnologyBadgeProps) {
  const techDetails = technologyMapper.getDetails(technology);

  if (!techDetails) {
    return (
      <Badge variant={variant} className={cn("text-xs", className)}>
        {technology}
      </Badge>
    );
  }

  const badgeContent = (
    <Badge
      variant={variant}
      className={cn(
        "text-xs flex items-center gap-1.5",
        clickable &&
          "cursor-pointer hover:bg-accent hover:text-accent-foreground transition-colors",
        className,
      )}
    >
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
    return (
      <Link href={`/projects/stack/${technology}`} className="inline-block">
        {badgeContent}
      </Link>
    );
  }

  return badgeContent;
}
