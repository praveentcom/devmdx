import { CalendarRange } from "lucide-react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { CommunitySummaryCard } from "@/components/community/CommunitySummaryCard";
import { BackButton } from "@/components/ui/common";
import EmptyPlaceholderCard from "@/components/ui/empty-placeholder-card";
import { URLS } from "@/lib/constants/urls";
import { getAllCommunityIndex } from "@/lib/helpers/community";
import { getRouteSeoImage } from "@/lib/helpers/config";
import { createPageMetadata } from "@/lib/helpers/metadata";

interface PageProps {
  params: Promise<{
    year: string;
  }>;
}

export default async function CommunityByYearPage({ params }: PageProps) {
  const { year } = await params;
  const contributions = getAllCommunityIndex().filter((c) => c.year === year);

  if (contributions.length === 0) {
    notFound();
  }

  return (
    <div className="page-container">
      <BackButton href={URLS.COMMUNITY_LIST()} label="Back to contributions" />
      <div className="grid gap-5">
        <div className="grid gap-0.5">
          <div className="flex items-center gap-1.5">
            <CalendarRange className="size-4 text-primary" />
            <h1 className="text-md font-medium">
              Community contributions from {year}
            </h1>
          </div>
          <p className="text-sm text-muted-foreground">
            {contributions.length} contribution
            {contributions.length === 1 ? "" : "s"} in {year}
          </p>
        </div>

        {contributions.length > 0 ? (
          <div className="grid gap-4 md:grid-cols-2">
            {contributions.map((community) => (
              <CommunitySummaryCard
                key={`${community.year}-${community.slug}`}
                contribution={community}
              />
            ))}
          </div>
        ) : (
          <EmptyPlaceholderCard
            title="No contributions"
            subtitle={`No community contributions were recorded in ${year}.`}
          />
        )}
      </div>
    </div>
  );
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { year } = await params;
  const count = getAllCommunityIndex().filter((c) => c.year === year).length;

  const metadata = createPageMetadata({
    title: `Community contributions from ${year}`,
    description: `${count} community contributions in ${year}.`,
    keywords: `community, contributions, ${year}`,
    url: `${URLS.COMMUNITY_YEAR(year)}`,
    image: getRouteSeoImage(URLS.COMMUNITY_YEAR(year)),
  });

  return metadata;
}

export async function generateStaticParams() {
  const years = Array.from(new Set(getAllCommunityIndex().map((c) => c.year)));
  return years.map((year) => ({ year }));
}
