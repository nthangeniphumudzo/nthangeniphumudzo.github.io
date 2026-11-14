/* The QWILO atom mark, from the brand artwork (public/logo.png). Decorative
   wherever it sits beside the QWILO wordmark, so it has no alt text. */
export default function Logo({ className = "h-8 w-8" }: { className?: string }) {
  return <img src="/logo.png" alt="" aria-hidden="true" className={`${className} object-contain`} />;
}
