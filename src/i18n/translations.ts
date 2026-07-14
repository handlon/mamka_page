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

export const translations: Record<"cs" | "en", Translation> = {
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
        "20+ let ve Škoda Auto a dalších velkých společnostech. Nyní pracuji s českými",
      introHighlight: "malými a středními firmami",
      introRest:
        "na implementaci finančních systémů, optimalizaci procesů a strategickém plánování. Praktický přístup – žádné teoretické poradenství.",
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
          title: "Česká účetnictví & DPH",
          description:
            "Optimalizace účetní struktury a DPH agendy. Rozumím komplexnosti českého systému.",
        },
        {
          title: "Odoo implementace",
          description:
            "Nasazení a optimalizace finančních modulů ERP. Procesy, které opravdu fungují.",
        },
        {
          title: "Reporting & controlling",
          description:
            "Dashboardy v češtině. Data, která vedení firmy opravdu chce vidět.",
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
        "Strávila jsem 20 let v automobilovém průmyslu. Byla jsem analytička, vedoucí týmu, senior manažerka. Milovala jsem to – velké projekty, rozpočty v miliardách, komplexní procesy.",
      paragraph2:
        "Pak jsem si uvědomila, že chci něco jiného. Kvalitu života. Čas na rodinu. Možnost vybírat si projekty, které mě opravdu zajímají.",
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
          description: "Řešení, která se dají opravdu implementovat. Realistické.",
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
      // TODO: replace with real recommendations from Lenka's LinkedIn profile.
      items: [
        {
          quote:
            "Lenka nám pomohla nastavit reporting a controlling od základů. Poprvé jsme měli čísla, kterým vedení opravdu rozumělo a mohlo podle nich rozhodovat.",
          name: "Jméno Příjmení",
          role: "Jednatel, výrobní firma",
        },
        {
          quote:
            "Praktický přístup bez zbytečné teorie. Implementaci Odoo dotáhla do konce a procesy skutečně fungují. Doporučuji každé rostoucí firmě.",
          name: "Jméno Příjmení",
          role: "Finanční ředitel, SME",
        },
        {
          quote:
            "Spolehlivá partnerka, která rozumí českému prostředí i velkým korporátním standardům. Ušetřila nám spoustu času i nákladů.",
          name: "Jméno Příjmení",
          role: "Majitelka, obchodní společnost",
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
  en: {
    meta: {
      title: "Lenka Handlíková – CFO services for Czech businesses",
    },
    nav: {
      expertise: "Expertise",
      story: "About",
      approach: "Approach",
      references: "References",
      contact: "Contact",
      cta: "Book a consultation",
    },
    hero: {
      eyebrow: "Fractional CFO",
      titleLine1: "Financial solutions",
      titleLine2: "that actually work",
      intro:
        "20+ years at Škoda Auto and other large corporations. I now work with Czech",
      introHighlight: "small and mid-sized businesses",
      introRest:
        "on financial system implementation, process optimization, and strategic planning. A practical approach – no theoretical consulting.",
      ctaPrimary: "Book a consultation",
      ctaSecondary: "Learn more",
      stats: [
        { value: "20+", label: "years in finance" },
        { value: "Škoda Auto", label: "and other major companies" },
        { value: "100%", label: "hands-on approach" },
      ],
    },
    expertise: {
      label: "What I understand",
      titleLine1: "Corporate-grade experience,",
      titleLine2: "applied to your business",
      items: [
        {
          title: "Czech accounting & VAT",
          description:
            "Optimizing accounting structure and VAT compliance. I understand the complexity of the Czech system.",
        },
        {
          title: "Odoo implementation",
          description:
            "Deployment and optimization of ERP finance modules. Processes that actually work.",
        },
        {
          title: "Reporting & controlling",
          description:
            "Dashboards that speak your language. Data that management actually wants to see.",
        },
        {
          title: "Financial strategy",
          description:
            "Growth and cashflow planning. Analysis that leads to concrete decisions.",
        },
      ],
    },
    story: {
      imagePlaceholder: "Your photo",
      titleLine1: "Why I chose the",
      titleLine2: "fractional CFO path",
      paragraph1:
        "I spent 20 years in the automotive industry. I was an analyst, a team lead, a senior manager. I loved it – large-scale projects, billion-crown budgets, complex processes.",
      paragraph2:
        "Then I realized I wanted something different. Quality of life. Time for family. The freedom to choose projects that genuinely interest me.",
      highlights: [
        "I work with Czech businesses I truly understand",
        "I'm not just an advisor – I'm a partner in the solution",
        "Focus on practice, not theoretical talk",
      ],
      closing:
        "Today I help companies who don't have an in-house CFO but need one's expertise – so they don't get lost in the numbers and can focus on growth.",
    },
    approach: {
      label: "How I work",
      titleLine1: "Four steps",
      titleLine2: "to a solution",
      steps: [
        {
          title: "Listen",
          description: "What's troubling you. What's unclear. What you want to achieve.",
        },
        {
          title: "Analyze",
          description: "Process, data, current state. No emotions. Just facts.",
        },
        {
          title: "Propose",
          description: "Solutions that can actually be implemented. Realistic ones.",
        },
        {
          title: "Deliver",
          description: "I help you put it into practice. This isn't theory.",
        },
      ],
    },
    references: {
      label: "References",
      titleLine1: "What the businesses",
      titleLine2: "I've worked with say",
      // TODO: replace with real recommendations from Lenka's LinkedIn profile.
      items: [
        {
          quote:
            "Lenka helped us build reporting and controlling from the ground up. For the first time, management had numbers they actually understood and could act on.",
          name: "Name Surname",
          role: "Managing Director, manufacturing",
        },
        {
          quote:
            "A practical approach with no unnecessary theory. She saw the Odoo implementation through to the end, and the processes genuinely work. I recommend her to any growing company.",
          name: "Name Surname",
          role: "Finance Director, SME",
        },
        {
          quote:
            "A reliable partner who understands both the Czech environment and large corporate standards. She saved us a great deal of time and cost.",
          name: "Name Surname",
          role: "Owner, trading company",
        },
      ],
    },
    finalCta: {
      label: "Contact",
      title: "Let's book a consultation",
      subtitle:
        "Book a time online. The consultation is non-binding and I'll respond to you personally.",
      bookLabel: "Book a time",
      orLabel: "or reach me directly",
      emailLabel: "Send an email",
      phoneLabel: "Call me",
    },
    footer: {
      role: "Fractional CFO",
      location: "Mladá Boleslav, Czech Republic",
      rights: "All rights reserved.",
      backToTop: "Back to top",
    },
  },
};

export type Locale = keyof typeof translations;
