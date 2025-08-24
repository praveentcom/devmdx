import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Home, Newspaper } from "lucide-react";
import type { Metadata } from "next";
import { profileData } from "@/data/profile";
import { generatePlaceholderImageUrl } from "@/lib/helpers/image";
import { PLACEHOLDER_COLORS } from "@/lib/constants/colors";

export const metadata: Metadata = {
  title: `${profileData.profile.firstName} ${profileData.profile.lastName} | Page not found`,
  description:
    "The page you're looking for doesn't exist or has been moved. Return to the homepage or browse articles to find what you're looking for.",
  openGraph: {
    title: "Page not found",
    description: "The page you're looking for doesn't exist or has been moved.",
    type: "website",
    siteName: `${profileData.profile.firstName} ${profileData.profile.lastName}`,
    url: `${process.env.NEXT_PUBLIC_BASE_URL || ""}`,
    images: [
      {
        url: generatePlaceholderImageUrl({
          text: "404",
          backgroundColor: PLACEHOLDER_COLORS.ERROR,
          textColor: PLACEHOLDER_COLORS.WHITE,
        }),
        width: 1200,
        height: 630,
        alt: "Page not found",
      },
    ],
  },
  twitter: {
    card: "summary",
    title: "Page not found",
    description: "The page you're looking for doesn't exist or has been moved.",
  },
};

export default function NotFound() {
  return (
    <div className="my-16 mx-4 bg-background flex items-center justify-center">
      <div className="container mx-auto max-w-2xl">
        <Card className="text-center py-8 card-hover-shadow">
          <CardHeader>
            <div className="flex justify-center">
              <div className="relative">
                <div className="text-6xl font-bold text-muted-foreground/30 select-none">
                  404
                </div>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col">
              <h1 className="text-md font-semibold">
                You&apos;ve reached the void.
              </h1>
              <p className="text-muted-foreground text-sm">
                The page you&apos;re looking for doesn&apos;t exist or has been
                moved.
              </p>
            </div>
          </CardContent>
          <CardFooter>
            <div className="flex mx-auto flex-col sm:flex-row gap-3 justify-center w-full">
              <Button
                variant="outline"
                asChild
                className="flex items-center gap-2"
              >
                <Link href="/">
                  <Home className="icon-sm" />
                  Back to home
                </Link>
              </Button>
              <Button
                variant="outline"
                asChild
                className="flex items-center gap-2"
              >
                <Link href="/articles">
                  <Newspaper className="icon-sm" />
                  Browse articles
                </Link>
              </Button>
            </div>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}
