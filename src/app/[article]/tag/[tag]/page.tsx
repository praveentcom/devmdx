import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@workspace/ui/components/breadcrumb";
import { StructuredData } from "@workspace/ui/components/structured-data";
import type { Metadata } from "next";
import { plural } from "pluralize";

import { ArticleSummaryCard } from "@/components/article/article-summary-card";
import { ImageWithFallback } from "@/components/common/image-with-fallback";
import { getAllArticlesIndex } from "@/components/helpers/article";
import { getArticleLabel } from "@/components/helpers/config";
import { createPageMetadata } from "@/components/helpers/metadata";
import { getTagImagePath } from "@/components/helpers/tag-mapper";
import { URLS } from "@/components/helpers/urls";

interface PageProps {
  params: Promise<{
    tag: string;
  }>;
}

const articleLabel = plural(getArticleLabel());

export default async function TagArticlePage({ params }: PageProps) {
  const { tag: decodedTag } = await params;
  const tag = decodeURIComponent(decodedTag);

  const filteredArticles = getAllArticlesIndex().filter((article) =>
    article.tags.includes(tag),
  );

  return (
    <div>
      <StructuredData
        data={{
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          name: `${tag} ${articleLabel}`,
          description: `${filteredArticles.length} ${articleLabel.toLowerCase()} tagged with ${tag}.`,
        }}
      />
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href={URLS.HOME()}>Home</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href={URLS.ARTICLES_LIST()}>
              {articleLabel}
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>
              {tag} {articleLabel}
            </BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <div className="flex items-center gap-3">
        <ImageWithFallback
          src={getTagImagePath(tag)}
          alt={`${tag} icon`}
          width={20}
          height={20}
          className="shrink-0 size-6"
        />
        <h3>
          {tag} {articleLabel}
        </h3>
      </div>
      <div className="list-container">
        {filteredArticles.map((article, index) => (
          <ArticleSummaryCard key={index} article={article} />
        ))}
      </div>
    </div>
  );
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { tag: decodedTag } = await params;
  const tag = decodeURIComponent(decodedTag);

  const filteredArticles = getAllArticlesIndex().filter((article) =>
    article.tags.includes(tag),
  );

  const metadata = createPageMetadata({
    title: `${tag} ${articleLabel}`,
    description: `${filteredArticles.length} ${articleLabel} tagged with ${tag}.`,
    keywords: [
      tag,
      articleLabel,
      "articles",
      "blog",
      "development",
      "technology",
      "programming",
      "tutorials",
    ],
    url: URLS.ARTICLES_TAG(tag),
  });

  return metadata;
}

export async function generateStaticParams() {
  const tagsWithArticles = new Set<string>();

  getAllArticlesIndex().forEach((article) =>
    article.tags.forEach((tag) => tagsWithArticles.add(tag)),
  );

  return Array.from(tagsWithArticles).map((tag) => ({ tag }));
}
