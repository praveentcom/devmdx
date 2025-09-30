"use client";

import { Youtube } from "lucide-react";
import { PrefetchLink } from "passport-ui/prefetch-link";

import { getCommunityTypeLabel } from "@/components/community/community-type-button";
import { CommunityIndexItem } from "@/components/helpers/community";
import { formatDate } from "@/components/helpers/date";
import { URLS } from "@/components/helpers/urls";

export function CommunitySummaryCard({
  contribution,
}: {
  contribution: CommunityIndexItem;
}) {
  return (
    <div className="meta-container">
      <div className="grid md:flex gap-0.5 md:gap-4 font-medium group">
        <p className="min-w-24 text-muted-foreground group-hover:text-foreground opacity-70 text-xs md:text-sm">
          {formatDate(contribution.date)}
          <span className="inline md:hidden">
            {" "}
            · {contribution.event ?? getCommunityTypeLabel(contribution.type)}
          </span>
        </p>
        <div className="meta-container">
          <PrefetchLink
            href={URLS.COMMUNITY(contribution.year, contribution.slug)}
            prefetchOnVisible={true}
          >
            <p className="underline text-muted-foreground group-hover:text-foreground underline-offset-4 decoration-border hover:decoration-foreground line-clamp-1">
              {contribution.title}
            </p>
          </PrefetchLink>
          <div className="line-clamp-2 text-xs font-medium text-muted-foreground opacity-70 hidden md:flex">
            <p>
              {contribution.event ?? getCommunityTypeLabel(contribution.type)}
            </p>
            {contribution.youtubeUrl && (
              <PrefetchLink
                href={contribution.youtubeUrl}
                target="_blank"
                className="hide-on-mobile"
              >
                <div className="text-xs flex gap-1 items-center before:content-['·'] before:mx-1 hover:text-foreground">
                  <Youtube className="size-3" />
                  <p className="hover:underline hover:underline-offset-3 hover:decoration-foreground">
                    Watch on YouTube
                  </p>
                </div>
              </PrefetchLink>
            )}
            {contribution.externalLinks &&
              contribution.externalLinks.map((link, index) => (
                <PrefetchLink
                  href={link.url}
                  target="_blank"
                  key={`${link.title}-${index}`}
                  className="hide-on-mobile"
                >
                  <div className="text-xs flex gap-1 items-center before:content-['·'] before:mx-1 hover:text-foreground">
                    <p className="hover:underline hover:underline-offset-3 hover:decoration-foreground">
                      {link.title} {"\u2197"}
                    </p>
                  </div>
                </PrefetchLink>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}
