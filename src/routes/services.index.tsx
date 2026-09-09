import { createFileRoute } from "@tanstack/react-router";
import { SERVICES } from "@/data/services";
import { JsonLd } from "@/components/json-ld";
import { breadcrumbSchema } from "@/lib/schema";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/services/")({
  head: () =>
    pageHead({
      title: "Visa, study abroad & holiday services",
      description:
        "Starynx Travels services: Schengen and global visa processing, study-abroad admissions, and holidays from Georgia to classic Europe.",
      path: "/services",
    }),
  component: ServicesIndex,
});

function ServicesIndex() {
  return (
    <main id="main" className="pb-24 md:pb-0">
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Services", path: "/services" },
        ])}
      />
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <p className="text-xs tracking-[0.22em] text-amber uppercase">Services</p>
        <h1 className="mt-3 font-display text-5xl">Three ways we take you abroad</h1>
        <p className="mt-4 max-w-2xl text-muted">
          We handle the visa and travel process as one file — so the paperwork matches the trip you
          actually take.
        </p>
        <div className="mt-12 space-y-8">
          {SERVICES.map((s) => (
            <a
              key={s.href}
              href={s.href}
              className="grid overflow-hidden rounded-xl bg-cream md:grid-cols-2"
            >
              <img src={s.image} alt="" className="aspect-[4/3] h-full w-full object-cover" />
              <div className="flex flex-col justify-center p-6 sm:p-8">
                <p className="text-xs tracking-[0.18em] text-amber uppercase">{s.eyebrow}</p>
                <h2 className="mt-2 font-display text-3xl">{s.title}</h2>
                <p className="mt-3 text-sm text-muted">{s.summary}</p>
                <ul className="mt-4 space-y-1.5 text-sm">
                  {s.points.map((p) => (
                    <li key={p}>{p}</li>
                  ))}
                </ul>
              </div>
            </a>
          ))}
        </div>
      </div>
    </main>
  );
}
