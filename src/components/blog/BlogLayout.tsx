import { cn } from "@/lib/utils";
import { Container } from "@/components/layout/Container";
import { Layout } from "@/components/layout/Layout";
import { useEffect, useMemo, useRef, useState } from "react";

type TocItem = {
  id: string;
  title: string;
};

interface BlogLayoutProps {
  children: React.ReactNode;
  tocItems?: readonly TocItem[];
}

interface FadeInSectionProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

function usePrefersReducedMotion() {
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const handleChange = () => setReducedMotion(mediaQuery.matches);

    handleChange();
    mediaQuery.addEventListener("change", handleChange);

    return () => {
      mediaQuery.removeEventListener("change", handleChange);
    };
  }, []);

  return reducedMotion;
}

export function FadeInSection({ children, className, delay = 0 }: FadeInSectionProps) {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const reducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (reducedMotion) {
      setIsVisible(true);
      return;
    }

    const element = sectionRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.disconnect();
          }
        });
      },
      {
        rootMargin: "-80px",
        threshold: 0.15,
      },
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [reducedMotion]);

  const transitionStyle = useMemo(
    () => ({
      transitionDelay: `${delay}s`,
    }),
    [delay],
  );

  return (
    <div
      ref={sectionRef}
      style={reducedMotion ? undefined : transitionStyle}
      className={cn(
        "transition-all duration-500 ease-out",
        reducedMotion || isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6",
        className,
      )}
    >
      {children}
    </div>
  );
}

export function BlogLayout({ children, tocItems = [] }: BlogLayoutProps) {
  const [activeSectionId, setActiveSectionId] = useState<string>(tocItems[0]?.id ?? "");

  useEffect(() => {
    if (!tocItems.length || typeof window === "undefined") return;

    const elements = tocItems
      .map((item) => document.getElementById(item.id))
      .filter((element): element is HTMLElement => Boolean(element));

    if (!elements.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntries = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visibleEntries.length > 0) {
          const firstVisibleId = visibleEntries[0].target.getAttribute("id");
          if (firstVisibleId) {
            setActiveSectionId(firstVisibleId);
          }
        }
      },
      {
        rootMargin: "-20% 0px -65% 0px",
        threshold: [0.2, 0.4, 0.6],
      },
    );

    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, [tocItems]);

  const onTocClick = (id: string) => {
    const target = document.getElementById(id);
    target?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <Layout>
      <Container className="py-10 md:py-14 lg:py-16">
        <div className={cn("grid gap-10", tocItems.length > 0 && "xl:grid-cols-[minmax(0,1fr)_280px]")}>
          {children}
          {tocItems.length > 0 ? (
            <aside className="hidden xl:block">
              <div className="sticky top-28 rounded-2xl border border-border/70 bg-background/95 p-5 shadow-sm backdrop-blur-sm">
                <p className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">Cuprins</p>
                <ul className="mt-4 space-y-3">
                  {tocItems.map((item) => {
                    const isActive = activeSectionId === item.id;
                    return (
                      <li key={item.id}>
                        <button
                          type="button"
                          onClick={() => onTocClick(item.id)}
                          className={cn(
                            "w-full text-left text-sm transition-colors",
                            isActive ? "font-semibold text-primary" : "text-muted-foreground hover:text-foreground",
                          )}
                        >
                          {item.title}
                        </button>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </aside>
          ) : null}
        </div>
      </Container>
    </Layout>
  );
}
