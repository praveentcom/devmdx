export interface Project {
  slug: string;
  name: string;
  stack: string[];
  description: string;
  bulletPoints: string[];
  url?: string;
  githubUrl?: string;
  imagePath?: string;
  coAuthors?: string[];
  featured?: boolean;
  date?: Date;
}
