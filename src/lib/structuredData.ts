const DEFAULT_SITE_URL = "https://pinggo.ro";
const DEFAULT_SOCIAL_X_URL = "https://x.com/pinggo_ro";
const DEFAULT_DESCRIPTION =
  "Pinggo preia fiecare lead pe WhatsApp, îl programează automat și escaladează dacă nimeni nu răspunde. Setup în mai puțin de 1 oră.";

export type JsonLdObject = Record<string, unknown>;

export type FAQSchemaItem = {
  question: string;
  answer: string;
};

export type ArticleSchemaInput = {
  headline: string;
  description: string;
  authorName: string;
  datePublished: string;
  path: string;
  image?: string;
  dateModified?: string;
};

function safeOrigin(url: string): string {
  try {
    return new URL(url).origin;
  } catch {
    return DEFAULT_SITE_URL;
  }
}

function maybeValidAbsoluteUrl(url: string | undefined): string | null {
  if (!url) return null;
  try {
    return new URL(url).toString();
  } catch {
    return null;
  }
}

function trimSlashes(url: string): string {
  return url.endsWith("/") ? url.slice(0, -1) : url;
}

function getConfiguredSiteOrigin(): string {
  const configured = import.meta.env.VITE_SITE_URL?.trim();
  if (!configured) return DEFAULT_SITE_URL;
  return safeOrigin(configured);
}

export function getAbsoluteSiteUrl(path = "/"): string {
  const origin = trimSlashes(getConfiguredSiteOrigin());
  if (path === "/") return `${origin}/`;
  return `${origin}${path.startsWith("/") ? path : `/${path}`}`;
}

function getSameAsUrls(): string[] {
  const candidates = [
    import.meta.env.VITE_SOCIAL_LINKEDIN_URL?.trim(),
    import.meta.env.VITE_SOCIAL_FACEBOOK_URL?.trim(),
    import.meta.env.VITE_SOCIAL_INSTAGRAM_URL?.trim(),
    import.meta.env.VITE_SOCIAL_YOUTUBE_URL?.trim(),
    import.meta.env.VITE_SOCIAL_X_URL?.trim() || DEFAULT_SOCIAL_X_URL,
  ];

  const valid = candidates
    .map((url) => maybeValidAbsoluteUrl(url))
    .filter((url): url is string => Boolean(url));

  return Array.from(new Set(valid));
}

export function buildOrganizationSchema(): JsonLdObject {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Pinggo",
    url: getAbsoluteSiteUrl("/"),
    logo: getAbsoluteSiteUrl("/PINGGO_LOGO.png"),
    sameAs: getSameAsUrls(),
    contactPoint: [
      {
        "@type": "ContactPoint",
        contactType: "sales",
        email: "contact@pinggo.ro",
        availableLanguage: ["ro", "en"],
        areaServed: "RO",
        url: getAbsoluteSiteUrl("/contact"),
      },
    ],
  };
}

export function buildSoftwareApplicationSchema(): JsonLdObject {
  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Pinggo",
    description: DEFAULT_DESCRIPTION,
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web",
    url: getAbsoluteSiteUrl("/"),
    offers: {
      "@type": "Offer",
      price: "149",
      priceCurrency: "EUR",
      availability: "https://schema.org/InStock",
      url: getAbsoluteSiteUrl("/pricing"),
    },
  };
}

export function buildFAQSchema(items: FAQSchemaItem[]): JsonLdObject {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

export function buildArticleSchema(input: ArticleSchemaInput): JsonLdObject {
  const imageUrl = input.image ? getAbsoluteSiteUrl(input.image) : getAbsoluteSiteUrl("/PINGGO_LOGO.png");

  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: input.headline,
    description: input.description,
    datePublished: input.datePublished,
    dateModified: input.dateModified || input.datePublished,
    image: [imageUrl],
    author: {
      "@type": "Person",
      name: input.authorName,
    },
    publisher: {
      "@type": "Organization",
      name: "Pinggo",
      logo: {
        "@type": "ImageObject",
        url: getAbsoluteSiteUrl("/PINGGO_LOGO.png"),
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": getAbsoluteSiteUrl(input.path),
    },
  };
}
