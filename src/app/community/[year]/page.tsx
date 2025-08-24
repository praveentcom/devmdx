import { notFound } from "next/navigation";
import { ArrowLeft, CalendarRange } from "lucide-react";
import { BackButton } from "@/components/ui/common";
import type { Metadata } from "next";
import { CommunitySummaryCard } from "@/components/community/CommunitySummaryCard";
import EmptyPlaceholderCard from "@/components/ui/empty-placeholder-card";
import { getAllCommunityIndex } from "@/lib/helpers/community";
import { createFilteredMetadata } from "@/lib/helpers/metadata";

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
    <div className="container mx-auto px-4 py-4 sm:py-2 max-w-6xl">
      <BackButton
        href="/community"
        label="Back to contributions"
        Icon={ArrowLeft}
      />
      <div className="grid gap-5">
        <div className="grid gap-0.5">
          <div className="flex items-center gap-2">
            <CalendarRange className="size-4 text-primary" />
            <h1 className="text-lg font-semibold">
              Community contributions from {year}
            </h1>
          </div>
          <p className="text-sm text-muted-foreground">
            {contributions.length} contribution
            {contributions.length === 1 ? "" : "s"} in {year}
          </p>
        </div>

        {contributions.length > 0 ? (
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {contributions.map((community) => (
              <CommunitySummaryCard
                key={`${community.year}-${community.slug}`}
                community={community}
                href={`/community/${year}/${community.slug}?source=year-range`}
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
  return createFilteredMetadata({
    filterName: year,
    contentType: "Community",
    count,
    colorScheme: { background: "0ea5e9", text: "ffffff" },
    url: `/community/${year}`,
  });
}

export async function generateStaticParams() {
  const years = Array.from(new Set(getAllCommunityIndex().map((c) => c.year)));
  return years.map((year) => ({ year }));
}
