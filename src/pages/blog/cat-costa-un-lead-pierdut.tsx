import { BlogHeader } from "@/components/blog/BlogHeader";
import { BlogLayout, FadeInSection } from "@/components/blog/BlogLayout";
import { BlogTable } from "@/components/blog/BlogTable";
import { LeadCostCalculator } from "@/components/blog/LeadCostCalculator";
import { NisaCard } from "@/components/blog/NisaCard";
import { SchemaMarkup } from "@/components/blog/SchemaMarkup";
import { StatHighlight } from "@/components/blog/StatHighlight";
import {
  articleMetadata,
  articleSchema,
  calculatorExample,
  concluzieParagraphs,
  faqItems,
  formulaCore,
  formulaVariables,
  globalStats,
  introParagraphs,
  nisaCards,
  problemePrincipale,
  romanianResponseTimes,
  section15SecundeBullets,
  section15SecundeParagraphs,
  sectionCeEsteLeadPierdut,
  sectionDeCeTarziuParagraphs,
  tocItems,
} from "@/content/blog/cat-costa-un-lead-pierdut";

export default function BlogLeadCostPage() {
  return (
    <BlogLayout tocItems={tocItems}>
      <SchemaMarkup schema={articleSchema as unknown as Record<string, unknown>} />

      <article className="space-y-12">
        <BlogHeader
          title={articleMetadata.title}
          description={articleMetadata.description}
          author={articleMetadata.author}
          date={articleMetadata.date}
          tags={[...articleMetadata.tags]}
          readingTime={articleMetadata.readingTime}
          seo={{
            titleTag: "Cât costă un lead pierdut? Calculul real pentru afaceri din România | Pinggo",
            description: articleMetadata.description,
            canonical: articleMetadata.canonicalUrl,
            robots: "index, follow",
            locale: "ro_RO",
            ogType: "article",
            ogTitle: "Cât costă un lead pierdut? Calculul pe care niciun owner nu vrea să-l facă",
            ogDescription:
              "Calculează exact cât pierde afacerea ta lunar din leads nepreluate la timp. Date concrete pentru clinici dentare, solar și imobiliare.",
            ogUrl: articleMetadata.canonicalUrl,
            ogImage: articleMetadata.ogImage,
            ogImageWidth: 1200,
            ogImageHeight: 630,
            ogSiteName: "Pinggo",
            articlePublishedTime: articleMetadata.publishedAtIso,
            articleModifiedTime: articleMetadata.publishedAtIso,
            articleAuthor: articleMetadata.author,
            articleTags: ["leaduri", "WhatsApp", "cost per lead"],
            twitterCard: "summary_large_image",
            twitterTitle: "Cât costă un lead pierdut în România?",
            twitterDescription:
              "Calculul real pe care niciun owner nu vrea să-l facă. Date concrete pentru clinici, solar, imobiliare.",
            twitterImage: articleMetadata.ogImage,
          }}
        />

        <FadeInSection>
          <section className="space-y-5 rounded-2xl border border-border/60 bg-background p-6 md:p-8">
            {introParagraphs.map((paragraph) => (
              <p key={paragraph} className="text-base leading-relaxed text-muted-foreground md:text-lg">
                {paragraph}
              </p>
            ))}
          </section>
        </FadeInSection>

        <FadeInSection>
          <section id="ce-este-un-lead-pierdut" className="space-y-5">
            <h2 className="text-foreground">Ce este un lead pierdut?</h2>
            {sectionCeEsteLeadPierdut.map((paragraph) => (
              <p key={paragraph} className="text-base leading-relaxed text-muted-foreground md:text-lg">
                {paragraph}
              </p>
            ))}
          </section>
        </FadeInSection>

        <FadeInSection>
          <section id="formula-de-calcul" className="space-y-5">
            <h2 className="text-foreground">Formula de calcul a unui lead pierdut</h2>
            <p className="text-base leading-relaxed text-muted-foreground md:text-lg">
              Înainte de cifre, ai nevoie de trei variabile pe care să le urmărești constant.
            </p>
            <ul className="space-y-3">
              {formulaVariables.map((item) => (
                <li key={item} className="flex items-start gap-3 text-muted-foreground">
                  <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-orange-500" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <div className="rounded-xl border border-orange-200 bg-orange-50 p-5">
              <p className="text-sm font-semibold text-orange-700">Formula rapidă</p>
              <p className="mt-2 text-base font-semibold text-orange-800">{formulaCore.leadsLost}</p>
              <p className="mt-1 text-base font-semibold text-orange-800">{formulaCore.revenueLost}</p>
            </div>
          </section>
        </FadeInSection>

        <FadeInSection>
          <section id="calculul-pe-nise" className="space-y-6">
            <h2 className="text-foreground">Calculul pe nișe — cât pierzi concret</h2>
            <div className="space-y-6">
              {nisaCards.map((nisa, index) => (
                <NisaCard key={nisa.key} content={nisa} index={index} />
              ))}
            </div>
          </section>
        </FadeInSection>

        <FadeInSection>
          <section id="de-ce-raspundem-tarziu" className="space-y-5">
            <h2 className="text-foreground">De ce răspundem târziu? (Adevărul incomod)</h2>
            {sectionDeCeTarziuParagraphs.map((paragraph) => (
              <p key={paragraph} className="text-base leading-relaxed text-muted-foreground md:text-lg">
                {paragraph}
              </p>
            ))}
            <ul className="space-y-3">
              {problemePrincipale.map((problem) => (
                <li key={problem} className="flex items-start gap-3 text-muted-foreground">
                  <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-orange-500" />
                  <span>{problem}</span>
                </li>
              ))}
            </ul>
          </section>
        </FadeInSection>

        <FadeInSection>
          <div className="my-12 rounded-2xl bg-gradient-to-br from-orange-500 to-orange-600 p-8 text-white">
            <p className="text-sm font-medium uppercase tracking-wider opacity-80">Pinggo</p>
            <p className="mt-2 text-2xl font-bold font-heading">Răspuns automat în 15 secunde pe WhatsApp</p>
            <p className="mt-3 text-orange-100">
              Fără să ocupi timp din echipa ta. Configurare completă inclusă.
            </p>
            <a
              href="https://pinggo.ro/#contact"
              className="mt-6 inline-block rounded-xl bg-white px-6 py-3 font-semibold text-orange-600 transition-transform hover:scale-105"
            >
              Solicită demo gratuit →
            </a>
          </div>
        </FadeInSection>

        <FadeInSection>
          <section id="date-globale" className="space-y-6">
            <h2 className="text-foreground">Ce spun datele globale despre viteza de răspuns</h2>
            <div className="grid gap-4 sm:grid-cols-2">
              {globalStats.map((stat) => (
                <StatHighlight
                  key={`${stat.label}-${stat.value}`}
                  value={stat.value}
                  suffix={stat.suffix}
                  label={stat.label}
                  source={stat.source}
                />
              ))}
            </div>

            <div className="space-y-3 rounded-2xl border border-border/70 bg-secondary/40 p-5">
              <p className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">
                Timp mediu de răspuns în România
              </p>
              <BlogTable headers={["Sector", "Timp mediu"]} rows={romanianResponseTimes} />
            </div>
          </section>
        </FadeInSection>

        <FadeInSection>
          <section id="calculator-pierderi" className="space-y-5">
            <h2 className="text-foreground">Calculatorul de pierderi — calculează acum pentru afacerea ta</h2>
            <p className="text-base leading-relaxed text-muted-foreground md:text-lg">
              Folosește calculatorul de mai jos pentru a estima impactul real al leadurilor nepreluate la timp.
            </p>
            <LeadCostCalculator />
            <div className="rounded-xl border border-border/70 bg-background p-5">
              <p className="text-sm font-semibold text-foreground">Exemplu rapid</p>
              <ul className="mt-3 space-y-2">
                {calculatorExample.map((line) => (
                  <li key={line} className="text-sm text-muted-foreground">
                    {line}
                  </li>
                ))}
              </ul>
            </div>
          </section>
        </FadeInSection>

        <FadeInSection>
          <section id="raspuns-in-15-secunde" className="space-y-5">
            <h2 className="text-foreground">Ce face diferența: răspunsul în primele 15 secunde</h2>
            {section15SecundeParagraphs.map((paragraph) => (
              <p key={paragraph} className="text-base leading-relaxed text-muted-foreground md:text-lg">
                {paragraph}
              </p>
            ))}

            <ul className="space-y-3">
              {section15SecundeBullets.map((bullet) => (
                <li key={bullet} className="flex items-start gap-3 text-muted-foreground">
                  <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-orange-500" />
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
          </section>
        </FadeInSection>

        <FadeInSection>
          <section id="intrebari-frecvente" className="space-y-6">
            <h2 className="text-foreground">Întrebări frecvente</h2>
            <div className="space-y-4">
              {faqItems.map((item) => (
                <div key={item.question} className="rounded-xl border border-border/70 bg-background p-5">
                  <p className="text-base font-semibold text-foreground">{item.question}</p>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground md:text-base">{item.answer}</p>
                </div>
              ))}
            </div>
          </section>
        </FadeInSection>

        <FadeInSection>
          <section id="concluzie" className="space-y-5 rounded-2xl border border-orange-200 bg-orange-50 p-6 md:p-8">
            <h2 className="text-foreground">Concluzie</h2>
            {concluzieParagraphs.map((paragraph) => (
              <p key={paragraph} className="text-base leading-relaxed text-muted-foreground md:text-lg">
                {paragraph}
              </p>
            ))}
            <a
              href="https://pinggo.ro/#contact"
              className="inline-flex rounded-xl bg-orange-500 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-orange-600"
            >
              Solicită un demo gratuit →
            </a>
          </section>
        </FadeInSection>
      </article>
    </BlogLayout>
  );
}
