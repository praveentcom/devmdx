import { Calendar, Github, UserRound, UsersRound } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { BulletList } from "passport-ui/bullet-list";
import { Button } from "passport-ui/button";
import { ContentContainer } from "passport-ui/content-container";
import { MetaContainer } from "passport-ui/meta-container";
import { StructuredData } from "passport-ui/structured-data";

import EntityHeader from "@/components/common/entity-header";
import { TagButton } from "@/components/common/tag-button";
import { PROFILE_NAME } from "@/components/helpers/config";
import { formatDateShort } from "@/components/helpers/date";
import {
  createNotFoundMetadata,
  createPageMetadata,
} from "@/components/helpers/metadata";
import { generateProjectSchema } from "@/components/helpers/structured-data";
import { URLS } from "@/components/helpers/urls";
import { profileData } from "@/data/profile";

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
    <ContentContainer
      variant="relaxed"
      backButton={{
        href: URLS.PROJECTS_LIST(),
        label: "Projects",
      }}
    >
      <StructuredData data={generateProjectSchema(project)} />
      <div className="section-container">
        <EntityHeader
          imageSrc={project.image}
          title={project.title}
          subtitle={project.description}
        />
        <div className="flex flex-wrap gap-1.5">
          {project.stack.map((tag, index) => (
            <TagButton key={index} tag={tag} source="projects" asLink />
          ))}
        </div>
      </div>
      {(project.githubUrl || project.url) && (
        <MetaContainer title="Project links">
          <div className="flex gap-4">
            {project.githubUrl && (
              <Link
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button>
                  <Github className="size-3" />
                  GitHub {"\u2197"}
                </Button>
              </Link>
            )}
            {project.url && (
              <Link
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button>Website {"\u2197"}</Button>
              </Link>
            )}
          </div>
        </MetaContainer>
      )}
      {project.date && (
        <MetaContainer title="Project date">
          <div className="flex items-center gap-1 text-muted-foreground">
            <Calendar className="size-3" />
            <p>{formatDateShort(project.date)}</p>
          </div>
        </MetaContainer>
      )}
      {project.coAuthors && project.coAuthors.length > 0 ? (
        <MetaContainer title="Project authors">
          <div className="flex items-center gap-1 text-muted-foreground">
            <UsersRound className="size-3" />
            <p>
              {PROFILE_NAME}, {project.coAuthors.join(", ")}
            </p>
          </div>
        </MetaContainer>
      ) : (
        <MetaContainer title="Project authors">
          <div className="flex items-center gap-1 text-muted-foreground">
            <UserRound className="size-3" />
            <p>{PROFILE_NAME}</p>
          </div>
        </MetaContainer>
      )}
      {project.bulletPoints?.length > 0 && (
        <MetaContainer title="Highlights">
          <BulletList items={project.bulletPoints} />
        </MetaContainer>
      )}
    </ContentContainer>
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
