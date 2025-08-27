import { ArrowLeft } from "lucide-react";
import type { Metadata } from "next";
import { notFound, redirect } from "next/navigation";
import Script from "next/script";

import { ArticleHeader } from "@/components/article/ArticleHeader";
import { ArticleMetadata } from "@/components/article/ArticleMetadata";
import { BackButton, PageWithStructuredData } from "@/components/ui/common";
import { Markdown } from "@/components/ui/markdown";
import { URLS } from "@/lib/constants/urls";
import { getAllArticleSlugs, getArticleBySlugRaw } from "@/lib/helpers/article";
import { getArticleLabel, getArticleLabelSingular } from "@/lib/helpers/config";
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
          href={URLS.ARTICLES_LIST()}
          label={`Back to ${getArticleLabel().toLowerCase()}`}
          Icon={ArrowLeft}
        />

        <div className="grid gap-1.5 min-w-0">
          <ArticleHeader article={article} />
          <ArticleMetadata article={article} />
          <div className="min-w-0 overflow-hidden">
            <Markdown content={rawArticle.raw} />
          </div>
        </div>
      </div>

      <Script id="copy-code-script" strategy="afterInteractive">
        {`
          window.copyCode = function(button) {
            const codeBlock = button.parentElement.querySelector('code');
            const lineContents = codeBlock.querySelectorAll('.line-content');
            const text = Array.from(lineContents).map(line => line.textContent || line.innerText).join('\\n');
            
            navigator.clipboard.writeText(text).then(() => {
              const originalSvg = button.innerHTML;
              button.innerHTML = '<svg class="size-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg>';
              
              setTimeout(() => {
                button.innerHTML = originalSvg;
              }, 2000);
            }).catch(err => {
              console.error('Failed to copy code: ', err);
            });
          };
        `}
      </Script>
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
    URLS.ARTICLES(year, article.slug),
    article.private,
  );
}

export async function generateStaticParams() {
  return getAllArticleSlugs().map((a) => ({ year: a.year, slug: a.slug }));
}
