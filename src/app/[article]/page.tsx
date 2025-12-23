import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@workspace/ui/components/breadcrumb";
import { Button } from "@workspace/ui/components/button";
import { PrefetchLink } from "@workspace/ui/components/prefetch-link";
import { StructuredData } from "@workspace/ui/components/structured-data";
import { Calendar, Folders, UserRoundPen } from "lucide-react";
import type { Metadata } from "next";
import { plural } from "pluralize";

import { ArticleCategoryButton } from "@/components/article/article-category-button";
import { ArticleSummaryCard } from "@/components/article/article-summary-card";
import { YearButton } from "@/components/common/year-button";
import {
  getAllArticleSlugs,
  getAllCategories,
} from "@/components/helpers/article";
import { getArticleLabel } from "@/components/helpers/config";
import { createPageMetadata } from "@/components/helpers/metadata";
import { URLS } from "@/components/helpers/urls";

const articleLabel = plural(getArticleLabel());

export default function ArticlesListPage() {
  const publishedArticles = getAllArticleSlugs();

  const tagSet = new Set<string>();
  publishedArticles.forEach((p) => p.tags.forEach((t) => tagSet.add(t)));

  const allCategories = getAllCategories();

  return (
    <div>
      <StructuredData
        data={{
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          name: `${articleLabel}`,
          description: `A collection of ${articleLabel.toLowerCase()} about development, technology, and more.`,
        }}
      />
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href={URLS.HOME()}>Home</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>{articleLabel}</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <div className="flex justify-between items-center">
        <h3>{articleLabel}</h3>
        <PrefetchLink
          href={URLS.RSS_FEED()}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button>View RSS feed</Button>
        </PrefetchLink>
      </div>
      {allCategories.length > 0 && (
        <section aria-label="Browse by category">
          <div className="flex items-center gap-2 text-muted-foreground">
            <Folders className="size-4" />
            <h5>Browse by category</h5>
          </div>
          <div className="flex items-center gap-2 flex-wrap">
            {allCategories.map((category) => (
              <ArticleCategoryButton
                key={category}
                category={category}
                count={
                  publishedArticles.filter((a) =>
                    a.categories.includes(category),
                  ).length
                }
                asLink
              />
            ))}
          </div>
        </section>
      )}
      {publishedArticles.length > 0 &&
        Array.from(new Set(publishedArticles.map((a) => a.year))).length >
          1 && (
          <section aria-label="Browse by year">
            <div className="flex items-center gap-2 text-muted-foreground">
              <Calendar className="size-4" />
              <h5>Browse by year</h5>
            </div>
            <div className="flex items-center gap-2 flex-wrap">
              {Array.from(new Set(publishedArticles.map((a) => a.year))).map(
                (year) => (
                  <YearButton
                    key={`${year}-article`}
                    year={year}
                    type="article"
                    asLink
                  />
                ),
              )}
            </div>
          </section>
        )}
      {publishedArticles.length > 0 && (
        <section aria-label="All articles">
          <div className="flex items-center gap-2 text-muted-foreground">
            <UserRoundPen className="size-4" />
            <h5>All {articleLabel}</h5>
          </div>
          <div className="list-container">
            {publishedArticles.map((article) => (
              <ArticleSummaryCard key={article.slug} article={article} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
}

export async function generateMetadata(): Promise<Metadata> {
  const metadata = createPageMetadata({
    title: `${articleLabel}`,
    description: `A collection of ${articleLabel.toLowerCase()} about development, technology, and more.`,
    type: "website",
    keywords: [
      articleLabel.toLowerCase(),
      "blog",
      "development",
      "technology",
      "programming",
      "tutorials",
    ],
    url: URLS.ARTICLES_LIST(),
  });

  return metadata;
}
