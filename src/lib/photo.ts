const GITHUB_PUBLIC =
  "https://raw.githubusercontent.com/OdunDavies/starynx-travels/main/public";

/** Destination/service photos. Local in dev; GitHub in production builds. */
export function photo(path: string) {
  if (!path.startsWith("/")) return path;
  if (import.meta.env.PROD) return `${GITHUB_PUBLIC}${path}`;
  return path;
}
