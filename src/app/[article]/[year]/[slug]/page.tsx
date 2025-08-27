import { ArrowLeft } from "lucide-react";
import type { Metadata } from "next";
import { headers } from "next/headers";
import { notFound, redirect } from "next/navigation";

import { ArticleHeader } from "@/components/article/ArticleHeader";
import { ArticleMetadata } from "@/components/article/ArticleMetadata";
import { BackButton, PageWithStructuredData } from "@/components/ui/common";
import { Markdown } from "@/components/ui/markdown";
import { getAllArticleSlugs, getArticleBySlugRaw } from "@/lib/helpers/article";
import {
  getArticleLabel,
  getArticleLabelSingular,
  getArticleSlug,
} from "@/lib/helpers/config";
import {
  createNotFoundMetadata,
  METADATA_PATTERNS,
} from "@/lib/helpers/metadata";
import { generateArticleSchema } from "@/lib/helpers/structured-data";

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
      <div className="page-container">
        <BackButton
          href={
            (await headers()).get("x-next-url")?.includes("source=year-range")
              ? `/${getArticleSlug()}/${year}`
              : `/${getArticleSlug()}`
          }
          label={`Back to ${getArticleLabel().toLowerCase()}`}
          Icon={ArrowLeft}
        />

        <div className="grid md:grid-cols-12 gap-5">
          <div className="md:col-span-9 grid gap-1.5">
            <ArticleHeader article={article} />
            <div className="space-y-4">
              <Markdown content={rawArticle.raw} muted />
            </div>
          </div>

          <div className="md:col-span-3">
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
    return createNotFoundMetadata(getArticleLabelSingular());
  }

  const article = rawArticle.meta;
  const { year } = await params;
  return METADATA_PATTERNS.article(
    article.title,
    article.description,
    article.image,
    new Date(article.date).toISOString(),
    `/${getArticleSlug()}/${year}/${article.slug}`,
    article.private,
  );
}

export async function generateStaticParams() {
  return getAllArticleSlugs().map((a) => ({ year: a.year, slug: a.slug }));
}
