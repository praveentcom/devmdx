import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@workspace/ui/components/breadcrumb";
import { StructuredData } from "@workspace/ui/components/structured-data";
import type { Metadata } from "next";
import pluralize from "pluralize";

import { ImageWithFallback } from "@/components/common/image-with-fallback";
import { createPageMetadata } from "@/components/helpers/metadata";
import { getAllProjectSlugs } from "@/components/helpers/projects";
import { getTagImagePath } from "@/components/helpers/tag-mapper";
import { URLS } from "@/components/helpers/urls";
import { ProjectSummaryCard } from "@/components/projects/project-summary-card";

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

  const metadata = createPageMetadata({
    title: `${tag} projects`,
    description: `${filteredProjects.length} ${pluralize("project", filteredProjects.length)} using ${tag}`,
    keywords: [tag, "projects"],
    url: URLS.PROJECTS_STACK(tag),
  });

  return metadata;
}

export default async function TagProjectsPage({ params }: PageProps) {
  const { tag } = await params;

  const projects = getAllProjectSlugs();

  const filteredProjects = projects.filter((project) =>
    project.stack.includes(tag),
  );

  return (
    <div>
      <StructuredData
        data={{
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          name: `${tag} projects`,
          description: `${filteredProjects.length} ${pluralize("project", filteredProjects.length)} using ${tag}`,
        }}
      />
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href={URLS.HOME()}>Home</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href={URLS.PROJECTS_LIST()}>
              Projects
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>{tag} projects</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <div className="flex items-center gap-3">
        <ImageWithFallback
          src={getTagImagePath(tag)}
          alt={`${tag} icon`}
          width={20}
          height={20}
          className="shrink-0 size-6"
        />
        <h3>{tag} projects</h3>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {filteredProjects.map((project) => (
          <ProjectSummaryCard key={project.slug} project={project} />
        ))}
      </div>
    </div>
  );
}
