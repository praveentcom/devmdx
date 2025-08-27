import { ConfigData } from "@/types/config";

export const configData: ConfigData = {
  analytics: {
    // Uncomment and add your GA4 Measurement ID to enable Google Analytics
    // googleAnalytics: {
    //   measurementId: "G-XXXXXXXXXX",
    // },
    
    // Uncomment and add your hostname to enable Simple Analytics
    // simpleAnalytics: {
    //   hostname: "yourdomain.com",
    // },

    // Uncomment and add your domain to enable Plausible Analytics
    // plausible: {
    //   domain: "yourdomain.com",
    //   src: "https://plausible.io/js/script.js",
    // },

    // Uncomment and add your website ID to enable Umami Analytics
    // umami: {
    //   websiteId: "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx",
    //   src: "https://analytics.umami.is/script.js",
    // },

    // Uncomment and configure to enable Matomo Analytics
    // matomo: {
    //   url: "https://your-matomo-instance.com/",
    //   siteId: "1",
    // },

    // Uncomment and add your project ID to enable Microsoft Clarity
    // microsoftClarity: {
    //   projectId: "xxxxxxxxxx",
    // },

    // Uncomment and add your token to enable Mixpanel Analytics
    // mixpanel: {
    //   token: "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
    // },
  },
  seo: {
    title: "John Doe",
    description: "A passionate full-stack developer with expertise in modern web technologies, cloud architecture, and team leadership. Dedicated to building scalable solutions that make a meaningful impact on users and businesses.",
    keywords: [
      "full stack developer",
      "software engineer",
      "react",
      "node.js",
      "typescript",
      "javascript",
      "web development",
      "frontend development",
      "backend development",
      "cloud architecture",
      "aws",
      "microservices",
      "devops",
      "team leadership",
      "technical leadership",
      "open source",
      "machine learning",
      "ai",
      "performance optimization",
      "scalable systems",
    ],
    ogTitle: "John Doe",
    ogDescription: "A passionate full-stack developer with expertise in modern web technologies, cloud architecture, and team leadership. Dedicated to building scalable solutions that make a meaningful impact on users and businesses.",
    ogImage: "https://placehold.co/1024x628.png",
    ogUrl: "https://johndoe.dev",
    twitterCard: "summary_large_image",
    twitterSite: "@johndoe",
    twitterCreator: "@johndoe",
  },
  navigation: {
    showHomeInNav: true,
    showProjectsInNav: true,
    showArticlesInNav: true,
    showCommunityInNav: true,
    // customMenuItems: [
    //   { href: '/resume', label: 'Resume', external: false },
    //   { href: 'https://example.com', label: 'Portfolio', external: true },
    // ],
  },
  misc: {
    footerSubtitle: "Life is beautiful, isn't it?",
    siteName: "John Doe",
    siteUrl: "https://johndoe.dev",
    locale: "en-US",
    timezone: "America/New_York",
    webVitals: {
      enabled: true,
      logToConsole: true, // Set to false in production
    },
    content: {
      articleLabel: "Articles", // Change to "Blog", "Essays", "Writings", etc.
      articleLabelSingular: "Article", // Change to "Post", "Essay", "Writing", etc.
      articleSlug: "articles", // Change to "blog", "essays", "writings", etc.
    },
  },
};

