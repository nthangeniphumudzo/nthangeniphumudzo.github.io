import { HYPERBOLA_LIFT } from "./hyperbolaData";

/*
 * Mathematics (Grade 11): the hyperbola y = 1/(x − 2) + 1, from the QWILO app lesson
 * "Quadratic and hyperbola transformations". The drawing data is the app's own, generated
 * into hyperbolaData.ts. Same 300 × 200 design space and card as the other lesson slides.
 */

// The app's colours. "line" is the canvas axis colour; the others are INK names.
const COLOUR: Record<string, string> = {
  line: "#334155",
  blue: "#2563EB",
  amber: "#F59E0B",
  coral: "#F0533A",
  slate: "#94A3B8",
};
const colourOf = (name: unknown, fallback: string) => (typeof name === "string" && COLOUR[name] ? COLOUR[name] : fallback);

type Item = (typeof HYPERBOLA_LIFT.items)[number];

function ItemView({ item }: { item: Item }) {
  const a = item as unknown as Record<string, unknown>;
  if (item.type === "line") {
    return (
      <line
        x1={Number(a.x1)}
        y1={Number(a.y1)}
        x2={Number(a.x2)}
        y2={Number(a.y2)}
        stroke={colourOf(a.stroke, "#334155")}
        strokeWidth={Number(a.width ?? 1.5)}
        strokeLinecap="round"
      />
    );
  }
  if (item.type === "path") {
    return (
      <path
        d={String(a.d)}
        fill={colourOf(a.fill, "none")}
        stroke={colourOf(a.stroke, "#334155")}
        strokeWidth={Number(a.width ?? 2)}
        strokeLinejoin="round"
      />
    );
  }
  if (item.type === "text") {
    const size = Number(a.size ?? 11);
    // The app places text by its top edge; SVG uses the baseline, so move it down by the text size.
    return (
      <text
        x={Number(a.x)}
        y={Number(a.y) + size * 0.85}
        fontSize={size}
        fontWeight={a.bold ? 700 : 600}
        fill="#0F172A"
        textAnchor={a.align === "left" ? "start" : "middle"}
      >
        {String(a.text)}
      </text>
    );
  }
  return null;
}

export default function HyperbolaScene() {
  return (
    <div className="flex h-full min-h-0 flex-col">
      <svg
        viewBox="0 0 300 200"
        role="img"
        aria-label="The hyperbola y equals 1 over (x minus 2) plus 1, with its horizontal asymptote moved up to y equals 1."
        preserveAspectRatio="xMidYMid meet"
        className="min-h-0 w-full flex-1 overflow-hidden rounded-2xl border-[1.5px] border-[#CBD5E1] bg-white"
      >
        <text x={10} y={14} fontSize={9} fontWeight={600} fill="#475569">{HYPERBOLA_LIFT.label}</text>
        {HYPERBOLA_LIFT.items.map((item, i) => (
          <ItemView key={i} item={item} />
        ))}
      </svg>
    </div>
  );
}
