import { EnumTag } from '@/lib/helpers/tag-mapper';

export interface WorkExperience {
  slug: string;
  role: string;
  company: string;
  companyImagePath?: string;
  startDate: Date;
  endDate?: Date;
  bulletPoints: string[];
  skills?: EnumTag[];
}
