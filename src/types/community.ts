export interface CommunityLink {
  title: string;
  url: string;
}

export enum EnumCommunityContributionType {
  TALK_SESSION = "talk-session",
  WORKSHOP = "workshop",
  ONLINE_COURSE = "online-course",
}

export type CommunityContributionType = `${EnumCommunityContributionType}`;

export interface Community {
  slug: string;
  title: string;
  description: string;
  content: string;
  date: string;
  readTime: number;
  published: boolean;
  image?: string;
  youtubeUrl?: string;
  externalLinks?: CommunityLink[];
  type: CommunityContributionType;
}

export interface CommunityPageData {
  title: string;
  description: string;
  image?: string;
}
