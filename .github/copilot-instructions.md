# Copilot Instructions for This Repository

This repo (`KathireshanM.github.io`) is a personal portfolio site hosted on GitHub Pages as a
user root site. Follow these rules in every Agent Mode / Chat session:

## Source of Truth

- Requirements: [req/requirement.md](../req/requirement.md)
- Content/copy (facts, bio, experience, projects, contact): [req/content.md](../req/content.md)
- Build plan/phases: [req/plan.md](../req/plan.md)
- Kickoff prompt: [req/prompt.md](../req/prompt.md)

Never invent resume facts (dates, company names, contact details) — if something needed is
marked `TODO` in `req/content.md`, ask the user instead of guessing.

## Role Title Mapping (must always be applied)

| Internal Title | Display Title |
|---|---|
| Associate | Senior Quality Engineer \| SDET |
| Programmer Analyst / Programmer | Quality Engineer |
| Programmer Trainee | Junior Quality Engineer |

Only display titles should ever appear in the UI.

## Tech Stack Conventions

- React + Vite + **TypeScript**. Prefer functional components and hooks.
- **Self-dependent by design:** plain CSS/CSS Modules only (no Tailwind or CSS-in-JS), and native
  browser APIs (CSS transitions/keyframes + `IntersectionObserver`) for all scroll/entrance
  animations — no Framer Motion, GSAP, AOS, or similar. Do not add any runtime npm dependency
  beyond `react`/`react-dom` without the user's explicit approval; dev-only tooling
  (Vite/TypeScript/ESLint/Prettier) is fine.
- No backend/server code — this is a fully static site.
- No secrets, API keys, or private personal data committed to the repo.
- Keep textual content imported from a single `src/data/content.*` module derived from
  `req/content.md`, rather than hardcoding copy across components.

## Working Style

- Build one phase/section from `req/plan.md` at a time; summarize changes before moving on.
- Respect `prefers-reduced-motion` for all scroll/entrance animations.
- Keep the design responsive and accessible (semantic HTML, alt text, contrast, keyboard nav).
- Do not add analytics, tracking, or third-party scripts unless explicitly requested.
