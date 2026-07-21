import { useCallback, useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Quotes, ArrowLeft, ArrowRight } from "@phosphor-icons/react";
import { Reveal } from "./Reveal";
import { useLanguage } from "../i18n/LanguageContext";

// Collapsed quotes reserve exactly this many lines, so cycling between short and
// long testimonials never changes the card height (no page jump). Expanding
// animates the max-height from this reserved height to the full text height.
const CLAMP_LINES = 10;

export function References() {
  const { t } = useLanguage();
  const shouldReduceMotion = useReducedMotion();
  const items = t.references.items;
  const [[index, direction], setPage] = useState<[number, number]>([0, 0]);
  const [expanded, setExpanded] = useState(false);
  const [isOverflowing, setIsOverflowing] = useState(false);
  const [fullHeight, setFullHeight] = useState<number | null>(null);
  const pRef = useRef<HTMLParagraphElement | null>(null);

  const goTo = (next: number, dir: number) => {
    setExpanded(false);
    setPage([(next + items.length) % items.length, dir]);
  };
  const paginate = (dir: number) => goTo(index + dir, dir);

  const doMeasure = (node: HTMLParagraphElement) => {
    const lh = parseFloat(getComputedStyle(node).lineHeight) || 0;
    setFullHeight(node.scrollHeight);
    setIsOverflowing(node.scrollHeight > lh * CLAMP_LINES + 4);
  };

  // Fires on each testimonial change (the <p> remounts) — measures the full
  // text height and whether it exceeds the 10-line reserved area.
  const measureRef = useCallback((node: HTMLParagraphElement | null) => {
    pRef.current = node;
    if (node) doMeasure(node);
  }, []);

  // Re-measure on resize: font size and line wrapping change with width.
  useEffect(() => {
    const onResize = () => pRef.current && doMeasure(pRef.current);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const active = items[index];

  const variants = {
    enter: (dir: number) => ({ opacity: 0, x: shouldReduceMotion ? 0 : dir > 0 ? 40 : -40 }),
    center: { opacity: 1, x: 0 },
    exit: (dir: number) => ({ opacity: 0, x: shouldReduceMotion ? 0 : dir > 0 ? -40 : 40 }),
  };

  const collapsedHeight = `calc(${CLAMP_LINES} * 1lh)`;

  return (
    <section id="references" className="bg-cream py-14 md:py-28">
      <div className="mx-auto max-w-3xl px-6 md:px-12">
        <Reveal className="mb-12 text-center">
          <p className="mb-2 text-[12px] font-bold uppercase tracking-[1.5px] text-gold-dark">
            {t.references.label}
          </p>
          <h2 className="font-serif text-[24px] font-bold leading-tight text-ink md:text-[34px]">
            {t.references.titleLine1}
            <br />
            {t.references.titleLine2}
          </h2>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="relative rounded-lg border border-border bg-paper p-8 shadow-soft md:p-12">
            {/* Header row: attribution (left) + controls (right), anchored at the top */}
            <div className="mb-6 flex items-start justify-between gap-4 border-b border-border pb-6">
              <div className="flex min-w-0 items-center gap-4">
                <Quotes size={32} weight="fill" className="shrink-0 text-gold/60" />
                <div className="min-w-0">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 6 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: shouldReduceMotion ? 0 : -6 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="text-sm font-bold text-ink">{active.name}</div>
                      <div className="text-[13px] text-ink-soft">{active.role}</div>
                    </motion.div>
                  </AnimatePresence>
                </div>
              </div>

              <div className="flex shrink-0 gap-2">
                <button
                  onClick={() => paginate(-1)}
                  aria-label="Předchozí reference"
                  className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border border-border text-ink transition-colors duration-300 hover:border-gold hover:text-gold-dark"
                >
                  <ArrowLeft size={16} weight="bold" />
                </button>
                <button
                  onClick={() => paginate(1)}
                  aria-label="Další reference"
                  className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border border-border text-ink transition-colors duration-300 hover:border-gold hover:text-gold-dark"
                >
                  <ArrowRight size={16} weight="bold" />
                </button>
              </div>
            </div>

            {/* Quote — fixed reserved height keeps the card stable; expanding animates open */}
            <div className="relative">
              <AnimatePresence mode="wait" custom={direction}>
                <motion.blockquote
                  key={index}
                  custom={direction}
                  variants={variants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                >
                  <div
                    // text-lg/leading-relaxed here make `1lh` resolve to the quote's
                    // line-height so the reserved 10-line height is correct.
                    className={`relative overflow-hidden text-lg leading-relaxed md:text-xl ${
                      shouldReduceMotion
                        ? ""
                        : "transition-[max-height] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]"
                    }`}
                    style={{
                      minHeight: collapsedHeight,
                      maxHeight: expanded && fullHeight ? `${fullHeight}px` : collapsedHeight,
                    }}
                  >
                    <p
                      ref={measureRef}
                      className="font-serif text-lg italic leading-relaxed text-ink md:text-xl"
                    >
                      &ldquo;{active.quote}&rdquo;
                    </p>
                    <AnimatePresence>
                      {!expanded && isOverflowing && (
                        <motion.div
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-paper to-transparent"
                        />
                      )}
                    </AnimatePresence>
                  </div>
                </motion.blockquote>
              </AnimatePresence>
            </div>

            {/* Fixed-height slot so the toggle's presence never changes card height */}
            <div className="mt-4 flex h-6 items-center">
              {isOverflowing && (
                <button
                  onClick={() => setExpanded((v) => !v)}
                  className="cursor-pointer text-sm font-semibold text-gold-dark underline-offset-4 transition-colors hover:text-brand hover:underline"
                >
                  {expanded ? t.references.readLess : t.references.readMore}
                </button>
              )}
            </div>

            {/* Dots */}
            <div className="mt-8 flex justify-center gap-2 border-t border-border pt-6">
              {items.map((_, i) => (
                <button
                  key={i}
                  onClick={() => goTo(i, i > index ? 1 : -1)}
                  aria-label={`Reference ${i + 1}`}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    i === index ? "w-6 bg-gold" : "w-2 bg-border hover:bg-gold/50"
                  }`}
                />
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
