import { BlogHeader } from "@/components/blog/BlogHeader";
import { BlogLayout, FadeInSection } from "@/components/blog/BlogLayout";
import { BlogTable } from "@/components/blog/BlogTable";
import { SchemaMarkup } from "@/components/blog/SchemaMarkup";
import {
  articleMetadata,
  articleSchema,
  checklistAdvanced,
  checklistEssentials,
  checklistImportant,
  concluzieParagraphs,
  faqItems,
  introParagraphs,
  leadLossTableHeaders,
  leadLossTableRows,
  sectionCalculParagraphs,
  sectionProblemaVitezaBullets,
  sectionProblemaVitezaParagraphs,
  sectionSchimbatParagraphs,
  sectionSolutiaItems,
  sectionSolutiaParagraphs,
  scenariuItems,
  tocItems,
  vinovati,
} from "@/content/blog/pacient-nou-pierdut-clinica-whatsapp";

const ogImageUrl = `https://pinggo.ro${articleMetadata.ogImage}`;

export default function BlogPacientiPage() {
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
          readingTime={`${articleMetadata.readingTime} min`}
          seo={{
            titleTag: `${articleMetadata.titleTag} | Pinggo`,
            description: articleMetadata.description,
            canonical: articleMetadata.canonical,
            robots: articleMetadata.robots,
            keywords: [...articleMetadata.seoKeywords],
            locale: articleMetadata.locale,
            ogType: "article",
            ogTitle: articleMetadata.titleTag,
            ogDescription: articleMetadata.description,
            ogUrl: articleMetadata.canonical,
            ogImage: ogImageUrl,
            ogImageWidth: 1200,
            ogImageHeight: 630,
            ogSiteName: "Pinggo",
            articlePublishedTime: articleMetadata.date,
            articleModifiedTime: articleMetadata.lastModified,
            articleAuthor: "Pinggo",
            articleTags: ["clinici dentare", "WhatsApp", "pacienți noi"],
            twitterCard: "summary_large_image",
            twitterTitle: articleMetadata.titleTag,
            twitterDescription: articleMetadata.description,
            twitterImage: ogImageUrl,
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
          <section id="problema-viteza" className="space-y-5">
            <h2 className="text-foreground">Problema nu e prețul. Nu e locația. E viteza.</h2>
            {sectionProblemaVitezaParagraphs.map((paragraph) => (
              <p key={paragraph} className="text-base leading-relaxed text-muted-foreground md:text-lg">
                {paragraph}
              </p>
            ))}
            <ul className="space-y-3">
              {sectionProblemaVitezaBullets.map((item) => (
                <li key={item} className="flex items-start gap-3 text-muted-foreground">
                  <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-orange-500" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>
        </FadeInSection>

        <FadeInSection>
          <section id="vinovati" className="space-y-6">
            <h2 className="text-foreground">Cei 3 vinovați principali</h2>
            <div className="space-y-6">
              {vinovati.map((entry) => (
                <div key={entry.title} className="rounded-2xl border border-border/70 bg-background p-6">
                  <h3 className="text-2xl font-bold text-foreground">{entry.title}</h3>
                  <div className="mt-3 space-y-3">
                    {entry.paragraphs.map((paragraph) => (
                      <p key={paragraph} className="text-base leading-relaxed text-muted-foreground md:text-lg">
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>
        </FadeInSection>

        <FadeInSection>
          <section id="calcul-rapid" className="space-y-6">
            <h2 className="text-foreground">Câți pacienți pierde clinica ta lunar?</h2>
            <BlogTable headers={leadLossTableHeaders} rows={leadLossTableRows} highlightLastRow />
            {sectionCalculParagraphs.map((paragraph) => (
              <p key={paragraph} className="text-base leading-relaxed text-muted-foreground md:text-lg">
                {paragraph}
              </p>
            ))}
            <a
              href="/blog/cat-costa-un-lead-pierdut-romania"
              className="inline-flex rounded-xl bg-orange-500 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-orange-600"
            >
              Calculează exact pierderea clinicii tale →
            </a>
          </section>
        </FadeInSection>

        <FadeInSection>
          <section id="ce-s-a-schimbat" className="space-y-5">
            <h2 className="text-foreground">Ce s-a schimbat: pacientul de azi nu mai are răbdare</h2>
            {sectionSchimbatParagraphs.map((paragraph) => (
              <p key={paragraph} className="text-base leading-relaxed text-muted-foreground md:text-lg">
                {paragraph}
              </p>
            ))}
          </section>
        </FadeInSection>

        <FadeInSection>
          <section id="solutia" className="space-y-5">
            <h2 className="text-foreground">Soluția: răspuns instant, programare automată, urmărire garantată</h2>
            {sectionSolutiaParagraphs.map((paragraph) => (
              <p key={paragraph} className="text-base leading-relaxed text-muted-foreground md:text-lg">
                {paragraph}
              </p>
            ))}
            <div className="space-y-4">
              {sectionSolutiaItems.map((item) => (
                <div key={item.title} className="rounded-xl border border-orange-200 bg-orange-50 p-5">
                  <p className="text-lg font-bold text-orange-800">{item.title}</p>
                  <p className="mt-2 text-base text-orange-700">{item.text}</p>
                </div>
              ))}
            </div>
          </section>
        </FadeInSection>

        <FadeInSection>
          <section id="scenariu" className="space-y-5">
            <h2 className="text-foreground">Cum arată în practică — scenariul complet pas cu pas</h2>
            <ol className="space-y-3">
              {scenariuItems.map((item) => (
                <li key={item} className="rounded-xl border border-border/70 bg-background px-4 py-3 text-muted-foreground">
                  {item}
                </li>
              ))}
            </ol>
          </section>
        </FadeInSection>

        <FadeInSection>
          <section id="checklist" className="space-y-5">
            <h2 className="text-foreground">Ce să ceri de la un sistem de automatizare WhatsApp pentru clinică</h2>

            <div className="rounded-2xl border border-border/70 bg-background p-6">
              <p className="text-lg font-semibold text-foreground">Esențial</p>
              <ul className="mt-3 space-y-2">
                {checklistEssentials.map((item) => (
                  <li key={item} className="text-muted-foreground">- {item}</li>
                ))}
              </ul>
            </div>

            <div className="rounded-2xl border border-border/70 bg-background p-6">
              <p className="text-lg font-semibold text-foreground">Important</p>
              <ul className="mt-3 space-y-2">
                {checklistImportant.map((item) => (
                  <li key={item} className="text-muted-foreground">- {item}</li>
                ))}
              </ul>
            </div>

            <div className="rounded-2xl border border-border/70 bg-background p-6">
              <p className="text-lg font-semibold text-foreground">Diferențiator</p>
              <ul className="mt-3 space-y-2">
                {checklistAdvanced.map((item) => (
                  <li key={item} className="text-muted-foreground">- {item}</li>
                ))}
              </ul>
            </div>
          </section>
        </FadeInSection>

        <FadeInSection>
          <section id="faq" className="space-y-6">
            <h2 className="text-foreground">Întrebări frecvente despre automatizarea WhatsApp în clinici</h2>
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
            <h2 className="text-foreground">Concluzie: primul răspuns decide dacă pacientul devine al tău</h2>
            {concluzieParagraphs.map((paragraph) => (
              <p key={paragraph} className="text-base leading-relaxed text-muted-foreground md:text-lg">
                {paragraph}
              </p>
            ))}
            <p className="text-base leading-relaxed text-muted-foreground md:text-lg">
              Citește și: <a href="/blog/cat-costa-un-lead-pierdut-romania" className="font-semibold text-orange-700 underline">Cât costă un lead pierdut în România — calculul complet pe nișe</a>
            </p>
            <a
              href="/contact"
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
