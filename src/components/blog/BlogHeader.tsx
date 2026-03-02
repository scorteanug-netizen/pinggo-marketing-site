import { Helmet } from "react-helmet-async";
import { useEffect, useMemo, useState } from "react";

export interface BlogHeaderSeoMeta {
  titleTag: string;
  description: string;
  canonical: string;
  robots?: string;
  keywords?: string[];
  locale?: string;
  ogType?: "article" | "website";
  ogTitle?: string;
  ogDescription?: string;
  ogUrl?: string;
  ogImage?: string;
  ogImageWidth?: number;
  ogImageHeight?: number;
  ogSiteName?: string;
  articlePublishedTime?: string;
  articleModifiedTime?: string;
  articleAuthor?: string;
  articleTags?: string[];
  twitterCard?: "summary" | "summary_large_image";
  twitterTitle?: string;
  twitterDescription?: string;
  twitterImage?: string;
}

interface BlogHeaderProps {
  title: string;
  description: string;
  author: string;
  date: string;
  tags: string[];
  readingTime: string;
  seo: BlogHeaderSeoMeta;
}

const dateFormatter = new Intl.DateTimeFormat("ro-RO", {
  day: "2-digit",
  month: "long",
  year: "numeric",
});

export function BlogHeader({ title, description, author, date, tags, readingTime, seo }: BlogHeaderProps) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const updateProgress = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const nextProgress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      setProgress(Math.max(0, Math.min(100, nextProgress)));
    };

    updateProgress();
    window.addEventListener("scroll", updateProgress, { passive: true });

    return () => {
      window.removeEventListener("scroll", updateProgress);
    };
  }, []);

  const formattedDate = useMemo(() => dateFormatter.format(new Date(date)), [date]);

  return (
    <>
      <Helmet>
        <html lang={seo.locale === "ro_RO" ? "ro" : seo.locale ?? "ro"} />
        <title>{seo.titleTag}</title>
        <meta name="description" content={seo.description} />
        <meta name="robots" content={seo.robots ?? "index, follow"} />
        {seo.keywords && seo.keywords.length > 0 ? (
          <meta name="keywords" content={seo.keywords.join(", ")} />
        ) : null}
        <link rel="canonical" href={seo.canonical} />

        <meta property="og:type" content={seo.ogType ?? "article"} />
        <meta property="og:title" content={seo.ogTitle ?? seo.titleTag} />
        <meta property="og:description" content={seo.ogDescription ?? seo.description} />
        <meta property="og:url" content={seo.ogUrl ?? seo.canonical} />
        {seo.ogImage ? <meta property="og:image" content={seo.ogImage} /> : null}
        {seo.ogImageWidth ? <meta property="og:image:width" content={String(seo.ogImageWidth)} /> : null}
        {seo.ogImageHeight ? <meta property="og:image:height" content={String(seo.ogImageHeight)} /> : null}
        <meta property="og:locale" content={seo.locale ?? "ro_RO"} />
        <meta property="og:site_name" content={seo.ogSiteName ?? "Pinggo"} />
        {seo.articlePublishedTime ? <meta property="article:published_time" content={seo.articlePublishedTime} /> : null}
        {seo.articleModifiedTime ? <meta property="article:modified_time" content={seo.articleModifiedTime} /> : null}
        {seo.articleAuthor ? <meta property="article:author" content={seo.articleAuthor} /> : null}
        {seo.articleTags?.map((tag) => (
          <meta key={tag} property="article:tag" content={tag} />
        ))}

        <meta name="twitter:card" content={seo.twitterCard ?? "summary_large_image"} />
        <meta name="twitter:title" content={seo.twitterTitle ?? seo.titleTag} />
        <meta name="twitter:description" content={seo.twitterDescription ?? seo.description} />
        {seo.twitterImage || seo.ogImage ? <meta name="twitter:image" content={seo.twitterImage ?? seo.ogImage} /> : null}
      </Helmet>

      <div className="fixed left-0 right-0 top-16 z-[70] h-1 bg-secondary/80">
        <div
          className="h-full bg-orange-500 transition-[width] duration-200"
          style={{ width: `${progress}%` }}
          aria-hidden
        />
      </div>

      <header className="rounded-3xl border border-border/70 bg-background p-6 shadow-sm md:p-8 lg:p-10">
        <p className="inline-flex rounded-full bg-orange-100 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-orange-700">
          Pinggo Blog
        </p>
        <h1 className="mt-5 text-foreground">{title}</h1>
        <p className="mt-6 max-w-3xl text-lg leading-relaxed text-muted-foreground">{description}</p>

        <div className="mt-7 flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
          <span className="font-semibold text-foreground">{author}</span>
          <span aria-hidden>•</span>
          <span>{formattedDate}</span>
          <span aria-hidden>•</span>
          <span>{readingTime}</span>
        </div>

        <div className="mt-5 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-orange-200 bg-orange-50 px-3 py-1 text-xs font-medium text-orange-700"
            >
              #{tag}
            </span>
          ))}
        </div>
      </header>
    </>
  );
}
