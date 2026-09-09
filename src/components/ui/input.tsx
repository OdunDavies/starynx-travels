import * as React from "react";
import { cn } from "@/lib/utils";

export function Input({ className, ...props }: React.ComponentProps<"input">) {
  return (
    <input
      className={cn(
        "flex h-11 w-full rounded-md border border-line bg-paper px-3 text-sm text-fg placeholder:text-faint outline-none transition-shadow duration-150 focus-visible:ring-2 focus-visible:ring-amber/40",
        className,
      )}
      {...props}
    />
  );
}

export function Textarea({ className, ...props }: React.ComponentProps<"textarea">) {
  return (
    <textarea
      className={cn(
        "flex min-h-28 w-full rounded-md border border-line bg-paper px-3 py-2.5 text-sm text-fg placeholder:text-faint outline-none transition-shadow duration-150 focus-visible:ring-2 focus-visible:ring-amber/40",
        className,
      )}
      {...props}
    />
  );
}

export function Label({ className, ...props }: React.ComponentProps<"label">) {
  return (
    <label className={cn("block text-sm font-medium text-fg", className)} {...props} />
  );
}

export function Select({ className, children, ...props }: React.ComponentProps<"select">) {
  return (
    <select
      className={cn(
        "flex h-11 w-full rounded-md border border-line bg-paper px-3 text-sm text-fg outline-none transition-shadow duration-150 focus-visible:ring-2 focus-visible:ring-amber/40",
        className,
      )}
      {...props}
    >
      {children}
    </select>
  );
}
