import { createFileRoute } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { JsonLd } from "@/components/json-ld";
import { SITE } from "@/data/site";
import { photo } from "@/lib/photo";
import { breadcrumbSchema } from "@/lib/schema";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/about")({
  head: () =>
    pageHead({
      title: "About",
      description:
        "Starynx Travels is a travel consultancy known on Instagram as @starynx_travels. We plan holidays, process visas, and support study abroad — explore the world with us.",
      path: "/about",
    }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <main id="main" className="pb-24 md:pb-0">
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "About", path: "/about" },
        ])}
      />
      <div className="grid lg:grid-cols-2">
        <div className="min-h-[40svh] bg-ink">
          <img
            src={photo("/images/hero-square.jpg")}
            alt="Airplane window and cabin seat"
            className="size-full object-cover opacity-80"
          />
        </div>
        <div className="flex flex-col justify-center px-4 py-16 sm:px-10">
          <p className="text-xs tracking-[0.22em] text-amber uppercase">{SITE.instagramHandle}</p>
          <h1 className="mt-3 font-display text-5xl">Explore the world with us</h1>
          <p className="mt-5 text-muted leading-relaxed">
            Starynx Travels is the studio behind the Instagram you already know. The wordmark is a
            star with a plane in it for a reason: the trip is the point, the paperwork is how you get
            there.
          </p>
          <p className="mt-4 text-muted leading-relaxed">
            We work with travellers who want a Schengen or UK visa filed cleanly, a first European
            holiday that actually happens, or a study-abroad path that starts with the offer letter
            rather than a rumour. Same standard of file, every route.
          </p>
          <p className="mt-4 text-muted leading-relaxed">
            There is no walk-in theatre here. Most conversations start as a DM. This website exists so
            search engines, and the assistants people ask instead of Google, can find the same facts
            we post: destinations, visa paths, and how to begin.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button asChild>
              <a href="/enquire">Work with us</a>
            </Button>
            <Button asChild variant="outline">
              <a href={SITE.instagram} target="_blank" rel="noopener noreferrer">
                Instagram
              </a>
            </Button>
          </div>
        </div>
      </div>
    </main>
  );
}
