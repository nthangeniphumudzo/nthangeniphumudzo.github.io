import type { ReactNode } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

/* Shared frame for every inner page: navigation, a page heading, then content.
   Keeps headings, widths and spacing identical across the site. */
export default function PageShell({
  title,
  intro,
  children,
  updated,
}: {
  title: string;
  intro?: string;
  children: ReactNode;
  updated?: string;
}) {
  return (
    <>
      <Navbar />
      <main className="mx-auto max-w-3xl px-4 pb-24 pt-14 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold leading-tight sm:text-5xl">{title}</h1>
        {intro && <p className="mt-5 text-lg text-[var(--text-muted)]">{intro}</p>}
        {updated && <p className="mt-3 text-sm text-[var(--text-muted)]">Last updated: {updated}</p>}
        <div className="mt-12 space-y-10 leading-relaxed [&_h2]:mb-3 [&_h2]:text-2xl [&_h2]:font-bold [&_li]:ml-5 [&_li]:list-disc [&_ul]:space-y-2 [&_p]:text-[var(--text)]">
          {children}
        </div>
      </main>
      <Footer />
    </>
  );
}
