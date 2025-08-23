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
  const isHomePage = pathname === "/";
  const nameHref = isHomePage ? "/about" : "/";

  return (
    <Card className="w-full card-shadow py-5">
      <CardHeader>
        <div className="flex flex-col sm:flex-row gap-5 items-start">
          {imageUrl && (
            <div className="card-image-container">
              <Image
                src={imageUrl}
                alt={`${firstName} ${lastName}`}
                width={150}
                height={150}
                className="profile-image-lg"
              />
            </div>
          )}
          <div className="text-left flex-1 grid gap-4">
            <div className="flex-1 grid">
              <Link 
                href={nameHref}
                className="text-xl font-semibold hover:text-primary transition-colors duration-200 w-fit"
              >
                Hi, I&apos;m {firstName} {lastName}
              </Link>
              {currentPosition && (
                <p className="text-md font-medium text-muted-foreground">
                  {currentPosition}
                </p>
              )}
            </div>
            {description && (
              <p className="text-muted-foreground text-sm">{description}</p>
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
