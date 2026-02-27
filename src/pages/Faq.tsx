import { Layout } from "@/components/layout/Layout";
import { FAQSection } from "@/components/home/FAQSection";
import { SEOHead } from "@/components/SEOHead";
import { HOME_FAQ_ITEMS } from "@/content/faqs";
import { buildFAQSchema } from "@/lib/structuredData";

const Faq = () => {
  return (
    <Layout>
      <SEOHead
        title="Găsești rapid răspunsuri despre Pinggo"
        description="Întrebări frecvente despre integrare, SLA, WhatsApp și implementare Pinggo."
        path="/faq"
        structuredData={buildFAQSchema(HOME_FAQ_ITEMS)}
      />
      <FAQSection />
    </Layout>
  );
};

export default Faq;
