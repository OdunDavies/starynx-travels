import { createFileRoute } from "@tanstack/react-router";
import { LeadForm } from "@/components/lead-form";
import { JsonLd } from "@/components/json-ld";
import { breadcrumbSchema } from "@/lib/schema";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/enquire")({
  head: () =>
    pageHead({
      title: "Start an enquiry",
      description:
        "Start a Starynx Travels enquiry for holidays, visas, and study abroad. Tell us the destination — we reply with a visa path and a document list.",
      path: "/enquire",
    }),
  component: EnquirePage,
});

function EnquirePage() {
  return (
    <main id="main" className="pb-24 md:pb-0">
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Enquire", path: "/enquire" },
        ])}
      />
      <div className="bg-ink px-4 py-16 text-ivory sm:px-6">
        <div className="mx-auto max-w-3xl">
          <p className="text-xs tracking-[0.22em] text-amber uppercase">Leads that become files</p>
          <h1 className="mt-3 font-display text-5xl">Start an enquiry</h1>
          <p className="mt-4 max-w-xl text-ivory/75">
            Three questions. You keep a copy, then send it to us on Instagram. We come back with
            whether the route is realistic — before a file is opened that should not be filed.
          </p>
        </div>
      </div>
      <div className="mx-auto max-w-xl px-4 py-12 sm:px-6">
        <LeadForm />
      </div>
    </main>
  );
}
