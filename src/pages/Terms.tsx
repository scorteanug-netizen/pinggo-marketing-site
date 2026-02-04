import { Layout } from "@/components/layout/Layout";
import { Section } from "@/components/layout/Section";

const Terms = () => {
  return (
    <Layout>
      <Section>
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl mb-8">
            Terms of Service
          </h1>

          <div className="prose prose-gray max-w-none space-y-6">
            <p className="text-muted-foreground">
              Last updated: January 2024
            </p>

            <h2 className="text-xl font-semibold text-foreground mt-8">1. Agreement to Terms</h2>
            <p className="text-muted-foreground">
              By accessing or using Pinggo, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our service.
            </p>

            <h2 className="text-xl font-semibold text-foreground mt-8">2. Description of Service</h2>
            <p className="text-muted-foreground">
              Pinggo provides SLA enforcement and first contact proof tracking for sales teams. Our service includes lead intake, SLA monitoring, escalation automation, and reporting.
            </p>

            <h2 className="text-xl font-semibold text-foreground mt-8">3. User Accounts</h2>
            <p className="text-muted-foreground">
              You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account. You must notify us immediately of any unauthorized use.
            </p>

            <h2 className="text-xl font-semibold text-foreground mt-8">4. Acceptable Use</h2>
            <p className="text-muted-foreground">
              You agree not to use Pinggo for any unlawful purpose or in any way that could damage, disable, or impair the service. You may not attempt to gain unauthorized access to any part of the service.
            </p>

            <h2 className="text-xl font-semibold text-foreground mt-8">5. Data Protection</h2>
            <p className="text-muted-foreground">
              We process personal data in accordance with our Privacy Policy and applicable data protection laws, including GDPR. You are responsible for ensuring you have appropriate consents to share lead data with Pinggo.
            </p>

            <h2 className="text-xl font-semibold text-foreground mt-8">6. Payment Terms</h2>
            <p className="text-muted-foreground">
              Subscription fees are billed monthly or annually in advance. All fees are non-refundable except as expressly stated in these terms or required by law.
            </p>

            <h2 className="text-xl font-semibold text-foreground mt-8">7. Limitation of Liability</h2>
            <p className="text-muted-foreground">
              Pinggo shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising out of or relating to your use of the service.
            </p>

            <h2 className="text-xl font-semibold text-foreground mt-8">8. Changes to Terms</h2>
            <p className="text-muted-foreground">
              We reserve the right to modify these terms at any time. We will notify you of significant changes via email or through the service.
            </p>

            <h2 className="text-xl font-semibold text-foreground mt-8">9. Contact</h2>
            <p className="text-muted-foreground">
              For questions about these Terms, contact us at legal@pinggo.io.
            </p>
          </div>
        </div>
      </Section>
    </Layout>
  );
};

export default Terms;
