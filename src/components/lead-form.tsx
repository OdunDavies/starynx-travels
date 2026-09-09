"use client";

import { useMemo, useState } from "react";
import { Check, Copy, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input, Label, Select, Textarea } from "@/components/ui/input";
import { DESTINATIONS } from "@/data/destinations";
import { SITE } from "@/data/site";

const GOALS = [
  { id: "holiday", label: "Holiday / leisure" },
  { id: "study", label: "Study abroad" },
  { id: "visa", label: "Visa only" },
  { id: "visit", label: "Family visit" },
  { id: "business", label: "Business travel" },
] as const;

export type Enquiry = {
  goal: string;
  destination: string;
  dates: string;
  name: string;
  email: string;
  phone: string;
  notes: string;
};

const empty: Enquiry = {
  goal: "",
  destination: "",
  dates: "",
  name: "",
  email: "",
  phone: "",
  notes: "",
};

function composeMessage(e: Enquiry) {
  return [
    `Hello Starynx Travels — I'd like help with a ${e.goal || "trip"}.`,
    e.destination ? `Destination: ${e.destination}` : null,
    e.dates ? `Travel window: ${e.dates}` : null,
    e.notes ? `Notes: ${e.notes}` : null,
    `From: ${e.name}`,
    e.phone ? `Phone: ${e.phone}` : null,
    e.email ? `Email: ${e.email}` : null,
  ]
    .filter(Boolean)
    .join("\n");
}

export function LeadForm({ compact = false }: { compact?: boolean }) {
  const [step, setStep] = useState(1);
  const [form, setForm] = useState<Enquiry>(empty);
  const [error, setError] = useState("");
  const [copied, setCopied] = useState(false);
  const [done, setDone] = useState(false);

  const message = useMemo(() => composeMessage(form), [form]);

  function set<K extends keyof Enquiry>(key: K, value: Enquiry[K]) {
    setForm((f) => ({ ...f, [key]: value }));
  }

  function nextFromOne() {
    if (!form.goal) {
      setError("Choose what you need help with.");
      return;
    }
    setError("");
    setStep(2);
  }

  function nextFromTwo() {
    if (!form.destination) {
      setError("Tell us the destination, even if it is a shortlist.");
      return;
    }
    setError("");
    setStep(3);
  }

  function submit(ev: React.FormEvent) {
    ev.preventDefault();
    if (!form.name.trim() || !form.phone.trim()) {
      setError("Name and phone help us reply. Email is optional.");
      return;
    }
    setError("");
    try {
      const prev = JSON.parse(localStorage.getItem("starynx-enquiries") || "[]") as Enquiry[];
      localStorage.setItem(
        "starynx-enquiries",
        JSON.stringify([{ ...form, at: new Date().toISOString() }, ...prev].slice(0, 8)),
      );
    } catch {
      /* ignore quota */
    }
    setDone(true);
  }

  async function copy() {
    try {
      await navigator.clipboard.writeText(message);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      setError("Copy failed — select the text instead.");
    }
  }

  if (done) {
    return (
      <div className="rounded-xl bg-cream p-6 sm:p-8">
        <p className="text-xs font-medium tracking-[0.2em] text-amber uppercase">Enquiry ready</p>
        <h2 className="mt-2 font-display text-3xl text-fg">Send this to Starynx</h2>
        <p className="mt-2 text-sm text-muted">
          Your details stay on this device. Open Instagram and paste the note — that is how most of our
          files begin.
        </p>
        <pre className="mt-5 overflow-x-auto rounded-lg bg-ink p-4 text-sm leading-relaxed whitespace-pre-wrap text-ivory">
          {message}
        </pre>
        <div className="mt-5 flex flex-col gap-2 sm:flex-row">
          <Button asChild className="flex-1">
            <a href={SITE.instagramDm} target="_blank" rel="noopener noreferrer">
              <Instagram className="size-4" />
              Open Instagram DM
            </a>
          </Button>
          <Button type="button" variant="outline" onClick={copy} className="flex-1">
            {copied ? <Check className="size-4" /> : <Copy className="size-4" />}
            {copied ? "Copied" : "Copy message"}
          </Button>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={submit} className={compact ? "" : "rounded-xl bg-cream p-6 sm:p-8"}>
      <p className="text-xs font-medium tracking-[0.2em] text-amber uppercase">Start an enquiry</p>
      <h2 className="mt-2 font-display text-3xl text-fg">Tell us where you want to go</h2>
      <p className="mt-2 text-sm text-muted">
        Three short steps. We use this to reply with a visa path and a document list.
      </p>
      <ol className="mt-5 flex gap-2 text-xs tracking-wide text-muted" aria-label="Progress">
        {[1, 2, 3].map((n) => (
          <li
            key={n}
            className={n <= step ? "text-fg" : ""}
          >
            {n === 1 ? "Need" : n === 2 ? "Trip" : "Details"}
            {n < 3 ? " · " : ""}
          </li>
        ))}
      </ol>

      {step === 1 ? (
        <fieldset className="mt-6">
          <legend className="sr-only">What do you need?</legend>
          <div className="grid gap-2 sm:grid-cols-2">
            {GOALS.map((g) => (
              <button
                key={g.id}
                type="button"
                onClick={() => set("goal", g.label)}
                className={`min-h-12 rounded-lg border px-4 py-3 text-left text-sm transition-colors duration-150 ${
                  form.goal === g.label
                    ? "border-ink bg-ink text-ivory"
                    : "border-line bg-paper text-fg hover:bg-sand/50"
                }`}
              >
                {g.label}
              </button>
            ))}
          </div>
          <Button type="button" className="mt-6 w-full" onClick={nextFromOne}>
            Continue
          </Button>
        </fieldset>
      ) : null}

      {step === 2 ? (
        <div className="mt-6 space-y-4">
          <div>
            <Label htmlFor="destination">Destination</Label>
            <Select
              id="destination"
              className="mt-1.5"
              value={form.destination}
              onChange={(e) => set("destination", e.target.value)}
            >
              <option value="">Select or type below</option>
              {DESTINATIONS.map((d) => (
                <option key={d.slug} value={d.name}>
                  {d.name}
                </option>
              ))}
              <option value="Other / not sure">Other / not sure</option>
            </Select>
          </div>
          {form.destination === "Other / not sure" ? (
            <div>
              <Label htmlFor="destination-custom">If other, name it</Label>
              <Input
                id="destination-custom"
                className="mt-1.5"
                placeholder="e.g. Ireland, Netherlands, Malaysia"
                onChange={(e) => {
                  if (e.target.value) set("destination", e.target.value);
                }}
              />
            </div>
          ) : null}
          <div>
            <Label htmlFor="dates">Travel window</Label>
            <Input
              id="dates"
              className="mt-1.5"
              placeholder="e.g. December 2026, or Sept 2027 intake"
              value={form.dates}
              onChange={(e) => set("dates", e.target.value)}
            />
          </div>
          <div className="flex gap-2">
            <Button type="button" variant="outline" onClick={() => setStep(1)}>
              Back
            </Button>
            <Button type="button" className="flex-1" onClick={nextFromTwo}>
              Continue
            </Button>
          </div>
        </div>
      ) : null}

      {step === 3 ? (
        <div className="mt-6 space-y-4">
          <div>
            <Label htmlFor="name">Full name</Label>
            <Input
              id="name"
              className="mt-1.5"
              autoComplete="name"
              value={form.name}
              onChange={(e) => set("name", e.target.value)}
              required
            />
          </div>
          <div>
            <Label htmlFor="phone">Phone / WhatsApp</Label>
            <Input
              id="phone"
              className="mt-1.5"
              autoComplete="tel"
              placeholder="+234 …"
              value={form.phone}
              onChange={(e) => set("phone", e.target.value)}
              required
            />
          </div>
          <div>
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              className="mt-1.5"
              autoComplete="email"
              value={form.email}
              onChange={(e) => set("email", e.target.value)}
            />
          </div>
          <div>
            <Label htmlFor="notes">Anything we should know</Label>
            <Textarea
              id="notes"
              className="mt-1.5"
              placeholder="Travel history, previous refusals, dependents…"
              value={form.notes}
              onChange={(e) => set("notes", e.target.value)}
            />
          </div>
          <p className="text-xs text-muted">
            Submitted on your device only. You send it to {SITE.instagramHandle} in the next step.
          </p>
          <div className="flex gap-2">
            <Button type="button" variant="outline" onClick={() => setStep(2)}>
              Back
            </Button>
            <Button type="submit" className="flex-1">
              Prepare my enquiry
            </Button>
          </div>
        </div>
      ) : null}

      {error ? (
        <p className="mt-4 text-sm text-amber" role="alert">
          {error}
        </p>
      ) : null}
    </form>
  );
}
