const configuredSiteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://nordviaexports.store";

export const SITE_URL = configuredSiteUrl
  .replace(/^http:\/\//, "https://")
  .replace(/^https:\/\/www\./, "https://");

export function absoluteUrl(path = "/") {
  const normalizedPath = path === "/" ? "" : `/${path.replace(/^\/+|\/+$/g, "")}`;
  return `${SITE_URL.replace(/\/+$/, "")}${normalizedPath}`;
}
