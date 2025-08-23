"use client";

import { Project } from "@/types/project";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { TagBadge } from "@/components/ui/tag-badge";
import { Button } from "@/components/ui/button";
import { Users, GitPullRequestArrow, ArrowRight, Calendar } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import EmptyPlaceholderCard from "@/components/ui/empty-placeholder-card";
import { format } from "date-fns";

interface ProjectsSectionProps {
  projects: Project[];
}

function ProjectCard({ project }: { project: Project }) {
  const { name, stack, description, bulletPoints, imagePath, coAuthors, date } =
    project;

  return (
    <Link href={`/projects/${project.slug}`} className="block">
      <Card className="mb-4 card-hover-shadow cursor-pointer transition-shadow">
        <CardHeader>
          <div className="card-header-layout">
            {imagePath && (
              <div className="card-image-container">
                <Image
                  src={imagePath}
                  alt={`${name} preview`}
                  width={80}
                  height={80}
                  className="project-image"
                />
              </div>
            )}
            <div className="flex-1 grid gap-1.5">
              <div className="flex-1 grid">
                <p className="text-md font-semibold">{name}</p>
                {coAuthors && coAuthors.length > 0 && (
                  <div className="flex items-center font-medium gap-1 text-xs text-muted-foreground">
                    <Users className="size-3" />
                    <span>with {coAuthors.join(", ")}</span>
                  </div>
                )}
                {date && (
                  <div className="flex items-center font-medium gap-1 text-xs text-muted-foreground">
                    <Calendar className="size-3" />
                    <span>{format(date, 'MMMM yyyy')}</span>
                  </div>
                )}
              </div>
              <p className="text-muted-foreground leading-relaxed text-sm">
                {description}
              </p>
              <div className="flex flex-wrap gap-2">
                {stack.map((tag, index) => (
                  <TagBadge
                    key={index}
                    tag={tag}
                    clickable={false}
                    source="projects"
                  />
                ))}
              </div>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <ul className="bullet-list">
            {bulletPoints.map((point, index) => (
              <li key={index} className="bullet-item">
                <div className="bullet-dot" />
                <span className="bullet-text">{point}</span>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </Link>
  );
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
      className="w-full grid gap-4 h-min"
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
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      ) : (
        <EmptyPlaceholderCard
          title="None added yet"
          subtitle="Check back in a while, due for an update."
        />
      )}
    </section>
  );
}
