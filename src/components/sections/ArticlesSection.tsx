import { Button } from "@/components/ui/button";
import { ArrowRight, Newspaper } from "lucide-react";
import Link from "next/link";
import { ArticleSummaryCard } from "../article/ArticleSummaryCard";
import EmptyPlaceholderCard from "@/components/ui/empty-placeholder-card";
import { getAllArticlesIndex } from "@/lib/helpers/article";
import { BlurIn } from "@/components/motion-primitives/blur-in";

export function ArticlesSection() {
  const publishedArticles = getAllArticlesIndex();
  const recentArticles = publishedArticles.slice(0, 3);

  return (
    <BlurIn delay={0.2} duration={0.8}>
      <section role="region" aria-label="Recent articles" className="space-y-4">
        <div className="flex items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <Newspaper className="size-5 text-primary" />
            <h2 className="text-md font-semibold">Recent articles</h2>
          </div>
          <Button variant="outline" size="sm" asChild>
            <Link href="/articles" className="flex items-center gap-2">
              View articles
              <ArrowRight className="icon-sm" />
            </Link>
          </Button>
        </div>

        {recentArticles.length > 0 ? (
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {recentArticles.map((article, index) => (
              <BlurIn key={index} delay={0.3 + index * 0.1} duration={0.6}>
                <ArticleSummaryCard article={article} />
              </BlurIn>
            ))}
          </div>
        ) : (
          <EmptyPlaceholderCard
            title="No articles yet"
            subtitle="I haven't published any articles yet, but I'm working on some great content."
          />
        )}
      </section>
    </BlurIn>
  );
}
