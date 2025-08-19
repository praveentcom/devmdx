import { ArrowLeft } from "lucide-react";
import { notFound, redirect } from "next/navigation";
import { ArticleHeader } from "@/components/article/ArticleHeader";
import { ArticleMetadata } from "@/components/article/ArticleMetadata";
import { getAllArticleSlugs, getArticleBySlugRaw } from "@/lib/helpers/article";
import { Markdown } from "@/components/ui/markdown";
import type { Metadata } from "next";
import { PageWithStructuredData, BackButton } from "@/components/ui/common";
import { headers } from "next/headers";
import { generateArticleSchema } from "@/lib/helpers/structured-data";
import {
  METADATA_PATTERNS,
  createNotFoundMetadata,
} from "@/lib/helpers/metadata";

interface PageProps {
  params: Promise<{
    year: string;
    slug: string;
  }>;
}

export default async function ArticlePage({ params }: PageProps) {
  const { slug, year } = await params;
  const rawArticle = getArticleBySlugRaw(slug);

  if (!rawArticle) {
    notFound();
  }

  const article = rawArticle.meta;
  const articleYear = article.year;

  if (articleYear !== year) {
    redirect(`/articles/${articleYear}/${article.slug}`);
  }

  return (
    <PageWithStructuredData
      structuredData={generateArticleSchema({
        ...article,
        content: rawArticle.raw,
        slug: article.slug,
        year,
      })}
    >
      <div className="container mx-auto px-4 py-4 sm:py-2 max-w-6xl">
        <BackButton
          href={
            (await headers()).get("x-next-url")?.includes("source=year-range")
              ? `/articles/${year}`
              : `/articles`
          }
          label="Back to articles"
          Icon={ArrowLeft}
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
          <div className="lg:col-span-8 xl:col-span-9 grid gap-2">
            <ArticleHeader article={article} />
            <div className="space-y-4">
              <Markdown content={rawArticle.raw} muted />
            </div>
          </div>

          <div className="lg:col-span-4 xl:col-span-3">
            <ArticleMetadata article={article} />
          </div>
        </div>
      </div>
    </PageWithStructuredData>
  );
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const rawArticle = getArticleBySlugRaw(slug);

  if (!rawArticle) {
    return createNotFoundMetadata("Article");
  }

  const article = rawArticle.meta;
  return METADATA_PATTERNS.article(
    article.title,
    article.description,
    article.image,
    new Date(article.date).toISOString(),
  );
}

export async function generateStaticParams() {
  return getAllArticleSlugs().map((a) => ({ year: a.year, slug: a.slug }));
}
