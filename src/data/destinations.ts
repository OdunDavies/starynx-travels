import { photo } from "@/lib/photo";

export type VisaPath = "embassy" | "evisa" | "voa" | "mixed";

export type Destination = {
  slug: string;
  name: string;
  country: string;
  region: string;
  image: string;
  visaFromNigeria: string;
  visaPath: VisaPath;
  blurb: string;
  highlights: string[];
  bestFor: string[];
  season: string;
  intro: string;
};

export const DESTINATIONS: Destination[] = [
  {
    slug: "georgia",
    name: "Georgia",
    country: "Georgia",
    region: "Europe / Caucasus",
    image: photo("/images/dest-georgia.jpg"),
    visaFromNigeria: "Embassy or e-visa (often easier with a valid Schengen or OECD visa).",
    visaPath: "evisa",
    blurb: "Wine country, mountain towns, and Tbilisi nights — a European-feeling first trip.",
    highlights: ["Tbilisi old town", "Kakheti wine region", "Kazbegi mountains", "Warm hospitality"],
    bestFor: ["First international holiday", "Couples", "City + mountains"],
    season: "May–October for hiking; year-round for cities",
    intro:
      "Georgia is the destination we suggest when someone wants Europe’s feeling without a Schengen wait. We prepare documents, map a realistic itinerary, and walk the visa route that fits your passport history.",
  },
  {
    slug: "portugal",
    name: "Portugal",
    country: "Portugal",
    region: "Schengen",
    image: photo("/images/dest-portugal.jpg"),
    visaFromNigeria: "Schengen short-stay visa (apply via the Portuguese mission or VFS).",
    visaPath: "embassy",
    blurb: "Lisbon trams, Algarve coast, and a Schengen visa that opens 29 countries.",
    highlights: ["Lisbon & Porto", "Algarve beaches", "Sintra palaces", "Atlantic seafood"],
    bestFor: ["Schengen holidays", "Honeymoons", "City + coast"],
    season: "April–June and September–October",
    intro:
      "Portugal is one of the most requested Schengen files we handle. One approved visa can cover onward days in Spain, France, or Italy if the itinerary is built correctly.",
  },
  {
    slug: "spain",
    name: "Spain",
    country: "Spain",
    region: "Schengen",
    image: photo("/images/dest-spain.jpg"),
    visaFromNigeria: "Schengen short-stay visa (Spain is a frequent first-entry choice).",
    visaPath: "embassy",
    blurb: "Gothic quarters, late dinners, and a visa that can unlock the rest of Schengen.",
    highlights: ["Barcelona streets", "Madrid museums", "Andalusian courtyards", "Mediterranean coast"],
    bestFor: ["Family holidays", "Group trips", "First Europe visit"],
    season: "April–June, September–November",
    intro:
      "Spain is a workhorse destination for first-time Schengen applicants: clear tourist purpose, strong hotel inventory, and an itinerary that reads well at interview. We build the paper trail so the trip looks like the trip you will actually take.",
  },
  {
    slug: "france",
    name: "France",
    country: "France",
    region: "Schengen",
    image: photo("/images/dest-france.jpg"),
    visaFromNigeria: "Schengen short-stay visa via the French network.",
    visaPath: "embassy",
    blurb: "Paris evenings, Loire towns, and a study-and-visit corridor many Nigerians already dream about.",
    highlights: ["Paris riverfront", "Museum culture", "Regional rail", "Gastronomy"],
    bestFor: ["Couples", "Study visits", "Anniversary trips"],
    season: "April–June and September–October",
    intro:
      "France is both a holiday and a study-abroad country for our clients. Whether you need a visitor file or a student pathway, we treat the visa as a story of purpose and ties — not a stack of random PDFs.",
  },
  {
    slug: "italy",
    name: "Italy",
    country: "Italy",
    region: "Schengen",
    image: photo("/images/dest-italy.jpg"),
    visaFromNigeria: "Schengen short-stay visa; Italy is also a study destination.",
    visaPath: "embassy",
    blurb: "Travertine piazzas, long lunches, and a visa file that benefits from a precise itinerary.",
    highlights: ["Rome", "Florence & Tuscany", "Amalfi or lakes", "Art and food"],
    bestFor: ["Honeymoons", "Family", "Culture trips"],
    season: "April–June, September–October",
    intro:
      "Italy rewards travellers who slow down. We design routes that a visa officer can follow — nights booked, trains timed — so the holiday and the paperwork tell the same story.",
  },
  {
    slug: "germany",
    name: "Germany",
    country: "Germany",
    region: "Schengen",
    image: photo("/images/dest-germany.jpg"),
    visaFromNigeria: "Schengen visitor visa, or a national visa for study.",
    visaPath: "embassy",
    blurb: "Museums, Christmas markets, and one of the most structured study-abroad systems in Europe.",
    highlights: ["Berlin & Munich", "Rhine towns", "Christmas markets", "University cities"],
    bestFor: ["Study abroad", "Business visits", "City breaks"],
    season: "May–September; late November for markets",
    intro:
      "Germany is a dual brief for Starynx: short Schengen visits and longer student visas. The file standards are exacting. We start with the purpose, then the documents, then the appointment — never the other way around.",
  },
  {
    slug: "united-kingdom",
    name: "United Kingdom",
    country: "United Kingdom",
    region: "UK",
    image: photo("/images/dest-uk.jpg"),
    visaFromNigeria: "Standard Visitor visa, or Student visa for study.",
    visaPath: "embassy",
    blurb: "The most requested visit and study destination we handle from Nigeria.",
    highlights: ["London", "Edinburgh", "University towns", "Family visits"],
    bestFor: ["Study abroad", "Family visits", "Short courses"],
    season: "Year-round; May–September for sightseeing",
    intro:
      "UK files fail when purpose and travel history do not line up. We prepare visitor and student applications with that in mind: a clear reason to go, a clear reason to return or to study, and documents that match.",
  },
  {
    slug: "united-arab-emirates",
    name: "United Arab Emirates",
    country: "United Arab Emirates",
    region: "Gulf",
    image: photo("/images/dest-uae.jpg"),
    visaFromNigeria: "UAE visit visa / e-visa via airline or sponsor — we advise the current route.",
    visaPath: "evisa",
    blurb: "Dubai and Abu Dhabi for long weekends, family trips, and stopovers that feel like the main event.",
    highlights: ["Dubai skyline", "Desert days", "Abu Dhabi culture", "Shopping and dining"],
    bestFor: ["Family", "Friends’ trips", "Stopovers"],
    season: "November–March",
    intro:
      "The UAE is a high-intent, relatively fast visa compared with Schengen. We still treat it as a proper file: hotel, return ticket, and a stay length that matches your leave.",
  },
  {
    slug: "turkey",
    name: "Türkiye",
    country: "Türkiye",
    region: "Europe / Asia",
    image: photo("/images/dest-turkey.jpg"),
    visaFromNigeria: "e-Visa or embassy visa depending on current rules — we confirm before you apply.",
    visaPath: "evisa",
    blurb: "Istanbul at dusk, Cappadocia mornings, and a holiday that does not require a Schengen wait.",
    highlights: ["Istanbul", "Cappadocia", "Aegean coast", "Bazaars and cuisine"],
    bestFor: ["Honeymoons", "First passport trips", "City + coast"],
    season: "April–June, September–November",
    intro:
      "Türkiye is a favourite first international trip: memorable, photogenic, and usually faster to process than Schengen. We use it often when someone wants a proper holiday without a long visa queue.",
  },
  {
    slug: "canada",
    name: "Canada",
    country: "Canada",
    region: "North America",
    image: photo("/images/dest-canada.jpg"),
    visaFromNigeria: "Visitor visa (TRV) or study permit.",
    visaPath: "embassy",
    blurb: "Study permits, visitor files, and a long-horizon destination for families.",
    highlights: ["Toronto & Vancouver", "University campuses", "National parks", "Family reunions"],
    bestFor: ["Study abroad", "Family visits", "Work-study pathways"],
    season: "May–October for travel; intakes in September and January",
    intro:
      "Canada is a study and visit market. Programme choice, a letter of explanation, and a complete document set decide the file. We start with an honest assessment so the destination actually fits.",
  },
  {
    slug: "united-states",
    name: "United States",
    country: "United States",
    region: "North America",
    image: photo("/images/dest-usa.jpg"),
    visaFromNigeria: "B1/B2 visitor visa or F-1 student visa after embassy interview.",
    visaPath: "embassy",
    blurb: "Interview-led visas. Preparation is the product.",
    highlights: ["New York", "Washington, D.C.", "Campus visits", "Family and conferences"],
    bestFor: ["Study abroad", "Conferences", "Family visits"],
    season: "Year-round; book interviews early",
    intro:
      "US visas are won or lost at interview. We prepare the DS-160 narrative, supporting documents, and the answers that match them. No guarantees — honest coaching instead.",
  },
];

export function getDestination(slug: string) {
  return DESTINATIONS.find((d) => d.slug === slug);
}
