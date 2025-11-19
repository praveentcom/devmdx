import type { Metadata } from "next";
import { Breadcrumb } from "passport-ui/breadcrumb";
import { ContentContainer } from "passport-ui/content-container";
import { EmptyState } from "passport-ui/empty-state";
import { StructuredData } from "passport-ui/structured-data";
import { plural } from "pluralize";

import { ImageWithFallback } from "@/components/common/image-with-fallback";
import { getProjectLabel, getRouteSeoImage } from "@/components/helpers/config";
import { createPageMetadata } from "@/components/helpers/metadata";
import { getAllProjectSlugs } from "@/components/helpers/projects";
import { getTagImagePath } from "@/components/helpers/tag-mapper";
import { URLS } from "@/components/helpers/urls";
import { ProjectSummaryCard } from "@/components/projects/project-summary-card";

const projectLabel = plural(getProjectLabel());

/**
 * Returns the appropriate label text based on the count of items
 * @param count - The number of items
 * @returns The singular or plural form of the project label in lowercase
 */
function getLabelText(count: number): string {
  return count === 1 ? getProjectLabel().toLowerCase() : projectLabel.toLowerCase();
}

interface PageProps {
  params: Promise<{
    tag: string;
  }>;
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { tag } = await params;

  const projects = getAllProjectSlugs();

  const filteredProjects = projects.filter((project) =>
    project.stack.includes(tag),
  );

  const labelText = getLabelText(filteredProjects.length);

  const metadata = createPageMetadata({
    title: `${tag} ${projectLabel.toLowerCase()}`,
    description: `${filteredProjects.length} ${labelText} using ${tag}`,
    keywords: [tag, projectLabel.toLowerCase()],
    url: URLS.PROJECTS_STACK(tag),
    image: getRouteSeoImage(URLS.PROJECTS_STACK(tag)),
  });

  return metadata;
}

export default async function TagProjectsPage({ params }: PageProps) {
  const { tag } = await params;

  const projects = getAllProjectSlugs();

  const filteredProjects = projects.filter((project) =>
    project.stack.includes(tag),
  );

  const labelText = getLabelText(filteredProjects.length);

  return (
    <ContentContainer variant="relaxed">
      <StructuredData
        data={{
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          name: `${tag} ${projectLabel.toLowerCase()}`,
          description: `${filteredProjects.length} ${labelText} using ${tag}`,
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
          {
            label: `${tag} ${projectLabel.toLowerCase()}`,
            href: URLS.PROJECTS_STACK(tag),
          },
        ]}
      />
      <div className="flex items-center gap-2">
        <ImageWithFallback
          src={getTagImagePath(tag)}
          alt={`${tag} icon`}
          width={14}
          height={14}
          className="flex-shrink-0 size-4.5"
        />
        <h2>{tag} {projectLabel.toLowerCase()}</h2>
      </div>
      {filteredProjects.length > 0 ? (
        <div className="list-container">
          {filteredProjects.map((project, index) => (
            <ProjectSummaryCard key={index} project={project} />
          ))}
        </div>
      ) : (
        <EmptyState />
      )}
    </ContentContainer>
  );
}
