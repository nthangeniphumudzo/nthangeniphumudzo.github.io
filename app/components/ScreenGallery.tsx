import { SCREENS } from "../content";

/* Phone-frame gallery of real app screens. Only screens with a photo are
   shown; a screen without one is left out rather than shown as a placeholder. */
export default function ScreenGallery() {
  const shown = SCREENS.filter(s => s.src);
  return (
    <ul className="-mx-4 flex snap-x snap-mandatory gap-6 overflow-x-auto px-4 pb-4 sm:mx-0 sm:grid sm:grid-cols-3 sm:overflow-visible sm:px-0">
      {shown.map(s => (
        <li key={s.id} className="w-64 flex-none snap-center sm:w-auto">
          <figure>
            <div className="mx-auto aspect-[9/19] max-w-[240px] overflow-hidden rounded-[2.2rem] border-[10px] border-ink bg-[var(--surface-muted)] shadow-xl">
              <img src={s.src} alt={`${s.label} in the QWILO app`} loading="lazy" className="h-full w-full object-cover" />
            </div>
            <figcaption className="mt-4 text-center text-[var(--text-muted)]">{s.caption}</figcaption>
          </figure>
        </li>
      ))}
    </ul>
  );
}
