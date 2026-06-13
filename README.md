# pavanjoshi.dev

Personal portfolio of **Pavan Joshi** — AI Backend Engineer.

Built with **Next.js 14 (App Router)**, **TypeScript**, **Tailwind CSS**, and **Framer Motion**.

---

## Tech stack

| Concern      | Choice                                  |
| ------------ | --------------------------------------- |
| Framework    | Next.js 14 (App Router, static export)  |
| Language     | TypeScript                              |
| Styling      | Tailwind CSS                            |
| Animation    | Framer Motion                           |
| Fonts        | Space Grotesk / DM Sans / JetBrains Mono (self-hosted via `next/font`) |
| Deployment   | Vercel                                  |

---

## Getting started

```bash
# 1. Install dependencies
npm install

# 2. Start the dev server (http://localhost:3000)
npm run dev

# 3. Production build + run locally
npm run build
npm run start
```

> Requires **Node.js 18.17+** (tested on Node 20).

---

## Editing content

All text content lives in **one file**: [`lib/data.ts`](lib/data.ts).
Update your profile, stats, skills, experience, projects, and education there —
the components render everything from it. No need to touch the JSX.

```
lib/
  data.ts        ← all resume content (edit here)
  motion.ts      ← shared animation variants
app/
  layout.tsx     ← fonts, <head> metadata / SEO
  page.tsx       ← section order
  globals.css    ← theme, grid background, glass, scrollbar
components/       ← one file per section + animation primitives
```

### Common tweaks

- **Reorder sections** → rearrange in [`app/page.tsx`](app/page.tsx).
- **Brand colors** → edit the `colors` block in [`tailwind.config.ts`](tailwind.config.ts)
  (`accent` = green, `iris` = indigo, `ink` = background).
- **SEO / page title** → [`app/layout.tsx`](app/layout.tsx) `metadata`.
- **Rotating hero titles** → `profile.roles` in `lib/data.ts`.

---

## Deploying to Vercel

1. Push this folder to a GitHub repository.
2. Go to [vercel.com/new](https://vercel.com/new) and import the repo.
3. Vercel auto-detects Next.js — no configuration needed. Click **Deploy**.
4. (Optional) Add your custom domain `pavanjoshi.dev` under
   **Project → Settings → Domains**.

Every push to `main` redeploys automatically.

### Or via the Vercel CLI

```bash
npm i -g vercel
vercel          # preview deploy
vercel --prod   # production deploy
```

---

## Accessibility & performance notes

- Honors `prefers-reduced-motion` (animations disabled globally via `MotionConfig`).
- Semantic landmarks, `aria-label`s on icon-only buttons, keyboard-navigable.
- Fonts self-hosted by `next/font` (no layout shift, no third-party CDN).
- Fully responsive at 375 / 768 / 1024 / 1440 px.
- Statically prerendered — fast first load.
