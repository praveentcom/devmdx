import { Calendar, Eye } from "lucide-react";

import { CategoryBadge } from "@/components/ui/category-badge";
import { TagBadge } from "@/components/ui/tag-badge";
import { formatDate } from "@/lib/helpers/markdown";

import type { ArticleLike } from "./ArticleSummaryCard";

interface ArticleMetadataProps {
  article: ArticleLike;
}

export function ArticleMetadata({ article }: ArticleMetadataProps) {
  return (
    <div className="grid gap-3.5 mt-2 text-xs text-muted-foreground font-medium min-w-0">
      <div className="flex items-center gap-4 min-w-0">
        <div className="flex items-center gap-1 flex-shrink-0">
          <Calendar className="size-3" />
          <span>{formatDate(article.date)}</span>
        </div>
        <div className="flex items-center gap-1 flex-shrink-0">
          <Eye className="size-3" />
          <span>{article.readTime} min read</span>
        </div>
      </div>

      <div className="flex flex-wrap gap-1.5 min-w-0">
        {article.categories.map((category, index) => (
          <CategoryBadge key={index} category={category} asLink />
        ))}
        {article.tags.map((tag, index) => (
          <TagBadge
            key={index}
            tag={tag}
            variant="outline"
            iconSize={12}
            source="articles"
          />
        ))}
      </div>
    </div>
  );
}
