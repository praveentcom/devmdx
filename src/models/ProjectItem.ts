import { EnumTag } from '@/lib/helpers/tag-mapper';
import { Project } from '@/types/project';

export class ProjectItem implements Project {
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

  constructor(init: Project) {
    this.slug = init.slug;
    this.name = init.name;
    this.stack = init.stack;
    this.description = init.description;
    this.bulletPoints = init.bulletPoints ?? [];
    this.url = init.url;
    this.githubUrl = init.githubUrl;
    this.imagePath = init.imagePath;
    this.coAuthors = init.coAuthors;
    this.featured = init.featured;
    this.date = init.date;
  }
}

export default ProjectItem;
