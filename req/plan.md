# Implementation Plan — Portfolio Website Build

## Phase 0 — Finalize Content (blocker before scaffolding)

1. User fills every `TODO(resume)` / `TODO(user)` item in [content.md](content.md) using the resume PDF and personal input.
2. Remaining open items in [requirement.md](requirement.md) §10 to confirm: project name confidentiality, and approving image placeholders. (Language, styling approach, and animation approach are already decided — see §4.)
3. User supplies (or approves placeholders for) profile photo + any project visuals.

## Phase 1 — Project Scaffolding

1. Initialize a React app with Vite using the TypeScript template (`npm create vite@latest . -- --template react-ts`).
2. Set up folder structure:
   ```
   src/
     assets/            # images, icons, resume.pdf copy
     components/        # Hero, About, Timeline, Skills, Projects, Achievements, Contact, Nav, Footer
     sections/          # page-section wrappers composing components
     hooks/              # e.g. useScrollReveal, useActiveSection
     styles/             # global styles, design tokens (colors, spacing, typography)
     data/               # content.ts generated from req/content.md (single source of truth import)
     App.tsx
     main.tsx
   public/
     resume.pdf
     favicon, og-image
   ```
3. Configure ESLint + Prettier for consistent formatting.
4. Add `vite.config` `base` path setup for GitHub Pages (root user site needs `base: '/'`).
5. Do **not** add any runtime npm dependency beyond `react`/`react-dom` without explicit user approval (see §4 dependency philosophy in requirement.md).

## Phase 2 — Design System

1. Define design tokens: color palette (near-black background, off-white text, single accent color), type scale (large hero display font, section headings, body), spacing scale, breakpoints.
2. Implement tokens as plain CSS custom properties (`:root { --color-bg: ...; }`) in a global stylesheet; use CSS Modules per component for scoped styles. No Tailwind or other CSS framework dependency.
3. Build a small set of reusable primitives: `Container`, `SectionHeading`, `Button`, `Badge`, `Card`.

## Phase 3 — Core Layout & Navigation

1. Sticky top nav that becomes solid/blurred after scrolling past hero (Apple-style), with smooth-scroll anchor links to each section.
2. Mobile nav (hamburger) with the same anchors.
3. Footer with contact/social links.

## Phase 4 — Sections (build in this order, one at a time, verify each in browser before moving on)

1. **Hero** — full-viewport intro, name/title/tagline, scroll-down indicator, entrance animation.
2. **About Me** — text + portrait placeholder, fade/slide-in on scroll.
3. **Experience Timeline** — vertical timeline, each entry animates in as it enters viewport; uses display titles from the mapping table.
4. **Skills** — grouped tag/pill grid with staggered reveal animation.
5. **Projects** — 3 large feature blocks (one per project in content.md), alternating image/text layout, scroll-triggered reveal, "Apple product feature" feel.
6. **Achievements** — Year-End Event highlight block.
7. **Resume CTA** — prominent button/section to download resume PDF.
8. **Contact/Footer** — icons + links, copyright line.

## Phase 5 — Animation & Polish

1. Implement a small hand-written `useScrollReveal` hook using the native `IntersectionObserver` API to toggle a CSS class (e.g. `is-visible`) when a section enters the viewport; pair with CSS transitions/keyframes for fade/slide/scale reveals. No animation library dependency.
2. Respect `prefers-reduced-motion` — disable/simplify animations when set (CSS media query + hook check).
3. Add page transitions/micro-interactions on buttons and nav links (hover/focus states) using CSS only.
4. Optimize images (lazy loading via native `loading="lazy"`, responsive `srcset`, WebP where possible).

## Phase 6 — SEO, Meta, Accessibility

1. Add `<title>`, meta description, Open Graph + Twitter card tags, favicon.
2. Run an accessibility pass (semantic tags, alt text, focus outlines, color contrast check).
3. Add `robots.txt` / basic sitemap (optional for a single-page site).

## Phase 7 — Testing & QA

1. Manual cross-browser check (Chrome, Edge, Safari, Firefox) and cross-device (mobile/tablet/desktop).
2. Lighthouse audit — target Performance/Accessibility/Best Practices/SEO all ≥ 90.
3. Verify all links (resume download, LinkedIn, GitHub, email `mailto:`) work correctly.

## Phase 8 — Deployment (GitHub Pages)

1. Add GitHub Actions workflow (`.github/workflows/deploy.yml`) to build with Vite and publish `dist/` to GitHub Pages on push to `main`.
2. Confirm repo name `KathireshanM.github.io` is set as the Pages source (user/organization root site — no `base` path prefix needed).
3. Verify live site after Actions run completes.

## Phase 9 — Post-Launch

1. Share link in Instagram bio / interview applications.
2. Periodically update `content.md` and re-deploy as new projects/achievements are added.

---

### Suggested Working Mode with Copilot Agent Mode

- Tackle **one phase (or even one section) per agent session** rather than asking for the whole site in one shot — easier to review and steer.
- After scaffolding (Phase 1–2), ask Copilot to implement Phase 4 sections one at a time, reviewing each in the browser before continuing.
- Use [prompt.md](prompt.md) as the kickoff prompt, then give short, specific follow-up instructions per phase.
