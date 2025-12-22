"use client";

import { PrefetchLink } from "@workspace/ui/components/prefetch-link";

import { CommunityIndexItem } from "@/components/helpers/community";
import { formatDate } from "@/components/helpers/date";
import { URLS } from "@/components/helpers/urls";

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
      <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2 group">
        <p className="text-sm sm:text-base sm:min-w-24 text-muted-foreground group-hover:text-foreground">
          {formatDate(contribution.date)}
        </p>
        <p className="group-hover:underline text-foreground underline-offset-4 decoration-muted-foreground/50 sm:line-clamp-1">
          {contribution.title}
        </p>
      </div>
    </PrefetchLink>
  );
}
