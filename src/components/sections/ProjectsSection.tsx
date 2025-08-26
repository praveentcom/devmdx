"use client";

import { Project } from "@/types/project";
import { Button } from "@/components/ui/button";
import { GitPullRequestArrow, ArrowRight } from "lucide-react";
import Link from "next/link";
import EmptyPlaceholderCard from "@/components/ui/empty-placeholder-card";
import { ProjectCard } from "@/components/projects/ProjectCard";

interface ProjectsSectionProps {
  projects: Project[];
}

export function ProjectsSection({ projects }: ProjectsSectionProps) {
  const latestProjects = [...projects]
    .sort((a, b) => {
      const aFeatured = a.featured ? 1 : 0;
      const bFeatured = b.featured ? 1 : 0;
      if (aFeatured !== bFeatured) return bFeatured - aFeatured;
      const aTime = a.date ? a.date.getTime() : 0;
      const bTime = b.date ? b.date.getTime() : 0;
      return bTime - aTime;
    })
    .slice(0, 3);

  return (
    <section
      role="region"
      aria-label="Featured projects"
      className="w-full grid gap-3"
    >
      <div className="flex items-center justify-between gap-2">
        <div className="flex items-center gap-2">
          <GitPullRequestArrow className="size-5 text-primary" />
          <h2 className="text-md font-semibold">Featured projects</h2>
        </div>
        <Button variant="outline" size="sm" asChild>
          <Link href="/projects" className="flex items-center gap-2">
            View projects
            <ArrowRight className="icon-sm" />
          </Link>
        </Button>
      </div>
      {latestProjects.length > 0 ? (
        <div className="space-y-4">
          {latestProjects.map((project, index) => (
            <ProjectCard key={index} project={project} size="compact" />
          ))}
        </div>
      ) : (
        <EmptyPlaceholderCard
          title="None added yet."
          subtitle="Check back in a while, due for an update."
        />
      )}
    </section>
  );
}
