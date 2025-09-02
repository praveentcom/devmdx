export interface WorkExperience {
  slug: string;
  role: string;
  company: string;
  startDate: Date;
  endDate?: Date;
  bulletPoints: string[];
  skills?: string[];
  image?: string;
  ogImage?: string;
}
