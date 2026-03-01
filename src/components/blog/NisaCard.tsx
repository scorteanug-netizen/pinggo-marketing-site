import { BlogTable } from "@/components/blog/BlogTable";
import { cn } from "@/lib/utils";
import { useEffect, useRef, useState } from "react";
import type { NisaCardContent } from "@/content/blog/cat-costa-un-lead-pierdut";

interface NisaCardProps {
  content: NisaCardContent;
  index: number;
}

function usePrefersReducedMotion() {
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const handleChange = () => setReducedMotion(mediaQuery.matches);

    handleChange();
    mediaQuery.addEventListener("change", handleChange);

    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  return reducedMotion;
}

export function NisaCard({ content, index }: NisaCardProps) {
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef<HTMLDivElement | null>(null);
  const reducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (reducedMotion) {
      setIsVisible(true);
      return;
    }

    const element = cardRef.current;
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
        threshold: 0.2,
      },
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [reducedMotion]);

  return (
    <div
      ref={cardRef}
      style={reducedMotion ? undefined : { transitionDelay: `${index * 0.15}s` }}
      className={cn(
        "rounded-2xl border border-border/70 bg-background p-5 shadow-sm transition-all duration-500 ease-out md:p-7",
        reducedMotion || isVisible ? "translate-x-0 opacity-100" : "-translate-x-5 opacity-0",
      )}
    >
      <h3 className="text-2xl font-bold text-foreground">{content.heading}</h3>

      <div className="mt-5">
        <BlogTable headers={content.tableHeaders} rows={content.tableRows} />
      </div>

      <p className="mt-6 text-base leading-relaxed text-muted-foreground">{content.scenario}</p>

      <div className="mt-5 rounded-xl border border-orange-200 bg-orange-50 p-4">
        <p className="text-sm font-medium text-orange-800">{content.calculationLabel}</p>
        <p className="mt-1 text-xl font-extrabold text-orange-700">{content.calculationResult}</p>
        {content.annualImpact ? <p className="mt-1 text-sm text-orange-700/90">{content.annualImpact}</p> : null}
      </div>
    </div>
  );
}
