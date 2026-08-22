# Master Prompt — Paste This Into Copilot Chat (Agent Mode)

> Use this as the first message once you switch VS Code Copilot Chat to **Agent Mode**, in this
> repository. It references the other planning docs so Copilot has full context. Do not run it until
> `req/content.md` has all `TODO` items filled in.

---

## Prompt to paste

I want you to build a personal portfolio website for me in this repository, following the docs in the `req/` folder as the single source of truth:

- `req/requirement.md` — full functional & non-functional requirements.
- `req/content.md` — the exact copy/content to use for every section (do not invent facts not present here).
- `req/plan.md` — the phased build plan to follow.

Please work phase by phase from `req/plan.md`, starting with Phase 1 (scaffolding). After each phase, pause and summarize what you did before moving to the next phase — do not implement everything in one giant step.

Requirements recap:
- Tech stack: React + Vite + **TypeScript**, hosted for free on GitHub Pages directly from this repo (`KathireshanM.github.io`, a user root site).
- Dependency policy: keep the site **self-dependent** — plain CSS/CSS Modules only (no Tailwind), and native browser APIs (CSS transitions/keyframes + `IntersectionObserver`) for all animations instead of a third-party animation library. Do not add any runtime npm dependency beyond `react`/`react-dom` without asking me first.
- Visual style: Apple MacBook product page aesthetic — dark, minimal, elegant, big confident typography, one accent color, generous spacing, smooth scroll-triggered reveal/parallax animations between sections. Not a generic template look.
- Sections, in order: Hero, About Me, Experience Timeline, Skills, Projects, Achievements, Resume download, Contact/Footer — exactly as described in `req/requirement.md` §5 and content in `req/content.md`.
- Experience must use the display titles (not internal titles) per the mapping table in `req/requirement.md` §6.
- Animations must respect `prefers-reduced-motion` and stay performant on mobile.
- Fully responsive (mobile/tablet/desktop), accessible (semantic HTML, alt text, good contrast, keyboard nav), and include basic SEO/Open Graph meta tags.
- No backend — fully static site, no secrets committed.
- Set up a GitHub Actions workflow to build and deploy to GitHub Pages on push to `main`.

Before writing code, please:
1. Confirm any remaining open items from `req/requirement.md` §10 with me if they're still unresolved.
2. Propose the exact folder structure and dependency list you plan to use.

Then proceed with Phase 1 from `req/plan.md`.

---

## Follow-up prompts (use one at a time, per phase)

- "Proceed with Phase 2 — set up the design system/tokens and base styling approach."
- "Proceed with Phase 3 — build the sticky nav and footer."
- "Now build the Hero section from Phase 4, matching the Apple-style entrance animation described in the plan."
- "Now build the About Me section."
- "Now build the Experience Timeline section — remember to use display titles, not internal titles."
- "Now build the Skills section."
- "Now build the Projects section — one feature block per project in content.md."
- "Now build the Achievements section."
- "Now add the Resume download CTA and Contact/Footer."
- "Now do Phase 5 — polish animations and add prefers-reduced-motion support."
- "Now do Phase 6 — SEO meta tags and an accessibility pass."
- "Now set up Phase 8 — the GitHub Actions workflow to deploy to GitHub Pages."

## Tips

- If an animation or layout doesn't look right, describe what you see vs. what you expected (screenshot helps) rather than re-describing the whole design.
- Keep `req/content.md` as the only place you edit actual copy/facts — ask Copilot to read from it rather than hardcoding text changes ad hoc, so future updates stay easy.
