import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArticleSummaryCard } from "@/components/article/ArticleSummaryCard";
import EmptyPlaceholderCard from "@/components/ui/empty-placeholder-card";
import { getArticlesByCategory, getAllCategories } from "@/lib/helpers/article";
import type { Metadata } from "next";
import {
  createNotFoundMetadata,
  METADATA_PATTERNS,
} from "@/lib/helpers/metadata";
import pluralize from "pluralize";
import { BackButton } from "@/components/ui/common";

interface PageProps {
  params: Promise<{
    category: string;
  }>;
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { category } = await params;
  const decodedCategory = decodeURIComponent(category);

  const allCategories = getAllCategories();

  if (!allCategories.includes(decodedCategory)) {
    return createNotFoundMetadata("Category");
  }

  const filteredArticles = getArticlesByCategory(decodedCategory);

  return METADATA_PATTERNS.tagArticles(
    decodedCategory,
    filteredArticles.length,
    `/articles/category/${category}`,
  );
}

export default async function CategoryArticlePage({ params }: PageProps) {
  const { category } = await params;
  const decodedCategory = decodeURIComponent(category);

  const allCategories = getAllCategories();

  if (!allCategories.includes(decodedCategory)) {
    notFound();
  }

  // Filter articles by the specified category
  const filteredArticles = getArticlesByCategory(decodedCategory);

  if (filteredArticles.length === 0) {
    return (
      <div className="page-container">
        <div className="grid gap-5">
          {/* Header with back navigation */}
          <div className="grid gap-0.5">
            <BackButton
              href="/articles"
              label="Back to articles"
              Icon={ArrowLeft}
            />

            <div className="flex items-center gap-3">
              <div className="size-5 bg-primary/10 rounded flex items-center justify-center">
                <span className="text-xs font-medium text-primary">
                  {decodedCategory.charAt(0).toUpperCase()}
                </span>
              </div>
              <h1 className="text-md font-medium">
                {decodedCategory} articles
              </h1>
            </div>

            <p className="text-muted-foreground text-sm">
              No articles found in this category
            </p>
          </div>

          <EmptyPlaceholderCard
            title="No articles found."
            subtitle={`No articles have been published this ${decodedCategory} category yet. Check back later for new content!`}
          >
            <Button variant="outline" asChild>
              <Link href="/articles">articles</Link>
            </Button>
            <Button variant="outline" asChild>
              <Link href="/">Go home</Link>
            </Button>
          </EmptyPlaceholderCard>
        </div>
      </div>
    );
  }

  return (
    <div className="page-container">
      <div className="grid gap-5">
        <div className="grid gap-0.5">
          <div className="flex items-center gap-2">
            <BackButton
              href="/articles"
              label="Back to articles"
              Icon={ArrowLeft}
            />
          </div>

          <div className="flex items-center gap-3">
            <div className="size-5 bg-primary/10 rounded flex items-center justify-center">
              <span className="text-xs font-medium text-primary">
                {decodedCategory.charAt(0).toUpperCase()}
              </span>
            </div>
            <h1 className="text-md font-medium">{decodedCategory} articles</h1>
          </div>

          <p className="text-muted-foreground text-sm">
            {filteredArticles.length > 0
              ? `${filteredArticles.length} ${pluralize("article", filteredArticles.length)} in this category`
              : `No articles found in this category`}
          </p>
        </div>

        {filteredArticles.length > 0 ? (
          <div className="grid gap-4 md:grid-cols-2">
            {filteredArticles.map((article, index) => (
              <ArticleSummaryCard key={index} article={article} />
            ))}
          </div>
        ) : null}
      </div>
    </div>
  );
}

export async function generateStaticParams() {
  const categoriesWithArticles = getAllCategories();

  return categoriesWithArticles.map((category) => ({
    category: encodeURIComponent(category),
  }));
}
