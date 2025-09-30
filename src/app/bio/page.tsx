import { Metadata } from "next";
import { Breadcrumb } from "passport-ui/breadcrumb";
import { ContentContainer } from "passport-ui/content-container";
import { StructuredData } from "passport-ui/structured-data";

import { getRouteSeoImage } from "@/components/helpers/config";
import { createPageMetadata } from "@/components/helpers/metadata";
import { generateDefaultSchema } from "@/components/helpers/structured-data";
import { URLS } from "@/components/helpers/urls";
import { AboutSection } from "@/components/sections/about-section";
import { EducationSection } from "@/components/sections/education-section";
import { ProjectsSection } from "@/components/sections/projects-section";
import { WorkExperienceSection } from "@/components/sections/work-experience-section";
import { profileData } from "@/data/profile";

export default function BioPage() {
  return (
    <ContentContainer variant="relaxed">
      <StructuredData data={generateDefaultSchema()} />
      <Breadcrumb
        path={[
          {
            label: "Home",
            href: URLS.HOME(),
          },
          {
            label: "Bio",
            href: URLS.BIO(),
          },
        ]}
      />
      <div className="section-container">
        <h2>Bio</h2>
        <AboutSection profile={profileData.profile} />
      </div>
      <WorkExperienceSection workExperience={profileData.workExperience} />
      <EducationSection education={profileData.education} />
      <ProjectsSection
        projects={profileData.projects.map((p) => ({
          ...p,
        }))}
      />
    </ContentContainer>
  );
}

export async function generateMetadata(): Promise<Metadata> {
  const metadata = createPageMetadata({
    title: `Bio`,
    description: `Complete biography and professional background. ${profileData.profile.description}`,
    keywords: [
      "bio",
      "biography",
      "professional background",
      "work experience",
      "education",
      "projects",
    ],
    url: URLS.BIO(),
    image: getRouteSeoImage(URLS.BIO()),
  });

  return metadata;
}
