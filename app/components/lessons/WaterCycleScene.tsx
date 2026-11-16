import { WATER_CYCLE } from "./waterCycleData";

/*
 * The water cycle, scene 5 of "The water cycle: from sea to mountain and back" (the
 * geography lesson in the QWILO app). The drawing data is the app's own, generated into
 * waterCycleData.ts, so the picture is the same. Same 300 × 200 design space.
 *
 * The droplets follow the app's flow path: dots spaced evenly round a closed loop, moving
 * at a steady pace (3 s a lap). SVG animateMotion does the same job on the web.
 */

// The app's ink colours (kit.tsx INK). A path's fill or stroke names one of these.
const INK: Record<string, { fill: string; rim: string }> = {
  blue: { fill: "#2563EB", rim: "#1E3A8A" },
  carbon: { fill: "#1F2937", rim: "#030712" },
  green: { fill: "#16A34A", rim: "#14532D" },
  slate: { fill: "#94A3B8", rim: "#334155" },
};
const inkFill = (name: unknown, fallback: string) => (typeof name === "string" && INK[name] ? INK[name].fill : fallback);

type Item = (typeof WATER_CYCLE.items)[number];

/** A loop is closed: back to the first point (the app does the same). */
function loopPath(points: number[][]): string {
  const [first, ...rest] = points;
  const body = [first, ...rest, first].map((p) => `${p[0]} ${p[1]}`);
  return `M${body[0]} ` + body.slice(1).map((p) => `L${p}`).join(" ") + " Z";
}

function Droplets({ points, count, duration }: { points: number[][]; count: number; duration: number }) {
  const d = loopPath(points);
  return (
    <>
      {Array.from({ length: count }, (_, i) => (
        <g key={i}>
          <circle r={3.6} fill={INK.blue.fill} stroke={INK.blue.rim} strokeWidth={0.9}>
            <animateMotion dur={`${duration}s`} repeatCount="indefinite" begin={`${-(i / count) * duration}s`} path={d} />
          </circle>
          <ellipse rx={1.1} ry={0.7} fill="rgba(255,255,255,0.7)">
            <animateMotion dur={`${duration}s`} repeatCount="indefinite" begin={`${-(i / count) * duration}s`} path={d} />
          </ellipse>
        </g>
      ))}
    </>
  );
}

function ItemView({ item }: { item: Item }) {
  const any = item as unknown as Record<string, unknown>;
  if (item.type === "path") {
    const fill = any.fill === undefined ? "none" : inkFill(any.fill, "none");
    const stroke = any.stroke === undefined ? "none" : inkFill(any.stroke, String(any.stroke));
    return (
      <path
        d={String(any.d)}
        fill={fill}
        stroke={stroke}
        strokeWidth={Number(any.width ?? 1)}
        strokeLinejoin="round"
        opacity={Number(any.opacity ?? 1)}
      />
    );
  }
  if (item.type === "flowPath") {
    const pts = (any.points as number[][]) ?? [];
    return <Droplets points={pts} count={Number(any.count ?? 4)} duration={3} />;
  }
  if (item.type === "text") {
    return (
      <text x={Number(any.x)} y={Number(any.y)} fontSize={Number(any.size ?? 11)} fontWeight={600} fill="#0F172A" textAnchor="middle">
        {String(any.text)}
      </text>
    );
  }
  return null;
}

export default function WaterCycleScene() {
  const legend = WATER_CYCLE.legend;
  return (
    <div className="flex h-full min-h-0 flex-col">
      <p className="text-center text-base font-bold">{WATER_CYCLE.title}</p>
      <svg
        viewBox="0 0 300 200"
        role="img"
        aria-label="The water cycle: water evaporates from the sea, condenses into cloud, falls as rain on the mountain and runs back to the sea."
        preserveAspectRatio="xMidYMid meet"
        className="mt-2 min-h-0 w-full flex-1 overflow-hidden rounded-2xl border-[1.5px] border-[#CBD5E1] bg-white"
      >
        <text x={10} y={14} fontSize={9} fontWeight={600} fill="#475569">{WATER_CYCLE.label}</text>
        {WATER_CYCLE.items.map((item, i) => (
          <ItemView key={i} item={item} />
        ))}
      </svg>
      <div className="mt-2 flex flex-wrap items-center justify-center gap-x-4 gap-y-1 text-xs">
        {legend.map((entry) => (
          <span key={entry.text} className="inline-flex items-center gap-1.5">
            <span className="h-3 w-3 rounded-full border-[1.5px]" style={{ background: INK[entry.ink]?.fill, borderColor: INK[entry.ink]?.rim }} />
            {entry.text}
          </span>
        ))}
      </div>
    </div>
  );
}
