import { createFileRoute, notFound } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { JsonLd } from "@/components/json-ld";
import { getGuide } from "@/data/guides";
import { articleSchema, breadcrumbSchema } from "@/lib/schema";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/guides/$slug")({
  loader: ({ params }) => {
    const guide = getGuide(params.slug);
    if (!guide) throw notFound();
    return guide;
  },
  head: ({ loaderData }) => {
    if (!loaderData) return {};
    return pageHead({
      title: loaderData.title,
      description: loaderData.description,
      path: `/guides/${loaderData.slug}`,
    });
  },
  component: GuidePage,
});

function GuidePage() {
  const g = Route.useLoaderData();
  return (
    <main id="main" className="pb-24 md:pb-0">
      <JsonLd
        data={[
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Guides", path: "/guides" },
            { name: g.title, path: `/guides/${g.slug}` },
          ]),
          articleSchema(g),
        ]}
      />
      <article className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
        <p className="text-xs tracking-[0.22em] text-amber uppercase">
          {g.category} · {g.date}
        </p>
        <h1 className="mt-3 font-display text-4xl sm:text-5xl">{g.title}</h1>
        <p className="mt-4 text-muted">{g.description}</p>
        {g.body.map((block) => (
          <section key={block.h} className="mt-10">
            <h2 className="font-display text-2xl">{block.h}</h2>
            <p className="mt-3 leading-relaxed text-muted">{block.p}</p>
          </section>
        ))}
        <div className="mt-12 rounded-xl bg-cream p-6">
          <p className="font-display text-2xl">Ready to file this properly?</p>
          <p className="mt-2 text-sm text-muted">
            Send the destination and dates. We return a checklist for that route.
          </p>
          <Button asChild className="mt-4">
            <a href="/enquire">Start an enquiry</a>
          </Button>
        </div>
      </article>
    </main>
  );
}
