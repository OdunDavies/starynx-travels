import { Instagram } from "lucide-react";
import { SITE } from "@/data/site";

export function StickyCta() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-30 border-t border-line bg-paper/95 p-3 backdrop-blur-md md:hidden">
      <div className="flex gap-2">
        <a
          href="/enquire"
          className="flex h-11 flex-1 items-center justify-center rounded-md bg-ink text-sm font-medium text-ivory"
        >
          Start an enquiry
        </a>
        <a
          href={SITE.instagramDm}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex size-11 items-center justify-center rounded-md border border-line"
          aria-label="Message Starynx Travels on Instagram"
        >
          <Instagram className="size-4" />
        </a>
      </div>
    </div>
  );
}
