import { ArrowLeft } from "lucide-react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { CommunityHeader } from "@/components/community/CommunityHeader";
import { CommunityMetadata } from "@/components/community/CommunityMetadata";
import { BackButton, PageWithStructuredData } from "@/components/ui/common";
import { Markdown } from "@/components/ui/markdown";
import { URLS } from "@/lib/constants/urls";
import {
  getAllCommunitySlugs,
  getCommunityBySlugRaw,
} from "@/lib/helpers/community";
import {
  createNotFoundMetadata,
  METADATA_PATTERNS,
} from "@/lib/helpers/metadata";
import { generateCommunitySchema } from "@/lib/helpers/structured-data";

interface PageProps {
  params: Promise<{
    year: string;
    slug: string;
  }>;
}

export default async function CommunityContributionPage({ params }: PageProps) {
  const { slug, year } = await params;
  const rawCommunity = getCommunityBySlugRaw(slug);

  if (!rawCommunity) {
    notFound();
  }

  const community = rawCommunity.meta;

  return (
    <PageWithStructuredData
      structuredData={generateCommunitySchema({
        ...community,
        content: rawCommunity.raw,
        year,
      })}
    >
      <div className="page-container">
        <BackButton
          href={URLS.COMMUNITY_LIST()}
          label="Back to contributions"
          Icon={ArrowLeft}
        />

        <div className="grid gap-1.5 min-w-0">
          <CommunityHeader community={community} />
          <CommunityMetadata community={community} />
          <div className="min-w-0 overflow-hidden">
            <Markdown content={rawCommunity.raw} />
          </div>
        </div>
      </div>
    </PageWithStructuredData>
  );
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const rawCommunity = getCommunityBySlugRaw(slug);

  if (!rawCommunity) {
    return createNotFoundMetadata("Community contributions");
  }

  const community = rawCommunity.meta;
  const { year } = await params;
  return METADATA_PATTERNS.article(
    community.title,
    community.description,
    community.image,
    new Date(community.date).toISOString(),
    `/community/${year}/${community.slug}`,
  );
}

export async function generateStaticParams() {
  const contributions = getAllCommunitySlugs();
  return contributions.map((contribution) => ({
    year: contribution.year,
    slug: contribution.slug,
  }));
}
