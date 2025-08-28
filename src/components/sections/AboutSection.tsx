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
        <div className="flex flex-col md:flex-row gap-4 items-start">
          {imageUrl && (
            <div className="card-image-container">
              <Image
                src={imageUrl}
                alt={`${firstName} ${lastName}`}
                width={120}
                height={120}
                className="profile-image-lg"
                priority
              />
            </div>
          )}
          <div className="text-left flex-1 grid gap-4">
            <div className="flex-1 grid">
              <Link
                href={nameHref}
                className="text-md font-medium hover:text-primary transition-colors duration-200 w-fit"
              >
                {firstName} {lastName}
              </Link>
              {currentPosition && (
                <p className="text-sm text-muted-foreground">
                  {currentPosition}
                </p>
              )}
            </div>
            <div className="w-max">
              <IconLinks />
            </div>
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

        <Button variant="outline" size="sm" asChild>
          <Link href={URLS.BIO()}>View bio &rarr;</Link>
        </Button>
      </CardContent>
    </Card>
  );
}
