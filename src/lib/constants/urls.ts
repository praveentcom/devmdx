import { getEnvConfig } from "../helpers/env-config";

const envConfig = getEnvConfig();
export const BASE_URL = envConfig.baseUrl;

// Common URL patterns
export const URLS = {
  ARTICLES: (year: string, slug: string) => `/articles/${year}/${slug}`,
  COMMUNITY: (year: string, slug: string) => `/community/${year}/${slug}`,
  PROJECTS: (slug: string) => `/projects/${slug}`,
  WORK: (slug: string) => `/work/${slug}`,
  EDUCATION: (slug: string) => `/education/${slug}`,
  COMMUNITY_CONTRIBUTIONS: (type: string) => `/community/contributions/${type}`,
} as const;
