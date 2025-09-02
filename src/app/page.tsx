import { Metadata } from "next";
import dynamic from "next/dynamic";

import { AboutSection } from "@/components/sections/AboutSection";
import { PageWithStructuredData } from "@/components/ui/common";

const ArticlesSection = dynamic(
  () =>
    import("@/components/sections/ArticlesSection").then((mod) => ({
      default: mod.ArticlesSection,
    })),
  {
    loading: () => <div className="animate-pulse h-32 bg-muted rounded-sm" />,
    ssr: true,
  },
);

const CommunitySection = dynamic(
  () =>
    import("@/components/sections/CommunitySection").then((mod) => ({
      default: mod.CommunitySection,
    })),
  {
    loading: () => <div className="animate-pulse h-32 bg-muted rounded-sm" />,
    ssr: true,
  },
);

const ProjectsSection = dynamic(
  () =>
    import("@/components/sections/ProjectsSection").then((mod) => ({
      default: mod.ProjectsSection,
    })),
  {
    loading: () => <div className="animate-pulse h-32 bg-muted rounded-sm" />,
    ssr: true,
  },
);

import { configData } from "@/data/config";
import { profileData } from "@/data/profile";
import { URLS } from "@/lib/constants";
import { getAllArticlesIndex } from "@/lib/helpers/article";
import { getAllCommunityIndex } from "@/lib/helpers/community";
import { SITE_DESCRIPTION, SITE_IMAGE, SITE_TITLE } from "@/lib/helpers/config";
import { createPageMetadata } from "@/lib/helpers/metadata";
import { generateDefaultSchema } from "@/lib/helpers/structured-data";

const recentArticles = getAllArticlesIndex(2);
const recentContributions = getAllCommunityIndex(2);

export default function HomePage() {
  return (
    <PageWithStructuredData structuredData={generateDefaultSchema()}>
      <div className="min-h-screen bg-background">
        <div className="page-container">
          <div className="space-y-6">
            <AboutSection profile={profileData.profile} />
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
          </div>
        </div>
      </div>
    </PageWithStructuredData>
  );
}

export async function generateMetadata(): Promise<Metadata> {
  const metadata = createPageMetadata({
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    keywords: configData.seo.keywords?.join(", ") || "",
    url: URLS.HOME(),
    image: SITE_IMAGE,
  });

  return metadata;
}
