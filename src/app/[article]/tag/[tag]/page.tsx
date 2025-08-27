import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { TagMapper, EnumTag } from "@/lib/helpers/tag-mapper";
import Image from "next/image";
import { ArticleSummaryCard } from "@/components/article/ArticleSummaryCard";
import EmptyPlaceholderCard from "@/components/ui/empty-placeholder-card";
import { getAllArticlesIndex } from "@/lib/helpers/article";
import { getArticleLabel, getArticleSlug } from "@/lib/helpers/config";
import type { Metadata } from "next";
import {
  createNotFoundMetadata,
  METADATA_PATTERNS,
} from "@/lib/helpers/metadata";
import pluralize from "pluralize";
import { BackButton } from "@/components/ui/common";

interface PageProps {
  params: Promise<{
    tag: string;
  }>;
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { tag } = await params;
  const tagMapper = new TagMapper();

  if (!tagMapper.isValidTag(tag)) {
    return createNotFoundMetadata("Tag");
  }

  const tagEnum = tag as EnumTag;
  const tagDetails = tagMapper.getDetails(tagEnum);

  if (!tagDetails) {
    return createNotFoundMetadata("Tag");
  }

  const filteredArticles = getAllArticlesIndex().filter((article) =>
    article.tags.includes(tagEnum),
  );

  return METADATA_PATTERNS.tagArticles(
    tagDetails.label,
    filteredArticles.length,
    `/${getArticleSlug()}/tag/${tag}`,
  );
}

export default async function TagArticlePage({ params }: PageProps) {
  const { tag } = await params;
  const tagMapper = new TagMapper();

  if (!tagMapper.isValidTag(tag)) {
    notFound();
  }

  const tagEnum = tag as EnumTag;
  const tagDetails = tagMapper.getDetails(tagEnum);

  if (!tagDetails) {
    notFound();
  }

  const filteredArticles = getAllArticlesIndex().filter((article) =>
    article.tags.includes(tagEnum),
  );

  if (filteredArticles.length === 0) {
    return (
      <div className="page-container">
        <div className="grid gap-5">
          {/* Header with back navigation */}
          <div className="grid gap-0.5">
            <BackButton
              href={`/${getArticleSlug()}`}
              label={`Back to ${getArticleLabel().toLowerCase()}`}
              Icon={ArrowLeft}
            />

            <div className="flex items-center gap-3">
              <Image
                src={tagDetails.iconPath}
                alt={`${tagDetails.label} icon`}
                width={20}
                height={20}
                className="flex-shrink-0"
              />
              <h1 className="text-md font-medium">
                {tagDetails.label} {getArticleLabel().toLowerCase()}
              </h1>
            </div>

            <p className="text-muted-foreground text-sm">
              No {getArticleLabel().toLowerCase()} found tagged with{" "}
              {tagDetails.label}
            </p>
          </div>

          <EmptyPlaceholderCard
            title={`No ${getArticleLabel().toLowerCase()} found.`}
            subtitle={`No ${getArticleLabel().toLowerCase()} have been published with the tag ${tagDetails.label} yet. Check back later for new content!`}
          >
            <Button variant="outline" asChild>
              <Link href={`/${getArticleSlug()}`}>
                {getArticleLabel().toLowerCase()}
              </Link>
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
          <BackButton
            href={`/${getArticleSlug()}`}
            label={`Back to ${getArticleLabel().toLowerCase()}`}
            Icon={ArrowLeft}
          />

          <div className="flex items-center gap-3">
            <Image
              src={tagDetails.iconPath}
              alt={`${tagDetails.label} icon`}
              width={20}
              height={20}
              className="flex-shrink-0"
            />
            <h1 className="text-md font-medium">
              {tagDetails.label} {getArticleLabel().toLowerCase()}
            </h1>
          </div>

          <p className="text-muted-foreground text-sm">
            {filteredArticles.length > 0
              ? `${filteredArticles.length} ${pluralize(getArticleLabel().toLowerCase().slice(0, -1), filteredArticles.length)} tagged with ${tagDetails.label}`
              : `No ${getArticleLabel().toLowerCase()} found tagged with ${tagDetails.label}`}
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
  const tagsWithArticles = new Set<string>();

  getAllArticlesIndex().forEach((article) =>
    article.tags.forEach((tag) => tagsWithArticles.add(tag)),
  );

  return Array.from(tagsWithArticles).map((tag) => ({ tag }));
}
