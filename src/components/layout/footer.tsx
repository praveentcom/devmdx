"use client";

import { SocialIconLinks } from "@/components/common/social-icons";
import { configData } from "@/data/config";
import { profile } from "@/data/profile";

export function Footer() {
  return (
    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 my-2">
      <div className="text-center md:text-left grid">
        <p>
          {profile.firstName} {profile.lastName}
        </p>
        <p className="text-sm text-muted-foreground">
          {configData.misc.footerLabel}
        </p>
      </div>

      <div className="md:justify-items-end h-min w-min mx-auto md:ml-auto md:mr-0">
        <SocialIconLinks />
      </div>
    </div>
  );
}
