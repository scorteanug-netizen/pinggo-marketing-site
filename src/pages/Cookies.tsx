import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { SEOHead } from "@/components/SEOHead";
import { Section } from "@/components/layout/Section";

const Cookies = () => {
  return (
    <Layout>
      <SEOHead
        title="Politica de cookie-uri"
        description="Detalii despre cookie-urile folosite de Pinggo și opțiunile tale de control al acestora."
        path="/cookies"
      />
      <Section>
        <div className="max-w-3xl mx-auto">
          <h1 className="text-foreground mb-4">
            Politica de Cookie-uri
          </h1>
          <p className="text-muted-foreground text-lg mb-10">
            Ultima actualizare: 26 februarie 2026
          </p>

          <div className="prose prose-gray max-w-none space-y-8">
            <div className="p-6 rounded-2xl bg-secondary/50 border border-border/50">
              <h2 className="text-2xl font-bold text-foreground mb-4">1. Ce sunt cookie-urile?</h2>
              <p className="text-muted-foreground leading-relaxed">
                Cookie-urile sunt fișiere text de mici dimensiuni care sunt stocate pe dispozitivul dumneavoastră (calculator, telefon mobil, tabletă) atunci când vizitați un site web. Acestea sunt utilizate pe scară largă pentru a asigura funcționarea eficientă a site-urilor web, precum și pentru a furniza informații proprietarilor site-ului.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-secondary/50 border border-border/50">
              <h2 className="text-2xl font-bold text-foreground mb-4">2. Cine utilizează cookie-urile?</h2>
              <p className="text-muted-foreground leading-relaxed">
                Site-ul pinggo.ro este operat de SCORȚEANU GABRIEL-ION PERSOANĂ FIZICĂ AUTORIZATĂ, cu sediul în B-dul Bucureștii Noi, 136, et. Parter, ap. 5, Sector 1, București, nr. înregistrare F2025037426001.
              </p>
              <p className="text-muted-foreground leading-relaxed mt-3">
                Utilizăm cookie-uri în conformitate cu Directiva 2002/58/CE (Directiva ePrivacy), transpusă în legislația română prin Legea nr. 506/2004, și cu Regulamentul (UE) 2016/679 (GDPR).
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-secondary/50 border border-border/50">
              <h2 className="text-2xl font-bold text-foreground mb-4">3. Tipuri de cookie-uri utilizate</h2>

              <h3 className="text-lg font-semibold text-foreground mt-4 mb-3">a) Cookie-uri strict necesare</h3>
              <p className="text-muted-foreground leading-relaxed">
                Aceste cookie-uri sunt esențiale pentru funcționarea site-ului și nu pot fi dezactivate. Sunt setate de obicei ca răspuns la acțiuni efectuate de dumneavoastră, cum ar fi completarea formularelor sau setarea preferințelor de confidențialitate.
              </p>
              <div className="mt-3 overflow-x-auto">
                <table className="w-full text-sm text-muted-foreground">
                  <thead>
                    <tr className="border-b border-border/50">
                      <th className="text-left py-2 pr-4 text-foreground font-semibold">Cookie</th>
                      <th className="text-left py-2 pr-4 text-foreground font-semibold">Scop</th>
                      <th className="text-left py-2 text-foreground font-semibold">Durată</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-border/30">
                      <td className="py-2 pr-4">cookie_consent</td>
                      <td className="py-2 pr-4">Stochează preferințele de cookie</td>
                      <td className="py-2">12 luni</td>
                    </tr>
                    <tr className="border-b border-border/30">
                      <td className="py-2 pr-4">session_id</td>
                      <td className="py-2 pr-4">Sesiunea utilizatorului</td>
                      <td className="py-2">Sesiune</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h3 className="text-lg font-semibold text-foreground mt-6 mb-3">b) Cookie-uri de performanță / analiză</h3>
              <p className="text-muted-foreground leading-relaxed">
                Aceste cookie-uri ne permit să numărăm vizitele și sursele de trafic pentru a putea evalua și îmbunătăți performanța site-ului nostru. Toate informațiile colectate sunt agregate și anonime.
              </p>
              <div className="mt-3 overflow-x-auto">
                <table className="w-full text-sm text-muted-foreground">
                  <thead>
                    <tr className="border-b border-border/50">
                      <th className="text-left py-2 pr-4 text-foreground font-semibold">Cookie</th>
                      <th className="text-left py-2 pr-4 text-foreground font-semibold">Furnizor</th>
                      <th className="text-left py-2 pr-4 text-foreground font-semibold">Scop</th>
                      <th className="text-left py-2 text-foreground font-semibold">Durată</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-border/30">
                      <td className="py-2 pr-4">_ga</td>
                      <td className="py-2 pr-4">Google Analytics</td>
                      <td className="py-2 pr-4">Distinge utilizatorii unici</td>
                      <td className="py-2">2 ani</td>
                    </tr>
                    <tr className="border-b border-border/30">
                      <td className="py-2 pr-4">_ga_*</td>
                      <td className="py-2 pr-4">Google Analytics</td>
                      <td className="py-2 pr-4">Stochează starea sesiunii</td>
                      <td className="py-2">2 ani</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h3 className="text-lg font-semibold text-foreground mt-6 mb-3">c) Cookie-uri de marketing</h3>
              <p className="text-muted-foreground leading-relaxed">
                Aceste cookie-uri pot fi setate prin site-ul nostru de partenerii noștri de publicitate. Pot fi utilizate de acele companii pentru a construi un profil al intereselor dumneavoastră și pentru a vă afișa reclame relevante pe alte site-uri.
              </p>
              <div className="mt-3 overflow-x-auto">
                <table className="w-full text-sm text-muted-foreground">
                  <thead>
                    <tr className="border-b border-border/50">
                      <th className="text-left py-2 pr-4 text-foreground font-semibold">Cookie</th>
                      <th className="text-left py-2 pr-4 text-foreground font-semibold">Furnizor</th>
                      <th className="text-left py-2 pr-4 text-foreground font-semibold">Scop</th>
                      <th className="text-left py-2 text-foreground font-semibold">Durată</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-border/30">
                      <td className="py-2 pr-4">_fbp</td>
                      <td className="py-2 pr-4">Meta (Facebook)</td>
                      <td className="py-2 pr-4">Urmărirea conversiilor</td>
                      <td className="py-2">3 luni</td>
                    </tr>
                    <tr className="border-b border-border/30">
                      <td className="py-2 pr-4">__hssc</td>
                      <td className="py-2 pr-4">HubSpot</td>
                      <td className="py-2 pr-4">Urmărirea sesiunii</td>
                      <td className="py-2">30 min</td>
                    </tr>
                    <tr className="border-b border-border/30">
                      <td className="py-2 pr-4">__hstc</td>
                      <td className="py-2 pr-4">HubSpot</td>
                      <td className="py-2 pr-4">Urmărirea vizitatorului</td>
                      <td className="py-2">13 luni</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-secondary/50 border border-border/50">
              <h2 className="text-2xl font-bold text-foreground mb-4">4. Cum puteți controla cookie-urile</h2>
              <p className="text-muted-foreground leading-relaxed">
                Aveți mai multe opțiuni pentru controlul cookie-urilor:
              </p>
              <ul className="list-disc pl-5 mt-3 space-y-2 text-muted-foreground">
                <li><strong className="text-foreground">Banner-ul de cookie-uri:</strong> La prima vizită pe site, puteți alege ce categorii de cookie-uri acceptați</li>
                <li><strong className="text-foreground">Setările browserului:</strong> Puteți configura browserul să blocheze sau să șteargă cookie-urile. Consultați secțiunea de ajutor a browserului pentru instrucțiuni specifice</li>
                <li><strong className="text-foreground">Opt-out Google Analytics:</strong> Instalați <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">extensia de browser Google Analytics Opt-out</a></li>
              </ul>
              <p className="text-muted-foreground leading-relaxed mt-3">
                <strong className="text-foreground">Atenție:</strong> Dezactivarea cookie-urilor strict necesare poate afecta funcționarea corectă a site-ului.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-secondary/50 border border-border/50">
              <h2 className="text-2xl font-bold text-foreground mb-4">5. Gestionarea cookie-urilor în browser</h2>
              <p className="text-muted-foreground leading-relaxed">
                Instrucțiuni pentru gestionarea cookie-urilor în browserele populare:
              </p>
              <ul className="list-disc pl-5 mt-3 space-y-2 text-muted-foreground">
                <li><strong className="text-foreground">Google Chrome:</strong> Setări → Confidențialitate și securitate → Cookie-uri și alte date ale site-urilor</li>
                <li><strong className="text-foreground">Mozilla Firefox:</strong> Setări → Confidențialitate și securitate → Cookie-uri și date ale site-urilor</li>
                <li><strong className="text-foreground">Safari:</strong> Preferințe → Confidențialitate → Gestionare date site-uri web</li>
                <li><strong className="text-foreground">Microsoft Edge:</strong> Setări → Cookie-uri și permisiuni site → Gestionare și ștergere cookie-uri</li>
              </ul>
            </div>

            <div className="p-6 rounded-2xl bg-secondary/50 border border-border/50">
              <h2 className="text-2xl font-bold text-foreground mb-4">6. Cookie-uri terțe</h2>
              <p className="text-muted-foreground leading-relaxed">
                Unele pagini de pe site-ul nostru pot conține conținut de la terți (de ex. videoclipuri YouTube, hărți Google, widget-uri social media) care pot seta propriile cookie-uri. Nu avem control asupra acestor cookie-uri terțe. Vă recomandăm să consultați politicile de confidențialitate ale respectivelor servicii terțe.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-secondary/50 border border-border/50">
              <h2 className="text-2xl font-bold text-foreground mb-4">7. Actualizarea politicii</h2>
              <p className="text-muted-foreground leading-relaxed">
                Această politică de cookie-uri poate fi actualizată periodic pentru a reflecta modificările în practicile noastre sau în legislație. Orice modificare semnificativă va fi comunicată prin intermediul bannerului de cookie-uri sau printr-o notificare pe site.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-secondary/50 border border-border/50">
              <h2 className="text-2xl font-bold text-foreground mb-4">8. Mai multe informații</h2>
              <p className="text-muted-foreground leading-relaxed">
                Pentru mai multe informații despre cookie-uri în general, puteți vizita{" "}
                <a href="https://www.allaboutcookies.org" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                  www.allaboutcookies.org
                </a>.
              </p>
              <p className="text-muted-foreground leading-relaxed mt-3">
                Pentru informații despre prelucrarea datelor dumneavoastră personale, consultați{" "}
                <Link to="/privacy" className="text-primary hover:underline">Politica de Confidențialitate</Link>.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-secondary/50 border border-border/50">
              <h2 className="text-2xl font-bold text-foreground mb-4">9. Contact</h2>
              <p className="text-muted-foreground leading-relaxed">
                Pentru orice întrebări legate de utilizarea cookie-urilor pe site-ul nostru, ne puteți contacta la:
              </p>
              <ul className="list-disc pl-5 mt-3 space-y-2 text-muted-foreground">
                <li><strong className="text-foreground">Email:</strong> <a href="mailto:contact@pinggo.ro" className="text-primary hover:underline">contact@pinggo.ro</a></li>
                <li><strong className="text-foreground">Adresă:</strong> B-dul Bucureștii Noi, 136, et. Parter, ap. 5, Sector 1, București</li>
              </ul>
            </div>
          </div>
        </div>
      </Section>
    </Layout>
  );
};

export default Cookies;
