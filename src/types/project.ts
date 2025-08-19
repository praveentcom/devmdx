import { EnumTechnology } from "@/lib/helpers/technology-mapper";

export interface Project {
  slug: string;
  name: string;
  stack: EnumTechnology[];
  description: string;
  bulletPoints: string[];
  url?: string;
  githubUrl?: string;
  imagePath?: string;
  coAuthors?: string[];
  featured?: boolean;
  date?: Date;
}
