import { Project } from "@/types/project";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { TagBadge } from "@/components/ui/tag-badge";
import { Users, Calendar } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { format } from "date-fns";
import { EnumTag } from "@/lib/helpers/tag-mapper";

interface ProjectCardProps {
  project: Project;
  /** Tag to disable clicking on (for stack/tag pages) */
  currentTag?: EnumTag;
  /** Size variant for different contexts */
  size?: "default" | "compact";
}

export function ProjectCard({
  project,
  currentTag,
  size = "default",
}: ProjectCardProps) {
  const { name, stack, description, bulletPoints, imagePath, coAuthors, date } =
    project;

  const titleSize = size === "compact" ? "text-md" : "text-lg";

  return (
    <Link href={`/projects/${project.slug}`} className="block">
      <Card className="card-hover-shadow cursor-pointer transition-shadow">
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
              <p className={`${titleSize} leading-none font-semibold`}>
                {name}
              </p>
              <div className="grid gap-0.5">
                {date && (
                  <div className="flex items-center font-medium gap-1 text-xs text-muted-foreground">
                    <Calendar
                      className={size === "compact" ? "size-3" : "icon-xs"}
                    />
                    <span>{format(date, "MMMM yyyy")}</span>
                  </div>
                )}
                {coAuthors && coAuthors.length > 0 && (
                  <div className="flex items-center font-medium gap-1 text-xs text-muted-foreground">
                    <Users
                      className={size === "compact" ? "size-3" : "icon-xs"}
                    />
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
              <div className="flex flex-wrap gap-2">
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
