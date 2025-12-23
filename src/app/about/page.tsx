import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@workspace/ui/components/breadcrumb";
import { Markdown } from "@workspace/ui/components/markdown";
import { StructuredData } from "@workspace/ui/components/structured-data";
import type { Metadata } from "next";

import { getMdContent } from "@/components/helpers/md-content";
import { createPageMetadata } from "@/components/helpers/metadata";
import { generateDefaultSchema } from "@/components/helpers/structured-data";
import { URLS } from "@/components/helpers/urls";

export default function AboutPage() {
  const aboutContent = getMdContent("profile/about.md");

  return (
    <div>
      <StructuredData data={generateDefaultSchema()} />
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href={URLS.HOME()}>Home</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>About</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <h3>About</h3>
      <Markdown content={aboutContent ?? ""} />
    </div>
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
  });

  return metadata;
}
