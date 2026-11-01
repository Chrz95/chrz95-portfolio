# Christos Zacharioudakis — Portfolio

A responsive software engineering portfolio built with React 19, TypeScript, Vite, Material UI, CSS Modules, and Framer Motion. It includes a persistent light/dark theme, project technology filters, an accessible email-drafting form, and a downloadable CV.

## Project structure

```text
.
├── public/
│   ├── images/                     # Project artwork
│   ├── Christos-Zacharioudakis-CV.pdf
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── layout/                  # Header, mobile navigation, footer
│   │   ├── pages/                   # Project details and Perfectly Average policy
│   │   ├── sections/                # Hero, About, Skills, Projects, Experience, Contact
│   │   └── ui/                      # Button, Card, Container, Section, Reveal
│   ├── content/                    # Game description and privacy policy source
│   ├── config/portfolio.ts          # Portfolio content and project cards
│   ├── config/projectDetails.ts     # Product project page content
│   ├── hooks/useColorMode.ts        # Theme preference and persistence
│   ├── theme/theme.ts               # Material UI theme for both modes
│   ├── types/portfolio.ts           # Strict data interfaces
│   ├── App.tsx
│   ├── main.tsx
│   └── styles.css                   # Global tokens and accessibility styles
├── index.html                      # Title and SEO/social metadata
├── projects/                       # Direct static routes for project pages
├── eslint.config.js
├── tsconfig.json
└── vite.config.ts
```

## Run locally

Requires Node.js 20.19+ or 22.12+.

```bash
npm install
npm run dev
```

Open the local address printed by Vite. The default configured port is 4173.

## Check and build

```bash
npm run lint
npm run build
npm run preview
```

`dist/` is the static output. Deploy it to any static host such as Cloudflare Pages, Netlify, Vercel, or GitHub Pages (with the appropriate base path). This project uses standard Vite output and does not require a server or environment variables.

## Update content

Edit `src/config/portfolio.ts`. The Projects grid shows three entries per page; technology filters reset pagination to the first page. The `Project` interface has optional `githubUrl` and `demoUrl` fields. Add **verified, project-specific URLs** when code or a public demo becomes available; the buttons appear automatically. The professional client work in the CV has no public project URLs, so none are invented. Replace the project artwork under `public/images/` with actual screenshots if you have permission to share them; keep filenames or update the image paths in the config.

Perfectly Average has a dedicated page at `/projects/perfectly-average/` with the six supplied screenshots. Its privacy policy is at `/projects/perfectly-average/privacy-policy/`. Edit `src/content/perfectlyAveragePrivacy.md` to update the policy; the page renders that file as structured content. The developer name and contact email were filled from this portfolio's existing details.

Layovio and DayTandem have dedicated pages at `/projects/layovio/` and `/projects/daytandem/`. Their card summaries are in `src/config/portfolio.ts`; their longer descriptions, features, image captions, and existing Site links are in `src/config/projectDetails.ts`. Layovio's current showcase image and DayTandem's supplied logo live under `public/images/`. No privacy policy pages were added for these projects.

Local LLM Literary Translator has a dedicated page at `/projects/local-llm-literary-translator/`. Its description and features are in `src/config/projectDetails.ts`; the two supplied screenshots are under `public/images/literary-translator/`. They show an authored sample book and translations in the running desktop app. No repository or live demo URL was supplied, so the page does not show one.

Folio, LinkDock, Form — Workout Studio, and Resonance have dedicated pages under `/projects/folio/`, `/projects/linkdock/`, `/projects/form-workout-studio/`, and `/projects/resonance/`. Their descriptions come from the four supplied READMEs. Their SVGs under `public/images/` are illustrative artwork, because screenshots were not supplied. Their GitHub URLs appear on both the project cards and detail pages.

The contact form opens the visitor's email application with a prefilled message. It does not submit data to a server or claim delivery. To receive messages directly inside the site, add a server-side form service and explain its data handling to visitors.

## Attach or replace the CV

1. Copy your PDF to `public/Christos-Zacharioudakis-CV.pdf` (replace the included file).
2. If you change the filename, update `cvPath` in `src/config/portfolio.ts` and the download filename in `src/components/sections/Hero.tsx`.
3. Run `npm run build` and test the **Download CV** button in the preview.

The supplied CV is already included at that path. Update the public PDF when your experience changes.

## Accessibility and SEO

The site includes semantic sections, a skip link, keyboard-accessible controls, labeled form fields, descriptive image alternatives, reduced-motion support, and responsive layouts. Update the title, description, and Open Graph text in `index.html` when positioning changes. Add a canonical URL once the permanent public domain is known. No Open Graph image is set.
