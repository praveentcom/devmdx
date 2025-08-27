import { getArticleSlug } from "../helpers/config";
import { getEnvConfig } from "../helpers/env-config";

const envConfig = getEnvConfig();
export const BASE_URL = envConfig.baseUrl;

export const URLS = {
  ARTICLES: (year: string, slug: string) =>
    `/${getArticleSlug()}/${year}/${slug}`,
  ARTICLES_LIST: () => `/${getArticleSlug()}`,
  ARTICLES_YEAR: (year: string) => `/${getArticleSlug()}/${year}`,
  ARTICLES_TAG: (tag: string) => `/${getArticleSlug()}/tag/${tag}`,
  ARTICLES_CATEGORY: (category: string) =>
    `/${getArticleSlug()}/category/${category}`,
  COMMUNITY: (year: string, slug: string) => `/community/${year}/${slug}`,
  PROJECTS: (slug: string) => `/projects/${slug}`,
  WORK: (slug: string) => `/work/${slug}`,
  EDUCATION: (slug: string) => `/education/${slug}`,
  COMMUNITY_CONTRIBUTIONS: (type: string) => `/community/contributions/${type}`,
} as const;
