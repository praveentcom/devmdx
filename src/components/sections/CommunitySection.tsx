import { Button } from "@/components/ui/button";
import { ArrowRight, Users } from "lucide-react";
import Link from "next/link";
import { CommunitySummaryCard } from "@/components/community/CommunitySummaryCard";
import EmptyPlaceholderCard from "@/components/ui/empty-placeholder-card";
import { getAllCommunityIndex } from "@/lib/helpers/community";

export function CommunitySection() {
  const contributions = getAllCommunityIndex();
  const recent = contributions.slice(0, 3);

  return (
    <section
      role="region"
      aria-label="Recent community contributions"
      className="w-full grid gap-3"
    >
      <div className="flex items-center justify-between gap-2">
        <div className="flex items-center gap-2">
          <Users className="size-4 text-primary" />
          <h2 className="text-md font-medium">Recent contributions</h2>
        </div>
        <Button variant="outline" size="sm" asChild>
          <Link href="/community" className="flex items-center gap-2">
            View contributions
            <ArrowRight className="size-4" />
          </Link>
        </Button>
      </div>

      {recent.length > 0 ? (
        <div className="grid gap-4 md:grid-cols-2">
          {recent.map((community, index) => (
            <CommunitySummaryCard key={index} community={community} />
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
