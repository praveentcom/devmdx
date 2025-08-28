import Image from "next/image";

import { generateArticlePlaceholderImage } from "@/lib/helpers/image";

import type { ArticleLike } from "./ArticleSummaryCard";

interface ArticleHeaderProps {
  article: ArticleLike;
}

export function ArticleHeader({ article }: ArticleHeaderProps) {
  return (
    <>
      {/* Static cover image */}
      <div className="relative w-full aspect-[1200/628] rounded-lg overflow-hidden mb-4 max-w-full">
        <Image
          src={article.image || generateArticlePlaceholderImage(article.title)}
          alt={article.title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 70vw"
          priority
        />
      </div>

      {/* Static header */}
      <div className="pb-6 border-b border-border/50">
        <div className="grid gap-2">
          <h1 className="font-medium text-xl">{article.title}</h1>
          <p className="text-muted-foreground text-sm">{article.description}</p>
        </div>
      </div>
    </>
  );
}
