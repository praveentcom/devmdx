import { ArrowLeft, Filter } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { CommunitySummaryCard } from "@/components/community/CommunitySummaryCard";
import { BackButton } from "@/components/ui/common";
import EmptyPlaceholderCard from "@/components/ui/empty-placeholder-card";
import { URLS } from "@/lib/constants";
import { getAllCommunityIndex } from "@/lib/helpers/community";
import { getSiteName } from "@/lib/helpers/config";
import { EnumCommunityContributionType } from "@/types/community";

interface PageProps {
  params: Promise<{
    type: string;
  }>;
}

function isValidType(
  value: string,
): value is `${EnumCommunityContributionType}` {
  return Object.values(EnumCommunityContributionType).includes(
    value as EnumCommunityContributionType,
  );
}

function getTypeLabel(value: EnumCommunityContributionType) {
  switch (value) {
    case EnumCommunityContributionType.TALK_SESSION:
      return "Talk sessions";
    case EnumCommunityContributionType.WORKSHOP:
      return "Workshops";
    case EnumCommunityContributionType.ONLINE_COURSE:
      return "Online courses";
  }
}

export default async function CommunityByTypePage({ params }: PageProps) {
  const { type } = await params;
  if (!isValidType(type)) {
    notFound();
  }

  const validatedType = type as EnumCommunityContributionType;
  const contributions = getAllCommunityIndex().filter(
    (c) => c.type === validatedType,
  );

  return (
    <div className="page-container">
      <BackButton
        href={URLS.COMMUNITY_LIST()}
        label="Back to contributions"
        Icon={ArrowLeft}
      />
      <div className="grid gap-5">
        <div className="grid gap-0.5">
          <div className="flex items-center gap-1.5">
            <Filter className="size-4 text-primary" />
            <h1 className="text-md font-medium">
              {getTypeLabel(validatedType)}
            </h1>
          </div>
          <p className="text-sm text-muted-foreground">
            {contributions.length}{" "}
            {contributions.length === 1 ? "item" : "items"}
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
            subtitle={`No contributions were found for ${getTypeLabel(validatedType)}.`}
          >
            <Link
              href={URLS.COMMUNITY_LIST()}
              className="text-sm text-primary underline"
            >
              Browse all
            </Link>
          </EmptyPlaceholderCard>
        )}
      </div>
    </div>
  );
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { type } = await params;
  if (!isValidType(type)) {
    return {};
  }
  const validatedType = type as EnumCommunityContributionType;
  const typeLabel = getTypeLabel(validatedType);
  return {
    title: `${typeLabel} | Community contributions`,
    description: `All community contributions categorized as ${typeLabel.toLowerCase()}.`,
    openGraph: {
      title: `${typeLabel} | Community contributions`,
      description: `All community contributions categorized as ${typeLabel.toLowerCase()}.`,
      type: "website",
      siteName: getSiteName(),
      url: `${URLS.COMMUNITY_TYPE(type)}`,
    },
  };
}

export async function generateStaticParams() {
  const all = getAllCommunityIndex();
  const types = Array.from(new Set(all.map((c) => c.type)));
  return types.map((type) => ({ type }));
}
