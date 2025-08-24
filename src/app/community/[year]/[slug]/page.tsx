import { ArrowLeft } from "lucide-react";
import { notFound } from "next/navigation";
import { CommunityHeader } from "@/components/community/CommunityHeader";
import { CommunityMetadata } from "@/components/community/CommunityMetadata";
import {
  getAllCommunitySlugs,
  getCommunityBySlugRaw,
} from "@/lib/helpers/community";
import { Markdown } from "@/components/ui/markdown";
import type { Metadata } from "next";
import { PageWithStructuredData, BackButton } from "@/components/ui/common";
import { headers } from "next/headers";
import { generateCommunitySchema } from "@/lib/helpers/structured-data";
import {
  METADATA_PATTERNS,
  createNotFoundMetadata,
} from "@/lib/helpers/metadata";

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
      <div className="container mx-auto px-4 py-4 sm:py-2 max-w-6xl">
        <BackButton
          href={
            (await headers()).get("x-next-url")?.includes("source=year-range")
              ? `/community/${year}`
              : `/community`
          }
          label="Back to contributions"
          Icon={ArrowLeft}
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
          <div className="lg:col-span-8 xl:col-span-9 grid gap-2">
            <CommunityHeader community={community} />
            <div className="space-y-4">
              <Markdown content={rawCommunity.raw} muted />
            </div>
          </div>

          <div className="lg:col-span-4 xl:col-span-3">
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
