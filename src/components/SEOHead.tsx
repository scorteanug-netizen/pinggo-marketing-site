import { Helmet } from "react-helmet-async";

const DEFAULT_TITLE = "Pinggo — Răspuns în 15 secunde, programare automată";
const DEFAULT_DESCRIPTION =
  "Pinggo preia fiecare lead pe WhatsApp, îl programează automat și escaladează dacă nimeni nu răspunde. Setup în mai puțin de 1 oră.";
const DEFAULT_IMAGE = "/PINGGO_LOGO.png";
const DEFAULT_TWITTER_SITE = "@pinggo_ro";

type SEOHeadProps = {
  title?: string;
  description?: string;
  path?: string;
  image?: string;
  type?: "website" | "article";
  noindex?: boolean;
};

function toAbsoluteUrl(url: string | undefined, origin: string): string | undefined {
  if (!url) return undefined;
  if (url.startsWith("http://") || url.startsWith("https://")) return url;
  if (!origin) return url;
  return `${origin}${url.startsWith("/") ? url : `/${url}`}`;
}

export function SEOHead({
  title,
  description = DEFAULT_DESCRIPTION,
  path,
  image = DEFAULT_IMAGE,
  type = "website",
  noindex = false,
}: SEOHeadProps) {
  const origin = typeof window !== "undefined" ? window.location.origin : "";
  const resolvedTitle = title
    ? title.toLowerCase().includes("pinggo")
      ? title
      : `${title} | Pinggo`
    : DEFAULT_TITLE;
  const canonicalUrl = toAbsoluteUrl(path, origin);
  const imageUrl = toAbsoluteUrl(image, origin);
  const robots = noindex ? "noindex, nofollow" : "index, follow";

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
    </Helmet>
  );
}
