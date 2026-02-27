import { Layout } from "@/components/layout/Layout";
import { SEOHead } from "@/components/SEOHead";
import { Section } from "@/components/layout/Section";

const Privacy = () => {
  return (
    <Layout>
      <SEOHead
        title="Politica de confidențialitate"
        description="Află cum prelucrăm datele personale pe site-ul și în platforma Pinggo, conform GDPR."
        path="/privacy"
      />
      <Section>
        <div className="max-w-3xl mx-auto">
          <h1 className="text-foreground mb-4">
            Politica de Confidențialitate
          </h1>
          <p className="text-muted-foreground text-lg mb-10">
            Ultima actualizare: 26 februarie 2026
          </p>

          <div className="prose prose-gray max-w-none space-y-8">
            <div className="p-6 rounded-2xl bg-secondary/50 border border-border/50">
              <h2 className="text-2xl font-bold text-foreground mb-4">1. Introducere</h2>
              <p className="text-muted-foreground leading-relaxed">
                SCORȚEANU GABRIEL-ION PERSOANĂ FIZICĂ AUTORIZATĂ, cu sediul în B-dul Bucureștii Noi, 136, et. Parter, ap. 5, Sector 1, București, înregistrată sub nr. F2025037426001, în calitate de operator de date cu caracter personal, respectă confidențialitatea datelor dumneavoastră personale în conformitate cu Regulamentul (UE) 2016/679 (GDPR) și legislația națională aplicabilă.
              </p>
              <p className="text-muted-foreground leading-relaxed mt-3">
                Această politică descrie modul în care colectăm, utilizăm, stocăm și protejăm datele dumneavoastră personale atunci când utilizați platforma Pinggo și site-ul nostru web.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-secondary/50 border border-border/50">
              <h2 className="text-2xl font-bold text-foreground mb-4">2. Operatorul de date</h2>
              <p className="text-muted-foreground leading-relaxed">
                Operatorul de date cu caracter personal este:
              </p>
              <ul className="list-disc pl-5 mt-3 space-y-2 text-muted-foreground">
                <li><strong className="text-foreground">Denumire:</strong> SCORȚEANU GABRIEL-ION PERSOANĂ FIZICĂ AUTORIZATĂ</li>
                <li><strong className="text-foreground">Nr. înregistrare:</strong> F2025037426001</li>
                <li><strong className="text-foreground">Sediu:</strong> B-dul Bucureștii Noi, 136, et. Parter, ap. 5, Sector 1, București</li>
                <li><strong className="text-foreground">Email:</strong> contact@pinggo.ro</li>
              </ul>
            </div>

            <div className="p-6 rounded-2xl bg-secondary/50 border border-border/50">
              <h2 className="text-2xl font-bold text-foreground mb-4">3. Datele personale colectate</h2>
              <p className="text-muted-foreground leading-relaxed">
                În funcție de interacțiunea cu platforma Pinggo, putem colecta următoarele categorii de date personale:
              </p>
              <ul className="list-disc pl-5 mt-3 space-y-2 text-muted-foreground">
                <li><strong className="text-foreground">Date de identificare:</strong> nume, prenume, adresă de email, număr de telefon</li>
                <li><strong className="text-foreground">Date despre companie:</strong> denumirea companiei, funcția/rolul în cadrul companiei</li>
                <li><strong className="text-foreground">Date de utilizare:</strong> adresa IP, tipul de browser, sistemul de operare, paginile vizitate, durata sesiunii</li>
                <li><strong className="text-foreground">Date din formulare:</strong> informațiile furnizate prin formularul de contact sau de înregistrare</li>
                <li><strong className="text-foreground">Date despre lead-uri:</strong> informațiile despre lead-urile gestionate prin platformă, inclusiv istoricul contactărilor</li>
              </ul>
            </div>

            <div className="p-6 rounded-2xl bg-secondary/50 border border-border/50">
              <h2 className="text-2xl font-bold text-foreground mb-4">4. Scopurile prelucrării</h2>
              <p className="text-muted-foreground leading-relaxed">
                Prelucrăm datele dumneavoastră personale în următoarele scopuri:
              </p>
              <ul className="list-disc pl-5 mt-3 space-y-2 text-muted-foreground">
                <li>Furnizarea și administrarea serviciilor platformei Pinggo</li>
                <li>Crearea și gestionarea contului de utilizator</li>
                <li>Procesarea cererilor trimise prin formularul de contact</li>
                <li>Trimiterea de comunicări comerciale (doar cu consimțământul dumneavoastră)</li>
                <li>Îmbunătățirea serviciilor noastre și a experienței utilizatorului</li>
                <li>Respectarea obligațiilor legale și fiscale</li>
                <li>Analiza statistică a utilizării platformei</li>
              </ul>
            </div>

            <div className="p-6 rounded-2xl bg-secondary/50 border border-border/50">
              <h2 className="text-2xl font-bold text-foreground mb-4">5. Temeiul juridic al prelucrării</h2>
              <p className="text-muted-foreground leading-relaxed">
                Prelucrăm datele dumneavoastră pe baza următoarelor temeiuri juridice prevăzute de GDPR:
              </p>
              <ul className="list-disc pl-5 mt-3 space-y-2 text-muted-foreground">
                <li><strong className="text-foreground">Executarea contractului</strong> (Art. 6 alin. 1 lit. b GDPR) — pentru furnizarea serviciilor solicitate</li>
                <li><strong className="text-foreground">Consimțământul</strong> (Art. 6 alin. 1 lit. a GDPR) — pentru comunicări de marketing și cookie-uri opționale</li>
                <li><strong className="text-foreground">Interesul legitim</strong> (Art. 6 alin. 1 lit. f GDPR) — pentru îmbunătățirea serviciilor și securitatea platformei</li>
                <li><strong className="text-foreground">Obligația legală</strong> (Art. 6 alin. 1 lit. c GDPR) — pentru conformarea cu legislația fiscală și contabilă</li>
              </ul>
            </div>

            <div className="p-6 rounded-2xl bg-secondary/50 border border-border/50">
              <h2 className="text-2xl font-bold text-foreground mb-4">6. Destinatarii datelor</h2>
              <p className="text-muted-foreground leading-relaxed">
                Datele dumneavoastră personale pot fi transmise următoarelor categorii de destinatari:
              </p>
              <ul className="list-disc pl-5 mt-3 space-y-2 text-muted-foreground">
                <li>Furnizori de servicii de hosting și infrastructură IT (servere situate în UE)</li>
                <li>Furnizori de servicii de analiză web (de ex. Google Analytics)</li>
                <li>Furnizori de servicii de email și comunicare</li>
                <li>Autorități publice, în cazul în care legislația impune acest lucru</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed mt-3">
                Nu vindem și nu închiriem datele dumneavoastră personale către terți. Toți furnizorii noștri de servicii sunt obligați contractual să protejeze datele conform GDPR.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-secondary/50 border border-border/50">
              <h2 className="text-2xl font-bold text-foreground mb-4">7. Transferul datelor în afara UE</h2>
              <p className="text-muted-foreground leading-relaxed">
                Datele dumneavoastră sunt stocate și procesate pe servere situate în Uniunea Europeană. În cazul în care este necesar un transfer de date în afara Spațiului Economic European, ne asigurăm că există garanții adecvate conform Art. 46 GDPR (de ex. clauze contractuale standard aprobate de Comisia Europeană).
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-secondary/50 border border-border/50">
              <h2 className="text-2xl font-bold text-foreground mb-4">8. Durata stocării datelor</h2>
              <p className="text-muted-foreground leading-relaxed">
                Păstrăm datele dumneavoastră personale atât timp cât este necesar pentru scopurile pentru care au fost colectate:
              </p>
              <ul className="list-disc pl-5 mt-3 space-y-2 text-muted-foreground">
                <li><strong className="text-foreground">Date de cont:</strong> pe durata existenței contului + 30 de zile după ștergere</li>
                <li><strong className="text-foreground">Date din formularul de contact:</strong> maximum 12 luni de la ultima interacțiune</li>
                <li><strong className="text-foreground">Date fiscale/contabile:</strong> conform legislației române (10 ani)</li>
                <li><strong className="text-foreground">Date de utilizare (cookie-uri):</strong> conform politicii de cookie-uri</li>
              </ul>
            </div>

            <div className="p-6 rounded-2xl bg-secondary/50 border border-border/50">
              <h2 className="text-2xl font-bold text-foreground mb-4">9. Drepturile dumneavoastră</h2>
              <p className="text-muted-foreground leading-relaxed">
                Conform GDPR, aveți următoarele drepturi cu privire la datele dumneavoastră personale:
              </p>
              <ul className="list-disc pl-5 mt-3 space-y-2 text-muted-foreground">
                <li><strong className="text-foreground">Dreptul de acces</strong> — puteți solicita informații despre datele pe care le prelucrăm</li>
                <li><strong className="text-foreground">Dreptul la rectificare</strong> — puteți solicita corectarea datelor inexacte</li>
                <li><strong className="text-foreground">Dreptul la ștergere</strong> — puteți solicita ștergerea datelor ("dreptul de a fi uitat")</li>
                <li><strong className="text-foreground">Dreptul la restricționarea prelucrării</strong> — puteți solicita limitarea prelucrării în anumite condiții</li>
                <li><strong className="text-foreground">Dreptul la portabilitatea datelor</strong> — puteți solicita primirea datelor într-un format structurat</li>
                <li><strong className="text-foreground">Dreptul la opoziție</strong> — vă puteți opune prelucrării bazate pe interes legitim</li>
                <li><strong className="text-foreground">Dreptul de a retrage consimțământul</strong> — în orice moment, fără a afecta legalitatea prelucrării anterioare</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed mt-3">
                Pentru exercitarea acestor drepturi, ne puteți contacta la adresa <a href="mailto:contact@pinggo.ro" className="text-primary hover:underline">contact@pinggo.ro</a>.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-secondary/50 border border-border/50">
              <h2 className="text-2xl font-bold text-foreground mb-4">10. Securitatea datelor</h2>
              <p className="text-muted-foreground leading-relaxed">
                Implementăm măsuri tehnice și organizatorice adecvate pentru protecția datelor dumneavoastră personale, inclusiv:
              </p>
              <ul className="list-disc pl-5 mt-3 space-y-2 text-muted-foreground">
                <li>Criptarea datelor în tranzit (SSL/TLS)</li>
                <li>Controlul accesului la datele personale</li>
                <li>Monitorizarea și auditarea periodică a sistemelor</li>
                <li>Proceduri de backup și recuperare a datelor</li>
              </ul>
            </div>

            <div className="p-6 rounded-2xl bg-secondary/50 border border-border/50">
              <h2 className="text-2xl font-bold text-foreground mb-4">11. Plângeri</h2>
              <p className="text-muted-foreground leading-relaxed">
                Dacă considerați că prelucrarea datelor dumneavoastră personale încalcă GDPR, aveți dreptul de a depune o plângere la Autoritatea Națională de Supraveghere a Prelucrării Datelor cu Caracter Personal (ANSPDCP):
              </p>
              <ul className="list-disc pl-5 mt-3 space-y-2 text-muted-foreground">
                <li><strong className="text-foreground">Adresă:</strong> B-dul G-ral. Gheorghe Magheru nr. 28-30, Sector 1, București</li>
                <li><strong className="text-foreground">Website:</strong> <a href="https://www.dataprotection.ro" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">www.dataprotection.ro</a></li>
              </ul>
            </div>

            <div className="p-6 rounded-2xl bg-secondary/50 border border-border/50">
              <h2 className="text-2xl font-bold text-foreground mb-4">12. Modificări ale politicii</h2>
              <p className="text-muted-foreground leading-relaxed">
                Ne rezervăm dreptul de a actualiza această politică de confidențialitate. Orice modificare semnificativă va fi comunicată prin email sau prin intermediul platformei. Vă recomandăm să verificați periodic această pagină.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-secondary/50 border border-border/50">
              <h2 className="text-2xl font-bold text-foreground mb-4">13. Contact</h2>
              <p className="text-muted-foreground leading-relaxed">
                Pentru orice întrebări legate de această politică de confidențialitate sau de prelucrarea datelor dumneavoastră personale, ne puteți contacta la:
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

export default Privacy;
