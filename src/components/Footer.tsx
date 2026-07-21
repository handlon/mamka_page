import { ArrowUp } from "@phosphor-icons/react";
import { LogoMark } from "./Logo";
import { useLanguage } from "../i18n/LanguageContext";
import { siteConfig } from "../siteConfig";

export function Footer() {
  const { t } = useLanguage();
  const year = new Date().getFullYear();

  return (
    <footer className="bg-charcoal px-6 py-12 text-center text-cream md:px-12">
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-4">
        <LogoMark size={56} />
        <p className="text-sm">
          <strong className="font-serif font-bold">{siteConfig.name}</strong>
          <span className="opacity-70"> · {t.footer.role}</span>
        </p>
        <p className="text-[13px] opacity-70 md:text-xs">{t.footer.location}</p>
        <p className="text-[13px] opacity-70 md:text-xs">
          <a href={`mailto:${siteConfig.email}`} className="cursor-pointer hover:text-gold hover:underline">
            {siteConfig.email}
          </a>
          {" · "}
          <a href={`tel:${siteConfig.phone.replace(/\s+/g, "")}`} className="cursor-pointer hover:text-gold hover:underline">
            {siteConfig.phoneDisplay}
          </a>
        </p>
        <p className="text-[11px] opacity-50">
          © {year} {siteConfig.name}. {t.footer.rights}
        </p>
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="mt-4 inline-flex cursor-pointer items-center gap-1.5 rounded-full border border-cream/20 px-4 py-2 text-[11px] font-medium text-cream/80 transition-colors duration-300 hover:border-gold hover:text-gold"
        >
          <ArrowUp size={14} weight="bold" />
          {t.footer.backToTop}
        </button>
      </div>
    </footer>
  );
}
