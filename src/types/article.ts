import { EnumTopic } from "@/lib/helpers/topic-mapper";

export interface Article {
  slug: string;
  title: string;
  description: string;
  content: string;
  date: string;
  readTime: number;
  tags: EnumTopic[];
  published: boolean;
  image?: string;
}
