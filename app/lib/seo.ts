import { APP_NAME, SITE_URL, TAGLINE } from "../constants";

/** Builds the <title>, description, canonical and social tags for one page. */
export function pageMeta(opts: { title: string; description: string; path: string }) {
  const url = `${SITE_URL}${opts.path}`;
  const fullTitle = opts.path === "/" ? `${APP_NAME} — ${TAGLINE}` : `${opts.title} | ${APP_NAME}`;
  return [
    { title: fullTitle },
    { name: "description", content: opts.description },
    { tagName: "link", rel: "canonical", href: url },
    { property: "og:type", content: "website" },
    { property: "og:site_name", content: APP_NAME },
    { property: "og:url", content: url },
    { property: "og:title", content: fullTitle },
    { property: "og:description", content: opts.description },
    { property: "og:image", content: `${SITE_URL}/og-image.png` },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: fullTitle },
    { name: "twitter:description", content: opts.description },
  ];
}
