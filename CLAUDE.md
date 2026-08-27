# CLAUDE.md — nickconnelly.com

Personal portfolio site for **Nicholas Connelly** ([nickconnelly.com](https://nickconnelly.com)). Static marketing/content site, not a web app with auth or a database.

## Quick reference

| Item | Value |
|------|--------|
| Version | 1.0.2 |
| Node | `>=20.19.0` (see `.nvmrc`) |
| Package manager | npm (`package-lock.json`) |
| Framework | Next.js 16 App Router |
| UI | React 19, Tailwind CSS v4 |
| Deploy | Vercel (`vercel.json` → `framework: nextjs`) |

```bash
npm install
npm run dev      # http://localhost:3000
npm run lint     # eslint src
npm run build    # production build
```

## Repository layout

```
src/
├── app/                    # App Router routes (one page.tsx per route)
│   ├── layout.tsx          # Root layout: NavBar, Footer, Analytics, fonts, metadata
│   ├── globals.css         # Tailwind v4 @theme, utility classes (.card, .section-padding, etc.)
│   ├── page.tsx            # Home (client component, hero + about sections)
│   ├── contact/
│   ├── nest/               # NEST Run Club
│   ├── projects/
│   ├── resume/
│   ├── volunteering/
│   └── writing/
└── components/
    ├── NavBar.tsx          # Client: fixed top nav, mobile menu
    ├── Footer.tsx          # Site map + external links (4 columns)
    └── SubstackArticles.tsx # Client: fetches Substack RSS via rss2json API

public/                     # Static assets (images, favicon, manifest, resume PDFs)
next.config.mjs             # trailingSlash: true, unoptimized images
```

## Routes (all static)

| Path | Purpose |
|------|---------|
| `/` | Home — hero image, about copy |
| `/projects` | Project cards (Muscadine, health site, etc.; many external links) |
| `/writing` | Substack article preview + link to full newsletter |
| `/resume` | Resume content / downloads |
| `/contact` | Contact page |
| `/nest` | NEST Run Club |
| `/volunteering` | Volunteering & community |

There are **no** `/privacy` or `/terms` pages (removed in v1.0.2).

URLs use **trailing slashes** (`trailingSlash: true` in `next.config.mjs`).

## Architecture patterns

- **Most pages are Server Components**; `'use client'` only where needed (home hero interactions, `NavBar`, `SubstackArticles`).
- **Global chrome**: `src/app/layout.tsx` wraps every page with `NavBar` and `Footer`.
- **Styling**: Tailwind v4 via `@import "tailwindcss"` in `globals.css`. Custom design tokens in `@theme` (gold palette, Playfair Display + Inter). Reusable classes: `.container-padding`, `.section-padding`, `.card`, `.card-hover`, `.nav-link`, `.animate-fade-in`, `.animate-slide-up`.
- **Images**: `next/image` with `public/` paths; `images.unoptimized: true` in config.
- **External content**: Writing page pulls `https://nicholasconnelly.substack.com/feed` through `https://api.rss2json.com/v1/api.json` (client-side, no API routes in this repo).
- **Analytics**: `@vercel/analytics` and `@vercel/speed-insights` in root layout.

## Key external properties (linked, not in this repo)

- [muscadine.xyz](https://muscadine.xyz) — DeFi project
- [health.nickconnelly.com](https://health.nickconnelly.com) — Health & wellness
- [nicholasconnelly.substack.com](https://nicholasconnelly.substack.com) — Newsletter
- LinkedIn, contact flows as linked from footer/nav

## Conventions for changes

- Match existing tone: light serif headings (`font-light`), gray body text, white sections, dark footer (`bg-gray-900`).
- New top-level pages: add `src/app/<route>/page.tsx`, link from `NavBar.tsx` and `Footer.tsx` if they should be discoverable.
- Prefer server components unless the page needs hooks or browser APIs.
- Run `npm run lint` then `npm run build` before finishing substantive edits.
- Do not add legal/policy pages unless explicitly requested.
- Keep diffs small; no database, env secrets, or API routes unless the task requires them.

## ESLint

Flat config in `eslint.config.mjs` — lints `src/**/*.ts(x)` only; ignores `.next`, `node_modules`, `out`.

## What this repo is not

- No CMS, Supabase, or user accounts
- No `src/app/api/` routes
- No test suite in package.json scripts
- Legal pages (privacy/terms) were intentionally removed; footer has no Legal column

<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
