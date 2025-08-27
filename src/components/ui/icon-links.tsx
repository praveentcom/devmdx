"use client";

import { Fragment } from "react";

import { profileData } from "@/data/profile";
import { SimpleIcon, socialIconPaths } from "@/lib/utils/icons";

export function IconLinks() {
  const { socialMedia, links } = profileData.profile;

  const allLinks = [
    ...(links ? Object.entries(links).filter(([, url]) => url) : []),
    ...(socialMedia
      ? Object.entries(socialMedia).filter(([, url]) => url)
      : []),
  ];

  return (
    <Fragment>
      {allLinks.length > 0 && (
        <div className="flex flex-wrap justify-center gap-3">
          {allLinks.map(([platform, url]) => {
            const iconPath =
              socialIconPaths[platform as keyof typeof socialIconPaths];

            return (
              <Fragment key={platform}>
                {iconPath && (
                  <a
                    key={platform}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-foreground transition-colors duration-200"
                    title={platform.charAt(0).toUpperCase() + platform.slice(1)}
                  >
                    <SimpleIcon iconPath={iconPath} />
                  </a>
                )}
              </Fragment>
            );
          })}
        </div>
      )}
    </Fragment>
  );
}
