"use client";

import { Profile } from "@/types/user-profile";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { SimpleIcon, socialIconPaths } from "@/lib/utils/icons";

interface AboutSectionProps {
  profile: Profile;
}

export function AboutSection({ profile }: AboutSectionProps) {
  const {
    firstName,
    lastName,
    currentPosition,
    imageUrl,
    description,
    bulletPoints,
    socialMedia,
    links,
  } = profile;

  const pathname = usePathname();

  return (
    <Card className="col-span-full">
      <CardHeader className="pb-6">
        <div className="flex flex-col sm:flex-row gap-6">
          <div className="flex-shrink-0 mx-auto sm:mx-0">
            {imageUrl && (
              <div className="relative">
                <Image
                  src={imageUrl}
                  alt={`${firstName} ${lastName}`}
                  width={120}
                  height={120}
                  className="rounded-full object-cover border-4 border-border"
                  priority
                />
              </div>
            )}
          </div>

          <div className="flex-1 space-y-4 text-center sm:text-left">
            <div>
              <h1 className="text-3xl font-bold tracking-tight">
                {firstName} {lastName}
              </h1>
              {currentPosition && (
                <p className="text-lg text-muted-foreground mt-1">
                  {currentPosition}
                </p>
              )}
            </div>

            {description && (
              <p className="text-muted-foreground leading-relaxed max-w-2xl">
                {description}
              </p>
            )}

            {pathname === "/" && (
              <Link
                href="/about"
                className="inline-flex items-center text-sm text-primary hover:underline"
              >
                Learn more about me →
              </Link>
            )}
          </div>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        {bulletPoints && bulletPoints.length > 0 && (
          <div>
            <p className="font-semibold text-sm mb-2.5">Highlights</p>
            <ul className="bullet-list">
              {bulletPoints.map((point, index) => (
                <li key={index} className="bullet-item">
                  <div className="bullet-dot" />
                  <span className="bullet-text">{point}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        <div className="grid sm:grid-cols-2 gap-4">
          {links && Object.values(links).some(Boolean) && (
            <div className="flex flex-col gap-2">
              <p className="font-semibold text-sm">Links</p>
              <div className="flex flex-wrap gap-2">
                {Object.entries(links).map(([platform, url]) => {
                  if (!url) return null;
                  const iconPath =
                    socialIconPaths[platform as keyof typeof socialIconPaths];

                  return (
                    <Button key={platform} variant="outline" size="sm" asChild>
                      <a
                        href={url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-xs"
                      >
                        {iconPath ? <SimpleIcon iconPath={iconPath} /> : null}
                        {platform.charAt(0).toUpperCase() + platform.slice(1)}
                      </a>
                    </Button>
                  );
                })}
              </div>
            </div>
          )}
          {socialMedia && Object.values(socialMedia).some(Boolean) && (
            <div className="flex flex-col gap-2">
              <p className="font-semibold text-sm">Socials</p>
              <div className="flex flex-wrap gap-2">
                {Object.entries(socialMedia).map(([platform, url]) => {
                  if (!url) return null;
                  const iconPath =
                    socialIconPaths[platform as keyof typeof socialIconPaths];

                  return (
                    <Button key={platform} variant="outline" size="sm" asChild>
                      <a
                        href={url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-xs"
                      >
                        {iconPath ? <SimpleIcon iconPath={iconPath} /> : null}
                        {platform.charAt(0).toUpperCase() + platform.slice(1)}
                      </a>
                    </Button>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
