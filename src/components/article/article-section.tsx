import { Button } from "@workspace/ui/components/button";
import { PrefetchLink } from "@workspace/ui/components/prefetch-link";
import { UserRoundPen } from "lucide-react";
import { plural } from "pluralize";

import { ArticleSummaryCard } from "@/components/article/article-summary-card";
import { getArticleLabel } from "@/components/helpers/config";
import { URLS } from "@/components/helpers/urls";
import { ArticleFrontmatter } from "@/types/article";

const articleLabel = plural(getArticleLabel());

export function ArticleSection({
  articles,
}: {
  articles: ArticleFrontmatter[];
}) {
  const showAllArticles = articles.length > 20;

  return (
    <section aria-label={`Recent ${articleLabel.toLowerCase()}`}>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <UserRoundPen className="size-4" />
          <h5>{articleLabel}</h5>
        </div>
        <div className="flex items-center gap-2">
          <PrefetchLink
            href={URLS.RSS_FEED()}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button variant={showAllArticles ? "outline" : "default"} size="sm">
              View RSS feed
            </Button>
          </PrefetchLink>
          {showAllArticles && (
            <PrefetchLink href={URLS.ARTICLES_LIST()}>
              <Button size="sm">View all articles</Button>
            </PrefetchLink>
          )}
        </div>
      </div>
      <div className="list-container">
        {articles.map((article, index) => (
          <ArticleSummaryCard key={index} article={article} />
        ))}
      </div>
    </section>
  );
}
