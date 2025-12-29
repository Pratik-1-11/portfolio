/**
 * Utility function to handle asset paths with base path
 * @param path The path to the asset (should start with '/')
 * @returns The full path including the base path if in production
 */
export function withBasePath(path: string): string {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';
  // Ensure path starts with a slash and doesn't have double slashes
  const normalizedPath = path.startsWith('/') ? path : `/${path}`;
  return `${basePath}${normalizedPath}`;
}
