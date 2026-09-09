import { createFileRoute } from "@tanstack/react-router";
import { JsonLd } from "@/components/json-ld";
import { SITE } from "@/data/site";
import { breadcrumbSchema } from "@/lib/schema";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/privacy")({
  head: () =>
    pageHead({
      title: "Privacy",
      description: "How Starynx Travels handles enquiry details you enter on this website.",
      path: "/privacy",
    }),
  component: PrivacyPage,
});

function PrivacyPage() {
  return (
    <main id="main" className="pb-24 md:pb-0">
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Privacy", path: "/privacy" },
        ])}
      />
      <article className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
        <h1 className="font-display text-5xl">Privacy</h1>
        <p className="mt-6 text-muted leading-relaxed">
          The enquiry form on this site stores a copy of what you typed in your own browser so you can
          paste it to {SITE.instagramHandle}. We do not receive that copy until you send it on
          Instagram or another channel you choose.
        </p>
        <p className="mt-4 text-muted leading-relaxed">
          Once you message us, we use your name, contact details, and trip notes only to assess the
          visa or travel request. We do not share enquiry lists.
        </p>
        <p className="mt-4 text-muted leading-relaxed">
          This website uses no advertising pixels of our own. Analytics, if added later, will be
          disclosed here.
        </p>
      </article>
    </main>
  );
}
