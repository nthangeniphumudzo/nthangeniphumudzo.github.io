import type { Route } from "./+types/privacy";
import PageShell from "../components/PageShell";
import { pageMeta } from "../lib/seo";
import { LAST_UPDATED, SUPPORT_EMAIL } from "../constants";

export function meta(_: Route.MetaArgs) {
  return pageMeta({
    title: "Privacy policy",
    description: "What Qwilo collects, why, how long we keep it, and your rights under POPIA.",
    path: "/privacy",
  });
}

export default function Privacy() {
  return (
    <PageShell
      title="Privacy policy"
      intro="Qwilo collects as little personal information as possible. This page explains what we collect, why, and what you can ask us to do."
      updated={LAST_UPDATED}
    >
      <p className="rounded-xl bg-orange-soft p-4 text-sm text-orange">
        Draft for legal review. This policy must be checked against POPIA, including section 35 on children's personal information, before the apps launch.
      </p>

      <section>
        <h2>Who we are</h2>
        <p>Qwilo is operated by PH Creations. Contact us at <a className="font-medium text-[var(--accent)] underline" href={`mailto:${SUPPORT_EMAIL}`}>{SUPPORT_EMAIL}</a>.</p>
      </section>

      <section>
        <h2>What we collect</h2>
        <ul>
          <li><strong>Sign-in:</strong> a hashed reference to your Google or Apple account. We do not store your email address, phone number or real name.</li>
          <li><strong>Profile:</strong> a display name you choose, your grade, and an optional small avatar.</li>
          <li><strong>Learning:</strong> the lessons you open, quiz answers, topic status and your understanding level. This is what makes the roadmap and levels work.</li>
          <li><strong>Community:</strong> comments, questions, reactions, reports and any study files you upload.</li>
          <li><strong>Device and app:</strong> basic technical data needed to keep the app working and to fix crashes.</li>
        </ul>
      </section>

      <section>
        <h2>Why we use it</h2>
        <p>To run your learning roadmap and quizzes, keep your progress in sync across devices, run moderated communities, keep learners safe, and fix problems. We do not sell personal information and do not use it for advertising.</p>
      </section>

      <section>
        <h2>Uploads</h2>
        <p>Uploaded files are checked automatically before they appear. Files that cannot be checked are held back. Photos of people are not allowed.</p>
      </section>

      <section>
        <h2>Where data is stored</h2>
        <p>Data is stored in South Africa's Azure region (South Africa North), with provider terms reviewed before launch.</p>
      </section>

      <section>
        <h2>How long we keep it</h2>
        <p>Your account and learning data are kept while your account is active. You can delete your account at any time (see <a className="font-medium text-[var(--accent)] underline" href="/account-deletion">account deletion</a>). Retention periods for backups and moderation records will be confirmed in the final version of this policy.</p>
      </section>

      <section>
        <h2>Your rights</h2>
        <p>Under POPIA you can ask what we hold about you, ask us to correct it, and ask us to delete it. Email us to make a request.</p>
      </section>

      <section>
        <h2>Changes</h2>
        <p>If we change this policy, we will update the date above and, for material changes, tell learners in the app.</p>
      </section>
    </PageShell>
  );
}
