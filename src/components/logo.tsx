import { cn } from "@/lib/utils";

export function StarMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 64 64"
      className={cn("shrink-0", className)}
      aria-hidden="true"
    >
      <polygon
        points="32,3 40.5,22.5 61,24 45,38 50,58 32,47 14,58 19,38 3,24 23.5,22.5"
        fill="currentColor"
      />
      <path
        d="M32 24.5c.4 0 .8.15 1.05.45l6.2 7.4c.3.36.34.86.1 1.26-.24.4-.68.64-1.15.64H36.2v5.1c0 .7-.55 1.25-1.25 1.25h-5.9c-.7 0-1.25-.55-1.25-1.25v-5.1h-2c-.47 0-.91-.24-1.15-.64a1.3 1.3 0 0 1 .1-1.26l6.2-7.4c.25-.3.65-.45 1.05-.45Z"
        fill="var(--color-amber)"
      />
    </svg>
  );
}

export function Logo({
  invert = false,
  compact = false,
  className,
}: {
  invert?: boolean;
  compact?: boolean;
  className?: string;
}) {
  return (
    <a
      href="/"
      aria-label="Starynx Travels home"
      className={cn("group flex items-center gap-2.5", className)}
    >
      <StarMark className={cn("size-8", invert ? "text-ivory" : "text-ink")} />
      <span className="leading-none">
        <span
          className={cn(
            "block font-semibold tracking-[0.18em] text-[0.95rem]",
            invert ? "text-ivory" : "text-ink",
          )}
        >
          STARYNX
        </span>
        {!compact ? (
          <span
            className={cn(
              "mt-0.5 block text-[0.62rem] tracking-[0.38em]",
              invert ? "text-ivory/70" : "text-muted",
            )}
          >
            TRAVELS
          </span>
        ) : null}
      </span>
    </a>
  );
}
