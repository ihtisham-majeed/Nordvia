import { URL } from "node:url";

const BASE_URL = process.env.CHECK_LINKS_BASE_URL ?? "http://localhost:3000";
const TIMEOUT_MS = 8000;
const MAX_PAGES = 300;
const internalResults = [];
const externalResults = [];
const pages = new Map();
const queue = [new URL("/", BASE_URL).href];
const queued = new Set(queue);

function normalizeUrl(value, base) {
  const url = new URL(value, base);
  url.hash = "";
  return url.href;
}

async function request(url, method = "GET") {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), TIMEOUT_MS);

  try {
    const response = await fetch(url, {
      method,
      redirect: "manual",
      signal: controller.signal,
      headers: { "user-agent": "NordviaLinkChecker/1.0" },
    });
    const location = response.headers.get("location");
    const body = method === "GET" ? await response.text() : "";
    return { status: response.status, location, body };
  } finally {
    clearTimeout(timer);
  }
}

async function checkUrl(url, internal) {
  let current = url;
  const redirects = [];

  for (let hop = 0; hop < 10; hop += 1) {
    const response = await request(current);
    if (response.status < 300 || response.status >= 400) {
      return {
        url,
        finalUrl: current,
        status: response.status,
        redirects,
        body: response.body,
      };
    }

    if (!response.location) {
      return {
        url,
        finalUrl: current,
        status: response.status,
        redirects,
        body: "",
      };
    }

    redirects.push(`${response.status} -> ${response.location}`);
    current = new URL(response.location, current).href;
  }

  return {
    url,
    finalUrl: current,
    status: 508,
    redirects,
    body: "",
  };
}

function extractAttributeTags(html, tag, attribute) {
  const values = [];
  const pattern = new RegExp(`<${tag}\\b[^>]*\\b${attribute}=["']([^"']+)["'][^>]*>`, "gi");
  for (const match of html.matchAll(pattern)) values.push(match[1]);
  return values;
}

function inspectPage(url, body) {
  const title = body.match(/<title[^>]*>([\s\S]*?)<\/title>/i)?.[1]?.trim();
  const description = body.match(/<meta[^>]+name=["']description["'][^>]+content=["']([^"']*)["']/i)?.[1];
  const canonical = body.match(/<link[^>]+rel=["']canonical["'][^>]+href=["']([^"']+)["']/i)?.[1];
  const h1Count = (body.match(/<h1\b/gi) ?? []).length;
  const ids = new Set([
    ...extractAttributeTags(body, "a", "id"),
    ...extractAttributeTags(body, ".*?", "id"),
  ]);
  return { title, description, canonical, h1Count, ids };
}

function printResult(result) {
  const redirectText = result.redirects.length ? result.redirects.join(" | ") : "-";
  console.log(
    `${result.status}\t${result.url}\tfinal=${result.finalUrl}\tredirects=${redirectText}`
  );
}

async function main() {
  console.log("URL status audit");
  console.log("STATUS\tURL\tDETAILS");

  while (queue.length && pages.size < MAX_PAGES) {
    const url = queue.shift();
    const result = await checkUrl(url, true);
    internalResults.push(result);
    printResult(result);

    if (result.status >= 400) continue;

    const pageInfo = inspectPage(url, result.body);
    pages.set(url, pageInfo);

    if (!pageInfo.title || !pageInfo.description || pageInfo.h1Count !== 1) {
      console.log(
        `PAGE_CHECK\t${url}\ttitle=${Boolean(pageInfo.title)}\tdescription=${Boolean(pageInfo.description)}\th1=${pageInfo.h1Count}`
      );
    }

    if (pageInfo.canonical && !pageInfo.canonical.startsWith("https://nordviaexports.store")) {
      console.log(`CANONICAL\t${url}\t${pageInfo.canonical}`);
    }

    const links = extractAttributeTags(result.body, "a", "href");
    for (const rawHref of links) {
      if (rawHref.startsWith("mailto:") || rawHref.startsWith("tel:") || rawHref.startsWith("javascript:")) continue;
      const target = new URL(rawHref, url);
      if (target.origin === new URL(BASE_URL).origin) {
        const targetUrl = target.href;
        const hash = target.hash.slice(1);
        const cleanUrl = normalizeUrl(targetUrl, url);
        if (hash && !queued.has(cleanUrl)) {
          const anchorResult = await checkUrl(cleanUrl, true);
          if (anchorResult.status < 400) {
            const anchorIds = new Set([
              ...extractAttributeTags(anchorResult.body, ".*?", "id"),
              ...extractAttributeTags(anchorResult.body, "a", "name"),
            ]);
            if (!anchorIds.has(hash)) {
              console.log(`HASH\t${url}\tmissing #${hash} on ${cleanUrl}`);
            }
          }
        }
        if (!queued.has(cleanUrl)) {
          queued.add(cleanUrl);
          queue.push(cleanUrl);
        }
      } else {
        externalResults.push({ url: target.href, source: url });
      }
    }
  }

  const sitemap = await checkUrl(new URL("/sitemap.xml", BASE_URL).href, true);
  printResult(sitemap);
  if (sitemap.status < 400) {
    for (const loc of sitemap.body.matchAll(/<loc>(.*?)<\/loc>/g)) {
      const url = loc[1].trim();
      if (!queued.has(url)) {
        queued.add(url);
        queue.push(url);
      }
    }
  }

  while (queue.length && pages.size < MAX_PAGES) {
    const url = queue.shift();
    if (pages.has(url)) continue;
    const result = await checkUrl(url, true);
    internalResults.push(result);
    printResult(result);
    if (result.status < 400) pages.set(url, inspectPage(url, result.body));
  }

  for (const { url, source } of [...new Map(externalResults.map((item) => [item.url, item])).values()]) {
    let result;
    try {
      result = await request(url, "HEAD");
      if (result.status === 405 || result.status === 403) result = await request(url);
    } catch (error) {
      console.log(`EXTERNAL\tERROR\t${url}\tfrom=${source}\t${error.message}`);
      continue;
    }
    if (result.status !== 429) printResult({ ...result, url, finalUrl: url, redirects: [] });
    else console.log(`EXTERNAL\t429\t${url}\tfrom=${source}\t(rate limit ignored)`);
  }

  const broken = internalResults.filter((item) => item.status >= 400);
  const redirected = internalResults.filter((item) => item.redirects.length);
  console.log(`SUMMARY\tpages=${pages.size}\tbroken=${broken.length}\tredirects=${redirected.length}`);
  if (broken.length) process.exitCode = 1;
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
