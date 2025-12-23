"use client";

import { cn } from "@workspace/ui/lib/utils";
import hljs from "highlight.js/lib/core";
import bash from "highlight.js/lib/languages/bash";
import cpp from "highlight.js/lib/languages/cpp";
import csharp from "highlight.js/lib/languages/csharp";
import css from "highlight.js/lib/languages/css";
import dart from "highlight.js/lib/languages/dart";
import dockerfile from "highlight.js/lib/languages/dockerfile";
import go from "highlight.js/lib/languages/go";
import gradle from "highlight.js/lib/languages/gradle";
import java from "highlight.js/lib/languages/java";
import javascript from "highlight.js/lib/languages/javascript";
import json from "highlight.js/lib/languages/json";
import kotlin from "highlight.js/lib/languages/kotlin";
import less from "highlight.js/lib/languages/less";
import lua from "highlight.js/lib/languages/lua";
import makefile from "highlight.js/lib/languages/makefile";
import markdown from "highlight.js/lib/languages/markdown";
import perl from "highlight.js/lib/languages/perl";
import php from "highlight.js/lib/languages/php";
import powershell from "highlight.js/lib/languages/powershell";
import python from "highlight.js/lib/languages/python";
import r from "highlight.js/lib/languages/r";
import ruby from "highlight.js/lib/languages/ruby";
import rust from "highlight.js/lib/languages/rust";
import scala from "highlight.js/lib/languages/scala";
import scss from "highlight.js/lib/languages/scss";
import sql from "highlight.js/lib/languages/sql";
import swift from "highlight.js/lib/languages/swift";
import typescript from "highlight.js/lib/languages/typescript";
import xml from "highlight.js/lib/languages/xml";
import yaml from "highlight.js/lib/languages/yaml";
import { Check, Copy } from "lucide-react";
import React, { useState } from "react";

hljs.registerLanguage("javascript", javascript);
hljs.registerLanguage("js", javascript);
hljs.registerLanguage("typescript", typescript);
hljs.registerLanguage("ts", typescript);
hljs.registerLanguage("jsx", javascript);
hljs.registerLanguage("tsx", typescript);
hljs.registerLanguage("python", python);
hljs.registerLanguage("py", python);
hljs.registerLanguage("java", java);
hljs.registerLanguage("cpp", cpp);
hljs.registerLanguage("c++", cpp);
hljs.registerLanguage("c", cpp);
hljs.registerLanguage("go", go);
hljs.registerLanguage("rust", rust);
hljs.registerLanguage("rs", rust);
hljs.registerLanguage("php", php);
hljs.registerLanguage("ruby", ruby);
hljs.registerLanguage("rb", ruby);
hljs.registerLanguage("swift", swift);
hljs.registerLanguage("kotlin", kotlin);
hljs.registerLanguage("kt", kotlin);
hljs.registerLanguage("scala", scala);
hljs.registerLanguage("csharp", csharp);
hljs.registerLanguage("cs", csharp);
hljs.registerLanguage("dart", dart);
hljs.registerLanguage("lua", lua);
hljs.registerLanguage("r", r);
hljs.registerLanguage("perl", perl);
hljs.registerLanguage("pl", perl);
hljs.registerLanguage("bash", bash);
hljs.registerLanguage("sh", bash);
hljs.registerLanguage("zsh", bash);
hljs.registerLanguage("fish", bash);
hljs.registerLanguage("powershell", powershell);
hljs.registerLanguage("ps1", powershell);
hljs.registerLanguage("css", css);
hljs.registerLanguage("scss", scss);
hljs.registerLanguage("sass", scss);
hljs.registerLanguage("less", less);
hljs.registerLanguage("json", json);
hljs.registerLanguage("yaml", yaml);
hljs.registerLanguage("yml", yaml);
hljs.registerLanguage("xml", xml);
hljs.registerLanguage("html", xml);
hljs.registerLanguage("markdown", markdown);
hljs.registerLanguage("md", markdown);
hljs.registerLanguage("dockerfile", dockerfile);
hljs.registerLanguage("makefile", makefile);
hljs.registerLanguage("gradle", gradle);
hljs.registerLanguage("sql", sql);

export type HighlightTheme =
  | "github"
  | "atom-one"
  | "vs"
  | "monokai"
  | "dracula"
  | "nord"
  | "tokyo-night"
  | "default";

export interface CodeBlockProps extends React.ComponentProps<"div"> {
  /**
   * The code content to display
   */
  code: string;
  /**
   * The programming language for syntax highlighting
   */
  language?: string;
  /**
   * Optional filename to display in header
   */
  filename?: string;
  /**
   * Whether to show line numbers
   * @default false
   */
  hideLineNumbers?: boolean;
  /**
   * Highlight.js theme to use
   * @default "github"
   */
  theme?: HighlightTheme;
}

/**
 * A syntax-highlighted code block component with optional filename header and line numbers
 *
 * Theme Setup:
 * For themed syntax highlighting, import the theme styles in your CSS:
 * ```css
 * @import '@workspace/ui/hljs-themes.css';
 * ```
 *
 * @param code - The code content to display
 * @param language - Programming language for syntax highlighting
 * @param filename - Optional filename to show in header
 * @param hideLineNumbers - Whether to display line numbers
 * @param theme - Highlight.js theme to use (requires hljs-themes.css import)
 * @param className - Additional CSS classes
 */
function CodeBlock({
  code,
  language,
  filename,
  hideLineNumbers = false,
  theme = "github",
  className,
  ...props
}: CodeBlockProps) {
  const lines = code.split("\n");
  const totalLines = lines.length;
  const [copied, setCopied] = useState(false);

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy code: ", err);
    }
  };

  const CopyButton = ({ className }: { className?: string }) => (
    <button
      onClick={copyToClipboard}
      className={cn(
        "opacity-0 group-hover:opacity-100 transition-opacity duration-200 hover:text-foreground rounded hover:bg-muted/50",
        className,
      )}
      title={copied ? "Copied!" : "Copy code"}
      aria-label={copied ? "Copied!" : "Copy code"}
    >
      {copied ? (
        <Check className="text-success" size={13.5} />
      ) : (
        <Copy size={13.5} />
      )}
    </button>
  );

  /**
   * Get the width class for line numbers based on total lines
   */
  const getLineNumberWidth = (total: number) => {
    if (total < 10) return "w-7";
    if (total < 100) return "w-9";
    if (total < 1000) return "w-12";
    return "w-14";
  };

  const lineNumberWidth = getLineNumberWidth(totalLines);

  /**
   * Highlight a single line of code
   */
  const highlightLine = (line: string): string => {
    if (!line.trim()) return " ";

    if (language && hljs.getLanguage(language)) {
      try {
        return hljs.highlight(line, { language }).value;
      } catch {
        try {
          return hljs.highlightAuto(line).value;
        } catch {
          return line.replace(/</g, "&lt;").replace(/>/g, "&gt;");
        }
      }
    } else {
      try {
        return hljs.highlightAuto(line).value;
      } catch {
        return line.replace(/</g, "&lt;").replace(/>/g, "&gt;");
      }
    }
  };

  /**
   * Get file icon based on file extension
   * @param filename - The filename to get the icon for
   * @returns The SVG string with the appropriate icon
   */
  const getFileIcon = (filename: string): string => {
    const extension = filename.split(".").pop()?.toLowerCase() || "";

    const iconClass = "size-4 shrink-0";

    switch (extension) {
      case "js":
      case "jsx":
        return `<svg class="${iconClass}" viewBox="0 0 24 24" fill="currentColor">
            <path d="M3 3h18v18H3V3zm16.525 13.707c-.131-.821-.666-1.511-2.252-2.155-.552-.259-1.165-.438-1.349-.854-.068-.248-.078-.382-.034-.529.114-.484.687-.629 1.137-.495.293.09.563.315.732.676.775-.507.775-.507 1.316-.844-.203-.314-.304-.451-.439-.586-.473-.528-1.103-.798-2.126-.77l-.528.067c-.507.124-.991.395-1.283.754-.855.968-.608 2.655.427 3.354 1.023.765 2.521.933 2.712 1.653.18.878-.652 1.159-1.475 1.058-.607-.136-.945-.439-1.316-1.002l-1.372.788c.157.359.337.517.607.832 1.305 1.316 4.568 1.249 5.153-.754.021-.067.18-.528.056-1.237l.034.049zm-6.737-5.434h-1.686c0 1.453-.007 2.898-.007 4.354 0 .924.047 1.772-.104 2.033-.247.517-.886.451-1.175.359-.297-.146-.448-.349-.623-.641-.047-.078-.082-.146-.095-.146l-1.368.844c.229.473.563.879.994 1.137.641.383 1.502.507 2.404.305.588-.17 1.095-.519 1.358-1.059.384-.697.302-1.553.299-2.509.008-1.541 0-3.083 0-4.635l.003-.042z"/>
          </svg>`;
      case "ts":
      case "tsx":
        return `<svg class="${iconClass}" viewBox="0 0 24 24" fill="currentColor">
            <path d="M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0zm17.363 9.75c.612 0 1.154.037 1.627.111a6.38 6.38 0 0 1 1.306.34v2.458a3.95 3.95 0 0 0-.643-.361 5.093 5.093 0 0 0-.717-.26 5.453 5.453 0 0 0-1.426-.2c-.3 0-.573.028-.819.086a2.1 2.1 0 0 0-.623.242c-.17.104-.3.229-.393.374a.888.888 0 0 0-.14.49c0 .196.053.373.156.529.104.156.252.304.443.444s.423.276.696.41c.273.135.582.274.926.416.47.197.892.407 1.266.628.374.222.695.473.963.753.268.279.472.598.614.957.142.359.214.776.214 1.253 0 .657-.125 1.21-.373 1.656a3.033 3.033 0 0 1-1.012 1.085 4.38 4.38 0 0 1-1.487.596c-.566.12-1.163.18-1.79.18a9.916 9.916 0 0 1-1.84-.164 5.544 5.544 0 0 1-1.512-.493v-2.63a5.033 5.033 0 0 0 3.237 1.2c.333 0 .624-.03.872-.09.249-.06.456-.144.623-.25.166-.108.29-.234.373-.38a1.023 1.023 0 0 0-.074-1.089 2.12 2.12 0 0 0-.537-.5 5.597 5.597 0 0 0-.807-.444 27.72 27.72 0 0 0-1.007-.436c-.918-.383-1.602-.852-2.053-1.405-.45-.553-.676-1.222-.676-2.005 0-.614.123-1.141.369-1.582.246-.441.58-.804 1.004-1.089a4.494 4.494 0 0 1 1.47-.629 7.536 7.536 0 0 1 1.77-.201zm-15.113.188h9.563v2.166H9.506v9.646H6.789v-9.646H3.375z"/>
          </svg>`;
      case "py":
        return `<svg class="${iconClass}" viewBox="0 0 24 24" fill="currentColor">
            <path d="M14.25.18l.9.2.73.26.59.3.45.32.34.34.25.34.16.33.1.3.04.26.02.2-.01.13V8.5l-.05.63-.13.55-.21.46-.26.38-.3.31-.33.25-.35.19-.35.14-.33.1-.3.07-.26.04-.21.02H8.77l-.69.05-.59.14-.5.22-.41.27-.33.32-.27.35-.2.36-.15.37-.1.35-.07.32-.04.27-.02.21v3.06H3.17l-.21-.03-.28-.07-.32-.12-.35-.18-.36-.26-.36-.36-.35-.46-.32-.59-.28-.73-.21-.88-.14-1.05-.05-1.23.06-1.22.16-1.04.24-.87.32-.71.36-.57.4-.44.42-.33.42-.24.4-.16.36-.1.32-.05.24-.01h.16l.06.01h8.16v-.83H6.18l-.01-2.75-.02-.37.05-.34.11-.31.17-.28.25-.26.31-.23.38-.2.44-.18.51-.15.58-.12.64-.1.71-.06.77-.04.84-.02 1.27.05zm-6.3 1.98l-.23.33-.08.41.08.41.23.34.33.22.41.09.41-.09.33-.22.23-.34.08-.41-.08-.41-.23-.33-.33-.22-.41-.09-.41.09zm13.09 3.95l.28.06.32.12.35.18.36.27.36.35.35.47.32.59.28.73.21.88.14 1.04.05 1.23-.06 1.23-.16 1.04-.24.86-.32.71-.36.57-.4.45-.42.33-.42.24-.4.16-.36.09-.32.05-.24.02-.16-.01h-8.22v.82h5.84l.01 2.76.02.36-.05.34-.11.31-.17.29-.25.25-.31.24-.38.2-.44.17-.51.15-.58.13-.64.09-.71.07-.77.04-.84.01-1.27-.04-1.07-.14-.9-.2-.73-.25-.59-.3-.45-.33-.34-.34-.25-.34-.16-.33-.1-.3-.04-.25-.02-.2.01-.13v-5.34l.05-.64.13-.54.21-.46.26-.38.3-.32.33-.24.35-.2.35-.14.33-.1.3-.06.26-.04.21-.02.13-.01h5.84l.69-.05.59-.14.5-.21.41-.28.33-.32.27-.35.2-.36.15-.36.1-.35.07-.32.04-.28.02-.21V6.07h2.09l.14.01zm-6.47 14.25l-.23.33-.08.41.08.41.23.33.33.23.41.08.41-.08.33-.23.23-.33.08-.41-.08-.41-.23-.33-.33-.23-.41-.08-.41.08z"/>
          </svg>`;
      case "html":
        return `<svg class="${iconClass}" viewBox="0 0 24 24" fill="currentColor">
            <path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.564-2.438L1.5 0zm7.031 9.75l-.232-2.718 10.059.003.23-2.622L5.412 4.41l.698 8.01h9.126l-.326 3.426-2.91.804-2.955-.81-.188-2.11H6.248l.33 4.171L12 19.351l5.379-1.443.744-8.157H8.531z"/>
          </svg>`;
      case "css":
        return `<svg class="${iconClass}" viewBox="0 0 24 24" fill="currentColor">
            <path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.565-2.438L1.5 0zm17.09 4.413L5.41 4.41l.213 2.622 10.125.002-.255 2.716h-6.64l.24 2.573h6.182l-.366 3.523-2.91.804-2.956-.81-.188-2.11h-2.61l.29 3.855L12 19.288l5.373-1.53L18.59 4.414z"/>
          </svg>`;
      case "json":
        return `<svg class="${iconClass}" viewBox="0 0 24 24" fill="currentColor">
            <path d="M5.843 18.364c-1.425 0-2.575-1.15-2.575-2.575s1.15-2.575 2.575-2.575 2.575 1.15 2.575 2.575-1.15 2.575-2.575 2.575zm0-4.364c-.986 0-1.789.803-1.789 1.789s.803 1.789 1.789 1.789 1.789-.803 1.789-1.789-.803-1.789-1.789-1.789zm12.314 4.364c-1.425 0-2.575-1.15-2.575-2.575s1.15-2.575 2.575-2.575 2.575 1.15 2.575 2.575-1.15 2.575-2.575 2.575zm0-4.364c-.986 0-1.789.803-1.789 1.789s.803 1.789 1.789 1.789 1.789-.803 1.789-1.789-.803-1.789-1.789-1.789zm-6.157 4.364c-1.425 0-2.575-1.15-2.575-2.575s1.15-2.575 2.575-2.575 2.575 1.15 2.575 2.575-1.15 2.575-2.575 2.575zm0-4.364c-.986 0-1.789.803-1.789 1.789s.803 1.789 1.789 1.789 1.789-.803 1.789-1.789-.803-1.789-1.789-1.789z"/>
          </svg>`;
      case "md":
      case "markdown":
        return `<svg class="${iconClass}" viewBox="0 0 24 24" fill="currentColor">
            <path d="M22.269 19.385c.13-.186.167-.408.099-.61L20.108 6.15c-.068-.202-.243-.352-.456-.391L3.751 3.268c-.213-.039-.429.025-.574.167-.145.142-.195.35-.133.549l3.661 11.622c.062.197.231.336.44.363l16.001 2.013c.208.026.421-.04.557-.226zM7.662 7.316l3.659 11.622-3.659-11.622z"/>
          </svg>`;
      default:
        return ``;
    }
  };

  const fileIcon = filename ? getFileIcon(filename) : "";

  return (
    <div
      data-slot="code-block"
      className={cn(
        "relative bg-card border border-border rounded-md overflow-hidden group w-full min-w-0 break-inside-avoid",
        `hljs-theme-${theme}`,
        className,
      )}
      {...props}
    >
      {!filename && (
        <CopyButton className="absolute top-2 right-2 z-10 p-1.5 backdrop-blur-md border border-border/50" />
      )}
      {filename && (
        <div
          data-slot="code-block-header"
          className="flex justify-between items-center gap-2 px-2 py-1.5 dark:bg-background bg-border/10 border-b border-border text-muted-foreground"
        >
          <div className="flex gap-2 items-center">
            {fileIcon && (
              <div
                className="opacity-85"
                dangerouslySetInnerHTML={{
                  __html: `${fileIcon}`,
                }}
              />
            )}
            <span className="dark:font-medium leading-normal line-clamp-1 tracking-tight">
              {filename}
            </span>
          </div>
          <div className="flex gap-2 items-center">
            <CopyButton />
          </div>
        </div>
      )}
      <div className="flex w-full">
        {!hideLineNumbers && (
          <div data-slot="code-block-line-numbers" className="shrink-0 bg-card">
            {lines.map((line, index) => {
              const lineNumber = index + 1;
              const isFirstLine = index === 0;
              const isLastLine = index === lines.length - 1;
              const lineNumberPadding =
                isFirstLine && isLastLine
                  ? " py-1.5"
                  : isFirstLine
                    ? " pt-1.5"
                    : isLastLine
                      ? " pb-1.5"
                      : "";

              return (
                <div
                  key={index}
                  className={cn(
                    "line-number text-muted-foreground text-right select-none",
                    lineNumberWidth,
                    lineNumberPadding,
                    "px-2",
                  )}
                >
                  {lineNumber}
                </div>
              );
            })}
          </div>
        )}
        <div className="flex-1 min-w-0 bg-card overflow-x-auto">
          <pre
            data-slot="code-block-pre"
            className="p-0 m-0"
            style={{ minWidth: "max-content" }}
          >
            <code data-slot="code-block-code" className="hljs block py-1.5">
              {lines.map((line, index) => {
                const isFirstLine = index === 0;
                const isLastLine = index === lines.length - 1;
                const contentPadding =
                  isFirstLine && isLastLine
                    ? " py-1.5"
                    : isFirstLine
                      ? " pt-1.5"
                      : isLastLine
                        ? " pb-1.5"
                        : "";

                const highlightedLine = highlightLine(line);

                return (
                  <div key={index} className="block">
                    <span
                      className={cn("line-content" + contentPadding)}
                      dangerouslySetInnerHTML={{ __html: highlightedLine }}
                    />
                  </div>
                );
              })}
            </code>
          </pre>
        </div>
      </div>
    </div>
  );
}

export { CodeBlock };
