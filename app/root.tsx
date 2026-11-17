import {
  isRouteErrorResponse,
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "react-router";

import type { Route } from "./+types/root";
import { APP_NAME, SITE_URL, TAGLINE } from "./constants";
import "./app.css";

export const links: Route.LinksFunction = () => [
  { rel: "icon", href: "/favicon.png", type: "image/png" },
  { rel: "apple-touch-icon", href: "/favicon.png" },
  { rel: "preconnect", href: "https://fonts.googleapis.com" },
  { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Space+Grotesk:wght@500;700&display=swap",
  },
];

// Organisation and app identity for search engines. Store links are added here
// once the apps are live (see constants.ts).
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${SITE_URL}/#org`,
      name: APP_NAME,
      url: SITE_URL,
      logo: `${SITE_URL}/favicon.png`,
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: SITE_URL,
      name: APP_NAME,
      description: TAGLINE,
      publisher: { "@id": `${SITE_URL}/#org` },
    },
    {
      "@type": "EducationalApplication",
      "@id": `${SITE_URL}/#app`,
      name: APP_NAME,
      description:
        "Built to elevate learning: animated experiments, quizzes and an AI tutor that help high school learners understand their school subjects, following the CAPS curriculum.",
      educationalLevel: "High school",
      operatingSystem: "iOS, Android, Web",
      applicationCategory: "EducationalApplication",
      publisher: { "@id": `${SITE_URL}/#org` },
    },
  ],
};

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-ZA">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
        <meta name="theme-color" content="#111111" />
        <meta name="robots" content="index, follow, max-image-preview:large" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        <Meta />
        <Links />
      </head>
      <body>
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return <Outlet />;
}

export function ErrorBoundary({ error }: Route.ErrorBoundaryProps) {
  let message = "Something went wrong";
  let details = "An unexpected error occurred. Try going back to the home page.";
  let stack: string | undefined;

  if (isRouteErrorResponse(error)) {
    message = error.status === 404 ? "Page not found" : "Error";
    details =
      error.status === 404
        ? "The page you are looking for does not exist. It may have moved."
        : error.statusText || details;
  } else if (import.meta.env.DEV && error instanceof Error) {
    details = error.message;
    stack = error.stack;
  }

  return (
    <main className="mx-auto max-w-2xl px-5 pt-32 pb-20">
      <p className="text-sm font-semibold text-teal">{isRouteErrorResponse(error) ? String(error.status) : "Error"}</p>
      <h1 className="mt-3 text-4xl font-bold">{message}</h1>
      <p className="mt-4 text-lg text-[var(--text-muted)]">{details}</p>
      <a href="/" className="mt-8 inline-flex min-h-11 items-center rounded-full bg-ink px-6 font-semibold text-white">
        Back to Qwilo
      </a>
      {stack && (
        <pre className="mt-8 overflow-x-auto rounded-xl bg-[var(--surface-muted)] p-4 text-xs">
          <code>{stack}</code>
        </pre>
      )}
    </main>
  );
}
