import { format } from "date-fns";
import {
  Calendar,
  ExternalLink,
  Github,
  GitPullRequestArrow,
  UserRound,
  UsersRound,
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
import { PROFILE_NAME } from "@/lib/helpers/config";
import {
  createNotFoundMetadata,
  createPageMetadata,
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
          <BackButton href={URLS.PROJECTS_LIST()} label="Back to projects" />
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
          <BackButton href={URLS.PROJECTS_LIST()} label="Back to projects" />
        </div>

        <div className="grid gap-4">
          <EntityHeader
            imageSrc={project.image}
            imageAlt={`${project.title} preview`}
            title={project.title}
            subtitle={project.description}
            fallbackIcon={GitPullRequestArrow}
            size="large"
          />

          {/* Mobile layout: buttons below description in grid */}
          {(project.url || project.githubUrl) && (
            <div className={`md:hidden grid gap-1.5 md:grid-cols-2`}>
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

          <div className="grid md:grid-cols-2 gap-4">
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
            {project.coAuthors && project.coAuthors.length > 0 ? (
              <SectionCard title="Project authors">
                <div className="flex items-center gap-1.5">
                  <UsersRound className="size-4 text-muted-foreground" />
                  <span className="text-sm text-muted-foreground">
                    {PROFILE_NAME}, {project.coAuthors.join(", ")}
                  </span>
                </div>
              </SectionCard>
            ) : (
              <SectionCard title="Project authors">
                <div className="flex items-center gap-1.5">
                  <UserRound className="size-4 text-muted-foreground" />
                  <span className="text-sm text-muted-foreground">
                    {PROFILE_NAME}
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
                  asLink
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

  const metadata = createPageMetadata({
    title: `${project.title}`,
    description: project.description,
    url: URLS.PROJECTS(project.slug),
    image: project.ogImage,
  });

  return metadata;
}

export async function generateStaticParams() {
  return profileData.projects.map((p) => ({ slug: p.slug }));
}
