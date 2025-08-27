import { configData } from "@/data/config";
import { profileData } from "@/data/profile";

/**
 * Get the site name from config or fallback to profile name
 */
export function getSiteName(): string {
  return (
    configData.misc.siteName ||
    `${profileData.profile.firstName} ${profileData.profile.lastName}`
  );
}

/**
 * Get the site URL from config
 */
export function getSiteUrl(): string {
  return configData.misc.siteUrl || "https://example.com";
}

/**
 * Get the author name from profile
 */
export function getAuthorName(): string {
  return `${profileData.profile.firstName} ${profileData.profile.lastName}`;
}

/**
 * Get SEO title with fallback
 */
export function getSeoTitle(): string {
  return configData.seo.title || getAuthorName();
}

/**
 * Get SEO description with fallback
 */
export function getSeoDescription(): string {
  return configData.seo.description || profileData.profile.description || "";
}

/**
 * Get OG image with fallback
 */
export function getOgImage(): string {
  return configData.seo.ogImage || "https://placehold.co/1024x628.png";
}

/**
 * Get the article label (plural) from config or fallback
 */
export function getArticleLabel(): string {
  return configData.misc.content?.articleLabel || "Articles";
}

/**
 * Get the article label (singular) from config or fallback
 */
export function getArticleLabelSingular(): string {
  return configData.misc.content?.articleLabelSingular || "Article";
}

/**
 * Get the article URL slug from config or fallback
 */
export function getArticleSlug(): string {
  return configData.misc.content?.articleSlug || "articles";
}

export function getNavigationItems() {
  const baseItems = [
    ...(configData.navigation?.showHomeInNav !== false
      ? [{ href: "/", label: "Home" }]
      : []),
    ...(configData.navigation?.showProjectsInNav !== false
      ? [{ href: "/projects", label: "Projects" }]
      : []),
    ...(configData.navigation?.showArticlesInNav !== false
      ? [{ href: `/${getArticleSlug()}`, label: getArticleLabel() }]
      : []),
    ...(configData.navigation?.showCommunityInNav !== false
      ? [{ href: "/community", label: "Community" }]
      : []),
  ];

  const customItems = configData.navigation?.customMenuItems || [];

  return [...baseItems, ...customItems];
}
