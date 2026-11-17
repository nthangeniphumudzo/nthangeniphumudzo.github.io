import Logo from "./Logo";
import { APP_NAME, SUPPORT_EMAIL, TAGLINE } from "../constants";
import { FOOTER_LINKS, LEGAL_LINKS } from "../content";

export default function Footer() {
  return (
    <footer className="border-t border-[var(--border)] bg-[var(--surface)]">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-[1.4fr_1fr_1fr] lg:px-8">
        <div>
          <a href="/" className="flex items-center gap-2.5 font-heading text-lg font-bold tracking-[0.2em]">
            <Logo className="h-8 w-8" />
            <span>{APP_NAME.toUpperCase()}</span>
          </a>
          <p className="mt-4 max-w-xs text-[var(--text-muted)]">{TAGLINE}</p>
          <p className="mt-4 text-sm text-[var(--text-muted)]">
            Questions? <a className="font-medium text-[var(--accent)] underline" href={`mailto:${SUPPORT_EMAIL}`}>{SUPPORT_EMAIL}</a>
          </p>
        </div>

        <nav aria-label="Site">
          <h2 className="text-sm font-semibold text-[var(--text-muted)]">Explore</h2>
          <ul className="mt-4 grid grid-cols-2 gap-x-6 gap-y-1">
            {FOOTER_LINKS.map(l => (
              <li key={l.href}>
                <a href={l.href} className="inline-flex min-h-11 items-center hover:underline">{l.label}</a>
              </li>
            ))}
          </ul>
        </nav>

        <nav aria-label="Legal">
          <h2 className="text-sm font-semibold text-[var(--text-muted)]">Legal</h2>
          <ul className="mt-4 grid gap-y-1">
            {LEGAL_LINKS.map(l => (
              <li key={l.href}>
                <a href={l.href} className="inline-flex min-h-11 items-center hover:underline">{l.label}</a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <div className="border-t border-[var(--border)] px-4 py-6 text-center text-sm text-[var(--text-muted)]">
        © {new Date().getFullYear()} {APP_NAME}. Built for high school learners.
      </div>
    </footer>
  );
}
