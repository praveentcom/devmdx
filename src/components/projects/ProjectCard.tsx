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

export function ProjectCard({ project, currentTag, size = "default" }: ProjectCardProps) {
  const { name, stack, description, bulletPoints, imagePath, coAuthors, date } = project;

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
                  className="project-image"
                />
              </div>
            )}
            <div className="flex-1 grid gap-1.5">
              <div className="flex-1 grid">
                <p className={`${titleSize} font-semibold`}>{name}</p>
                {coAuthors && coAuthors.length > 0 && (
                  <div className="flex items-center font-medium gap-1 text-xs text-muted-foreground">
                    <Users className={size === "compact" ? "size-3" : "icon-xs"} />
                    <span>with {coAuthors.join(", ")}</span>
                  </div>
                )}
                {date && (
                  <div className="flex items-center font-medium gap-1 text-xs text-muted-foreground">
                    <Calendar className={size === "compact" ? "size-3" : "icon-xs"} />
                    <span>{format(date, 'MMMM yyyy')}</span>
                  </div>
                )}
              </div>
              <p className="text-muted-foreground leading-relaxed text-sm">
                {description}
              </p>
              <div className="flex flex-wrap gap-2 mt-2.5">
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
          </div>
        </CardHeader>
        <CardContent>
          <ul className="bullet-list mb-4">
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