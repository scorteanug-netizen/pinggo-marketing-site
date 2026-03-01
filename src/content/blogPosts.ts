export type BlogPostSection = {
  heading: string;
  paragraphs: string[];
  bullets?: string[];
};

export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  publishedAt: string;
  readingTime: string;
  author: string;
  category: string;
  sections: BlogPostSection[];
};

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "cat-costa-un-lead-pierdut",
    title: "Cât costă un lead pierdut? Calculul pe care niciun owner din România nu vrea să-l facă",
    excerpt:
      "Un lead pierdut nu înseamnă doar un client în minus. Înseamnă buget de marketing irosit, timp pierdut și un concurent care a câștigat în locul tău.",
    publishedAt: "2026-03-01",
    readingTime: "11 min",
    author: "Echipa Pinggo",
    category: "Leaduri",
    sections: [
      {
        heading: "Calculul real al unui lead ignorat",
        paragraphs: [
          "În acest articol detaliem costul lunar și anual al leadurilor nepreluate la timp, cu exemple concrete pentru clinici, companii solar și agenții imobiliare.",
        ],
      },
    ],
  },
  {
    slug: "cum-scazi-timpul-de-raspuns-la-leaduri",
    title: "Cum scazi timpul de raspuns la leaduri sub 60 de secunde",
    excerpt:
      "Un proces simplu care elimina blocajele dintre formular, agent si primul mesaj trimis catre client.",
    publishedAt: "2026-02-12",
    readingTime: "6 min",
    author: "Echipa Pinggo",
    category: "Playbook",
    sections: [
      {
        heading: "Problema reala nu este lipsa de leaduri",
        paragraphs: [
          "Majoritatea echipelor pierd vanzari dupa ce leadul este deja in CRM. Intarzierea apare in primele minute, cand nimeni nu preia clar responsabilitatea pentru primul contact.",
          "Fiecare minut in plus scade sansele de conversie. De aceea, obiectivul nu este doar sa colectezi leaduri, ci sa trimiti imediat primul mesaj util.",
        ],
      },
      {
        heading: "Ce trebuie standardizat",
        paragraphs: [
          "Ai nevoie de un flux minim, repetabil, care ruleaza identic indiferent de sursa leadului. Fara reguli clare, echipa ajunge la follow-up inconstant.",
        ],
        bullets: [
          "Un singur canal de intrare pentru toate leadurile noi.",
          "Alocare automata catre agent disponibil.",
          "Prim mesaj predefinit care confirma primirea solicitarii.",
          "Escaladare daca leadul nu este contactat in intervalul setat.",
        ],
      },
      {
        heading: "Metrica pe care merita sa o urmaresti",
        paragraphs: [
          "Nu urmari doar numarul total de leaduri. Monitorizeaza timpul pana la primul mesaj trimis, procentul de leaduri contactate in primele 5 minute si numarul de leaduri neacoperite la final de zi.",
          "Cand aceste trei metrici devin vizibile pentru toata echipa, performanta creste natural fara sedinte suplimentare.",
        ],
      },
    ],
  },
  {
    slug: "automatizare-whatsapp-pentru-echipe-mici",
    title: "Automatizare WhatsApp pentru echipe mici: de unde incepi",
    excerpt:
      "Structura minima pentru o echipa de 2-5 oameni care vrea sa raspunda rapid fara sa piarda controlul conversatiei.",
    publishedAt: "2026-01-28",
    readingTime: "5 min",
    author: "Echipa Pinggo",
    category: "WhatsApp",
    sections: [
      {
        heading: "Porneste simplu",
        paragraphs: [
          "In prima faza nu ai nevoie de zeci de scenarii. E suficient sa automatizezi trei momente: confirmarea de primire, alocarea catre un agent si reminderul intern daca nu exista raspuns.",
          "Aceasta baza iti ofera predictibilitate, iar echipa ramane libera sa poarte conversatii naturale cu clientii.",
        ],
      },
      {
        heading: "Reguli care tin lucrurile clare",
        paragraphs: [
          "Cand exista mai multi agenti, apar usor suprapuneri. Reguli simple elimina confuzia si reduc timpul pierdut in discutii interne.",
        ],
        bullets: [
          "Fiecare lead are un owner unic in primele secunde.",
          "Daca ownerul nu raspunde, leadul este redirectionat automat.",
          "Orice schimbare de status este vizibila in dashboard.",
        ],
      },
      {
        heading: "Cand stii ca poti extinde automatizarea",
        paragraphs: [
          "Daca rata de raspuns in primele 5 minute depaseste constant 85%, poti adauga scenarii pentru pre-calificare, programari automate si mesaje contextuale pe tip de campanie.",
          "Extinderea are sens doar dupa ce fluxul de baza functioneaza stabil in fiecare zi.",
        ],
      },
    ],
  },
  {
    slug: "escaladare-automata-fara-zgomot",
    title: "Escaladare automata fara zgomot: cum configurezi alertele utile",
    excerpt:
      "Alertele bune nu inseamna mai multe notificari, ci notificari clare atunci cand exista risc real de lead pierdut.",
    publishedAt: "2026-01-10",
    readingTime: "4 min",
    author: "Echipa Pinggo",
    category: "Operatiuni",
    sections: [
      {
        heading: "De ce esueaza majoritatea alertelor",
        paragraphs: [
          "Multe sisteme trimit alerte pentru orice actiune minora. Echipa devine saturata, iar semnalele importante sunt ignorate.",
          "Escaladarea trebuie sa porneasca doar cand un lead se apropie de limita acceptata de raspuns sau cand nu exista owner activ.",
        ],
      },
      {
        heading: "Checklist de configurare",
        paragraphs: [
          "Un setup bun pentru alerte este scurt si clar. Daca dureaza prea mult sa intelegi ce s-a intamplat, alerta nu este buna.",
        ],
        bullets: [
          "Defineste pragul de alerta in minute, nu in statusuri vagi.",
          "Trimite alerta direct persoanei responsabile, apoi managerului.",
          "Include in mesaj sursa leadului, ownerul curent si timpul scurs.",
          "Ofera un singur buton de actiune rapida.",
        ],
      },
      {
        heading: "Rezultatul urmarit",
        paragraphs: [
          "Obiectivul nu este sa ai zero alerte, ci sa ai alerte actionabile. Cand fiecare alerta poate fi rezolvata in sub un minut, procesele raman curate si leadurile importante nu se pierd.",
        ],
      },
    ],
  },
];

const dateFormatter = new Intl.DateTimeFormat("ro-RO", {
  day: "2-digit",
  month: "long",
  year: "numeric",
});

export function formatBlogDate(date: string): string {
  return dateFormatter.format(new Date(date));
}

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return BLOG_POSTS.find((post) => post.slug === slug);
}
