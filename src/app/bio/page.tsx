import { ArrowLeft } from "lucide-react";
import { Metadata } from "next";
import Link from "next/link";

import { EducationSection } from "@/components/sections/EducationSection";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { WorkExperienceSection } from "@/components/sections/WorkExperienceSection";
import { Button } from "@/components/ui/button";
import { PageWithStructuredData } from "@/components/ui/common";
import { configData } from "@/data/config";
import { profileData } from "@/data/profile";
import { BASE_URL } from "@/lib/constants";
import { getAuthorName, getOgImage, getSiteName } from "@/lib/helpers/config";
import { generateOpenGraphImage } from "@/lib/helpers/image";
import { generatePersonSchema } from "@/lib/helpers/structured-data";

const authorName = getAuthorName();
const siteName = getSiteName();

export const metadata: Metadata = {
  title: `Bio - ${authorName}`,
  description: `Complete biography and professional background of ${authorName}. ${profileData.profile.description}`,
  openGraph: {
    title: `Bio - ${authorName}`,
    description: `Complete biography and professional background of ${authorName}. ${profileData.profile.description}`,
    type: "profile",
    siteName,
    url: `${BASE_URL}/bio`,
    images: [
      {
        url: getOgImage() || generateOpenGraphImage(`Bio - ${authorName}`),
        width: 1200,
        height: 630,
        alt: `${authorName} - Biography`,
      },
    ],
  },
  twitter: {
    card: configData.seo.twitterCard || "summary_large_image",
    title: `Bio - ${authorName}`,
    description: `Complete biography and professional background of ${authorName}. ${profileData.profile.description}`,
    site: configData.seo.twitterSite,
    creator: configData.seo.twitterCreator,
    images: [getOgImage() || generateOpenGraphImage(`Bio - ${authorName}`)],
  },
  keywords: `${authorName}, bio, biography, professional background, work experience, education, projects`,
  alternates: {
    canonical: "/bio",
    types: {
      "application/rss+xml": authorName,
    },
  },
};

export default function BioPage() {
  return (
    <PageWithStructuredData structuredData={generatePersonSchema()}>
      <div className="min-h-screen bg-background">
        <div className="page-container">
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <Button variant="outline" size="sm" asChild>
                <Link href="/" className="flex items-center gap-1.5">
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
