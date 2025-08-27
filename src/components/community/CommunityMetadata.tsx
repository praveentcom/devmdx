import { Card, CardContent } from "@/components/ui/card";
import {
  Calendar,
  Eye,
  BookOpenText,
  Youtube,
  ExternalLink,
  Link2,
  Video,
} from "lucide-react";
import { formatDate } from "@/lib/helpers/markdown";
import type { CommunityIndexItem } from "@/lib/helpers/community";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ContributionTypeBadge } from "@/components/ui/contribution-type-badge";

interface CommunityMetadataProps {
  community: CommunityIndexItem;
}

export function CommunityMetadata({ community }: CommunityMetadataProps) {
  return (
    <div className="md:sticky md:top-24 space-y-5">
      {/* Metadata Card */}
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
                <span>{formatDate(community.date)}</span>
              </div>
              <div className="flex items-center gap-1">
                <Eye className="size-3" />
                <span>{community.readTime} min read</span>
              </div>
            </div>
            {community.type && (
              <ContributionTypeBadge type={community.type} variant="outline" />
            )}
          </div>
        </CardContent>
      </Card>

      {/* YouTube Video Card */}
      {community.youtubeUrl && (
        <Card>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center gap-1">
                <Video className="size-4 text-primary" />
                <h3 className="text-sm font-medium">Media Resources</h3>
              </div>
              <Button
                asChild
                variant="outline"
                size="sm"
                className="w-full justify-start"
              >
                <Link
                  href={community.youtubeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Youtube className="w-4 h-4 mr-2" />
                  YouTube Video
                </Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      )}

      {/* External Links Card */}
      {community.externalLinks && community.externalLinks.length > 0 && (
        <Card>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center gap-1">
                <Link2 className="size-4 text-primary" />
                <h3 className="text-sm font-medium">Content Resources</h3>
              </div>
              <div className="space-y-2">
                {community.externalLinks.map((link, index) => (
                  <Button
                    key={index}
                    asChild
                    variant="outline"
                    size="sm"
                    className="w-full justify-start"
                  >
                    <Link
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      {link.title}
                    </Link>
                  </Button>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
