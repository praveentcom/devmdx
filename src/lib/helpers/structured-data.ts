import { profileData } from "@/data/profile";
import { getAuthorName, getSiteUrl } from "@/lib/helpers/config";
import { Article } from "@/types/article";
import { Community, CommunityContributionType } from "@/types/community";
import { Project } from "@/types/project";
import WorkExperienceItem from "@/models/WorkExperienceItem";
import EducationItem from "@/models/EducationItem";
import { TagMapper } from "@/lib/helpers/tag-mapper";
import { BASE_URL, URLS } from "@/lib/constants";

// Schema.org structured data generators for SEO rich snippets
export function generatePersonSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: getAuthorName(),
    jobTitle: profile.currentPosition,
    description: profile.description,
    url: getSiteUrl() || BASE_URL,
    image: profile.imageUrl,
    sameAs: [
      profile.socialMedia?.linkedin,
      profile.socialMedia?.x,
      profile.socialMedia?.instagram,
      profile.socialMedia?.youtube,
      profile.links?.github,
      profile.links?.stackoverflow,
    ].filter(Boolean),
    worksFor: profileData.workExperience[0]
      ? {
          "@type": "Organization",
          name: profileData.workExperience[0].company,
        }
      : undefined,
    alumniOf: profileData.education.map((edu) => ({
      "@type": "EducationalOrganization",
      name: edu.college,
    })),
  };
}

export function generateArticleSchema(article: Article & { year?: string }) {
  const year = article.year ?? new Date(article.date).getFullYear().toString();

  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: article.title,
    description: article.description,
    image: article.image,
    datePublished: new Date(article.date).toISOString(),
    dateModified: new Date(article.date).toISOString(),
    author: {
      "@type": "Person",
      name: getAuthorName(),
      url: getSiteUrl() || BASE_URL,
    },
    publisher: {
      "@type": "Person",
      name: getAuthorName(),
      logo: {
        "@type": "ImageObject",
        url: profile.imageUrl,
      },
    },
    url: URLS.ARTICLES(year, article.slug),
    wordCount: article.content?.split(" ").length || 0,
    timeRequired: `PT${Math.max(1, Math.ceil((article.content?.split(" ").length || 0) / 200))}M`,
    keywords: article.tags.join(", "),
  };
}

export function generateCommunitySchema(
  community: Community & {
    content: string;
    year?: string;
    type?: CommunityContributionType;
  },
) {
  const year =
    community.year ?? new Date(community.date).getFullYear().toString();

  const eventData: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "Event",
    name: community.title,
    description: community.description,
    image: community.image,
    startDate: new Date(community.date).toISOString(),
    performer: {
      "@type": "Person",
      name: getAuthorName(),
      url: getSiteUrl() || BASE_URL,
    },
    organizer: {
      "@type": "Person",
      name: getAuthorName(),
      url: getSiteUrl() || BASE_URL,
    },
    url: URLS.COMMUNITY(year, community.slug),
    eventStatus: "https://schema.org/EventScheduled",
    eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
    about: community.description,
    recordedIn: community.youtubeUrl
      ? {
          "@type": "VideoObject",
          url: community.youtubeUrl,
          name: community.title,
          description: community.description,
        }
      : undefined,
  };

  // Optionally add an additionalType hint based on contribution type
  if (community.type) {
    eventData["additionalType"] = URLS.COMMUNITY_CONTRIBUTIONS(community.type);
  }

  return eventData;
}

export function generateProjectSchema(project: Project) {
  const techMapper = new TagMapper();
  const programmingLanguages = (project.stack || [])
    .map((tech) => techMapper.getDetails(tech)?.label)
    .filter(Boolean) as string[];

  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: project.name,
    description: project.description,
    url: project.url || URLS.PROJECTS(project.slug),
    image: project.imagePath,
    author: {
      "@type": "Person",
      name: getAuthorName(),
    },
    programmingLanguage: programmingLanguages.join(", "),
    dateCreated: project.date?.toISOString(),
    codeRepository: project.githubUrl,
    contributor: project.coAuthors?.map((name) => ({
      "@type": "Person",
      name,
    })),
  };
}

export function generateWorkSchema(work: WorkExperienceItem) {
  return {
    "@context": "https://schema.org",
    "@type": "WorkExperience",
    name: work.role,
    description: work.bulletPoints?.join(". "),
    worksFor: {
      "@type": "Organization",
      name: work.company,
      logo: work.companyImagePath,
    },
    startDate: work.startDate.toISOString().split("T")[0],
    endDate: work.endDate?.toISOString().split("T")[0],
    employee: {
      "@type": "Person",
      name: getAuthorName(),
    },
    skills: work.skills?.join(", "),
  };
}

export function generateEducationSchema(education: EducationItem) {
  return {
    "@context": "https://schema.org",
    "@type": "EducationalOccupationalCredential",
    name: education.degree,
    description: education.bulletPoints?.join(". "),
    educationalCredentialAwarded: education.degree,
    recognizedBy: {
      "@type": "EducationalOrganization",
      name: education.college,
      logo: education.collegeImagePath,
    },
    validFrom: education.startDate.toISOString().split("T")[0],
    validUntil: education.endDate?.toISOString().split("T")[0],
    credentialSubject: {
      "@type": "Person",
      name: getAuthorName(),
    },
  };
}
