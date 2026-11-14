import { APP_STORE_URL, PLAY_STORE_URL } from "../constants";

/* The stores' own badges, exactly as Apple and Google publish them
   (public/badges/). While a store has no link yet, its badge shows dimmed
   and is not a link, under a "Coming soon" heading, so nobody lands on a
   dead page. */
const BADGES = {
  app_store: { src: "/badges/app-store.svg", width: 120, alt: "Download on the App Store", href: APP_STORE_URL },
  google_play: { src: "/badges/google-play.png", width: 134, alt: "Get it on Google Play", href: PLAY_STORE_URL },
} as const;

function Badge({ store }: { store: keyof typeof BADGES }) {
  const { src, width, alt, href } = BADGES[store];
  const image = <img src={src} alt={alt} width={width} height={40} className="block h-12 w-auto" />;
  if (!href) {
    return <span className="inline-block opacity-50" aria-label={`${alt} (coming soon)`}>{image}</span>;
  }
  return (
    <a href={href} rel="noopener" className="inline-block transition-opacity hover:opacity-80">
      {image}
    </a>
  );
}

export default function StoreButtons() {
  const comingSoon = !APP_STORE_URL || !PLAY_STORE_URL;
  return (
    <div className="flex flex-col items-center gap-4">
      {comingSoon && (
        <p className="font-heading text-lg font-bold">Coming soon</p>
      )}
      {/* White card so the black App Store badge reads on dark sections too. */}
      <div className="flex flex-wrap items-center justify-center gap-4 rounded-2xl bg-white px-5 py-4">
        <Badge store="app_store" />
        <Badge store="google_play" />
      </div>
    </div>
  );
}
