import Image from "next/image";

import type { CommunityIndexItem } from "@/lib/helpers/community";
import { generateArticlePlaceholderImage } from "@/lib/helpers/image";

interface CommunityHeaderProps {
  community: CommunityIndexItem;
}

export function CommunityHeader({ community }: CommunityHeaderProps) {
  return (
    <>
      <div className="relative w-full aspect-[1200/628] rounded-lg overflow-hidden mb-4">
        <Image
          src={
            community.image || generateArticlePlaceholderImage(community.title)
          }
          alt={community.title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 70vw"
          priority
        />
      </div>

      <div className="pb-6 border-b border-border/50">
        <div className="grid gap-2">
          <h1 className="font-medium text-xl">{community.title}</h1>
          <p className="text-muted-foreground text-sm">
            {community.description}
          </p>
        </div>
      </div>
    </>
  );
}
