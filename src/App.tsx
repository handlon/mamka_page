import { motion, useScroll, useSpring } from "framer-motion";
import { LanguageProvider } from "./i18n/LanguageContext";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Expertise } from "./components/Expertise";
import { Story } from "./components/Story";
import { Approach } from "./components/Approach";
import { References } from "./components/References";
import { FinalCta } from "./components/FinalCta";
import { Footer } from "./components/Footer";

function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

  return (
    <motion.div
      style={{ scaleX }}
      className="fixed left-0 right-0 top-0 z-[70] h-[3px] origin-left bg-gold"
    />
  );
}

function App() {
  return (
    <LanguageProvider>
      <ScrollProgress />
      <Header />
      <main>
        <Hero />
        <Expertise />
        <Story />
        <Approach />
        <References />
        <FinalCta />
      </main>
      <Footer />
    </LanguageProvider>
  );
}

export default App;
