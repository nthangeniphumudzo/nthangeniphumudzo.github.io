import useReducedMotion from "./useReducedMotion";

/*
 * Physical Sciences (Grade 10, Matter and materials): distillation, from the QWILO app lesson
 * "matter.separation" (step: distillation). Same drawing as the app: a round-bottomed flask over a
 * flame, its vapour rising through a water-cooled condenser, and the distillate collecting in a
 * beaker. Same 300 × 200 design space and card as the other lesson slides. The vapour and drops
 * move only while the device allows motion.
 */

const GLASS = "#334155";
const BLUE = "#2563EB";
const LABEL = "#0F172A";
const WATER = "rgba(37,99,235,0.14)";
const COOLANT = "#0284C7";

// The vapour path from the flask, up the neck, along the condenser to the beaker (app coordinates).
const VAPOUR_PATH = "M70 118 L70 66 L100 72 L160 93 L214 112 L234 150";

export default function DistillationScene() {
  const reduce = useReducedMotion();

  return (
    <svg viewBox="0 0 300 200" className="h-full w-full" role="img" aria-label="Distillation: a mixture boils in a flask over a flame, its vapour cools in a water-cooled condenser, and the clear distillate collects in a beaker">
      <rect x={6} y={6} width={288} height={188} rx={12} fill="none" stroke="#CBD5E1" strokeWidth={1} />

      {/* Round-bottomed flask with its liquid, the neck and the condenser */}
      <circle cx={70} cy={120} r={30} fill="none" stroke={GLASS} strokeWidth={2.5} />
      <path d="M44 128 A30 30 0 0 0 96 128 Z" fill={WATER} />
      <line x1={62} y1={92} x2={62} y2={56} stroke={GLASS} strokeWidth={2.5} />
      <line x1={78} y1={92} x2={78} y2={56} stroke={GLASS} strokeWidth={2.5} />
      <path d="M78 60 L226 112" stroke={GLASS} strokeWidth={2.5} />
      <path d="M78 68 L226 120" stroke={GLASS} strokeWidth={2.5} />
      <path d="M104 58 L210 95 L206 108 L100 71 Z" fill="rgba(56,189,248,0.18)" stroke={COOLANT} strokeWidth={1.8} />
      <line x1={112} y1={58} x2={112} y2={46} stroke={COOLANT} strokeWidth={2} />
      <line x1={202} y1={108} x2={202} y2={120} stroke={COOLANT} strokeWidth={2} />

      {/* Tripod gauze under the flask, and the flame */}
      <line x1={37} y1={150} x2={103} y2={150} stroke={GLASS} strokeWidth={2.5} strokeLinecap="round" />
      <line x1={50} y1={150} x2={38} y2={178} stroke={GLASS} strokeWidth={2.5} strokeLinecap="round" />
      <line x1={90} y1={150} x2={102} y2={178} stroke={GLASS} strokeWidth={2.5} strokeLinecap="round" />
      <path d="M70 166 C76 173 80 180 80 186 C80 193 75 197 70 197 C65 197 60 193 60 186 C60 180 64 173 70 166 Z" fill="#F97316" stroke="#9A3412" strokeWidth={1.2} />
      <path d="M70 178 C73 182 74 185 74 188 C74 192 72 193 70 193 C68 193 66 192 66 188 C66 185 67 182 70 178 Z" fill="#FDE047">
        {!reduce && <animate attributeName="opacity" values="0.7;1;0.7" dur="0.9s" repeatCount="indefinite" />}
      </path>

      {/* Beaker collecting the distillate */}
      <path d="M204 130 L208 133 L208 182 Q208 190 216 190 L256 190 Q264 190 264 182 L264 130" fill="none" stroke={GLASS} strokeWidth={2.5} strokeLinejoin="round" />
      <path d="M208 169 L264 169 L264 182 Q264 190 256 190 L216 190 Q208 190 208 182 Z" fill={WATER} stroke="none" />
      <line x1={250} y1={150} x2={264} y2={150} stroke="#CBD5E1" strokeWidth={1.5} />
      <line x1={250} y1={170} x2={264} y2={170} stroke="#CBD5E1" strokeWidth={1.5} />

      {/* Vapour: blue dots travelling the path from the flask to the condenser */}
      {reduce ? (
        <circle cx={160} cy={93} r={4} fill={BLUE} />
      ) : (
        [0, 1, 2, 3].map(i => (
          <circle key={i} cx={0} cy={0} r={4} fill={BLUE} opacity={0}>
            <animateMotion path={VAPOUR_PATH} dur="3.6s" begin={`${i * 0.9}s`} repeatCount="indefinite" />
            <animate attributeName="opacity" values="0;1;1;0" keyTimes="0;0.1;0.9;1" dur="3.6s" begin={`${i * 0.9}s`} repeatCount="indefinite" />
          </circle>
        ))
      )}

      {/* Distillate dripping into the beaker */}
      {reduce ? (
        <circle cx={234} cy={160} r={3.6} fill={BLUE} />
      ) : (
        [0, 1].map(i => (
          <circle key={i} cx={234} cy={152} r={3.6} fill={BLUE} opacity={0}>
            <animate attributeName="cy" values="152;170" dur="1.4s" begin={`${i * 0.7}s`} repeatCount="indefinite" />
            <animate attributeName="opacity" values="0;1;1;0" keyTimes="0;0.1;0.8;1" dur="1.4s" begin={`${i * 0.7}s`} repeatCount="indefinite" />
          </circle>
        ))
      )}

      {/* Labels, as in the app */}
      <text x={150} y={34} fontSize={9} fill={LABEL} textAnchor="middle" fontFamily="Inter, sans-serif">condenser (cooled by water)</text>
      <text x={70} y={18} fontSize={9} fill={LABEL} textAnchor="middle" fontFamily="Inter, sans-serif">vapour</text>
      <text x={236} y={108} fontSize={9} fill={LABEL} textAnchor="middle" fontFamily="Inter, sans-serif">distillate</text>
    </svg>
  );
}
