# Christos Zacharioudakis — Portfolio

A responsive, single-page software engineering portfolio built with React 19, TypeScript, Vite, Material UI, CSS Modules, and Framer Motion. It includes a persistent light/dark theme, project technology filters, an accessible email-drafting form, and a downloadable CV.

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
│   │   ├── sections/                # Hero, About, Skills, Projects, Experience, Contact
│   │   └── ui/                      # Button, Card, Container, Section, Reveal
│   ├── config/portfolio.ts          # All editable portfolio content
│   ├── hooks/useColorMode.ts        # Theme preference and persistence
│   ├── theme/theme.ts               # Material UI theme for both modes
│   ├── types/portfolio.ts           # Strict data interfaces
│   ├── App.tsx
│   ├── main.tsx
│   └── styles.css                   # Global tokens and accessibility styles
├── index.html                      # Title and SEO/social metadata
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

Edit `src/config/portfolio.ts`. The `Project` interface has optional `githubUrl` and `demoUrl` fields. Add **verified, project-specific URLs** when code or a public demo becomes available; the buttons appear automatically. The professional client work in the CV has no public project URLs, so none are invented. Replace the project artwork under `public/images/` with actual screenshots if you have permission to share them; keep filenames or update the image paths in the config.

The contact form opens the visitor's email application with a prefilled message. It does not submit data to a server or claim delivery. To receive messages directly inside the site, add a server-side form service and explain its data handling to visitors.

## Attach or replace the CV

1. Copy your PDF to `public/Christos-Zacharioudakis-CV.pdf` (replace the included file).
2. If you change the filename, update `cvPath` in `src/config/portfolio.ts` and the download filename in `src/components/sections/Hero.tsx`.
3. Run `npm run build` and test the **Download CV** button in the preview.

The supplied CV is already included at that path. Update the public PDF when your experience changes.

## Accessibility and SEO

The site includes semantic sections, a skip link, keyboard-accessible controls, labeled form fields, descriptive image alternatives, reduced-motion support, and responsive layouts. Update the title, description, and Open Graph text in `index.html` when positioning changes. Add a canonical URL once the permanent public domain is known. No Open Graph image is set.
