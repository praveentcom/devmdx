import { Metadata } from 'next';

import { AboutSection } from '@/components/sections/AboutSection';
import { ArticlesSection } from '@/components/sections/ArticlesSection';
import { CommunitySection } from '@/components/sections/CommunitySection';
import { ProjectsSection } from '@/components/sections/ProjectsSection';
import { PageWithStructuredData } from '@/components/ui/common';
import { configData } from '@/data/config';
import { profileData } from '@/data/profile';
import { BASE_URL } from '@/lib/constants';
import {
  getAuthorName,
  getOgImage,
  getSeoDescription,
  getSeoTitle,
  getSiteName,
} from '@/lib/helpers/config';
import { generateOpenGraphImage } from '@/lib/helpers/image';
import { generatePersonSchema } from '@/lib/helpers/structured-data';

const authorName = getAuthorName();
const siteName = getSiteName();
const seoTitle = getSeoTitle();
const seoDescription = getSeoDescription();

export const metadata: Metadata = {
  title: seoTitle,
  description: seoDescription,
  openGraph: {
    title: configData.seo.ogTitle || authorName,
    description: configData.seo.ogDescription || seoDescription,
    type: 'profile',
    siteName,
    url: configData.seo.ogUrl || configData.misc.siteUrl || BASE_URL,
    images: [
      {
        url: getOgImage() || generateOpenGraphImage(authorName),
        width: 1200,
        height: 630,
        alt: `${authorName} - ${profileData.profile.currentPosition || 'Professional'}`,
      },
    ],
  },
  twitter: {
    card: configData.seo.twitterCard || 'summary_large_image',
    title: configData.seo.ogTitle || authorName,
    description: configData.seo.ogDescription || seoDescription,
    site: configData.seo.twitterSite,
    creator: configData.seo.twitterCreator,
    images: [getOgImage() || generateOpenGraphImage(authorName)],
  },
  keywords:
    configData.seo.keywords ||
    `${authorName}, ${profileData.profile.currentPosition || 'professional'}, developer, portfolio, ${profileData.profile.bulletPoints?.join(', ')}`,
  authors: [
    {
      name: authorName,
    },
  ],
};

export default function HomePage() {
  return (
    <PageWithStructuredData structuredData={generatePersonSchema()}>
      <div className="min-h-screen bg-background">
        <div className="page-container">
          <div className="space-y-6">
            <AboutSection profile={profileData.profile} />
            <ArticlesSection />
            <CommunitySection />
            <ProjectsSection
              projects={profileData.projects.map((p) => ({ ...p }))}
            />
          </div>
        </div>
      </div>
    </PageWithStructuredData>
  );
}
