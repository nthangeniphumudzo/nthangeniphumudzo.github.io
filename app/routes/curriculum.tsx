import type { Route } from "./+types/curriculum";
import PageShell from "../components/PageShell";
import { pageMeta } from "../lib/seo";
import { CURRICULUM } from "../content";

export function meta(_: Route.MetaArgs) {
  return pageMeta({
    title: "Curriculum",
    description: "Qwilo follows the CAPS curriculum. See which grades and subjects are covered, and how lessons match your school's teaching plan.",
    path: "/curriculum",
  });
}

export default function Curriculum() {
  return (
    <PageShell title="Follows your school syllabus" intro={CURRICULUM.intro}>
      <section>
        <h2>Grades and subjects</h2>
        <div className="grid gap-5 sm:grid-cols-3">
          {CURRICULUM.grades.map(g => (
            <div key={g.grade} className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6">
              <h3 className="font-heading text-xl font-bold">{g.grade}</h3>
              <ul className="mt-3 space-y-1 text-[var(--text-muted)]">
                {g.subjects.map(s => <li key={s} className="list-none">{s}</li>)}
              </ul>
            </div>
          ))}
        </div>
        <p className="mt-6 text-sm text-[var(--text-muted)]">More grades and subjects are added as the content is ready.</p>
      </section>

      <section>
        <h2>How a topic is taught</h2>
        <ul>
          <li>Topics sit inside chapters, in the order of the DBE annual teaching plan for your grade.</li>
          <li>Each topic has short animated lessons (about 30 to 50 seconds) with subtitles on by default.</li>
          <li>Each topic ends with a five-question quiz. Every question has four options, one correct answer and worked reasoning.</li>
          <li>Your understanding is shown on the CAPS seven-level scale once you have answered enough questions.</li>
        </ul>
      </section>

      <section>
        <h2>{CURRICULUM.example.title}</h2>
        <p>{CURRICULUM.example.body}</p>
      </section>
    </PageShell>
  );
}
