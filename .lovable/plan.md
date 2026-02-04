
# Plan: Pinggo Marketing Website

## Viziune
Un marketing site B2B SaaS modern, Romania-first, care comunica clar propunerea de valoare: garantarea contactarii la timp a fiecarui lead, cu dovada verificabila si escaladare automata.

---

## Design System

**Culori:**
- **Portocaliu accent** (#F97316) - pentru CTA-uri, highlights, urgenta
- **Albastru secundar** (#3B82F6) - pentru linkuri, elemente de incredere
- **Fundal:** alb cu sectiuni alternate light gray (#F9FAFB)
- **Text:** dark gray/black pentru lizibilitate maxima

**Stil:**
- Inspirat de Chili Piper: layout curat, tipografie bold, spacing generos
- Fara gradienturi heavy sau animatii complexe
- Iconite simple (Lucide icons)

---

## Structura Paginilor

### 1. Layout Global
- **Navbar fix:** Logo "Pinggo", linkuri (Product, How it works, Pricing, Docs, Contact), butoane (Log in + Book a demo)
- **Footer:** linkuri rapide, legal links, tagline "Romania-first, EU-ready"

### 2. Home Page (/)
10 sectiuni complete:

**A) Hero (2 coloane)**
- Titlu principal, subheadline, 3 bullet points
- CTA: "Book a demo" (portocaliu) + "Start trial" (outline)
- Visual: mock product card cu SLA info, badge proof, owner, mini chart

**B) Social Proof**
- 3 carduri industrii: Agentii, Clinici, Imobiliare
- Fiecare cu 2 beneficii specifice

**C) Problem Section**
- 4 probleme comune (neasumat, intarziat, fara dovada, fara escaladare)

**D) How it Works (4 pasi)**
- Intake → SLA Clock → Escalare → Proof
- Cu iconite si descrieri scurte

**E) Differentiation vs AI**
- Tabel comparativ AI agent vs Pinggo
- 3 comparatii clare

**F) Features Grid (6 carduri)**
- SLA policies, Proof events, Escalation chain
- Lead timeline, Flow builder, Weekly report

**G) Integrations**
- Badges: Slack, WhatsApp, Email, Webhook, Make, Zapier
- Nota despre CRM optional

**H) Pricing Teaser**
- 3 planuri: Start (149 EUR), Growth (249 EUR), Pro (499 EUR)
- Add-on AI Pack (49 EUR)
- Link catre pricing complet

**I) FAQ (6 intrebari)**
- Intrebarile specificate despre CRM, proof, WhatsApp, after-hours, SLA diferite

**J) Final CTA**
- Mesaj de urgenta + butoane demo/trial

### 3. Product Page (/product)
- 3 module: Intake, SLA Engine, Proof
- Workflow ilustrat pas cu pas
- "What you get" - lista beneficii

### 4. Pricing Page (/pricing)
- Feature matrix cu 3 planuri
- Sectiune add-ons
- Setup fees (Assisted + Done-for-you)
- CTA Book a demo

### 5. Docs Page (/docs)
- Sectiuni: Webhook, Slack, WhatsApp, Email forwarding
- JSON sample payload in code block
- Format documentatie tehnica clara

### 6. Contact Page (/contact)
- Formular complet (Name, Email, Company, Role, Message)
- Confirmare la submit: "Multumim. Revenim in 24 ore."
- Sectiune WhatsApp alternativa

### 7. Terms & Privacy (/terms, /privacy)
- Pagini simple cu placeholder text legal

---

## Componente Reutilizabile
- **Container** - max-width consistent
- **Section** - spacing si background alternat
- **Button** - variante primary/secondary/outline
- **Card** - pentru features, pricing, industries
- **SectionHeading** - titlu + subtitlu consistent

---

## Responsive Design
- Mobile-first approach
- Navbar cu hamburger menu pe mobile
- Grid-uri care se stivuiesc pe ecrane mici
- Touch-friendly CTAs

---

## Nota Tehnica
Site-ul va fi construit cu React + Vite + React Router (alternativa la Next.js in Lovable), cu Tailwind CSS pentru styling. Rezultatul va fi identic functional - un site rapid si profesional.
