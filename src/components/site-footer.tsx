import { Instagram } from "lucide-react";
import { Logo } from "@/components/logo";
import { SITE } from "@/data/site";
import { DESTINATIONS } from "@/data/destinations";
import { SERVICES } from "@/data/services";

export function SiteFooter() {
  return (
    <footer className="border-t border-line bg-cream">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-4">
        <div className="md:col-span-1">
          <Logo />
          <p className="mt-4 max-w-xs text-sm text-muted">
            {SITE.tagline}. Visas, study abroad, and holidays planned so the paperwork matches the trip.
          </p>
          <a
            href={SITE.instagram}
            className="mt-4 inline-flex min-h-11 items-center gap-2 text-sm text-fg hover:text-amber"
            rel="noopener noreferrer"
            target="_blank"
          >
            <Instagram className="size-4" />
            {SITE.instagramHandle}
          </a>
        </div>
        <div>
          <p className="text-xs font-medium tracking-[0.18em] text-muted uppercase">Services</p>
          <ul className="mt-3 space-y-2 text-sm">
            {SERVICES.map((s) => (
              <li key={s.href}>
                <a href={s.href} className="text-fg hover:text-amber">
                  {s.title}
                </a>
              </li>
            ))}
            <li>
              <a href="/enquire" className="text-fg hover:text-amber">
                Enquire
              </a>
            </li>
          </ul>
        </div>
        <div>
          <p className="text-xs font-medium tracking-[0.18em] text-muted uppercase">Destinations</p>
          <ul className="mt-3 space-y-2 text-sm">
            {DESTINATIONS.slice(0, 6).map((d) => (
              <li key={d.slug}>
                <a href={`/destinations/${d.slug}`} className="text-fg hover:text-amber">
                  {d.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="text-xs font-medium tracking-[0.18em] text-muted uppercase">Company</p>
          <ul className="mt-3 space-y-2 text-sm">
            <li>
              <a href="/about" className="text-fg hover:text-amber">
                About
              </a>
            </li>
            <li>
              <a href="/guides" className="text-fg hover:text-amber">
                Guides
              </a>
            </li>
            <li>
              <a href="/faq" className="text-fg hover:text-amber">
                FAQ
              </a>
            </li>
            <li>
              <a href="/privacy" className="text-fg hover:text-amber">
                Privacy
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-line">
        <p className="mx-auto max-w-6xl px-4 py-5 text-xs text-muted sm:px-6">
          © {new Date().getFullYear()} {SITE.name}. Visa decisions rest with embassies and consulates.
          Requirements change — we confirm the current checklist on every file.
        </p>
      </div>
    </footer>
  );
}
