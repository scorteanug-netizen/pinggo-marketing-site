import { cn } from "@/lib/utils";

export type AccentColor = "orange" | "blue" | "violet" | "teal" | "gray";

interface AccentCardProps {
  children: React.ReactNode;
  accent: AccentColor;
  variant: "top" | "left";
  className?: string;
}

export function AccentCard({ children, accent, variant, className }: AccentCardProps) {
  void accent;
  void variant;
  return (
    <div
      className={cn(
        "rounded-xl bg-white border border-gray-200",
        "shadow-sm transition-all duration-200 hover:-translate-y-1 hover:border-orange-500 hover:shadow-lg",
        "p-6 md:p-8",
        className
      )}
    >
      {children}
    </div>
  );
}
