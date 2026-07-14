import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Quotes, ArrowLeft, ArrowRight } from "@phosphor-icons/react";
import { Reveal } from "./Reveal";
import { useLanguage } from "../i18n/LanguageContext";

export function References() {
  const { t } = useLanguage();
  const shouldReduceMotion = useReducedMotion();
  const items = t.references.items;
  const [[index, direction], setState] = useState<[number, number]>([0, 0]);

  const paginate = (dir: number) => {
    setState(([prev]) => [(prev + dir + items.length) % items.length, dir]);
  };

  const active = items[index];

  const variants = {
    enter: (dir: number) => ({ opacity: 0, x: shouldReduceMotion ? 0 : dir > 0 ? 40 : -40 }),
    center: { opacity: 1, x: 0 },
    exit: (dir: number) => ({ opacity: 0, x: shouldReduceMotion ? 0 : dir > 0 ? -40 : 40 }),
  };

  return (
    <section id="references" className="bg-cream py-20 md:py-28">
      <div className="mx-auto max-w-3xl px-6 md:px-12">
        <Reveal className="mb-12 text-center">
          <p className="mb-2 text-[12px] font-bold uppercase tracking-[1.5px] text-gold-dark">
            {t.references.label}
          </p>
          <h2 className="font-serif text-[28px] font-bold leading-tight text-ink md:text-[34px]">
            {t.references.titleLine1}
            <br />
            {t.references.titleLine2}
          </h2>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="relative rounded-lg border border-border bg-paper p-8 shadow-soft md:p-12">
            <Quotes size={40} weight="fill" className="mb-6 text-gold/60" />

            <div className="relative min-h-[180px] sm:min-h-[150px]">
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
                  <p className="mb-6 font-serif text-lg italic leading-relaxed text-ink md:text-xl">
                    &ldquo;{active.quote}&rdquo;
                  </p>
                  <footer>
                    <div className="text-sm font-bold text-ink">{active.name}</div>
                    <div className="text-[13px] text-ink-soft">{active.role}</div>
                  </footer>
                </motion.blockquote>
              </AnimatePresence>
            </div>

            <div className="mt-8 flex items-center justify-between border-t border-border pt-6">
              <div className="flex gap-2">
                {items.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setState([i, i > index ? 1 : -1])}
                    aria-label={`Reference ${i + 1}`}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      i === index ? "w-6 bg-gold" : "w-2 bg-border hover:bg-gold/50"
                    }`}
                  />
                ))}
              </div>
              <div className="flex gap-2">
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
          </div>
        </Reveal>
      </div>
    </section>
  );
}
