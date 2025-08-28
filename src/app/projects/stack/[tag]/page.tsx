import { ArrowLeft } from "lucide-react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import pluralize from "pluralize";

import { ProjectCard } from "@/components/projects/ProjectCard";
import { Button } from "@/components/ui/button";
import { BackButton } from "@/components/ui/common";
import EmptyPlaceholderCard from "@/components/ui/empty-placeholder-card";
import { profileData } from "@/data/profile";
import { URLS } from "@/lib/constants/urls";
import { METADATA_PATTERNS } from "@/lib/helpers/metadata";
import { getTagImagePath } from "@/lib/helpers/tag-mapper";

interface PageProps {
  params: Promise<{
    tag: string;
  }>;
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { tag } = await params;
  const filteredProjects = profileData.projects.filter((project) =>
    project.stack.includes(tag),
  );

  return METADATA_PATTERNS.tagProjects(
    tag,
    filteredProjects.length,
    `/projects/stack/${tag}`,
  );
}

export default async function TagProjectsPage({ params }: PageProps) {
  const { tag } = await params;

  const filteredProjects = profileData.projects.filter((project) =>
    project.stack.includes(tag),
  );

  return (
    <div className="page-container">
      <div className="grid gap-5">
        <div className="grid gap-0.5">
          <BackButton
            href={URLS.PROJECTS_LIST()}
            label="Back to projects"
            Icon={ArrowLeft}
          />

          <div className="flex items-center gap-1.5">
            <Image
              src={getTagImagePath(tag)}
              alt={`${tag} icon`}
              width={20}
              height={20}
              className="flex-shrink-0"
            />
            <h1 className="text-md font-medium">{tag} projects</h1>
          </div>
          <p className="text-sm text-muted-foreground">
            {filteredProjects.length > 0
              ? `${filteredProjects.length} ${pluralize("project", filteredProjects.length)} using ${tag}`
              : `No projects found using ${tag}`}
          </p>
        </div>

        {filteredProjects.length > 0 ? (
          <div className="space-y-4">
            {filteredProjects.map((project, index) => (
              <ProjectCard key={index} project={project} currentTag={tag} />
            ))}
          </div>
        ) : (
          <EmptyPlaceholderCard
            title="No projects found."
            subtitle={`There are currently no projects where I've used ${tag}.`}
          >
            <Button variant="outline" asChild>
              <Link href={URLS.PROJECTS_LIST()}>Projects</Link>
            </Button>
            <Button variant="outline" asChild>
              <Link href={URLS.HOME()}>Go home</Link>
            </Button>
          </EmptyPlaceholderCard>
        )}
      </div>
    </div>
  );
}
