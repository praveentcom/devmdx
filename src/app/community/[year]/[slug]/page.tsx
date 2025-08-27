import { ArrowLeft } from "lucide-react";
import type { Metadata } from "next";
import { headers } from "next/headers";
import { notFound } from "next/navigation";

import { CommunityHeader } from "@/components/community/CommunityHeader";
import { CommunityMetadata } from "@/components/community/CommunityMetadata";
import { BackButton, PageWithStructuredData } from "@/components/ui/common";
import { Markdown } from "@/components/ui/markdown";
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
          href={
            (await headers()).get("x-next-url")?.includes("source=year-range")
              ? `/community/${year}`
              : `/community`
          }
          label="Back to contributions"
          Icon={ArrowLeft}
        />

        <div className="grid md:grid-cols-12 gap-5">
          <div className="md:col-span-9 grid gap-1.5">
            <CommunityHeader community={community} />
            <div className="space-y-4">
              <Markdown content={rawCommunity.raw} muted />
            </div>
          </div>

          <div className="md:col-span-3">
            <CommunityMetadata community={community} />
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
