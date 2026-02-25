# Welcome to your Lovable project

## Project info

**URL**: https://lovable.dev/projects/REPLACE_WITH_PROJECT_ID

## How can I edit this code?

There are several ways of editing your application.

**Use Lovable**

Simply visit the [Lovable Project](https://lovable.dev/projects/REPLACE_WITH_PROJECT_ID) and start prompting.

Changes made via Lovable will be committed automatically to this repo.

**Use your preferred IDE**

If you want to work locally using your own IDE, you can clone this repo and push changes. Pushed changes will also be reflected in Lovable.

The only requirement is having Node.js & npm installed - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

Follow these steps:

```sh
# Step 1: Clone the repository using the project's Git URL.
git clone <YOUR_GIT_URL>

# Step 2: Navigate to the project directory.
cd <YOUR_PROJECT_NAME>

# Step 3: Install the necessary dependencies.
npm i

# Step 4: Start the development server with auto-reloading and an instant preview.
npm run dev
```

**Edit a file directly in GitHub**

- Navigate to the desired file(s).
- Click the "Edit" button (pencil icon) at the top right of the file view.
- Make your changes and commit the changes.

**Use GitHub Codespaces**

- Navigate to the main page of your repository.
- Click on the "Code" button (green button) near the top right.
- Select the "Codespaces" tab.
- Click on "New codespace" to launch a new Codespace environment.
- Edit files directly within the Codespace and commit and push your changes once you're done.

## What technologies are used for this project?

This project is built with:

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS

## How can I deploy this project?

Simply open [Lovable](https://lovable.dev/projects/REPLACE_WITH_PROJECT_ID) and click on Share -> Publish.

## Can I connect a custom domain to my Lovable project?

Yes, you can!

To connect a domain, navigate to Project > Settings > Domains and click Connect Domain.

Read more here: [Setting up a custom domain](https://docs.lovable.dev/features/custom-domain#custom-domain)

## Platform login URL

Button-ul `Conectare` din navbar foloseste `VITE_PLATFORM_URL`.
Fara aceasta variabila:
- pe localhost merge la `http://localhost:3001/login`
- in productie merge la `https://app.pinggo.ro/login`

Seteaza in `.env`:

```sh
VITE_PLATFORM_URL=http://localhost:3001/login
```

In productie, foloseste URL-ul complet al platformei (cu protocol), de exemplu:

```sh
VITE_PLATFORM_URL=https://app.pinggo.ro/login
```

## HubSpot forms integration

Marketing forms trimit lead-urile in HubSpot prin endpoint-ul oficial:
`https://api.hsforms.com/submissions/v3/integration/submit/{portalId}/{formGuid}`

Seteaza in `.env`:

```sh
VITE_HUBSPOT_PORTAL_ID=123456
VITE_HUBSPOT_CONTACT_FORM_ID=aaaaaaaa-bbbb-cccc-dddd-eeeeeeeeeeee
VITE_HUBSPOT_CALCULATOR_FORM_ID=ffffffff-1111-2222-3333-444444444444
```

Optional (daca ai campuri custom sau denumiri diferite in HubSpot):

```sh
VITE_HUBSPOT_FIELD_FIRST_NAME=firstname
VITE_HUBSPOT_FIELD_LAST_NAME=lastname
VITE_HUBSPOT_FIELD_EMAIL=email
VITE_HUBSPOT_FIELD_PHONE=phone
VITE_HUBSPOT_FIELD_COMPANY=company
VITE_HUBSPOT_FIELD_ROLE=jobtitle
VITE_HUBSPOT_FIELD_MESSAGE=message
VITE_HUBSPOT_FIELD_SOURCE=pinggo_form_source
VITE_HUBSPOT_FIELD_CALCULATOR_SUMMARY=calculator_summary
```

Note:
- `Contact` foloseste `contact form id`.
- Popup-ul din `Calculator` foloseste `calculator form id`.
- Daca nu exista setarile minime (`PORTAL_ID` + `FORM_ID`), formularul afiseaza eroare de configurare.
