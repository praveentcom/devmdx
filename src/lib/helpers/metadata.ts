import { Metadata } from "next";

import { configData } from "@/data/config";
import { profileData } from "@/data/profile";
import { BASE_URL } from "@/lib/constants";
import { COLOR_SCHEMES } from "@/lib/constants/colors";
import { URLS } from "@/lib/constants/urls";
import { getArticleLabel } from "@/lib/helpers/config";
import { generatePlaceholderImageUrl } from "@/lib/helpers/image";

export function getAuthorName(): string {
  return `${profileData.profile.firstName} ${profileData.profile.lastName}`;
}

export function getSiteName(): string {
  return configData.misc.siteName || getAuthorName();
}

export function createNotFoundMetadata(type: string): Metadata {
  return {
    title: `${type} not found`,
    description: `The requested ${type.toLowerCase()} could not be found.`,
  };
}

export function createOpenGraphImage(
  imageUrl: string | undefined,
  fallbackText: string,
  colorScheme: { background: string; text: string },
  altText: string,
  width = 1200,
  height = 630,
) {
  return {
    url:
      imageUrl ||
      generatePlaceholderImageUrl({
        text: fallbackText,
        backgroundColor: colorScheme.background,
        textColor: colorScheme.text,
      }),
    width,
    height,
    alt: altText,
  };
}

/**
 * Create a complete metadata object with OpenGraph and Twitter cards
 */
export function createPageMetadata(config: {
  title: string;
  description: string;
  openGraphTitle?: string;
  openGraphDescription?: string;
  type?: "website" | "article" | "profile";
  imageUrl?: string;
  fallbackImageText: string;
  colorScheme: { background: string; text: string };
  keywords?: string;
  publishedTime?: string;
  authors?: string[];
  url?: string;
}): Metadata {
  const {
    title,
    description,
    openGraphTitle = title,
    openGraphDescription = description,
    type = "website",
    imageUrl,
    fallbackImageText,
    colorScheme,
    keywords,
    authors = [getAuthorName()],
    url,
  } = config;

  const image = createOpenGraphImage(
    imageUrl,
    fallbackImageText,
    colorScheme,
    openGraphTitle,
  );

  const metadata: Metadata = {
    title,
    description,
    openGraph: {
      title: openGraphTitle,
      description: openGraphDescription,
      type,
      images: [image],
      siteName: getSiteName(),
      url: url ? `${BASE_URL}${url}` : undefined,
    },
    twitter: {
      card: configData.seo.twitterCard || "summary_large_image",
      title: openGraphTitle,
      description: openGraphDescription,
      images: [image.url],
      site: configData.seo.twitterSite,
      creator: configData.seo.twitterCreator,
    },
    authors: authors.map((name) => ({ name })),
  };

  if (keywords) {
    metadata.keywords = keywords;
  }

  return metadata;
}

/**
 * Create metadata for individual items (articles, projects, work, education)
 */
export function createItemMetadata(config: {
  itemName: string;
  itemDescription: string;
  authorName?: string;
  imageUrl?: string;
  colorScheme: { background: string; text: string };
  type?: "website" | "article" | "profile";
  keywords?: string;
  publishedTime?: string;
  url?: string;
}): Metadata {
  const {
    itemName,
    itemDescription,
    authorName = getAuthorName(),
    imageUrl,
    colorScheme,
    type = "website",
    keywords,
    publishedTime,
    url,
  } = config;

  return createPageMetadata({
    title: `${itemName} | ${authorName}`,
    description: itemDescription,
    openGraphTitle: itemName,
    openGraphDescription: itemDescription,
    type,
    imageUrl,
    fallbackImageText: itemName,
    colorScheme,
    keywords,
    publishedTime,
    authors: [authorName],
    url,
  });
}

/**
 * Create metadata for listing pages (articles list, projects list, etc.)
 */
export function createListingMetadata(config: {
  pageType: string;
  description: string;
  colorScheme: { background: string; text: string };
  keywords?: string;
  url?: string;
}): Metadata {
  const { pageType, description, colorScheme, keywords, url } = config;
  const authorName = getAuthorName();

  return createPageMetadata({
    title: `${authorName} | ${pageType}`,
    description,
    openGraphTitle: pageType,
    openGraphDescription: description,
    imageUrl: undefined,
    fallbackImageText: pageType,
    colorScheme,
    keywords,
    url,
  });
}

/**
 * Create metadata for filtered/tagged pages
 */
export function createFilteredMetadata(config: {
  filterName: string;
  contentType: string;
  count: number;
  colorScheme: { background: string; text: string };
  keywords?: string;
  url?: string;
}): Metadata {
  const { filterName, contentType, count, colorScheme, keywords, url } = config;
  const authorName = getAuthorName();
  const pluralType = contentType.toLowerCase();

  const description =
    count > 0
      ? `${count} ${pluralType}${count === 1 ? "" : "s"} about ${filterName}. Discover insights and solutions related to ${filterName}.`
      : `Discover ${pluralType} related to ${filterName}.`;

  return createPageMetadata({
    title: `${authorName} | ${filterName} ${pluralType}`,
    description,
    openGraphTitle: `${filterName} ${pluralType}`,
    openGraphDescription: `${contentType} about ${filterName}`,
    imageUrl: undefined,
    fallbackImageText: filterName,
    colorScheme,
    keywords:
      keywords ||
      `${filterName}, ${pluralType}, development, technology, programming`,
    url,
  });
}

/**
 * Common patterns for different page types (articles, projects, work, education)
 */
export const METADATA_PATTERNS = {
  article: (
    title: string,
    description: string,
    imageUrl?: string,
    publishedTime?: string,
    url?: string,
    isPrivate?: boolean,
  ) => {
    const metadata = createItemMetadata({
      itemName: title,
      itemDescription: description,
      imageUrl,
      colorScheme: COLOR_SCHEMES.ARTICLE,
      type: "article",
      publishedTime,
      url,
    });

    if (isPrivate) {
      metadata.robots = {
        index: false,
        follow: false,
      };
    }

    return metadata;
  },

  project: (
    name: string,
    description: string,
    technologies: string[],
    imageUrl?: string,
    url?: string,
  ) =>
    createItemMetadata({
      itemName: name,
      itemDescription: description,
      imageUrl,
      colorScheme: COLOR_SCHEMES.PROJECT,
      keywords: `${technologies.join(", ")}, ${name}, project, portfolio`,
      url,
    }),

  work: (
    role: string,
    company: string,
    description: string,
    skills: string[],
    imageUrl?: string,
    url?: string,
  ) =>
    createItemMetadata({
      itemName: `${role} at ${company}`,
      itemDescription: description,
      imageUrl,
      colorScheme: COLOR_SCHEMES.WORK,
      type: "profile",
      keywords: `${skills.join(", ")}, ${company}, ${role}, work experience, career`,
      url,
    }),

  education: (
    degree: string,
    college: string,
    description: string,
    imageUrl?: string,
    url?: string,
  ) =>
    createItemMetadata({
      itemName: `${degree} from ${college}`,
      itemDescription: description,
      imageUrl,
      colorScheme: COLOR_SCHEMES.EDUCATION,
      type: "profile",
      keywords: `${college}, ${degree}, education, academic, qualification`,
      url,
    }),

  articlesList: () =>
    createListingMetadata({
      pageType: getArticleLabel(),
      description:
        "A collection of articles about development, technology, and more. Sharing insights and knowledge from my journey as a developer.",
      colorScheme: COLOR_SCHEMES.ARTICLE,
      keywords:
        "articles, blog, development, technology, programming, tutorials",
      url: URLS.ARTICLES_LIST(),
    }),

  projectsList: () =>
    createListingMetadata({
      pageType: "Projects",
      description:
        "A comprehensive showcase of all my projects and contributions. Explore the technologies I work with and the solutions I've built.",
      colorScheme: COLOR_SCHEMES.PROJECT,
      keywords:
        "projects, portfolio, development, programming, open source, web applications, software",
      url: "/projects",
    }),

  tagArticles: (tagName: string, articleCount: number, url?: string) =>
    createFilteredMetadata({
      filterName: tagName,
      contentType: getArticleLabel(),
      count: articleCount,
      colorScheme: COLOR_SCHEMES.ARTICLE,
      url,
    }),

  tagProjects: (tagName: string, projectCount: number, url?: string) =>
    createFilteredMetadata({
      filterName: tagName,
      contentType: "Projects",
      count: projectCount,
      colorScheme: COLOR_SCHEMES.PROJECT,
      url,
    }),
} as const;
