import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import pluralize from "pluralize";

import { ArticleSummaryCard } from "@/components/article/ArticleSummaryCard";
import { Button } from "@/components/ui/button";
import { BackButton } from "@/components/ui/common";
import EmptyPlaceholderCard from "@/components/ui/empty-placeholder-card";
import { URLS } from "@/lib/constants/urls";
import { getAllArticlesIndex } from "@/lib/helpers/article";
import { getArticleLabel, getRouteSeoImage } from "@/lib/helpers/config";
import { createPageMetadata } from "@/lib/helpers/metadata";
import { getTagImagePath } from "@/lib/helpers/tag-mapper";

interface PageProps {
  params: Promise<{
    tag: string;
  }>;
}

export default async function TagArticlePage({ params }: PageProps) {
  const { tag } = await params;

  const filteredArticles = getAllArticlesIndex().filter((article) =>
    article.tags.includes(tag),
  );

  if (filteredArticles.length === 0) {
    return (
      <div className="page-container">
        <div className="grid gap-5">
          <div className="grid gap-0.5">
            <BackButton
              href={URLS.ARTICLES_LIST()}
              label={`Back to ${getArticleLabel().toLowerCase()}`}
            />

            <div className="flex items-center gap-3">
              <Image
                src={getTagImagePath(tag)}
                alt={`${tag} icon`}
                width={20}
                height={20}
                className="flex-shrink-0"
              />
              <h1 className="text-md font-medium">
                {tag} {getArticleLabel().toLowerCase()}
              </h1>
            </div>

            <p className="text-muted-foreground text-sm">
              No {getArticleLabel().toLowerCase()} found tagged with {tag}
            </p>
          </div>

          <EmptyPlaceholderCard
            title={`No ${getArticleLabel().toLowerCase()} found.`}
            subtitle={`No ${getArticleLabel().toLowerCase()} have been published with the tag ${tag} yet. Check back later for new content!`}
          >
            <Button variant="outline" size={"xs"} asChild>
              <Link href={URLS.ARTICLES_LIST()}>
                {getArticleLabel().toLowerCase()}
              </Link>
            </Button>
            <Button variant="outline" size={"xs"} asChild>
              <Link href={URLS.HOME()}>Go home</Link>
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
          <BackButton
            href={URLS.ARTICLES_LIST()}
            label={`Back to ${getArticleLabel().toLowerCase()}`}
          />

          <div className="flex items-center gap-3">
            <Image
              src={getTagImagePath(tag)}
              alt={`${tag} icon`}
              width={20}
              height={20}
              className="flex-shrink-0"
            />
            <h1 className="text-md font-medium">
              {tag} {getArticleLabel().toLowerCase()}
            </h1>
          </div>

          <p className="text-muted-foreground text-sm">
            {filteredArticles.length > 0
              ? `${filteredArticles.length} ${pluralize(getArticleLabel().toLowerCase().slice(0, -1), filteredArticles.length)} tagged with ${tag}`
              : `No ${getArticleLabel().toLowerCase()} found tagged with ${tag}`}
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

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { tag } = await params;

  const filteredArticles = getAllArticlesIndex().filter((article) =>
    article.tags.includes(tag),
  );

  const metadata = createPageMetadata({
    title: `${tag} ${getArticleLabel().toLowerCase()}`,
    description: `${filteredArticles.length} ${getArticleLabel().toLowerCase()} tagged with ${tag}.`,
    keywords: `${tag}, ${getArticleLabel().toLowerCase()}`,
    url: URLS.ARTICLES_TAG(tag),
    image: getRouteSeoImage(URLS.ARTICLES_TAG(tag)),
  });

  return metadata;
}

export async function generateStaticParams() {
  const tagsWithArticles = new Set<string>();

  getAllArticlesIndex().forEach((article) =>
    article.tags.forEach((tag) => tagsWithArticles.add(tag)),
  );

  return Array.from(tagsWithArticles).map((tag) => ({ tag }));
}
