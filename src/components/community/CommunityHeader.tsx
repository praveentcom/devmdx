import { Calendar, ExternalLink, Link, Youtube } from "lucide-react";
import Image from "next/image";

import type { CommunityIndexItem } from "@/lib/helpers/community";
import { generateArticlePlaceholderImage } from "@/lib/helpers/image";
import { formatDate } from "@/lib/helpers/markdown";

import { Button } from "../ui/button";
import { ContributionTypeBadge } from "../ui/contribution-type-badge";

interface CommunityHeaderProps {
  contribution: CommunityIndexItem;
}

export function CommunityHeader({ contribution }: CommunityHeaderProps) {
  return (
    <div className="grid gap-5">
      <div className="relative w-full aspect-[1200/628] rounded-sm overflow-hidden">
        <Image
          src={contribution.image || generateArticlePlaceholderImage(contribution.title)}
          alt={contribution.title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 70vw"
          priority
        />
      </div>

      <div className="grid gap-2">
        <div className="flex items-center min-w-0 gap-3 text-xs text-muted-foreground font-medium">
          <div className="flex items-center gap-1 flex-shrink-0">
            <Calendar className="size-3" />
            <span>{formatDate(contribution.date)}</span>
          </div>
        </div>
        <div className="grid gap-1.5">
          <h1 className="font-medium text-lg">{contribution.title}</h1>
          <p className="text-muted-foreground text-sm">
            {contribution.description}
          </p>
        </div>
      </div>

      <div className="border-b border-border/50 pb-5">
        <div className="flex flex-wrap gap-1.5">
          {contribution.type && (
            <ContributionTypeBadge type={contribution.type} />
          )}
          {/* YouTube Video Link */}
          {contribution.youtubeUrl && (
            <Button
              asChild
              variant="outline"
              size="sm"
              className="h-6 px-2 text-xs"
            >
              <Link href={contribution.youtubeUrl} target="_blank">
                <Youtube className="size-3 mr-1" />
                YouTube
              </Link>
            </Button>
          )}

          {/* External Links */}
          {contribution.externalLinks &&
            contribution.externalLinks.map((link, index) => (
              <Button
                key={index}
                asChild
                variant="outline"
                size="sm"
                className="h-6 px-2 text-xs"
              >
                <Link href={link.url} target="_blank">
                  <ExternalLink className="size-3 mr-1" />
                  {link.title}
                </Link>
              </Button>
            ))}
        </div>
      </div>
    </div>
  );
}
