import { Card, CardContent } from "@/components/ui/card";
import { Calendar, TagsIcon, Eye, BookOpenText } from "lucide-react";
import { TagBadge } from "@/components/ui/tag-badge";
import { formatDate } from "@/lib/helpers/markdown";
import type { ArticleLike } from "./ArticleSummaryCard";

interface ArticleMetadataProps {
  article: ArticleLike;
}

export function ArticleMetadata({ article }: ArticleMetadataProps) {
  return (
    <div className="md:sticky md:top-24 space-y-5">
      <Card className="card-hover-shadow">
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

      {/* Article Tags Card */}
      <Card className="card-hover-shadow">
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
    </div>
  );
}
