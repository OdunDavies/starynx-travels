import { Button } from "@/components/ui/button";

export function NotFound() {
  return (
    <main id="main" className="mx-auto flex min-h-[60svh] max-w-xl flex-col justify-center px-4 py-20">
      <p className="text-xs tracking-[0.22em] text-amber uppercase">404</p>
      <h1 className="mt-3 font-display text-4xl">That page is not on the itinerary</h1>
      <p className="mt-3 text-sm text-muted">
        The link may be outdated. Start from home, or send an enquiry and we will route you.
      </p>
      <div className="mt-6 flex gap-3">
        <Button asChild>
          <a href="/">Home</a>
        </Button>
        <Button asChild variant="outline">
          <a href="/enquire">Enquire</a>
        </Button>
      </div>
    </main>
  );
}
