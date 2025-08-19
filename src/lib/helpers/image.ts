import { PLACEHOLDER_COLORS } from "@/lib/constants/colors";

export interface PlaceholderImageOptions {
  width?: number;
  height?: number;
  backgroundColor?: string;
  textColor?: string;
  text?: string;
}

const DEFAULT_BLOG_OPTIONS: Required<PlaceholderImageOptions> = {
  width: 1200,
  height: 628,
  backgroundColor: PLACEHOLDER_COLORS.ARTICLE,
  textColor: PLACEHOLDER_COLORS.WHITE,
  text: "Article",
};

/**
 * Generates a placeholder image URL using placehold.co service
 *
 * @param options Configuration options for the placeholder image
 * @returns Complete URL for the placeholder image
 *
 * @example
 * ```typescript
 * // Basic usage with text
 * const url = generatePlaceholderImageUrl({ text: 'My Article' });
 * // Returns: https://placehold.co/1200x628/6366f1/ffffff.png?text=My+Article
 *
 * // Custom dimensions and colors
 * const url = generatePlaceholderImageUrl({
 *   width: 800,
 *   height: 400,
 *   backgroundColor: '10b981',
 *   textColor: '000000',
 *   text: 'Custom Image'
 * });
 * ```
 */
export function generatePlaceholderImageUrl(
  options: PlaceholderImageOptions = {},
): string {
  const {
    width = DEFAULT_BLOG_OPTIONS.width,
    height = DEFAULT_BLOG_OPTIONS.height,
    backgroundColor = DEFAULT_BLOG_OPTIONS.backgroundColor,
    textColor = DEFAULT_BLOG_OPTIONS.textColor,
    text = DEFAULT_BLOG_OPTIONS.text,
  } = options;

  const baseUrl = `https://placehold.co/${width}x${height}/${backgroundColor}/${textColor}.png`;

  if (text) {
    const encodedText = encodeURIComponent(text);
    return `${baseUrl}?text=${encodedText}`;
  }

  return baseUrl;
}

export function generateArticlePlaceholderImage(title: string): string {
  return generatePlaceholderImageUrl({ text: title });
}

export function generateCommunityPlaceholderImage(title: string): string {
  return generatePlaceholderImageUrl({
    text: title,
    backgroundColor: PLACEHOLDER_COLORS.COMMUNITY,
    textColor: PLACEHOLDER_COLORS.WHITE,
  });
}

export function generateOpenGraphImage(title: string): string {
  return generatePlaceholderImageUrl({
    text: title,
    width: 1200,
    height: 628,
    backgroundColor: PLACEHOLDER_COLORS.PRIMARY,
    textColor: PLACEHOLDER_COLORS.WHITE,
  });
}
