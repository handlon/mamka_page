import { motion, useReducedMotion, type Variants } from "framer-motion";
import { ArrowRight } from "@phosphor-icons/react";
import { useLanguage } from "../i18n/LanguageContext";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

function HeroOrnament() {
  return (
    <svg
      viewBox="0 0 400 400"
      className="pointer-events-none absolute -right-16 top-1/2 hidden h-[420px] w-[420px] -translate-y-1/2 opacity-70 lg:block"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="hero-grad-1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#C4953C" />
          <stop offset="100%" stopColor="#A67F2F" />
        </linearGradient>
      </defs>
      <motion.path
        d="M60 260 Q60 340 140 340 L280 340 Q360 340 360 260"
        stroke="url(#hero-grad-1)"
        strokeWidth="2"
        fill="none"
        strokeLinecap="round"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{ duration: 1.6, ease: "easeInOut", delay: 0.3 }}
      />
      <motion.path
        d="M40 150 Q40 60 130 60 L290 60 Q380 60 380 150"
        stroke="#E8DCC9"
        strokeWidth="2"
        fill="none"
        strokeLinecap="round"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{ duration: 1.6, ease: "easeInOut", delay: 0.6 }}
      />
      <motion.line
        x1="130" y1="60" x2="130" y2="340"
        stroke="#E8DCC9" strokeWidth="1.5" opacity="0.7"
        initial={{ pathLength: 0 }} animate={{ pathLength: 1 }}
        transition={{ duration: 1.2, delay: 1 }}
      />
      <motion.line
        x1="210" y1="60" x2="210" y2="340"
        stroke="#E8DCC9" strokeWidth="1.5" opacity="0.7"
        initial={{ pathLength: 0 }} animate={{ pathLength: 1 }}
        transition={{ duration: 1.2, delay: 1.1 }}
      />
      <motion.line
        x1="290" y1="60" x2="290" y2="340"
        stroke="#E8DCC9" strokeWidth="1.5" opacity="0.7"
        initial={{ pathLength: 0 }} animate={{ pathLength: 1 }}
        transition={{ duration: 1.2, delay: 1.2 }}
      />
      <motion.circle
        cx="210" cy="40" r="6" fill="url(#hero-grad-1)"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 0.85 }}
        transition={{ duration: 0.6, delay: 1.6 }}
      />
    </svg>
  );
}

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
      className="relative overflow-hidden border-b-2 border-border bg-cream pb-16 pt-32 md:pb-24 md:pt-40"
    >
      <div className="absolute left-0 top-0 h-full w-1 bg-gold" aria-hidden="true" />
      <HeroOrnament />

      <div className="relative mx-auto max-w-6xl px-6 md:px-12">
        <div className="max-w-2xl">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-4 text-[12px] font-bold uppercase tracking-[2px] text-gold-dark"
          >
            {t.hero.eyebrow}
          </motion.p>

          <h1 className="mb-6 font-serif text-[38px] font-bold leading-[1.15] text-ink md:text-[56px]">
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
            className="mb-8 max-w-lg text-[15px] leading-[1.8] text-ink-muted md:text-base"
          >
            {t.hero.intro}{" "}
            <span className="font-semibold text-brand">{t.hero.introHighlight}</span>{" "}
            {t.hero.introRest}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.7 }}
            className="mb-14 flex flex-wrap gap-3"
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

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.85 }}
            className="flex flex-wrap gap-x-10 gap-y-4 border-t border-border pt-6"
          >
            {t.hero.stats.map((stat) => (
              <div key={stat.label}>
                <div className="font-serif text-xl font-bold text-ink md:text-2xl">{stat.value}</div>
                <div className="text-[12px] text-ink-soft">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
