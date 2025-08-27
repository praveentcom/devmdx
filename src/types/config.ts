export interface ConfigAnalyticsData {
  googleAnalytics?: {
    measurementId: string;
  };
  simpleAnalytics?: {
    hostname: string;
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

export interface ConfigMiscData {
  footerSubtitle?: string;
  siteName?: string;
  siteUrl?: string;
  locale?: string;
  timezone?: string;
}

export interface ConfigData {
  analytics: ConfigAnalyticsData;
  seo: ConfigSeoData;
  misc: ConfigMiscData;
}
