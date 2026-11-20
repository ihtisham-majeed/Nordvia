const configuredSiteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.nordviaexports.store";

export const SITE_URL = configuredSiteUrl
  .replace(/^http:\/\//, "https://")
  .replace(/^https:\/\/nordviaexports\.store/, "https://www.nordviaexports.store")
  .replace(/\/+$/, "");

export function absoluteUrl(path = "/") {
  const normalizedPath = path === "/" ? "" : `/${path.replace(/^\/+|\/+$/g, "")}`;
  return `${SITE_URL.replace(/\/+$/, "")}${normalizedPath}`;
}
