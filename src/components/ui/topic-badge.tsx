import { Badge } from "@/components/ui/badge";
import { TopicMapper, EnumTopic } from "@/lib/helpers/topic-mapper";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface TopicBadgeProps {
  topic: EnumTopic;
  className?: string;
  variant?: "default" | "secondary" | "destructive" | "outline";
  showIcon?: boolean;
  iconSize?: number;
  clickable?: boolean;
}

const topicMapper = new TopicMapper();

export function TopicBadge({
  topic,
  className,
  variant = "outline",
  showIcon = true,
  iconSize = 16,
  clickable = true,
}: TopicBadgeProps) {
  const topicDetails = topicMapper.getDetails(topic);

  if (!topicDetails) {
    return (
      <Badge variant={variant} className={cn("text-xs", className)}>
        {topic}
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
          src={topicDetails.iconPath}
          alt={`${topicDetails.label} icon`}
          width={iconSize}
          height={iconSize}
          className="flex-shrink-0"
        />
      )}
      <span>{topicDetails.label}</span>
    </Badge>
  );

  if (clickable) {
    return (
      <Link href={`/articles/topic/${topic}`} className="inline-block">
        {badgeContent}
      </Link>
    );
  }

  return badgeContent;
}
