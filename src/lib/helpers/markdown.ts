import { Article } from "@/types/article";
import { EnumTag } from "@/lib/helpers/tag-mapper";
import { format } from "date-fns";

// Custom markdown parser with syntax highlighting and copy functionality
export function parseMarkdown(content: string): string {
  const codeBlocks: string[] = [];
  let processedContent = content.replace(
    /```(\w+)?\n([\s\S]*?)```/g,
    (match, lang, code) => {
      const lines = code.trim().split("\n");
      const codeRows = lines
        .map((line: string, index: number) => {
          const isFirstLine = index === 0;
          const isLastLine = index === lines.length - 1;
          const paddingClass = isFirstLine
            ? " pt-3"
            : isLastLine
              ? " pb-3"
              : "";

          const lineNumber = `<span class="select-none text-xs text-muted-foreground/60 inline-block w-10 text-right pr-3 bg-muted/30 border-r border-border/50${paddingClass}">${index + 1}</span>`;
          const codeLine = `<span class="inline-block w-full${paddingClass}">${line || " "}</span>`;
          return `<div class="flex gap-3">${lineNumber}${codeLine}</div>`;
        })
        .join("");

      const codeBlock = `<div class="relative bg-card border border-border rounded-md overflow-hidden mb-3 group">
        <button 
          class="absolute top-3 right-3 p-1.5 rounded bg-card border border-transparent hover:border-border cursor-pointer hover:bg-accent transition-colors duration-200 z-10" 
          onclick="copyCode(this)"
          type="button"
          aria-label="Copy code"
          title="Copy code">
          <svg class="size-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
          </svg>
        </button>
        <pre class="overflow-x-auto p-0 m-0 bg-transparent"><code class="text-xs leading-tight block p-0 m-0">${codeRows}</code></pre>
      </div>`;

      codeBlocks.push(codeBlock);
      return `__CODE_BLOCK_${codeBlocks.length - 1}__`;
    },
  );

  processedContent = processedContent
    .replace(
      /^### (.*$)/gim,
      '<h3 class="text-sm font-semibold mb-1.5 mt-3 leading-relaxed">$1</h3>',
    )
    .replace(
      /^## (.*$)/gim,
      '<h2 class="text-base font-semibold mb-2 mt-4 leading-relaxed">$1</h2>',
    )
    .replace(
      /^# (.*$)/gim,
      '<h1 class="text-lg font-bold mb-3 mt-4 leading-relaxed">$1</h1>',
    )
    .replace(
      /`([^`]+)`/g,
      '<code class="bg-muted px-1 py-0.5 rounded text-xs font-mono">$1</code>',
    )
    .replace(/\*\*(.*?)\*\*/g, '<strong class="font-semibold">$1</strong>')
    .replace(/\*(.*?)\*/g, '<em class="italic">$1</em>')
    .replace(/~~(.*?)~~/g, '<del class="line-through opacity-75">$1</del>')
    .replace(
      /!\[([^\]]*)\]\(([^)]+)\)/g,
      '<img src="$2" alt="$1" class="rounded-md max-w-full h-auto my-3 border border-border/50" />',
    )
    .replace(
      /\[([^\]]+)\]\(([^)]+)\)/g,
      '<a href="$2" target="_blank" rel="noopener noreferrer" class="text-primary hover:underline font-medium inline-flex items-center gap-1">$1<svg class="w-3 h-3 opacity-70" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/></svg></a>',
    )
    .replace(/^---$/gm, '<hr class="my-4 border-t border-border/50" />')
    .replace(
      /^> (.*$)/gim,
      '<blockquote class="relative pl-4 py-2 mb-3 bg-muted/30 rounded-md italic text-sm leading-relaxed text-muted-foreground"><div class="absolute left-1 top-1 bottom-1 w-1 bg-primary/30 rounded-full"></div>$1</blockquote>',
    )
    .replace(
      /^\- \[ \] (.*$)/gim,
      '<li class="ml-2 mb-0 text-sm leading-relaxed flex items-center gap-2"><input type="checkbox" disabled class="rounded border-border/50 text-primary focus:ring-primary/50" /> $1</li>',
    )
    .replace(
      /^\- \[x\] (.*$)/gim,
      '<li class="ml-2 mb-0 text-sm leading-relaxed flex items-center gap-2"><input type="checkbox" checked disabled class="rounded border-border/50 text-primary focus:ring-primary/50" /> $1</li>',
    )
    .replace(
      /^\- (.*$)/gim,
      '<li class="ml-2 mb-0 text-sm leading-relaxed">• $1</li>',
    )
    .replace(
      /^\d+\. (.*$)/gim,
      '<li class="ml-2 mb-0 text-sm leading-relaxed">$1</li>',
    )
    .replace(/\n\n/g, '</p><p class="mb-2 text-sm leading-relaxed">')
    .replace(
      /^(?!<[h|l|p|c|b|i|d|_])/gm,
      '<p class="mb-2 text-sm leading-relaxed">',
    )
    .replace(/(?<!>)$/gm, "</p>")
    .replace(/<p class="mb-2 text-sm leading-relaxed"><\/p>/g, "")
    .replace(
      /<p class="mb-2 text-sm leading-relaxed">(<[h|l|p|c|b|i|d])/g,
      "$1",
    );

  codeBlocks.forEach((codeBlock, index) => {
    processedContent = processedContent.replace(
      `__CODE_BLOCK_${index}__`,
      codeBlock,
    );
  });

  return processedContent;
}

export function calculateReadTime(content: string): number {
  const wordsPerMinute = 200;
  const words = content.split(/\s+/).length;
  return Math.ceil(words / wordsPerMinute);
}

export function formatDate(dateString: string): string {
  const date = new Date(dateString);
  return format(date, "LLLL d, yyyy");
}

export function getPublishedArticles(articles: Article[]): Article[] {
  return articles
    .filter((article) => article.published)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getArticlesBySlug(
  articles: Article[],
  slug: string,
): Article | undefined {
  return articles.find((article) => article.slug === slug && article.published);
}

export function getArticlesByTag(articles: Article[], tag: EnumTag): Article[] {
  return articles
    .filter((article) => article.published && article.tags.includes(tag))
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getAllTags(articles: Article[]): EnumTag[] {
  const tagSet = new Set<EnumTag>();
  articles
    .filter((article) => article.published)
    .forEach((article) => article.tags.forEach((tag) => tagSet.add(tag)));
  return Array.from(tagSet).sort();
}
