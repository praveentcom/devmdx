import { Calendar, ExternalLink, Eye, Youtube } from 'lucide-react';
import Image from 'next/image';

import { PrefetchLink } from '@/components/ui/prefetch-link';
import { CommunityIndexItem } from '@/lib/helpers/community';
import { generateArticlePlaceholderImage } from '@/lib/helpers/image';
import { formatDate } from '@/lib/helpers/markdown';
import { truncate } from '@/lib/utils';

import { Badge } from '../ui/badge';
import { Card, CardContent, CardHeader } from '../ui/card';
import { ContributionTypeBadge } from '../ui/contribution-type-badge';

export function CommunitySummaryCard({
  community,
  href,
}: {
  community: CommunityIndexItem;
  href?: string;
}) {
  return (
    <PrefetchLink
      href={href ?? `/community/${community.year}/${community.slug}`}
      prefetchOnVisible={true}
    >
      <Card className="group" borderTrail>
        <CardHeader>
          <div className="relative w-full h-48 overflow-hidden rounded-md">
            <Image
              src={
                community.image ||
                generateArticlePlaceholderImage(community.title)
              }
              alt={community.title}
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
                <span>{formatDate(community.date)}</span>
              </div>
              <div className="flex items-center gap-1">
                <Eye className="size-3" />
                <span>{community.readTime} min read</span>
              </div>
            </div>

            <div className="grid gap-0.5 mb-1.5">
              <h2 className="text-md font-medium group-hover:text-primary transition-colors">
                {community.title}
              </h2>
              <p className="text-muted-foreground text-sm line-clamp-2">
                {truncate(community.description, 160)}
              </p>
            </div>

            <div className="flex flex-wrap gap-1.5">
              {community.type && (
                <ContributionTypeBadge type={community.type} />
              )}
              {community.youtubeUrl && (
                <Badge variant="secondary" className="text-xs">
                  <Youtube className="size-3 mr-1" />
                  Video
                </Badge>
              )}
              {community.externalLinks &&
                community.externalLinks.length > 0 && (
                  <Badge variant="secondary" className="text-xs">
                    <ExternalLink className="size-3 mr-1" />
                    {community.externalLinks.length} Link
                    {community.externalLinks.length > 1 ? 's' : ''}
                  </Badge>
                )}
            </div>
          </div>
        </CardContent>
      </Card>
    </PrefetchLink>
  );
}
