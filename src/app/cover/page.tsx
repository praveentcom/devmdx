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

export const metadata: Metadata = {
  title: `${profileData.profile.firstName} ${profileData.profile.lastName} | Cover letter`,
  description:
    "A personalized introduction highlighting my experience and interest in joining your team. Learn about my background, skills, and what I can bring to your organization.",
  openGraph: {
    title: "Cover letter",
    description:
      "A personalized introduction highlighting my experience and interest in joining your team.",
    type: "article",
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
      name: `${profileData.profile.firstName} ${profileData.profile.lastName}`,
    },
  ],
};

export default function CoverPage() {
  const coverPath = path.join(
    process.cwd(),
    "src",
    "data",
    "profile",
    "cover-letter.md",
  );
  const raw = fs.readFileSync(coverPath, "utf-8");

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
      <div className="container mx-auto px-4 py-4 sm:py-2 max-w-6xl">
        <div className="grid gap-5">
          <div className="grid">
            <div className="flex items-center gap-2">
              <FileText className="size-5 text-primary cursor-pointer" />
              <h1 className="text-lg font-semibold">Cover letter</h1>
            </div>
            <p className="text-sm text-muted-foreground">
              A personalized introduction highlighting my experience and
              interest in joining your team
            </p>
          </div>

          <div className="space-y-4">
            <Card className="card-hover-shadow">
              <CardContent>
                <Markdown content={raw} muted />
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </PageWithStructuredData>
  );
}
