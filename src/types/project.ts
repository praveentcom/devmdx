import { z } from "zod";

const ProjectSchema = z.object({
  slug: z.string(),
  title: z.string(),
  description: z.string(),
  shortText: z.string().optional(),
  image: z.string().optional(),
  stack: z.array(z.string()),
  url: z.string().optional(),
  githubUrl: z.string().optional(),
  appStoreUrl: z.string().optional(),
  playStoreUrl: z.string().optional(),
  youtubeVideoId: z.string().optional(),
  coAuthors: z.array(z.string()).optional(),
  actualPrice: z.number().optional(),
  originalPrice: z.number().optional(),
  date: z
    .union([z.string(), z.date()])
    .transform((val) =>
      val instanceof Date ? val.toISOString().split("T")[0] : val,
    ),
  ogImage: z.string().optional(),
});

export type Project = z.infer<typeof ProjectSchema> & {
  year: string;
  image: string;
};

export { ProjectSchema };
