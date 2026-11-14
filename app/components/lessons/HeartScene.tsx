/*
 * The heart: a four-chamber heart with the blood route, ported from the QWILO app.
 *   qwilo-app/src/components/lessons/scene/heart.tsx (HeartSpecial, flow: both, beat: true)
 *
 * Same geometry, colours and timing as the app. Right side of the picture
 * (blue) carries blood with little oxygen; left side (coral) carries oxygenated
 * blood. Arrows show the route. The atria squeeze first, then the ventricles,
 * then both relax: one beat every 0.9 s, the same as the app's loop clock.
 */

const INK = {
  blue: { fill: "#2563EB", rim: "#1E3A8A" },
  coral: { fill: "#F0533A", rim: "#9A2A16" },
  copper: { fill: "#D9733B", rim: "#7C2D12" },
} as const;

// The app draws the heart centred at (150, 100) with a scale of 60 units.
const CX = 150;
const CY = 100;
const K = 60;
const X = (u: number) => CX + u * K;
const Y = (v: number) => CY + v * K;

const RC = INK.blue.fill;
const LC = INK.coral.fill;

/** Arrowhead, in the same way the app builds it. */
function ArrowHead({ x, y, dx, dy, colour }: { x: number; y: number; dx: number; dy: number; colour: string }) {
  const size = 0.2 * K;
  const len = Math.hypot(dx, dy) || 1;
  const ux = dx / len;
  const uy = dy / len;
  const px = -uy;
  const py = ux;
  const d = `M${x} ${y} L${x - ux * size + px * size * 0.5} ${y - uy * size + py * size * 0.5} L${x - ux * size - px * size * 0.5} ${y - uy * size - py * size * 0.5} Z`;
  return <path d={d} fill={colour} />;
}

/** One chamber: a rounded rectangle centred at (u, v) in heart units. */
function Chamber({ u, v, w, h, rx, colour }: { u: number; v: number; w: number; h: number; rx: number; colour: "blue" | "coral" }) {
  const { fill, rim } = INK[colour];
  return (
    <rect
      x={X(u - w / 2)}
      y={Y(v - h / 2)}
      width={w * K}
      height={h * K}
      rx={rx * K}
      fill={fill}
      stroke={rim}
      strokeWidth={1.5}
    />
  );
}

/** The four chambers, split into the two rows that beat separately. */
function Atria() {
  return (
    <>
      <Chamber u={-0.3} v={-0.5} w={0.52} h={0.42} rx={0.1} colour="blue" />
      <Chamber u={0.3} v={-0.5} w={0.52} h={0.42} rx={0.1} colour="coral" />
    </>
  );
}

function Ventricles() {
  return (
    <>
      <Chamber u={-0.3} v={0.2} w={0.52} h={0.5} rx={0.14} colour="blue" />
      <Chamber u={0.3} v={0.2} w={0.52} h={0.5} rx={0.14} colour="coral" />
      {/* The two valves between atria and ventricles. They move with the ventricles. */}
      {[-0.3, 0.3].map(u => (
        <rect
          key={u}
          x={X(u - 0.25)}
          y={Y(-0.08)}
          width={0.5 * K}
          height={0.08 * K}
          rx={0.03 * K}
          fill={INK.copper.fill}
          stroke={INK.copper.rim}
          strokeWidth={0.8}
        />
      ))}
    </>
  );
}

export default function HeartScene() {
  return (
    <div className="flex h-full min-h-0 flex-col">
      <style>{`
        @keyframes qwilo-atria {
          0%, 22%, 100% { transform: scale(1); }
          10% { transform: scale(0.9); }
        }
        @keyframes qwilo-ventricles {
          0%, 30%, 100% { transform: scale(1); }
          42% { transform: scale(0.86); }
        }
        .qwilo-atria { transform-box: fill-box; transform-origin: center; animation: qwilo-atria 0.9s linear infinite; }
        .qwilo-ventricles { transform-box: fill-box; transform-origin: center; animation: qwilo-ventricles 0.9s linear infinite; }
      `}</style>

      <svg
        viewBox="0 0 300 200"
        role="img"
        aria-label="A four-chamber heart. Blue blood from the body enters the right side, goes to the lungs, comes back to the left side and is pumped out to the body."
        preserveAspectRatio="xMidYMid meet"
        className="min-h-0 w-full flex-1 overflow-hidden rounded-2xl border-[1.5px] border-[#CBD5E1] bg-white"
      >
        {/* Vessels: they never move */}
        <g stroke="none">
          <line x1={X(-0.5)} y1={Y(-0.92)} x2={X(-0.5)} y2={Y(-1.45)} stroke={RC} strokeWidth={0.09 * K} strokeLinecap="round" />
          <line x1={X(-0.36)} y1={Y(0.5)} x2={X(-1.0)} y2={Y(0.5)} stroke={RC} strokeWidth={0.09 * K} strokeLinecap="round" />
          <line x1={X(0.36)} y1={Y(-0.82)} x2={X(0.92)} y2={Y(-0.82)} stroke={LC} strokeWidth={0.09 * K} strokeLinecap="round" />
          <line x1={X(0.36)} y1={Y(0.6)} x2={X(1.0)} y2={Y(0.6)} stroke={LC} strokeWidth={0.09 * K} strokeLinecap="round" />
        </g>

        {/* Route arrows: right side (blue) then left side (coral) */}
        <g>
          <line x1={X(-0.5)} y1={Y(-1.45)} x2={X(-0.5)} y2={Y(-0.8)} stroke={RC} strokeWidth={0.05 * K} />
          <ArrowHead x={X(-0.5)} y={Y(-0.72)} dx={0} dy={1} colour={RC} />
          <line x1={X(-0.3)} y1={Y(-0.18)} x2={X(-0.3)} y2={Y(0.36)} stroke={RC} strokeWidth={0.05 * K} />
          <ArrowHead x={X(-0.3)} y={Y(0.42)} dx={0} dy={1} colour={RC} />
          <line x1={X(-0.36)} y1={Y(0.5)} x2={X(-0.9)} y2={Y(0.5)} stroke={RC} strokeWidth={0.05 * K} />
          <ArrowHead x={X(-1.0)} y={Y(0.5)} dx={-1} dy={0} colour={RC} />

          <line x1={X(0.92)} y1={Y(-0.82)} x2={X(0.36)} y2={Y(-0.82)} stroke={LC} strokeWidth={0.05 * K} />
          <ArrowHead x={X(0.36)} y={Y(-0.82)} dx={-1} dy={0} colour={LC} />
          <line x1={X(0.3)} y1={Y(-0.82)} x2={X(0.3)} y2={Y(-0.25)} stroke={LC} strokeWidth={0.05 * K} />
          <ArrowHead x={X(0.3)} y={Y(-0.2)} dx={0} dy={1} colour={LC} />
          <line x1={X(0.3)} y1={Y(-0.18)} x2={X(0.3)} y2={Y(0.36)} stroke={LC} strokeWidth={0.05 * K} />
          <ArrowHead x={X(0.3)} y={Y(0.42)} dx={0} dy={1} colour={LC} />
          <line x1={X(0.36)} y1={Y(0.6)} x2={X(0.9)} y2={Y(0.6)} stroke={LC} strokeWidth={0.05 * K} />
          <ArrowHead x={X(1.0)} y={Y(0.6)} dx={1} dy={0} colour={LC} />
        </g>

        {/* Atria beat first, then the ventricles */}
        <g className="qwilo-atria">
          <Atria />
        </g>
        <g className="qwilo-ventricles">
          <Ventricles />
        </g>

        {/* Chamber names, as the app labels them */}
        <g fontSize={11} fontWeight={700} fill="#0F172A" textAnchor="middle">
          <text x={X(-0.3)} y={Y(-0.96)}>right</text>
          <text x={X(0.3)} y={Y(-0.96)}>left</text>
          <text x={X(-0.3)} y={Y(0.72)}>right</text>
          <text x={X(0.3)} y={Y(0.72)}>left</text>
        </g>
      </svg>
    </div>
  );
}
