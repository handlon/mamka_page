import { motion, useReducedMotion, type Variants } from "framer-motion";
import { ArrowRight } from "@phosphor-icons/react";
import { useLanguage } from "../i18n/LanguageContext";

import heroPhoto from "../assets/mugshot.jpg";


const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

export function Hero() {
  const { t } = useLanguage();
  const shouldReduceMotion = useReducedMotion();

  const lineVariants: Variants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 32 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, delay: 0.15 + i * 0.12, ease: EASE },
    }),
  };

  return (
    <section
      id="home"
      className="relative overflow-hidden border-b-2 border-border bg-cream pb-16 pt-24 md:pb-24 md:pt-40"
    >
      <div className="absolute left-0 top-0 h-full w-1 bg-gold" aria-hidden="true" />

      <div className="relative mx-auto max-w-6xl px-6 md:px-12">
        {/* Mobile order: text → image → stats. Desktop: text+stats left, image right. */}
        <div className="grid grid-cols-1 gap-y-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-x-16 lg:gap-y-6">
          {/* TEXT — eyebrow, headline, intro, buttons */}
          <div className="order-1 max-w-2xl lg:col-start-1 lg:row-start-1 lg:self-start">
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-4 text-[12px] font-bold uppercase tracking-[2px] text-gold-dark"
            >
              {t.hero.eyebrow}
            </motion.p>

            <h1 className="mb-6 font-serif text-[32px] font-bold leading-[1.15] text-ink md:text-[52px]">
              <motion.span className="block overflow-hidden">
                <motion.span
                  className="block"
                  custom={0}
                  initial="hidden"
                  animate="visible"
                  variants={lineVariants}
                >
                  {t.hero.titleLine1}
                </motion.span>
              </motion.span>
              <motion.span className="block overflow-hidden">
                <motion.span
                  className="block italic text-brand"
                  custom={1}
                  initial="hidden"
                  animate="visible"
                  variants={lineVariants}
                >
                  {t.hero.titleLine2}
                </motion.span>
              </motion.span>
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.55 }}
              className="mb-8 max-w-lg text-base leading-[1.75] text-ink-muted"
            >
              {t.hero.intro}{" "}
              <span className="font-semibold text-brand">{t.hero.introHighlight}</span>{" "}
              {t.hero.introRest}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.7 }}
              className="flex flex-wrap gap-3"
            >
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
                }}
                className="group inline-flex cursor-pointer items-center gap-2 rounded-full bg-brand px-7 py-3 text-sm font-semibold text-cream transition-all duration-300 hover:bg-brand-dark hover:shadow-lift"
              >
                {t.hero.ctaPrimary}
                <ArrowRight size={16} weight="bold" className="transition-transform duration-300 group-hover:translate-x-1" />
              </a>
              <a
                href="#expertise"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById("expertise")?.scrollIntoView({ behavior: "smooth" });
                }}
                className="inline-flex cursor-pointer items-center gap-2 rounded-full border-2 border-brand px-7 py-3 text-sm font-semibold text-brand transition-colors duration-300 hover:bg-cream-alt"
              >
                {t.hero.ctaSecondary}
              </a>
            </motion.div>

          </div>

          {/* IMAGE — portrait (mobile: sits between the buttons and the stats) */}
          <motion.div
            initial={{ opacity: 0, x: shouldReduceMotion ? 0 : 32, scale: shouldReduceMotion ? 1 : 0.97 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.35, ease: EASE }}
            className="relative order-2 mx-auto w-full max-w-[300px] sm:max-w-[360px] lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:mx-0 lg:ml-auto lg:max-w-[420px] lg:self-center"
          >
            <div
              className="absolute -right-4 -top-4 h-full w-full rounded-2xl border border-gold/40 lg:-right-5 lg:-top-5"
              aria-hidden="true"
            />
            <div className="relative aspect-[4/5] overflow-hidden rounded-2xl shadow-lift">
              <img
                src={heroPhoto}
                alt="Lenka Handlíková – externí CFO"
                className="h-full w-full object-cover object-top"
              />
              {/* Warm blend to tie the photo into the cream/gold palette */}
              <div
                className="pointer-events-none absolute inset-0 bg-gradient-to-t from-brand/25 via-transparent to-transparent"
                aria-hidden="true"
              />
            </div>
          </motion.div>

          {/* STATS — below the image on mobile, bottom-left on desktop */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.85 }}
            className="order-3 flex max-w-2xl flex-wrap gap-x-10 gap-y-4 border-t border-border pt-6 lg:col-start-1 lg:row-start-2 lg:self-end"
          >
            {t.hero.stats.map((stat) => (
              <div key={stat.label}>
                <div className="font-serif text-xl font-bold text-ink md:text-2xl">{stat.value}</div>
                <div className="text-[13px] text-ink-soft md:text-[12px]">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
