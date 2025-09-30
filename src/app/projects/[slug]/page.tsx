import { Calendar, Github, UserRound, UsersRound } from "lucide-react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Breadcrumb } from "passport-ui/breadcrumb";
import { BulletList } from "passport-ui/bullet-list";
import { Button } from "passport-ui/button";
import { ContentContainer } from "passport-ui/content-container";
import { PrefetchLink } from "passport-ui/prefetch-link";
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
    <ContentContainer variant="relaxed">
      <StructuredData data={generateProjectSchema(project)} />
      <Breadcrumb
        path={[
          {
            label: "Home",
            href: URLS.HOME(),
          },
          {
            label: "Projects",
            href: URLS.PROJECTS_LIST(),
          },
          {
            label: project.title,
            href: URLS.PROJECTS(project.slug),
          },
        ]}
      />
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
        <div className="meta-container">
          <h4>Project links</h4>
          <div className="flex gap-4">
            {project.githubUrl && (
              <PrefetchLink
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button>
                  <Github className="size-3" />
                  GitHub {"\u2197"}
                </Button>
              </PrefetchLink>
            )}
            {project.url && (
              <PrefetchLink
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button>Website {"\u2197"}</Button>
              </PrefetchLink>
            )}
          </div>
        </div>
      )}
      {project.date && (
        <div className="meta-container">
          <h4>Project date</h4>
          <div className="flex items-center gap-1 text-muted-foreground">
            <Calendar className="size-3" />
            <p>{formatDateShort(project.date)}</p>
          </div>
        </div>
      )}
      {project.coAuthors && project.coAuthors.length > 0 ? (
        <div className="meta-container">
          <h4>Project authors</h4>
          <div className="flex items-center gap-1 text-muted-foreground">
            <UsersRound className="size-3" />
            <p>
              {PROFILE_NAME}, {project.coAuthors.join(", ")}
            </p>
          </div>
        </div>
      ) : (
        <div className="meta-container">
          <h4>Project authors</h4>
          <div className="flex items-center gap-1 text-muted-foreground">
            <UserRound className="size-3" />
            <p>{PROFILE_NAME}</p>
          </div>
        </div>
      )}
      {project.bulletPoints?.length > 0 && (
        <div className="meta-container">
          <h4>Highlights</h4>
          <BulletList items={project.bulletPoints} />
        </div>
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
