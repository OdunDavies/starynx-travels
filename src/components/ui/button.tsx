import { cva, type VariantProps } from "class-variance-authority";
import { Slot } from "@radix-ui/react-slot";
import * as React from "react";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-colors duration-150 disabled:pointer-events-none disabled:opacity-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber min-h-11",
  {
    variants: {
      variant: {
        primary: "bg-ink text-ivory hover:bg-ink-soft",
        amber: "bg-amber text-amber-fg hover:bg-amber/90",
        outline: "border border-line bg-transparent text-fg hover:bg-cream",
        ghost: "text-fg hover:bg-cream",
        ivory: "bg-ivory text-ink hover:bg-paper",
      },
      size: {
        default: "rounded-md px-5 py-2.5 text-sm",
        lg: "rounded-lg px-6 py-3 text-sm",
        sm: "rounded-sm px-3 py-2 text-sm min-h-10",
      },
    },
    defaultVariants: { variant: "primary", size: "default" },
  },
);

export function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & { asChild?: boolean }) {
  const Comp = asChild ? Slot : "button";
  return <Comp className={cn(buttonVariants({ variant, size }), className)} {...props} />;
}
