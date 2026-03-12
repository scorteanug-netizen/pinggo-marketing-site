export type StatisticList = {
  ordered?: boolean;
  items: string[];
};

export type StatisticTable = {
  headers: string[];
  rows: string[][];
  highlightLastRow?: boolean;
};

export type StatisticCallout = {
  title?: string;
  lines: string[];
};

export type StatisticSection = {
  id: string;
  title: string;
  quote?: string;
  source?: string;
  paragraphs: string[];
  list?: StatisticList;
  table?: StatisticTable;
  callout?: StatisticCallout;
};

export type FAQItem = {
  question: string;
  answer: string;
};

export const articleMetadata = {
  title: "17 statistici despre viteza de răspuns la lead-uri care arată de ce pierzi clienți (și ce poți face)",
  titleTag: "17 statistici viteza răspuns lead-uri | Pinggo",
  slug: "statistici-timp-raspuns-lead-uri-romania",
  canonical: "https://pinggo.ro/blog/statistici-timp-raspuns-lead-uri-romania",
  description:
    "78% din clienți cumpără de la prima firmă care răspunde. Timpul mediu de răspuns în România: 42+ ore. 17 statistici despre viteza de răspuns care îți arată exact cât costă fiecare oră de întârziere.",
  date: "2026-03-11",
  lastModified: "2026-03-11",
  author: "Echipa Pinggo",
  authorType: "Organization",
  authorUrl: "https://pinggo.ro",
  ogImage: "/og/statistici-timp-raspuns-lead-uri-romania.png",
  tags: ["statistici", "timp de răspuns", "lead-uri", "WhatsApp", "conversie", "vânzări"],
  seoKeywords: [
    "timp de răspuns lead-uri România",
    "statistici viteză răspuns lead",
    "cât de repede să răspunzi unui lead",
    "timp răspuns WhatsApp business",
    "speed to lead România",
  ],
  robots: "index, follow",
  readingTime: 9,
  locale: "ro_RO",
} as const;

export const tocItems = [
  { id: "statistici-esentiale", title: "Statisticile esențiale" },
  { id: "statistica-1", title: "Statistica #1" },
  { id: "statistica-2", title: "Statistica #2" },
  { id: "statistica-3", title: "Statistica #3" },
  { id: "statistica-4", title: "Statistica #4" },
  { id: "statistica-5", title: "Statistica #5" },
  { id: "statistica-6", title: "Statistica #6" },
  { id: "statistica-7", title: "Statistica #7" },
  { id: "statistica-8", title: "Statistica #8" },
  { id: "statistica-9", title: "Statistica #9" },
  { id: "statistica-10-11", title: "Statisticile #10-11" },
  { id: "statistica-12", title: "Statistica #12" },
  { id: "statistica-13", title: "Statistica #13" },
  { id: "statistica-14", title: "Statistica #14" },
  { id: "statistica-15", title: "Statistica #15" },
  { id: "statistica-16", title: "Statistica #16" },
  { id: "statistica-17", title: "Statistica #17" },
  { id: "ce-faci-cu-aceste-17-statistici", title: "Ce faci cu aceste 17 statistici?" },
  { id: "intrebari-frecvente", title: "Întrebări frecvente" },
  { id: "concluzie", title: "Concluzie" },
] as const;

export const introParagraphs = [
  "<strong>78% din clienți cumpără de la prima firmă care le răspunde.</strong> Nu de la firma mai bună. Nu de la firma mai ieftină. De la prima firmă care răspunde.",
  'Dacă ai citit doar această statistică, ai deja tot ce ai nevoie ca să înțelegi de ce <strong>viteza de răspuns la lead-uri</strong> e mai importantă decât bugetul de marketing, decât prețul, și uneori chiar decât produsul.',
  "Restul articolului îți arată ce se întâmplă concret: minute cu minute, oră cu oră, cu fiecare lead pe care nu l-ai contactat la timp, și cu datele clare despre cât costă această întârziere în piața românească, pe WhatsApp.",
] as const;

export const summaryTable = {
  headers: ["#", "Statistica", "Sursa"],
  rows: [
    ["1", "78% din clienți cumpără de la prima firmă care răspunde", "LeadConnect / Forbes"],
    ["2", "21x mai multe șanse de calificare dacă răspunzi în 5 min față de 30 min", "InsideSales / Harvard"],
    ["3", "391% creștere conversie dacă răspunzi în primul minut", "Velocify"],
    ["4", "42-47 ore - timpul mediu global de răspuns la un lead", "Harvard Business Review / Optifai 2025"],
    ["5", "63% din firme nu răspund deloc la lead-urile inbound", "RevenueHero 2024"],
    ["6", "50%+ din cumpărători aleg prima firmă care răspunde chiar dacă e mai scumpă", "Forbes"],
    ["7", "80% scădere a probabilității de conversie după 5 minute fără răspuns", "InsideSales"],
    ["8", "400% scad șansele de calificare după doar 10 minute", "Chili Piper"],
    ["9", "2.6x rata de închidere mai mare pentru răspuns sub 5 min față de 24h", "Optifai 2025"],
    ["10", "88% penetrare WhatsApp în România - canalul #1 unde vin lead-urile", "DataReportal 2025"],
    ["11", "98% rată de deschidere WhatsApp față de 20-25% la email", "Meta Business"],
    ["12", "43% din mesajele noi pe WhatsApp sosesc în afara programului de lucru", "Date interne Pinggo"],
    ["13", "8-14 ore - decalajul mediu de răspuns estimat pentru IMM-urile din România", "Analiză Pinggo"],
    ["14", '73% din IMM-urile române au nivel de digitalizare "foarte slab"', "Eurostat 2023"],
    ["15", "51% din lead-uri nu sunt contactate niciodată", "Forbes / Kixie"],
    ["16", "66% din clienți spun că viteza de răspuns e la fel de importantă ca prețul", "Forbes"],
    ["17", "7x mai multe șanse de conversie dacă răspunzi în prima oră față de a doua", "Harvard Business Review"],
  ],
} as const;

export const statisticSections: StatisticSection[] = [
  {
    id: "statistica-1",
    title: "Statistica #1 — 78% din clienți cumpără de la prima firmă care răspunde",
    quote: "78% of B2B customers purchase from the vendor that responds first.",
    source: "Chili Piper / LeadConnect",
    paragraphs: [
      "Aceasta e statistica care redefinește ce înseamnă competiția. Nu mai e vorba de cel mai bun produs sau cel mai mic preț. E vorba de <strong>cine ridică telefonul primul</strong>.",
      "Când un potențial client scrie pe WhatsApp la o clinică dentară sau la o firmă de panouri solare, el nu a luat o decizie finală. E în faza de comparare. Probabil a trimis mesaje la 2-3 alte firme simultan. <strong>Prima care răspunde câștigă avantajul psihologic</strong> - stabilește relația, construiește prima impresie și setează standardul față de care vor fi comparate celelalte răspunsuri.",
      "<strong>Ce înseamnă asta practic pentru o clinică dentară?</strong> Dacă tu răspunzi luni la ora 9:30, iar clinica din cartier a răspuns sâmbătă seara la 21:00, ai deja pierdut. Nu din cauza prețurilor sau calității doctorilor, ci pentru că ai răspuns al doilea.",
    ],
  },
  {
    id: "statistica-2",
    title: "Statistica #2 — De 21 de ori mai multe șanse dacă răspunzi în 5 minute față de 30 de minute",
    quote: "Leads contacted within 5 minutes are 21 times more likely to qualify than those contacted after 30 minutes.",
    source: "InsideSales.com / Harvard Business Review Lead Response Study",
    paragraphs: [
      "21 de ori. Nu 21%. De <strong>21 de ori</strong> mai multe șanse.",
      "Această statistică vine dintr-un studiu landmark publicat în Harvard Business Review, bazat pe analiza a 1,25 milioane de lead-uri de vânzări. Concluzia e simplă și brutală: <strong>intervalul dintre primul minut și primele 30 de minute face diferența dintre o oportunitate și o pierdere</strong>.",
      "Context românesc: dacă un patron de agenție solară primește 50 de cereri din Casa Verde într-o zi și echipa sa sună în ordine cronologică timp de 3 ore, clienții contactați la final au o probabilitate de conversie de 21x mai mică decât primii contactați. Nu pentru că s-a schimbat ceva la ofertă, ci pentru că au așteptat.",
    ],
    list: {
      ordered: true,
      items: [
        "<strong>Atenția e la vârf în momentul contactului</strong> - clientul e online, e activ, e interesat acum.",
        "<strong>Concurenții reacționează rapid</strong> - dacă a trimis la mai multe firme, prima care răspunde captează imediat atenția.",
        "<strong>Răcirea psihologică</strong> - după 30 de minute, entuziasmul scade, apar îndoielile, prioritățile se schimbă.",
      ],
    },
  },
  {
    id: "statistica-3",
    title: "Statistica #3 — 391% creștere a conversiei dacă răspunzi în primul minut",
    quote: "Responding to a lead within one minute improves conversion rates by an average of 391%.",
    source: "Velocify (analiză pe milioane de înregistrări lead)",
    paragraphs: [
      "Dacă statistica anterioară ți s-a părut impresionantă, aceasta e și mai extremă: răspunsul în <strong>primul minut</strong>, nu în primele 5, ci în primul minut, crește conversiile cu 391%.",
      "Asta nu înseamnă că trebuie să ai un om disponibil 24/7 să răspundă în 60 de secunde. Înseamnă că <strong>sistemul tău trebuie să răspundă automat</strong> în acel interval, uman sau nu.",
      "Pe WhatsApp, acesta e standardul pe care platforma îl creează implicit: utilizatorul vede că mesajul a fost livrat, vede că a fost citit și <strong>se așteaptă la un răspuns în minute, nu ore</strong>. Un răspuns care vine după 45 de secunde și pune o întrebare relevantă e indistinguibil, din perspectiva clientului, de un răspuns uman.",
    ],
  },
  {
    id: "statistica-4",
    title: "Statistica #4 — Timpul mediu de răspuns global: 42-47 de ore",
    quote: "The average B2B lead response time is 47 hours.",
    source: "Harvard Business Review / Optifai Pipeline Study (N=939 companii, Q1-Q3 2025)",
    paragraphs: [
      "<strong>Aproape 2 zile lucrătoare.</strong> Acesta e timpul mediu în care o firmă tipică răspunde unui lead inbound.",
      "Pune această cifră lângă statistica #2 și înțelegi amploarea problemei: firmele medii răspund într-un moment în care probabilitatea de conversie e deja redusă de <strong>sute de ori</strong> față de potențialul maxim.",
      "Estimarea pentru România: cu 73% din IMM-uri fără CRM și procese de răspuns bazate pe telefon manual sau WhatsApp personal, timpul mediu de răspuns în România e estimat la <strong>42-72 de ore</strong>, egal sau mai rău decât media globală.",
    ],
    list: {
      items: [
        "Doar <strong>23%</strong> din firme răspund în primele 5 minute.",
        "<strong>42%</strong> din firme iau mai mult de 24 de ore.",
        "Firmele cu răspuns sub 5 minute au o rată de închidere de <strong>32%</strong>.",
        "Firmele care răspund după 24 de ore au o rată de închidere de <strong>12%</strong>.",
      ],
    },
  },
  {
    id: "statistica-5",
    title: "Statistica #5 — 63% din firme nu răspund deloc la lead-urile inbound",
    quote: "Over 63% of businesses didn't respond at all to inbound leads.",
    source: "RevenueHero 2024 (studiu pe 1.000+ companii)",
    paragraphs: [
      "Aceasta e poate cea mai șocantă statistică din listă. Șase din zece firme <strong>nu răspund deloc</strong> la lead-urile inbound.",
      "Studiul RevenueHero din 2024 a analizat comportamentul real al peste 1.000 de companii la lead-urile inbound. Rezultatele arată că situația s-a înrăutățit în ultimii ani: în 2011, 23% din companii nu răspundeau deloc; în 2024, numărul a crescut la 63%. Mai multe tool-uri, mai multă automatizare, dar rezultate mai proaste.",
      "De ce se întâmplă asta în România? Clinica dentară primește lead-ul în formularul de pe site, nimeni nu verifică formularul zilnic, lead-ul expiră fără răspuns. Firma solară primește cererea prin WhatsApp personal al unui agent care era în instalare, agentul uită, cererea se pierde.",
      "Ce înseamnă asta pentru tine dacă răspunzi? Dacă tu răspunzi, ești deja în top 37%. Dacă răspunzi în 5 minute, ești în top 23%. Dacă răspunzi în 60 de secunde, practic nu ai competiție.",
    ],
  },
  {
    id: "statistica-6",
    title: "Statistica #6 — 50%+ aleg prima firmă care răspunde chiar dacă e mai scumpă",
    quote: "Over 50% of people hire the first business to respond to their requests, even if it's more expensive.",
    source: "Forbes",
    paragraphs: [
      "Aceasta e statistica care schimbă complet calculul competiției pe preț.",
      "Mulți antreprenori români cred că pierd clienți din cauza prețurilor. Reduc marjele, oferă discounturi, se compară cu concurența pe cost. Dar dacă jumătate din clienți aleg prima firmă care răspunde <strong>indiferent de preț</strong>, atunci <strong>viteza e un avantaj competitiv mai puternic decât prețul</strong>.",
      "O clinică dentară care răspunde în 15 secunde la 23:00 poate cere mai mult decât una care răspunde luni dimineața la 9:30 și va câștiga clientul.",
    ],
  },
  {
    id: "statistica-7",
    title: "Statistica #7 — 80% scădere a probabilității de conversie după 5 minute",
    quote: "After 5 minutes, the likelihood of converting a lead drops by 80%.",
    source: "InsideSales.com",
    paragraphs: [
      "Acesta e <strong>Regula de Aur a vitezei de răspuns</strong>: 5 minute.",
      "Dacă nu răspunzi în 5 minute, 80% din șansa ta de a converti acel lead a dispărut. Nu s-a redus. <strong>A dispărut în proporție de 80%</strong>.",
      "Și totuși, cum am văzut la statistica #4, media de răspuns a firmelor e de 42-47 de ore. Decalajul dintre ce știm că funcționează și ce facem în realitate e abismal.",
      "WhatsApp schimbă regula: pe email, poate există o toleranță de câteva ore. Pe WhatsApp, clientul vede că ai citit mesajul. Dacă l-ai citit și nu ai răspuns în 10-15 minute, efectul psihologic e mai negativ decât dacă nu l-ai fi citit deloc.",
    ],
  },
  {
    id: "statistica-8",
    title: "Statistica #8 — 400% mai puține șanse de calificare după 10 minute",
    quote: "Waiting just 10 minutes decreases the odds of qualifying by 400%.",
    source: "Chili Piper",
    paragraphs: [
      "Dacă 5 minute înseamnă 80% scădere, 10 minute înseamnă 400% mai puțin eficient. Curba e exponențială, nu liniară.",
      "Intervalul dintre 0-5 minute este <strong>cel mai valoros din întregul proces de vânzare</strong>. Nu demo-ul. Nu propunerea. Nu negocierea. Primele 5 minute după contactul inițial.",
      "Asta explică de ce automatizarea primului răspuns e atât de valoroasă: nu e vorba de a înlocui un om dintr-o conversație complexă. E vorba de a fi prezent în <strong>fereastra de 5 minute</strong> când niciun om nu poate fi disponibil permanent.",
    ],
  },
  {
    id: "statistica-9",
    title: "Statistica #9 — 2.6x rata de închidere pentru răspuns sub 5 minute față de 24h",
    quote: "Leads contacted in <5 minutes achieve a 32% close rate - 2.6x higher than those contacted after 24+ hours (12%).",
    source: "Optifai Pipeline Study 2025 (N=939 companii B2B, date CRM reale)",
    paragraphs: [
      "Aceasta e statistica care traduce viteza în bani concreți.",
    ],
    table: {
      headers: ["Timp de răspuns", "Rată de închidere"],
      rows: [
        ["Sub 5 minute", "32%"],
        ["Sub 1 oră", "24%"],
        ["Sub 24 ore", "15%"],
        ["Peste 24 ore", "12%"],
      ],
    },
    callout: {
      lines: [
        "Dacă ai 100 de lead-uri pe lună și valoarea medie a unui client e 5.000 RON:",
        "<strong>Răspuns sub 5 min</strong> → 32 clienți → <strong>160.000 RON</strong>",
        "<strong>Răspuns după 24h</strong> → 12 clienți → <strong>60.000 RON</strong>",
        "<strong>Diferența: 100.000 RON/lună</strong> din același număr de lead-uri, aceeași reclamă, același produs.",
      ],
    },
  },
  {
    id: "statistica-10-11",
    title: "Statisticile #10-11 — De ce WhatsApp e diferit de orice alt canal",
    quote: "WhatsApp - 88% penetrare în România, rată de deschidere 98%, mesaje citite în medie în 3 minute.",
    source: "DataReportal 2025 / Meta Business",
    paragraphs: [
      "WhatsApp nu e doar alt canal. E <strong>canalul</strong> în România, cu reguli proprii.",
      "<strong>88% penetrare</strong> înseamnă că aproape toți potențialii tăi clienți sunt acolo. Nu pe email. Nu pe Messenger. Pe WhatsApp.",
      "<strong>98% rată de deschidere</strong> față de 20-25% pentru email transformă complet calculul atenției: un mesaj trimis pe WhatsApp e aproape garantat că va fi văzut. Un email poate sta zile necitit.",
      "<strong>Mesaje citite în medie în 3 minute</strong> creează o așteptare implicită: dacă ai trimis un mesaj pe WhatsApp și nu ai primit răspuns în 15-20 de minute, ai senzația că ești ignorat. Exact senzația pe care nu vrei s-o creezi unui potențial client.",
      "Combinația dintre penetrare maximă, atenție garantată și așteptare de răspuns rapid face din WhatsApp atât cel mai eficient canal de contact din România, cât și cel mai riscant dacă nu ai procesele corecte de răspuns.",
    ],
  },
  {
    id: "statistica-12",
    title: "Statistica #12 — 43% din mesajele noi sosesc în afara programului",
    quote:
      "43% din mesajele noi pe WhatsApp primite de clinici și firme din verticale cu lead-uri inbound sosesc în afara programului de lucru.",
    source: "Date interne Pinggo, analiză comportament contact",
    paragraphs: [
      "Aceasta e statistica care face automatizarea nu o opțiune, ci o necesitate.",
      "Dacă 43% din potențialii tăi clienți scriu seara, în weekend sau în pauza de prânz, iar tu răspunzi doar în program, <strong>aproape jumătate din oportunitățile tale sunt gestionate în condiții suboptime</strong>.",
    ],
    list: {
      items: [
        "<strong>Dimineața 7:00-9:00</strong> - înainte de programul de lucru al clientului: ~8%",
        "<strong>Prânz 12:00-14:00</strong> - pauza de masă: ~12%",
        "<strong>Seara 18:00-22:00</strong> - după program: ~23%",
        "<strong>Weekend</strong> - sâmbătă și duminică: ~15%",
        "<strong>Total în afara programului tău</strong>: <strong>~58%</strong>",
      ],
    },
    callout: {
      lines: [
        "Clinica ta e închisă. Lead-ul e deschis și disponibil. Concurentul care a automatizat răspunsul câștigă.",
      ],
    },
  },
  {
    id: "statistica-13",
    title: "Statistica #13 — 8-14 ore: decalajul mediu estimat în România",
    source: "Estimare Pinggo bazată pe comportament observat la IMM-urile din verticale-țintă",
    paragraphs: [
      "Media globală e 42-47 de ore. Dar pentru IMM-urile românești din nișele noastre, clinici, solar și imobiliare, decalajul tipic e <strong>8-14 ore</strong>, aparent mai bun decât media globală, dar din motive greșite.",
      "Firmele românești din aceste nișe primesc lead-uri predominant prin WhatsApp personal, nu prin formulare sau CRM, ceea ce înseamnă că răspund mai repede, dar inconsistent. Un lead primit când agentul e disponibil primește răspuns în 30 de minute. Unul primit în weekend sau seara primește răspuns a doua zi dimineața, 10-14 ore mai târziu.",
      "<strong>Problema nu e media. E variabilitatea.</strong> Un sistem cu timp de răspuns mediu de 8 ore, dar cu variații de la 5 minute la 14 ore, e mai puțin eficient decât un sistem constant de 5 minute, 24/7.",
    ],
  },
  {
    id: "statistica-14",
    title: "Statistica #14 — 73% din IMM-urile române au digitalizare „foarte slabă”",
    quote: '73% din IMM-urile românești au nivel de digitalizare "foarte slab" - ultimul loc în UE.',
    source: "Eurostat 2023 / Indexul DESI",
    paragraphs: [
      "România s-a clasat pe <strong>locul 27 din 27</strong> în Indexul DESI. Doar <strong>17%</strong> din IMM-uri au nivel digital de bază, față de 57,7% media UE.",
      "Contextul e crucial: această statistică nu e un motiv de descurajare, ci o oportunitate. <strong>Firmele care adoptă automatizarea acum intră pe un teren aproape liber.</strong>",
      "Concurenții lor sunt la Excel și WhatsApp personal. Cel care automatizează primul răspuns devine automat liderul de viteză din nișa lui locală.",
    ],
  },
  {
    id: "statistica-15",
    title: "Statistica #15 — 51% din lead-uri nu sunt contactate niciodată",
    quote: "51% of leads are never contacted at all.",
    source: "Forbes / Kixie",
    paragraphs: [
      "Jumătate. Din tot bugetul de marketing investit, din toate reclamele plătite, din toate lead-urile generate, <strong>jumătate nu sunt contactate niciodată</strong>.",
      "Aceasta e pierderea pură, fără nicio justificare. Nu e vorba de răspuns lent. E vorba de inexistență completă a răspunsului.",
      "Ce înseamnă practic: dacă tu răspunzi la toate lead-urile, chiar și cu întârziere, ești deja mai bun decât jumătate din concurența ta. Dacă răspunzi în sub 5 minute, ești în top 23% global.",
    ],
    list: {
      items: [
        "Lead-ul vine pe emailul companiei și nimeni nu verifică acel email zilnic.",
        "Formularul de pe site trimite notificări în spam.",
        "Agentul a primit lead-ul pe WhatsApp personal într-o zi liberă și a uitat.",
        "Nu există un sistem centralizat, iar lead-urile se pierd între canale.",
      ],
    },
  },
  {
    id: "statistica-16",
    title: "Statistica #16 — 66% din clienți spun că viteza e la fel de importantă ca prețul",
    quote: "66% of customers say speed is as important as price.",
    source: "Forbes",
    paragraphs: [
      "Aceasta demontează mitul că IMM-urile pierd clienți în principal pe preț.",
      "<strong>Doi din trei clienți</strong> pun viteza de răspuns pe același nivel cu prețul ca factor de decizie. Nu mai jos. <strong>La egalitate.</strong>",
      "Implicația strategică: dacă investești resurse în reducerea prețurilor pentru a fi mai competitiv, dar nu investești în reducerea timpului de răspuns, optimizezi jumătate din ecuație și ignori cealaltă jumătate.",
      "O firmă de instalări solare care răspunde în 15 secunde poate câștiga clientul față de un competitor cu prețuri cu 10-15% mai mici care răspunde în 3 ore. Simplu matematic: <strong>viteza valorează cât un discount de 10-15%</strong>, fără a sacrifica marja.",
    ],
  },
  {
    id: "statistica-17",
    title: "Statistica #17 — De 7 ori mai eficient dacă răspunzi în prima oră față de a doua",
    quote: "Businesses that respond within an hour are almost 7 times more likely to have meaningful conversations than those that wait longer.",
    source: "Harvard Business Review",
    paragraphs: [
      "Ultima statistică e pentru cei care gândesc în ore, nu în minute: chiar dacă nu poți ajunge la răspuns sub 5 minute, <strong>prima oră e critică</strong>.",
      "Diferența dintre a răspunde în 50 de minute față de a răspunde în 2 ore e uriașă: de <strong>7 ori</strong> mai multe șanse de a ajunge la o conversație reală cu un potențial decident.",
      "Aceasta e limita inferioară: dacă nu poți automatiza răspunsul instantaneu, cel puțin construiește un proces care garantează că niciun lead nu depășește 60 de minute fără răspuns în orele de program. Și automatizează tot ce se întâmplă în afara programului.",
    ],
  },
] as const;

export const actionSteps = [
  {
    title: "1. Măsoară unde ești acum",
    text:
      "Calculează timpul tău mediu de răspuns pe ultimele 30 de zile. Dacă nu poți calcula pentru că nu ai un sistem de tracking, acesta e deja primul semnal că ai o problemă.",
  },
  {
    title: "2. Identifică unde se pierd lead-urile",
    text:
      "Vin pe WhatsApp personal sau pe numărul de business? Vin prin formularul de pe site? Prin Facebook Leads Ads? Fiecare canal cu un proces diferit înseamnă lead-uri care cad între scaune.",
  },
  {
    title: "3. Automatizează primul răspuns",
    text:
      "Nu trebuie să automatizezi toată conversația. Automatizează primele 60 de secunde: mesajul de confirmare că ai primit solicitarea și o întrebare inițială de calificare. Restul poate fi uman.",
  },
  {
    title: "4. Acoperă orele în afara programului",
    text:
      "43% din lead-uri vin când nu ești disponibil. Un sistem de răspuns automat care funcționează 24/7 nu înlocuiește echipa, ci o completează în intervalele când nu poate fi prezentă.",
  },
  {
    title: "5. Trackează și îmbunătățește",
    text:
      "Odată ce ai un sistem, poți măsura: câte lead-uri, în cât timp, cu ce rată de conversie. Și poți îmbunătăți sistematic.",
  },
] as const;

export const faqItems: FAQItem[] = [
  {
    question: "Cât de repede trebuie să răspunzi unui lead pe WhatsApp?",
    answer:
      "Ideal în mai puțin de 5 minute, dar cercetările arată că răspunsul în primele 60 de secunde crește rata de conversie cu 391%. Pe WhatsApp, standardul de aur este sub 15 secunde - canalul creează o așteptare de răspuns instant, similară unui SMS.",
  },
  {
    question: "Ce se întâmplă dacă nu răspunzi unui lead în prima oră?",
    answer:
      "Șansa de a califica lead-ul scade cu 700% față de un răspuns în prima oră. La 5 minute, șansa de calificare e deja de 21x mai mică decât dacă ai fi răspuns imediat. La 24 de ore, rata de conversie scade la 12%, față de 32% pentru răspunsuri sub 5 minute.",
  },
  {
    question: "Care este timpul mediu de răspuns al firmelor din România la un lead?",
    answer:
      "Estimat la 42-72 de ore, semnificativ mai rău decât media globală. Principalele cauze: 73% din IMM-urile românești nu au CRM, lead-urile vin manual pe WhatsApp sau email și nu există procese de răspuns automat.",
  },
  {
    question: "De ce WhatsApp necesită un timp de răspuns mai rapid decât email-ul?",
    answer:
      "WhatsApp are o rată de deschidere de 98% față de 20-25% pentru email, iar mesajele sunt citite în medie în 3 minute. Utilizatorul de WhatsApp are o așteptare de răspuns apropiată de timp real - similară unui SMS sau chat live, nu unui email formal.",
  },
  {
    question: "Cum automatizezi răspunsul la lead-uri pe WhatsApp?",
    answer:
      "Prin WhatsApp Business API conectat la o platformă de automatizare care trimite un mesaj inițial personalizat în secunde, califică lead-ul prin 2-3 întrebări ghidate și propune sloturi de programare din Google Calendar, fără intervenție umană în etapa inițială.",
  },
] as const;

export const conclusionParagraphs = [
  "<strong>78% din clienți cumpără de la prima firmă care răspunde.</strong>",
  "Ai citit această statistică la începutul articolului. Acum știi ce se ascunde în spatele ei: 16 alte statistici care o susțin, o cuantifică și o traduc în ROI concret.",
  "Nu e vorba de a fi cel mai bun. E vorba de a fi <strong>primul</strong>.",
] as const;

export const articleSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BlogPosting",
      headline: "17 statistici despre viteza de răspuns la lead-uri care arată de ce pierzi clienți",
      description:
        "78% din clienți cumpără de la prima firmă care răspunde. Timpul mediu de răspuns în România: 42+ ore. 17 statistici despre viteza de răspuns care îți arată exact cât costă fiecare oră de întârziere.",
      image: "https://pinggo.ro/og/statistici-timp-raspuns-lead-uri-romania.png",
      datePublished: "2026-03-11",
      dateModified: "2026-03-11",
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
      url: "https://pinggo.ro/blog/statistici-timp-raspuns-lead-uri-romania",
      inLanguage: "ro-RO",
      keywords: [
        "timp de răspuns lead",
        "speed to lead România",
        "viteză răspuns WhatsApp",
        "conversie lead-uri",
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Cât de repede trebuie să răspunzi unui lead pe WhatsApp?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Ideal în mai puțin de 5 minute, dar cercetările arată că răspunsul în primele 60 de secunde crește rata de conversie cu 391%. Pe WhatsApp, standardul de aur este sub 15 secunde - canalul creează o așteptare de răspuns instant, similară unui SMS.",
          },
        },
        {
          "@type": "Question",
          name: "Ce se întâmplă dacă nu răspunzi unui lead în prima oră?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Șansa de a califica lead-ul scade cu 700% față de un răspuns în prima oră. La 5 minute, șansa de calificare e deja de 21x mai mică decât dacă ai fi răspuns imediat. La 24 de ore, rata de conversie scade la 12%, față de 32% pentru răspunsuri sub 5 minute.",
          },
        },
        {
          "@type": "Question",
          name: "Care este timpul mediu de răspuns al firmelor din România la un lead?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Estimat la 42-72 de ore, semnificativ mai rău decât media globală. Principalele cauze: 73% din IMM-urile românești nu au CRM, lead-urile vin manual pe WhatsApp sau email și nu există procese de răspuns automat.",
          },
        },
        {
          "@type": "Question",
          name: "De ce WhatsApp necesită un timp de răspuns mai rapid decât email-ul?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "WhatsApp are o rată de deschidere de 98% față de 20-25% pentru email, iar mesajele sunt citite în medie în 3 minute. Utilizatorul de WhatsApp are o așteptare de răspuns apropiată de timp real - similară unui SMS sau chat live, nu unui email formal.",
          },
        },
        {
          "@type": "Question",
          name: "Cum automatizezi răspunsul la lead-uri pe WhatsApp?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Prin WhatsApp Business API conectat la o platformă de automatizare care trimite un mesaj inițial personalizat în secunde, califică lead-ul prin 2-3 întrebări ghidate și propune sloturi de programare din Google Calendar, fără intervenție umană în etapa inițială.",
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
          name: "17 statistici viteza de răspuns lead-uri",
          item: "https://pinggo.ro/blog/statistici-timp-raspuns-lead-uri-romania",
        },
      ],
    },
  ],
} as const;
