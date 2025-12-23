import { Markdown } from "@workspace/ui/components/markdown";
import { StructuredData } from "@workspace/ui/components/structured-data";
import { Metadata } from "next";

import { ArticleSection } from "@/components/article/article-section";
import { getAllArticlesIndex } from "@/components/helpers/article";
import { SITE_DESCRIPTION, SITE_IMAGE } from "@/components/helpers/config";
import { getMdContent } from "@/components/helpers/md-content";
import { createPageMetadata } from "@/components/helpers/metadata";
import { generateDefaultSchema } from "@/components/helpers/structured-data";
import { URLS } from "@/components/helpers/urls";
import { configData } from "@/data/config";

const recentArticles = getAllArticlesIndex(20);
const profileContent = getMdContent("profile/intro.md");

export default function HomePage() {
  return (
    <div>
      <StructuredData data={generateDefaultSchema()} />
      <Markdown content={profileContent ?? ""} />
      <ArticleSection articles={recentArticles} />
    </div>
  );
}

export async function generateMetadata(): Promise<Metadata> {
  const metadata = createPageMetadata({
    description: SITE_DESCRIPTION,
    keywords: configData.seo.keywords,
    url: URLS.HOME(),
    image: SITE_IMAGE,
  });

  return metadata;
}
