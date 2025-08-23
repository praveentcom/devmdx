export const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || "";

// Common URL patterns
export const URLS = {
  ARTICLES: (year: string, slug: string) => `/articles/${year}/${slug}`,
  COMMUNITY: (year: string, slug: string) => `/community/${year}/${slug}`,
  PROJECTS: (slug: string) => `/projects/${slug}`,
  WORK: (slug: string) => `/work/${slug}`,
  EDUCATION: (slug: string) => `/education/${slug}`,
  COMMUNITY_CONTRIBUTIONS: (type: string) => `/community/contributions/${type}`,
} as const;
