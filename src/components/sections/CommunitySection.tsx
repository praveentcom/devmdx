import { Button } from "@/components/ui/button";
import { ArrowRight, Users } from "lucide-react";
import Link from "next/link";
import { CommunitySummaryCard } from "@/components/community/CommunitySummaryCard";
import EmptyPlaceholderCard from "@/components/ui/empty-placeholder-card";
import { getAllCommunityIndex } from "@/lib/helpers/community";
import { AnimatedSectionHeading } from "@/components/ui/animated-section-heading";

export function CommunitySection() {
  const contributions = getAllCommunityIndex();
  const recent = contributions.slice(0, 3);

  return (
    <section
      role="region"
      aria-label="Recent community contributions"
      className="space-y-4"
    >
      <AnimatedSectionHeading
        icon={Users}
        title="Recent contributions"
        delay={0.3}
      >
        <Button variant="outline" size="sm" asChild>
          <Link href="/community" className="flex items-center gap-2">
            View contributions
            <ArrowRight className="icon-sm" />
          </Link>
        </Button>
      </AnimatedSectionHeading>

      {recent.length > 0 ? (
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {recent.map((community, index) => (
            <CommunitySummaryCard key={index} community={community} />
          ))}
        </div>
      ) : (
        <EmptyPlaceholderCard
          title="No community contributions yet"
          subtitle="I haven't shared any talks or presentations yet, but I'm working on some great content to share with the community."
        />
      )}
    </section>
  );
}
