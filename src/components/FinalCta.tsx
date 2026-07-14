import { CalendarCheck, EnvelopeSimple, Phone } from "@phosphor-icons/react";
import { Reveal } from "./Reveal";
import { useLanguage } from "../i18n/LanguageContext";
import { siteConfig } from "../siteConfig";
import { openCalendly } from "../lib/calendly";

export function FinalCta() {
  const { t } = useLanguage();

  return (
    <section id="contact" className="relative overflow-hidden bg-brand py-20 text-cream md:py-28">
      <div
        className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-gold/20 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -bottom-28 -left-16 h-72 w-72 rounded-full bg-cream/10 blur-3xl"
        aria-hidden="true"
      />
      <div className="relative mx-auto max-w-3xl px-6 text-center md:px-12">
        <Reveal>
          <p className="mb-3 text-[12px] font-bold uppercase tracking-[2px] text-gold/90">
            {t.finalCta.label}
          </p>
          <h2 className="mb-3 font-serif text-[30px] font-bold md:text-[38px]">{t.finalCta.title}</h2>
          <p className="mx-auto mb-9 max-w-xl text-[15px] opacity-90">{t.finalCta.subtitle}</p>
        </Reveal>

        <Reveal delay={0.1}>
          <button
            onClick={openCalendly}
            className="group inline-flex cursor-pointer items-center gap-2.5 rounded-full bg-cream px-8 py-4 text-base font-semibold text-brand transition-all duration-300 hover:bg-cream-alt hover:shadow-lift"
          >
            <CalendarCheck size={20} weight="bold" />
            {t.finalCta.bookLabel}
          </button>
        </Reveal>

        <Reveal delay={0.2}>
          <div className="mt-10 flex flex-col items-center gap-4">
            <span className="text-[13px] uppercase tracking-wide text-cream/60">
              {t.finalCta.orLabel}
            </span>
            <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
              <a
                href={`mailto:${siteConfig.email}`}
                className="inline-flex w-full cursor-pointer items-center justify-center gap-2 rounded-full border-2 border-cream/40 px-6 py-2.5 text-sm font-semibold text-cream transition-all duration-300 hover:border-cream/70 hover:bg-cream/10 sm:w-auto"
              >
                <EnvelopeSimple size={18} weight="bold" />
                {t.finalCta.emailLabel}
              </a>
              <a
                href={`tel:${siteConfig.phone.replace(/\s+/g, "")}`}
                className="inline-flex w-full cursor-pointer items-center justify-center gap-2 rounded-full border-2 border-cream/40 px-6 py-2.5 text-sm font-semibold text-cream transition-all duration-300 hover:border-cream/70 hover:bg-cream/10 sm:w-auto"
              >
                <Phone size={18} weight="bold" />
                {t.finalCta.phoneLabel}
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
