import type { Route } from "./+types/not-found";
import PageShell from "../components/PageShell";
import { pageMeta } from "../lib/seo";

export function meta(_: Route.MetaArgs) {
  return [...pageMeta({ title: "Page not found", description: "This page does not exist.", path: "/404" }), { name: "robots", content: "noindex" }];
}

export default function NotFound() {
  return (
    <PageShell title="Page not found" intro="The page you are looking for does not exist or has moved.">
      <p>
        <a className="font-semibold text-[var(--accent)] underline" href="/">Back to the home page</a>
      </p>
    </PageShell>
  );
}
