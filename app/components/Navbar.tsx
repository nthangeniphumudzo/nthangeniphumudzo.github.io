import Logo from "./Logo";
import { APP_NAME } from "../constants";

const links = [
  { href: "/features", label: "Features" },
  { href: "/curriculum", label: "Curriculum" },
  { href: "/child-safety", label: "Learn together" },
  { href: "/faq", label: "FAQ" },
];

/* Plain HTML, no JavaScript: the menu is a <details> element on phones so the
   page works before hydration and with scripts off. */
export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-[var(--border)] bg-[var(--bg)]/90 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <a href="/" className="flex items-center gap-2.5 font-heading text-lg font-bold tracking-[0.2em]">
          <Logo className="h-8 w-8 text-[var(--text)]" />
          <span>{APP_NAME.toUpperCase()}</span>
        </a>

        <nav aria-label="Main" className="hidden md:block">
          <ul className="flex items-center gap-7">
            {links.map(l => (
              <li key={l.href}>
                <a href={l.href} className="inline-flex min-h-11 items-center text-sm font-medium text-[var(--text-muted)] hover:text-[var(--text)]">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <a href="/#get-the-app" className="inline-flex min-h-11 items-center rounded-full bg-ink px-5 text-sm font-semibold text-white hover:opacity-90">
            Get the app
          </a>
          <details className="group relative md:hidden">
            <summary className="flex min-h-11 min-w-11 cursor-pointer list-none items-center justify-center rounded-full border border-[var(--border)]" aria-label="Open menu">
              <span className="block h-0.5 w-5 bg-[var(--text)] shadow-[0_6px_0_var(--text),0_-6px_0_var(--text)]" />
            </summary>
            <nav aria-label="Mobile" className="absolute right-0 top-14 w-56 rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-2 shadow-lg">
              <ul>
                {links.map(l => (
                  <li key={l.href}>
                    <a href={l.href} className="flex min-h-11 items-center rounded-xl px-3 font-medium hover:bg-[var(--surface-muted)]">
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </details>
        </div>
      </div>
    </header>
  );
}
