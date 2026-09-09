import { createFileRoute } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { JsonLd } from "@/components/json-ld";
import { photo } from "@/lib/photo";
import { breadcrumbSchema } from "@/lib/schema";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/services/study-abroad")({
  head: () =>
    pageHead({
      title: "Study abroad",
      description:
        "Study abroad with Starynx Travels: programme matching, applications, SOP review, and student visas for the UK, Canada, Europe, and the United States.",
      path: "/services/study-abroad",
      image: photo("/images/service-study.jpg"),
    }),
  component: StudyPage,
});

function StudyPage() {
  return (
    <main id="main" className="pb-24 md:pb-0">
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Services", path: "/services" },
          { name: "Study abroad", path: "/services/study-abroad" },
        ])}
      />
      <div className="relative h-[42svh] min-h-72 bg-ink">
        <img
          src={photo("/images/service-study.jpg")}
          alt="Historic university quadrangle in autumn"
          className="absolute inset-0 size-full object-cover opacity-70"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink to-transparent" />
        <div className="relative mx-auto flex h-full max-w-6xl items-end px-4 pb-10 sm:px-6">
          <div>
            <p className="text-xs tracking-[0.22em] text-amber uppercase">Admissions to arrival</p>
            <h1 className="mt-2 font-display text-5xl text-ivory">Study abroad</h1>
          </div>
        </div>
      </div>
      <article className="mx-auto max-w-3xl px-4 py-14 sm:px-6">
        <p className="text-lg">
          The degree is the destination. The visa is the gate. We run both so applications and the
          student file are prepared as one process — not two disconnected packs.
        </p>
        <h2 className="mt-10 font-display text-3xl">The sequence</h2>
        <ol className="mt-4 list-decimal space-y-3 pl-5 text-muted">
          <li>Grades, preferred country, and an honest shortlist.</li>
          <li>Applications and statement of purpose, not a template dump.</li>
          <li>Offer in hand, then the student visa: supporting documents, TB test, CAS or equivalent.</li>
          <li>Pre-departure: flights, housing notes, what the landing looks like.</li>
        </ol>
        <h2 className="mt-10 font-display text-3xl">Countries we place into</h2>
        <p className="mt-3 text-muted">
          United Kingdom, Canada, Schengen Europe (including France, Germany, Italy), and the United
          States. Admissions are not automatic — we will tell you when a profile is competitive and
          when it is not.
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Button asChild>
            <a href="/enquire">Start a study enquiry</a>
          </Button>
          <Button asChild variant="outline">
            <a href="/guides/study-abroad-first-steps">First-steps guide</a>
          </Button>
        </div>
      </article>
    </main>
  );
}
