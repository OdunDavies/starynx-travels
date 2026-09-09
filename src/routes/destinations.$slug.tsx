import { createFileRoute, notFound } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { JsonLd } from "@/components/json-ld";
import { DESTINATIONS, getDestination } from "@/data/destinations";
import { breadcrumbSchema, destinationSchema } from "@/lib/schema";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/destinations/$slug")({
  loader: ({ params }) => {
    const dest = getDestination(params.slug);
    if (!dest) throw notFound();
    return dest;
  },
  head: ({ loaderData }) => {
    if (!loaderData) return {};
    return pageHead({
      title: `${loaderData.name} travel & visas`,
      description: `${loaderData.intro} ${loaderData.visaFromNigeria}`,
      path: `/destinations/${loaderData.slug}`,
    });
  },
  component: DestinationPage,
});

function DestinationPage() {
  const d = Route.useLoaderData();
  const others = DESTINATIONS.filter((x) => x.slug !== d.slug).slice(0, 3);
  const schema = destinationSchema(d.slug);

  return (
    <main id="main" className="pb-24 md:pb-0">
      <JsonLd
        data={[
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Destinations", path: "/destinations" },
            { name: d.name, path: `/destinations/${d.slug}` },
          ]),
          ...(schema ? [schema] : []),
        ]}
      />
      <div className="relative h-[48svh] min-h-80 bg-ink">
        <img src={d.image} alt="" className="absolute inset-0 size-full object-cover opacity-70" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/40 to-transparent" />
        <div className="relative mx-auto flex h-full max-w-6xl items-end px-4 pb-10 sm:px-6">
          <div>
            <p className="text-xs tracking-[0.22em] text-amber uppercase">{d.region}</p>
            <h1 className="mt-2 font-display text-5xl text-ivory sm:text-6xl">{d.name}</h1>
          </div>
        </div>
      </div>
      <article className="mx-auto grid max-w-6xl gap-12 px-4 py-14 sm:px-6 lg:grid-cols-[1.2fr_0.8fr]">
        <div>
          <p className="text-lg leading-relaxed text-fg">{d.intro}</p>
          <h2 className="mt-10 font-display text-3xl">Highlights</h2>
          <ul className="mt-4 grid gap-2 sm:grid-cols-2">
            {d.highlights.map((h) => (
              <li key={h} className="rounded-lg bg-cream px-4 py-3 text-sm">
                {h}
              </li>
            ))}
          </ul>
          <h2 className="mt-10 font-display text-3xl">Best for</h2>
          <p className="mt-2 text-muted">{d.bestFor.join(" · ")}</p>
          <p className="mt-6 text-sm text-muted">Typical season: {d.season}</p>
        </div>
        <aside className="h-fit rounded-xl bg-cream p-6">
          <p className="text-xs tracking-[0.18em] text-muted uppercase">Visa from Nigeria</p>
          <p className="mt-2 text-sm">{d.visaFromNigeria}</p>
          <p className="mt-6 text-xs tracking-[0.18em] text-muted uppercase">Best for</p>
          <p className="mt-2 text-sm text-muted">{d.bestFor.join(" · ")}</p>
          <Button asChild className="mt-6 w-full">
            <a href="/enquire">Enquire about {d.name}</a>
          </Button>
          <Button asChild variant="outline" className="mt-2 w-full">
            <a href="/services/visa">Visa processing</a>
          </Button>
        </aside>
      </article>
      <section className="mx-auto max-w-6xl px-4 pb-16 sm:px-6">
        <h2 className="font-display text-3xl">Other routes</h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-3">
          {others.map((o) => (
            <a
              key={o.slug}
              href={`/destinations/${o.slug}`}
              className="overflow-hidden rounded-xl bg-cream"
            >
              <img src={o.image} alt="" className="aspect-[4/3] w-full object-cover" />
              <p className="p-4 font-display text-xl">{o.name}</p>
            </a>
          ))}
        </div>
      </section>
    </main>
  );
}
