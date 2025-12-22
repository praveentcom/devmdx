"use client";

import { HeartHandshake } from "lucide-react";
import { Button } from "@workspace/ui/components/button";
import { PrefetchLink } from "@workspace/ui/components/prefetch-link";

import { CommunitySummaryCard } from "@/components/community/community-summary-card";
import { URLS } from "@/components/helpers/urls";
import { CommunityFrontmatter } from "@/types/community";

export function CommunitySection({
  contributions,
}: {
  contributions: CommunityFrontmatter[];
}) {
  return (
    <section
      role="region"
      aria-label="Community Contributions"
      className="section-container"
    >
      <div className="flex items-center justify-between gap-2 text-muted-foreground">
        <div className="flex items-center gap-2">
          <HeartHandshake className="size-4" />
          <h5>Community Contributions</h5>
        </div>
        {contributions.length > 2 && (
          <PrefetchLink href={URLS.COMMUNITY_LIST()}>
            <Button>View all &rarr;</Button>
          </PrefetchLink>
        )}
      </div>
      <div className="list-container">
        {contributions.map((contribution, index) => (
          <CommunitySummaryCard key={index} contribution={contribution} />
        ))}
      </div>
    </section>
  );
}
