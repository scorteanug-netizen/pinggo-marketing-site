import { Layout } from "@/components/layout/Layout";
import { SEOHead } from "@/components/SEOHead";
import { HeroSection } from "@/components/home/HeroSection";
import { LaunchBandSection } from "@/components/home/LaunchBandSection";
import { ProblemSection } from "@/components/home/ProblemSection";
import { HowItWorksSection } from "@/components/home/HowItWorksSection";
import { ManagerDashboardSection } from "@/components/home/ManagerDashboardSection";
import { UnSingurSistemSection } from "@/components/home/UnSingurSistemSection";
import { EcosistemSection } from "@/components/home/EcosistemSection";
// TODO: Add real testimonials before re-enabling
// import { SocialProofSection } from "@/components/home/SocialProofSection";
import { PricingTeaserSection } from "@/components/home/PricingTeaserSection";
import { TestimonialeSection } from "@/components/home/TestimonialeSection";
import { FAQSection } from "@/components/home/FAQSection";
import { FinalCTASection } from "@/components/home/FinalCTASection";
import { HOME_FAQ_ITEMS } from "@/content/faqs";
import { buildFAQSchema, buildSoftwareApplicationSchema } from "@/lib/structuredData";

const Index = () => {
  return (
    <Layout>
      <SEOHead
        title="Răspunzi la lead-uri în 15 secunde"
        description="Pinggo preia fiecare lead pe WhatsApp, îl programează automat și escaladează dacă nimeni nu răspunde. Setup în mai puțin de 1 oră."
        path="/"
        structuredData={[
          buildSoftwareApplicationSchema(),
          buildFAQSchema(HOME_FAQ_ITEMS),
        ]}
      />
      <HeroSection />
      <LaunchBandSection />
      <ProblemSection />
      <HowItWorksSection />
      <UnSingurSistemSection />
      <ManagerDashboardSection />
      <EcosistemSection />
      <PricingTeaserSection />
      <TestimonialeSection />
      <FAQSection />
      <FinalCTASection />
    </Layout>
  );
};

export default Index;
