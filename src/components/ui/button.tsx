import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-xl text-sm font-semibold ring-offset-background transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground shadow-md shadow-primary/20 hover:scale-105 hover:bg-primary/85 hover:shadow-lg hover:shadow-primary/25",
        destructive: "bg-destructive text-destructive-foreground shadow-md hover:scale-105 hover:bg-destructive/90 hover:shadow-lg",
        outline: "border border-border-card bg-background shadow-sm hover:scale-105 hover:border-orange-500 hover:bg-muted/50 hover:shadow-lg",
        outlineWhite: "border border-white/60 bg-transparent text-white shadow-sm hover:scale-105 hover:bg-white/10 hover:border-white hover:shadow-lg",
        secondary: "bg-secondary text-secondary-foreground shadow-sm hover:scale-105 hover:bg-secondary/80 hover:shadow-lg",
        ghost: "hover:scale-105 hover:bg-accent/10 hover:text-accent",
        link: "relative text-orange-500 after:absolute after:-bottom-0.5 after:left-0 after:h-0.5 after:w-0 after:bg-orange-500 after:transition-all after:duration-300 hover:text-orange-600 hover:after:w-full",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-8 rounded-lg px-3 text-xs",
        lg: "h-11 rounded-xl px-6 text-base",
        icon: "h-9 w-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />;
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
