import { EnumTag } from "@/lib/helpers/tag-mapper";

export interface Article {
  slug: string;
  title: string;
  description: string;
  content: string;
  date: string;
  readTime: number;
  tags: EnumTag[];
  categories: string[];
  published: boolean;
  private?: boolean;
  image?: string;
}
