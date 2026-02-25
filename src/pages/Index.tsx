import { Layout } from "@/components/layout/Layout";
import { HeroSection } from "@/components/home/HeroSection";
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

const Index = () => {
  return (
    <Layout>
      <HeroSection />
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
