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
import { BASE_URL, URLS } from "@/lib/constants";
import { PLACEHOLDER_COLORS } from "@/lib/constants/colors";
import { getAuthorName, getSiteName } from "@/lib/helpers/config";
import { generatePlaceholderImageUrl } from "@/lib/helpers/image";

export const metadata: Metadata = {
  title: `${getAuthorName()} | Cover letter`,
  description:
    "A personalized introduction highlighting my experience and interest in joining your team. Learn about my background, skills, and what I can bring to your organization.",
  openGraph: {
    title: "Cover letter",
    description:
      "A personalized introduction highlighting my experience and interest in joining your team.",
    type: "article",
    siteName: getSiteName(),
    url: `${BASE_URL}/cover`,
    images: [
      {
        url: generatePlaceholderImageUrl({
          text: "Cover letter",
          backgroundColor: PLACEHOLDER_COLORS.INFO,
          textColor: PLACEHOLDER_COLORS.WHITE,
        }),
        width: 1200,
        height: 630,
        alt: "Cover letter",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Cover letter",
    description:
      "A personalized introduction highlighting my experience and interest in joining your team.",
    images: [
      generatePlaceholderImageUrl({
        text: "Cover letter",
        backgroundColor: PLACEHOLDER_COLORS.INFO,
        textColor: PLACEHOLDER_COLORS.WHITE,
      }),
    ],
  },
  keywords:
    "cover letter, introduction, experience, skills, professional, career",
  authors: [
    {
      name: getAuthorName(),
    },
  ],
};

export default function CoverPage() {
  const coverPath = path.join(
    process.cwd(),
    "data",
    "profile",
    "cover-letter.md",
  );

  let coverContent: string | null = null;
  let hasCoverFile = false;

  try {
    coverContent = fs.readFileSync(coverPath, "utf-8");
    hasCoverFile = true;
  } catch {
    hasCoverFile = false;
  }

  return (
    <PageWithStructuredData
      structuredData={{
        "@context": "https://schema.org",
        "@type": "WebPage",
        name: "Cover letter",
        description:
          "A personalized introduction highlighting my experience and interest in joining your team.",
      }}
    >
      <div className="page-container">
        <div className="grid gap-5">
          <div className="grid">
            <div className="flex items-center gap-1.5">
              <FileText className="size-4 text-primary" />
              <h1 className="text-md font-medium">Cover letter</h1>
            </div>
            <p className="text-sm text-muted-foreground">
              A personalized introduction highlighting my experience and
              interest in joining your team.
            </p>
          </div>

          <div className="space-y-4">
            {hasCoverFile && coverContent ? (
              <Card>
                <CardContent>
                  <Markdown content={coverContent} muted />
                </CardContent>
              </Card>
            ) : (
              <EmptyPlaceholderCard
                title="Cover letter not yet written."
                subtitle="This personalized introduction is currently being crafted. Check back soon for a detailed professional overview."
              >
                <Button variant="outline" asChild>
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
