import { cn } from "@/lib/utils";

export type AccentPanelColor = "orange" | "blue" | "violet" | "teal" | "gray";

interface AccentPanelProps {
  children: React.ReactNode;
  accent?: AccentPanelColor;
  className?: string;
}

export function AccentPanel({ children, accent = "orange", className }: AccentPanelProps) {
  void accent;
  return (
    <div
      className={cn(
        "rounded-xl bg-white border border-gray-200",
        "shadow-sm transition-all duration-200 hover:-translate-y-1 hover:border-orange-500 hover:shadow-lg",
        className
      )}
    >
      {children}
    </div>
  );
}
