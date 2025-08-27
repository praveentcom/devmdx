import fs from "fs";
import matter from "gray-matter";
import { compileMDX } from "next-mdx-remote/rsc";
import path from "path";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeSlug from "rehype-slug";
import remarkGfm from "remark-gfm";
import { z } from "zod";

import { generateArticlePlaceholderImage } from "@/lib/helpers/image";
import { calculateReadTime } from "@/lib/helpers/markdown";
import { EnumTag, TagMapper } from "@/lib/helpers/tag-mapper";

const ARTICLE_CONTENT_DIR = path.join(process.cwd(), "data", "articles");

const tagMapper = new TagMapper();

const safeTagsSchema = z.array(z.string()).transform((tags) => {
  return tags.filter((tag) => tagMapper.isValidTag(tag)) as EnumTag[];
});

export const ArticleFrontmatterSchema = z.object({
  title: z.string(),
  description: z.string(),
  date: z.string(),
  tags: safeTagsSchema,
  categories: z.array(z.string()).default([]),
  published: z.boolean().default(true),
  private: z.boolean().optional(),
  image: z.string().optional(),
  slug: z.string().optional(),
});

export type ArticleFrontmatter = Required<
  Pick<
    z.infer<typeof ArticleFrontmatterSchema>,
    "title" | "description" | "date" | "tags" | "categories" | "published"
  >
> &
  Omit<
    z.infer<typeof ArticleFrontmatterSchema>,
    "title" | "description" | "date" | "tags" | "categories" | "published"
  > & {
    year: string;
    slug: string;
    readTime: number;
  };

export type ArticleIndexItem = ArticleFrontmatter;

function isMdxFile(filePath: string): boolean {
  return filePath.endsWith(".mdx");
}

function readDirRecursive(dir: string): string[] {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  const files: string[] = [];
  for (const entry of entries) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      files.push(...readDirRecursive(full));
    } else if (isMdxFile(full)) {
      files.push(full);
    }
  }
  return files;
}

function extractYearFromPath(fullPath: string): string {
  const rel = path.relative(ARTICLE_CONTENT_DIR, fullPath);
  const segments = rel.split(path.sep);
  const year = segments[0];
  return year ?? "unknown";
}

function deriveSlug(
  frontmatterSlug: string | undefined,
  fullPath: string,
): string {
  if (frontmatterSlug && frontmatterSlug.trim().length > 0)
    return frontmatterSlug.trim();
  const base = path.basename(fullPath, path.extname(fullPath));
  return base;
}

export function getAllArticleFiles(): string[] {
  if (!fs.existsSync(ARTICLE_CONTENT_DIR)) return [];
  return readDirRecursive(ARTICLE_CONTENT_DIR);
}

export function getAllArticleSlugs(): ArticleIndexItem[] {
  const files = getAllArticleFiles();
  const items: ArticleIndexItem[] = files.map((fullPath) => {
    const raw = fs.readFileSync(fullPath, "utf-8");
    const { data, content } = matter(raw);

    const parsed = ArticleFrontmatterSchema.parse(data);
    const year = extractYearFromPath(fullPath);
    const slug = deriveSlug(parsed.slug, fullPath);
    const readTime = calculateReadTime(content);

    const normalized: ArticleFrontmatter = {
      title: parsed.title,
      description: parsed.description,
      date: parsed.date,
      tags: parsed.tags,
      categories: parsed.categories,
      published: parsed.published ?? true,
      private: parsed.private,

      image: parsed.image || generateArticlePlaceholderImage(parsed.title),
      slug,
      year,
      readTime,
    };

    return normalized;
  });

  return items
    .filter((p) => p.published && !p.private)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export async function getArticleBySlugCompiled(slug: string): Promise<{
  meta: ArticleIndexItem;
  Content: React.ReactNode;
} | null> {
  const files = getAllArticleFiles();
  const match = files.find((full) => {
    const raw = fs.readFileSync(full, "utf-8");
    const { data } = matter(raw);
    const parsed = ArticleFrontmatterSchema.safeParse(data);
    const derivedSlug = deriveSlug(
      parsed.success ? parsed.data.slug : undefined,
      full,
    );
    return derivedSlug === slug;
  });

  if (!match) return null;

  const raw = fs.readFileSync(match, "utf-8");

  const { content, frontmatter } = await compileMDX<{ [key: string]: unknown }>(
    {
      source: raw,
      options: {
        parseFrontmatter: true,
        mdxOptions: {
          remarkPlugins: [remarkGfm],
          rehypePlugins: [
            rehypeSlug,
            [rehypeAutolinkHeadings, { behavior: "wrap" }],
          ],
        },
      },
    },
  );

  const year = extractYearFromPath(match);
  const ensuredSlug = deriveSlug(
    typeof (frontmatter as Record<string, unknown>)?.slug === "string"
      ? ((frontmatter as Record<string, unknown>).slug as string)
      : undefined,
    match,
  );
  const readTime = calculateReadTime(raw);

  const parsed = ArticleFrontmatterSchema.parse(frontmatter);
  const meta: ArticleFrontmatter = {
    title: parsed.title,
    description: parsed.description,
    date: parsed.date,
    tags: parsed.tags,
    categories: parsed.categories,
    published: parsed.published ?? true,
    private: parsed.private,
    image: parsed.image || generateArticlePlaceholderImage(parsed.title),
    slug: ensuredSlug,
    year,
    readTime,
  };

  return { meta, Content: content };
}

export function getArticleBySlugRaw(
  slug: string,
): { meta: ArticleIndexItem; raw: string } | null {
  const files = getAllArticleFiles();
  const match = files.find((full) => {
    const raw = fs.readFileSync(full, "utf-8");
    const { data } = matter(raw);
    const parsed = ArticleFrontmatterSchema.safeParse(data);
    const derivedSlug = deriveSlug(
      parsed.success ? parsed.data.slug : undefined,
      full,
    );
    return derivedSlug === slug;
  });

  if (!match) return null;

  const raw = fs.readFileSync(match, "utf-8");
  const { data, content } = matter(raw);
  const year = extractYearFromPath(match);
  const parsed = ArticleFrontmatterSchema.parse(data);
  const ensuredSlug = deriveSlug(parsed.slug, match);
  const readTime = calculateReadTime(content);
  const meta: ArticleFrontmatter = {
    title: parsed.title,
    description: parsed.description,
    date: parsed.date,
    tags: parsed.tags,
    categories: parsed.categories,
    published: parsed.published ?? true,
    private: parsed.private,
    image: parsed.image || generateArticlePlaceholderImage(parsed.title),
    slug: ensuredSlug,
    year,
    readTime,
  };

  return { meta, raw: content };
}

export function getAllArticlesIndex(): ArticleIndexItem[] {
  const files = getAllArticleFiles();
  const items: ArticleIndexItem[] = files.map((fullPath) => {
    const raw = fs.readFileSync(fullPath, "utf-8");
    const { data, content } = matter(raw);
    const parsed = ArticleFrontmatterSchema.parse(data);

    const normalized: ArticleFrontmatter = {
      title: parsed.title,
      description: parsed.description,
      date: parsed.date,
      tags: parsed.tags,
      categories: parsed.categories,
      published: parsed.published ?? true,
      private: parsed.private,
      image: parsed.image || generateArticlePlaceholderImage(parsed.title),
      readTime: calculateReadTime(content),
      year: extractYearFromPath(fullPath),
      slug: deriveSlug(parsed.slug, fullPath),
    };

    return normalized;
  });

  return items
    .filter((p) => p.published && !p.private)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getAllCategories(): string[] {
  const allCategories = new Set<string>();

  getAllArticlesIndex().forEach((article) => {
    article.categories.forEach((category) => {
      allCategories.add(category);
    });
  });

  return Array.from(allCategories).sort();
}

export function getArticlesByCategory(category: string): ArticleIndexItem[] {
  return getAllArticlesIndex().filter((article) =>
    article.categories.includes(category),
  );
}
