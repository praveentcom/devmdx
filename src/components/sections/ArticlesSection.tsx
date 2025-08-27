import { Button } from "@/components/ui/button";
import { ArrowRight, Newspaper } from "lucide-react";
import Link from "next/link";
import { ArticleSummaryCard } from "../article/ArticleSummaryCard";
import EmptyPlaceholderCard from "@/components/ui/empty-placeholder-card";
import { getAllArticlesIndex } from "@/lib/helpers/article";

export function ArticlesSection() {
  const publishedArticles = getAllArticlesIndex();
  const recentArticles = publishedArticles.slice(0, 3);

  return (
    <section
      role="region"
      aria-label="Recent articles"
      className="w-full grid gap-3"
    >
      <div className="flex items-center justify-between gap-2">
        <div className="flex items-center gap-2">
          <Newspaper className="size-4 text-primary" />
          <h2 className="text-md font-medium">Recent articles</h2>
        </div>
        <Button variant="outline" size="sm" asChild>
          <Link href="/articles" className="flex items-center gap-2">
            View all
            <ArrowRight className="size-4" />
          </Link>
        </Button>
      </div>

      {recentArticles.length > 0 ? (
        <div className="grid gap-4 md:grid-cols-2">
          {recentArticles.map((article, index) => (
            <ArticleSummaryCard key={index} article={article} />
          ))}
        </div>
      ) : (
        <EmptyPlaceholderCard
          title="No articles yet."
          subtitle="I haven't published any articles yet, but I'm working on some great content."
        />
      )}
    </section>
  );
}
