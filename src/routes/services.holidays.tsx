import { createFileRoute } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { JsonLd } from "@/components/json-ld";
import { breadcrumbSchema } from "@/lib/schema";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/services/holidays")({
  head: () =>
    pageHead({
      title: "Holidays & itineraries",
      description:
        "Plan a holiday with Starynx Travels: Georgia, Schengen Europe, UAE, and Türkiye. The itinerary and the visa are built as one file.",
      path: "/services/holidays",
    }),
  component: HolidaysPage,
});

function HolidaysPage() {
  return (
    <main id="main" className="pb-24 md:pb-0">
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Services", path: "/services" },
          { name: "Holidays", path: "/services/holidays" },
        ])}
      />
      <div className="relative h-[42svh] min-h-72 bg-ink">
        <img
          src="/images/dest-portugal.jpg"
          alt="Lisbon tram on a cobbled street"
          className="absolute inset-0 size-full object-cover opacity-70"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink to-transparent" />
        <div className="relative mx-auto flex h-full max-w-6xl items-end px-4 pb-10 sm:px-6">
          <div>
            <p className="text-xs tracking-[0.22em] text-amber uppercase">Trips you can file</p>
            <h1 className="mt-2 font-display text-5xl text-ivory">Holidays & itineraries</h1>
          </div>
        </div>
      </div>
      <article className="mx-auto max-w-3xl px-4 py-14 sm:px-6">
        <p className="text-lg">
          Europe on your mind? We plan Georgia, classic Schengen, the UAE, and Türkiye so the itinerary
          a visa officer reads is the trip you will actually take.
        </p>
        <h2 className="mt-10 font-display text-3xl">What a Starynx holiday includes</h2>
        <ul className="mt-4 space-y-2 text-muted">
          <li>A dated itinerary a visa officer can follow</li>
          <li>Hotels and transport that match the story of the trip</li>
          <li>Insurance and a document pack, if you need the visa too</li>
          <li>Couples, families, and small groups — not 40-person tours</li>
        </ul>
        <p className="mt-6 text-muted">
          Love knows no borders. Appointment calendars do. Start earlier than Instagram makes it look.
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Button asChild>
            <a href="/enquire">Plan a holiday</a>
          </Button>
          <Button asChild variant="outline">
            <a href="/destinations">See destinations</a>
          </Button>
        </div>
      </article>
    </main>
  );
}
