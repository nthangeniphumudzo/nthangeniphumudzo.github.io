import type { Route } from "./+types/features";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ScreenGallery from "../components/ScreenGallery";
import { pageMeta } from "../lib/seo";
import { FEATURES, HOW_IT_WORKS } from "../content";

export function meta(_: Route.MetaArgs) {
  return pageMeta({
    title: "Features",
    description: "Animated lessons, topic quizzes, an AI tutor, CAPS understanding levels, exam prep and moderated subject communities. See everything Qwilo does.",
    path: "/features",
  });
}

export default function Features() {
  return (
    <>
      <Navbar />
      <main className="mx-auto max-w-6xl px-4 pb-24 pt-14 sm:px-6 lg:px-8">
        <h1 className="max-w-3xl text-4xl font-bold leading-tight sm:text-5xl">Everything Qwilo does, in one place</h1>
        <p className="mt-5 max-w-2xl text-lg text-[var(--text-muted)]">
          Built around your school syllabus, so each part of the app points at what your class is covering this term.
        </p>

        <ul className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map(f => (
            <li key={f.title} className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-7">
              <h2 className="text-xl font-bold">{f.title}</h2>
              <p className="mt-3 text-[var(--text-muted)]">{f.body}</p>
            </li>
          ))}
        </ul>

        <section className="mt-24">
          <h2 className="text-3xl font-bold">A day with Qwilo</h2>
          <ol className="mt-8 grid gap-5 md:grid-cols-3">
            {HOW_IT_WORKS.map(s => (
              <li key={s.step} className="rounded-2xl bg-[var(--surface)] p-6">
                <p className="font-heading text-sm font-bold text-[var(--accent)]">Step {s.step}</p>
                <h3 className="mt-2 text-lg font-bold">{s.title}</h3>
                <p className="mt-2 text-sm text-[var(--text-muted)]">{s.body}</p>
              </li>
            ))}
          </ol>
        </section>

        <section className="mt-24">
          <h2 className="text-3xl font-bold">Screens from the app</h2>
          <div className="mt-10">
            <ScreenGallery />
          </div>
        </section>

        <div className="mt-24 rounded-3xl bg-ink p-10 text-center text-white">
          <p className="text-2xl font-bold">Ready to try it?</p>
          <a href="/#get-the-app" className="mt-6 inline-flex min-h-12 items-center rounded-full bg-white px-7 font-semibold text-ink">Get the app</a>
        </div>
      </main>
      <Footer />
    </>
  );
}
