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
