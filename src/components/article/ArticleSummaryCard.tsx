import { Calendar, Eye } from "lucide-react";
import Image from "next/image";

import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { CategoryBadge } from "@/components/ui/category-badge";
import { PrefetchLink } from "@/components/ui/prefetch-link";
import { TagBadge } from "@/components/ui/tag-badge";
import { URLS } from "@/lib/constants/urls";
import { generateArticlePlaceholderImage } from "@/lib/helpers/image";
import { formatDate } from "@/lib/helpers/markdown";
import { truncate } from "@/lib/utils";
import { Article } from "@/types/article";

export type ArticleLike = Pick<
  Article,
  | "slug"
  | "title"
  | "description"
  | "date"
  | "readTime"
  | "tags"
  | "categories"
  | "published"
  | "image"
> & { year: string };

export function ArticleSummaryCard({ article }: { article: ArticleLike }) {
  return (
    <PrefetchLink
      href={URLS.ARTICLES(article.year, article.slug)}
      prefetchOnVisible={true}
    >
      <Card borderTrail>
        <CardHeader>
          <div className="relative w-full h-48 overflow-hidden rounded-sm">
            <Image
              src={
                article.image || generateArticlePlaceholderImage(article.title)
              }
              alt={article.title}
              fill
              className="object-cover rounded-sm"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
        </CardHeader>
        <CardContent>
          <div className="grid gap-5">
            <div className="grid gap-2">
              <div className="flex items-center min-w-0 gap-3 text-xs text-muted-foreground font-medium">
                <div className="flex items-center gap-1 flex-shrink-0">
                  <Calendar className="size-3" />
                  <span>{formatDate(article.date)}</span>
                </div>
                <div className="flex items-center gap-1 flex-shrink-0">
                  <Eye className="size-3" />
                  <span>{article.readTime} min read</span>
                </div>
              </div>
              <div className="grid gap-1.5">
                <h1 className="font-medium text-lg">{article.title}</h1>
                <p className="text-muted-foreground text-sm">
                  {truncate(article.description, 96)}
                </p>
              </div>
            </div>

            <div className="flex flex-wrap gap-1.5">
              {article.categories.map((category, index) => (
                <CategoryBadge key={index} category={category} />
              ))}
              {article.tags.map((tag, index) => (
                <TagBadge
                  key={index}
                  tag={tag}
                  iconSize={12}
                  source="articles"
                />
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    </PrefetchLink>
  );
}
