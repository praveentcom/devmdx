import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@workspace/ui/components/breadcrumb";
import { Button } from "@workspace/ui/components/button";
import { Markdown } from "@workspace/ui/components/markdown";
import { PrefetchLink } from "@workspace/ui/components/prefetch-link";
import { StructuredData } from "@workspace/ui/components/structured-data";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

import EntityHeader from "@/components/common/entity-header";
import { TagButton } from "@/components/common/tag-button";
import { PROFILE_NAME } from "@/components/helpers/config";
import { formatDateShort } from "@/components/helpers/date";
import {
  createNotFoundMetadata,
  createPageMetadata,
} from "@/components/helpers/metadata";
import { getProjectBySlugContent } from "@/components/helpers/projects";
import { generateProjectSchema } from "@/components/helpers/structured-data";
import { URLS } from "@/components/helpers/urls";

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function ProjectPage({ params }: PageProps) {
  const { slug } = await params;
  const projectData = getProjectBySlugContent(slug);

  if (!projectData) {
    notFound();
  }

  const { meta: project, content } = projectData;

  return (
    <div>
      <StructuredData data={generateProjectSchema(project)} />
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
            <BreadcrumbPage>{project.title}</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <EntityHeader
        imageSrc={project.image}
        title={project.title}
        subtitle={project.description}
      />
      <div className="flex flex-wrap gap-2">
        {project.stack.map((tag, index) => (
          <TagButton
            key={index}
            tag={tag}
            source="projects"
            asLink
            count={project.stack.filter((t) => t === tag).length}
          />
        ))}
      </div>
      {(project.githubUrl || project.url) && (
        <div className="flex gap-2">
          {project.githubUrl && (
            <PrefetchLink
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button>View on GitHub</Button>
            </PrefetchLink>
          )}
          {project.url && (
            <PrefetchLink
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button>View Project</Button>
            </PrefetchLink>
          )}
        </div>
      )}
      {project.date && (
        <div>
          <h5>Project Date</h5>
          <p className="text-muted-foreground">
            {formatDateShort(project.date)}
          </p>
        </div>
      )}
      {project.coAuthors && project.coAuthors.length > 0 && (
        <div>
          <h5>Project Contributors</h5>
          <p className="text-muted-foreground">
            {PROFILE_NAME}, {project.coAuthors.join(", ")}
          </p>
        </div>
      )}
      <hr />
      <Markdown content={content} />
    </div>
  );
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const projectData = getProjectBySlugContent(slug);

  if (!projectData) {
    return createNotFoundMetadata("Project");
  }

  const { meta: project } = projectData;

  const metadata = createPageMetadata({
    title: `${project.title}`,
    description: project.description,
    url: URLS.PROJECTS(project.slug),
    image: project.ogImage,
  });

  return metadata;
}

export async function generateStaticParams() {
  const { getAllProjectSlugs } = await import("@/components/helpers/projects");
  const projectItems = getAllProjectSlugs();
  return projectItems.map((project) => ({
    slug: project.slug,
  }));
}
