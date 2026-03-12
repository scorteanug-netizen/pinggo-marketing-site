import { BlogHeader } from "@/components/blog/BlogHeader";
import { BlogLayout, FadeInSection } from "@/components/blog/BlogLayout";
import { BlogTable } from "@/components/blog/BlogTable";
import { SchemaMarkup } from "@/components/blog/SchemaMarkup";
import { Link } from "react-router-dom";
import {
  actionSteps,
  articleMetadata,
  articleSchema,
  conclusionParagraphs,
  faqItems,
  introParagraphs,
  statisticSections,
  summaryTable,
  tocItems,
} from "@/content/blog/statistici-timp-raspuns-lead-uri-romania";

function HtmlParagraph({ html }: { html: string }) {
  return (
    <p
      className="text-base leading-relaxed text-muted-foreground md:text-lg"
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}

function RichList({
  items,
  ordered = false,
}: {
  items: string[];
  ordered?: boolean;
}) {
  if (ordered) {
    return (
      <ol className="space-y-3 pl-5 text-muted-foreground">
        {items.map((item, index) => (
          <li key={`${index}-${item.slice(0, 24)}`} className="list-decimal pl-1">
            <span dangerouslySetInnerHTML={{ __html: item }} />
          </li>
        ))}
      </ol>
    );
  }

  return (
    <ul className="space-y-3">
      {items.map((item, index) => (
        <li key={`${index}-${item.slice(0, 24)}`} className="flex items-start gap-3 text-muted-foreground">
          <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-orange-500" />
          <span dangerouslySetInnerHTML={{ __html: item }} />
        </li>
      ))}
    </ul>
  );
}

const ogImageUrl = `https://pinggo.ro${articleMetadata.ogImage}`;

export default function BlogLeadResponseStatsPage() {
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
            titleTag: articleMetadata.titleTag,
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
            articleTags: [...articleMetadata.tags],
            twitterCard: "summary_large_image",
            twitterTitle: articleMetadata.titleTag,
            twitterDescription: articleMetadata.description,
            twitterImage: ogImageUrl,
          }}
        />

        <FadeInSection>
          <section className="space-y-5 rounded-2xl border border-border/60 bg-background p-6 md:p-8">
            {introParagraphs.map((paragraph) => (
              <HtmlParagraph key={paragraph} html={paragraph} />
            ))}
          </section>
        </FadeInSection>

        <FadeInSection>
          <section id="statistici-esentiale" className="space-y-5">
            <h2 className="text-foreground">Statisticile esențiale — înainte de orice altceva</h2>
            <p className="text-base leading-relaxed text-muted-foreground md:text-lg">
              Înainte de context și explicații, iată numerele brute. Fiecare va fi detaliat în secțiunile de mai jos.
            </p>
            <BlogTable headers={[...summaryTable.headers]} rows={summaryTable.rows.map((row) => [...row])} />
          </section>
        </FadeInSection>

        {statisticSections.map((section) => (
          <FadeInSection key={section.id}>
            <section id={section.id} className="space-y-5">
              <h2 className="text-foreground">{section.title}</h2>

              {section.quote ? (
                <blockquote className="rounded-2xl border-l-4 border-orange-500 bg-orange-50 px-5 py-4 text-base italic text-orange-900 md:text-lg">
                  <p>&ldquo;{section.quote}&rdquo;</p>
                  {section.source ? <footer className="mt-3 text-sm not-italic text-orange-700">— {section.source}</footer> : null}
                </blockquote>
              ) : section.source ? (
                <p className="text-sm italic text-muted-foreground">Sursă: {section.source}</p>
              ) : null}

              {section.paragraphs.map((paragraph) => (
                <HtmlParagraph key={paragraph} html={paragraph} />
              ))}

              {section.list ? <RichList items={[...section.list.items]} ordered={section.list.ordered} /> : null}

              {section.table ? (
                <BlogTable
                  headers={[...section.table.headers]}
                  rows={section.table.rows.map((row) => [...row])}
                  highlightLastRow={section.table.highlightLastRow}
                />
              ) : null}

              {section.callout ? (
                <div className="rounded-2xl border border-orange-200 bg-orange-50 p-5">
                  {section.callout.title ? <p className="text-sm font-semibold uppercase tracking-wide text-orange-700">{section.callout.title}</p> : null}
                  <div className="space-y-2">
                    {section.callout.lines.map((line) => (
                      <p
                        key={line}
                        className="text-base leading-relaxed text-orange-900"
                        dangerouslySetInnerHTML={{ __html: line }}
                      />
                    ))}
                  </div>
                </div>
              ) : null}
            </section>
          </FadeInSection>
        ))}

        <FadeInSection>
          <section id="ce-faci-cu-aceste-17-statistici" className="space-y-5">
            <h2 className="text-foreground">Ce faci cu aceste 17 statistici?</h2>
            <p className="text-base leading-relaxed text-muted-foreground md:text-lg">
              Datele sunt clare. Concluzia nu e complexă: <strong>viteza de răspuns e cel mai ieftin și mai rapid avantaj competitiv pe care îl poți construi</strong>, pentru că nu necesită un produs mai bun, o echipă mai mare sau un buget de marketing mai mare.
            </p>
            <p className="text-base leading-relaxed text-muted-foreground md:text-lg">Necesită un sistem.</p>
            <div className="space-y-4">
              {actionSteps.map((step) => (
                <div key={step.title} className="rounded-2xl border border-border/70 bg-background p-5">
                  <p className="text-lg font-semibold text-foreground">{step.title}</p>
                  <p className="mt-2 text-base leading-relaxed text-muted-foreground">{step.text}</p>
                </div>
              ))}
            </div>
          </section>
        </FadeInSection>

        <FadeInSection>
          <section id="intrebari-frecvente" className="space-y-6">
            <h2 className="text-foreground">Întrebări frecvente despre viteza de răspuns la lead-uri</h2>
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
            {conclusionParagraphs.map((paragraph) => (
              <HtmlParagraph key={paragraph} html={paragraph} />
            ))}
            <p className="text-base leading-relaxed text-muted-foreground md:text-lg">
              Citește și:{" "}
              <Link to="/blog/cat-costa-un-lead-pierdut-romania" className="font-semibold text-orange-700 underline">
                Cât costă un lead pierdut în România — calculul complet pe nișe
              </Link>{" "}
              și{" "}
              <Link to="/blog/pacient-nou-pierdut-clinica-whatsapp" className="font-semibold text-orange-700 underline">
                De ce 7 din 10 pacienți noi nu mai ajung la prima programare
              </Link>
              .
            </p>
            <Link
              to="/contact"
              className="inline-flex rounded-xl bg-orange-500 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-orange-600"
            >
              Solicită un demo gratuit →
            </Link>
          </section>
        </FadeInSection>

        <FadeInSection>
          <aside className="rounded-2xl border border-border/70 bg-background p-6">
            <p className="text-base leading-relaxed text-muted-foreground md:text-lg">
              <em>
                Pinggo automatizează primul răspuns la lead-uri pe WhatsApp în mai puțin de 15 secunde, pentru clinici
                medicale, firme solare și agenții imobiliare din România.
              </em>{" "}
              <Link to="/contact" className="font-semibold text-orange-700 underline">
                Solicită un demo gratuit →
              </Link>
            </p>
          </aside>
        </FadeInSection>
      </article>
    </BlogLayout>
  );
}
