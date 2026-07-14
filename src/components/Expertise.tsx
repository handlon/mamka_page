import { Receipt, PuzzlePiece, ChartLineUp, Compass } from "@phosphor-icons/react";
import { Reveal, StaggerGroup, StaggerItem } from "./Reveal";
import { useLanguage } from "../i18n/LanguageContext";

const icons = [Receipt, PuzzlePiece, ChartLineUp, Compass];

export function Expertise() {
  const { t } = useLanguage();

  return (
    <section id="expertise" className="bg-paper py-20 md:py-28">
      <div className="mx-auto max-w-5xl px-6 md:px-12">
        <Reveal className="mb-14">
          <p className="mb-2 text-[12px] font-bold uppercase tracking-[1.5px] text-gold-dark">
            {t.expertise.label}
          </p>
          <h2 className="font-serif text-[28px] font-bold leading-tight text-ink md:text-[34px]">
            {t.expertise.titleLine1}
            <br />
            {t.expertise.titleLine2}
          </h2>
        </Reveal>

        <StaggerGroup className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          {t.expertise.items.map((item, i) => {
            const Icon = icons[i];
            return (
              <StaggerItem key={item.title}>
                <div className="group h-full rounded-sm border-l-[3px] border-gold bg-cream p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-soft md:p-7">
                  <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-full bg-cream-alt text-brand transition-colors duration-300 group-hover:bg-brand group-hover:text-cream">
                    <Icon size={22} weight="regular" />
                  </div>
                  <h3 className="mb-2 font-serif text-base font-bold text-ink md:text-lg">
                    {item.title}
                  </h3>
                  <p className="text-[13px] leading-relaxed text-ink-muted md:text-sm">
                    {item.description}
                  </p>
                </div>
              </StaggerItem>
            );
          })}
        </StaggerGroup>
      </div>
    </section>
  );
}
