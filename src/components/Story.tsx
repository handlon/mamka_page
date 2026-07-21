import { User, CheckCircle } from "@phosphor-icons/react";
import { Reveal } from "./Reveal";
import { useLanguage } from "../i18n/LanguageContext";

export function Story() {
  const { t } = useLanguage();

  return (
    <section id="story" className="relative bg-cream py-14 md:py-28">
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 px-6 md:grid-cols-2 md:gap-16 md:px-12">
        <Reveal y={0} className="order-2 md:order-1">
          <div className="relative">
            <div
              className="absolute -bottom-4 -right-4 h-full w-full rounded-sm border-2 border-gold/50 md:-bottom-6 md:-right-6"
              aria-hidden="true"
            />
            <div className="relative flex aspect-[4/5] w-full flex-col items-center justify-center gap-3 rounded-sm border border-dashed border-brand/40 bg-cream-alt p-6 text-center">
              <User size={40} weight="thin" className="text-brand/60" />
              <span className="text-[13px] font-medium text-ink-soft">
                {t.story.imagePlaceholder}
              </span>
            </div>
          </div>
        </Reveal>

        <div className="order-1 md:order-2">
          <Reveal>
            <h2 className="mb-6 font-serif text-[24px] font-bold leading-[1.3] text-ink md:text-[32px]">
              {t.story.titleLine1}
              <br />
              {t.story.titleLine2}
            </h2>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="mb-4 text-[15px] leading-[1.8] text-ink-muted md:text-[14px]">{t.story.paragraph1}</p>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="mb-6 text-[15px] leading-[1.8] text-ink-muted md:text-[14px]">{t.story.paragraph2}</p>
          </Reveal>

          <Reveal delay={0.2}>
            <ul className="mb-6 space-y-3 rounded-sm border-l-[3px] border-gold bg-paper p-5">
              {t.story.highlights.map((highlight) => (
                <li key={highlight} className="flex items-start gap-2.5 text-[14px] font-medium text-ink md:text-[13px]">
                  <CheckCircle size={18} weight="fill" className="mt-0.5 shrink-0 text-gold-dark" />
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={0.25}>
            <p className="text-[15px] font-semibold leading-[1.8] text-ink md:text-[14px]">{t.story.closing}</p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
