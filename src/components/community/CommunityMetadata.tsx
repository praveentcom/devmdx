import { Calendar, ExternalLink, Eye, Youtube } from "lucide-react";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { ContributionTypeBadge } from "@/components/ui/contribution-type-badge";
import type { CommunityIndexItem } from "@/lib/helpers/community";
import { formatDate } from "@/lib/helpers/markdown";

interface CommunityMetadataProps {
  community: CommunityIndexItem;
}

export function CommunityMetadata({ community }: CommunityMetadataProps) {
  return (
    <div className="grid gap-3.5 mt-2 text-xs text-muted-foreground font-medium min-w-0">
      <div className="flex items-center gap-4 min-w-0">
        <div className="flex items-center gap-1 flex-shrink-0">
          <Calendar className="size-3" />
          <span>{formatDate(community.date)}</span>
        </div>
        <div className="flex items-center gap-1 flex-shrink-0">
          <Eye className="size-3" />
          <span>{community.readTime} min read</span>
        </div>
      </div>

      <div className="flex flex-wrap gap-1.5 min-w-0">
        {community.type && (
          <ContributionTypeBadge type={community.type} variant="outline" />
        )}

        {/* YouTube Video Link */}
        {community.youtubeUrl && (
          <Button
            asChild
            variant="outline"
            size="sm"
            className="h-6 px-2 text-xs"
          >
            <Link
              href={community.youtubeUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Youtube className="size-3 mr-1" />
              YouTube
            </Link>
          </Button>
        )}

        {/* External Links */}
        {community.externalLinks &&
          community.externalLinks.map((link, index) => (
            <Button
              key={index}
              asChild
              variant="outline"
              size="sm"
              className="h-6 px-2 text-xs"
            >
              <Link href={link.url} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="size-3 mr-1" />
                {link.title}
              </Link>
            </Button>
          ))}
      </div>
    </div>
  );
}
