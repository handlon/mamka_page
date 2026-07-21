export interface Translation {
  meta: { title: string };
  nav: {
    expertise: string;
    story: string;
    approach: string;
    references: string;
    contact: string;
    cta: string;
  };
  hero: {
    eyebrow: string;
    titleLine1: string;
    titleLine2: string;
    intro: string;
    introHighlight: string;
    introRest: string;
    ctaPrimary: string;
    ctaSecondary: string;
    stats: { value: string; label: string }[];
  };
  expertise: {
    label: string;
    titleLine1: string;
    titleLine2: string;
    items: { title: string; description: string }[];
  };
  story: {
    imagePlaceholder: string;
    titleLine1: string;
    titleLine2: string;
    paragraph1: string;
    paragraph2: string;
    highlights: string[];
    closing: string;
  };
  approach: {
    label: string;
    titleLine1: string;
    titleLine2: string;
    steps: { title: string; description: string }[];
  };
  references: {
    label: string;
    titleLine1: string;
    titleLine2: string;
    readMore: string;
    readLess: string;
    items: { quote: string; name: string; role: string }[];
  };
  finalCta: {
    label: string;
    title: string;
    subtitle: string;
    bookLabel: string;
    orLabel: string;
    emailLabel: string;
    phoneLabel: string;
  };
  footer: {
    role: string;
    location: string;
    rights: string;
    backToTop: string;
  };
}

// The site is currently Czech-only. The English translation is kept below in a
// commented-out block (see "ENGLISH VERSION" at the bottom of this file) and is
// updated to match the Czech copy. To re-enable language switching:
//   1. Uncomment the `en` block and move it back inside `translations`.
//   2. Change the type to Record<"cs" | "en", Translation>.
//   3. Restore locale state in LanguageContext.tsx and the toggle in Header.tsx.
export const translations: Record<"cs", Translation> = {
  cs: {
    meta: {
      title: "Lenka Handlíková – CFO služby pro české firmy",
    },
    nav: {
      expertise: "Expertíza",
      story: "O mně",
      approach: "Přístup",
      references: "Reference",
      contact: "Kontakt",
      cta: "Domluvit konzultaci",
    },
    hero: {
      eyebrow: "Externí CFO",
      titleLine1: "Finanční řešení,",
      titleLine2: "která opravdu fungují",
      intro:
        "20+ let ve Škoda Auto a VW koncernových společnostech. Od roku 2022 pracuji s českými malými a středními firmami",
      introHighlight: "zavádím finanční řízení, optimalizuji procesy",
      introRest:
        "a rychle se zorientuji i mimo finance: nákup a dodavatelé, cenotvorba, HR. Praktický přístup – žádné teoretické poradenství.",
      ctaPrimary: "Chcete konzultaci?",
      ctaSecondary: "Zjistit víc",
      stats: [
        { value: "20+", label: "let praxe ve financích" },
        { value: "Škoda Auto", label: "a další velké společnosti" },
        { value: "100%", label: "praktický přístup" },
      ],
    },
    expertise: {
      label: "Čemu rozumím",
      titleLine1: "Praxe z velkých projektů",
      titleLine2: "aplikovaná na vaši firmu",
      items: [
          {
          title: "Reporting & controlling",
          description:
            "Optimalizace účetní osnovy. Dashboardy v češtině. Data, která vedení firmy opravdu chce vidět.",
        },
        {
          title: "ERP implementace",
          description:
            "Nasazení a optimalizace finančních modulů ERP. Procesy, které opravdu fungují.",
        },

        {
          title: "Finanční strategie",
          description:
            "Plánování růstu a cashflow. Analýzy, které vedou ke konkrétním rozhodnutím.",
        },
      ],
    },
    story: {
      imagePlaceholder: "Vaše fotka",
      titleLine1: "Proč jsem si zvolila",
      titleLine2: "cestu externí CFO",
      paragraph1:
        "Strávila jsem 20 let v automobilovém průmyslu. Začínala jsem jako analytička, postupně profesně rostla až do managementu firmy Škoda Auto a zároveň na jednatele dceřiných společností. Velké projekty, rozpočty v miliardách, komplexní procesy – škola, která se nedá ničím nahradit.",
      paragraph2:
        "Pak jsem ale zjistila, že už nemám kam růst ani co nového se učit. A chtěla jsem svoje zkušenosti předávat tam, kde mají skutečný dopad: menším českým firmám, které si nemůžou dovolit vlastního CFO – ale potřebují ho úplně stejně.",
      highlights: [
        "Pracuji s českými firmami, kterým rozumím",
        "Nejsem jen poradce – jsem partner v řešení",
        "Fokus na praxi, ne na teoretická slova",
      ],
      closing:
        "Dnes pomáhám firmám, které nemají interní CFO, ale jeho služby potřebují. Aby se neztrácely v číslech a mohly se soustředit na růst.",
    },
    approach: {
      label: "Jak pracuji",
      titleLine1: "Čtyři kroky",
      titleLine2: "k řešení",
      steps: [
        {
          title: "Poslechnout",
          description: "Co vás trápí. Co není jasné. Co chcete dosáhnout.",
        },
        {
          title: "Analyzovat",
          description: "Proces, data, současný stav. Bez emocí. Jen fakta.",
        },
        {
          title: "Navrhnout",
          description: "Řešení, která se dají opravdu implementovat. Realistická.",
        },
        {
          title: "Realizovat",
          description: "Pomáhám vám uvést řešení do praxe. Nejde o teorii.",
        },
      ],
    },
    references: {
      label: "Reference",
      titleLine1: "Co říkají firmy,",
      titleLine2: "se kterými jsem pracovala",
      readMore: "Číst více",
      readLess: "Číst méně",
      items: [
        {
          quote:
            "Kéž by spolupráce se všemi byla jako s Lenkou. Efektivní, nápomocná a zároveň lidská. Na otázky dostanete jasné odpovědi. Pokud žádáte o radu, dostanete ji včetně možností a to se všemi dopady. Na naší spolupráci jsem oceňovala rychlost s jakou dokázala reagovat bez toho, aniž by utrpěla kvalita výstupů. Další ze schopností, kterou jsem kvitovala, byla schopnost mluvit jazykem, kterému dokáže porozumět i nefinanční člověk. V neposlední řadě se Lenka ukázala i jako dobrý učitel a parťák, naše spolupráce byla na bázi konzultací, finanční tým jí po velmi krátké době označil jako někoho, pod kým by chtěli růst.",
          name: "Jitka Porazilová",
          role: "Etnetera Group",
        },
        {
          quote:
            "Dohoda o spolupráci s Lenkou, před 2,5 lety, byla asi to nejlepší, co jsme mohli pro naši firmu udělat.Firma vyrostla z malého živnostníka na 17 poboček a bylo potřeba najít člověka, který má chuť si doslova s námi vyhrnout rukávy a stavět celou organizaci firmy od píky. Měli jsme to štěstí, že jsme narazili na někoho, tak komplexního jako je Lenka, protože na to penzum práce, na které jsme jí využili, by jinde poptávali 3.Lenka se stala mojí pravou rukou a pomohla mi nejen v oblasti financí, kde vystavěla celý reporting od nuly, zavedla controlling a finanční řízení firmy přes čísla, zastřešila komunikaci mezi účetním a naší firmou, ale také jsme jí využili pro komplexní nastavení celofiremních procesů včetně přechodu na nový ERP systém. Byla mi oporou také v rozvoji businessu, kde se aktivně účastnila vyjednávání s dodavateli o podmínkách spolupráce, řešila se mnou nákladovou efektivitu a vyjednávání se všemi články řetězu o úsporách. Využili jsme ji také na HR témata, kde nejdřív nastavila nový systém odměňování zaměstnanců, nábory na administrativní pozice, personální a hodnotící pohovory a pokud byla potřeba mediace, tak za mě v této oblasti opravdu vyniká. Má neuvěřitelný talent se nacítit nejen do situace, ale i do lidí a následně konstruktivně shrnout body a dovést lidi k řešení. Lenka je za mě ideál manažera a má dar vést a rozvíjet lidi. Je vždy vstřícná, při problémech si zachovává chladnou hlavu a hledá optimální řešení a díky otevřené komunikaci k ní lidé mají důvěru a přicházejí k ní i s problémy, které by jinde nepřiznali. Vede to k velmi zdravé firemní kultuře, která je nyní, díky ní, i u nás. Velmi si jí vážím i po lidské stránce, protože je charakterní, laskavá a spravedlivá. Je mi velkou ctí s ní spolupracovat",
          name: "Petra Steyrerová",
          role: "Obuv Zóna",
        },

        {
          quote:
            "Lenka pro nás dělá finanční management. Je fakt úžasná! Nejenže má skvělé znalosti a zkušenosti, ale taky umí najít řešení, která opravdu fungují. A co je nejlepší, dokáže to vysvětlit tak, že tomu rozumí každý. Její přístup je profesionální, ale zároveň velmi přátelský. Opravdu si s ní rozumíme a jsme s ní maximálně spokojeni. Lenka, je pro nás prostě nepostradatelná, díky",
          name: "Marian Pavlik",
          role: "CEO Green Code",
        },
      ],
    },
    finalCta: {
      label: "Kontakt",
      title: "Domluvme si konzultaci",
      subtitle:
        "Rezervujte si termín online. Konzultace je nezávazná a odpovím vám osobně.",
      bookLabel: "Rezervovat termín",
      orLabel: "nebo mě kontaktujte přímo",
      emailLabel: "Napsat email",
      phoneLabel: "Zavolat",
    },
    footer: {
      role: "Externí CFO",
      location: "Mladá Boleslav, Česká republika",
      rights: "Všechna práva vyhrazena.",
      backToTop: "Nahoru",
    },
  },
};

export type Locale = keyof typeof translations;

/* ==========================================================================
 * ENGLISH VERSION — currently DISABLED (site is Czech-only).
 * Kept in sync with the Czech copy above. To re-enable, see the instructions
 * near the top of this file, then paste this object back in as `en:`.
 * --------------------------------------------------------------------------
 *
 * en: {
 *   meta: {
 *     title: "Lenka Handlíková – CFO services for Czech businesses",
 *   },
 *   nav: {
 *     expertise: "Expertise",
 *     story: "About",
 *     approach: "Approach",
 *     references: "References",
 *     contact: "Contact",
 *     cta: "Book a consultation",
 *   },
 *   hero: {
 *     eyebrow: "Fractional CFO",
 *     titleLine1: "Financial solutions,",
 *     titleLine2: "that actually work",
 *     intro:
 *       "20+ years at Škoda Auto and other VW Group companies. Since 2022 I've worked with Czech",
 *     introHighlight: "small and mid-sized businesses",
 *     introRest:
 *       "setting up financial management, optimizing processes, and quickly getting up to speed beyond finance too: purchasing and suppliers, pricing, HR. A practical approach – no theoretical consulting.",
 *     ctaPrimary: "Want a consultation?",
 *     ctaSecondary: "Learn more",
 *     stats: [
 *       { value: "20+", label: "years in finance" },
 *       { value: "Škoda Auto", label: "and other major companies" },
 *       { value: "100%", label: "hands-on approach" },
 *     ],
 *   },
 *   expertise: {
 *     label: "What I understand",
 *     titleLine1: "Experience from major projects,",
 *     titleLine2: "applied to your business",
 *     items: [
 *       {
 *         title: "Reporting & controlling",
 *         description:
 *           "Optimizing the chart of accounts. Clear dashboards in Czech. The data your management actually wants to see.",
 *       },
 *       {
 *         title: "ERP implementation",
 *         description:
 *           "Deployment and optimization of ERP finance modules. Processes that actually work.",
 *       },
 *       {
 *         title: "Financial strategy",
 *         description:
 *           "Growth and cashflow planning. Analysis that leads to concrete decisions.",
 *       },
 *     ],
 *   },
 *   story: {
 *     imagePlaceholder: "Your photo",
 *     titleLine1: "Why I chose",
 *     titleLine2: "the fractional CFO path",
 *     paragraph1:
 *       "I spent 20 years in the automotive industry. I started as an analyst and gradually worked my way up into Škoda Auto's management, while also serving as a managing director of subsidiary companies. Large-scale projects, budgets in the billions, complex processes – an education nothing can replace.",
 *     paragraph2:
 *       "Then I realized there was nowhere left to grow and nothing new to learn. I wanted to pass my experience on where it makes a real difference: to smaller Czech companies that can't afford a CFO of their own – but need one just as much.",
 *     highlights: [
 *       "I work with Czech companies I truly understand",
 *       "I'm not just an advisor – I'm a partner in the solution",
 *       "Focused on practice, not theoretical talk",
 *     ],
 *     closing:
 *       "Today I help companies that don't have an in-house CFO but need one's services – so they don't get lost in the numbers and can focus on growth.",
 *   },
 *   approach: {
 *     label: "How I work",
 *     titleLine1: "Four steps",
 *     titleLine2: "to a solution",
 *     steps: [
 *       {
 *         title: "Listen",
 *         description: "What's troubling you. What's unclear. What you want to achieve.",
 *       },
 *       {
 *         title: "Analyze",
 *         description: "Process, data, current state. No emotions. Just facts.",
 *       },
 *       {
 *         title: "Propose",
 *         description: "Solutions that can actually be implemented. Realistic ones.",
 *       },
 *       {
 *         title: "Deliver",
 *         description: "I help you put the solution into practice. This isn't theory.",
 *       },
 *     ],
 *   },
 *   references: {
 *     label: "References",
 *     titleLine1: "What the companies",
 *     titleLine2: "I've worked with say",
 *     readMore: "Read more",
 *     readLess: "Read less",
 *     items: [
 *       {
 *         quote:
 *           "I wish working with everyone were like working with Lenka. Efficient, helpful, and human at the same time. You get clear answers to your questions. If you ask for advice, you get it – along with the options and all their implications. What I valued in our collaboration was the speed with which she could respond without any drop in the quality of her work. Another skill I appreciated was her ability to speak in a language that even a non-finance person can understand. Last but not least, Lenka proved to be a great teacher and teammate; our collaboration was consultation-based, and after a very short time the finance team named her as someone they'd want to grow under.",
 *         name: "Jitka Porazilová",
 *         role: "People first!",
 *       },
 *       {
 *         quote:
 *           "Agreeing to work with Lenka 2.5 years ago was probably the best thing we could have done for our company. The business grew from a one-person operation into 17 branches, and we needed someone genuinely willing to roll up their sleeves with us and build the entire organization from the ground up. We were lucky to come across someone as versatile as Lenka, because the volume of work we used her for would take three people elsewhere. Lenka became my right hand and helped me not only in finance – where she built our whole reporting from scratch, introduced controlling and number-driven financial management, and took over communication between our accountant and the company – but we also used her for a complete setup of company-wide processes, including the transition to a new ERP system. She also supported us in developing the business, actively taking part in negotiations with suppliers over terms, working with me on cost efficiency, and negotiating savings with every link in the chain. We used her for HR topics too, where she first set up a new employee compensation system, recruitment for administrative positions, personnel and performance reviews – and whenever mediation was needed, she truly excels in that area. She has an incredible talent for tuning in not only to a situation but to people, and then constructively summarizing the key points and guiding people to a solution. For me, Lenka is the ideal manager and has a gift for leading and developing people. She is always accommodating, keeps a cool head when problems arise, looks for the optimal solution, and thanks to her open communication people trust her and come to her even with problems they wouldn't admit elsewhere. It leads to a very healthy company culture, which we now have too, thanks to her. I value her greatly as a person as well, because she has integrity and is kind and fair. It is a great honor to work with her.",
 *         name: "Petra Steyrerová Machytková",
 *         role: "Owner of retail chain Obuv Zóna",
 *       },
 *       {
 *         quote:
 *           "Lenka handles financial management for us. She's truly amazing! Not only does she have excellent knowledge and experience, she also finds solutions that really work. And best of all, she can explain it so that everyone understands. Her approach is professional yet very friendly at the same time. We genuinely get along with her and couldn't be more satisfied. Lenka is simply indispensable to us – thank you.",
 *         name: "Marian Pavlik",
 *         role: "Innovation mindset creates innovation culture",
 *       },
 *     ],
 *   },
 *   finalCta: {
 *     label: "Contact",
 *     title: "Let's book a consultation",
 *     subtitle:
 *       "Book a time online. The consultation is non-binding and I'll reply personally.",
 *     bookLabel: "Book a time",
 *     orLabel: "or contact me directly",
 *     emailLabel: "Send an email",
 *     phoneLabel: "Call me",
 *   },
 *   footer: {
 *     role: "Fractional CFO",
 *     location: "Mladá Boleslav, Czech Republic",
 *     rights: "All rights reserved.",
 *     backToTop: "Back to top",
 *   },
 * },
 *
 * ======================================================================== */
