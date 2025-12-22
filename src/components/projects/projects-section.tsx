"use client";

import { GitPullRequestArrow } from "lucide-react";
import { Button } from "@workspace/ui/components/button";
import { PrefetchLink } from "@workspace/ui/components/prefetch-link";

import { URLS } from "@/components/helpers/urls";
import { ProjectSummaryCard } from "@/components/projects/project-summary-card";
import { Project } from "@/types/project";

interface ProjectsSectionProps {
  projects: Project[];
}

export function ProjectsSection({ projects }: ProjectsSectionProps) {
  const latestProjects = [...projects]
    .sort((a, b) => {
      const aTime = a.date ? new Date(a.date).getTime() : 0;
      const bTime = b.date ? new Date(b.date).getTime() : 0;
      return bTime - aTime;
    })
    .slice(0, 6);

  return (
    <section
      role="region"
      aria-label="Featured projects"
      className="section-container"
    >
      <div className="flex items-center justify-between gap-2 text-muted-foreground">
        <div className="flex items-center gap-2">
          <GitPullRequestArrow className="size-4" />
          <h5>Projects</h5>
        </div>
        <PrefetchLink href={URLS.PROJECTS_LIST()}>
          <Button>View all &rarr;</Button>
        </PrefetchLink>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {latestProjects.map((project, index) => (
          <ProjectSummaryCard key={index} project={project} />
        ))}
      </div>
    </section>
  );
}
