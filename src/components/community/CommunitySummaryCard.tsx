import { Calendar, ExternalLink, Eye, Youtube } from "lucide-react";
import Image from "next/image";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { ContributionTypeBadge } from "@/components/ui/contribution-type-badge";
import { PrefetchLink } from "@/components/ui/prefetch-link";
import { URLS } from "@/lib/constants/urls";
import { CommunityIndexItem } from "@/lib/helpers/community";
import { generateArticlePlaceholderImage } from "@/lib/helpers/image";
import { formatDate } from "@/lib/helpers/markdown";
import { truncate } from "@/lib/utils";

export function CommunitySummaryCard({
  contribution,
}: {
  contribution: CommunityIndexItem;
}) {
  return (
    <PrefetchLink
      href={URLS.COMMUNITY(contribution.year, contribution.slug)}
      prefetchOnVisible={true}
    >
      <Card borderTrail>
        <CardHeader>
          <div className="relative w-full h-48 overflow-hidden rounded-md">
            <Image
              src={
                contribution.image ||
                generateArticlePlaceholderImage(contribution.title)
              }
              alt={contribution.title}
              fill
              className="object-cover rounded-md"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col gap-3">
            <div className="flex-center-gap-3 text-xs font-medium text-muted-foreground">
              <div className="flex items-center gap-1">
                <Calendar className="size-3" />
                <span>{formatDate(contribution.date)}</span>
              </div>
              <div className="flex items-center gap-1">
                <Eye className="size-3" />
                <span>{contribution.readTime} min read</span>
              </div>
            </div>

            <h2 className="text-md font-medium group-hover:text-primary transition-colors">
              {contribution.title}
            </h2>

            <p className="text-muted-foreground text-sm line-clamp-2">
              {truncate(contribution.description, 160)}
            </p>

            <div className="flex flex-wrap gap-1.5">
              {contribution.type && (
                <ContributionTypeBadge type={contribution.type} />
              )}
              {contribution.youtubeUrl && (
                <Badge variant="secondary" className="text-xs">
                  <Youtube className="size-3 mr-1" />
                  Video
                </Badge>
              )}
              {contribution.externalLinks &&
                contribution.externalLinks.length > 0 && (
                  <Badge variant="secondary" className="text-xs">
                    <ExternalLink className="size-3 mr-1" />
                    {contribution.externalLinks.length} Link
                    {contribution.externalLinks.length > 1 ? "s" : ""}
                  </Badge>
                )}
            </div>
          </div>
        </CardContent>
      </Card>
    </PrefetchLink>
  );
}
