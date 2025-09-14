import { Calendar, Youtube } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "passport-ui/button";

import { CommunityTypeButton } from "@/components/community/community-type-button";
import type { CommunityIndexItem } from "@/components/helpers/community";
import { formatDate } from "@/components/helpers/date";
import { generatePlaceholderImageUrl } from "@/components/helpers/image";

interface CommunityHeaderProps {
  contribution: CommunityIndexItem;
}

export function CommunityHeader({ contribution }: CommunityHeaderProps) {
  return (
    <div className="section-container">
      <div className="relative w-full aspect-[1200/628] rounded-sm overflow-hidden">
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
      <div className="section-container">
        <div className="flex items-center min-w-0 gap-3">
          <div className="flex items-center gap-1 flex-shrink-0 text-muted-foreground">
            <Calendar className="size-3" />
            <span className="text-xs font-medium">
              {formatDate(contribution.date)}
            </span>
          </div>
        </div>
        <div className="meta-container">
          <h3>{contribution.title}</h3>
          <p className="text-muted-foreground">{contribution.description}</p>
        </div>
      </div>
      <div className="flex flex-wrap gap-2">
        {contribution.type && <CommunityTypeButton type={contribution.type} />}
        {contribution.youtubeUrl && (
          <Link
            href={contribution.youtubeUrl}
            target="_blank"
            className="hide-on-mobile"
          >
            <Button>
              <Youtube className="size-3" />
              Watch on YouTube
            </Button>
          </Link>
        )}
        {contribution.externalLinks &&
          contribution.externalLinks.map((link, index) => (
            <Link
              key={`${link.title}-${index}`}
              href={link.url}
              target="_blank"
              className="hide-on-mobile"
            >
              <Button>
                {link.title} {"\u2197"}
              </Button>
            </Link>
          ))}
      </div>
    </div>
  );
}
