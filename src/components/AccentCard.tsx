import { cn } from "@/lib/utils";

const accentBorderMap = {
  orange: "border-orange-500",
  blue: "border-blue-500",
  violet: "border-violet-500",
  teal: "border-teal-500",
  gray: "border-slate-300",
} as const;

export type AccentColor = keyof typeof accentBorderMap;

interface AccentCardProps {
  children: React.ReactNode;
  accent: AccentColor;
  variant: "top" | "left";
  className?: string;
}

export function AccentCard({ children, accent, variant, className }: AccentCardProps) {
  const borderColor = accentBorderMap[accent];
  return (
    <div
      className={cn(
        "rounded-2xl bg-white border border-slate-200 shadow-xl overflow-hidden",
        "ring-1 ring-black/5",
        "transition-all duration-300 hover:-translate-y-0.5 hover:shadow-2xl",
        "p-6",
        variant === "top" && `border-t-[6px] ${borderColor}`,
        variant === "left" && `border-l-[6px] ${borderColor}`,
        className
      )}
    >
      {children}
    </div>
  );
}
