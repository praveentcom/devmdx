import fs from "node:fs";
import path from "node:path";

import { Metadata } from "next";
import { Breadcrumb } from "passport-ui/breadcrumb";
import { ContentContainer } from "passport-ui/content-container";
import { EmptyState } from "passport-ui/empty-state";
import { Markdown } from "passport-ui/markdown";
import { StructuredData } from "passport-ui/structured-data";

import { getRouteSeoImage } from "@/components/helpers/config";
import { createPageMetadata } from "@/components/helpers/metadata";
import { generateDefaultSchema } from "@/components/helpers/structured-data";
import { URLS } from "@/components/helpers/urls";

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
    <ContentContainer variant="relaxed">
      <StructuredData data={generateDefaultSchema()} />
      <Breadcrumb
        path={[
          {
            label: "Home",
            href: URLS.HOME(),
          },
          {
            label: "Cover letter",
            href: URLS.COVER(),
          },
        ]}
      />
      <h2>Cover letter</h2>
      {hasCoverFile && coverContent ? (
        <Markdown content={coverContent} muted />
      ) : (
        <EmptyState />
      )}
    </ContentContainer>
  );
}

export async function generateMetadata(): Promise<Metadata> {
  const metadata = createPageMetadata({
    title: `Cover letter`,
    description:
      "A personalized introduction highlighting my experience and interest in joining your team.",
    keywords: [
      "cover letter",
      "introduction",
      "experience",
      "skills",
      "professional",
      "career",
    ],
    url: URLS.COVER(),
    image: getRouteSeoImage(URLS.COVER()),
  });

  return metadata;
}
