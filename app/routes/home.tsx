import type { Route } from "./+types/home";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ScreenGallery from "../components/ScreenGallery";
import SeparationLesson from "../components/lessons/SeparationLesson";
import ConceptCarousel, { type ConceptSlide } from "../components/lessons/ConceptCarousel";
import HeartScene from "../components/lessons/HeartScene";
import GradientScene from "../components/lessons/GradientScene";
import StoreButtons from "../components/StoreButtons";
import { pageMeta } from "../lib/seo";
import { FAQS, FEATURES, HERO, HOW_IT_WORKS, POSITIONING, TUTOR } from "../content";
import { TAGLINE } from "../constants";

export function meta(_: Route.MetaArgs) {
  return pageMeta({
    title: "Understand your school subjects",
    description:
      "QWILO, a tutor in your pocket. Animated lessons, quizzes and an AI tutor help high school learners understand their school subjects, following the CAPS curriculum, without needing a lab.",
    path: "/",
  });
}

/* The lesson previews in the carousel. Each one is a scene that already exists in the QWILO app. */
const CONCEPT_SLIDES: ConceptSlide[] = [
  { id: "filtration", title: "Filtration", caption: "Separate a solid from a liquid", children: <SeparationLesson embedded filtrationOnly /> },
  { id: "heart", title: "The heart", caption: "Blood takes two routes: to the lungs and to the body", children: <HeartScene /> },
  { id: "gradient", title: "Gradient on a graph", caption: "On a position–time graph, the gradient is the velocity", children: <GradientScene /> },
];

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <section className="relative overflow-hidden">
          <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 pb-6 pt-16 sm:px-6 lg:grid-cols-2 lg:px-8 lg:pt-24">
            <div>
              <p className="inline-flex items-center rounded-full bg-[var(--accent-soft)] px-3 py-1 text-sm font-semibold text-[var(--accent)]">
                {HERO.eyebrow}
              </p>
              <h1 className="mt-6 text-4xl font-bold leading-[1.05] sm:text-5xl lg:text-6xl">{HERO.headline}</h1>
              <p className="mt-6 max-w-xl text-lg text-[var(--text-muted)]">{HERO.sub}</p>
            </div>

          </div>

          <div className="mx-auto mt-4 max-w-6xl px-4 sm:px-6 lg:px-8">
            <h2 className="mb-8 text-center text-3xl font-bold sm:text-4xl">See your lesson come to life</h2>
            <ConceptCarousel slides={CONCEPT_SLIDES} />
          </div>
        </section>

        {/* Coverage and the AI tutor promise, highlighted */}
        <section className="border-t border-[var(--border)] bg-[var(--surface)] py-20">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="mt-8 rounded-[2rem] bg-ink p-8 text-white sm:p-12">
              <h2 className="text-3xl font-bold sm:text-4xl">{TUTOR.title}</h2>
              <p className="mt-4 max-w-2xl text-lg text-white/75">{TUTOR.intro}</p>
              <ol className="mt-10 grid gap-5 md:grid-cols-3">
                {TUTOR.steps.map((step, i) => (
                  <li key={step.title} className="rounded-2xl bg-white/10 p-6">
                    <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white font-heading font-bold text-ink">{i + 1}</span>
                    <h3 className="mt-5 text-xl font-bold">{step.title}</h3>
                    <p className="mt-2 text-white/75">{step.body}</p>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </section>

        {/* The idea: cramming to understanding */}
        <section className="border-t border-[var(--border)] py-20">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <h2 className="max-w-2xl text-3xl font-bold sm:text-4xl">{POSITIONING.title}</h2>
            <p className="mt-4 max-w-2xl text-lg text-[var(--text-muted)]">{POSITIONING.intro}</p>
            <ul className="mt-12 grid gap-5 md:grid-cols-3">
              {POSITIONING.points.map(p => (
                <li key={p.title} className="rounded-3xl bg-[var(--surface)] p-7">
                  <h3 className="text-xl font-bold">{p.title}</h3>
                  <p className="mt-3 text-[var(--text-muted)]">{p.body}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* How it works */}
        <section id="how-it-works" className="border-t border-[var(--border)] bg-[var(--surface)] py-20">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <h2 className="max-w-2xl text-3xl font-bold sm:text-4xl">How Qwilo works</h2>
            <ol className="mt-12 grid gap-6 md:grid-cols-3">
              {HOW_IT_WORKS.map(s => (
                <li key={s.step} className="rounded-3xl border border-[var(--border)] bg-[var(--bg)] p-7">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-ink font-heading font-bold text-white">{s.step}</span>
                  <h3 className="mt-5 text-xl font-bold">{s.title}</h3>
                  <p className="mt-3 text-[var(--text-muted)]">{s.body}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* Screens */}
        <section className="py-20">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <h2 className="max-w-2xl text-3xl font-bold sm:text-4xl">See what happens inside the app</h2>
            <p className="mt-4 max-w-2xl text-[var(--text-muted)]">From the term roadmap to the lesson you are stuck on.</p>
            <div className="mt-12">
              <ScreenGallery />
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="border-t border-[var(--border)] py-20">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <h2 className="max-w-2xl text-3xl font-bold sm:text-4xl">Everything you need for the term</h2>
            <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {FEATURES.map(f => (
                <li key={f.title} className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6">
                  <h3 className="text-lg font-bold">{f.title}</h3>
                  <p className="mt-2 text-sm text-[var(--text-muted)]">{f.body}</p>
                </li>
              ))}
            </ul>
            <p className="mt-10">
              <a href="/features" className="font-semibold text-[var(--accent)] underline">See all features</a>
            </p>
          </div>
        </section>

        {/* FAQ preview */}
        <section className="py-20">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold sm:text-4xl">Questions parents and learners ask</h2>
            <div className="mt-10 divide-y divide-[var(--border)] border-y border-[var(--border)]">
              {FAQS.slice(0, 4).map(f => (
                <details key={f.q} className="group py-5">
                  <summary className="flex min-h-11 cursor-pointer list-none items-center justify-between gap-4 font-semibold">
                    {f.q}
                    <span aria-hidden="true" className="text-xl text-[var(--text-muted)] group-open:rotate-45 transition-transform">+</span>
                  </summary>
                  <p className="mt-3 text-[var(--text-muted)]">{f.a}</p>
                </details>
              ))}
            </div>
            <p className="mt-8">
              <a href="/faq" className="font-semibold text-[var(--accent)] underline">All questions</a>
            </p>
          </div>
        </section>

        {/* Final call to action */}
        <section id="get-the-app" className="scroll-mt-24 px-4 pb-24 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-6xl rounded-[2rem] bg-ink px-8 py-16 text-center text-white sm:px-16">
            <h2 className="text-3xl font-bold sm:text-4xl">Start your term with Qwilo</h2>
            <p className="mx-auto mt-4 max-w-xl text-white/75">{TAGLINE}</p>
            <div className="mt-8 flex justify-center">
              <StoreButtons />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
