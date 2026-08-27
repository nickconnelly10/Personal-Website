# CLAUDE.md — nickconnelly.com

Personal portfolio site for **Nicholas Connelly** ([nickconnelly.com](https://nickconnelly.com)). Static marketing/content site, not a web app with auth or a database.

## Quick reference

| Item | Value |
|------|--------|
| Version | See `package.json` |
| Node | `24.x` (see `.nvmrc` and `engines`) |
| Package manager | npm (`package-lock.json`) |
| Framework | Next.js 16 App Router |
| UI | React 19, Tailwind CSS v4, Inter via `next/font` |
| Deploy | Vercel (`vercel.json` → `framework: nextjs`) |

```bash
npm install
npm run dev      # http://localhost:3000
npm run lint     # eslint src --max-warnings 0
npm run build    # production build
```

## Repository layout

```
src/
├── app/                    # App Router routes (one page.tsx per route)
│   ├── layout.tsx          # Root layout: NavBar, Analytics, fonts, metadata
│   ├── globals.css         # Tailwind v4 @theme, utility classes
│   ├── page.tsx            # Home (RSC, hero + about + projects)
│   ├── contact/
│   ├── nest/
│   ├── projects/
│   ├── resume/
│   ├── volunteering/
│   ├── not-found.tsx
│   ├── sitemap.ts
│   └── robots.ts
├── components/
│   ├── NavBar.tsx          # Client: fixed top nav, mobile menu
│   └── ProjectCard.tsx     # Shared project cards + projects array
└── lib/
    └── metadata.ts         # Per-page Open Graph / Twitter helper

public/                     # Static assets (images, favicon, manifest, resume PDF)
next.config.mjs             # trailingSlash: true, image optimization, security headers
```

## Routes (all static)

| Path | Purpose |
|------|---------|
| `/` | Home — hero image, about copy, project cards |
| `/projects` | Project cards |
| `/resume` | Resume PDF open/download (iframe on desktop) |
| `/contact` | Contact links |
| `/nest` | NEST Run Club |
| `/volunteering` | Volunteering & community |

URLs use **trailing slashes** (`trailingSlash: true` in `next.config.mjs`).

## Architecture patterns

- **Server Components by default**; `'use client'` only for `NavBar` (pathname, mobile menu).
- **Global chrome**: `NavBar` only (footer removed).
- **Metadata**: `metadataBase` + shared OG image in layout; per-page metadata via `src/lib/metadata.ts`.
- **Images**: `next/image` with optimized delivery; large originals in `public/`.
- **Analytics**: `@vercel/analytics` and `@vercel/speed-insights` in root layout.

## Conventions for changes

- Match existing tone: light headings (`font-light`), gray body text, white sections.
- New top-level pages: add `src/app/<route>/page.tsx` and link from `NavBar.tsx` if discoverable.
- Run `npm run lint` then `npm run build` before finishing substantive edits.
- Keep diffs small; no database, env secrets, or API routes unless the task requires them.

## ESLint

Flat config in `eslint.config.mjs` — `eslint-config-next/core-web-vitals`; lints `src/**/*.ts(x)`.

<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
