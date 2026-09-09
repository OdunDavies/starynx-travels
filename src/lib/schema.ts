import { SITE } from "@/data/site";
import { FAQS } from "@/data/faqs";
import { DESTINATIONS } from "@/data/destinations";
import { SERVICES } from "@/data/services";
import type { Guide } from "@/data/guides";

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": ["TravelAgency", "Organization"],
    name: SITE.name,
    alternateName: ["Starynx", "STARYNX Travels"],
    url: "/",
    description: SITE.description,
    slogan: SITE.tagline,
    areaServed: { "@type": "Country", name: "Nigeria" },
    sameAs: [SITE.instagram],
    knowsAbout: [
      "Schengen visa",
      "Study abroad",
      "UK visitor visa",
      "Europe travel",
      "Visa processing",
    ],
    makesOffer: SERVICES.map((s) => ({
      "@type": "Offer",
      itemOffered: { "@type": "Service", name: s.title, description: s.summary },
    })),
  };
}

export function faqSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQS.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}

export function breadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: item.path,
    })),
  };
}

export function destinationSchema(slug: string) {
  const d = DESTINATIONS.find((x) => x.slug === slug);
  if (!d) return null;
  return {
    "@context": "https://schema.org",
    "@type": "TouristDestination",
    name: d.name,
    description: d.intro,
    touristType: d.bestFor.join(", "),
  };
}

export function articleSchema(guide: Guide) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: guide.title,
    description: guide.description,
    datePublished: guide.date,
    author: { "@type": "Organization", name: SITE.name },
    publisher: { "@type": "Organization", name: SITE.name },
  };
}
