import { Calendar, HeartHandshake } from "lucide-react";
import type { Metadata } from "next";
import { ContentContainer } from "passport-ui/content-container";
import { PlaceholderCard } from "passport-ui/placeholder-card";
import { StructuredData } from "passport-ui/structured-data";

import { YearButton } from "@/components/common/year-button";
import { CommunitySummaryCard } from "@/components/community/community-summary-card";
import { getAllCommunitySlugs } from "@/components/helpers/community";
import { getRouteSeoImage } from "@/components/helpers/config";
import { createPageMetadata } from "@/components/helpers/metadata";
import { URLS } from "@/components/helpers/urls";
import { communityData } from "@/data/community";

export default function CommunityPage() {
  const publishedContributions = getAllCommunitySlugs();

  return (
    <ContentContainer
      variant="relaxed"
      backButton={{
        href: URLS.HOME(),
        label: "Home",
      }}
    >
      <StructuredData
        data={{
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          name: `Community contributions`,
          description: communityData.descriptionLine1,
          image: communityData.image,
        }}
      />
      <div className="section-container">
        <h2>{communityData.title}</h2>
        <div className="meta-container text-muted-foreground">
          <p>{communityData.descriptionLine1}</p>
          <p>{communityData.descriptionLine2}</p>
        </div>
      </div>
      {publishedContributions.length > 0 &&
      Array.from(new Set(publishedContributions.map((c) => c.year))).length >
        1 ? (
        <div className="section-container">
          <div className="flex items-center gap-1.5">
            <Calendar className="size-3 text-muted-foreground" />
            <h6>Browse by year</h6>
          </div>
          <div className="flex items-center gap-2 flex-wrap">
            {Array.from(new Set(publishedContributions.map((c) => c.year))).map(
              (year) => (
                <YearButton
                  key={`${year}-community`}
                  year={year}
                  type="community"
                  asLink
                />
              ),
            )}
          </div>
        </div>
      ) : null}
      {publishedContributions.length > 0 ? (
        <div className="section-container">
          <div className="flex items-center gap-1.5">
            <HeartHandshake className="size-3 text-muted-foreground" />
            <h6>All community contributions</h6>
          </div>
          <div className="list-container">
            {publishedContributions.map((community) => (
              <CommunitySummaryCard
                key={`${community.year}-${community.slug}`}
                contribution={community}
              />
            ))}
          </div>
        </div>
      ) : (
        <PlaceholderCard />
      )}
    </ContentContainer>
  );
}

export async function generateMetadata(): Promise<Metadata> {
  const metadata = createPageMetadata({
    title: `Community contributions`,
    description: communityData.descriptionLine1,
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
    image: getRouteSeoImage(URLS.COMMUNITY_LIST()),
  });

  return metadata;
}
