import type { Config } from "@react-router/dev/config";

/*
 * Static build for GitHub Pages: every page is rendered to HTML at build time,
 * so the site needs no server. The 404 page is copied from index.html by the
 * deploy workflow (.github/workflows/pages.yml).
 */
export default {
  ssr: false,
  prerender: ["/", "/features", "/curriculum", "/child-safety", "/faq", "/support", "/privacy", "/terms", "/community-guidelines", "/account-deletion"],
} satisfies Config;
