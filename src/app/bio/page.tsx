import { profileData } from "@/data/profile";
import { WorkExperienceSection } from "@/components/sections/WorkExperienceSection";
import { EducationSection } from "@/components/sections/EducationSection";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { generateOpenGraphImage } from "@/lib/helpers/image";
import { Metadata } from "next";
import { PageWithStructuredData } from "@/components/ui/common";
import { generatePersonSchema } from "@/lib/helpers/structured-data";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { BASE_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: `Bio - ${profileData.profile.firstName} ${profileData.profile.lastName}`,
  description: `Complete biography and professional background of ${profileData.profile.firstName} ${profileData.profile.lastName}. ${profileData.profile.description}`,
  openGraph: {
    title: `Bio - ${profileData.profile.firstName} ${profileData.profile.lastName}`,
    description: `Complete biography and professional background of ${profileData.profile.firstName} ${profileData.profile.lastName}. ${profileData.profile.description}`,
    type: "profile",
    siteName: `${profileData.profile.firstName} ${profileData.profile.lastName}`,
    url: `${BASE_URL}/bio`,
    images: [
      {
        url:
          profileData.profile.ogCoverImage ||
          generateOpenGraphImage(
            `Bio - ${profileData.profile.firstName} ${profileData.profile.lastName}`,
          ),
        width: 1200,
        height: 630,
        alt: `${profileData.profile.firstName} ${profileData.profile.lastName} - Biography`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `Bio - ${profileData.profile.firstName} ${profileData.profile.lastName}`,
    description: `Complete biography and professional background of ${profileData.profile.firstName} ${profileData.profile.lastName}. ${profileData.profile.description}`,
    images: [
      profileData.profile.ogCoverImage ||
        generateOpenGraphImage(
          `Bio - ${profileData.profile.firstName} ${profileData.profile.lastName}`,
        ),
    ],
  },
  keywords: `${profileData.profile.firstName} ${profileData.profile.lastName}, bio, biography, professional background, work experience, education, projects, ${profileData.profile.firstName?.toLowerCase()}, ${profileData.profile.lastName?.toLowerCase()}`,
  alternates: {
    canonical: "/bio",
    types: {
      "application/rss+xml": `${profileData.profile.firstName} ${profileData.profile.lastName}`,
    },
  },
};

export default function BioPage() {
  return (
    <PageWithStructuredData structuredData={generatePersonSchema()}>
      <div className="min-h-screen bg-background">
        <div className="page-container">
          <div className="space-y-8">
            <div className="flex items-center gap-3">
              <Button variant="outline" size="sm" asChild>
                <Link href="/" className="flex items-center gap-2">
                  <ArrowLeft className="h-4 w-4" />
                  Back to Home
                </Link>
              </Button>
            </div>
            <WorkExperienceSection
              workExperience={profileData.workExperience}
            />
            <EducationSection education={profileData.education} />
            <ProjectsSection
              projects={profileData.projects.map((p) => ({ ...p }))}
            />
          </div>
        </div>
      </div>
    </PageWithStructuredData>
  );
}
