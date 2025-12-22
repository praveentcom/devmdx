import { z } from "zod";

const WorkExperienceSchema = z.object({
  slug: z.string(),
  role: z.string(),
  company: z.string(),
  startDate: z
    .union([z.string(), z.date()])
    .transform((val) =>
      val instanceof Date ? val.toISOString().split("T")[0] : val,
    ),
  endDate: z
    .union([z.string(), z.date()])
    .optional()
    .transform((val) =>
      val instanceof Date ? val.toISOString().split("T")[0] : val,
    ),
  skills: z.array(z.string()).optional(),
  image: z.string().optional(),
  ogImage: z.string().optional(),
});

export type WorkExperience = z.infer<typeof WorkExperienceSchema> & {
  year: string;
  image: string;
};

export { WorkExperienceSchema };
