import { createFileRoute } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { JsonLd } from "@/components/json-ld";
import { photo } from "@/lib/photo";
import { breadcrumbSchema } from "@/lib/schema";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/services/visa")({
  head: () =>
    pageHead({
      title: "Visa processing",
      description:
        "Schengen, UK, US, Canada, UAE and more. Starynx Travels prepares visitor and student visa files for Nigerian travellers — checklists, cover letters, interview prep.",
      path: "/services/visa",
      image: photo("/images/service-visa.jpg"),
    }),
  component: VisaPage,
});

function VisaPage() {
  return (
    <main id="main" className="pb-24 md:pb-0">
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Services", path: "/services" },
          { name: "Visa processing", path: "/services/visa" },
        ])}
      />
      <div className="relative h-[42svh] min-h-72 bg-ink">
        <img
          src={photo("/images/service-visa.jpg")}
          alt="Travel documents on a leather desk"
          className="absolute inset-0 size-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink to-transparent" />
        <div className="relative mx-auto flex h-full max-w-6xl items-end px-4 pb-10 sm:px-6">
          <div>
            <p className="text-xs tracking-[0.22em] text-amber uppercase">Visa support</p>
            <h1 className="mt-2 font-display text-5xl text-ivory">Visa processing</h1>
          </div>
        </div>
      </div>
      <article className="mx-auto max-w-3xl px-4 py-14 sm:px-6">
        <p className="text-lg">
          A visa file is a story: why you are going, how you will support the stay, and why you return
          — or why you are entitled to stay as a student. We write that story in documents, not slogans.
        </p>
        <h2 className="mt-10 font-display text-3xl">Routes we prepare</h2>
        <ul className="mt-4 space-y-2 text-muted">
          <li>Schengen short-stay (tourism, family, business)</li>
          <li>United Kingdom Standard Visitor and Student</li>
          <li>United States B1/B2 and F-1</li>
          <li>Canada visitor (TRV) and study permit</li>
          <li>UAE visit, Türkiye e-visa, Georgia, and others on request</li>
        </ul>
        <h2 className="mt-10 font-display text-3xl">What you get</h2>
        <p className="mt-3 text-muted">
          A destination-specific checklist, cover letter, itinerary that matches bookings, supporting
          document review, and appointment or interview prep. We do not guarantee outcomes. We do not
          file contradictions.
        </p>
        <h2 className="mt-10 font-display text-3xl">Start with an honest read</h2>
        <p className="mt-3 text-muted">
          Travel history, previous refusals, and supporting documents matter. Send them up front. If
          the profile is weak, we will say so.
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Button asChild>
            <a href="/enquire">Start a visa enquiry</a>
          </Button>
          <Button asChild variant="outline">
            <a href="/guides/schengen-visa-from-nigeria">Schengen guide</a>
          </Button>
        </div>
      </article>
    </main>
  );
}
