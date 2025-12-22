"use client";

import { PrefetchLink } from "@workspace/ui/components/prefetch-link";

import { formatDate } from "@/components/helpers/date";
import { URLS } from "@/components/helpers/urls";
import { Article } from "@/types/article";

export type ArticleLike = Pick<
  Article,
  | "slug"
  | "title"
  | "description"
  | "date"
  | "readTime"
  | "tags"
  | "categories"
  | "published"
  | "image"
> & { year: string };

export function ArticleSummaryCard({ article }: { article: ArticleLike }) {
  return (
    <PrefetchLink
      href={URLS.ARTICLES(article.year, article.slug)}
      prefetchOnVisible={true}
    >
      <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2 group">
        <p className="text-sm sm:text-base sm:min-w-24 text-muted-foreground group-hover:text-foreground">
          {formatDate(article.date)}
        </p>
        <p className="group-hover:underline underline-offset-4 decoration-muted-foreground/50 sm:line-clamp-1">
          {article.title}
        </p>
      </div>
    </PrefetchLink>
  );
}
