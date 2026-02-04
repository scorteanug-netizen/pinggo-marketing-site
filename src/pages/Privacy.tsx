import { Layout } from "@/components/layout/Layout";
import { Section } from "@/components/layout/Section";

const Privacy = () => {
  return (
    <Layout>
      <Section>
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl mb-8">
            Privacy Policy
          </h1>

          <div className="prose prose-gray max-w-none space-y-6">
            <p className="text-muted-foreground">
              Last updated: January 2024
            </p>

            <h2 className="text-xl font-semibold text-foreground mt-8">1. Introduction</h2>
            <p className="text-muted-foreground">
              Pinggo ("we", "us", "our") is committed to protecting your privacy. This policy explains how we collect, use, and safeguard your information when you use our service.
            </p>

            <h2 className="text-xl font-semibold text-foreground mt-8">2. Information We Collect</h2>
            <p className="text-muted-foreground">
              We collect information you provide directly, including account details, lead data, and communication records. We also collect usage data automatically through cookies and similar technologies.
            </p>

            <h2 className="text-xl font-semibold text-foreground mt-8">3. How We Use Your Information</h2>
            <p className="text-muted-foreground">
              We use your information to provide and improve our service, process transactions, send notifications, and comply with legal obligations. We do not sell your personal data to third parties.
            </p>

            <h2 className="text-xl font-semibold text-foreground mt-8">4. Data Storage and Security</h2>
            <p className="text-muted-foreground">
              Your data is stored securely in EU-based data centers. We implement industry-standard security measures including encryption, access controls, and regular security audits.
            </p>

            <h2 className="text-xl font-semibold text-foreground mt-8">5. Data Retention</h2>
            <p className="text-muted-foreground">
              We retain your data for as long as your account is active or as needed to provide services. You can request deletion of your data at any time by contacting us.
            </p>

            <h2 className="text-xl font-semibold text-foreground mt-8">6. Your Rights (GDPR)</h2>
            <p className="text-muted-foreground">
              Under GDPR, you have the right to access, rectify, erase, restrict processing, data portability, and object to processing of your personal data. To exercise these rights, contact us at privacy@pinggo.io.
            </p>

            <h2 className="text-xl font-semibold text-foreground mt-8">7. Third-Party Services</h2>
            <p className="text-muted-foreground">
              We use third-party services for hosting, analytics, and communication. These providers are contractually bound to protect your data and process it only as instructed by us.
            </p>

            <h2 className="text-xl font-semibold text-foreground mt-8">8. Cookies</h2>
            <p className="text-muted-foreground">
              We use essential cookies to operate our service and optional analytics cookies to understand usage. You can manage cookie preferences through your browser settings.
            </p>

            <h2 className="text-xl font-semibold text-foreground mt-8">9. Changes to This Policy</h2>
            <p className="text-muted-foreground">
              We may update this policy from time to time. We will notify you of significant changes via email or through the service.
            </p>

            <h2 className="text-xl font-semibold text-foreground mt-8">10. Contact Us</h2>
            <p className="text-muted-foreground">
              For questions about this Privacy Policy or to exercise your data rights, contact us at privacy@pinggo.io.
            </p>
          </div>
        </div>
      </Section>
    </Layout>
  );
};

export default Privacy;
