import { Calendar, HeartHandshake } from "lucide-react";
import type { Metadata } from "next";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@workspace/ui/components/breadcrumb";
import { StructuredData } from "@workspace/ui/components/structured-data";

import { YearButton } from "@/components/common/year-button";
import { CommunitySummaryCard } from "@/components/community/community-summary-card";
import { getAllCommunitySlugs } from "@/components/helpers/community";
import { getMdContent } from "@/components/helpers/md-content";
import { createPageMetadata } from "@/components/helpers/metadata";
import { URLS } from "@/components/helpers/urls";
import { configData } from "@/data/config";
import { Markdown } from "@workspace/ui/components/markdown";

export default function CommunityPage() {
  const publishedContributions = getAllCommunitySlugs();
  const communityContent = getMdContent("community/intro.md");

  return (
    <div>
      <StructuredData
        data={{
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          name: `Community Contributions`,
          description: configData.seo.description || "",
        }}
      />
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href={URLS.HOME()}>Home</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>Community</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <h3>Community</h3>
      <Markdown content={communityContent ?? ""} />
      {publishedContributions.length > 0 &&
        Array.from(new Set(publishedContributions.map((c) => c.year))).length >
          1 && (
          <section aria-label="Browse by year">
            <div className="flex items-center gap-2 text-muted-foreground">
              <Calendar className="size-4" />
              <h5>Browse by year</h5>
            </div>
            <div className="flex items-center gap-2 flex-wrap">
              {Array.from(
                new Set(publishedContributions.map((c) => c.year)),
              ).map((year) => (
                <YearButton
                  key={`${year}-community`}
                  year={year}
                  type="community"
                  asLink
                />
              ))}
            </div>
          </section>
        )}
      {publishedContributions.length > 0 && (
        <section aria-label="Community contributions">
          <div className="flex items-center gap-2">
            <HeartHandshake className="size-4" />
            <h5>Community Contributions</h5>
          </div>
          <div className="list-container">
            {publishedContributions.map((community) => (
              <CommunitySummaryCard
                key={`${community.year}-${community.slug}`}
                contribution={community}
              />
            ))}
          </div>
        </section>
      )}
    </div>
  );
}

export async function generateMetadata(): Promise<Metadata> {
  const metadata = createPageMetadata({
    title: `Community Contributions`,
    description: configData.seo.description || "",
    keywords: [
      "community",
      "talks",
      "presentations",
      "conferences",
      "workshops",
      "speaking",
      "developer community",
    ],
    url: URLS.COMMUNITY_LIST(),
  });

  return metadata;
}
