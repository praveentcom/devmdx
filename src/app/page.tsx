import { profileData } from "@/data/profile";
import { AboutSection } from "@/components/sections/AboutSection";
import { WorkExperienceSection } from "@/components/sections/WorkExperienceSection";
import { EducationSection } from "@/components/sections/EducationSection";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { ArticlesSection } from "@/components/sections/ArticlesSection";
import { CommunitySection } from "@/components/sections/CommunitySection";
import { generateOpenGraphImage } from "@/lib/helpers/image";
import { Metadata } from "next";
import { PageWithStructuredData } from "@/components/ui/common";
import { generatePersonSchema } from "@/lib/helpers/structured-data";

export const metadata: Metadata = {
  title: `${profileData.profile.firstName} ${profileData.profile.lastName}`,
  description: profileData.profile.description,
  openGraph: {
    title: `${profileData.profile.firstName} ${profileData.profile.lastName}`,
    description: profileData.profile.description,
    type: "profile",
    images: [
      {
        url:
          profileData.profile.ogCoverImage ||
          generateOpenGraphImage(
            `${profileData.profile.firstName} ${profileData.profile.lastName}`,
          ),
        width: 1200,
        height: 630,
        alt: `${profileData.profile.firstName} ${profileData.profile.lastName} - ${profileData.profile.currentPosition}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${profileData.profile.firstName} ${profileData.profile.lastName}`,
    description: profileData.profile.description,
    images: [
      profileData.profile.ogCoverImage ||
        generateOpenGraphImage(
          `${profileData.profile.firstName} ${profileData.profile.lastName}`,
        ),
    ],
  },
  keywords: `${profileData.profile.firstName} ${profileData.profile.lastName}, ${profileData.profile.currentPosition}, developer, portfolio, ${profileData.profile.bulletPoints?.join(", ")}`,
  authors: [
    {
      name: `${profileData.profile.firstName} ${profileData.profile.lastName}`,
    },
  ],
};

export default function HomePage() {
  return (
    <PageWithStructuredData structuredData={generatePersonSchema()}>
      <div className="min-h-screen bg-background">
        <div className="container mx-auto px-4 py-4 sm:py-2 max-w-6xl">
          <div className="space-y-5">
            <AboutSection profile={profileData.profile} />
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 h-min pt-2.5">
              <WorkExperienceSection
                workExperience={profileData.workExperience}
              />
              <EducationSection education={profileData.education} />
            </div>
            <ProjectsSection
              projects={profileData.projects.map((p) => ({ ...p }))}
            />
            <ArticlesSection />
            <CommunitySection />
          </div>
        </div>
      </div>
    </PageWithStructuredData>
  );
}
