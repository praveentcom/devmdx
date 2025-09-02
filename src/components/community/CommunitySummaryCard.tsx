import { Calendar } from "lucide-react";
import Image from "next/image";

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
          <div className="relative w-full h-48 overflow-hidden rounded-sm">
            <Image
              src={
                contribution.image ||
                generateArticlePlaceholderImage(contribution.title)
              }
              alt={contribution.title}
              fill
              className="object-cover rounded-sm"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
        </CardHeader>
        <CardContent>
          <div className="grid gap-5">
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
                  {truncate(contribution.description, 96)}
                </p>
              </div>
            </div>

            <div className="flex flex-wrap gap-1.5">
              {contribution.type && (
                <ContributionTypeBadge type={contribution.type} />
              )}
            </div>
          </div>
        </CardContent>
      </Card>
    </PrefetchLink>
  );
}
