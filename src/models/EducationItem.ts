import { Education } from '@/types/education';

export class EducationItem implements Education {
  slug: string;
  degree: string;
  college: string;
  collegeImagePath?: string;
  startDate: Date;
  endDate?: Date;
  bulletPoints: string[];

  constructor(init: Education) {
    this.slug = init.slug;
    this.degree = init.degree;
    this.college = init.college;
    this.collegeImagePath = init.collegeImagePath;
    this.startDate = init.startDate;
    this.endDate = init.endDate;
    this.bulletPoints = init.bulletPoints ?? [];
  }
}

export default EducationItem;
