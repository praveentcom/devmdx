import {
  BookOpenIcon,
  BriefcaseIcon,
  FolderIcon,
  GraduationCapIcon,
  HomeIcon,
  LucideIcon,
  UsersIcon,
} from "lucide-react";
import { plural } from "pluralize";

import { URLS } from "@/components/helpers/urls";
import { configData } from "@/data/config";
import { profile } from "@/data/profile";

export const PROFILE_NAME = `${profile.firstName} ${profile.lastName}`;

/**
 * Site SEO data
 */
export const SITE_TITLE = configData.seo.title || PROFILE_NAME;
export const SITE_DESCRIPTION = configData.seo.description || "";
export const SITE_KEYWORDS = configData.seo.keywords || [];
export const SITE_IMAGE = configData.seo.image || "";

/**
 * Get favicon paths from config with fallbacks to Next.js defaults
 * @returns The favicon paths
 */
export function getFaviconPaths(): {
  ico: string;
  png: string;
} {
  return {
    ico: configData.seo.favicon?.ico || "/favicon.ico",
    png: configData.seo.favicon?.png || "/favicon.png",
  };
}

/**
 * Get the article label (plural) from config or fallback
 * @returns The article label (plural)
 */
export function getArticleLabel(): string {
  return configData.misc.content?.articleLabel || "Article";
}

/**
 * Get the article URL slug from config or fallback
 * @returns The article URL slug
 */
export function getArticleSlug(): string {
  return configData.misc.content?.articleSlug || "articles";
}

/**
 * Get the navigation items from config or fallback
 * @returns The navigation items
 */
export function getNavigationItems(): {
  href: string;
  label: string;
  Icon: LucideIcon;
}[] {
  const baseLinks = [
    ...(configData.navigation?.home !== false
      ? [{ href: URLS.HOME(), label: "Home", Icon: HomeIcon }]
      : []),
    ...(configData.navigation?.articles !== false
      ? [
          {
            href: URLS.ARTICLES_LIST(),
            label: plural(getArticleLabel()),
            Icon: BookOpenIcon,
          },
        ]
      : []),
    ...(configData.navigation?.community !== false
      ? [{ href: URLS.COMMUNITY_LIST(), label: "Community", Icon: UsersIcon }]
      : []),
    ...(configData.navigation?.projects !== false
      ? [{ href: URLS.PROJECTS_LIST(), label: "Projects", Icon: FolderIcon }]
      : []),
    ...(configData.navigation?.work !== false
      ? [{ href: URLS.WORK_LIST(), label: "Work", Icon: BriefcaseIcon }]
      : []),
    ...(configData.navigation?.education !== false
      ? [
          {
            href: URLS.EDUCATION_LIST(),
            label: "Education",
            Icon: GraduationCapIcon,
          },
        ]
      : []),
  ];

  const customLinks = configData.navigation?.customLinks || [];

  return [...baseLinks, ...customLinks];
}
