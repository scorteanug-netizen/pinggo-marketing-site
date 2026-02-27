import { Helmet } from "react-helmet-async";
import { buildOrganizationSchema, type JsonLdObject } from "@/lib/structuredData";

const TITLE_SUFFIX = "Pinggo — WhatsApp Automation Romania";
const DEFAULT_BENEFIT = "Răspunzi la lead-uri în 15 secunde";
const DEFAULT_SITE_URL = "https://pinggo.ro";
const DEFAULT_DESCRIPTION =
  "Pinggo preia fiecare lead pe WhatsApp, îl programează automat și escaladează dacă nimeni nu răspunde. Setup în mai puțin de 1 oră.";
const DEFAULT_IMAGE = "/PINGGO_LOGO.png";
const DEFAULT_TWITTER_SITE = "@pinggo_ro";
const CONFIGURED_SITE_URL = import.meta.env.VITE_SITE_URL?.trim();

type SEOHeadProps = {
  title?: string;
  description?: string;
  path?: string;
  image?: string;
  type?: "website" | "article";
  noindex?: boolean;
  structuredData?: JsonLdObject | JsonLdObject[];
};

function toAbsoluteUrl(url: string | undefined, origin: string): string | undefined {
  if (!url) return undefined;
  if (url.startsWith("http://") || url.startsWith("https://")) return url;
  if (!origin) return url;
  const normalizedOrigin = origin.endsWith("/") ? origin.slice(0, -1) : origin;
  return `${normalizedOrigin}${url.startsWith("/") ? url : `/${url}`}`;
}

function getCanonicalOrigin(): string {
  if (CONFIGURED_SITE_URL) {
    try {
      return new URL(CONFIGURED_SITE_URL).origin;
    } catch {
      // Ignore invalid VITE_SITE_URL and continue with safe fallbacks.
    }
  }
  if (typeof window !== "undefined") return window.location.origin;
  return DEFAULT_SITE_URL;
}

export function SEOHead({
  title,
  description = DEFAULT_DESCRIPTION,
  path,
  image = DEFAULT_IMAGE,
  type = "website",
  noindex = false,
  structuredData,
}: SEOHeadProps) {
  const origin = getCanonicalOrigin();
  const benefit = title?.trim() ? title.trim() : DEFAULT_BENEFIT;
  const resolvedTitle = `${benefit} | ${TITLE_SUFFIX}`;
  const canonicalPath = path ?? (typeof window !== "undefined" ? window.location.pathname : "/");
  const canonicalUrl = toAbsoluteUrl(canonicalPath, origin);
  const imageUrl = toAbsoluteUrl(image, origin);
  const robots = noindex ? "noindex, nofollow" : "index, follow";
  const additionalSchemas = Array.isArray(structuredData)
    ? structuredData
    : structuredData
      ? [structuredData]
      : [];
  const schemas: JsonLdObject[] = [buildOrganizationSchema(), ...additionalSchemas];

  return (
    <Helmet prioritizeSeoTags>
      <html lang="ro" />
      <title>{resolvedTitle}</title>
      <meta name="description" content={description} />
      <meta name="author" content="Pinggo" />
      <meta name="robots" content={robots} />

      {canonicalUrl ? <link rel="canonical" href={canonicalUrl} /> : null}

      <meta property="og:title" content={resolvedTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={type} />
      {canonicalUrl ? <meta property="og:url" content={canonicalUrl} /> : null}
      {imageUrl ? <meta property="og:image" content={imageUrl} /> : null}

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content={DEFAULT_TWITTER_SITE} />
      <meta name="twitter:title" content={resolvedTitle} />
      <meta name="twitter:description" content={description} />
      {imageUrl ? <meta name="twitter:image" content={imageUrl} /> : null}

      {schemas.map((schema, index) => (
        <script key={`jsonld-${index}`} type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      ))}
    </Helmet>
  );
}
