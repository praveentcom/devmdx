import { Calendar, Eye } from "lucide-react";
import Image from "next/image";

import { ArticleCategoryButton } from "@/components/article/article-category-button";
import type { ArticleLike } from "@/components/article/article-summary-card";
import { TagButton } from "@/components/common/tag-button";
import { formatDate } from "@/components/helpers/date";
import { generatePlaceholderImageUrl } from "@/components/helpers/image";

interface ArticleHeaderProps {
  article: ArticleLike;
}

export function ArticleHeader({ article }: ArticleHeaderProps) {
  return (
    <section>
      <div className="grid gap-8 md:grid-cols-2">
        <div className="relative w-full aspect-1200/628 rounded-lg overflow-hidden order-1 md:order-2">
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

        <div className="grid gap-6 order-2 md:order-1 h-max">
          <h2>{article.title}</h2>
          <p className="text-muted-foreground">{article.description}</p>
          <div className="flex items-center min-w-0 gap-4">
            <div className="flex items-center gap-1 shrink-0 text-muted-foreground">
              <Eye className="size-4" />
              <p className="text-sm">{article.readTime} min read</p>
            </div>
            <div className="flex items-center gap-1 shrink-0 text-muted-foreground">
              <Calendar className="size-4" />
              <p className="text-sm">Published on {formatDate(article.date)}</p>
            </div>
          </div>
          <div className="flex flex-wrap gap-2">
            {article.categories.map((category, index) => (
              <ArticleCategoryButton
                key={index}
                category={category}
                asLink
                count={article.categories.filter((c) => c === category).length}
              />
            ))}
            {article.tags.map((tag, index) => (
              <TagButton
                key={index}
                tag={tag}
                source="articles"
                asLink
                count={article.tags.filter((t) => t === tag).length}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
