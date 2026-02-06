import { Layout } from "@/components/layout/Layout";
import { HeroSection } from "@/components/home/HeroSection";
import { EcosistemSection } from "@/components/home/EcosistemSection";
import { ConfigureziPinggoSection } from "@/components/home/ConfigureziPinggoSection";
import { SocialProofSection } from "@/components/home/SocialProofSection";
import { ProblemSection } from "@/components/home/ProblemSection";
import { HowItWorksSection } from "@/components/home/HowItWorksSection";
import { DifferentiationSection } from "@/components/home/DifferentiationSection";
import { FeaturesSection } from "@/components/home/FeaturesSection";
import { IntegrationsSection } from "@/components/home/IntegrationsSection";
import { PricingTeaserSection } from "@/components/home/PricingTeaserSection";
import { FAQSection } from "@/components/home/FAQSection";
import { FinalCTASection } from "@/components/home/FinalCTASection";

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <EcosistemSection />
      <ConfigureziPinggoSection />
      <SocialProofSection />
      <ProblemSection />
      <HowItWorksSection />
      <DifferentiationSection />
      <FeaturesSection />
      <IntegrationsSection />
      <PricingTeaserSection />
      <FAQSection />
      <FinalCTASection />
    </Layout>
  );
};

export default Index;
