import { parseMarkdown } from "@/lib/helpers/markdown";
import { cn } from "@/lib/utils";

interface MarkdownProps {
  content: string;
  muted?: boolean;
  className?: string;
}

export function Markdown({ content, muted = true, className }: MarkdownProps) {
  const html = parseMarkdown(content);
  return (
    <article
      className={cn("article-base", muted && "article-muted", className)}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}
