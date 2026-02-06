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
        "rounded-2xl bg-white border border-slate-200 shadow-lg overflow-hidden",
        "transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl",
        "p-6",
        variant === "top" && `border-t-4 ${borderColor}`,
        variant === "left" && `border-l-4 ${borderColor}`,
        className
      )}
    >
      {children}
    </div>
  );
}
