import type { Metadata } from "next";
import { Breadcrumb } from "passport-ui/breadcrumb";
import { ContentContainer } from "passport-ui/content-container";
import { EmptyState } from "passport-ui/empty-state";
import { StructuredData } from "passport-ui/structured-data";
import { plural } from "pluralize";

import { MdContent } from "@/components/common/md-content";
import { getProjectLabel, getRouteSeoImage } from "@/components/helpers/config";
import { getMdContent } from "@/components/helpers/md-content";
import { createPageMetadata } from "@/components/helpers/metadata";
import { getAllProjectSlugs } from "@/components/helpers/projects";
import { URLS } from "@/components/helpers/urls";
import { ProjectSummaryCard } from "@/components/projects/project-summary-card";

const projectLabel = plural(getProjectLabel());

export default function ProjectsPage() {
  const projects = getAllProjectSlugs();
  const projectsContent = getMdContent("projects/intro.md");

  return (
    <ContentContainer variant="relaxed">
      <StructuredData
        data={{
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          name: `${projectLabel}`,
          description: `A comprehensive showcase of all my ${projectLabel.toLowerCase()} and contributions.`,
        }}
      />
      <Breadcrumb
        path={[
          {
            label: "Home",
            href: URLS.HOME(),
          },
          {
            label: projectLabel,
            href: URLS.PROJECTS_LIST(),
          },
        ]}
      />
      <div className="section-container">
        <MdContent content={projectsContent} />
      </div>
      <h2>{projectLabel}</h2>
      {projects.length > 0 ? (
        <div className="list-container">
          {projects.map((project, index) => (
            <ProjectSummaryCard key={index} project={project} />
          ))}
        </div>
      ) : (
        <EmptyState />
      )}
    </ContentContainer>
  );
}

export async function generateMetadata(): Promise<Metadata> {
  const metadata = createPageMetadata({
    title: `${projectLabel}`,
    description: `A comprehensive showcase of all my ${projectLabel.toLowerCase()} and contributions.`,
    keywords: [projectLabel.toLowerCase(), "showcase", "contributions"],
    url: URLS.PROJECTS_LIST(),
    image: getRouteSeoImage(URLS.PROJECTS_LIST()),
  });

  return metadata;
}
