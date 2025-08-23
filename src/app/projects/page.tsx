import { profileData } from "@/data/profile";
import { Project } from "@/types/project";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { TagBadge } from "@/components/ui/tag-badge";
import { Users, GitPullRequestArrow } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import EmptyPlaceholderCard from "@/components/ui/empty-placeholder-card";
import type { Metadata } from "next";
import { METADATA_PATTERNS } from "@/lib/helpers/metadata";
import { PageWithStructuredData } from "@/components/ui/common";

export const metadata: Metadata = METADATA_PATTERNS.projectsList();

function ProjectCard({ project }: { project: Project }) {
  const { name, stack, description, bulletPoints, imagePath, coAuthors } =
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
              </div>
              <p className="text-muted-foreground leading-relaxed text-sm">
                {description}
              </p>
              <div className="flex flex-wrap gap-2 mt-2.5">
                {stack.map((tag, index) => (
                  <TagBadge key={index} tag={tag} clickable={false} />
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

export default function ProjectsPage() {
  return (
    <PageWithStructuredData
      structuredData={{
        "@context": "https://schema.org",
        "@type": "CollectionPage",
        name: "Projects",
        description:
          "A comprehensive showcase of all my projects and contributions",
      }}
    >
      <div className="container mx-auto px-4 py-4 sm:py-2 max-w-6xl">
        <div className="grid gap-5">
          <div className="grid">
            <div className="flex items-center gap-2">
              <GitPullRequestArrow className="size-5 text-primary cursor-pointer" />
              <h1 className="text-lg font-semibold">Projects</h1>
            </div>
            <p className="text-sm text-muted-foreground">
              A comprehensive showcase of all my projects and contributions
            </p>
          </div>

          {profileData.projects.length > 0 ? (
            <div className="space-y-4">
              {profileData.projects.map((project, index) => (
                <ProjectCard key={index} project={project} />
              ))}
            </div>
          ) : (
            <EmptyPlaceholderCard
              title="None added yet"
              subtitle="Check back in a while, due for an update."
            />
          )}
        </div>
      </div>
    </PageWithStructuredData>
  );
}
