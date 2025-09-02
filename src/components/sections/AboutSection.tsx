"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { IconLinks } from "@/components/ui/icon-links";
import { URLS } from "@/lib/constants/urls";
import { Profile } from "@/types/user-profile";

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
  } = profile;

  const pathname = usePathname();
  const isHomePage = pathname === "/";
  const nameHref = isHomePage ? "/about" : "/";

  return (
    <Card>
      <CardHeader>
        <div className="grid gap-5">
          <div className="flex gap-3.5 items-center">
            {imageUrl && (
              <div className="card-image-container">
                <Image
                  src={imageUrl}
                  alt={`${firstName} ${lastName}`}
                  width={120}
                  height={120}
                  className="profile-image"
                  priority
                />
              </div>
            )}
            <div className="flex-1 grid gap-1.5">
              <Link
                href={nameHref}
                className="text-md font-medium w-fit leading-none"
              >
                {firstName} {lastName}
              </Link>
              {currentPosition && (
                <p className="text-sm text-muted-foreground leading-none">
                  {currentPosition}
                </p>
              )}
            </div>
          </div>
          <div className="w-max">
            <IconLinks />
          </div>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        {description && (
          <p className="text-muted-foreground text-sm">{description}</p>
        )}

        {bulletPoints && bulletPoints.length > 0 && (
          <ul className="bullet-list">
            {bulletPoints.map((point, index) => (
              <li key={index} className="bullet-item">
                <div className="bullet-dot" />
                <span className="bullet-text">{point}</span>
              </li>
            ))}
          </ul>
        )}

        <Button variant="outline" size="xs" asChild>
          <Link href={URLS.BIO()}>View bio &rarr;</Link>
        </Button>
      </CardContent>
    </Card>
  );
}
