import { profileData } from "@/data/profile";
import { AboutSection } from "@/components/sections/AboutSection";
import { ArticlesSection } from "@/components/sections/ArticlesSection";
import { CommunitySection } from "@/components/sections/CommunitySection";
import { generateOpenGraphImage } from "@/lib/helpers/image";
import { Metadata } from "next";
import { PageWithStructuredData } from "@/components/ui/common";
import { generatePersonSchema } from "@/lib/helpers/structured-data";
import { BASE_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: `${profileData.profile.firstName} ${profileData.profile.lastName}`,
  description: profileData.profile.description,
  openGraph: {
    title: `${profileData.profile.firstName} ${profileData.profile.lastName}`,
    description: profileData.profile.description,
    type: "profile",
    siteName: `${profileData.profile.firstName} ${profileData.profile.lastName}`,
    url: BASE_URL,
    images: [
      {
        url:
          profileData.profile.ogCoverImage ||
          generateOpenGraphImage(
            `${profileData.profile.firstName} ${profileData.profile.lastName}`,
          ),
        width: 1200,
        height: 630,
        alt: `${profileData.profile.firstName} ${profileData.profile.lastName} - ${profileData.profile.currentPosition || "Professional"}`,
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
  keywords: `${profileData.profile.firstName} ${profileData.profile.lastName}, ${profileData.profile.currentPosition || "professional"}, developer, portfolio, ${profileData.profile.bulletPoints?.join(", ")}`,
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
        <div className="page-container">
          <div className="space-y-8">
            <AboutSection profile={profileData.profile} />
            <ArticlesSection />
            <CommunitySection />
          </div>
        </div>
      </div>
    </PageWithStructuredData>
  );
}
