import { MetadataRoute } from "next";
import { profileData } from "@/data/profile";
import { getAllArticlesIndex } from "@/lib/helpers/article";
import { getAllCommunityIndex } from "@/lib/helpers/community";
import { EnumTechnology } from "@/lib/helpers/technology-mapper";
import { BASE_URL } from "@/lib/constants";

export default function sitemap(): MetadataRoute.Sitemap {

  // Static pages
  const staticPages = [
    "",
    "/articles",
    "/community",
    "/projects",
    "/cover",
  ].map((route) => ({
    url: `${BASE_URL}${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: route === "" ? 1 : 0.8,
  }));

  // Get articles without client-side image generation
  const allArticles = getAllArticlesIndex();

  // Get community contributions
  const allCommunity = getAllCommunityIndex();

  // Article pages
  const articles = allArticles.map((article) => ({
    url: `${BASE_URL}/articles/${article.year}/${article.slug}`,
    lastModified: new Date(article.date),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  // Article year listing pages
  const articleYears = Array.from(new Set(allArticles.map((a) => a.year))).map(
    (year) => ({
      url: `${BASE_URL}/articles/${year}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.6,
    }),
  );

  const articleTopics = Array.from(
    new Set(allArticles.flatMap((article) => article.tags)),
  ).map((topic) => ({
    url: `${BASE_URL}/articles/topic/${topic}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  // Community contribution pages
  const community = allCommunity.map((contribution) => ({
    url: `${BASE_URL}/community/${contribution.year}/${contribution.slug}`,
    lastModified: new Date(contribution.date),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  // Community year listing pages
  const communityYears = Array.from(
    new Set(allCommunity.map((c) => c.year)),
  ).map((year) => ({
    url: `${BASE_URL}/community/${year}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  // Community type listing pages
  const communityTypes = Array.from(
    new Set(allCommunity.map((c) => c.type)),
  ).map((type) => ({
    url: `${BASE_URL}/community/contributions/${type}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  // Project pages
  const projects = profileData.projects.map((project) => ({
    url: `${BASE_URL}/projects/${project.slug}`,
    lastModified: project.date || new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  // Technology stack pages
  const projectStacks = Object.values(EnumTechnology).map((tech) => ({
    url: `${BASE_URL}/projects/stack/${tech}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  // Work experience pages
  const workExperience = profileData.workExperience.map((work) => ({
    url: `${BASE_URL}/work/${work.slug}`,
    lastModified: new Date(),
    changeFrequency: "yearly" as const,
    priority: 0.5,
  }));

  // Education pages
  const education = profileData.education.map((edu) => ({
    url: `${BASE_URL}/education/${edu.slug}`,
    lastModified: new Date(),
    changeFrequency: "yearly" as const,
    priority: 0.5,
  }));

  return [
    ...staticPages,
    ...articles,
    ...articleTopics,
    ...community,
    ...articleYears,
    ...communityYears,
    ...communityTypes,
    ...projects,
    ...projectStacks,
    ...workExperience,
    ...education,
  ];
}
