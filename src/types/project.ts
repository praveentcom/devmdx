import { EnumTag } from '@/lib/helpers/tag-mapper';

export interface Project {
  slug: string;
  name: string;
  stack: EnumTag[];
  description: string;
  bulletPoints: string[];
  url?: string;
  githubUrl?: string;
  imagePath?: string;
  coAuthors?: string[];
  featured?: boolean;
  date?: Date;
}
