export interface Education {
  slug: string;
  degree: string;
  college: string;
  collegeImagePath?: string;
  startDate: Date;
  endDate?: Date;
  bulletPoints: string[];
}
