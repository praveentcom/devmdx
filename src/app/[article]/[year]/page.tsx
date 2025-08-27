import { ArrowLeft, CalendarRange } from "lucide-react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { ArticleSummaryCard } from "@/components/article/ArticleSummaryCard";
import { BackButton } from "@/components/ui/common";
import EmptyPlaceholderCard from "@/components/ui/empty-placeholder-card";
import { URLS } from "@/lib/constants/urls";
import { getAllArticlesIndex } from "@/lib/helpers/article";
import { getArticleLabel } from "@/lib/helpers/config";
import { createFilteredMetadata } from "@/lib/helpers/metadata";

interface PageProps {
  params: Promise<{
    year: string;
  }>;
}

export default async function ArticlesByYearPage({ params }: PageProps) {
  const { year } = await params;
  const articles = getAllArticlesIndex().filter((a) => a.year === year);

  if (articles.length === 0) {
    notFound();
  }

  return (
    <div className="page-container">
      <BackButton
        href={URLS.ARTICLES_LIST()}
        label={`Back to ${getArticleLabel().toLowerCase()}`}
        Icon={ArrowLeft}
      />
      <div className="grid gap-5">
        <div className="grid gap-0.5">
          <div className="flex items-center gap-1.5">
            <CalendarRange className="size-4 text-primary" />
            <h1 className="text-md font-medium">
              {getArticleLabel()} from {year}
            </h1>
          </div>
          <p className="text-sm text-muted-foreground">
            {articles.length} article{articles.length === 1 ? "" : "s"}{" "}
            published in {year}
          </p>
        </div>

        {articles.length > 0 ? (
          <div className="grid gap-4 md:grid-cols-2">
            {articles.map((article) => (
              <ArticleSummaryCard
                key={article.slug}
                article={article}
              />
            ))}
          </div>
        ) : (
          <EmptyPlaceholderCard
            title="No articles published."
            subtitle={`No articles were published in ${year}.`}
          />
        )}
      </div>
    </div>
  );
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { year } = await params;
  const count = getAllArticlesIndex().filter((a) => a.year === year).length;
  return createFilteredMetadata({
    filterName: year,
    contentType: "Articles",
    count,
    colorScheme: { background: "6366f1", text: "ffffff" },
    url: `/articles/${year}`,
  });
}

export async function generateStaticParams() {
  const years = Array.from(new Set(getAllArticlesIndex().map((a) => a.year)));
  return years.map((year) => ({ year }));
}
