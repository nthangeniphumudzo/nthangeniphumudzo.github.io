/*
 * A gradient on a graph, ported from the QWILO app's motion lesson:
 *   qwilo-app/src/components/lessons/templates/motion.tsx (Graph, kind: 'xt')
 *
 * A position–time graph is a straight line rising from the origin. Its gradient
 * is the velocity, and the app labels it "gradient = velocity". The line is
 * drawn in from the origin, then the label appears, then the loop starts again.
 */

const OX = 50; // origin x
const OY = 160; // origin y
const LINE = "#334155";
const CORAL = "#F0533A";
const CORAL_RIM = "#9A2A16";

export default function GradientScene() {
  return (
    <div className="flex h-full min-h-0 flex-col">
      <style>{`
        @keyframes qwilo-draw {
          0% { stroke-dashoffset: 1; }
          60%, 100% { stroke-dashoffset: 0; }
        }
        @keyframes qwilo-label {
          0%, 55% { opacity: 0; }
          75%, 100% { opacity: 1; }
        }
        .qwilo-line { stroke-dasharray: 1; stroke-dashoffset: 1; animation: qwilo-draw 4s ease-in-out infinite; }
        .qwilo-label { animation: qwilo-label 4s ease-in-out infinite; }
      `}</style>

      <svg
        viewBox="0 0 300 200"
        role="img"
        aria-label="A straight line on a position–time graph. Its gradient is the velocity."
        preserveAspectRatio="xMidYMid meet"
        className="min-h-0 w-full flex-1 overflow-hidden rounded-2xl border-[1.5px] border-[#CBD5E1] bg-white"
      >
        {/* Axes */}
        <line x1={OX} y1={OY} x2={270} y2={OY} stroke={LINE} strokeWidth={1.8} />
        <line x1={OX} y1={OY} x2={OX} y2={26} stroke={LINE} strokeWidth={1.8} />
        <text x={274} y={OY - 6} fontSize={11} fontWeight={700} fill="#0F172A" textAnchor="middle">t</text>
        <text x={OX - 18} y={33} fontSize={11} fontWeight={700} fill="#0F172A" textAnchor="middle">x</text>

        {/* The line: x = velocity × t, drawn in from the origin */}
        <path
          className="qwilo-line"
          pathLength={1}
          d={`M${OX} ${OY} L240 40`}
          stroke={CORAL}
          strokeWidth={3.5}
          fill="none"
          strokeLinecap="round"
        />

        <text
          className="qwilo-label"
          x={170}
          y={132}
          fontSize={12}
          fontWeight={700}
          fill={CORAL_RIM}
          textAnchor="middle"
        >
          gradient = velocity
        </text>
      </svg>
    </div>
  );
}
