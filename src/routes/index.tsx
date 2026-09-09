import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, FileCheck, GraduationCap, Globe2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { LeadForm } from "@/components/lead-form";
import { JsonLd } from "@/components/json-ld";
import { DESTINATIONS } from "@/data/destinations";
import { PROCESS_STEPS, SERVICES } from "@/data/services";
import { FAQS } from "@/data/faqs";
import { SITE } from "@/data/site";
import { photo } from "@/lib/photo";
import { faqSchema, organizationSchema } from "@/lib/schema";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/")({
  head: () => pageHead({
    description: SITE.description,
    path: "/",
  }),
  component: Home,
});

const ICONS = [FileCheck, GraduationCap, Globe2];

function Home() {
  return (
    <main id="main" className="pb-24 md:pb-0">
      <JsonLd data={[organizationSchema(), faqSchema()]} />
      <section className="relative min-h-[88svh] overflow-hidden bg-ink text-ivory">
        <img
          src={photo("/images/hero-cabin.jpg")}
          alt="Airplane cabin window at cruise altitude"
          className="absolute inset-0 size-full object-cover opacity-55"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/70 to-ink/30" />
        <div className="relative mx-auto flex min-h-[88svh] max-w-6xl flex-col justify-end px-4 py-20 sm:px-6">
          <p className="text-xs font-medium tracking-[0.28em] text-amber uppercase">
            {SITE.instagramHandle}
          </p>
          <h1 className="mt-4 max-w-3xl font-display text-5xl leading-[1.05] tracking-tight sm:text-7xl">
            Where your journey begins.
          </h1>
          <p className="mt-5 max-w-xl text-base text-ivory/80 sm:text-lg">
            Visas, study abroad, and holidays — from Georgia to classic Schengen.
            We handle the process so the trip you want is the trip you can file.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button asChild variant="amber" size="lg">
              <a href="/enquire">
                Start an enquiry
                <ArrowRight className="size-4" />
              </a>
            </Button>
            <Button asChild variant="ivory" size="lg">
              <a href="/destinations">Browse destinations</a>
            </Button>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <p className="text-xs font-medium tracking-[0.22em] text-amber uppercase">What we do</p>
        <h2 className="mt-2 max-w-2xl font-display text-4xl">
          One studio for the visa, the school, and the holiday.
        </h2>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {SERVICES.map((s, i) => {
            const Icon = ICONS[i];
            return (
              <a
                key={s.href}
                href={s.href}
                className="group flex flex-col rounded-xl bg-cream p-6 transition-transform duration-200 hover:-translate-y-0.5"
              >
                <Icon className="size-5 text-amber" />
                <h3 className="mt-4 font-display text-2xl">{s.title}</h3>
                <p className="mt-2 flex-1 text-sm text-muted">{s.summary}</p>
                <span className="mt-5 inline-flex items-center gap-1 text-sm text-fg">
                  Learn more <ArrowRight className="size-3.5" />
                </span>
              </a>
            );
          })}
        </div>
      </section>

      <section className="bg-cream">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="text-xs font-medium tracking-[0.22em] text-amber uppercase">Destinations</p>
              <h2 className="mt-2 font-display text-4xl">Where clients ask to go</h2>
            </div>
            <Button asChild variant="outline">
              <a href="/destinations">All destinations</a>
            </Button>
          </div>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {DESTINATIONS.slice(0, 6).map((d) => (
              <a
                key={d.slug}
                href={`/destinations/${d.slug}`}
                className="group overflow-hidden rounded-xl bg-paper"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={d.image}
                    alt={d.name}
                    className="size-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-display text-2xl">{d.name}</h3>
                  <p className="mt-1 text-sm text-muted">{d.blurb}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-10 px-4 py-20 sm:px-6 lg:grid-cols-2">
        <div className="overflow-hidden rounded-xl bg-cream">
          <img
            src={photo("/images/hero-square.jpg")}
            alt="Airplane window and cabin seat"
            className="aspect-[4/3] w-full object-cover"
          />
          <div className="p-6 sm:p-8">
            <p className="text-xs font-medium tracking-[0.22em] text-amber uppercase">Start here</p>
            <h2 className="mt-2 font-display text-3xl">Tell us the destination. We map the visa path.</h2>
            <p className="mt-3 text-sm text-muted">
              Holiday, study, or visit. We reply with a realistic route and a document list — before a
              file is opened.
            </p>
            <Button asChild className="mt-6">
              <a href="/enquire">Start an enquiry</a>
            </Button>
          </div>
        </div>
        <div className="flex flex-col justify-center">
          <p className="text-xs font-medium tracking-[0.22em] text-amber uppercase">How it works</p>
          <h2 className="mt-2 font-display text-4xl">Four steps. No theatre.</h2>
          <ol className="mt-8 space-y-6">
            {PROCESS_STEPS.map((s) => (
              <li key={s.n} className="flex gap-4">
                <span className="font-display text-2xl text-amber">{s.n}</span>
                <div>
                  <h3 className="font-medium">{s.title}</h3>
                  <p className="mt-1 text-sm text-muted">{s.body}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="bg-ink text-ivory">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-20 sm:px-6 lg:grid-cols-2">
          <div>
            <p className="text-xs font-medium tracking-[0.22em] text-amber uppercase">Start here</p>
            <h2 className="mt-2 font-display text-4xl">Love knows no borders. Paperwork still does.</h2>
            <p className="mt-4 text-ivory/75">
              Most files begin as an Instagram DM. Use the form so we already know the destination,
              the dates, and whether this is a holiday, a visa, or a degree.
            </p>
          </div>
          <LeadForm />
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-20 sm:px-6">
        <h2 className="font-display text-4xl">Questions people ask first</h2>
        <div className="mt-8 divide-y divide-line">
          {FAQS.slice(0, 5).map((f) => (
            <details key={f.q} className="group py-4">
              <summary className="cursor-pointer list-none font-medium marker:content-none">
                {f.q}
              </summary>
              <p className="mt-2 text-sm text-muted">{f.a}</p>
            </details>
          ))}
        </div>
        <a href="/faq" className="mt-6 inline-flex items-center gap-1 text-sm">
          All questions <ArrowRight className="size-3.5" />
        </a>
      </section>
    </main>
  );
}
