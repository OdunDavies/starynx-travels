export type Guide = {
  slug: string;
  title: string;
  description: string;
  date: string;
  read: string;
  category: string;
  body: { h: string; p: string }[];
};

export const GUIDES: Guide[] = [
  {
    slug: "planning-a-europe-trip",
    title: "Planning a Europe trip from Nigeria",
    description:
      "How Starynx Travels chooses a Schengen country, builds an itinerary a visa officer can follow, and times the appointment.",
    date: "2026-02-11",
    read: "6 min",
    category: "Holidays",
    body: [
      {
        h: "Name the main country first",
        p: "You apply to the country of main stay, not whichever appointment appears first. We start by naming that country, then build nights that justify it — Portugal for a coast-and-city week, Spain for a first visit, France when study or family is part of the story.",
      },
      {
        h: "The itinerary has to match the file",
        p: "A visa officer reads hotels against flights against dates. A Georgia holiday, a Türkiye week, and a classic Schengen loop are different files. We would rather rewrite the trip than decorate a pack that will not survive scrutiny.",
      },
      {
        h: "What we actually plan",
        p: "Nights, transport, insurance, and then the visa. Send us a message or use the enquiry form with the destination and travel window.",
      },
    ],
  },
  {
    slug: "schengen-visa-from-nigeria",
    title: "Schengen visa from Nigeria: what a complete file looks like",
    description:
      "How Starynx Travels prepares Schengen short-stay applications: purpose, itinerary, ties, and appointment timing.",
    date: "2026-03-02",
    read: "8 min",
    category: "Visas",
    body: [
      {
        h: "One visa, 29 countries — if the story is clean",
        p: "A Schengen short-stay visa can cover tourism across the Schengen Area, generally up to 90 days in 180. You apply to the country of main stay. We start by naming that country, then build nights that justify it.",
      },
      {
        h: "The documents that actually matter",
        p: "Valid passport with blank pages, completed form, photos to spec, travel medical insurance, proof of accommodation, flight reservation (not always a fully issued ticket — we advise per mission), employment or business proof, and a cover letter. Extra papers do not help if they contradict each other.",
      },
      {
        h: "Timing",
        p: "From Nigeria, appointment queues are the hidden delay. Start 8–12 weeks before travel in summer. We will not file an incomplete pack to hit a date that was never realistic.",
      },
      {
        h: "What we cannot do",
        p: "We cannot skip biometrics, invent employment, or guarantee an outcome. We can make the file internally consistent and prepare you for questions about purpose and return.",
      },
    ],
  },
  {
    slug: "study-abroad-first-steps",
    title: "Study abroad: first steps before you commit",
    description:
      "A practical sequence for Nigerian students: country, course, tests, then the visa. How Starynx Travels runs the process.",
    date: "2026-04-18",
    read: "7 min",
    category: "Study abroad",
    body: [
      {
        h: "Pick the country for the outcome, not the Instagram reel",
        p: "UK, Canada, the US, and Europe each have different work rights and visa evidence. We map that against your grades and whether a given programme is a realistic fit.",
      },
      {
        h: "Admissions before the visa",
        p: "A student visa without an offer is not a plan. We shortlist programmes, review statements of purpose, and only then open the visa file — CAS, TB test, and the rest as required.",
      },
      {
        h: "Documents need a history",
        p: "Missions want a trail, not a last-minute scramble. If something in the file is new last week, we will say so. Better to wait a cycle than to burn an application.",
      },
    ],
  },
  {
    slug: "visa-documents-checklist",
    title: "How to prepare visa documents without the panic",
    description:
      "A calm document workflow we use with clients: identity, purpose, ties, and travel — checked twice before submission.",
    date: "2026-05-20",
    read: "5 min",
    category: "Visas",
    body: [
      {
        h: "Five piles, not fifty PDFs",
        p: "Identity (passport, photos), purpose (invitation, offer letter, itinerary), supporting statements the mission lists, ties (job, family, property), and travel (insurance, hotels). If a paper does not sit in one pile, it probably does not belong.",
      },
      {
        h: "Names and dates must match",
        p: "The hotel in Paris and the flight into Rome is a classic fail. We read the file as an officer would: can this person do this trip, on these dates?",
      },
      {
        h: "Start with an enquiry",
        p: "Send the destination and travel window. We return a checklist for that route — not a generic internet list that went stale last year.",
      },
    ],
  },
];

export function getGuide(slug: string) {
  return GUIDES.find((g) => g.slug === slug);
}
