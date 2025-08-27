export interface ConfigAnalyticsData {
  googleAnalytics?: {
    measurementId: string;
  };
  simpleAnalytics?: {
    hostname: string;
  };
  plausible?: {
    domain: string;
    src?: string;
  };
  umami?: {
    websiteId: string;
    src?: string;
  };
  matomo?: {
    url: string;
    siteId: string;
  };
  microsoftClarity?: {
    projectId: string;
  };
  mixpanel?: {
    token: string;
  };
}

export interface ConfigSeoData {
  title?: string;
  description?: string;
  keywords?: string[];
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  ogUrl?: string;
  twitterCard?: "summary" | "summary_large_image" | "app" | "player";
  twitterSite?: string;
  twitterCreator?: string;
}

export interface ConfigNavigationData {
  showHomeInNav?: boolean;
  showProjectsInNav?: boolean;
  showArticlesInNav?: boolean;
  showCommunityInNav?: boolean;
  customMenuItems?: Array<{
    href: string;
    label: string;
    external?: boolean;
  }>;
}

export interface ConfigMiscData {
  footerSubtitle?: string;
  siteName?: string;
  siteUrl?: string;
  locale?: string;
  timezone?: string;
  webVitals?: {
    enabled?: boolean;
    logToConsole?: boolean;
  };
  content?: {
    articleLabel?: string; // e.g., "Articles", "Blog", "Essays", "Writings"
    articleLabelSingular?: string; // e.g., "Article", "Post", "Essay", "Writing"
    articleSlug?: string; // e.g., "articles", "blog", "essays", "writings"
  };
}

export interface ConfigData {
  analytics: ConfigAnalyticsData;
  seo: ConfigSeoData;
  navigation?: ConfigNavigationData;
  misc: ConfigMiscData;
}
