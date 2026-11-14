import type { Route } from "./+types/community-guidelines";
import PageShell from "../components/PageShell";
import { pageMeta } from "../lib/seo";
import { LAST_UPDATED } from "../constants";

export function meta(_: Route.MetaArgs) {
  return pageMeta({
    title: "Community guidelines",
    description: "The rules for learning together in Qwilo's grade and subject communities.",
    path: "/community-guidelines",
  });
}

export default function CommunityGuidelines() {
  return (
    <PageShell title="Community guidelines" intro="Qwilo communities are for learning. Keep it kind, keep it about the work, and keep people safe." updated={LAST_UPDATED}>
      <section>
        <h2>Do</h2>
        <ul>
          <li>Ask questions about the topic, and help others with clear working.</li>
          <li>React and report honestly. Use the report button if something is wrong.</li>
          <li>Upload only study material: question papers, memos, notes and labelled figures.</li>
        </ul>
      </section>

      <section>
        <h2>Don't</h2>
        <ul>
          <li>Share phone numbers, email addresses, social media handles, or links asking people to move to another app.</li>
          <li>Post photos of people, including yourself or classmates.</li>
          <li>Bully, insult or threaten anyone, or share hateful, sexual or violent content.</li>
          <li>Ask anyone for personal details, money, or to meet in person.</li>
          <li>Copy paid or copyrighted material, such as full textbook chapters.</li>
        </ul>
      </section>

      <section>
        <h2>Who posts</h2>
        <p>Only Qwilo admins and moderators post in communities. Learners interact under their posts, in the open, where moderators can see it.</p>
      </section>

      <section>
        <h2>What happens if you break these rules</h2>
        <p>Moderators can hide a comment or upload and restrict an account. Serious breaches, including anything involving a child's safety, are escalated and may be reported to the authorities.</p>
      </section>

      <section>
        <h2>Reporting</h2>
        <p>Every comment, question and upload has a Report button. Give a reason and, if you can, what you saw. Reports are reviewed by moderators.</p>
      </section>
    </PageShell>
  );
}
