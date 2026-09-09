import { SITE } from "@/data/site";

export function pageTitle(title?: string) {
  return title ? `${title} | ${SITE.name}` : `${SITE.name} — ${SITE.tagline}`;
}

export function pageHead({
  title,
  description,
  path,
}: {
  title?: string;
  description: string;
  path: string;
  image?: string;
}) {
  const fullTitle = pageTitle(title);
  return {
    meta: [
      { title: fullTitle },
      { name: "description", content: description },
      { name: "robots", content: "index, follow, max-image-preview:large" },
      { name: "author", content: SITE.name },
      { name: "geo.region", content: "NG" },
      { name: "language", content: "en" },
      { name: "theme-color", content: "#12151A" },
    ],
    links: [
      { rel: "canonical", href: path },
      { rel: "alternate", hrefLang: "en", href: path },
    ],
  };
}
