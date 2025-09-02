import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { CommunityHeader } from "@/components/community/CommunityHeader";
import { BackButton, PageWithStructuredData } from "@/components/ui/common";
import { Markdown } from "@/components/ui/markdown";
import { URLS } from "@/lib/constants/urls";
import {
  getAllCommunitySlugs,
  getCommunityBySlugRaw,
} from "@/lib/helpers/community";
import {
  createNotFoundMetadata,
  createPageMetadata,
} from "@/lib/helpers/metadata";
import { generateCommunitySchema } from "@/lib/helpers/structured-data";

interface PageProps {
  params: Promise<{
    year: string;
    slug: string;
  }>;
}

export default async function CommunityContributionPage({ params }: PageProps) {
  const { slug } = await params;
  const rawCommunity = getCommunityBySlugRaw(slug);

  if (!rawCommunity) {
    notFound();
  }

  const contribution = rawCommunity.meta;

  return (
    <PageWithStructuredData
      structuredData={generateCommunitySchema({
        ...contribution,
        content: rawCommunity.raw,
      })}
    >
      <div className="page-container">
        <BackButton href={URLS.COMMUNITY_LIST()} label="Back to community contributions" />

        <div className="grid min-w-0">
          <CommunityHeader contribution={contribution} />
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

  const metadata = createPageMetadata({
    title: `${community.title}`,
    description: community.description,
    keywords: `${community.title}, community, contributions`,
    publishedTime: new Date(community.date).toISOString(),
    type: "article",
    url: URLS.COMMUNITY(year, community.slug),
    image: community.ogImage || community.image,
  });

  return metadata;
}

export async function generateStaticParams() {
  const contributions = getAllCommunitySlugs();
  return contributions.map((contribution) => ({
    year: contribution.year,
    slug: contribution.slug,
  }));
}
