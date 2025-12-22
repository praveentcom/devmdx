import type { Metadata } from "next";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@workspace/ui/components/breadcrumb";
import { ContentContainer } from "@workspace/ui/layouts/content-container";
import { StructuredData } from "@workspace/ui/components/structured-data";
import pluralize from "pluralize";

import { CommunitySummaryCard } from "@/components/community/community-summary-card";
import { getAllCommunityIndex } from "@/components/helpers/community";
import { createPageMetadata } from "@/components/helpers/metadata";
import { URLS } from "@/components/helpers/urls";

interface PageProps {
  params: Promise<{
    year: string;
  }>;
}

export default async function CommunityByYearPage({ params }: PageProps) {
  const { year } = await params;
  const contributions = getAllCommunityIndex().filter((c) => c.year === year);

  return (
    <ContentContainer variant="relaxed">
      <StructuredData
        data={{
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          name: `Contributions from ${year}`,
          description: `${contributions.length} contributions in ${year}.`,
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
            <BreadcrumbPage>{year} contributions</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <div className="section-container">
        <h2>Contributions from {year}</h2>
        <p className="text-muted-foreground">
          {contributions.length}{" "}
          {pluralize("contribution", contributions.length)}
        </p>
      </div>
      <div className="list-container">
        {contributions.map((community) => (
          <CommunitySummaryCard
            key={`${community.year}-${community.slug}`}
            contribution={community}
          />
        ))}
      </div>
    </ContentContainer>
  );
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { year } = await params;
  const count = getAllCommunityIndex().filter((c) => c.year === year).length;

  const metadata = createPageMetadata({
    title: `Contributions from ${year}`,
    description: `${count} contributions in ${year}.`,
    keywords: ["community", year],
    url: `${URLS.COMMUNITY_YEAR(year)}`,
  });

  return metadata;
}

export async function generateStaticParams() {
  const years = Array.from(new Set(getAllCommunityIndex().map((c) => c.year)));
  return years.map((year) => ({ year }));
}
