import { profileData } from "@/data/profile";
import { Project } from "@/types/project";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { TagBadge } from "@/components/ui/tag-badge";
import { Button } from "@/components/ui/button";
import { Users, ArrowLeft, Calendar } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";
import { EnumTag, TagMapper } from "@/lib/helpers/tag-mapper";
import EmptyPlaceholderCard from "@/components/ui/empty-placeholder-card";
import type { Metadata } from "next";
import {
  createNotFoundMetadata,
  METADATA_PATTERNS,
} from "@/lib/helpers/metadata";
import pluralize from "pluralize";
import { BackButton } from "@/components/ui/common";
import { format } from "date-fns";

interface PageProps {
  params: Promise<{
    tag: string;
  }>;
}

const tagMapper = new TagMapper();

function ProjectCard({
  project,
  currentTag,
}: {
  project: Project;
  currentTag: EnumTag;
}) {
  const { name, stack, description, bulletPoints, imagePath, coAuthors, date } =
    project;

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
            <div className="flex-1 grid">
              <div className="flex-1 grid">
                <p className="text-lg font-semibold">{name}</p>
                {coAuthors && coAuthors.length > 0 && (
                  <div className="flex items-center font-medium gap-1 text-xs text-muted-foreground mb-2">
                    <Users className="icon-xs" />
                    <span>with {coAuthors.join(", ")}</span>
                  </div>
                )}
                {date && (
                  <div className="flex items-center font-medium gap-1 text-xs text-muted-foreground mb-2">
                    <Calendar className="icon-xs" />
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
                    clickable={tag !== currentTag}
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

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { tag } = await params;

  if (!tagMapper.isValidTag(tag)) {
    return createNotFoundMetadata("Tag");
  }

  const techDetails = tagMapper.getDetails(tag);

  if (!techDetails) {
    return createNotFoundMetadata("Tag");
  }

  const filteredProjects = profileData.projects.filter((project) =>
    project.stack.includes(tag),
  );

  return METADATA_PATTERNS.tagProjects(
    techDetails.label,
    filteredProjects.length,
  );
}

export default async function TagProjectsPage({ params }: PageProps) {
  const { tag } = await params;

  if (!tagMapper.isValidTag(tag)) {
    redirect("/");
  }

  const techDetails = tagMapper.getDetails(tag);

  if (!techDetails) {
    redirect("/");
  }

  const filteredProjects = profileData.projects.filter((project) =>
    project.stack.includes(tag),
  );

  return (
    <div className="container mx-auto px-4 py-4 sm:py-2 max-w-6xl">
      <div className="grid gap-5">
        <div className="grid gap-0.5">
          <div className="flex items-center gap-2 mb-4">
            <BackButton
              href="/projects"
              label="Back to projects"
              Icon={ArrowLeft}
            />
          </div>

          <div className="grid gap-2">
            <div className="flex items-center gap-2">
              <Image
                src={techDetails.iconPath}
                alt={`${techDetails.label} icon`}
                width={20}
                height={20}
                className="flex-shrink-0"
              />
              <h1 className="text-lg font-semibold">
                {techDetails.label} projects
              </h1>
            </div>
          </div>
          <p className="text-sm text-muted-foreground">
            {filteredProjects.length > 0
              ? `${filteredProjects.length} ${pluralize("project", filteredProjects.length)} using ${techDetails.label}`
              : `No projects found using ${techDetails.label}`}
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
            title="No projects found"
            subtitle={`There are currently no projects where I've used ${techDetails.label}.`}
          >
            <Button variant="outline" asChild>
              <Link href="/projects">Projects</Link>
            </Button>
            <Button variant="outline" asChild>
              <Link href="/">Go home</Link>
            </Button>
          </EmptyPlaceholderCard>
        )}
      </div>
    </div>
  );
}

export async function generateStaticParams() {
  return Object.values(EnumTag).map((tag) => ({
    tag: tag,
  }));
}
