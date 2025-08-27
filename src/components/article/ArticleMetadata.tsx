import {
  BookOpenText,
  Calendar,
  Eye,
  FolderOpen,
  TagsIcon,
} from 'lucide-react';

import { Card, CardContent } from '@/components/ui/card';
import { CategoryBadge } from '@/components/ui/category-badge';
import { TagBadge } from '@/components/ui/tag-badge';
import { formatDate } from '@/lib/helpers/markdown';

import type { ArticleLike } from './ArticleSummaryCard';

interface ArticleMetadataProps {
  article: ArticleLike;
}

export function ArticleMetadata({ article }: ArticleMetadataProps) {
  return (
    <div className="md:sticky md:top-24 space-y-5">
      <Card>
        <CardContent>
          <div className="space-y-4">
            <div className="flex items-center gap-1">
              <BookOpenText className="size-4 text-primary" />
              <h3 className="text-sm font-medium">Metadata</h3>
            </div>
            <div className="flex flex-col gap-1 text-xs text-muted-foreground font-medium">
              <div className="flex items-center gap-1">
                <Calendar className="size-3" />
                <span>{formatDate(article.date)}</span>
              </div>
              <div className="flex items-center gap-1">
                <Eye className="size-3" />
                <span>{article.readTime} min read</span>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Article Categories Card */}
      {article.categories.length > 0 && (
        <Card>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center gap-1">
                <FolderOpen className="size-4 text-primary" />
                <h3 className="text-sm font-medium">Categories</h3>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {article.categories.map((category, index) => (
                  <CategoryBadge key={index} category={category} />
                ))}
              </div>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Article Tags Card */}
      {article.tags.length > 0 && (
        <Card>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center gap-1">
                <TagsIcon className="size-4 text-primary" />
                <h3 className="text-sm font-medium">Tags</h3>
              </div>
              <div className="flex flex-wrap gap-1.5">
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
          </CardContent>
        </Card>
      )}
    </div>
  );
}
