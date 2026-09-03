# Agent Mode Build Instructions

You are working in the repository `KathireshanM.github.io`. Treat this file as the build instruction
for the portfolio website. Before changing any application file, read these repository documents:

- `req/requirement.md` — functional and non-functional requirements.
- `req/content.md` — approved copy and professional facts.
- `req/plan.md` — phased implementation roadmap.
- `.github/copilot-instructions.md` — persistent coding and architecture rules.
- `req/resume.md` and `req/additional_content.md` — source context only; use the curated `req/content.md` for UI copy.

Please work phase by phase from `req/plan.md`, starting with Phase 1 (scaffolding). After each phase, pause and summarize what you did before moving to the next phase — do not implement everything in one giant step.

## Execution Rules

- First inspect the repository state, existing files, and package manager availability.
- Before writing code, state the files you plan to create/change, the dependencies you plan to use, and any concrete blocker.
- Begin with Phase 1 only. Do not implement later phases until the user explicitly asks to proceed.
- After editing, run the narrowest relevant validation command. For Phase 1, run the TypeScript/build validation available after scaffolding.
- Do not silently install or introduce runtime libraries. Ask for approval before adding any runtime dependency beyond `react` and `react-dom`.
- Do not invent resume facts, dates, metrics, company names, project names, locations, links, or claims. If a fact is absent from `req/content.md`, ask the user.
- Keep all rendered professional copy in a single typed content module derived from `req/content.md`; do not scatter hardcoded facts across components.
- Use the display titles specified in `req/requirement.md`; never render internal employment titles.
- Do not add a phone number, resume download, profile photo, or project screenshots.
- Do not create backend code, authentication, analytics, tracking, secrets, or third-party scripts.

Requirements recap:
- Tech stack: React + Vite + **TypeScript**, hosted for free on GitHub Pages directly from this repo (`KathireshanM.github.io`, a user root site).
- Dependency policy: keep the site **self-dependent** — plain CSS/CSS Modules only (no Tailwind), and native browser APIs (CSS transitions/keyframes + `IntersectionObserver`) for all animations instead of a third-party animation library. Do not add any runtime npm dependency beyond `react`/`react-dom` without asking me first.
- Visual style: Apple MacBook product page aesthetic — dark, minimal, elegant, big confident typography, one accent color, generous spacing, smooth scroll-triggered reveal/parallax animations between sections. Not a generic template look.
- Sections, in order: Hero, About Me, Experience Timeline, Skills, Selected Work/Innovation, Application Leadership, Observability & Enterprise Delivery, Education & Certifications, Achievements, Contact/Footer — exactly as described in `req/requirement.md` §5 and content in `req/content.md`. Do not add a resume download in this version.
- Experience must use the display titles (not internal titles) per the mapping table in `req/requirement.md` §6.
- Make the portfolio evidence-led: show what problem was solved, what Kathireshan built or led, the technical approach, team/scope, and measurable outcome. Prioritize the strongest proof points (30-to-5-minute test data creation, 1,400-script migration, 4/15-member leadership, 8-member QA leadership, 80% coverage/pass percentage, 95% coverage, 60% faster execution, 70% less script rework, and 80% less schema maintenance work).
- Include the AI Test Case Agent, XML and JSON Test Data Platforms, Mock Server, Custom BDD Automation Agent, AI Mesh concept/prototype, Serenity-to-Cypress migration, Serenity-to-WebdriverIO migration, AWS Digital Customer QA leadership, DataDog/BrowserStack observability, and SAP-to-Salesforce plus Cognito-to-Microsoft Entra migrations. Do not present the AI Mesh concept as a production deployment.
- Do not invent dates for the two framework migrations; describe them within the Quality Engineer employment period.
- Animations must respect `prefers-reduced-motion` and stay performant on mobile.
- Fully responsive (mobile/tablet/desktop), accessible (semantic HTML, alt text, good contrast, keyboard nav), and include basic SEO/Open Graph meta tags.
- No backend — fully static site, no secrets committed.
- Do not add a profile photo or project screenshots; the visual storytelling must work with typography, CSS, layout, and native UI treatments.
- Set up a GitHub Actions workflow to build and deploy to GitHub Pages on push to `main`.

Before writing code, please:
1. Read the listed files directly from the repository; do not ask the user to paste their contents.
2. Propose the exact folder structure and dependency list you plan to use.
3. If there are no blockers, implement Phase 1 immediately after reporting the proposal.

Then proceed with Phase 1 from `req/plan.md`.

## Phase Progression Commands

The user will explicitly request the next phase. When that happens, read `req/plan.md` again and implement only that phase.

- "Proceed with Phase 2 — set up the design system/tokens and base styling approach."
- "Proceed with Phase 3 — build the sticky nav and footer."
- "Now build the Hero section from Phase 4, matching the Apple-style entrance animation described in the plan."
- "Now build the About Me section."
- "Now build the Experience Timeline section — remember to use display titles, not internal titles."
- "Now build the Skills section."
- "Now build the Projects section — one feature block per project in content.md."
- "Now build the Achievements section."
- "Now add the Contact/Footer. Do not add a resume download."
- "Now do Phase 5 — polish animations and add prefers-reduced-motion support."
- "Now do Phase 6 — SEO meta tags and an accessibility pass."
- "Now set up Phase 8 — the GitHub Actions workflow to deploy to GitHub Pages."

## Tips

- If an animation or layout doesn't look right, describe what you see vs. what you expected (screenshot helps) rather than re-describing the whole design.
- Keep `req/content.md` as the only place you edit actual copy/facts — ask Copilot to read from it rather than hardcoding text changes ad hoc, so future updates stay easy.
