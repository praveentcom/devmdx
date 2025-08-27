import { Card, CardContent, CardHeader } from "../ui/card";
import { Article } from "@/types/article";
import { Calendar, Eye } from "lucide-react";
import { formatDate } from "@/lib/helpers/markdown";
import { TagBadge } from "../ui/tag-badge";
import { CategoryBadge } from "../ui/category-badge";
import { generateArticlePlaceholderImage } from "@/lib/helpers/image";
import { truncate } from "@/lib/utils";
import Link from "next/link";
import Image from "next/image";

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

export function ArticleSummaryCard({
  article,
  href,
}: {
  article: ArticleLike;
  href?: string;
}) {
  return (
    <Link href={href ?? `/articles/${article.year}/${article.slug}`}>
      <Card className="group" borderTrail>
        <CardHeader>
          <div className="relative w-full h-48 overflow-hidden rounded-md">
            <Image
              src={
                article.image || generateArticlePlaceholderImage(article.title)
              }
              alt={article.title}
              fill
              className="object-cover rounded-md"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col gap-2">
            <div className="flex-center-gap-4 text-xs font-medium text-muted-foreground">
              <div className="flex items-center gap-1">
                <Calendar className="size-3" />
                <span>{formatDate(article.date)}</span>
              </div>
              <div className="flex items-center gap-1">
                <Eye className="size-3" />
                <span>{article.readTime} min read</span>
              </div>
            </div>

            <div className="grid gap-1 mb-2.5">
              <h2 className="text-md font-medium group-hover:text-primary transition-colors">
                {article.title}
              </h2>
              <p className="text-muted-foreground text-sm line-clamp-2">
                {truncate(article.description, 160)}
              </p>
            </div>

            <div className="flex flex-wrap gap-1.5">
              {article.categories.map((category) => (
                <CategoryBadge
                  key={`${article.slug}-category-${category}`}
                  category={category}
                />
              ))}
              {article.tags.map((tag) => (
                <TagBadge
                  key={`${article.slug}-${tag}`}
                  tag={tag}
                  variant="outline"
                  iconSize={12}
                  clickable={false}
                  source="articles"
                />
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}
