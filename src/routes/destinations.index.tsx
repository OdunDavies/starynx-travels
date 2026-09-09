import { createFileRoute } from "@tanstack/react-router";
import { DESTINATIONS } from "@/data/destinations";
import { JsonLd } from "@/components/json-ld";
import { breadcrumbSchema } from "@/lib/schema";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/destinations/")({
  head: () =>
    pageHead({
      title: "Destinations",
      description:
        "Holidays and visa routes Starynx Travels plans from Nigeria: Georgia, Portugal, Spain, France, Italy, Germany, UK, UAE, Türkiye, Canada, and the United States.",
      path: "/destinations",
    }),
  component: DestinationsIndex,
});

function DestinationsIndex() {
  return (
    <main id="main" className="pb-24 md:pb-0">
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Destinations", path: "/destinations" },
        ])}
      />
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <p className="text-xs tracking-[0.22em] text-amber uppercase">Places we file for</p>
        <h1 className="mt-3 font-display text-5xl">Destinations</h1>
        <p className="mt-4 max-w-2xl text-muted">
          Holidays and visa routes we plan from Nigeria. Each country page notes the path for a
          Nigerian passport, the season, and who the trip is for.
        </p>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {DESTINATIONS.map((d) => (
            <a
              key={d.slug}
              href={`/destinations/${d.slug}`}
              className="group overflow-hidden rounded-xl bg-cream"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={d.image}
                  alt={`${d.name} — travel photography`}
                  className="size-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                />
              </div>
              <div className="p-5">
                <p className="text-xs tracking-wide text-muted">{d.region}</p>
                <h2 className="mt-1 font-display text-2xl">{d.name}</h2>
                <p className="mt-2 text-sm text-muted">{d.blurb}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </main>
  );
}
