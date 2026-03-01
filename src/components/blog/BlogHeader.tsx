import { Helmet } from "react-helmet-async";
import { useEffect, useMemo, useState } from "react";

interface BlogHeaderProps {
  title: string;
  description: string;
  author: string;
  date: string;
  tags: string[];
  readingTime: string;
}

const dateFormatter = new Intl.DateTimeFormat("ro-RO", {
  day: "2-digit",
  month: "long",
  year: "numeric",
});

export function BlogHeader({ title, description, author, date, tags, readingTime }: BlogHeaderProps) {
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
        {/* ===== PRIMARY SEO ===== */}
        <title>Cât costă un lead pierdut? Calculul real pentru afaceri din România | Pinggo</title>
        <meta
          name="description"
          content="Un lead pierdut înseamnă bani aruncați pe reclamă. Calculează exact cât pierde afacerea ta pe lună când nu răspunzi în timp util pe WhatsApp. Date reale pentru clinici, solar și imobiliare."
        />
        <link rel="canonical" href="https://pinggo.ro/blog/cat-costa-un-lead-pierdut" />

        {/* ===== OPEN GRAPH (Facebook, LinkedIn) ===== */}
        <meta property="og:type" content="article" />
        <meta
          property="og:title"
          content="Cât costă un lead pierdut? Calculul pe care niciun owner nu vrea să-l facă"
        />
        <meta
          property="og:description"
          content="Calculează exact cât pierde afacerea ta lunar din leads nepreluate la timp. Date concrete pentru clinici dentare, solar și imobiliare."
        />
        <meta property="og:url" content="https://pinggo.ro/blog/cat-costa-un-lead-pierdut" />
        <meta property="og:image" content="https://pinggo.ro/og/cat-costa-un-lead-pierdut.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:locale" content="ro_RO" />
        <meta property="og:site_name" content="Pinggo" />
        <meta property="article:published_time" content="2026-03-01T09:00:00+02:00" />
        <meta property="article:author" content="Echipa Pinggo" />
        <meta property="article:tag" content="leaduri" />
        <meta property="article:tag" content="WhatsApp" />
        <meta property="article:tag" content="cost per lead" />

        {/* ===== TWITTER / X ===== */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Cât costă un lead pierdut în România?" />
        <meta
          name="twitter:description"
          content="Calculul real pe care niciun owner nu vrea să-l facă. Date concrete pentru clinici, solar, imobiliare."
        />
        <meta name="twitter:image" content="https://pinggo.ro/og/cat-costa-un-lead-pierdut.png" />
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
