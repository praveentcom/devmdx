import { configData } from "@/data/config";
import { profileData } from "@/data/profile";
import { BASE_URL, URLS } from "@/lib/constants/urls";

export const PROFILE_NAME = `${profileData.profile.firstName} ${profileData.profile.lastName}`;

/**
 * Site SEO data
 */
export const SITE_URL = configData.misc.siteUrl || BASE_URL;
export const SITE_TITLE = configData.seo.title || PROFILE_NAME;
export const SITE_DESCRIPTION =
  configData.seo.description || profileData.profile.description || "";
export const SITE_KEYWORDS = configData.seo.keywords || [];
export const SITE_IMAGE =
  configData.seo.image || "https://placehold.co/1200x630.png";

/**
 * Get favicon paths from config with fallbacks to Next.js defaults
 */
export function getFaviconPaths() {
  return {
    ico: configData.seo.favicon?.ico || "/favicon.ico",
    png: configData.seo.favicon?.png || "/icon.png",
    apple: configData.seo.favicon?.apple || "/apple-icon.png",
  };
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

export function getRouteSeoImage(route: string): string {
  return configData.seo.routeImages?.[route] || SITE_IMAGE;
}

export function getNavigationItems() {
  const baseItems = [
    ...(configData.navigation?.showHomeInNav !== false
      ? [{ href: URLS.HOME(), label: "Home" }]
      : []),
    ...(configData.navigation?.showProjectsInNav !== false
      ? [{ href: URLS.PROJECTS_LIST(), label: "Projects" }]
      : []),
    ...(configData.navigation?.showArticlesInNav !== false
      ? [{ href: URLS.ARTICLES_LIST(), label: getArticleLabel() }]
      : []),
    ...(configData.navigation?.showCommunityInNav !== false
      ? [{ href: URLS.COMMUNITY_LIST(), label: "Community" }]
      : []),
  ];

  const customItems = configData.navigation?.customMenuItems || [];

  return [...baseItems, ...customItems];
}
