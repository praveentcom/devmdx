import { Newspaper } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";
import pluralize from "pluralize";

import { ArticleSummaryCard } from "@/components/article/ArticleSummaryCard";
import { Button } from "@/components/ui/button";
import { CategoryBadge } from "@/components/ui/category-badge";
import { PageWithStructuredData } from "@/components/ui/common";
import EmptyPlaceholderCard from "@/components/ui/empty-placeholder-card";
import { YearBadge } from "@/components/ui/year-badge";
import { BASE_URL, URLS } from "@/lib/constants";
import { COLOR_SCHEMES } from "@/lib/constants/colors";
import { getAllArticleSlugs, getAllCategories } from "@/lib/helpers/article";
import {
  getArticleLabel,
  getArticleLabelSingular,
  getAuthorName,
  getSiteName,
} from "@/lib/helpers/config";
import { generatePlaceholderImageUrl } from "@/lib/helpers/image";
import { EnumTag } from "@/lib/helpers/tag-mapper";

const articleLabel = getArticleLabel();
const articleLabelSingular = getArticleLabelSingular();
const authorName = getAuthorName();

export const metadata: Metadata = {
  title: `${authorName} | ${articleLabel}`,
  description: `A collection of ${articleLabel.toLowerCase()} about development, technology, and more. Sharing insights and knowledge from my journey as a developer.`,
  openGraph: {
    title: articleLabel,
    description: `A collection of ${articleLabel.toLowerCase()} about development, technology, and more.`,
    type: "website",
    siteName: getSiteName(),
    url: `${BASE_URL}${URLS.ARTICLES_LIST()}`,
    images: [
      {
        url: generatePlaceholderImageUrl({
          text: articleLabel,
          backgroundColor: COLOR_SCHEMES.ARTICLE.background,
          textColor: COLOR_SCHEMES.ARTICLE.text,
        }),
        width: 1200,
        height: 630,
        alt: articleLabel,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: articleLabel,
    description: `A collection of ${articleLabel.toLowerCase()} about development, technology, and more.`,
    images: [
      generatePlaceholderImageUrl({
        text: articleLabel,
        backgroundColor: COLOR_SCHEMES.ARTICLE.background,
        textColor: COLOR_SCHEMES.ARTICLE.text,
      }),
    ],
  },
  keywords: `${articleLabel.toLowerCase()}, blog, development, technology, programming, tutorials`,
  authors: [
    {
      name: getAuthorName(),
    },
  ],
};

export default function ArticlePage() {
  const publishedArticles = getAllArticleSlugs();
  const tagSet = new Set<EnumTag>();
  publishedArticles.forEach((p) => p.tags.forEach((t) => tagSet.add(t)));
  const allCategories = getAllCategories();

  return (
    <PageWithStructuredData
      structuredData={{
        "@context": "https://schema.org",
        "@type": "CollectionPage",
        name: articleLabel,
        description: `A collection of ${articleLabel.toLowerCase()} about development, technology, and more.`,
      }}
    >
      <div className="page-container">
        <div className="grid gap-5">
          <div className="grid">
            <div className="flex items-center gap-1.5">
              <Newspaper className="size-4 text-primary" />
              <h1 className="text-md font-medium">{articleLabel}</h1>
            </div>
            <p className="text-sm text-muted-foreground">
              {publishedArticles.length > 0
                ? `${publishedArticles.length} ${pluralize(articleLabelSingular.toLowerCase(), publishedArticles.length)} about development, technology, and more.`
                : `No ${articleLabel.toLowerCase()} published yet.`}
            </p>
          </div>

          {/* Categories Filter */}
          {allCategories.length > 0 && (
            <div className="space-y-2">
              <h3 className="text-sm font-medium text-muted-foreground">
                Browse by category
              </h3>
              <div className="flex items-center gap-1.5 flex-wrap">
                {allCategories.map((category) => (
                  <CategoryBadge key={category} category={category} asLink />
                ))}
              </div>
            </div>
          )}

          {/* Year Filter */}
          {publishedArticles.length > 0 &&
          Array.from(new Set(publishedArticles.map((a) => a.year))).length >
            1 ? (
            <div className="space-y-2">
              <h3 className="text-sm font-medium text-muted-foreground">
                Browse by year
              </h3>
              <div className="flex items-center gap-1.5 flex-wrap">
                {Array.from(new Set(publishedArticles.map((a) => a.year))).map(
                  (year) => (
                    <YearBadge key={`${year}-article`} year={year} type="article" asLink />
                  ),
                )}
              </div>
            </div>
          ) : null}

          {publishedArticles.length > 0 ? (
            <div className="grid gap-4 md:grid-cols-2">
              {publishedArticles.map((article) => (
                <ArticleSummaryCard key={article.slug} article={article} />
              ))}
            </div>
          ) : (
            <EmptyPlaceholderCard
              title={`No ${articleLabel.toLowerCase()} yet.`}
              subtitle={`I haven't published any ${articleLabel.toLowerCase()} yet, but I'm working on some great content.`}
            >
              <Button variant="outline" asChild>
                <Link href={URLS.HOME()}>Go home</Link>
              </Button>
            </EmptyPlaceholderCard>
          )}
        </div>
      </div>
    </PageWithStructuredData>
  );
}
