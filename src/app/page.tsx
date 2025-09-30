import { Metadata } from "next";
import { Button } from "passport-ui/button";
import { ContentContainer } from "passport-ui/content-container";
import { PrefetchLink } from "passport-ui/prefetch-link";
import { StructuredData } from "passport-ui/structured-data";

import { getAllArticlesIndex } from "@/components/helpers/article";
import { getAllCommunityIndex } from "@/components/helpers/community";
import { SITE_DESCRIPTION, SITE_IMAGE } from "@/components/helpers/config";
import { createPageMetadata } from "@/components/helpers/metadata";
import { generateDefaultSchema } from "@/components/helpers/structured-data";
import { URLS } from "@/components/helpers/urls";
import { ArticlesSection } from "@/components/sections/articles-section";
import { CommunitySection } from "@/components/sections/community-section";
import { ProjectsSection } from "@/components/sections/projects-section";
import { configData } from "@/data/config";
import { profileData } from "@/data/profile";

const recentArticles = getAllArticlesIndex(6);
const recentContributions = getAllCommunityIndex(6);

export default function HomePage() {
  return (
    <ContentContainer variant="relaxed">
      <StructuredData data={generateDefaultSchema()} />
      <div className="section-container">
        {profileData.profile.description && (
          <p className="text-muted-foreground">
            {profileData.profile.description}
          </p>
        )}
        <div className="flex gap-3">
          <PrefetchLink href={URLS.BIO()}>
            <Button>View bio &rarr;</Button>
          </PrefetchLink>
        </div>
      </div>
      {recentArticles.length > 0 && (
        <ArticlesSection articles={recentArticles} />
      )}
      {recentContributions.length > 0 && (
        <CommunitySection contributions={recentContributions} />
      )}
      {profileData.projects.length > 0 && (
        <ProjectsSection
          projects={profileData.projects.map((p) => ({ ...p }))}
        />
      )}
    </ContentContainer>
  );
}

export async function generateMetadata(): Promise<Metadata> {
  const metadata = createPageMetadata({
    description: SITE_DESCRIPTION,
    keywords: configData.seo.keywords,
    url: URLS.HOME(),
    image: SITE_IMAGE,
  });

  return metadata;
}
