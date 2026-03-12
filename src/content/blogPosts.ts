export type BlogPostSection = {
  heading: string;
  paragraphs: string[];
  bullets?: string[];
};

export type BlogPost = {
  slug: string;
  href?: string;
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
    slug: "statistici-timp-raspuns-lead-uri-romania",
    href: "/blog/statistici-timp-raspuns-lead-uri-romania",
    title: "17 statistici despre viteza de răspuns la lead-uri care arată de ce pierzi clienți",
    excerpt:
      "78% din clienți cumpără de la prima firmă care răspunde. Vezi 17 statistici care arată cât costă fiecare oră de întârziere.",
    publishedAt: "2026-03-11",
    readingTime: "9 min",
    author: "Echipa Pinggo",
    category: "Statistici",
    sections: [
      {
        heading: "Ce spun cifrele despre speed to lead",
        paragraphs: [
          "Date despre conversie, WhatsApp și timpii de răspuns care arată de ce prima firmă care răspunde câștigă clientul.",
        ],
      },
    ],
  },
  {
    slug: "pacient-nou-pierdut-clinica-whatsapp",
    href: "/blog/pacient-nou-pierdut-clinica-whatsapp",
    title: "De ce 7 din 10 pacienți noi nu mai ajung la prima programare — și cum să oprești pierderea",
    excerpt:
      "Clinicile din România pierd 40-70% din pacienții noi din cauza timpului de răspuns pe WhatsApp. Vezi de ce se întâmplă și cum oprești pierderea.",
    publishedAt: "2026-03-01",
    readingTime: "8 min",
    author: "Echipa Pinggo",
    category: "Clinici",
    sections: [
      {
        heading: "Problema reală: viteza de răspuns",
        paragraphs: [
          "Pacienții noi contactează mai multe clinici în paralel, iar prima care răspunde are avantaj clar în conversie.",
        ],
      },
    ],
  },
  {
    slug: "cat-costa-un-lead-pierdut-romania",
    href: "/blog/cat-costa-un-lead-pierdut-romania",
    title: "Cât costă un lead pierdut? Calculul pe care niciun owner din România nu vrea să-l facă",
    excerpt:
      "Un lead pierdut înseamnă buget irosit, timp pierdut și venituri ratate. Vezi calculul complet pe nișe și cum reduci pierderile.",
    publishedAt: "2026-03-01",
    readingTime: "11 min",
    author: "Echipa Pinggo",
    category: "Leaduri",
    sections: [
      {
        heading: "Calculul real al unui lead ignorat",
        paragraphs: [
          "Exemple concrete pentru clinici, solar și imobiliare, plus calculator interactiv de pierderi.",
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
