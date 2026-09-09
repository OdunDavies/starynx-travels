import { Menu, X } from "lucide-react";
import { Logo } from "@/components/logo";
import { NAV } from "@/data/site";

function NavLinks({
  className,
  itemClassName,
}: {
  className?: string;
  itemClassName?: string;
}) {
  return (
    <nav className={className} aria-label="Primary">
      {NAV.map((item) => (
        <a key={item.href} href={item.href} className={itemClassName}>
          {item.label}
        </a>
      ))}
    </nav>
  );
}

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-line/80 bg-paper">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6">
        <Logo />
        <NavLinks
          className="hidden items-center gap-6 md:flex"
          itemClassName="text-sm tracking-wide text-muted hover:text-fg"
        />
        <a
          href="/enquire"
          className="hidden h-11 items-center rounded-md bg-ink px-5 text-sm font-medium text-ivory md:inline-flex"
        >
          Start an enquiry
        </a>
        <details className="group md:hidden">
          <summary className="relative z-[60] flex size-11 cursor-pointer list-none items-center justify-center rounded-md [&::-webkit-details-marker]:hidden">
            <Menu className="pointer-events-none size-5 group-open:hidden" />
            <X className="pointer-events-none hidden size-5 group-open:block" />
            <span className="sr-only">Menu</span>
          </summary>
          <div
            id="mobile-nav"
            className="fixed inset-x-0 top-16 z-[60] border-b border-line bg-paper p-4 shadow-border"
          >
            <NavLinks
              className="flex flex-col"
              itemClassName="rounded-md px-3 py-3 text-base text-fg hover:bg-cream"
            />
            <a
              href="/enquire"
              className="mt-3 flex h-11 items-center justify-center rounded-md bg-ink text-sm font-medium text-ivory"
            >
              Start an enquiry
            </a>
          </div>
        </details>
      </div>
    </header>
  );
}
