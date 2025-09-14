import { PencilLine } from "lucide-react";
import Link from "next/link";
import { Button } from "passport-ui/button";
import { PlaceholderCard } from "passport-ui/placeholder-card";
import { plural } from "pluralize";

import { ArticleSummaryCard } from "@/components/article/article-summary-card";
import { ArticleFrontmatter } from "@/components/helpers/article";
import { getArticleLabel } from "@/components/helpers/config";
import { URLS } from "@/components/helpers/urls";

const articleLabel = plural(getArticleLabel());

export function ArticlesSection({
  articles,
}: {
  articles: ArticleFrontmatter[];
}) {
  return (
    <section
      role="region"
      aria-label={`Recent ${articleLabel.toLowerCase()}`}
      className="section-container"
    >
      <div className="flex items-center justify-between gap-1.5 text-muted-foreground">
        <div className="flex items-center gap-1.5">
          <PencilLine className="size-3" />
          <h6>{articleLabel}</h6>
        </div>
        <div className="flex items-center gap-2">
          <Link
            href={URLS.RSS_FEED()}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button>RSS feed {"\u2197"}</Button>
          </Link>
          {articles.length > 2 && (
            <Link href={URLS.ARTICLES_LIST()}>
              <Button>View all &rarr;</Button>
            </Link>
          )}
        </div>
      </div>
      {articles.length > 0 ? (
        <div className="list-container">
          {articles.map((article, index) => (
            <ArticleSummaryCard key={index} article={article} />
          ))}
        </div>
      ) : (
        <PlaceholderCard />
      )}
    </section>
  );
}
