import { MicVocal, MonitorPlay, Presentation } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";
import pluralize from "pluralize";

import { CommunitySummaryCard } from "@/components/community/CommunitySummaryCard";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { PageWithStructuredData } from "@/components/ui/common";
import EmptyPlaceholderCard from "@/components/ui/empty-placeholder-card";
import { YearBadge } from "@/components/ui/year-badge";
import { communityData } from "@/data/community";
import { URLS } from "@/lib/constants";
import { getAllCommunitySlugs } from "@/lib/helpers/community";
import { getRouteSeoImage } from "@/lib/helpers/config";
import { createPageMetadata } from "@/lib/helpers/metadata";
import { EnumCommunityContributionType } from "@/types/community";

export default function CommunityPage() {
  const publishedContributions = getAllCommunitySlugs();
  const talks = publishedContributions.filter(
    (c) => c.type === EnumCommunityContributionType.TALK_SESSION,
  );
  const workshops = publishedContributions.filter(
    (c) => c.type === EnumCommunityContributionType.WORKSHOP,
  );
  const courses = publishedContributions.filter(
    (c) => c.type === EnumCommunityContributionType.ONLINE_COURSE,
  );

  return (
    <PageWithStructuredData
      structuredData={{
        "@context": "https://schema.org",
        "@type": "CollectionPage",
        name: `Community contributions`,
        description: communityData.descriptionLine1,
        image: communityData.image,
      }}
    >
      <div className="page-container">
        <div className="grid gap-5">
          <Card>
            <CardContent>
              <div className="grid gap-5">
                <div className="grid gap-3">
                  <h1 className="text-md font-medium">{communityData.title}</h1>
                  <p className="text-muted-foreground text-sm">
                    {communityData.descriptionLine1}
                  </p>
                  <p className="text-muted-foreground text-sm">
                    {communityData.descriptionLine2}
                  </p>
                </div>
                <div className="flex items-center gap-1.5 text-xs">
                  {talks.length > 0 && (
                    <div className="flex items-center gap-1 bg-primary/10 px-2.5 py-1 rounded-sm">
                      <MicVocal className="size-3 text-primary" />
                      <span className="font-medium">
                        {talks.length} {pluralize("talk", talks.length)}
                      </span>
                    </div>
                  )}
                  {workshops.length > 0 && (
                    <div className="flex items-center gap-1 bg-primary/10 px-2.5 py-1 rounded-sm">
                      <Presentation className="size-3 text-primary" />
                      <span className="font-medium">
                        {workshops.length}{" "}
                        {pluralize("workshop", workshops.length)}
                      </span>
                    </div>
                  )}
                  {courses.length > 0 && (
                    <div className="flex items-center gap-1 bg-primary/10 px-2.5 py-1 rounded-sm">
                      <MonitorPlay className="size-3 text-primary" />
                      <span className="font-medium">
                        {courses.length} {pluralize("course", courses.length)}
                      </span>
                    </div>
                  )}
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Contributions Grid */}
          <div className="grid gap-5">
            {/* Browse by year */}
            {publishedContributions.length > 0 &&
            Array.from(new Set(publishedContributions.map((c) => c.year)))
              .length > 1 ? (
              <div className="flex items-center gap-1.5 flex-wrap">
                {Array.from(
                  new Set(publishedContributions.map((c) => c.year)),
                ).map((year) => (
                  <YearBadge
                    key={`${year}-community`}
                    year={year}
                    type="community"
                    asLink
                  />
                ))}
              </div>
            ) : null}

            {publishedContributions.length > 0 ? (
              <div className="grid gap-4 md:grid-cols-2">
                {publishedContributions.map((community) => (
                  <CommunitySummaryCard
                    key={`${community.year}-${community.slug}`}
                    contribution={community}
                  />
                ))}
              </div>
            ) : (
              <EmptyPlaceholderCard
                title="No community contributions yet."
                subtitle="I haven't shared any talks or presentations yet, but I'm working on some great content to share with the community."
              >
                <Button variant="outline" size={"xs"} asChild>
                  <Link href={URLS.HOME()}>Go home</Link>
                </Button>
              </EmptyPlaceholderCard>
            )}
          </div>
        </div>
      </div>
    </PageWithStructuredData>
  );
}

export async function generateMetadata(): Promise<Metadata> {
  const metadata = createPageMetadata({
    title: `Community contributions`,
    description: communityData.descriptionLine1,
    keywords: `community, talks, presentations, conferences, workshops, speaking, developer community`,
    url: URLS.COMMUNITY_LIST(),
    image: getRouteSeoImage(URLS.COMMUNITY_LIST()),
  });

  return metadata;
}
