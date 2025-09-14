import type { Metadata } from "next";
import { ContentContainer } from "passport-ui/content-container";
import { PlaceholderCard } from "passport-ui/placeholder-card";
import { StructuredData } from "passport-ui/structured-data";

import { getRouteSeoImage } from "@/components/helpers/config";
import { createPageMetadata } from "@/components/helpers/metadata";
import { URLS } from "@/components/helpers/urls";
import { ProjectSummaryCard } from "@/components/projects/project-summary-card";
import { profileData } from "@/data/profile";

export default function ProjectsPage() {
  return (
    <ContentContainer
      variant="relaxed"
      backButton={{
        href: URLS.HOME(),
        label: "Home",
      }}
    >
      <StructuredData
        data={{
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          name: `Projects`,
          description:
            "A comprehensive showcase of all my projects and contributions.",
        }}
      />
      <h2>Projects</h2>
      {profileData.projects.length > 0 ? (
        <div className="list-container">
          {profileData.projects.map((project, index) => (
            <ProjectSummaryCard key={index} project={project} />
          ))}
        </div>
      ) : (
        <PlaceholderCard />
      )}
    </ContentContainer>
  );
}

export async function generateMetadata(): Promise<Metadata> {
  const metadata = createPageMetadata({
    title: `Projects`,
    description:
      "A comprehensive showcase of all my projects and contributions.",
    keywords: ["projects", "showcase", "contributions"],
    url: URLS.PROJECTS_LIST(),
    image: getRouteSeoImage(URLS.PROJECTS_LIST()),
  });

  return metadata;
}
