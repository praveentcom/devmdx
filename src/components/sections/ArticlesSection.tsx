import { ArrowRight, Newspaper } from "lucide-react";
import Link from "next/link";

import { ArticleSummaryCard } from "@/components/article/ArticleSummaryCard";
import { Button } from "@/components/ui/button";
import EmptyPlaceholderCard from "@/components/ui/empty-placeholder-card";
import { URLS } from "@/lib/constants/urls";
import { ArticleFrontmatter } from "@/lib/helpers/article";
import { getArticleLabel } from "@/lib/helpers/config";

export function ArticlesSection({
  articles,
}: {
  articles: ArticleFrontmatter[];
}) {
  const articleLabel = getArticleLabel();

  return (
    <section
      role="region"
      aria-label={`Recent ${articleLabel.toLowerCase()}`}
      className="w-full grid gap-3"
    >
      <div className="flex items-center justify-between gap-1.5">
        <div className="flex items-center gap-1.5">
          <Newspaper className="size-4 text-primary" />
          <h2 className="text-md font-medium">
            Recent {articleLabel.toLowerCase()}
          </h2>
        </div>
        {articles.length > 2 && (
          <Button variant="outline" size="sm" asChild>
            <Link
              href={URLS.ARTICLES_LIST()}
              className="flex items-center gap-1.5"
            >
              View all
              <ArrowRight className="size-4" />
            </Link>
          </Button>
        )}
      </div>

      {articles.length > 0 ? (
        <div className="grid gap-4 md:grid-cols-2">
          {articles.map((article, index) => (
            <ArticleSummaryCard key={index} article={article} />
          ))}
        </div>
      ) : (
        <EmptyPlaceholderCard
          title={`No ${articleLabel.toLowerCase()} yet.`}
          subtitle={`I haven't published any ${articleLabel.toLowerCase()} yet, but I'm working on some great content.`}
        />
      )}
    </section>
  );
}
