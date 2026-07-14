import { Reveal, StaggerGroup, StaggerItem } from "./Reveal";
import { useLanguage } from "../i18n/LanguageContext";

export function Approach() {
  const { t } = useLanguage();

  return (
    <section id="approach" className="bg-paper py-20 md:py-28">
      <div className="mx-auto max-w-5xl px-6 md:px-12">
        <Reveal className="mb-16 text-center md:text-left">
          <p className="mb-2 text-[12px] font-bold uppercase tracking-[1.5px] text-gold-dark">
            {t.approach.label}
          </p>
          <h2 className="font-serif text-[28px] font-bold leading-tight text-ink md:text-[34px]">
            {t.approach.titleLine1} {t.approach.titleLine2}
          </h2>
        </Reveal>

        <StaggerGroup className="relative grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          <div
            className="pointer-events-none absolute left-0 right-0 top-8 hidden h-px bg-border lg:block"
            aria-hidden="true"
          />
          {t.approach.steps.map((step, i) => (
            <StaggerItem key={i}>
              <div className="group relative text-center transition-transform duration-300 hover:-translate-y-1.5 lg:text-left">
                <div className="relative z-10 mb-4 flex justify-center lg:justify-start">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full border-2 border-gold bg-cream font-serif text-2xl font-bold text-gold-dark shadow-sm transition-colors duration-300 group-hover:bg-gold group-hover:text-cream">
                    {String(i + 1).padStart(2, "0")}
                  </div>
                </div>
                <h3 className="mb-2 text-sm font-bold text-ink">{step.title}</h3>
                <p className="mx-auto max-w-[220px] text-xs leading-relaxed text-ink-soft lg:mx-0">
                  {step.description}
                </p>
              </div>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}
