import { Button } from "@workspace/ui/components/button";
import { Card, CardContent } from "@workspace/ui/components/card";
import { PrefetchLink } from "@workspace/ui/components/prefetch-link";
import { Home, Newspaper } from "lucide-react";
import type { Metadata } from "next";
import { plural } from "pluralize";

import { getArticleLabel } from "@/components/helpers/config";
import { createPageMetadata } from "@/components/helpers/metadata";
import { URLS } from "@/components/helpers/urls";

const articleLabel = plural(getArticleLabel());

export default function NotFound() {
  return (
    <div>
      <div className="flex items-center justify-center">
        <Card className="w-full">
          <CardContent className="grid gap-6">
            <div className="flex flex-col text-center">
              <h2>404</h2>
              <h4>You&apos;re lost in space.</h4>
              <p className="text-muted-foreground">
                The page you&apos;re looking for doesn&apos;t exist or has been
                moved.
              </p>
            </div>
            <div className="flex flex-col items-center md:flex-row mx-auto gap-3 justify-center w-full">
              <PrefetchLink href={URLS.HOME()}>
                <Button>
                  <Home />
                  Home
                </Button>
              </PrefetchLink>
              <PrefetchLink href={URLS.ARTICLES_LIST()}>
                <Button>
                  <Newspaper />
                  Browse {articleLabel.toLowerCase()}
                </Button>
              </PrefetchLink>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

export async function generateMetadata(): Promise<Metadata> {
  const metadata = createPageMetadata({
    title: `Page not found`,
    description: `The page you're looking for doesn't exist or has been moved. Return to the homepage or browse ${articleLabel.toLowerCase()} to find what you're looking for.`,
  });

  return metadata;
}
