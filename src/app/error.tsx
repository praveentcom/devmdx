"use client";

import { Button } from "@workspace/ui/components/button";
import { Card, CardContent } from "@workspace/ui/components/card";
import { PrefetchLink } from "@workspace/ui/components/prefetch-link";
import { Home, Newspaper } from "lucide-react";
import { plural } from "pluralize";

import { getArticleLabel } from "@/components/helpers/config";
import { URLS } from "@/components/helpers/urls";

const articleLabel = plural(getArticleLabel());

export default function Error() {
  return (
    <div className="flex items-center justify-center">
      <Card className="w-full">
        <CardContent className="grid gap-6">
          <div className="flex flex-col text-center">
            <h2>500</h2>
            <h4>Uh-oh. Something went wrong.</h4>
            <p className="text-muted-foreground">
              An error occurred while loading the page.
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
              <Button variant="outline">
                <Newspaper />
                Browse {articleLabel.toLowerCase()}
              </Button>
            </PrefetchLink>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
