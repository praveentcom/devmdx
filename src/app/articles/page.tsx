import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArticleSummaryCard } from "@/components/article/ArticleSummaryCard";
import { Newspaper } from "lucide-react";
import EmptyPlaceholderCard from "@/components/ui/empty-placeholder-card";
import { getAllArticleSlugs } from "@/lib/helpers/article";
import { EnumTag } from "@/lib/helpers/tag-mapper";
import type { Metadata } from "next";
import { profileData } from "@/data/profile";
import { generatePlaceholderImageUrl } from "@/lib/helpers/image";
import { COLOR_SCHEMES } from "@/lib/constants/colors";
import pluralize from "pluralize";
import { PageWithStructuredData } from "@/components/ui/common";
import { AnimatedHeading } from "@/components/ui/animated-heading";

export const metadata: Metadata = {
  title: `${profileData.profile.firstName} ${profileData.profile.lastName} | Articles`,
  description:
    "A collection of articles about development, technology, and more. Sharing insights and knowledge from my journey as a developer.",
  openGraph: {
    title: "Articles",
    description:
      "A collection of articles about development, technology, and more.",
    type: "website",
    images: [
      {
        url: generatePlaceholderImageUrl({
          text: "Articles",
          backgroundColor: COLOR_SCHEMES.ARTICLE.background,
          textColor: COLOR_SCHEMES.ARTICLE.text,
        }),
        width: 1200,
        height: 630,
        alt: "Articles",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Articles",
    description:
      "A collection of articles about development, technology, and more.",
    images: [
      generatePlaceholderImageUrl({
        text: "Articles",
        backgroundColor: COLOR_SCHEMES.ARTICLE.background,
        textColor: COLOR_SCHEMES.ARTICLE.text,
      }),
    ],
  },
  keywords: "articles, blog, development, technology, programming, tutorials",
  authors: [
    {
      name: `${profileData.profile.firstName} ${profileData.profile.lastName}`,
    },
  ],
};

export default function ArticlePage() {
  const publishedArticles = getAllArticleSlugs();
  const tagSet = new Set<EnumTag>();
  publishedArticles.forEach((p) => p.tags.forEach((t) => tagSet.add(t)));

  return (
    <PageWithStructuredData
      structuredData={{
        "@context": "https://schema.org",
        "@type": "CollectionPage",
        name: "Articles",
        description:
          "A collection of articles about development, technology, and more.",
      }}
    >
      <div className="container mx-auto px-4 py-4 sm:py-2 max-w-6xl">
        <div className="grid gap-5">
          <AnimatedHeading
            icon={Newspaper}
            title="Articles"
            subtitle={
              publishedArticles.length > 0
                ? `${publishedArticles.length} ${pluralize("article", publishedArticles.length)} about development, technology, and more.`
                : "No articles published yet."
            }
            delay={0.1}
          />

          {publishedArticles.length > 0 ? (
            <div className="flex items-center gap-2 flex-wrap">
              {Array.from(new Set(publishedArticles.map((a) => a.year))).map(
                (year) => (
                  <Link
                    key={year}
                    href={`/articles/${year}`}
                    className="text-xs px-2 py-1 rounded-md border hover:bg-accent transition-colors"
                  >
                    {year}
                  </Link>
                ),
              )}
            </div>
          ) : null}

          {publishedArticles.length > 0 ? (
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {publishedArticles.map((article) => (
                <ArticleSummaryCard key={article.slug} article={article} />
              ))}
            </div>
          ) : (
            <EmptyPlaceholderCard
              title="No articles yet"
              subtitle="I haven't published any articles yet, but I'm working on some great content."
            >
              <Button variant="outline" asChild>
                <Link href="/">Go home</Link>
              </Button>
            </EmptyPlaceholderCard>
          )}
        </div>
      </div>
    </PageWithStructuredData>
  );
}
