import type { Route } from "./+types/child-safety";
import PageShell from "../components/PageShell";
import { pageMeta } from "../lib/seo";
import { COMMUNITY_POINTS } from "../content";
import { SUPPORT_EMAIL } from "../constants";

export function meta(_: Route.MetaArgs) {
  return pageMeta({
    title: "Learn together",
    description: "How QWILO's learning community works for high school learners: subject communities, trusted posts, simple sign-in and progress that follows you.",
    path: "/child-safety",
  });
}

export default function ChildSafety() {
  return (
    <PageShell
      title="Learn together"
      intro="QWILO is built for high school learners. Here is what the community gives you, and how we keep it helpful for everyone in it."
    >
      <section>
        <h2>What you get</h2>
        <ul className="grid gap-4 sm:grid-cols-2 [&>li]:ml-0 [&>li]:list-none">
          {COMMUNITY_POINTS.map(p => (
            <li key={p.title} className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6">
              <h3 className="text-lg font-bold">{p.title}</h3>
              <p className="mt-2 text-sm text-[var(--text-muted)]">{p.body}</p>
            </li>
          ))}
        </ul>
      </section>

      <section>
        <h2>Keeping it helpful</h2>
        <p>
          The QWILO team looks after the community, so it stays a place to learn. Every comment, question and upload has a Report button, and reports are reviewed by the team.
        </p>
        <p>Study uploads (question papers, notes and labelled figures) are checked before they appear, so the community stays focused on learning.</p>
      </section>

      <section>
        <h2>Need help?</h2>
        <p>
          Email us at{" "}
          <a className="font-medium text-[var(--accent)] underline" href={`mailto:${SUPPORT_EMAIL}`}>{SUPPORT_EMAIL}</a>{" "}
          and we will get back to you. In an emergency, contact the South African Police Service on 10111.
        </p>
      </section>

      <section>
        <h2>For parents and guardians</h2>
        <p>
          Learners sign in with their own Google or Apple account. Read the{" "}
          <a className="font-medium text-[var(--accent)] underline" href="/privacy">privacy policy</a> to see what is collected and why, and the{" "}
          <a className="font-medium text-[var(--accent)] underline" href="/community-guidelines">community guidelines</a> for how the community works.
        </p>
      </section>
    </PageShell>
  );
}
