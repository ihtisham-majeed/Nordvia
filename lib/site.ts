export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ??
  "https://www.nordviaexports.store";

export function absoluteUrl(path = "/") {
  const normalizedPath = path === "/" ? "" : `/${path.replace(/^\/+|\/+$/g, "")}`;
  return `${SITE_URL.replace(/\/+$/, "")}${normalizedPath}`;
}
