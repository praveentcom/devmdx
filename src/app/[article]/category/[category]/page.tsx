import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@workspace/ui/components/breadcrumb";
import { StructuredData } from "@workspace/ui/components/structured-data";
import { plural } from "pluralize";

import { ArticleSummaryCard } from "@/components/article/article-summary-card";
import {
  getAllCategories,
  getArticlesByCategory,
} from "@/components/helpers/article";
import { getArticleLabel } from "@/components/helpers/config";
import {
  createNotFoundMetadata,
  createPageMetadata,
} from "@/components/helpers/metadata";
import { URLS } from "@/components/helpers/urls";

interface PageProps {
  params: Promise<{
    category: string;
  }>;
}

const articleLabel = plural(getArticleLabel());

export default async function CategoryArticlePage({ params }: PageProps) {
  const { category: decodedCategory } = await params;
  const category = decodeURIComponent(decodedCategory);

  const allCategories = getAllCategories();

  if (!allCategories.includes(category)) {
    notFound();
  }

  const filteredArticles = getArticlesByCategory(category);

  return (
    <div>
      <StructuredData
        data={{
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          name: `${category} ${articleLabel}`,
          description: `${filteredArticles.length} ${articleLabel} published in this category.`,
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
              {category} {articleLabel}
            </BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <h3>
        {category} {articleLabel}
      </h3>
      <div className="list-container">
        {filteredArticles.map((article, index) => (
          <ArticleSummaryCard key={index} article={article} />
        ))}
      </div>
    </div>
  );
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { category: decodedCategory } = await params;
  const category = decodeURIComponent(decodedCategory);

  const allCategories = getAllCategories();

  if (!allCategories.includes(category)) {
    return createNotFoundMetadata("Category");
  }

  const filteredArticles = getArticlesByCategory(category);

  const metadata = createPageMetadata({
    title: `${category} ${articleLabel}`,
    description: `${filteredArticles.length} ${articleLabel} published in this category.`,
    keywords: [
      category,
      articleLabel,
      "articles",
      "blog",
      "development",
      "technology",
      "programming",
      "tutorials",
    ],
    url: URLS.ARTICLES_CATEGORY(category),
  });

  return metadata;
}

export async function generateStaticParams() {
  const categoriesWithArticles = getAllCategories();

  return categoriesWithArticles.map((category) => ({
    category: encodeURIComponent(category),
  }));
}
