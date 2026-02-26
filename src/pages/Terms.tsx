import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Section } from "@/components/layout/Section";

const Terms = () => {
  return (
    <Layout>
      <Section>
        <div className="max-w-3xl mx-auto">
          <h1 className="text-foreground mb-4">
            Termeni și Condiții
          </h1>
          <p className="text-muted-foreground text-lg mb-10">
            Ultima actualizare: 26 februarie 2026
          </p>

          <div className="prose prose-gray max-w-none space-y-8">
            <div className="p-6 rounded-2xl bg-secondary/50 border border-border/50">
              <h2 className="text-2xl font-bold text-foreground mb-4">1. Informații generale</h2>
              <p className="text-muted-foreground leading-relaxed">
                Prezentele Termeni și Condiții reglementează utilizarea platformei Pinggo și a site-ului web pinggo.ro, operate de:
              </p>
              <ul className="list-disc pl-5 mt-3 space-y-2 text-muted-foreground">
                <li><strong className="text-foreground">Denumire:</strong> SCORȚEANU GABRIEL-ION PERSOANĂ FIZICĂ AUTORIZATĂ</li>
                <li><strong className="text-foreground">Nr. înregistrare:</strong> F2025037426001</li>
                <li><strong className="text-foreground">Sediu:</strong> B-dul Bucureștii Noi, 136, et. Parter, ap. 5, Sector 1, București</li>
                <li><strong className="text-foreground">Email:</strong> <a href="mailto:contact@pinggo.ro" className="text-primary hover:underline">contact@pinggo.ro</a></li>
              </ul>
            </div>

            <div className="p-6 rounded-2xl bg-secondary/50 border border-border/50">
              <h2 className="text-2xl font-bold text-foreground mb-4">2. Acceptarea termenilor</h2>
              <p className="text-muted-foreground leading-relaxed">
                Prin accesarea și utilizarea platformei Pinggo, acceptați în mod expres și necondiționat acești Termeni și Condiții. Dacă nu sunteți de acord cu oricare dintre prevederile de mai jos, vă rugăm să nu utilizați serviciile noastre.
              </p>
              <p className="text-muted-foreground leading-relaxed mt-3">
                Ne rezervăm dreptul de a modifica acești termeni în orice moment. Continuarea utilizării platformei după publicarea modificărilor constituie acceptarea noilor termeni.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-secondary/50 border border-border/50">
              <h2 className="text-2xl font-bold text-foreground mb-4">3. Descrierea serviciului</h2>
              <p className="text-muted-foreground leading-relaxed">
                Pinggo este o platformă SaaS (Software as a Service) destinată echipelor de vânzări, care oferă:
              </p>
              <ul className="list-disc pl-5 mt-3 space-y-2 text-muted-foreground">
                <li>Monitorizarea timpului de răspuns la lead-uri</li>
                <li>Dovada de prim contact (First Contact Proof)</li>
                <li>Escaladare automată în cazul întârzierilor</li>
                <li>Raportare și analiză a performanței echipei de vânzări</li>
                <li>Integrări cu CRM-uri și surse de lead-uri</li>
              </ul>
            </div>

            <div className="p-6 rounded-2xl bg-secondary/50 border border-border/50">
              <h2 className="text-2xl font-bold text-foreground mb-4">4. Crearea contului și acces</h2>
              <p className="text-muted-foreground leading-relaxed">
                Pentru utilizarea platformei Pinggo este necesară crearea unui cont. La înregistrare, vă obligați să:
              </p>
              <ul className="list-disc pl-5 mt-3 space-y-2 text-muted-foreground">
                <li>Furnizați informații corecte, complete și actualizate</li>
                <li>Mențineți confidențialitatea credențialelor contului</li>
                <li>Notificați imediat orice utilizare neautorizată a contului</li>
                <li>Nu partajați accesul la cont cu persoane neautorizate</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed mt-3">
                Sunteți responsabil pentru toate activitățile desfășurate prin intermediul contului dumneavoastră.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-secondary/50 border border-border/50">
              <h2 className="text-2xl font-bold text-foreground mb-4">5. Abonamente și plăți</h2>
              <p className="text-muted-foreground leading-relaxed">
                Serviciile Pinggo sunt oferite pe bază de abonament lunar sau anual. Condițiile financiare includ:
              </p>
              <ul className="list-disc pl-5 mt-3 space-y-2 text-muted-foreground">
                <li>Prețurile sunt afișate pe pagina de prețuri și nu includ TVA (unde este cazul)</li>
                <li>Facturarea se face lunar sau anual, în avans</li>
                <li>Plata se efectuează prin metodele de plată disponibile pe platformă</li>
                <li>Abonamentul se reînnoiește automat la expirare, dacă nu este anulat</li>
                <li>Anularea abonamentului poate fi făcută oricând, cu efect de la sfârșitul perioadei curente de facturare</li>
              </ul>
            </div>

            <div className="p-6 rounded-2xl bg-secondary/50 border border-border/50">
              <h2 className="text-2xl font-bold text-foreground mb-4">6. Dreptul de retragere</h2>
              <p className="text-muted-foreground leading-relaxed">
                Conform OUG 34/2014 privind drepturile consumatorilor, aveți dreptul de a vă retrage din contract în termen de 14 zile calendaristice de la data încheierii contractului, fără a fi necesar să invocați vreun motiv.
              </p>
              <p className="text-muted-foreground leading-relaxed mt-3">
                Pentru exercitarea dreptului de retragere, ne puteți contacta la adresa <a href="mailto:contact@pinggo.ro" className="text-primary hover:underline">contact@pinggo.ro</a>. Rambursarea se va efectua în maximum 14 zile de la primirea notificării de retragere.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-secondary/50 border border-border/50">
              <h2 className="text-2xl font-bold text-foreground mb-4">7. Utilizare acceptabilă</h2>
              <p className="text-muted-foreground leading-relaxed">
                Vă obligați să utilizați platforma Pinggo în conformitate cu legislația în vigoare. Este interzis:
              </p>
              <ul className="list-disc pl-5 mt-3 space-y-2 text-muted-foreground">
                <li>Utilizarea serviciului în scopuri ilegale sau neautorizate</li>
                <li>Încărcarea de conținut malițios, viruși sau cod dăunător</li>
                <li>Tentativa de accesare neautorizată a sistemelor noastre</li>
                <li>Utilizarea platformei pentru trimiterea de spam sau mesaje nesolicitate</li>
                <li>Revânzarea sau sublicențierea serviciilor fără acordul nostru scris</li>
                <li>Încărcarea de date personale fără consimțământul persoanelor vizate</li>
              </ul>
            </div>

            <div className="p-6 rounded-2xl bg-secondary/50 border border-border/50">
              <h2 className="text-2xl font-bold text-foreground mb-4">8. Proprietate intelectuală</h2>
              <p className="text-muted-foreground leading-relaxed">
                Toate drepturile de proprietate intelectuală asupra platformei Pinggo, inclusiv codul sursă, designul, marca, logo-urile, textele și materialele grafice, aparțin SCORȚEANU GABRIEL-ION PFA.
              </p>
              <p className="text-muted-foreground leading-relaxed mt-3">
                Prin utilizarea platformei, vi se acordă o licență limitată, neexclusivă, netransferabilă și revocabilă de a utiliza serviciul în conformitate cu acești termeni. Nu aveți dreptul de a reproduce, modifica, distribui sau crea opere derivate fără acordul nostru scris.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-secondary/50 border border-border/50">
              <h2 className="text-2xl font-bold text-foreground mb-4">9. Protecția datelor</h2>
              <p className="text-muted-foreground leading-relaxed">
                Prelucrăm datele dumneavoastră personale conform <Link to="/privacy" className="text-primary hover:underline">Politicii de Confidențialitate</Link> și în conformitate cu GDPR (Regulamentul UE 2016/679).
              </p>
              <p className="text-muted-foreground leading-relaxed mt-3">
                În calitate de utilizator care gestionează date despre lead-uri prin platformă, aveți responsabilitatea de a vă asigura că dețineți consimțământul sau alt temei legal pentru partajarea acelor date cu Pinggo.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-secondary/50 border border-border/50">
              <h2 className="text-2xl font-bold text-foreground mb-4">10. Disponibilitatea serviciului</h2>
              <p className="text-muted-foreground leading-relaxed">
                Depunem toate eforturile pentru a menține platforma disponibilă 24/7. Cu toate acestea, nu garantăm disponibilitate neîntreruptă. Pot exista perioade de indisponibilitate cauzate de:
              </p>
              <ul className="list-disc pl-5 mt-3 space-y-2 text-muted-foreground">
                <li>Lucrări de mentenanță planificate (cu notificare prealabilă)</li>
                <li>Actualizări ale platformei</li>
                <li>Situații de forță majoră</li>
                <li>Probleme tehnice ale furnizorilor de servicii terți</li>
              </ul>
            </div>

            <div className="p-6 rounded-2xl bg-secondary/50 border border-border/50">
              <h2 className="text-2xl font-bold text-foreground mb-4">11. Limitarea răspunderii</h2>
              <p className="text-muted-foreground leading-relaxed">
                În limita permisă de legislația română:
              </p>
              <ul className="list-disc pl-5 mt-3 space-y-2 text-muted-foreground">
                <li>Serviciul este oferit „ca atare" („as is") și „conform disponibilității"</li>
                <li>Nu garantăm că serviciul va fi lipsit de erori sau neîntreruperi</li>
                <li>Nu suntem răspunzători pentru pierderi indirecte, consecvențiale sau pierderi de profit</li>
                <li>Răspunderea noastră totală este limitată la valoarea sumelor plătite de dumneavoastră în ultimele 12 luni</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed mt-3">
                Aceste limitări nu se aplică în cazul neglijenței grave sau al comportamentului intențional.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-secondary/50 border border-border/50">
              <h2 className="text-2xl font-bold text-foreground mb-4">12. Rezilierea</h2>
              <p className="text-muted-foreground leading-relaxed">
                Puteți rezilia contul în orice moment din setările platformei sau contactându-ne la <a href="mailto:contact@pinggo.ro" className="text-primary hover:underline">contact@pinggo.ro</a>.
              </p>
              <p className="text-muted-foreground leading-relaxed mt-3">
                Ne rezervăm dreptul de a suspenda sau rezilia accesul dumneavoastră în caz de:
              </p>
              <ul className="list-disc pl-5 mt-3 space-y-2 text-muted-foreground">
                <li>Încălcarea acestor Termeni și Condiții</li>
                <li>Neplata serviciilor la termen</li>
                <li>Utilizarea frauduloasă sau abuzivă a platformei</li>
              </ul>
            </div>

            <div className="p-6 rounded-2xl bg-secondary/50 border border-border/50">
              <h2 className="text-2xl font-bold text-foreground mb-4">13. Legea aplicabilă și jurisdicția</h2>
              <p className="text-muted-foreground leading-relaxed">
                Acești Termeni și Condiții sunt guvernați de legislația română. Orice litigiu va fi soluționat pe cale amiabilă, iar în cazul în care nu se ajunge la o înțelegere, litigiul va fi dedus spre soluționare instanțelor judecătorești competente de la sediul operatorului, din București, România.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-secondary/50 border border-border/50">
              <h2 className="text-2xl font-bold text-foreground mb-4">14. Soluționarea alternativă a litigiilor</h2>
              <p className="text-muted-foreground leading-relaxed">
                Conform Regulamentului UE nr. 524/2013, consumatorii pot utiliza platforma europeană de soluționare online a litigiilor (SOL) disponibilă la{" "}
                <a href="https://ec.europa.eu/consumers/odr" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                  https://ec.europa.eu/consumers/odr
                </a>.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-secondary/50 border border-border/50">
              <h2 className="text-2xl font-bold text-foreground mb-4">15. Contact</h2>
              <p className="text-muted-foreground leading-relaxed">
                Pentru orice întrebări legate de acești Termeni și Condiții, ne puteți contacta la:
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

export default Terms;
