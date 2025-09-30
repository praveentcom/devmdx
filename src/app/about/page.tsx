import fs from "node:fs";
import path from "node:path";

import type { Metadata } from "next";
import { Breadcrumb } from "passport-ui/breadcrumb";
import { Card, CardContent } from "passport-ui/card";
import { ContentContainer } from "passport-ui/content-container";
import { EmptyState } from "passport-ui/empty-state";
import { Markdown } from "passport-ui/markdown";
import { StructuredData } from "passport-ui/structured-data";

import { getRouteSeoImage } from "@/components/helpers/config";
import { createPageMetadata } from "@/components/helpers/metadata";
import { generateDefaultSchema } from "@/components/helpers/structured-data";
import { URLS } from "@/components/helpers/urls";

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
    <ContentContainer variant="relaxed">
      <StructuredData data={generateDefaultSchema()} />
      <Breadcrumb
        path={[
          {
            label: "Home",
            href: URLS.HOME(),
          },
          {
            label: "About",
            href: URLS.ABOUT(),
          },
        ]}
      />
      <h2>About</h2>
      {hasAboutFile && aboutContent ? (
        <Card>
          <CardContent>
            <Markdown content={aboutContent} muted />
          </CardContent>
        </Card>
      ) : (
        <EmptyState />
      )}
    </ContentContainer>
  );
}

export async function generateMetadata(): Promise<Metadata> {
  const metadata = createPageMetadata({
    title: "About",
    description:
      "Learn more about my background, experiences, and what drives me professionally and personally.",
    keywords: [
      "about",
      "background",
      "experience",
      "professional",
      "personal",
      "biography",
    ],
    url: URLS.ABOUT(),
    image: getRouteSeoImage(URLS.ABOUT()),
  });

  return metadata;
}
