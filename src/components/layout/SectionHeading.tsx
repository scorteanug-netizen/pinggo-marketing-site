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
    <div className={cn("mb-14 md:mb-16", centered && "text-center", className)}>
      <h2 className={cn(
        "font-extrabold tracking-tight leading-tight",
        light ? "text-white" : "text-foreground"
      )}>
        {title}
      </h2>
      {subtitle && (
        <p className={cn(
          "mt-5 text-lg md:text-xl max-w-3xl",
          centered && "mx-auto",
          light ? "text-white/80" : "text-muted-foreground"
        )}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
