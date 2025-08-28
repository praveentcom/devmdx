import fs from "node:fs";
import path from "node:path";

import { FileText } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { PageWithStructuredData } from "@/components/ui/common";
import EmptyPlaceholderCard from "@/components/ui/empty-placeholder-card";
import { Markdown } from "@/components/ui/markdown";
import { URLS } from "@/lib/constants";
import { PLACEHOLDER_COLORS } from "@/lib/constants/colors";
import { getAuthorName, getSiteName } from "@/lib/helpers/config";
import { generatePlaceholderImageUrl } from "@/lib/helpers/image";

const authorName = getAuthorName();

export const metadata: Metadata = {
  title: `${authorName} | About`,
  description:
    "Learn more about my background, experiences, and what drives me professionally and personally.",
  openGraph: {
    title: `${authorName} | About`,
    description:
      "Learn more about my background, experiences, and what drives me professionally and personally.",
    type: "article",
    siteName: getSiteName(),
    url: `${URLS.ABOUT()}`,
    images: [
      {
        url: generatePlaceholderImageUrl({
          text: `${authorName} | About`,
          backgroundColor: PLACEHOLDER_COLORS.INFO,
          textColor: PLACEHOLDER_COLORS.WHITE,
        }),
        width: 1200,
        height: 630,
        alt: `${authorName} | About`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${authorName} | About`,
    description:
      "Learn more about my background, experiences, and what drives me professionally and personally.",
    images: [
      generatePlaceholderImageUrl({
        text: `${authorName} | About`,
        backgroundColor: PLACEHOLDER_COLORS.INFO,
        textColor: PLACEHOLDER_COLORS.WHITE,
      }),
    ],
  },
  keywords: "about, background, experience, professional, personal, biography",
  authors: [
    {
      name: getAuthorName(),
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
    hasAboutFile = false;
  }

  return (
    <PageWithStructuredData
      structuredData={{
        "@context": "https://schema.org",
        "@type": "WebPage",
        name: `${authorName} | About`,
        description:
          "Learn more about my background, experiences, and what drives me professionally and personally.",
      }}
    >
      <div className="page-container">
        <div className="grid gap-5">
          <div className="grid">
            <div className="flex items-center gap-1.5">
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
              <Card>
                <CardContent>
                  <Markdown content={aboutContent} muted />
                </CardContent>
              </Card>
            ) : (
              <EmptyPlaceholderCard
                title="About page not yet written."
                subtitle="This section is currently being crafted. Check back soon to learn more about my background and journey."
              >
                <Button variant="outline" size="sm" asChild>
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
