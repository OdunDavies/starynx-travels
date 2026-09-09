import { createRootRoute, HeadContent, Outlet, Scripts } from "@tanstack/react-router";
import { AuthProvider } from "@/lib/auth/provider";
import { PreviewHostBridge } from "@/components/preview-host-bridge";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { StickyCta } from "@/components/sticky-cta";
import { JsonLd } from "@/components/json-ld";
import { organizationSchema } from "@/lib/schema";
import { SITE } from "@/data/site";
import appCss from "../styles.css?url";

const APP_NAME = SITE.name;

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: `${APP_NAME} — ${SITE.tagline}` },
      { name: "description", content: SITE.description },
      { name: "theme-color", content: "#12151A" },
    ],
    links: [
      { rel: "icon", type: "image/svg+xml", href: "/favicon.svg" },
      { rel: "stylesheet", href: appCss },
      { rel: "manifest", href: "/__grok/manifest.webmanifest" },
      { rel: "apple-touch-icon", href: "/__grok/icon-180.png" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,500;0,600;0,700;1,500&family=Outfit:wght@400;500;600;700&display=swap",
      },
    ],
  }),
  component: () => (
    <html lang="en" className="antialiased" suppressHydrationWarning>
      <head>
        <HeadContent />
      </head>
      <body className="min-h-dvh bg-paper font-sans text-fg">
        <PreviewHostBridge />
        <AuthProvider>
          <JsonLd data={organizationSchema()} />
          <a
            href="#main"
            className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-ink focus:px-3 focus:py-2 focus:text-ivory"
          >
            Skip to content
          </a>
          <SiteHeader />
          <Outlet />
          <SiteFooter />
          <StickyCta />
        </AuthProvider>
        <Scripts />
      </body>
    </html>
  ),
});
