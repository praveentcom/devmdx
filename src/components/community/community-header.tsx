import { Button } from "@workspace/ui/components/button";
import { PrefetchLink } from "@workspace/ui/components/prefetch-link";
import { Calendar, MapPin, Youtube } from "lucide-react";
import Image from "next/image";

import { CommunityTypeButton } from "@/components/community/community-type-button";
import type { CommunityIndexItem } from "@/components/helpers/community";
import { formatDate } from "@/components/helpers/date";
import { generatePlaceholderImageUrl } from "@/components/helpers/image";

interface CommunityHeaderProps {
  contribution: CommunityIndexItem;
}

export function CommunityHeader({ contribution }: CommunityHeaderProps) {
  return (
    <section>
      <div className="grid gap-8 md:grid-cols-2">
        <div className="relative w-full aspect-1200/628 rounded-lg overflow-hidden order-1 md:order-2">
          <Image
            src={
              contribution.image ||
              generatePlaceholderImageUrl({ text: contribution.title })
            }
            alt={contribution.title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 70vw"
            priority
          />
        </div>

        <div className="grid gap-6 order-2 md:order-1 h-max">
          <h2>{contribution.title}</h2>
          <p className="text-muted-foreground">{contribution.description}</p>
          <div className="flex items-center min-w-0 gap-4">
            <div className="flex items-center gap-1 shrink-0 text-muted-foreground">
              <Calendar className="size-4" />
              <span className="text-sm font-medium">
                {formatDate(contribution.date)}
              </span>
            </div>
            {contribution.event && (
              <div className="flex items-center gap-1 shrink-0 text-muted-foreground">
                <MapPin className="size-4" />
                <span className="text-sm font-medium">
                  {contribution.event}
                </span>
              </div>
            )}
          </div>
          <div className="flex flex-wrap gap-2">
            {contribution.type && (
              <CommunityTypeButton type={contribution.type} />
            )}
          </div>
        </div>
      </div>
      {(contribution.youtubeUrl || contribution.externalLinks) && (
        <div className="flex flex-wrap gap-2">
          {contribution.youtubeUrl && (
            <PrefetchLink href={contribution.youtubeUrl} target="_blank">
              <Button>
                <Youtube />
                Watch on YouTube
              </Button>
            </PrefetchLink>
          )}
          {contribution.externalLinks &&
            contribution.externalLinks.map((link, index) => (
              <PrefetchLink
                key={`${link.title}-${index}`}
                href={link.url}
                target="_blank"
              >
                <Button variant="outline">{link.title}</Button>
              </PrefetchLink>
            ))}
        </div>
      )}
    </section>
  );
}
