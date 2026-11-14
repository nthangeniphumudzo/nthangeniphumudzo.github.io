import type { Route } from "./+types/account-deletion";
import PageShell from "../components/PageShell";
import { pageMeta } from "../lib/seo";
import { LAST_UPDATED, SUPPORT_EMAIL } from "../constants";

export function meta(_: Route.MetaArgs) {
  return pageMeta({
    title: "Delete your account",
    description: "How to delete your Qwilo account and the data linked to it.",
    path: "/account-deletion",
  });
}

export default function AccountDeletion() {
  return (
    <PageShell
      title="Delete your Qwilo account"
      intro="You can delete your account from inside the app, or ask us to do it by email if you can no longer open the app."
      updated={LAST_UPDATED}
    >
      <section>
        <h2>In the app</h2>
        <ol className="list-decimal space-y-2 pl-5">
          <li>Open the <strong>Me</strong> tab and choose <strong>Settings</strong>.</li>
          <li>Tap <strong>Delete account</strong> and confirm.</li>
        </ol>
      </section>
      <section>
        <h2>By email</h2>
        <p>
          Email <a className="font-medium text-[var(--accent)] underline" href={`mailto:${SUPPORT_EMAIL}`}>{SUPPORT_EMAIL}</a> from the address you use for support, with the subject line "Delete my Qwilo account". We will confirm once it is done.
        </p>
      </section>
      <section>
        <h2>What is deleted</h2>
        <ul>
          <li>Your sign-in link to Qwilo, your progress, quiz answers, bookmarks and reactions.</li>
          <li>Your display name and avatar.</li>
        </ul>
        <p>
          Posts and comments you wrote may remain, shown as posted by a deleted learner, where they are needed for the community record. Moderation records are kept for as long as the law requires. See the <a className="font-medium text-[var(--accent)] underline" href="/privacy">privacy policy</a> for details.
        </p>
      </section>
      <section>
        <h2>Timing</h2>
        <p>Deletion takes effect straight away in the app. Backups are cleared within the retention period stated in the privacy policy.</p>
      </section>
    </PageShell>
  );
}
