import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { List, X } from "@phosphor-icons/react";
import { LogoMark } from "./Logo";
import { useLanguage } from "../i18n/LanguageContext";
import { openCalendly } from "../lib/calendly";

const SECTION_IDS = ["expertise", "story", "approach", "references", "contact"] as const;

export function Header() {
  const { t, locale, toggleLocale } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 }
    );
    SECTION_IDS.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const navItems = [
    { id: "expertise", label: t.nav.expertise },
    { id: "story", label: t.nav.story },
    { id: "approach", label: t.nav.approach },
    { id: "references", label: t.nav.references },
    { id: "contact", label: t.nav.contact },
  ];

  const scrollToId = (id: string) => {
    setMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const handleBook = () => {
    setMenuOpen(false);
    openCalendly();
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? "bg-cream/90 backdrop-blur-md border-b border-border shadow-soft" : "bg-transparent border-b border-transparent"
        }`}
      >
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 md:px-12">
          <button
            onClick={() => scrollToId("home")}
            className="flex items-center gap-3 cursor-pointer"
            aria-label={locale === "cs" ? "Přejít na začátek stránky" : "Go to top of page"}
          >
            <LogoMark size={40} />
            <span className="hidden text-xs font-semibold tracking-wide text-ink sm:inline">
              LENKA HANDLÍKOVÁ
            </span>
          </button>

          <nav className="hidden items-center gap-6 lg:flex xl:gap-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToId(item.id)}
                className={`cursor-pointer border-b-2 pb-0.5 text-[13px] font-medium transition-colors duration-300 ${
                  activeSection === item.id
                    ? "border-gold text-ink"
                    : "border-transparent text-ink hover:border-gold/60"
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <button
              onClick={toggleLocale}
              className="cursor-pointer rounded-full border border-border px-3 py-1.5 text-[12px] font-semibold tracking-wide text-ink transition-colors hover:border-gold hover:text-gold-dark"
              aria-label="Switch language"
            >
              {locale === "cs" ? "EN" : "CS"}
            </button>
            <button
              onClick={handleBook}
              className="hidden cursor-pointer rounded-full bg-brand px-5 py-2 text-[13px] font-semibold text-cream transition-colors duration-300 hover:bg-brand-dark lg:inline-block"
            >
              {t.nav.cta}
            </button>
            <button
              onClick={() => setMenuOpen(true)}
              className="cursor-pointer rounded-full p-2 text-ink lg:hidden"
              aria-label="Open menu"
            >
              <List size={24} weight="regular" />
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[60] bg-cream lg:hidden"
          >
            <div className="flex items-center justify-between px-6 py-4">
              <div className="flex items-center gap-3">
                <LogoMark size={36} />
              </div>
              <button
                onClick={() => setMenuOpen(false)}
                className="cursor-pointer rounded-full p-2 text-ink"
                aria-label="Close menu"
              >
                <X size={26} />
              </button>
            </div>
            <motion.nav
              className="flex flex-col items-start gap-2 px-8 pt-8"
              initial="hidden"
              animate="visible"
              variants={{ visible: { transition: { staggerChildren: 0.06 } } }}
            >
              {navItems.map((item) => (
                <motion.button
                  key={item.id}
                  variants={{ hidden: { opacity: 0, x: -16 }, visible: { opacity: 1, x: 0 } }}
                  onClick={() => scrollToId(item.id)}
                  className="cursor-pointer py-3 font-serif text-3xl text-ink"
                >
                  {item.label}
                </motion.button>
              ))}
              <motion.button
                variants={{ hidden: { opacity: 0, x: -16 }, visible: { opacity: 1, x: 0 } }}
                onClick={handleBook}
                className="mt-6 cursor-pointer rounded-full bg-brand px-6 py-3 text-sm font-semibold text-cream"
              >
                {t.nav.cta}
              </motion.button>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
