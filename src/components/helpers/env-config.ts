/**
 * Parse comma-separated hostnames from environment variable
 * @param envVar - Environment variable string (comma-separated)
 * @param fallback - Fallback hostnames array
 * @returns Array of hostname strings
 */
export function parseHostnames(
  envVar?: string,
  fallback: string[] = [],
): string[] {
  if (!envVar || envVar.trim() === "") {
    return fallback;
  }

  return envVar
    .split(",")
    .map((hostname) => hostname.trim())
    .filter((hostname) => hostname.length > 0);
}

/**
 * Create Next.js image remote patterns from hostnames
 * @param hostnames - Array of hostname strings
 * @param protocol - Protocol to use (default: 'https')
 * @returns Array of Next.js remote patterns
 */
export function createImageRemotePatterns(
  hostnames: string[],
  protocol: "http" | "https" = "https",
) {
  return hostnames.map((hostname) => ({
    protocol,
    hostname,
  }));
}

/**
 * Generate Content Security Policy based on environment and hostnames
 * @param allowedHostnames - Array of allowed hostnames
 * @returns CSP policy string
 */
export function generateCSP(allowedHostnames: string[] = []): string {
  const hostnameList =
    allowedHostnames.length > 0
      ? ` ${allowedHostnames.map((h) => `https://${h}`).join(" ")}`
      : "";

  return `default-src 'self' data:${hostnameList}; script-src 'none'; img-src 'self' data: blob:${hostnameList}; sandbox;`;
}

/**
 * Get environment-based configuration
 */
export function getEnvConfig() {
  const isDevelopment = process.env.NODE_ENV === "development";
  const isProduction = process.env.NODE_ENV === "production";

  const imageHostnamesFallback = ["placehold.co", "cdn.jsdelivr.net"];
  const imageHostnames = parseHostnames(
    process.env.NEXT_PUBLIC_ALLOWED_IMAGE_HOSTNAMES,
    imageHostnamesFallback,
  );

  const allowedHostnames = parseHostnames(
    process.env.NEXT_PUBLIC_ALLOWED_HOSTNAMES,
    [],
  );

  const imageRemotePatterns = createImageRemotePatterns(imageHostnames);

  if (isDevelopment) {
    imageRemotePatterns.push(
      ...createImageRemotePatterns(allowedHostnames, "http"),
      ...createImageRemotePatterns(allowedHostnames, "https"),
    );
  }

  const contentSecurityPolicy = generateCSP(allowedHostnames);

  return {
    isDevelopment,
    isProduction,
    imageHostnames,
    allowedHostnames,
    imageRemotePatterns,
    baseUrl: process.env.NEXT_PUBLIC_BASE_URL || "",
    allowRobots: process.env.NEXT_PUBLIC_ALLOW_ROBOTS === "true",
    contentSecurityPolicy,
  };
}
