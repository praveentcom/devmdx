import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@workspace/ui/components/breadcrumb";
import { StructuredData } from "@workspace/ui/components/structured-data";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import pluralize from "pluralize";

import { CommunitySummaryCard } from "@/components/community/community-summary-card";
import { getAllCommunityIndex } from "@/components/helpers/community";
import {
  createNotFoundMetadata,
  createPageMetadata,
} from "@/components/helpers/metadata";
import { URLS } from "@/components/helpers/urls";
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
    <div>
      <StructuredData
        data={{
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          name: `${getTypeLabel(validatedType)}`,
          description: `${contributions.length} ${pluralize("contribution", contributions.length)}`,
        }}
      />
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href={URLS.HOME()}>Home</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href={URLS.COMMUNITY_LIST()}>
              Community
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>{getTypeLabel(validatedType)}</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <h3>{getTypeLabel(validatedType)}</h3>
      <div className="list-container">
        {contributions.map((community) => (
          <CommunitySummaryCard
            key={`${community.year}-${community.slug}`}
            contribution={community}
          />
        ))}
      </div>
    </div>
  );
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { type } = await params;
  if (!isValidType(type)) {
    return createNotFoundMetadata("Community");
  }

  const validatedType = type as EnumCommunityContributionType;
  const typeLabel = getTypeLabel(validatedType);

  const metadata = createPageMetadata({
    title: `${typeLabel}`,
    description: `All ${typeLabel.toLowerCase()} contributions.`,
    keywords: [typeLabel.toLowerCase(), "community"],
    url: `${URLS.COMMUNITY_TYPE(type)}`,
  });

  return metadata;
}

export async function generateStaticParams() {
  const all = getAllCommunityIndex();
  const types = Array.from(new Set(all.map((c) => c.type)));
  return types.map((type) => ({ type }));
}
