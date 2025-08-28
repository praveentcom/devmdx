"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

import type { CommunityIndexItem } from "@/lib/helpers/community";
import { generateArticlePlaceholderImage } from "@/lib/helpers/image";

interface CommunityHeaderProps {
  community: CommunityIndexItem;
}

export function CommunityHeader({ community }: CommunityHeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 320);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Static cover image */}
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

      {/* Sticky header with text effects only */}
      <div
        className={`sticky top-12 md:top-16 z-20 bg-background transition-all pb-5 duration-200 border-b ${
          isScrolled ? "pt-6 border-border" : "border-border/50"
        }`}
      >
        <div className="transition-all duration-200 grid gap-2">
          <h1
            className={`font-medium transition-all duration-200 ${
              isScrolled ? "text-lg" : "text-xl"
            }`}
          >
            {community.title}
          </h1>
          <p
            className={`text-muted-foreground transition-all duration-200 text-sm ${
              isScrolled ? "opacity-0 h-0 overflow-hidden hidden" : "opacity-100"
            }`}
          >
            {community.description}
          </p>
        </div>
      </div>
    </>
  );
}
