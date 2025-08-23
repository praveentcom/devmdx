import { profileData } from "@/data/profile";
import { Button } from "@/components/ui/button";
import {
  ExternalLink,
  ArrowLeft,
  GitPullRequestArrow,
  Github,
} from "lucide-react";
import { notFound } from "next/navigation";
import { TagBadge } from "@/components/ui/tag-badge";
import type { Metadata } from "next";
import {
  PageWithStructuredData,
  BackButton,
  EntityHeader,
  SectionCard,
  BulletList,
} from "@/components/ui/common";
import { generateProjectSchema } from "@/lib/helpers/structured-data";
import {
  METADATA_PATTERNS,
  createNotFoundMetadata,
} from "@/lib/helpers/metadata";

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
      <div className="container mx-auto px-4 py-4 sm:py-2 max-w-6xl">
        <div className="flex items-center justify-between">
          <BackButton
            href="/projects"
            label="Back to projects"
            Icon={ArrowLeft}
          />
          {(project.url || project.githubUrl) && (
            <div className="flex items-center gap-2">
              {project.url && (
                <Button variant="outline" size="sm" asChild>
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink className="icon-sm" />
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
                    <Github className="icon-sm" />
                    <span className="ml-2">GitHub</span>
                  </a>
                </Button>
              )}
            </div>
          )}
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

          <SectionCard title="Tech stack">
            <div className="flex flex-wrap gap-1.5">
              {project.stack.map((tag, index) => (
                <TagBadge key={index} tag={tag} iconSize={14} source="projects" />
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
  );
}

export async function generateStaticParams() {
  return profileData.projects.map((p) => ({ slug: p.slug }));
}
