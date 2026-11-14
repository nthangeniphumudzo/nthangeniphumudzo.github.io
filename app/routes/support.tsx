import type { Route } from "./+types/support";
import PageShell from "../components/PageShell";
import { pageMeta } from "../lib/seo";
import { SUPPORT_EMAIL } from "../constants";

export function meta(_: Route.MetaArgs) {
  return pageMeta({
    title: "Support",
    description: "Get help with Qwilo: sign-in, progress, reporting content, or deleting your account.",
    path: "/support",
  });
}

export default function Support() {
  return (
    <PageShell title="Support" intro="We are here to help learners and parents. Tell us what happened and which device you use.">
      <section>
        <h2>Contact us</h2>
        <p>
          Email{" "}
          <a className="font-medium text-[var(--accent)] underline" href={`mailto:${SUPPORT_EMAIL}`}>{SUPPORT_EMAIL}</a>. Include your grade and a short description of the problem. Please don't send your phone number or any other personal details.
        </p>
      </section>
      <section>
        <h2>Common questions</h2>
        <ul>
          <li><strong>I can't sign in.</strong> Use the same Google or Apple account you signed up with. Qwilo does not use passwords or phone codes.</li>
          <li><strong>My progress is missing.</strong> Progress syncs when you are online. Open the app on a connection and give it a moment.</li>
          <li><strong>I want to report a post or comment.</strong> Tap the report button on it. Reports are reviewed by moderators.</li>
          <li><strong>I want to delete my account.</strong> Follow the steps on the <a className="font-medium text-[var(--accent)] underline" href="/account-deletion">account deletion page</a>.</li>
        </ul>
      </section>
    </PageShell>
  );
}
