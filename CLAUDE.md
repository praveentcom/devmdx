# CLAUDE.md

This file provides guidance for AI assistants working with the DevMDX codebase.

## Project Overview

DevMDX is an MDX-powered blog and portfolio template built with Next.js 16, React 19, TypeScript, Tailwind CSS v4, and shadcn/ui. It renders MDX files from the `data/` directory as blog posts, project pages, community contributions, work history, and education pages. The project focuses on performance, SEO, and developer experience.

## Tech Stack

- **Framework**: Next.js 16 (App Router, React Server Components)
- **Language**: TypeScript (strict mode)
- **Styling**: Tailwind CSS v4 with `@tailwindcss/postcss`, shadcn/ui (radix-vega style)
- **Content**: MDX via `@next/mdx` and `next-mdx-remote`
- **Validation**: Zod v4 for frontmatter schema validation
- **Package Manager**: pnpm 10.26.1 (enforced via `packageManager` field)
- **Node.js**: ^24.0.0 (enforced via `engines` field)
- **Fonts**: Google Sans Flex (sans) and Google Sans Code (mono)
- **Icons**: lucide-react
- **Theming**: next-themes (dark/light/system)

## Commands

```bash
pnpm install          # Install dependencies
pnpm dev              # Start dev server (default port 3001)
pnpm build            # Production build (next build)
pnpm start            # Start production server (default port 3001)
pnpm lint             # Run ESLint (next lint)
pnpm lint:fix         # Run ESLint with auto-fix
pnpm typecheck        # TypeScript type checking (tsc --noEmit)
pnpm format           # ESLint fix + Prettier format
pnpm analyze          # Bundle analysis build
```

The `dev` and `start` scripts load `.env.local` and `.env` files before running Next.js.

## Project Structure

```
devmdx/
├── src/
│   ├── app/                    # Next.js App Router pages
│   │   ├── layout.tsx          # Root layout (fonts, providers, metadata)
│   │   ├── page.tsx            # Home page
│   │   ├── globals.css         # Global styles + Tailwind + hljs themes
│   │   ├── [article]/          # Dynamic article routes (slug configurable)
│   │   ├── projects/           # Project listing and detail pages
│   │   ├── community/          # Community contributions pages
│   │   ├── work/               # Work experience pages
│   │   ├── education/          # Education pages
│   │   ├── about/              # About page
│   │   ├── cover/              # Cover letter page
│   │   ├── sitemap.ts          # Dynamic sitemap generation
│   │   ├── robots.ts           # Dynamic robots.txt generation
│   │   └── feed.xml/route.ts   # RSS feed route handler
│   ├── components/
│   │   ├── article/            # Article-specific UI components
│   │   ├── community/          # Community section components
│   │   ├── common/             # Shared components (date-range, tag-button, etc.)
│   │   ├── education/          # Education section components
│   │   ├── helpers/            # Data fetching, config, metadata, utilities
│   │   ├── layout/             # Header, footer, client layout wrapper
│   │   ├── projects/           # Project section components
│   │   ├── providers.tsx       # Theme provider (next-themes)
│   │   └── work/               # Work experience components
│   └── types/                  # TypeScript types + Zod schemas
│       ├── article.ts          # ArticleSchema, Article, ArticleFrontmatter
│       ├── project.ts          # ProjectSchema, Project
│       ├── community.ts        # CommunitySchema, Community
│       ├── work.ts             # WorkExperienceSchema, WorkExperience
│       ├── education.ts        # EducationSchema, Education
│       ├── config.ts           # ConfigData, ConfigSeoData, etc.
│       └── user-profile.ts     # Profile, SocialLinks
├── data/                       # Content and configuration (MDX + TS)
│   ├── articles/               # Blog articles organized by year (e.g., 2024/)
│   ├── projects/               # Project MDX files organized by year
│   ├── community/              # Community contribution MDX files
│   ├── work/                   # Work experience MDX files
│   ├── education/              # Education MDX files
│   ├── config/index.ts         # Site-wide configuration (SEO, nav, analytics)
│   └── profile/                # User profile data + markdown content
│       ├── index.ts            # Profile object (name, email, socials)
│       ├── intro.md            # Home page intro text
│       ├── about.md            # About page content
│       └── cover.md            # Cover letter content
├── components/
│   └── ui/                     # shadcn/ui components (auto-generated)
├── layouts/                    # Layout containers (content, header, footer)
├── lib/
│   ├── utils.ts                # cn() utility (clsx + tailwind-merge)
│   └── markdown/               # Custom markdown parser utilities
├── scripts/
│   ├── dev.sh                  # Dev server startup with env loading
│   └── start.sh                # Production server startup with env loading
└── public/                     # Static assets (favicon, cover image)
```

## Path Aliases

Defined in `tsconfig.json`:

| Alias | Maps to |
|-------|---------|
| `@/*` | `./src/*` |
| `@/data/*` | `./data/*` |
| `@workspace/ui/components/*` | `./components/ui/*` |
| `@workspace/ui/lib/*` | `./lib/*` |
| `@workspace/ui/hooks/*` | `./hooks/*` |
| `@workspace/ui/layouts/*` | `./layouts/*` |

## Architecture Patterns

### Content System

All content lives in the `data/` directory as MDX files. Each content type (articles, projects, community, work, education) follows this pattern:

1. **MDX files** with YAML frontmatter in `data/<type>/` (articles are organized by year subdirectories)
2. **Zod schemas** in `src/types/<type>.ts` validate frontmatter at read time
3. **Helper functions** in `src/components/helpers/<type>.tsx` handle file reading, parsing, and indexing
4. **Slug derivation**: slugs come from frontmatter `slug` field or fall back to the filename (sanitized)

Articles use `gray-matter` for frontmatter parsing, `next-mdx-remote` for MDX compilation with `remark-gfm`, `rehype-slug`, and `rehype-autolink-headings`.

### Configuration

- **Site config** (`data/config/index.ts`): SEO settings, analytics IDs, navigation toggles, content labels, and misc settings. Typed by `ConfigData` interface.
- **Profile** (`data/profile/index.ts`): User profile data (name, email, social links). Typed by `Profile` interface.
- **Environment config** (`src/components/helpers/env-config.ts`): Runtime config from environment variables for base URL, image hostnames, CSP, and robots settings.

### Environment Variables

| Variable | Purpose |
|----------|---------|
| `NEXT_PUBLIC_BASE_URL` | Site base URL for metadata/OG tags |
| `NEXT_PUBLIC_ALLOWED_IMAGE_HOSTNAMES` | Comma-separated allowed image hostnames |
| `NEXT_PUBLIC_ALLOWED_HOSTNAMES` | Comma-separated allowed hostnames for CSP |
| `NEXT_PUBLIC_ALLOW_ROBOTS` | Set to `"true"` to allow search engine indexing |
| `PORT` | Server port (default: 3001) |

### Routing

The App Router uses dynamic segments. The article route segment `[article]` is configurable via `configData.misc.content.articleSlug` (defaults to `"articles"`). Key routes:

- `/` — Home (intro markdown + recent articles)
- `/<articleSlug>/<year>/<slug>` — Article detail
- `/projects/<slug>` — Project detail
- `/community/<year>/<slug>` — Community contribution detail
- `/work/<slug>` — Work experience detail
- `/education/<slug>` — Education detail
- `/about`, `/cover` — Static content pages
- `/sitemap.xml`, `/feed.xml`, `/robots.txt` — SEO routes

### Component Organization

- **UI primitives** (`components/ui/`): shadcn/ui components. These are auto-generated — do not manually modify.
- **Layout containers** (`layouts/`): Page-level wrappers for header, content, and footer.
- **Feature components** (`src/components/<feature>/`): Domain-specific components grouped by content type.
- **Helper modules** (`src/components/helpers/`): Data access, URL building, metadata generation, config access. These are server-side modules using `fs` and should not be imported in client components.
- **Providers** (`src/components/providers.tsx`): Client-side theme provider wrapper.

### Metadata and SEO

Every page generates metadata via `createPageMetadata()` from `src/components/helpers/metadata.ts`. This produces OpenGraph, Twitter Card, and Apple Web App metadata. Structured data (JSON-LD) is added via the `StructuredData` component.

## Code Conventions

### TypeScript

- Strict mode enabled
- Use Zod schemas for all content frontmatter validation
- Types exported alongside their schemas from `src/types/`
- Prefer `type` over `interface` for data shapes (project convention)

### Imports

- **Import sorting enforced** via `eslint-plugin-simple-import-sort` (errors on unsorted imports)
- Use path aliases (`@/`, `@/data/`, `@workspace/ui/`) — never relative paths across directory boundaries

### Styling

- Tailwind CSS v4 with CSS variables for theming (oklch color space)
- Use the `cn()` utility from `@workspace/ui/lib/utils` for conditional class merging
- Dark mode via CSS class strategy (`next-themes` with `attribute: "class"`)
- Global base styles defined in `src/app/globals.css`

### Components

- React Server Components by default (Next.js 16 App Router)
- Client components marked with `"use client"` directive only when needed
- shadcn/ui for all UI primitives (buttons, cards, dialogs, etc.)
- Icons from `lucide-react`

### Content

- Articles: MDX files in `data/articles/<year>/` with frontmatter fields: `title`, `description`, `date`, `tags`, `categories`, `published`, `image`, `slug`
- Projects: MDX files in `data/projects/<year>/` with frontmatter fields: `slug`, `title`, `description`, `stack`, `date`, `url`, `githubUrl`, etc.
- Community: MDX files in `data/community/` with `type` enum (`talk-session`, `workshop`, `online-course`)
- Work/Education: MDX files in `data/work/` and `data/education/` respectively

### ESLint Configuration

- Flat config format (`eslint.config.mjs`)
- Extends `next/core-web-vitals` and `next/typescript`
- `simple-import-sort/imports` and `simple-import-sort/exports` set to `"error"`
- Ignores: `node_modules/`, `.next/`, `out/`, `build/`, `next-env.d.ts`

## Common Tasks

### Adding a new article

Create an MDX file in `data/articles/<year>/` with the required frontmatter:

```mdx
---
title: "Article Title"
description: "Brief description"
date: "2024-01-15"
tags: ["tag1", "tag2"]
categories: ["category"]
published: true
---

Article content here...
```

### Adding a new project

Create an MDX file in `data/projects/<year>/` with required frontmatter matching `ProjectSchema`.

### Modifying navigation

Edit `data/config/index.ts` — toggle sections via the `navigation` object (`home`, `projects`, `articles`, `community`, `education`, `work`). Add custom links via `customLinks` array.

### Changing the article URL slug

Edit `configData.misc.content.articleSlug` in `data/config/index.ts`. For example, set to `"blog"` to use `/blog/` URLs instead of `/articles/`.

### Adding shadcn/ui components

Use the shadcn CLI to add components. They will be placed in `components/ui/` per the `components.json` configuration.

## Security

- Next.js security headers configured: `X-Content-Type-Options`, `X-Frame-Options`, `X-XSS-Protection`, `Referrer-Policy`
- Console statements removed in production builds (`compiler.removeConsole`)
- Content Security Policy generated dynamically based on allowed hostnames
- Image remote patterns restricted to configured hostnames
- HTML sanitization via `dompurify` for rendered content
