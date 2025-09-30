import { Calendar, Eye, UserRound } from "lucide-react";
import Image from "next/image";

import { ArticleCategoryButton } from "@/components/article/article-category-button";
import type { ArticleLike } from "@/components/article/article-summary-card";
import { TagButton } from "@/components/common/tag-button";
import { PROFILE_NAME } from "@/components/helpers/config";
import { formatDate } from "@/components/helpers/date";
import { generatePlaceholderImageUrl } from "@/components/helpers/image";

interface ArticleHeaderProps {
  article: ArticleLike;
}

export function ArticleHeader({ article }: ArticleHeaderProps) {
  return (
    <div className="section-container">
      <div className="relative w-full aspect-[1200/628] rounded-sm overflow-hidden">
        <Image
          src={
            article.image ||
            generatePlaceholderImageUrl({ text: article.title })
          }
          alt={article.title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 70vw"
          priority
        />
      </div>

      <div className="section-container">
        <div className="flex items-center min-w-0 gap-3">
          <div className="flex items-center gap-1 flex-shrink-0 text-muted-foreground">
            <Calendar className="size-3" />
            <span className="text-xs font-medium">
              {formatDate(article.date)}
            </span>
          </div>
          <div className="flex items-center gap-1 flex-shrink-0 text-muted-foreground">
            <Eye className="size-3" />
            <span className="text-xs font-medium">
              {article.readTime} min read
            </span>
          </div>
          <div className="flex items-center gap-1 flex-shrink-0 text-muted-foreground">
            <UserRound className="size-3" />
            <span className="text-xs font-medium">{PROFILE_NAME}</span>
          </div>
        </div>
        <div className="meta-container">
          <h2>{article.title}</h2>
          <p className="text-muted-foreground">{article.description}</p>
        </div>
      </div>

      <div className="flex flex-wrap gap-1.5">
        {article.categories.map((category, index) => (
          <ArticleCategoryButton key={index} category={category} asLink />
        ))}
        {article.tags.map((tag, index) => (
          <TagButton key={index} tag={tag} source="articles" asLink />
        ))}
      </div>
    </div>
  );
}
