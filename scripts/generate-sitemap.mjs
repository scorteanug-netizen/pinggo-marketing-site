import { existsSync, mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { resolve } from "node:path";

const ROOT_DIR = process.cwd();
const APP_ROUTES_FILE = resolve(ROOT_DIR, "src/App.tsx");
const PUBLIC_SITEMAP_FILE = resolve(ROOT_DIR, "public/sitemap.xml");
const DIST_SITEMAP_FILE = resolve(ROOT_DIR, "dist/sitemap.xml");

const DEFAULT_SITE_URL = "https://pinggo.ro";

function readEnvVariableFromFile(filePath, key) {
  if (!existsSync(filePath)) return undefined;

  const lines = readFileSync(filePath, "utf8").split(/\r?\n/);
  for (const line of lines) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith("#")) continue;

    const separator = trimmed.indexOf("=");
    if (separator <= 0) continue;

    const currentKey = trimmed.slice(0, separator).trim();
    if (currentKey !== key) continue;

    let value = trimmed.slice(separator + 1).trim();
    if (
      (value.startsWith('"') && value.endsWith('"')) ||
      (value.startsWith("'") && value.endsWith("'"))
    ) {
      value = value.slice(1, -1);
    }
    return value || undefined;
  }

  return undefined;
}

function getSiteOrigin() {
  const configuredUrl = (
    process.env.VITE_SITE_URL?.trim() ||
    readEnvVariableFromFile(resolve(ROOT_DIR, ".env.local"), "VITE_SITE_URL") ||
    readEnvVariableFromFile(resolve(ROOT_DIR, ".env"), "VITE_SITE_URL")
  )?.trim();
  if (!configuredUrl) return DEFAULT_SITE_URL;

  try {
    return new URL(configuredUrl).origin;
  } catch {
    console.warn(
      `[sitemap] Invalid VITE_SITE_URL "${configuredUrl}". Falling back to ${DEFAULT_SITE_URL}.`,
    );
    return DEFAULT_SITE_URL;
  }
}

function extractRoutes(appSource) {
  const routeRegex = /<Route[^>]*\bpath=["']([^"']+)["']/g;
  const uniqueRoutes = new Set();

  for (const match of appSource.matchAll(routeRegex)) {
    const path = match[1]?.trim();
    if (!path || path === "*" || path.includes(":")) continue;
    uniqueRoutes.add(path);
  }

  uniqueRoutes.add("/");
  return Array.from(uniqueRoutes);
}

function toAbsoluteUrl(origin, path) {
  const base = origin.endsWith("/") ? origin.slice(0, -1) : origin;
  if (path === "/") return `${base}/`;
  return `${base}${path.startsWith("/") ? path : `/${path}`}`;
}

function buildSitemapXml(origin, routes) {
  const urlEntries = routes
    .map((path) => {
      const loc = toAbsoluteUrl(origin, path);
      return ["  <url>", `    <loc>${loc}</loc>`, "  </url>"].join("\n");
    })
    .join("\n");

  return [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
    urlEntries,
    "</urlset>",
    "",
  ].join("\n");
}

const appSource = readFileSync(APP_ROUTES_FILE, "utf8");
const siteOrigin = getSiteOrigin();
const routes = extractRoutes(appSource);
const sitemapXml = buildSitemapXml(siteOrigin, routes);

mkdirSync(resolve(ROOT_DIR, "public"), { recursive: true });
writeFileSync(PUBLIC_SITEMAP_FILE, sitemapXml, "utf8");

if (existsSync(resolve(ROOT_DIR, "dist"))) {
  writeFileSync(DIST_SITEMAP_FILE, sitemapXml, "utf8");
}

console.log(`[sitemap] Generated ${routes.length} URLs using origin ${siteOrigin}.`);
console.log(`[sitemap] Wrote ${PUBLIC_SITEMAP_FILE}`);
if (existsSync(resolve(ROOT_DIR, "dist"))) {
  console.log(`[sitemap] Wrote ${DIST_SITEMAP_FILE}`);
}
