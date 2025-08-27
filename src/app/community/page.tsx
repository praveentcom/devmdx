import { Button } from "@/components/ui/button";
import Link from "next/link";
import { CommunitySummaryCard } from "@/components/community/CommunitySummaryCard";
import { Users, Presentation, MicVocal, MonitorPlay } from "lucide-react";
import EmptyPlaceholderCard from "@/components/ui/empty-placeholder-card";
import { getAllCommunitySlugs } from "@/lib/helpers/community";
import type { Metadata } from "next";
import { profileData } from "@/data/profile";
import {
  generateCommunityPlaceholderImage,
  generatePlaceholderImageUrl,
} from "@/lib/helpers/image";
import { COLOR_SCHEMES } from "@/lib/constants/colors";
import { communityData } from "@/data/community";
import { Card, CardContent } from "@/components/ui/card";
import pluralize from "pluralize";
import { PageWithStructuredData } from "@/components/ui/common";
import { EnumCommunityContributionType } from "@/types/community";
import { BASE_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: `${profileData.profile.firstName} ${profileData.profile.lastName} | Community contributions`,
  description: communityData.descriptionLine1,
  openGraph: {
    title: "Community contributions",
    description: communityData.descriptionLine1,
    type: "website",
    siteName: `${profileData.profile.firstName} ${profileData.profile.lastName}`,
    url: `${BASE_URL}/community`,
    images: [
      {
        url: generatePlaceholderImageUrl({
          text: "Community",
          backgroundColor: COLOR_SCHEMES.COMMUNITY.background,
          textColor: COLOR_SCHEMES.COMMUNITY.text,
        }),
        width: 1200,
        height: 630,
        alt: "Community contributions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Community contributions",
    description: communityData.descriptionLine1,
    images: [
      generatePlaceholderImageUrl({
        text: "Community contributions",
        backgroundColor: COLOR_SCHEMES.COMMUNITY.background,
        textColor: COLOR_SCHEMES.COMMUNITY.text,
      }),
    ],
  },
  keywords:
    "community, talks, presentations, conferences, workshops, speaking, developer community",
  authors: [
    {
      name: `${profileData.profile.firstName} ${profileData.profile.lastName}`,
    },
  ],
};

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

  const heroImageUrl =
    communityData.image ||
    generateCommunityPlaceholderImage(communityData.title);

  return (
    <PageWithStructuredData
      structuredData={{
        "@context": "https://schema.org",
        "@type": "CollectionPage",
        name: "Community contributions",
        description: communityData.descriptionLine1,
        image: heroImageUrl,
      }}
    >
      <div className="page-container">
        <div className="grid gap-6">
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
                <div className="flex items-center gap-2 text-xs">
                  {talks.length > 0 && (
                    <div className="flex items-center gap-1 bg-primary/10 px-2.5 py-1 rounded-md">
                      <MicVocal className="size-3 text-primary" />
                      <span className="font-medium">
                        {talks.length} {pluralize("talk", talks.length)}
                      </span>
                    </div>
                  )}
                  {workshops.length > 0 && (
                    <div className="flex items-center gap-1 bg-primary/10 px-2.5 py-1 rounded-md">
                      <Presentation className="size-3 text-primary" />
                      <span className="font-medium">
                        {workshops.length}{" "}
                        {pluralize("workshop", workshops.length)}
                      </span>
                    </div>
                  )}
                  {courses.length > 0 && (
                    <div className="flex items-center gap-1 bg-primary/10 px-2.5 py-1 rounded-md">
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
            <div className="grid">
              <div className="flex items-center gap-2">
                <Users className="size-4 text-primary" />
                <h1 className="text-md font-medium">Community contributions</h1>
              </div>
              <p className="text-sm text-muted-foreground">
                List of talk sessions, workshops and more.
              </p>
            </div>

            {/* Browse by year */}
            {publishedContributions.length > 0 &&
            Array.from(new Set(publishedContributions.map((c) => c.year)))
              .length > 1 ? (
              <div className="flex items-center gap-2 flex-wrap">
                {Array.from(
                  new Set(publishedContributions.map((c) => c.year)),
                ).map((year) => (
                  <Link
                    key={year}
                    href={`/community/${year}`}
                    className="text-xs px-2 py-1 rounded-md border hover:bg-accent transition-colors"
                  >
                    {year}
                  </Link>
                ))}
              </div>
            ) : null}

            {publishedContributions.length > 0 ? (
              <div className="grid gap-4 md:grid-cols-2">
                {publishedContributions.map((community) => (
                  <CommunitySummaryCard
                    key={`${community.year}-${community.slug}`}
                    community={community}
                  />
                ))}
              </div>
            ) : (
              <EmptyPlaceholderCard
                title="No community contributions yet."
                subtitle="I haven't shared any talks or presentations yet, but I'm working on some great content to share with the community."
              >
                <Button variant="outline" asChild>
                  <Link href="/">Go home</Link>
                </Button>
              </EmptyPlaceholderCard>
            )}
          </div>
        </div>
      </div>
    </PageWithStructuredData>
  );
}
