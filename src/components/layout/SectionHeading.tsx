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
        "font-extrabold tracking-tight leading-[1.05] [-webkit-font-smoothing:antialiased]",
        light ? "text-white" : "text-foreground"
      )}>
        {title}
      </h2>
      {subtitle && (
        <p className={cn(
          "mt-3 text-base md:text-lg max-w-2xl leading-snug",
          centered && "mx-auto",
          light ? "text-white/80" : "text-muted-foreground"
        )}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
