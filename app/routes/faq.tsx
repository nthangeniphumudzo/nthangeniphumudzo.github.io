import type { Route } from "./+types/faq";
import PageShell from "../components/PageShell";
import { pageMeta } from "../lib/seo";
import { FAQS } from "../content";

export function meta(_: Route.MetaArgs) {
  return pageMeta({
    title: "FAQ",
    description: "Answers about Qwilo: pricing, grades and subjects, offline use, sign-in, privacy and how the communities work.",
    path: "/faq",
  });
}

/* FAQ answers are also used as structured data so search engines can show
   them under the result. */
export default function Faq() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQS.map(f => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
  return (
    <PageShell title="Frequently asked questions">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <div className="divide-y divide-[var(--border)] border-y border-[var(--border)]">
        {FAQS.map(f => (
          <details key={f.q} className="group py-5">
            <summary className="flex min-h-11 cursor-pointer list-none items-center justify-between gap-4 text-lg font-semibold">
              {f.q}
              <span aria-hidden="true" className="text-2xl text-[var(--text-muted)] transition-transform group-open:rotate-45">+</span>
            </summary>
            <p className="mt-3 text-[var(--text-muted)]">{f.a}</p>
          </details>
        ))}
      </div>
    </PageShell>
  );
}
