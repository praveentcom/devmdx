import { ConfigData } from "@/types/config";

export const configData: ConfigData = {
  analytics: {
    googleAnalytics: {
      measurementId: "G-XXXXXXXXXX",
    },
    microsoftClarity: {
      projectId: "xxxxxxxxxx",
    },
  },
  seo: {
    title: "DevMDX | Portfolio Template",
    description:
      "A demo site showcasing DevMDX — an open-source portfolio template built with Next.js and MDX. Fork it and make it yours.",
    keywords: [
      "devmdx",
      "portfolio template",
      "next.js portfolio",
      "mdx blog",
      "developer portfolio",
      "open source",
      "react",
      "typescript",
    ],
    image: "https://placehold.co/1200x630/1a1a2e/ffffff?text=DevMDX+Demo",
    twitterCard: "summary_large_image",
    twitterSite: "@johndoe",
    twitterCreator: "@johndoe",
  },
  navigation: {
    home: false,
    projects: true,
    articles: true,
    community: true,
    education: true,
    work: true,
    customLinks: [],
  },
  misc: {
    content: {
      articleLabel: "Article",
      articleSlug: "articles",
    },
    footerLabel: "Built with DevMDX 🚀",
    locale: "en-US",
    timezone: "America/New_York",
  },
};
