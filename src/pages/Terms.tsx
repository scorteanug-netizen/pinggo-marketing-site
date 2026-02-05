import { Layout } from "@/components/layout/Layout";
import { Section } from "@/components/layout/Section";

const Terms = () => {
  return (
    <Layout>
      <Section>
        <div className="max-w-3xl mx-auto">
          <h1 className="text-foreground mb-10">
            Terms of Service
          </h1>

          <div className="prose prose-gray max-w-none space-y-8">
            <p className="text-muted-foreground text-lg">
              Last updated: January 2024
            </p>

            <div className="p-6 rounded-2xl bg-secondary/50 border border-border/50">
              <h2 className="text-2xl font-bold text-foreground mb-4">1. Agreement to Terms</h2>
              <p className="text-muted-foreground leading-relaxed">
                By accessing or using Pinggo, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our service.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-secondary/50 border border-border/50">
              <h2 className="text-2xl font-bold text-foreground mb-4">2. Description of Service</h2>
              <p className="text-muted-foreground leading-relaxed">
                Pinggo provides SLA enforcement and first contact proof tracking for sales teams. Our service includes lead intake, SLA monitoring, escalation automation, and reporting.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-secondary/50 border border-border/50">
              <h2 className="text-2xl font-bold text-foreground mb-4">3. User Accounts</h2>
              <p className="text-muted-foreground leading-relaxed">
                You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account. You must notify us immediately of any unauthorized use.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-secondary/50 border border-border/50">
              <h2 className="text-2xl font-bold text-foreground mb-4">4. Acceptable Use</h2>
              <p className="text-muted-foreground leading-relaxed">
                You agree not to use Pinggo for any unlawful purpose or in any way that could damage, disable, or impair the service. You may not attempt to gain unauthorized access to any part of the service.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-secondary/50 border border-border/50">
              <h2 className="text-2xl font-bold text-foreground mb-4">5. Data Protection</h2>
              <p className="text-muted-foreground leading-relaxed">
                We process personal data in accordance with our Privacy Policy and applicable data protection laws, including GDPR. You are responsible for ensuring you have appropriate consents to share lead data with Pinggo.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-secondary/50 border border-border/50">
              <h2 className="text-2xl font-bold text-foreground mb-4">6. Payment Terms</h2>
              <p className="text-muted-foreground leading-relaxed">
                Subscription fees are billed monthly or annually in advance. All fees are non-refundable except as expressly stated in these terms or required by law.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-secondary/50 border border-border/50">
              <h2 className="text-2xl font-bold text-foreground mb-4">7. Limitation of Liability</h2>
              <p className="text-muted-foreground leading-relaxed">
                Pinggo shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising out of or relating to your use of the service.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-secondary/50 border border-border/50">
              <h2 className="text-2xl font-bold text-foreground mb-4">8. Changes to Terms</h2>
              <p className="text-muted-foreground leading-relaxed">
                We reserve the right to modify these terms at any time. We will notify you of significant changes via email or through the service.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-secondary/50 border border-border/50">
              <h2 className="text-2xl font-bold text-foreground mb-4">9. Contact</h2>
              <p className="text-muted-foreground leading-relaxed">
                For questions about these Terms, contact us at legal@pinggo.io.
              </p>
            </div>
          </div>
        </div>
      </Section>
    </Layout>
  );
};

export default Terms;
