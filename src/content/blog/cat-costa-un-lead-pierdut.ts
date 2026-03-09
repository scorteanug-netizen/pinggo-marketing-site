export type NisaKey = "clinica" | "solar" | "imobiliare" | "custom";

export type NisaDefaults = {
  leads: number;
  responseRate: number;
  conversion: number;
  clientValue: number;
};

export type NisaCardContent = {
  key: Exclude<NisaKey, "custom">;
  heading: string;
  tableHeaders: string[];
  tableRows: string[][];
  scenario: string;
  calculationLabel: string;
  calculationResult: string;
  annualImpact?: string;
};

export type FAQItem = {
  question: string;
  answer: string;
};

export const articleMetadata = {
  title: "Cât costă un lead pierdut? Calculul pe care niciun owner din România nu vrea să-l facă",
  slug: "cat-costa-un-lead-pierdut",
  date: "2026-03-01",
  publishedAtIso: "2026-03-01T09:00:00+02:00",
  author: "Echipa Pinggo",
  description:
    "Un lead pierdut înseamnă bani aruncați pe reclamă. Calculează exact cât pierde afacerea ta pe lună când nu răspunzi în timp util pe WhatsApp. Date reale pentru clinici, solar și imobiliare.",
  tags: ["leaduri", "cost per lead", "WhatsApp", "clinici", "solar", "imobiliare"],
  readingTime: "11 min",
  canonicalUrl: "https://pinggo.ro/blog/cat-costa-un-lead-pierdut",
  ogImage: "https://pinggo.ro/og/cat-costa-un-lead-pierdut.png",
} as const;

export const defaultsByNisa: Record<NisaKey, NisaDefaults> = {
  clinica: { leads: 100, responseRate: 30, conversion: 30, clientValue: 1200 },
  solar: { leads: 50, responseRate: 35, conversion: 20, clientValue: 30000 },
  imobiliare: { leads: 80, responseRate: 25, conversion: 25, clientValue: 5000 },
  custom: { leads: 50, responseRate: 30, conversion: 25, clientValue: 2000 },
};

export const tocItems = [
  { id: "ce-este-un-lead-pierdut", title: "Ce este un lead pierdut?" },
  { id: "formula-de-calcul", title: "Formula de calcul a unui lead pierdut" },
  { id: "calculul-pe-nise", title: "Calculul pe nișe — cât pierzi concret" },
  { id: "de-ce-raspundem-tarziu", title: "De ce răspundem târziu? (Adevărul incomod)" },
  { id: "date-globale", title: "Ce spun datele globale despre viteza de răspuns" },
  { id: "calculator-pierderi", title: "Calculatorul de pierderi — calculează acum pentru afacerea ta" },
  { id: "raspuns-in-15-secunde", title: "Ce face diferența: răspunsul în primele 15 secunde" },
  { id: "intrebari-frecvente", title: "Întrebări frecvente" },
  { id: "concluzie", title: "Concluzie" },
] as const;

export const introParagraphs = [
  "Ai plătit pentru reclamă. Lead-ul a venit. Și nimeni nu a răspuns la timp.",
  "Sună familiar? Dacă da, nu ești singurul. Conform unui studiu Harvard Business Review, companiile care răspund la un lead în primele 5 minute au de 9 ori mai multe șanse să-l convertească față de cele care răspund după o oră.",
  "În România, unde WhatsApp a devenit canalul principal de comunicare cu potențialii clienți, un răspuns lent nu înseamnă o șansă ratată. Înseamnă un client care a semnat cu concurentul tău.",
  "Dar cât costă exact un lead pierdut? Hai să facem calculul.",
];

export const sectionCeEsteLeadPierdut = [
  "Un lead pierdut este orice potențial client care a luat contact cu afacerea ta și nu a primit un răspuns suficient de rapid sau de relevant ca să rămână în procesul de vânzare.",
  "Aici intră atât leadurile fără răspuns, cât și leadurile care primesc un răspuns după 4-6 ore, când decizia este deja luată în favoarea altui furnizor.",
];

export const formulaVariables = [
  "Costul de achiziție al unui lead (CPL) — cât ai plătit ca acel om să ajungă la tine",
  "Rata de conversie lead → client — ce procent din leads devin clienți plătitori",
  "Valoarea medie a unui client (LTV) — cât câștigă afacerea ta dintr-un client, în medie",
];

export const formulaCore = {
  leadsLost: "Leads pierdute/lună = Total leads × % care nu primesc răspuns în 15 min",
  revenueLost: "Venituri pierdute/lună = Leads pierdute × Rată conversie × Valoare medie client",
};

export const nisaCards: NisaCardContent[] = [
  {
    key: "clinica",
    heading: "🦷 Clinică dentară sau medicală privată",
    tableHeaders: ["Variabilă", "Valoare estimată"],
    tableRows: [
      ["Cost per lead (Facebook/Google Ads)", "30–60 RON"],
      ["Rată conversie lead → programare", "25–40%"],
      ["Valoarea medie pacient nou", "800–2.500 RON"],
      ["Leads primite per lună", "80–150"],
    ],
    scenario:
      "O clinică dentară din București cheltuiește 3.000 RON/lună pe reclame și primește 100 de leads. Dacă 30% nu primesc răspuns în prima oră, rezultă 30 de leads pierdute.",
    calculationLabel: "30 leads × 30% conversie × 1.200 RON",
    calculationResult: "10.800 RON pierduți lunar",
    annualImpact: "129.600 RON pe an din leads deja plătite",
  },
  {
    key: "solar",
    heading: "☀️ Companie solar / instalări Casa Verde",
    tableHeaders: ["Variabilă", "Valoare estimată"],
    tableRows: [
      ["Cost per lead calificat", "80–200 RON"],
      ["Rată conversie lead → contract", "15–25%"],
      ["Valoarea medie contract", "25.000–40.000 RON"],
      ["Leads primite per lună", "40–80"],
    ],
    scenario:
      "O companie solar primește 50 de leads pe lună. Echipa răspunde la WhatsApp în medie după 3-4 ore, iar leadurile din afara programului sunt preluate abia a doua zi.",
    calculationLabel: "17 leads reci × 20% conversie × 30.000 RON",
    calculationResult: "102.000 RON venituri ratate/lună",
    annualImpact: "fără a include costul de achiziție al acelor leaduri",
  },
  {
    key: "imobiliare",
    heading: "🏠 Agenție imobiliară",
    tableHeaders: ["Variabilă", "Valoare estimată"],
    tableRows: [
      ["Cost per lead", "50–150 RON"],
      ["Rată conversie lead → vizionare", "20–35%"],
      ["Comision mediu per tranzacție", "3.000–8.000 EUR"],
      ["Leads primite per lună", "60–120"],
    ],
    scenario:
      "Un client care caută apartament decide repede. Dacă agentul responsabil este într-o vizionare, iar lead-ul nu primește răspuns 2 ore, șansele de conversie scad puternic.",
    calculationLabel: "Lead-uri întârziate >2h",
    calculationResult: "scădere de peste 60% a șanselor de conversie",
  },
];

export const sectionDeCeTarziuParagraphs = [
  "Nu e vorba de lene. E vorba de sistem.",
  "Scenariul tipic: lead-ul vine pe WhatsApp-ul firmei. Agentul 1 îl vede dar crede că îl preia agentul 2. Agentul 2 nu știe că lead-ul a venit. Managerul află a doua zi, iar lead-ul a semnat deja cu altcineva.",
  "Sau lead-ul vine la 18:30, când programul s-a terminat. Dimineața, mesajul este îngropat în conversațiile noi.",
];

export const problemePrincipale = [
  "Fără sistem de notificare clară — toată lumea vede, nimeni nu preia",
  "Fără responsabilitate individuală — nu se știe cine e responsabil de lead-ul X",
  "Fără alertă pentru leads nepreluate — managerul nu știe ce se pierde",
  "Program de lucru limitat vs. leads care vin non-stop — WhatsApp nu doarme",
];

export const globalStats = [
  {
    value: 50,
    suffix: "%",
    label: "din clienți aleg furnizorul care răspunde primul",
    source: "InsideSales.com",
  },
  {
    value: 21,
    suffix: "x",
    label: "rată de calificare mai mare pentru leadurile contactate în primele 5 minute",
    source: "Lead response research",
  },
  {
    value: 78,
    suffix: "%",
    label: "cumpără de la primul furnizor care răspunde",
    source: "Lead Connect",
  },
  {
    value: 9,
    suffix: "x",
    label: "mai multe șanse de conversie dacă răspunzi în primele 5 minute",
    source: "Harvard Business Review",
  },
];

export const romanianResponseTimes = [
  ["Medical", "4–8 ore"],
  ["Solar", "2–6 ore"],
  ["Imobiliare", "1–3 ore"],
];

export const calculatorExample = [
  "60 leads/lună",
  "30% fără răspuns în 15 minute = 18 leads pierdute",
  "Rată conversie 25% = 4-5 clienți pierduți",
  "Valoare medie client 2.000 RON = 8.000–10.000 RON pierdute lunar",
];

export const section15SecundeParagraphs = [
  "Cele mai performante echipe de vânzări nu răspund în 5 minute, ci în secunde. Nu pentru că stau cu telefonul în mână toată ziua, ci pentru că au sisteme care fac asta automat.",
  "Un răspuns automat pe WhatsApp în primele 15 secunde confirmă că lead-ul a fost primit și scoate clientul din incertitudine.",
];

export const section15SecundeBullets = [
  "Confirmă că lead-ul a fost primit",
  "Pune 1-2 întrebări de calificare",
  "Propune sloturi de programare direct în calendar",
  "Notifică agentul responsabil cu context complet",
];

export const faqItems: FAQItem[] = [
  {
    question: "Cât de mare trebuie să fie volumul de leads ca să justifice automatizarea?",
    answer:
      "Orice afacere care primește mai mult de 20 de leads pe lună și nu are un om dedicat exclusiv pentru răspuns instant pe WhatsApp beneficiază de automatizare. La 20 leads/lună, chiar și 5 pierdute înseamnă 10.000–30.000 RON pierduți anual.",
  },
  {
    question: "Un răspuns automat nu pare rece sau nepersonalizat?",
    answer:
      "Nu, dacă e bine configurat. Răspunsul automat poate include numele clientului, poate face referire la exact ce a întrebat și poate oferi sloturi reale din calendar. Clientul vede că e primit imediat și profesionist.",
  },
  {
    question: "Ce se întâmplă cu leads-urile care vin noaptea sau în weekend?",
    answer:
      "Aceasta e exact categoria cea mai scumpă de leads pierdute. Un sistem automat poate prelua aceste conversații și le poate califica sau programa chiar și în afara orelor de program.",
  },
  {
    question: "Funcționează automatizarea pentru orice tip de business?",
    answer:
      "Cel mai bine funcționează pentru afaceri cu volum mare de leads inbound repetitive: clinici, agenții imobiliare, companii solar/energie, educație privată, servicii financiare.",
  },
];

export const concluzieParagraphs = [
  "Matematica e simplă. Fiecare lead pe care îl plătești și nu îl preiei la timp este o investiție de marketing aruncată.",
  "Vestea bună: spre deosebire de bugetul de reclame sau prețurile din piață, viteza de răspuns este un element pe care îl poți controla 100%.",
  "Întrebarea nu mai este dacă să automatizezi primul contact pe WhatsApp, ci cât ai mai așteptat deja.",
  "Pinggo răspunde automat la fiecare lead în mai puțin de 15 secunde pe WhatsApp, pune întrebările de calificare și programează direct în calendar. Fără să ocupe timp din echipa ta.",
];

export const articleSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BlogPosting",
      headline:
        "Cât costă un lead pierdut? Calculul pe care niciun owner din România nu vrea să-l facă",
      description:
        "Un lead pierdut înseamnă bani aruncați pe reclamă. Calculează exact cât pierde afacerea ta pe lună.",
      image: "https://pinggo.ro/og/cat-costa-un-lead-pierdut.png",
      datePublished: "2026-03-01T09:00:00+02:00",
      dateModified: "2026-03-01T09:00:00+02:00",
      author: {
        "@type": "Organization",
        name: "Pinggo",
        url: "https://pinggo.ro",
      },
      publisher: {
        "@type": "Organization",
        name: "Pinggo",
        logo: {
          "@type": "ImageObject",
          url: "https://pinggo.ro/logo.png",
        },
      },
      url: "https://pinggo.ro/blog/cat-costa-un-lead-pierdut",
      mainEntityOfPage: "https://pinggo.ro/blog/cat-costa-un-lead-pierdut",
      keywords: [
        "lead pierdut",
        "cost lead România",
        "WhatsApp business",
        "clinici dentare",
        "solar Casa Verde",
      ],
      inLanguage: "ro",
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Cât de mare trebuie să fie volumul de leads ca să justifice automatizarea?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Orice afacere care primește mai mult de 20 de leads pe lună și nu are un om dedicat exclusiv pentru răspuns instant pe WhatsApp beneficiază de automatizare. La 20 leads/lună, chiar și 5 pierdute înseamnă 10.000–30.000 RON pierduți anual.",
          },
        },
        {
          "@type": "Question",
          name: "Un răspuns automat nu pare rece sau nepersonalizat?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Nu, dacă e bine configurat. Răspunsul automat poate include numele clientului, poate face referire la exact ce a întrebat și poate oferi sloturi reale din calendarul tău. Clientul vede că e primit imediat și profesionist.",
          },
        },
        {
          "@type": "Question",
          name: "Ce se întâmplă cu leads-urile care vin noaptea sau în weekend?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Aceasta e exact categoria cea mai scumpă de leads pierdute. Un sistem automat poate prelua aceste conversații și le poate califica sau programa chiar și în afara orelor de program.",
          },
        },
        {
          "@type": "Question",
          name: "Funcționează automatizarea pentru orice tip de business?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Cel mai bine funcționează pentru afaceri cu volum mare de leads inbound repetitive: clinici, agenții imobiliare, companii solar/energie, educație privată, servicii financiare.",
          },
        },
      ],
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Acasă",
          item: "https://pinggo.ro",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Blog",
          item: "https://pinggo.ro/blog",
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Cât costă un lead pierdut?",
          item: "https://pinggo.ro/blog/cat-costa-un-lead-pierdut",
        },
      ],
    },
  ],
} as const;
