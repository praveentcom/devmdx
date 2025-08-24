import { Button } from "@/components/ui/button";
import { ArrowRight, Newspaper } from "lucide-react";
import Link from "next/link";
import { ArticleSummaryCard } from "../article/ArticleSummaryCard";
import EmptyPlaceholderCard from "@/components/ui/empty-placeholder-card";
import { getAllArticlesIndex } from "@/lib/helpers/article";
import { AnimatedSectionHeading } from "@/components/ui/animated-section-heading";

export function ArticlesSection() {
  const publishedArticles = getAllArticlesIndex();
  const recentArticles = publishedArticles.slice(0, 3);

  return (
    <section role="region" aria-label="Recent articles" className="space-y-4">
      <AnimatedSectionHeading
        icon={Newspaper}
        title="Recent articles"
        delay={0.1}
      >
        <Button variant="outline" size="sm" asChild>
          <Link href="/articles" className="flex items-center gap-2">
            View articles
            <ArrowRight className="icon-sm" />
          </Link>
        </Button>
      </AnimatedSectionHeading>

      {recentArticles.length > 0 ? (
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {recentArticles.map((article, index) => (
            <ArticleSummaryCard key={index} article={article} />
          ))}
        </div>
      ) : (
        <EmptyPlaceholderCard
          title="No articles yet"
          subtitle="I haven't published any articles yet, but I'm working on some great content."
        />
      )}
    </section>
  );
}
