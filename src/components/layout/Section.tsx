import { cn } from "@/lib/utils";
import { Container } from "./Container";

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  alternate?: boolean;
  id?: string;
}

export function Section({ children, className, alternate = false, id }: SectionProps) {
  return (
    <section
      id={id}
      className={cn(
        "py-16 md:py-24",
        alternate ? "bg-secondary" : "bg-background",
        className
      )}
    >
      <Container>{children}</Container>
    </section>
  );
}
