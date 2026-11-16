import type { Route } from "./+types/terms";
import PageShell from "../components/PageShell";
import { pageMeta } from "../lib/seo";
import { LAST_UPDATED, SUPPORT_EMAIL } from "../constants";

export function meta(_: Route.MetaArgs) {
  return pageMeta({
    title: "Terms of use",
    description: "The rules for using Qwilo, the learner app and website.",
    path: "/terms",
  });
}

export default function Terms() {
  return (
    <PageShell title="Terms of use" intro="These terms apply when you use Qwilo. Please read them with the community guidelines." updated={LAST_UPDATED}>
      <p className="rounded-xl bg-orange-soft p-4 text-sm text-orange">
        Draft for legal review before launch.
      </p>

      <section>
        <h2>Using Qwilo</h2>
        <p>Qwilo is a study app for high performance learners. Use it to learn, and keep your sign-in to yourself.</p>
      </section>

      <section>
        <h2>Accounts</h2>
        <ul>
          <li>You sign in with a Google or Apple account. You are responsible for keeping that account secure.</li>
          <li>Give accurate information, such as your grade, and choose a display name that does not include personal details.</li>
        </ul>
      </section>

      <section>
        <h2>Community rules</h2>
        <p>You agree to follow the <a className="font-medium text-[var(--accent)] underline" href="/community-guidelines">community guidelines</a>. Moderators may hide content and restrict accounts that break them.</p>
      </section>

      <section>
        <h2>Content</h2>
        <p>Lessons, quizzes and posts are owned by Qwilo or its content providers. You may use them for your own study, not to republish or resell them. You keep the rights to what you post, and you give Qwilo permission to show it in the community.</p>
      </section>

      <section>
        <h2>Study help, not a guarantee</h2>
        <p>Qwilo helps you learn and check your understanding. It does not guarantee exam results and does not replace your teacher or textbook.</p>
      </section>

      <section>
        <h2>Availability and changes</h2>
        <p>We work to keep Qwilo available, but some features need an internet connection, and we may change or pause features to improve the app.</p>
      </section>

      <section>
        <h2>Ending your use</h2>
        <p>You can delete your account at any time. We can restrict or close accounts that break these terms.</p>
      </section>

      <section>
        <h2>Contact</h2>
        <p>Questions about these terms: <a className="font-medium text-[var(--accent)] underline" href={`mailto:${SUPPORT_EMAIL}`}>{SUPPORT_EMAIL}</a>.</p>
      </section>
    </PageShell>
  );
}
