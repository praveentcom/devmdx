import { format } from "date-fns";
import {
  ArrowLeft,
  Calendar,
  ExternalLink,
  Github,
  GitPullRequestArrow,
  Users,
} from "lucide-react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { Button } from "@/components/ui/button";
import {
  BackButton,
  BulletList,
  EntityHeader,
  PageWithStructuredData,
  SectionCard,
} from "@/components/ui/common";
import { TagBadge } from "@/components/ui/tag-badge";
import { profileData } from "@/data/profile";
import { URLS } from "@/lib/constants/urls";
import {
  createNotFoundMetadata,
  METADATA_PATTERNS,
} from "@/lib/helpers/metadata";
import { generateProjectSchema } from "@/lib/helpers/structured-data";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default async function ProjectPage({ params }: PageProps) {
  const { slug } = await params;
  const project = profileData.projects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <PageWithStructuredData structuredData={generateProjectSchema(project)}>
      <div className="page-container">
        {/* Desktop layout: buttons aligned in header */}
        <div className="hidden md:flex items-center justify-between">
          <BackButton
            href={URLS.PROJECTS_LIST()}
            label="Back to projects"
            Icon={ArrowLeft}
          />
          {(project.url || project.githubUrl) && (
            <div className="flex items-center gap-1.5">
              {project.url && (
                <Button variant="outline" size="sm" asChild>
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink className="size-4" />
                    <span className="ml-2">Website</span>
                  </a>
                </Button>
              )}
              {project.githubUrl && (
                <Button variant="outline" size="sm" asChild>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github className="size-4" />
                    <span className="ml-2">GitHub</span>
                  </a>
                </Button>
              )}
            </div>
          )}
        </div>

        {/* Mobile layout: only back button in header */}
        <div className="md:hidden">
          <BackButton
            href={URLS.PROJECTS_LIST()}
            label="Back to projects"
            Icon={ArrowLeft}
          />
        </div>

        <div className="grid gap-4">
          <EntityHeader
            imageSrc={project.imagePath}
            imageAlt={`${project.name} preview`}
            title={project.name}
            subtitle={project.description}
            fallbackIcon={GitPullRequestArrow}
            size="large"
          />

          {/* Mobile layout: buttons below description in grid */}
          {(project.url || project.githubUrl) && (
            <div className={`md:hidden grid gap-1.5 grid-cols-1`}>
              {project.url && (
                <Button variant="default" size="sm" asChild>
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-1.5"
                  >
                    <ExternalLink className="size-4" />
                    <span>Website</span>
                  </a>
                </Button>
              )}
              {project.githubUrl && (
                <Button variant="default" size="sm" asChild>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-1.5"
                  >
                    <Github className="size-4" />
                    <span>GitHub</span>
                  </a>
                </Button>
              )}
            </div>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {project.date && (
              <SectionCard title="Project date">
                <div className="flex items-center gap-1.5">
                  <Calendar className="size-4 text-muted-foreground" />
                  <span className="text-sm text-muted-foreground">
                    {format(project.date, "MMMM yyyy")}
                  </span>
                </div>
              </SectionCard>
            )}
            {project.coAuthors && project.coAuthors.length > 0 && (
              <SectionCard title="Project authors">
                <div className="flex items-center gap-1.5">
                  <Users className="size-4 text-muted-foreground" />
                  <span className="text-sm text-muted-foreground">
                    with {project.coAuthors.join(", ")}
                  </span>
                </div>
              </SectionCard>
            )}
          </div>

          <SectionCard title="Tech stack">
            <div className="flex flex-wrap gap-1.5">
              {project.stack.map((tag, index) => (
                <TagBadge
                  key={index}
                  tag={tag}
                  iconSize={14}
                  source="projects"
                />
              ))}
            </div>
          </SectionCard>

          {project.bulletPoints?.length > 0 && (
            <SectionCard title="Highlights">
              <BulletList items={project.bulletPoints} />
            </SectionCard>
          )}
        </div>
      </div>
    </PageWithStructuredData>
  );
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = profileData.projects.find((p) => p.slug === slug);

  if (!project) {
    return createNotFoundMetadata("Project");
  }

  return METADATA_PATTERNS.project(
    project.name,
    project.description,
    project.stack,
    project.imagePath,
    `/projects/${project.slug}`,
  );
}

export async function generateStaticParams() {
  return profileData.projects.map((p) => ({ slug: p.slug }));
}
