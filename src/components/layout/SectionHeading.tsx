import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  title: string | React.ReactNode;
  subtitle?: string;
  className?: string;
  centered?: boolean;
  light?: boolean;
}

export function SectionHeading({ title, subtitle, className, centered = true, light = false }: SectionHeadingProps) {
  return (
    <div className={cn("mb-8 md:mb-10", centered && "text-center", className)}>
      <h2 className={cn(
        "font-heading font-extrabold tracking-tight leading-[1.0] tracking-[-0.02em] [-webkit-font-smoothing:antialiased]",
        light ? "text-white" : "text-slate-950"
      )}>
        {title}
      </h2>
      {subtitle && (
        <p className={cn(
          "mt-2.5 text-base md:text-lg max-w-2xl leading-relaxed font-body",
          centered && "mx-auto",
          light ? "text-white/80" : "text-slate-600"
        )}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
