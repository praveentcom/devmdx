"use client";

import { HeartHandshake } from "lucide-react";
import Link from "next/link";
import { Button } from "passport-ui/button";
import { PlaceholderCard } from "passport-ui/placeholder-card";

import { CommunitySummaryCard } from "@/components/community/community-summary-card";
import { CommunityFrontmatter } from "@/components/helpers/community";
import { URLS } from "@/components/helpers/urls";

export function CommunitySection({
  contributions,
}: {
  contributions: CommunityFrontmatter[];
}) {
  return (
    <section
      role="region"
      aria-label="Community contributions"
      className="section-container"
    >
      <div className="flex items-center justify-between gap-1.5 text-muted-foreground">
        <div className="flex items-center gap-1.5">
          <HeartHandshake className="size-3" />
          <h6>Community contributions</h6>
        </div>
        {contributions.length > 2 && (
          <Link href={URLS.COMMUNITY_LIST()}>
            <Button>View all &rarr;</Button>
          </Link>
        )}
      </div>
      {contributions.length > 0 ? (
        <div className="list-container">
          {contributions.map((contribution, index) => (
            <CommunitySummaryCard key={index} contribution={contribution} />
          ))}
        </div>
      ) : (
        <PlaceholderCard />
      )}
    </section>
  );
}
