import { createFileRoute } from "@tanstack/react-router";
import { GUIDES } from "@/data/guides";
import { JsonLd } from "@/components/json-ld";
import { breadcrumbSchema } from "@/lib/schema";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/guides/")({
  head: () =>
    pageHead({
      title: "Travel & visa guides",
      description:
        "Practical guides from Starynx Travels: Schengen visas from Nigeria, planning a Europe trip, study-abroad first steps, and document checklists.",
      path: "/guides",
    }),
  component: GuidesIndex,
});

function GuidesIndex() {
  return (
    <main id="main" className="pb-24 md:pb-0">
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Guides", path: "/guides" },
        ])}
      />
      <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
        <p className="text-xs tracking-[0.22em] text-amber uppercase">Journal</p>
        <h1 className="mt-3 font-display text-5xl">Guides</h1>
        <p className="mt-4 text-muted">
          Written for people who will actually apply — not for keyword stuffing. Requirements change;
          we still start every file from the current checklist.
        </p>
        <ul className="mt-10 space-y-5">
          {GUIDES.map((g) => (
            <li key={g.slug}>
              <a
                href={`/guides/${g.slug}`}
                className="block rounded-xl bg-cream p-6 hover:bg-sand/70"
              >
                <p className="text-xs tracking-wide text-muted">
                  {g.category} · {g.read}
                </p>
                <h2 className="mt-2 font-display text-2xl">{g.title}</h2>
                <p className="mt-2 text-sm text-muted">{g.description}</p>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}
