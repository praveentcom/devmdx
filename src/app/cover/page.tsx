import fs from "node:fs";
import path from "node:path";

import { FileText } from "lucide-react";
import { Metadata } from "next";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { PageWithStructuredData } from "@/components/ui/common";
import EmptyPlaceholderCard from "@/components/ui/empty-placeholder-card";
import { Markdown } from "@/components/ui/markdown";
import { URLS } from "@/lib/constants";
import { getRouteSeoImage } from "@/lib/helpers/config";
import { createPageMetadata } from "@/lib/helpers/metadata";
import { generateDefaultSchema } from "@/lib/helpers/structured-data";

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
    <PageWithStructuredData structuredData={generateDefaultSchema()}>
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
    title: `Cover letter`,
    description:
      "A personalized introduction highlighting my experience and interest in joining your team.",
    keywords:
      "cover letter, introduction, experience, skills, professional, career",
    url: URLS.COVER(),
    image: getRouteSeoImage(URLS.COVER()),
  });

  return metadata;
}
