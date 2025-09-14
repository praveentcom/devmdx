"use client";

import Image from "next/image";
import Link from "next/link";

import { formatDateShort } from "@/components/helpers/date";
import { URLS } from "@/components/helpers/urls";
import { Project } from "@/types/project";

interface ProjectCardProps {
  project: Project;
  currentTag?: string;
}

export function ProjectSummaryCard({ project }: ProjectCardProps) {
  return (
    <div className="meta-container">
      <Link href={URLS.PROJECTS(project.slug)} className="block">
        <div className="flex justify-between items-center gap-4 font-medium group">
          <div className="flex gap-2 items-center">
            {project.image && (
              <div className="flex-shrink-0">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={12}
                  height={12}
                  className="object-cover size-4"
                />
              </div>
            )}
            <p className="underline text-muted-foreground group-hover:text-foreground underline-offset-4 decoration-border group-hover:decoration-foreground line-clamp-1">
              {project.title}
            </p>
          </div>
          <p className="min-w-fit text-muted-foreground group-hover:text-foreground opacity-70">
            {formatDateShort(project.date)}
          </p>
        </div>
      </Link>
    </div>
  );
}
