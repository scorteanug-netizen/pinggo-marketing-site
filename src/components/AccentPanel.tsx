import { cn } from "@/lib/utils";

const accentBorderMap = {
  orange: "border-t-orange-500",
  blue: "border-t-blue-500",
  violet: "border-t-violet-500",
  teal: "border-t-teal-500",
  gray: "border-t-slate-300",
} as const;

export type AccentPanelColor = keyof typeof accentBorderMap;

interface AccentPanelProps {
  children: React.ReactNode;
  accent?: AccentPanelColor;
  className?: string;
}

export function AccentPanel({ children, accent = "orange", className }: AccentPanelProps) {
  return (
    <div
      className={cn(
        "rounded-3xl bg-white border border-slate-200 shadow-xl overflow-hidden",
        "ring-1 ring-black/5",
        "border-t-[6px]",
        accentBorderMap[accent],
        className
      )}
    >
      {children}
    </div>
  );
}
