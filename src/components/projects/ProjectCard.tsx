import { format } from "date-fns";
import { Calendar, UserRound, UsersRound } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { TagBadge } from "@/components/ui/tag-badge";
import { URLS } from "@/lib/constants/urls";
import { PROFILE_NAME } from "@/lib/helpers/config";
import { Project } from "@/types/project";

interface ProjectCardProps {
  project: Project;
  currentTag?: string;
}

export function ProjectCard({ project }: ProjectCardProps) {
  const { title, stack, description, bulletPoints, image, coAuthors, date } =
    project;

  return (
    <Link href={URLS.PROJECTS(project.slug)} className="block">
      <Card borderTrail>
        <CardHeader>
          <div className="card-header-layout">
            {image && (
              <div className="card-image-container">
                <Image
                  src={image}
                  alt={`${title} preview`}
                  width={80}
                  height={80}
                  className="entity-image"
                />
              </div>
            )}
            <div className="grid gap-1.5">
              <p className={`text-md leading-none font-medium`}>{title}</p>
              <div className="grid gap-0.5">
                {date && (
                  <div className="flex items-center font-medium gap-1 text-xs text-muted-foreground">
                    <Calendar className="size-3" />
                    <span>{format(date, "MMMM yyyy")}</span>
                  </div>
                )}
                {coAuthors && coAuthors.length > 0 ? (
                  <div className="flex items-center font-medium gap-1 text-xs text-muted-foreground">
                    <UsersRound className="size-3" />
                    <span>
                      {PROFILE_NAME}, {coAuthors.join(", ")}
                    </span>
                  </div>
                ) : (
                  <div className="flex items-center font-medium gap-1 text-xs text-muted-foreground">
                    <UserRound className="size-3" />
                    <span>{PROFILE_NAME}</span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 w-full">
            <div className="flex flex-wrap gap-1.5">
              {stack.map((tag, index) => (
                <TagBadge
                  key={index}
                  tag={tag}
                  source="projects"
                />
              ))}
            </div>
            <div className="grid gap-4 w-full">
              <p className="text-muted-foreground leading-relaxed text-sm">
                {description}
              </p>
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
