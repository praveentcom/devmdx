import { Card, CardContent, CardHeader } from "../ui/card";
import { Calendar, Eye, Youtube, ExternalLink } from "lucide-react";
import { formatDate } from "@/lib/helpers/markdown";
import { generateArticlePlaceholderImage } from "@/lib/helpers/image";
import { truncate } from "@/lib/utils";
import Link from "next/link";
import Image from "next/image";
import { CommunityIndexItem } from "@/lib/helpers/community";
import { Badge } from "../ui/badge";
import { ContributionTypeBadge } from "../ui/contribution-type-badge";

export function CommunitySummaryCard({
  community,
  href,
}: {
  community: CommunityIndexItem;
  href?: string;
}) {
  return (
    <Link href={href ?? `/community/${community.year}/${community.slug}`}>
      <Card className="group" borderTrail>
        <CardHeader>
          <div className="relative w-full h-48 overflow-hidden rounded-md">
            <Image
              src={
                community.image ||
                generateArticlePlaceholderImage(community.title)
              }
              alt={community.title}
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
                <span>{formatDate(community.date)}</span>
              </div>
              <div className="flex items-center gap-1">
                <Eye className="size-3" />
                <span>{community.readTime} min read</span>
              </div>
            </div>

            <div className="grid gap-1 mb-2.5">
              <h2 className="text-md font-medium group-hover:text-primary transition-colors">
                {community.title}
              </h2>
              <p className="text-muted-foreground text-sm line-clamp-2">
                {truncate(community.description, 160)}
              </p>
            </div>

            <div className="flex flex-wrap gap-1.5">
              {community.type && (
                <ContributionTypeBadge type={community.type} />
              )}
              {community.youtubeUrl && (
                <Badge variant="secondary" className="text-xs">
                  <Youtube className="w-3 h-3 mr-1" />
                  Video
                </Badge>
              )}
              {community.externalLinks &&
                community.externalLinks.length > 0 && (
                  <Badge variant="secondary" className="text-xs">
                    <ExternalLink className="w-3 h-3 mr-1" />
                    {community.externalLinks.length} Link
                    {community.externalLinks.length > 1 ? "s" : ""}
                  </Badge>
                )}
            </div>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}
