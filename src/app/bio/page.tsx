import { Metadata } from "next";

import { EducationSection } from "@/components/sections/EducationSection";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { WorkExperienceSection } from "@/components/sections/WorkExperienceSection";
import { BackButton, PageWithStructuredData } from "@/components/ui/common";
import { profileData } from "@/data/profile";
import { URLS } from "@/lib/constants";
import { getRouteSeoImage } from "@/lib/helpers/config";
import { createPageMetadata } from "@/lib/helpers/metadata";
import { generateDefaultSchema } from "@/lib/helpers/structured-data";

export default function BioPage() {
  return (
    <PageWithStructuredData structuredData={generateDefaultSchema()}>
      <div className="min-h-screen bg-background">
        <div className="page-container">
          <div className="grid gap-2">
            <BackButton href={URLS.HOME()} label="Back to Home" />
            <div className="grid gap-5">
              <WorkExperienceSection
                workExperience={profileData.workExperience}
              />
              <EducationSection education={profileData.education} />
              <ProjectsSection
                projects={profileData.projects.map((p) => ({
                  ...p,
                }))}
              />
            </div>
          </div>
        </div>
      </div>
    </PageWithStructuredData>
  );
}

export async function generateMetadata(): Promise<Metadata> {
  const metadata = createPageMetadata({
    title: `Bio`,
    description: `Complete biography and professional background. ${profileData.profile.description}`,
    keywords: `bio, biography, professional background, work experience, education, projects`,
    url: URLS.BIO(),
    image: getRouteSeoImage(URLS.BIO()),
  });

  return metadata;
}
