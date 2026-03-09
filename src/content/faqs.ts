import type { FAQSchemaItem } from "@/lib/structuredData";

export const HOME_FAQ_ITEMS: FAQSchemaItem[] = [
  {
    question: "Avem deja CRM. De ce ne trebuie Pinggo?",
    answer:
      "CRM-ul stochează date. Pinggo garantează execuția. Poți folosi Pinggo în paralel cu orice CRM: noi ne ocupăm de termen de răspuns, escaladare și dovadă, CRM-ul rămâne sursa de adevăr pentru date.",
  },
  {
    question: "Putem folosi Pinggo fără CRM?",
    answer:
      "Da. Pinggo funcționează singur. Leadurile intră prin webhook sau redirecționare e-mail, fără CRM. Ideal pentru echipe mici sau agenții.",
  },
  {
    question: "Ce înseamnă dovada de primul contact?",
    answer:
      "Dovada = eveniment verificabil că agentul a contactat lead-ul. Poate fi un mesaj WhatsApp trimis, un e-mail trimis sau un apel. Fără dovadă, termenul rămâne deschis.",
  },
  {
    question: "Se poate folosi cu WhatsApp?",
    answer:
      "Da. Integrăm cu WhatsApp Business API. Când agentul trimite un mesaj pe WhatsApp, Pinggo înregistrează automat dovada și oprește cronometrul.",
  },
  {
    question: "Cum funcționează în afara orelor de lucru?",
    answer:
      "Termenul se calculează doar pe ore de lucru. Dacă un lead vine la 23:00, cronometrul pornește a doua zi la 09:00. Configurezi programul pe echipă sau agent.",
  },
  {
    question: "Putem seta termene diferite pe tipuri de leaduri?",
    answer:
      "Da. Poți defini termene diferite pe sursă (Facebook, Google, site), tip (intent ridicat sau scăzut), valoare estimată sau orice câmp din payload.",
  },
  {
    question: "Cât durează să fiu live cu Pinggo?",
    answer:
      "Mai puțin de 1 oră. Tu ne trimiți informațiile despre echipă și fluxul de leaduri, noi facem configurarea. Integrarea cu CRM-ul (HubSpot, Pipedrive, Zoho etc.) o faci tu prin ghid pas cu pas — durează 10–15 minute. Înainte de prânz ești live.",
  },
];
