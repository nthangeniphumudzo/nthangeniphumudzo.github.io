import { useRef, useState, type ReactNode } from "react";

export type ConceptSlide = {
  id: string;
  title: string;
  caption: string;
  children: ReactNode;
};

/*
 * A row of lesson previews. On a phone the slides swipe sideways, one at a
 * time, with the next one peeking in, and a dot under the row shows which
 * slide is in view (tap a dot to jump to it). On a desktop all of them sit in
 * one row, so the dots are hidden. Each slide is named underneath.
 */
export default function ConceptCarousel({ slides }: { slides: ConceptSlide[] }) {
  const listRef = useRef<HTMLUListElement>(null);
  const [active, setActive] = useState(0);

  // The slide nearest the left edge (past the list's padding) is the one in view.
  function handleScroll() {
    const list = listRef.current;
    if (!list) return;
    const listRect = list.getBoundingClientRect();
    const centre = listRect.left + listRect.width / 2;
    let best = 0;
    let bestDistance = Number.POSITIVE_INFINITY;
    Array.from(list.children).forEach((child, i) => {
      const rect = (child as HTMLElement).getBoundingClientRect();
      const distance = Math.abs(rect.left + rect.width / 2 - centre);
      if (distance < bestDistance) {
        bestDistance = distance;
        best = i;
      }
    });
    setActive(best);
  }

  function goTo(i: number) {
    const child = listRef.current?.children[i] as HTMLElement | undefined;
    child?.scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" });
  }

  return (
    <div>
      <ul
        ref={listRef}
        onScroll={handleScroll}
        aria-label="Lesson previews"
        className="-mx-4 flex snap-x snap-mandatory gap-4 overflow-x-auto px-[11vw] pb-4 md:mx-0 md:grid md:grid-cols-3 md:gap-5 md:overflow-visible md:px-0"
      >
        {slides.map(s => (
          <li key={s.id} className="w-[78vw] flex-none snap-center md:w-auto">
            <div className="flex h-[26rem] flex-col rounded-3xl border border-[var(--border)] bg-[var(--surface)] p-4 sm:p-5">
              {s.children}
            </div>
            <h3 className="mt-4 text-center text-lg font-bold">{s.title}</h3>
            <p className="mt-1 text-center text-sm text-[var(--text-muted)]">{s.caption}</p>
          </li>
        ))}
      </ul>

      {/* Dots: one per slide, on phones only. Each is a 44 px tap target. */}
      <div className="mt-2 flex items-center justify-center gap-1 md:hidden" role="group" aria-label="Choose a lesson">
        {slides.map((s, i) => (
          <button
            key={s.id}
            type="button"
            onClick={() => goTo(i)}
            aria-label={`Show ${s.title}`}
            aria-current={active === i ? "true" : undefined}
            className="flex h-11 w-8 items-center justify-center"
          >
            <span
              className={`block h-2.5 rounded-full transition-all duration-300 ${
                active === i ? "w-6 bg-[var(--accent)]" : "w-2.5 bg-[var(--border)]"
              }`}
            />
          </button>
        ))}
      </div>
    </div>
  );
}
