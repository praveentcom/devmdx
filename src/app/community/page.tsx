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
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import pluralize from "pluralize";
import { PageWithStructuredData } from "@/components/ui/common";
import { EnumCommunityContributionType } from "@/types/community";

export const metadata: Metadata = {
  title: `${profileData.profile.firstName} ${profileData.profile.lastName} | Community contributions`,
  description: communityData.description,
  openGraph: {
    title: "Community contributions",
    description: communityData.description,
    type: "website",
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
    description: communityData.description,
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

  const heroImageUrl = generateCommunityPlaceholderImage(communityData.title);

  return (
    <PageWithStructuredData
      structuredData={{
        "@context": "https://schema.org",
        "@type": "CollectionPage",
        name: "Community contributions",
        description: communityData.description,
      }}
    >
      <div className="container mx-auto px-4 py-4 sm:py-2 max-w-6xl">
        <div className="grid gap-6">
          {/* Hero Section */}
          <Card className="card-shadow">
            <CardContent>
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-center">
                {/* Image - 1/3 */}
                <div className="lg:col-span-1">
                  <div className="w-full rounded-lg overflow-hidden">
                    <Image
                      src={heroImageUrl}
                      alt={communityData.title}
                      width={400}
                      height={0}
                      className="w-full h-auto object-contain"
                      sizes="(max-width: 768px) 100vw, 33vw"
                      priority
                    />
                  </div>
                </div>

                {/* Content - 2/3 */}
                <div className="lg:col-span-2 space-y-4">
                  <div className="grid gap-1">
                    <div className="flex items-center gap-2">
                      <h1 className="text-lg font-semibold">
                        {communityData.title}
                      </h1>
                    </div>
                    <p className="text-muted-foreground text-sm">
                      {communityData.description}
                    </p>
                  </div>

                  <div className="flex items-center gap-2 text-xs">
                    {talks.length > 0 && (
                      <div className="flex items-center gap-1 bg-primary/10 px-2.5 py-1 rounded-md">
                        <MicVocal className="icon-xs text-primary" />
                        <span className="font-medium">
                          {talks.length} {pluralize("talk", talks.length)}
                        </span>
                      </div>
                    )}
                    {workshops.length > 0 && (
                      <div className="flex items-center gap-1 bg-primary/10 px-2.5 py-1 rounded-md">
                        <Presentation className="icon-xs text-primary" />
                        <span className="font-medium">
                          {workshops.length}{" "}
                          {pluralize("workshop", workshops.length)}
                        </span>
                      </div>
                    )}
                    {courses.length > 0 && (
                      <div className="flex items-center gap-1 bg-primary/10 px-2.5 py-1 rounded-md">
                        <MonitorPlay className="icon-xs text-primary" />
                        <span className="font-medium">
                          {courses.length} {pluralize("course", courses.length)}
                        </span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Contributions Grid */}
          <div className="grid gap-5">
            <div className="grid">
              <div className="flex items-center gap-2">
                <Users className="size-5 text-primary cursor-pointer" />
                <h1 className="text-lg font-semibold">
                  Community contributions
                </h1>
              </div>
              <p className="text-sm text-muted-foreground">
                List of talk sessions, workshops and more.
              </p>
            </div>

            {/* Browse by year */}
            {publishedContributions.length > 0 ? (
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
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {publishedContributions.map((community) => (
                  <CommunitySummaryCard
                    key={`${community.year}-${community.slug}`}
                    community={community}
                  />
                ))}
              </div>
            ) : (
              <EmptyPlaceholderCard
                title="No community contributions yet"
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
