import { GitPullRequestArrow } from "lucide-react";
import type { Metadata } from "next";

import { ProjectCard } from "@/components/projects/ProjectCard";
import { PageWithStructuredData } from "@/components/ui/common";
import EmptyPlaceholderCard from "@/components/ui/empty-placeholder-card";
import { profileData } from "@/data/profile";
import { getAuthorName, METADATA_PATTERNS } from "@/lib/helpers/metadata";

const authorName = getAuthorName();

export const metadata: Metadata = METADATA_PATTERNS.projectsList();

export default function ProjectsPage() {
  return (
    <PageWithStructuredData
      structuredData={{
        "@context": "https://schema.org",
        "@type": "CollectionPage",
        name: `${authorName} | Projects`,
        description:
          "A comprehensive showcase of all my projects and contributions.",
      }}
    >
      <div className="page-container">
        <div className="grid gap-5">
          <div className="grid">
            <div className="flex items-center gap-1.5">
              <GitPullRequestArrow className="size-4 text-primary" />
              <h1 className="text-md font-medium">Projects</h1>
            </div>
            <p className="text-sm text-muted-foreground">
              A comprehensive showcase of all my projects and contributions.
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
              title="None added yet."
              subtitle="Check back in a while, due for an update."
            />
          )}
        </div>
      </div>
    </PageWithStructuredData>
  );
}
