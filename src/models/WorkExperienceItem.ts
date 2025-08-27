import { EnumTag } from "@/lib/helpers/tag-mapper";
import { WorkExperience } from "@/types/work";

export class WorkExperienceItem implements WorkExperience {
  slug: string;
  role: string;
  company: string;
  companyImagePath?: string;
  startDate: Date;
  endDate?: Date;
  bulletPoints: string[];
  skills?: EnumTag[];

  constructor(init: WorkExperience) {
    this.slug = init.slug;
    this.role = init.role;
    this.company = init.company;
    this.companyImagePath = init.companyImagePath;
    this.startDate = init.startDate;
    this.endDate = init.endDate;
    this.bulletPoints = init.bulletPoints ?? [];
    this.skills = init.skills;
  }
}

export default WorkExperienceItem;
