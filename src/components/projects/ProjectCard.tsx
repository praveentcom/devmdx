import { format } from "date-fns";
import { Calendar, Users } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { TagBadge } from "@/components/ui/tag-badge";
import { URLS } from "@/lib/constants/urls";
import { Project } from "@/types/project";

interface ProjectCardProps {
  project: Project;
  currentTag?: string;
}

export function ProjectCard({ project, currentTag }: ProjectCardProps) {
  const { name, stack, description, bulletPoints, imagePath, coAuthors, date } =
    project;

  return (
    <Link href={URLS.PROJECTS(project.slug)} className="block">
      <Card borderTrail>
        <CardHeader>
          <div className="card-header-layout">
            {imagePath && (
              <div className="card-image-container">
                <Image
                  src={imagePath}
                  alt={`${name} preview`}
                  width={80}
                  height={80}
                  className="entity-image"
                />
              </div>
            )}
            <div className="grid gap-1.5">
              <p className={`text-md leading-none font-medium`}>{name}</p>
              <div className="grid gap-0.5">
                {date && (
                  <div className="flex items-center font-medium gap-1 text-xs text-muted-foreground">
                    <Calendar className="size-3" />
                    <span>{format(date, "MMMM yyyy")}</span>
                  </div>
                )}
                {coAuthors && coAuthors.length > 0 && (
                  <div className="flex items-center font-medium gap-1 text-xs text-muted-foreground">
                    <Users className="size-3" />
                    <span>with {coAuthors.join(", ")}</span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="grid gap-6 w-full">
            <div className="grid gap-4 w-full">
              <p className="text-muted-foreground leading-relaxed text-sm">
                {description}
              </p>
              <div className="flex flex-wrap gap-1.5">
                {stack.map((tag, index) => (
                  <TagBadge
                    key={index}
                    tag={tag}
                    clickable={currentTag ? tag !== currentTag : false}
                    source="projects"
                  />
                ))}
              </div>
            </div>
            <ul className="bullet-list">
              {bulletPoints.map((point, index) => (
                <li key={index} className="bullet-item">
                  <div className="bullet-dot" />
                  <span className="bullet-text">{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}
