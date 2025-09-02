import { HeartHandshake } from "lucide-react";
import Link from "next/link";

import { CommunitySummaryCard } from "@/components/community/CommunitySummaryCard";
import { Button } from "@/components/ui/button";
import EmptyPlaceholderCard from "@/components/ui/empty-placeholder-card";
import { URLS } from "@/lib/constants/urls";
import { CommunityFrontmatter } from "@/lib/helpers/community";

export function CommunitySection({
  contributions,
}: {
  contributions: CommunityFrontmatter[];
}) {
  return (
    <section
      role="region"
      aria-label="Community contributions"
      className="w-full grid gap-3"
    >
      <div className="flex items-center justify-between gap-1.5 text-muted-foreground">
        <div className="flex items-center gap-1">
          <HeartHandshake className="size-3.5" />
          <h2 className="text-sm font-medium">Community contributions</h2>
        </div>
        {contributions.length > 2 && (
          <Button variant="outline" size="xs" asChild>
            <Link
              href={URLS.COMMUNITY_LIST()}
              className="flex items-center gap-1"
            >
              View all &rarr;
            </Link>
          </Button>
        )}
      </div>

      {contributions.length > 0 ? (
        <div className="grid gap-4 md:grid-cols-2">
          {contributions.map((contribution, index) => (
            <CommunitySummaryCard key={index} contribution={contribution} />
          ))}
        </div>
      ) : (
        <EmptyPlaceholderCard
          title="No community contributions yet."
          subtitle="I haven't shared any talks or presentations yet, but I'm working on some great content to share with the community."
        />
      )}
    </section>
  );
}
