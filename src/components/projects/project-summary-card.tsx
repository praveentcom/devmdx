"use client";

import Image from "next/image";
import { PrefetchLink } from "@workspace/ui/components/prefetch-link";

import { formatDateShort } from "@/components/helpers/date";
import { URLS } from "@/components/helpers/urls";
import { Project } from "@/types/project";
import { Badge } from "@workspace/ui/components/badge";

interface ProjectCardProps {
  project: Project;
  currentTag?: string;
}

export function ProjectSummaryCard({ project }: ProjectCardProps) {
  return (
    <PrefetchLink href={URLS.PROJECTS(project.slug)}>
      <div className="flex flex-col gap-1 group">
        {project.image && (
          <div className="shrink-0">
            <Image
              src={project.image}
              alt={project.title}
              width={40}
              height={40}
              className="object-cover size-10 rounded-sm"
            />
          </div>
        )}
        <div className="flex gap-2 items-center">
          <p className="group-hover:underline text-foreground underline-offset-4 decoration-muted-foreground/50">
            {project.title}
          </p>
          {project.githubUrl && <Badge>Open Source</Badge>}
        </div>
        {project.shortText && (
          <p className="text-sm text-muted-foreground">{project.shortText}</p>
        )}
        <p className="text-sm text-muted-foreground">
          {formatDateShort(project.date)}
        </p>
      </div>
    </PrefetchLink>
  );
}
