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
import { notFound } from "next/navigation";
import { plural } from "pluralize";

import { ArticleSummaryCard } from "@/components/article/article-summary-card";
import { getAllArticlesIndex } from "@/components/helpers/article";
import { getArticleLabel } from "@/components/helpers/config";
import { createPageMetadata } from "@/components/helpers/metadata";
import { URLS } from "@/components/helpers/urls";

interface PageProps {
  params: Promise<{
    year: string;
  }>;
}

const articleLabel = plural(getArticleLabel());

export default async function ArticlesByYearPage({ params }: PageProps) {
  const { year } = await params;
  const articles = getAllArticlesIndex().filter((a) => a.year === year);

  if (articles.length === 0) {
    notFound();
  }

  return (
    <div>
      <StructuredData
        data={{
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          name: `${year} ${articleLabel}`,
          description: `${articles.length} ${articleLabel} published in ${year}.`,
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
              {year} {articleLabel}
            </BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <h3>
        {year} {articleLabel}
      </h3>
      <div className="list-container">
        {articles.map((article) => (
          <ArticleSummaryCard key={article.slug} article={article} />
        ))}
      </div>
    </div>
  );
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { year } = await params;
  const count = getAllArticlesIndex().filter((a) => a.year === year).length;

  const metadata = createPageMetadata({
    title: `${year} ${articleLabel}`,
    description: `${count} ${articleLabel.toLowerCase()} published in ${year}.`,
    keywords: [
      articleLabel.toLowerCase(),
      year,
      "articles",
      "blog",
      "development",
      "technology",
      "programming",
      "tutorials",
    ],
    url: `${URLS.ARTICLES_YEAR(year)}`,
  });

  return metadata;
}

export async function generateStaticParams() {
  const years = Array.from(new Set(getAllArticlesIndex().map((a) => a.year)));
  return years.map((year) => ({ year }));
}
