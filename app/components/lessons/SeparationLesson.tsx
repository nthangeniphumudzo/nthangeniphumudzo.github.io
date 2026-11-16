import { useState, type CSSProperties } from "react";

/*
 * The "separating mixtures" lesson, ported from the QWILO app:
 *   qwilo-app/src/components/lessons/templates/separation.tsx (overview, filtration)
 *   qwilo-app/src/components/lessons/templates/mixture.tsx     (mixture steps)
 *   qwilo-app/src/components/lessons/apparatus.tsx             (funnel, beaker)
 *   qwilo-app/src/components/lessons/kit.tsx                   (colours, scatter, jiggle)
 *
 * The app draws with React Native (react-native-svg and reanimated), which does
 * not run on a web page. So this keeps the same 300 × 200 design space, colours,
 * particle positions and timings, drawn as SVG and animated with CSS. Same
 * lesson, same look, same motion, in the browser.
 *
 * Motion matches the app: particles jiggle on a 1.3 s ease-in-out swing, and
 * drops fall on a steady 2.6 s loop. Reduced-motion settings stop the animation
 * (see app.css).
 */

const INK = {
  amber: { fill: "#F59E0B", rim: "#92400E" },
  coral: { fill: "#F0533A", rim: "#9A2A16" },
  slate: { fill: "#94A3B8", rim: "#334155" },
  yellow: { fill: "#FACC15", rim: "#A16207" },
  blue: { fill: "#2563EB", rim: "#1E3A8A" },
} as const;
type Ink = keyof typeof INK;

const GLASS = "#334155";
const WATER = "rgba(37,99,235,0.12)";
const FAINT = "#CBD5E1";
const LABEL = "#0F172A";

/** Deterministic scatter, the same layout as the app (no randomness). */
function scatter(count: number, box: { x: number; y: number; w: number; h: number }, seed = 1) {
  const out: { x: number; y: number }[] = [];
  const cols = Math.ceil(Math.sqrt((count * box.w) / box.h));
  const rows = Math.ceil(count / cols);
  for (let i = 0; i < count; i += 1) {
    const col = i % cols;
    const row = Math.floor(i / cols);
    const jx = ((((i * 37 + seed * 11) % 17) / 17) - 0.5) * (box.w / cols) * 0.6;
    const jy = ((((i * 53 + seed * 7) % 13) / 13) - 0.5) * (box.h / rows) * 0.6;
    out.push({ x: box.x + (col + 0.5) * (box.w / cols) + jx, y: box.y + (row + 0.5) * (box.h / rows) + jy });
  }
  return out;
}

/** A particle: saturated fill, dark rim, small highlight. Optional swing (the app's jiggle). */
function Particle({ x, y, r, ink, swing }: { x: number; y: number; r: number; ink: Ink; swing?: { i: number; amount: number } }) {
  const { fill, rim } = INK[ink];
  let style: CSSProperties | undefined;
  let className: string | undefined;
  if (swing) {
    const d = (swing.i % 2 === 0 ? 1 : -1) * swing.amount;
    const e = ((swing.i % 3) - 1) * swing.amount;
    const yy = e || d;
    style = {
      "--jx0": `${-d}px`,
      "--jy0": `${yy}px`,
      "--jx1": `${d}px`,
      "--jy1": `${-yy}px`,
    } as CSSProperties;
    className = "qwilo-jiggle";
  }
  return (
    <g className={className} style={style}>
      <circle cx={x} cy={y} r={r} fill={fill} stroke={rim} strokeWidth={1.2} />
      <ellipse cx={x - r * 0.3} cy={y - r * 0.52} rx={r * 0.3} ry={r * 0.2} fill="rgba(255,255,255,0.7)" />
    </g>
  );
}

/** Overview: a mixture of four kinds of particle, each keeping its own properties. */
function OverviewScene() {
  const kinds: Ink[] = ["amber", "coral", "slate", "yellow"];
  const points = scatter(24, { x: 30, y: 36, w: 240, h: 150 }, 5);
  return (
    <>
      {points.map((p, i) => (
        <Particle key={i} x={p.x} y={p.y} r={7} ink={kinds[i % kinds.length]!} swing={{ i, amount: 2.5 }} />
      ))}
    </>
  );
}

/** Filtration: sand stays on the filter paper, water runs through and drips into the beaker. */
function FiltrationScene() {
  const cx = 150;
  const top = 22;
  const residue = [0, 1, 2, 3, 4, 5, 6];
  const drops = [0, 1, 2];
  return (
    <>
      {/* Funnel with folded filter paper */}
      <path
        d={`M${cx - 44} ${top} L${cx + 44} ${top} L${cx + 6} ${top + 52} L${cx + 6} ${top + 76} L${cx - 6} ${top + 76} L${cx - 6} ${top + 52} Z`}
        fill="none"
        stroke={GLASS}
        strokeWidth={2.5}
        strokeLinejoin="round"
      />
      <path
        d={`M${cx - 36} ${top + 4} L${cx + 36} ${top + 4} L${cx} ${top + 48} Z`}
        fill="#FEF3C7"
        stroke="#B45309"
        strokeWidth={1.5}
        strokeDasharray="4 3"
      />
      {residue.map((i) => (
        <circle
          key={i}
          cx={cx - 15 + (i % 4) * 10 + (i > 3 ? 5 : 0)}
          cy={top + 24 + (i > 3 ? 7 : 0)}
          r={4.2}
          fill={INK.amber.fill}
          stroke={INK.amber.rim}
          strokeWidth={1.2}
        />
      ))}

      {/* Beaker, half full of filtrate */}
      <path d="M114 160.3 L186 160.3 L186 183 Q186 188 179 188 L121 188 Q114 188 114 183 Z" fill={WATER} />
      <path
        d="M108 124 L112 127 L112 182 Q112 190 120 190 L180 190 Q188 190 188 182 L188 124"
        fill="none"
        stroke={GLASS}
        strokeWidth={2.5}
        strokeLinejoin="round"
      />
      {[173.5, 157, 140.5].map((y) => (
        <line key={y} x1={174} x2={184} y1={y} y2={y} stroke={FAINT} strokeWidth={1.5} />
      ))}

      {/* Water drops falling through the funnel, staggered */}
      {drops.map((i) => (
        <circle
          key={i}
          cx={cx}
          cy={102}
          r={3.6}
          fill={INK.blue.fill}
          stroke={INK.blue.rim}
          strokeWidth={1}
          className="qwilo-drop"
          style={{ animationDelay: `${(-i / drops.length) * 2.6}s` }}
        />
      ))}

      <text x={232} y={48} textAnchor="middle" fontSize={11} fontWeight={600} fill={LABEL}>
        residue (sand)
      </text>
      <text x={240} y={156} textAnchor="middle" fontSize={11} fontWeight={600} fill={LABEL}>
        filtrate (water)
      </text>
    </>
  );
}

const STEPS = {
  overview: {
    tab: "The mixture",
    title: "A mixture · each substance keeps its properties",
    legend: [
      { ink: "amber" as Ink, text: "sand" },
      { ink: "coral" as Ink, text: "salt" },
      { ink: "slate" as Ink, text: "iron" },
      { ink: "yellow" as Ink, text: "sulfur" },
    ],
    note: null,
  },
  filtration: {
    tab: "Filtration",
    title: "Filtration · insoluble solid from a liquid",
    legend: [],
    note: "A physical method: no new substance forms.",
  },
} as const;

type StepName = keyof typeof STEPS;

const SWATCH_COLOURS: Record<Ink, string> = { amber: INK.amber.fill, coral: INK.coral.fill, slate: INK.slate.fill, yellow: INK.yellow.fill, blue: INK.blue.fill };

export default function SeparationLesson({ embedded = false, filtrationOnly = false }: { embedded?: boolean; filtrationOnly?: boolean }) {
  const [step, setStep] = useState<StepName>(filtrationOnly ? "filtration" : "overview");
  const current = STEPS[step];

  return (
    <div className={embedded ? "flex h-full min-h-0 flex-col" : "rounded-3xl border border-[var(--border)] bg-[var(--surface)] p-5 sm:p-6"}>
      <style>{`
        @keyframes qwilo-jiggle {
          from { transform: translate(var(--jx0), var(--jy0)); }
          to { transform: translate(var(--jx1), var(--jy1)); }
        }
        @keyframes qwilo-drop {
          0% { opacity: 0; transform: translateY(0); }
          12% { opacity: 1; }
          78% { opacity: 1; transform: translateY(58px); }
          100% { opacity: 0; transform: translateY(58px); }
        }
        .qwilo-jiggle { animation: qwilo-jiggle 1.3s ease-in-out infinite alternate; }
        .qwilo-drop { animation: qwilo-drop 2.6s linear infinite; }
      `}</style>

      {!embedded && <h3 className="text-center text-base font-bold">{current.title}</h3>}

      {/* Step switch (hidden when the slide shows only filtration) */}
      {!filtrationOnly && <div role="group" aria-label="Choose a step" className="mx-auto mt-4 inline-flex w-full justify-center gap-2">
        {(Object.keys(STEPS) as StepName[]).map(name => (
          <button
            key={name}
            type="button"
            aria-pressed={step === name}
            onClick={() => setStep(name)}
            className={`min-h-11 flex-1 rounded-full border px-4 text-sm font-semibold transition-colors ${
              step === name ? "border-transparent bg-ink text-white" : "border-[var(--border)] bg-transparent text-[var(--text-muted)] hover:text-[var(--text)]"
            }`}
          >
            {STEPS[name].tab}
          </button>
        ))}
      </div>}

      {/* The drawing: the app's 300 × 200 design space, shown at 3:2 */}
      <figure className={embedded ? "flex min-h-0 flex-1 flex-col" : "mt-5"}>
        <svg
          viewBox="0 0 300 200"
          role="img"
          aria-label={step === "overview" ? "Four kinds of particle mixed together" : "Sand stays on the filter paper while water drips into the beaker"}
          className={embedded ? "min-h-0 w-full flex-1 overflow-hidden rounded-2xl border-[1.5px] border-[#CBD5E1] bg-white" : "block aspect-[3/2] w-full overflow-hidden rounded-2xl border-[1.5px] border-[#CBD5E1] bg-white"}
        >
          {step === "overview" ? <OverviewScene /> : <FiltrationScene />}
        </svg>
      </figure>

      {/* Legend */}
      <div className="mt-4 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-sm">
        {step === "overview"
          ? STEPS.overview.legend.map(k => (
              <span key={k.text} className="inline-flex items-center gap-1.5">
                <span className="h-3 w-3 rounded-full border-[1.5px]" style={{ background: SWATCH_COLOURS[k.ink], borderColor: INK[k.ink].rim }} />
                {k.text}
              </span>
            ))
          : <span className="text-[var(--text-muted)]">{STEPS.filtration.note}</span>}
      </div>
    </div>
  );
}
