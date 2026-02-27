import type { FAQSchemaItem } from "@/lib/structuredData";

export const HOME_FAQ_ITEMS: FAQSchemaItem[] = [
  {
    question: "Avem deja CRM. De ce ne trebuie Pinggo?",
    answer:
      "CRM-ul stocheaza date. Pinggo garanteaza executia. Poti folosi Pinggo in paralel cu orice CRM: noi ne ocupam de termen de raspuns, escaladare si dovada, CRM-ul ramane sursa de adevar pentru date.",
  },
  {
    question: "Putem folosi Pinggo fara CRM?",
    answer:
      "Da. Pinggo functioneaza singur. Leadurile intra prin webhook sau redirectionare e-mail, fara CRM. Ideal pentru echipe mici sau agentii.",
  },
  {
    question: "Ce inseamna dovada de primul contact?",
    answer:
      "Dovada = eveniment verificabil ca agentul a contactat lead-ul. Poate fi un mesaj WhatsApp trimis, un e-mail trimis sau un apel. Fara dovada, termenul ramane deschis.",
  },
  {
    question: "Se poate folosi cu WhatsApp?",
    answer:
      "Da. Integram cu WhatsApp Business API. Cand agentul trimite un mesaj pe WhatsApp, Pinggo inregistreaza automat dovada si opreste cronometrul.",
  },
  {
    question: "Cum functioneaza in afara orelor de lucru?",
    answer:
      "Termenul se calculeaza doar pe ore de lucru. Daca un lead vine la 23:00, cronometrul porneste a doua zi la 09:00. Configurezi programul pe echipa sau agent.",
  },
  {
    question: "Putem seta termene diferite pe tipuri de leaduri?",
    answer:
      "Da. Poti defini termene diferite pe sursa (Facebook, Google, site), tip (intent ridicat sau scazut), valoare estimata sau orice camp din payload.",
  },
  {
    question: "Cât durează să fiu live cu Pinggo?",
    answer:
      "Mai puțin de 1 oră. Tu ne trimiți informațiile despre echipă și fluxul de leaduri, noi facem configurarea. Integrarea cu CRM-ul (HubSpot, Pipedrive, Zoho etc.) o faci tu prin ghid pas cu pas — durează 10–15 minute. Înainte de prânz ești live.",
  },
];
