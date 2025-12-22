/**
 * @note This is a CDN hosted by jsDelivr to serve the icons for the tags used in
 * the projects and articles. To use the images directly, feel free to fork the
 * repository and host the icons yourself.
 *
 * @see https://github.com/praveentcom/icons
 */
const TAG_IMAGE_BASE_PATH = "https://cdn.jsdelivr.net/gh/praveentcom/icons/";

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
  return `${TAG_IMAGE_BASE_PATH}${toLowercaseFilename(tag)}.png`;
}
