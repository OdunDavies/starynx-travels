import { createFileRoute } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { JsonLd } from "@/components/json-ld";
import { FAQS } from "@/data/faqs";
import { breadcrumbSchema, faqSchema } from "@/lib/schema";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/faq")({
  head: () =>
    pageHead({
      title: "FAQ",
      description:
        "Frequently asked questions about Starynx Travels: visa guarantees, Schengen processing times, study abroad, and how to start an enquiry.",
      path: "/faq",
    }),
  component: FaqPage,
});

function FaqPage() {
  return (
    <main id="main" className="pb-24 md:pb-0">
      <JsonLd
        data={[
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "FAQ", path: "/faq" },
          ]),
          faqSchema(),
        ]}
      />
      <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
        <p className="text-xs tracking-[0.22em] text-amber uppercase">FAQ</p>
        <h1 className="mt-3 font-display text-5xl">Straight answers</h1>
        <div className="mt-10 divide-y divide-line">
          {FAQS.map((f) => (
            <details key={f.q} className="py-5" open>
              <summary className="cursor-pointer list-none font-medium">{f.q}</summary>
              <p className="mt-2 text-sm leading-relaxed text-muted">{f.a}</p>
            </details>
          ))}
        </div>
        <Button asChild className="mt-10">
          <a href="/enquire">Still need a human — enquire</a>
        </Button>
      </div>
    </main>
  );
}
