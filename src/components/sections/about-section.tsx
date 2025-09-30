"use client";

import { BulletList } from "passport-ui/bullet-list";

import { Profile } from "@/types/user-profile";

interface AboutSectionProps {
  profile: Profile;
}

export function AboutSection({ profile }: AboutSectionProps) {
  const { description, bulletPoints } = profile;

  return (
    <div className="section-container">
      {description && <p className="text-muted-foreground">{description}</p>}

      {bulletPoints && bulletPoints.length > 0 && (
        <BulletList items={bulletPoints} />
      )}
    </div>
  );
}
