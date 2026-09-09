import { photo } from "@/lib/photo";

export const SERVICES = [
  {
    slug: "visa",
    href: "/services/visa",
    title: "Visa processing",
    eyebrow: "Documents, appointments, honesty",
    image: photo("/images/service-visa.jpg"),
    summary:
      "Schengen, UK, US, Canada, UAE, and more. We assemble the file, check it against current checklists, and coach you for the appointment.",
    points: [
      "Document checklist tailored to your destination",
      "Cover letters and itineraries that match the trip",
      "Appointment guidance and interview prep",
      "A clear process before we open the file",
    ],
  },
  {
    slug: "study-abroad",
    href: "/services/study-abroad",
    title: "Study abroad",
    eyebrow: "Admissions to arrival",
    image: photo("/images/service-study.jpg"),
    summary:
      "Programme shortlists, applications, SOP review, and the student visa that follows. UK, Canada, Europe, and the United States.",
    points: [
      "Country and course matching to your grades and aims",
      "Application and SOP support",
      "Student visa file and document review",
      "Pre-departure brief: housing, flights, what to pack",
    ],
  },
  {
    slug: "holidays",
    href: "/services/holidays",
    title: "Holidays & itineraries",
    eyebrow: "Trips you can actually file",
    image: photo("/images/dest-portugal.jpg"),
    summary:
      "Europe, the Gulf, and beyond. We plan the itinerary, then handle the visa so the holiday is actually bookable.",
    points: [
      "Custom itineraries for Georgia through classic Schengen",
      "Hotels, flights, and insurance that match the visa story",
      "Couples, families, and small groups",
      "One team from first message to boarding pass",
    ],
  },
] as const;

export const PROCESS_STEPS = [
  {
    n: "01",
    title: "Tell us the destination",
    body: "Holiday, study, visit, or business. We reply with a realistic visa path and a document list — before we open a file you do not need.",
  },
  {
    n: "02",
    title: "We build the file",
    body: "Itinerary, ties to Nigeria, cover letter. The paperwork has to describe the same trip you will take.",
  },
  {
    n: "03",
    title: "You apply with confidence",
    body: "Appointments, biometrics, interview prep. We stay on the thread until a decision lands.",
  },
  {
    n: "04",
    title: "You travel",
    body: "Flights, stays, and a last check of entry rules. Then you go — that is the whole point.",
  },
] as const;
