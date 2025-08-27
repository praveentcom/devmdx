import { format } from "date-fns";
import hljs from "highlight.js";

import { EnumTag, TagMapper } from "@/lib/helpers/tag-mapper";
import { Article } from "@/types/article";

function getFileIcon(filename: string): string {
  if (!filename) return '<img src="/images/tech-icons/Docs.png" alt="File" class="w-4 h-4" />';
  
  const ext = filename.split('.').pop()?.toLowerCase();
  const tagMapper = new TagMapper();
  
  const extToTagMap: Record<string, EnumTag> = {
    'js': EnumTag.JAVASCRIPT,
    'mjs': EnumTag.JAVASCRIPT,
    'jsx': EnumTag.REACT,
    'ts': EnumTag.TYPESCRIPT,
    'tsx': EnumTag.REACT,
    'html': EnumTag.HTML5,
    'css': EnumTag.CSS3,
    'scss': EnumTag.SASS,
    'sass': EnumTag.SASS,
    'less': EnumTag.LESS,
    'json': EnumTag.JSON,
    'yaml': EnumTag.YAML,
    'yml': EnumTag.YAML,
    'xml': EnumTag.XML,
    'md': EnumTag.MARKDOWN,
    'sh': EnumTag.BASH,
    'bash': EnumTag.BASH,
    'zsh': EnumTag.BASH,
    'fish': EnumTag.BASH,
    'ps1': EnumTag.POWERSHELL,
    'py': EnumTag.PYTHON,
    'java': EnumTag.JAVA,
    'cpp': EnumTag.CPP,
    'cxx': EnumTag.CPP,
    'cc': EnumTag.CPP,
    'c': EnumTag.C,
    'h': EnumTag.C,
    'hpp': EnumTag.CPP,
    'go': EnumTag.GO,
    'rs': EnumTag.RUST,
    'php': EnumTag.PHP,
    'rb': EnumTag.RUBY,
    'swift': EnumTag.SWIFT,
    'kt': EnumTag.KOTLIN,
    'scala': EnumTag.SCALA,
    'cs': EnumTag.CSHARP,
    'fs': EnumTag.FSHARP,
    'dart': EnumTag.DART,
    'lua': EnumTag.LUA,
    'r': EnumTag.R,
    'pl': EnumTag.PERL,
    'sol': EnumTag.SOLIDITY,
    'dockerfile': EnumTag.DOCKER,
    'makefile': EnumTag.CMAKE,
    'gradle': EnumTag.GRADLE,
    'pom': EnumTag.APACHE_MAVEN,
    'package': EnumTag.NPM,
    'lock': EnumTag.NPM,
    'toml': EnumTag.RUST,
    'env': EnumTag.NODEJS,
  };
  
  const tag = extToTagMap[ext || ''];
  if (tag) {
    const tagDetails = tagMapper.getDetails(tag);
    if (tagDetails) {
      return `<img src="${tagDetails.iconPath}" alt="${tagDetails.label}" class="w-4 h-4" />`;
    }
  }
  
  return '<img src="/images/tech-icons/Docs.png" alt="File" class="w-4 h-4" />';
}

function processLists(html: string): string {
  const lines = html.split('\n');
  const result: string[] = [];
  let currentListType: 'ul' | 'ol' | null = null;
  let listItems: string[] = [];

  const flushList = () => {
    if (currentListType && listItems.length > 0) {
      const listClass = currentListType === 'ol' ? 'list-decimal pl-6 ml-4' : 'list-none pl-0 ml-0';
      result.push(`<${currentListType} class="${listClass}">`);
      result.push(...listItems);
      result.push(`</${currentListType}>`);
      listItems = [];
      currentListType = null;
    }
  };

  for (const line of lines) {
    // Check for unordered list items (-, *, +)
    const unorderedMatch = line.match(/^[\s]*[-*+]\s+(.*)$/);
    // Check for ordered list items (1., 2., etc.)
    const orderedMatch = line.match(/^[\s]*\d+\.\s+(.*)$/);
    // Check for task list items
    const taskUncheckedMatch = line.match(/^[\s]*[-*+]\s+\[\s*\]\s+(.*)$/);
    const taskCheckedMatch = line.match(/^[\s]*[-*+]\s+\[x\]\s+(.*)$/);

    if (taskUncheckedMatch) {
      if (currentListType !== 'ul') {
        flushList();
        currentListType = 'ul';
      }
      listItems.push(`<li class="ml-2 mb-0 text-sm leading-relaxed flex items-center gap-1.5"><input type="checkbox" disabled class="rounded border-border/75 text-primary focus:ring-primary/50" /> ${taskUncheckedMatch[1]}</li>`);
    } else if (taskCheckedMatch) {
      if (currentListType !== 'ul') {
        flushList();
        currentListType = 'ul';
      }
      listItems.push(`<li class="ml-2 mb-0 text-sm leading-relaxed flex items-center gap-1.5"><input type="checkbox" checked disabled class="rounded border-border/75 text-primary focus:ring-primary/50" /> ${taskCheckedMatch[1]}</li>`);
    } else if (unorderedMatch) {
      if (currentListType !== 'ul') {
        flushList();
        currentListType = 'ul';
      }
      listItems.push(`<li class="ml-2 mb-0 text-sm leading-relaxed">• ${unorderedMatch[1]}</li>`);
    } else if (orderedMatch) {
      if (currentListType !== 'ol') {
        flushList();
        currentListType = 'ol';
      }
      listItems.push(`<li class="ml-2 mb-0 text-sm leading-relaxed">${orderedMatch[1]}</li>`);
    } else {
      flushList();
      if (line.trim()) {
        result.push(line);
      }
    }
  }

  flushList(); // Flush any remaining list
  return result.join('\n');
}

export function parseMarkdown(content: string): string {
  const codeBlocks: string[] = [];
  let processedContent = content.replace(
    /```(\w+)?(?:\s+filename="([^"]+)")?\n([\s\S]*?)```/g,
    (match, lang, filename, code) => {
      const trimmedCode = code.trim();
      const originalLines = trimmedCode.split('\n');
      const totalLines = originalLines.length;
      
      const getLineNumberWidth = (total: number) => {
        if (total < 10) return 'w-8';
        if (total < 100) return 'w-10';
        if (total < 1000) return 'w-12';
        return 'w-14';
      };

      const lineNumberWidth = getLineNumberWidth(totalLines);
      
      const numberedLines = originalLines.map((line, index) => {
        const lineNumber = index + 1;
        const isFirstLine = index === 0;
        const isLastLine = index === originalLines.length - 1;
        const lineNumberPadding = isFirstLine ? ' pt-2' : isLastLine ? ' pb-2' : '';
        const contentPadding = isFirstLine ? ' pt-2' : isLastLine ? ' pb-2' : '';
        
        let highlightedLine = line || ' ';
        if (line.trim()) {
          if (lang && hljs.getLanguage(lang)) {
            try {
              highlightedLine = hljs.highlight(line, { language: lang }).value;
            } catch {
              try {
                highlightedLine = hljs.highlightAuto(line).value;
              } catch {
                highlightedLine = line.replace(/</g, '&lt;').replace(/>/g, '&gt;');
              }
            }
          } else {
            try {
              highlightedLine = hljs.highlightAuto(line).value;
            } catch {
              highlightedLine = line.replace(/</g, '&lt;').replace(/>/g, '&gt;');
            }
          }
        }
        
        return `<div class="flex">
          <span class="line-number ${lineNumberWidth}${lineNumberPadding}">${lineNumber}</span>
          <span class="line-content${contentPadding}">${highlightedLine}</span>
        </div>`;
      }).join('');

      const filenameHeader = filename ? `
        <div class="flex items-center gap-2 px-3 py-2 bg-muted/50 border-b border-border/75 text-xs font-medium text-muted-foreground">
          ${getFileIcon(filename)}
          <span>${filename}</span>
        </div>
      ` : '';

      const codeBlock = `<div class="relative bg-card border border-border rounded-sm overflow-hidden mb-3 group w-full break-inside-avoid">
        ${filenameHeader}
        <button 
          class="absolute ${filename ? 'top-14' : 'top-3'} right-3 p-1.5 rounded bg-card border border-transparent hover:border-border cursor-pointer hover:bg-accent transition-colors duration-200 z-10" 
          onclick="copyCode(this)"
          type="button"
          aria-label="Copy code"
          title="Copy code">
          <svg class="size-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
          </svg>
        </button>
        <pre class="overflow-x-auto p-0 m-0 bg-transparent w-full"><code class="hljs block">${numberedLines}</code></pre>
      </div>`;

      codeBlocks.push(codeBlock);
      return `__CODE_BLOCK_${codeBlocks.length - 1}__`;
    },
  );

  processedContent = processedContent
    .replace(
      /^### (.*$)/gim,
      '<h3 class="text-sm font-medium mb-1.5 mt-4 leading-relaxed">$1</h3>',
    )
    .replace(
      /^## (.*$)/gim,
      '<h2 class="text-base font-medium mb-1.5 mt-5 leading-relaxed">$1</h2>',
    )
    .replace(
      /^# (.*$)/gim,
      '<h1 class="text-md font-medium mb-3 mt-6 leading-relaxed">$1</h1>',
    )
    .replace(
      /`([^`]+)`/g,
      '<code class="bg-muted px-1 py-0.5 rounded text-xs font-mono">$1</code>',
    )
    .replace(/\*\*(.*?)\*\*/g, '<strong class="font-medium">$1</strong>')
    .replace(/\*(.*?)\*/g, '<em class="italic">$1</em>')
    .replace(/~~(.*?)~~/g, '<del class="line-through opacity-75">$1</del>')
    .replace(
      /!\[([^\]]*)\]\(([^)]+)\)/g,
      '<img src="$2" alt="$1" class="rounded-sm max-w-full h-auto my-3 border border-border/75 block" />',
    )
    .replace(
      /\[([^\]]+)\]\(([^)]+)\)/g,
      '<a href="$2" target="_blank" rel="noopener noreferrer" class="text-primary hover:underline font-medium inline-flex items-center gap-1">$1<svg class="size-3 opacity-70" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/></svg></a>',
    )
    .replace(/^---$/gm, '<hr class="my-4 border-t border-border/75" />')
    .replace(
      /^> (.*$)/gim,
      '<blockquote class="relative pl-4 py-2 mb-3 bg-muted/30 rounded-sm italic text-sm leading-relaxed text-muted-foreground"><div class="absolute left-1 top-1 bottom-1 w-1 bg-primary/30 rounded-full"></div>$1</blockquote>',
    );

  processedContent = processedContent.replace(/\n\n/g, '</p><p class="mb-1.5 text-sm leading-relaxed">')
    .replace(
      /^(?!<[h|l|p|c|b|i|d|_])/gm,
      '<p class="mb-1.5 text-sm leading-relaxed">',
    )
    .replace(/(?<!>)$/gm, "</p>")
    .replace(/<p class="mb-1.5 text-sm leading-relaxed"><\/p>/g, "")
    .replace(
      /<p class="mb-1.5 text-sm leading-relaxed">(<[h|l|p|c|b|i|d])/g,
      "$1",
    );

  // Restore code blocks first
  codeBlocks.forEach((codeBlock, index) => {
    processedContent = processedContent.replace(
      `__CODE_BLOCK_${index}__`,
      codeBlock,
    );
  });

  // Process lists with proper <ul> and <ol> wrappers AFTER code blocks are restored
  processedContent = processLists(processedContent);

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
