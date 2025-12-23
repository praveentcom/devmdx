import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@workspace/ui/components/breadcrumb";
import { Markdown } from "@workspace/ui/components/markdown";
import { StructuredData } from "@workspace/ui/components/structured-data";
import type { Metadata } from "next";
import { notFound, redirect } from "next/navigation";

import { CommunityHeader } from "@/components/community/community-header";
import {
  getAllCommunitySlugs,
  getCommunityBySlugRaw,
} from "@/components/helpers/community";
import {
  createNotFoundMetadata,
  createPageMetadata,
} from "@/components/helpers/metadata";
import { generateCommunitySchema } from "@/components/helpers/structured-data";
import { URLS } from "@/components/helpers/urls";

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

  const contribution = rawCommunity.meta;
  const contributionYear = contribution.year;

  if (contributionYear !== year) {
    redirect(`/community/${contributionYear}/${contribution.slug}`);
  }

  return (
    <div>
      <StructuredData
        data={generateCommunitySchema({
          ...contribution,
          content: rawCommunity.raw,
        })}
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
            <BreadcrumbPage>{contribution.title}</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <CommunityHeader contribution={contribution} />
      <hr />
      <Markdown content={rawCommunity.raw} />
    </div>
  );
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const rawCommunity = getCommunityBySlugRaw(slug);

  if (!rawCommunity) {
    return createNotFoundMetadata("Community");
  }

  const community = rawCommunity.meta;
  const { year } = await params;

  const metadata = createPageMetadata({
    title: `${community.title}`,
    description: community.description,
    keywords: [community.title, "community", "contributions"],
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
