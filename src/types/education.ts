export interface Education {
  slug: string;
  degree: string;
  school: string;
  image?: string;
  startDate: Date;
  endDate?: Date;
  bulletPoints: string[];
  ogImage?: string;
}
