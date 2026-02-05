import { cn } from "@/lib/utils";
import { Container } from "./Container";

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  alternate?: boolean;
  canvas?: boolean;
  highlightBlue?: boolean;
  id?: string;
}

export function Section({ 
  children, 
  className, 
  alternate = false, 
  canvas = false,
  highlightBlue = false,
  id 
}: SectionProps) {
  if (highlightBlue) {
    return (
      <section
        id={id}
        className={cn(
          "section-premium bg-highlight-blue",
          className
        )}
      >
        <div className="geometric-shapes" aria-hidden="true" />
        <Container className="relative z-10">{children}</Container>
      </section>
    );
  }

  return (
    <section
      id={id}
      className={cn(
        "section-premium",
        alternate ? "bg-secondary" : "bg-background",
        canvas && "bg-canvas",
        className
      )}
    >
      <Container>{children}</Container>
    </section>
  );
}
