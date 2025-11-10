const IMAGE_BASE_PATH = "https://storage.googleapis.com/praveentcom-public/projects/devcard/icons/";

/**
 * Convert tag to lowercase filename format with spaces, dashes, and periods removed
 * @param tag - The tag to convert
 * @returns The lowercase filename with spaces, dashes, and periods removed
 */
function toLowercaseFilename(tag: string): string {
  return tag.toLowerCase().replace(/[\s .-]+/g, "");
}

/**
 * Get the image path for a tag
 * @param tag - The tag to get the image path for
 * @returns The image path for the tag
 */
export function getTagImagePath(tag: string): string {
  return `${IMAGE_BASE_PATH}${toLowercaseFilename(tag)}.png`;
}
