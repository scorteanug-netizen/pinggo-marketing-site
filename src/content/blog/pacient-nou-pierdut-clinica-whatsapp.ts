export type ClinicaFaqItem = {
  question: string;
  answer: string;
};

export type ClinicaHowToStep = {
  position: number;
  name: string;
  text: string;
};

export const articleMetadata = {
  title: "De ce 7 din 10 pacienți noi nu mai ajung la prima programare — și cum să oprești pierderea",
  titleTag: "De ce pierzi pacienți noi înainte de prima programare",
  slug: "pacient-nou-pierdut-clinica-whatsapp",
  canonical: "https://pinggo.ro/blog/pacient-nou-pierdut-clinica-whatsapp",
  description:
    "Clinicile din România pierd 40-70% din pacienții noi din cauza timpului de răspuns pe WhatsApp. Iată de ce se întâmplă și cum automatizezi răspunsul în 15 secunde.",
  date: "2026-03-01",
  lastModified: "2026-03-01",
  author: "Echipa Pinggo",
  authorType: "Organization",
  authorUrl: "https://pinggo.ro",
  ogImage: "/og/pacient-nou-pierdut-clinica-whatsapp.png",
  tags: [
    "clinici dentare",
    "clinici medicale",
    "WhatsApp",
    "pacienți noi",
    "programare automată",
    "timp de răspuns",
  ],
  seoKeywords: [
    "răspuns automat clinică WhatsApp",
    "pacienți noi clinică pierdere",
    "automatizare programări clinică dentară",
    "WhatsApp clinică medicală Romania",
    "timp răspuns pacient nou clinică",
  ],
  robots: "index, follow",
  readingTime: 8,
  locale: "ro_RO",
} as const;

export const tocItems = [
  { id: "problema-viteza", title: "Problema nu e prețul. Nu e locația. E viteza." },
  { id: "vinovati", title: "Cei 3 vinovați principali" },
  { id: "calcul-rapid", title: "Câți pacienți pierde clinica ta lunar?" },
  { id: "ce-s-a-schimbat", title: "Ce s-a schimbat: pacientul de azi nu mai are răbdare" },
  { id: "solutia", title: "Soluția: răspuns instant, programare automată, urmărire garantată" },
  { id: "scenariu", title: "Cum arată în practică — scenariul complet pas cu pas" },
  { id: "checklist", title: "Ce să ceri de la un sistem de automatizare WhatsApp pentru clinică" },
  { id: "faq", title: "Întrebări frecvente despre automatizarea WhatsApp în clinici" },
  { id: "concluzie", title: "Concluzie: primul răspuns decide dacă pacientul devine al tău" },
] as const;

export const introParagraphs = [
  "Imaginează-ți că deschizi cabinetul luni dimineața și descoperi 14 mesaje noi pe WhatsApp. Toate au venit sâmbătă seara și duminică.",
  "Unele sunt de la pacienți existenți, dar 9 sunt de la oameni care au scris pentru prima dată, au întrebat de prețuri sau de disponibilitate, și nu au primit răspuns automat de la clinica ta timp de 36 de ore.",
  "Din acei 9, probabil doar 2-3 mai sunt disponibili luni dimineața. Restul au contactat deja clinica concurentă care a răspuns primul.",
  "Acesta nu este un scenariu ipotetic. Este realitatea zilnică a peste 60% din clinicile private din România.",
];

export const sectionProblemaVitezaParagraphs = [
  "Când un potențial pacient scrie pe WhatsApp, nu a luat încă decizia finală. Este în faza de evaluare, iar faptul că ți-a scris ție este deja o victorie a marketingului.",
  "În acel moment, ești în concurență directă cu propria lui răbdare și cu viteza celorlalte clinici pe care le-a contactat în paralel.",
];

export const sectionProblemaVitezaBullets = [
  "47% din potențialii clienți contactează mai multe opțiuni simultan când caută un furnizor de servicii",
  "Prima companie care răspunde are o rată de conversie cu 50% mai mare decât a doua",
  "Dacă nu primești răspuns în primele 5 minute, probabilitatea de conversie poate scădea drastic",
];

export const vinovati = [
  {
    title: "1. Programul de lucru nu coincide cu programul de contact al pacienților",
    paragraphs: [
      "43% din mesajele noi pe WhatsApp primite de clinicile medicale private sosesc în afara programului de lucru: seara, weekend sau în pauzele de prânz.",
      "Rezultatul este un decalaj mediu de 8-14 ore între momentul contactului și primul răspuns.",
    ],
  },
  {
    title: "2. Recepția este suprasolicitată în orele de vârf",
    paragraphs: [
      "În programul normal, recepția gestionează simultan pacienți fizic prezenți, apeluri, programări, facturare și mesaje.",
      "Mesajele WhatsApp de la pacienți noi sunt cel mai ușor de amânat, nu din neglijență, ci din priorități forțate.",
    ],
  },
  {
    title: "3. Follow-up-ul lipsește complet",
    paragraphs: [
      "Pacientul care nu răspunde la primul mesaj sau spune «mă mai gândesc» este abandonat în majoritatea cazurilor.",
      "Fără un sistem care urmărește automat confirmarea, anularea sau tăcerea, fiecare contact nereschedat devine buget de marketing pierdut.",
    ],
  },
];

export const leadLossTableHeaders = ["Variabilă", "Exemplu clinică medie", "Clinica ta"];

export const leadLossTableRows = [
  ["Mesaje noi WhatsApp / lună", "60", "__"],
  ["% primite în afara programului", "40% → 24 mesaje", "__"],
  ["% fără răspuns în primele 30 min", "65% → 39 mesaje", "__"],
  ["Rată conversie pierdută (conservator 30%)", "12 pacienți", "__"],
  ["Valoare medie tratament (RON)", "800 RON", "__"],
  ["Pierdere lunară estimată", "9.600 RON", "__"],
];

export const sectionCalculParagraphs = [
  "9.600 RON lunar înseamnă 115.200 RON anual pierduți din mesaje la care nu s-a răspuns la timp.",
  "Aceasta este o estimare conservatoare. Dacă valoarea tratamentului mediu este mai mare, impactul real crește rapid.",
];

export const sectionSchimbatParagraphs = [
  "Pacientul de azi nu mai are răbdarea de acum 10 ani. Scrie pe WhatsApp și se așteaptă la răspuns în minute, nu a doua zi.",
  "WhatsApp a devenit canal dominant în România pentru că oferă senzația de conversație directă, umană. Dar multe clinici au procese interne încă manuale.",
  "De aceea există un gap între disponibilitate externă (canale active) și execuție internă (răspuns întârziat).",
];

export const sectionSolutiaParagraphs = [
  "Un sistem eficient de răspuns automat pe WhatsApp pentru clinică trebuie să răspundă în mai puțin de 15 secunde, să ghideze conversația spre programare și să urmărească automat statusul după contact.",
];

export const sectionSolutiaItems = [
  {
    title: "1. Răspuns instant în mai puțin de 15 secunde",
    text: "Mesaj personalizat care confirmă primirea și pune imediat o întrebare de calificare relevantă.",
  },
  {
    title: "2. Conversație ghidată spre programare",
    text: "2-3 întrebări esențiale, apoi propunere de sloturi reale din calendar pentru confirmare rapidă.",
  },
  {
    title: "3. Urmărire garantată",
    text: "Reminder automat, reprogramare și notificare către recepție când este necesară intervenția umană.",
  },
];

export const scenariuItems = [
  "Sâmbătă, 20:47 — pacientul scrie pentru implanturi dentare.",
  "Sâmbătă, 20:47:12 — sistemul răspunde instant cu mesaj contextual și întrebare de calificare.",
  "Sâmbătă, 20:49 — pacientul oferă detalii.",
  "Sâmbătă, 20:49:15 — sistemul propune 2-3 sloturi concrete.",
  "Duminică, 10:15 — pacientul confirmă.",
  "Luni dimineață — recepția găsește programarea completă în calendar, cu istoric.",
];

export const checklistEssentials = [
  "Răspuns inițial în mai puțin de 15 secunde",
  "Conversație ghidată, nu mesaj generic",
  "Integrare cu Google Calendar pentru booking real",
  "Notificare instantă pentru recepție când e nevoie de om",
  "Follow-up automat pentru pacienți neconfirmați",
];

export const checklistImportant = [
  "Istoric complet vizibil pentru recepție",
  "Funcționare 24/7, inclusiv weekend",
  "Configurare per specialitate sau medic",
  "Raport lunar: contactați, confirmați, pierduți",
];

export const checklistAdvanced = [
  "Dovadă de trimitere și livrare a mesajelor",
  "Escaladare automată dacă sistemul nu poate continua",
  "Vizibilitate managerială pe ownership și rezultat",
];

export const faqItems: ClinicaFaqItem[] = [
  {
    question: "Pacienții nu se vor simți ciudat că vorbesc cu un bot?",
    answer:
      "Dacă sistemul e configurat corect, pacienții nu percep diferența față de o conversație cu recepția. Cheia e viteza de răspuns (instant = uman-like) și conversația structurată.",
  },
  {
    question: "Ce se întâmplă dacă pacientul pune o întrebare la care sistemul nu știe să răspundă?",
    answer:
      "Sistemul notifică recepția și transferă conversația cu tot istoricul (handover). Nicio conversație nu se pierde.",
  },
  {
    question: "Avem nevoie de un număr separat de WhatsApp?",
    answer:
      "Nu neapărat. Soluțiile moderne se conectează la numărul existent al clinicii. Configurarea durează, de regulă, 1-2 zile lucrătoare.",
  },
  {
    question: "Funcționează și pentru programările de urgență?",
    answer:
      "Da. Pentru urgențe, viteza de răspuns este critică și crește semnificativ șansa ca pacientul să confirme cu tine, nu cu concurența.",
  },
  {
    question: "Cât costă față de un angajat suplimentar la recepție?",
    answer:
      "Un angajat full-time la recepție costă 3.500-5.000 RON brut/lună. Automatizarea WhatsApp pornește, de obicei, mult sub acest cost și funcționează 24/7.",
  },
];

export const howToSteps: ClinicaHowToStep[] = [
  {
    position: 1,
    name: "Răspuns instant în mai puțin de 15 secunde",
    text: "Configurează un mesaj inițial personalizat care se trimite automat când un pacient nou scrie pe WhatsApp, indiferent de oră.",
  },
  {
    position: 2,
    name: "Conversație ghidată cu 2-3 întrebări de calificare",
    text: "Sistemul pune întrebări despre tipul tratamentului și disponibilitatea pacientului, fără mesaje generice.",
  },
  {
    position: 3,
    name: "Propunere sloturi din Google Calendar",
    text: "Pe baza răspunsurilor, sistemul verifică disponibilitatea în calendar și propune 2-3 sloturi concrete.",
  },
  {
    position: 4,
    name: "Confirmare și înregistrare automată",
    text: "Pacientul confirmă slotul preferat. Programarea se salvează automat în calendar și recepția primește notificare.",
  },
  {
    position: 5,
    name: "Follow-up automat pentru neconfirmați",
    text: "Dacă pacientul nu a confirmat în 24 de ore, sistemul trimite automat un reminder sau o întrebare de follow-up.",
  },
];

export const concluzieParagraphs = [
  "Nu pierzi pacienți pentru că ești mai scump. Nu pierzi pacienți pentru că ești mai departe. Pierzi pacienți pentru că altcineva răspunde primul.",
  "Soluția nu e extinderea programului clinicii, ci automatizarea primei părți a conversației, înainte ca pacientul să ia decizia finală.",
  "Răspunde în 15 secunde. Programează automat. Urmărește fiecare contact.",
];

export const articleSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BlogPosting",
      headline: "De ce 7 din 10 pacienți noi nu mai ajung la prima programare — și cum să oprești pierderea",
      description:
        "Clinicile din România pierd 40-70% din pacienții noi din cauza timpului de răspuns pe WhatsApp. Iată de ce se întâmplă și cum automatizezi răspunsul în 15 secunde.",
      image: "https://pinggo.ro/og/pacient-nou-pierdut-clinica-whatsapp.png",
      datePublished: "2026-03-01",
      dateModified: "2026-03-01",
      author: {
        "@type": "Organization",
        name: "Pinggo",
        url: "https://pinggo.ro",
      },
      publisher: {
        "@type": "Organization",
        name: "Pinggo",
        url: "https://pinggo.ro",
        logo: {
          "@type": "ImageObject",
          url: "https://pinggo.ro/logo.png",
        },
      },
      url: "https://pinggo.ro/blog/pacient-nou-pierdut-clinica-whatsapp",
      inLanguage: "ro-RO",
      keywords: [
        "răspuns automat clinică WhatsApp",
        "pacienți noi clinică",
        "automatizare WhatsApp clinică dentară",
      ],
    },
    {
      "@type": "HowTo",
      name: "Cum automatizezi răspunsul la pacienți noi pe WhatsApp",
      description:
        "Ghid pas cu pas pentru configurarea unui sistem de răspuns automat WhatsApp pentru clinici medicale și dentare.",
      step: [
        {
          "@type": "HowToStep",
          position: 1,
          name: "Răspuns instant în mai puțin de 15 secunde",
          text: "Configurează un mesaj inițial personalizat care se trimite automat când un pacient nou scrie pe WhatsApp, indiferent de oră.",
        },
        {
          "@type": "HowToStep",
          position: 2,
          name: "Conversație ghidată cu 2-3 întrebări de calificare",
          text: "Sistemul pune întrebări despre tipul tratamentului și disponibilitatea pacientului, fără mesaje generice.",
        },
        {
          "@type": "HowToStep",
          position: 3,
          name: "Propunere sloturi din Google Calendar",
          text: "Pe baza răspunsurilor, sistemul verifică disponibilitatea în calendar și propune 2-3 sloturi concrete.",
        },
        {
          "@type": "HowToStep",
          position: 4,
          name: "Confirmare și înregistrare automată",
          text: "Pacientul confirmă slotul preferat. Programarea se salvează automat în calendar și recepția primește notificare.",
        },
        {
          "@type": "HowToStep",
          position: 5,
          name: "Follow-up automat pentru neconfirmați",
          text: "Dacă pacientul nu a confirmat în 24 de ore, sistemul trimite automat un reminder sau o întrebare de follow-up.",
        },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Pacienții nu se vor simți ciudat că vorbesc cu un bot?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Dacă sistemul e configurat corect, pacienții nu percep diferența față de o conversație cu recepția. Cheia e viteza de răspuns (instant = uman-like) și conversația structurată. Un mesaj relevant trimis după 45 de secunde e mai uman decât un răspuns copy-paste trimis de recepție după 3 ore.",
          },
        },
        {
          "@type": "Question",
          name: "Ce se întâmplă dacă pacientul pune o întrebare la care sistemul nu știe să răspundă?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Orice sistem bun are o opțiune de handover: dacă întrebarea e complexă sau sensibilă, sistemul notifică recepția și transferă conversația cu tot istoricul. Nicio conversație nu se pierde.",
          },
        },
        {
          "@type": "Question",
          name: "Avem nevoie de un număr separat de WhatsApp?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Nu neapărat. Soluțiile moderne se conectează la numărul de business existent al clinicii. Configurarea se face de obicei în 1-2 zile lucrătoare.",
          },
        },
        {
          "@type": "Question",
          name: "Cât costă față de un angajat suplimentar la recepție?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Un angajat full-time la recepție costă între 3.500-5.000 RON brut pe lună. Soluțiile de automatizare WhatsApp pornesc de la €79/lună și funcționează 24/7, inclusiv weekend.",
          },
        },
        {
          "@type": "Question",
          name: "Funcționează și pentru programările de urgență?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Da. Un pacient cu durere de dinți care scrie la 22:00 și primește confirmare de programare pentru a doua zi la 8:00 este un pacient care nu va mai căuta altă clinică.",
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
          name: "De ce pierzi pacienți noi înainte de prima programare",
          item: "https://pinggo.ro/blog/pacient-nou-pierdut-clinica-whatsapp",
        },
      ],
    },
  ],
} as const;
