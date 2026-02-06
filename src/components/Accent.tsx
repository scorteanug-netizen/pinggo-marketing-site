import { cn } from "@/lib/utils";

interface AccentProps {
  children: React.ReactNode;
  className?: string;
}

export function Accent({ children, className }: AccentProps) {
  return (
    <span className={cn("text-orange-500 font-extrabold", className)}>
      {children}
    </span>
  );
}
