import { FileText } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import fs from "node:fs";
import path from "node:path";
import { Markdown } from "@/components/ui/markdown";
import type { Metadata } from "next";
import { profileData } from "@/data/profile";
import { generatePlaceholderImageUrl } from "@/lib/helpers/image";
import { PLACEHOLDER_COLORS } from "@/lib/constants/colors";
import { PageWithStructuredData } from "@/components/ui/common";
import EmptyPlaceholderCard from "@/components/ui/empty-placeholder-card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { BASE_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: `${profileData.profile.firstName} ${profileData.profile.lastName} | About`,
  description:
    "Learn more about my background, experiences, and what drives me professionally and personally.",
  openGraph: {
    title: "About",
    description:
      "Learn more about my background, experiences, and what drives me professionally and personally.",
    type: "article",
    siteName: `${profileData.profile.firstName} ${profileData.profile.lastName}`,
    url: `${BASE_URL}/about`,
    images: [
      {
        url: generatePlaceholderImageUrl({
          text: "About",
          backgroundColor: PLACEHOLDER_COLORS.INFO,
          textColor: PLACEHOLDER_COLORS.WHITE,
        }),
        width: 1200,
        height: 630,
        alt: "About",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "About",
    description:
      "Learn more about my background, experiences, and what drives me professionally and personally.",
    images: [
      generatePlaceholderImageUrl({
        text: "About",
        backgroundColor: PLACEHOLDER_COLORS.INFO,
        textColor: PLACEHOLDER_COLORS.WHITE,
      }),
    ],
  },
  keywords: "about, background, experience, professional, personal, biography",
  authors: [
    {
      name: `${profileData.profile.firstName} ${profileData.profile.lastName}`,
    },
  ],
};

export default function AboutPage() {
  const aboutPath = path.join(process.cwd(), "data", "profile", "about.md");

  let aboutContent: string | null = null;
  let hasAboutFile = false;

  try {
    aboutContent = fs.readFileSync(aboutPath, "utf-8");
    hasAboutFile = true;
  } catch {
    // File doesn't exist, will show placeholder
    hasAboutFile = false;
  }

  return (
    <PageWithStructuredData
      structuredData={{
        "@context": "https://schema.org",
        "@type": "WebPage",
        name: "About",
        description:
          "Learn more about my background, experiences, and what drives me professionally and personally.",
      }}
    >
      <div className="page-container">
        <div className="grid gap-5">
          <div className="grid">
            <div className="flex items-center gap-2">
              <FileText className="size-4 text-primary" />
              <h1 className="text-md font-medium">About</h1>
            </div>
            <p className="text-sm text-muted-foreground">
              Learn more about my background, experiences, and what drives me
              professionally and personally.
            </p>
          </div>

          <div className="space-y-4">
            {hasAboutFile && aboutContent ? (
              <Card className="card-hover-shadow">
                <CardContent>
                  <Markdown content={aboutContent} muted />
                </CardContent>
              </Card>
            ) : (
              <EmptyPlaceholderCard
                title="About page not yet written."
                subtitle="This section is currently being crafted. Check back soon to learn more about my background and journey."
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
