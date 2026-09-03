# Requirements — Personal Portfolio Website (KathireshanM.github.io)

## 1. Purpose

A personal, single-page portfolio web application to showcase Kathireshan M's professional profile. It will be:

- Shared in job/interview applications.
- Linked in Instagram bio and shared on request.
- Hosted for free on GitHub Pages at the root domain `https://kathireshanm.github.io`.

The visual/interaction bar to hit: **Apple's MacBook product page** — cinematic full-viewport sections, smooth scroll-triggered reveal/parallax animations, large confident typography, generous whitespace, minimal color palette with one accent color, and buttery-smooth transitions between sections.

## 2. Reference Inspiration

- Apple MacBook page (https://www.apple.com/macbook-pro/) — layout rhythm, scroll storytelling, sticky/pinned sections, fade+scale reveals, sticky nav that changes style on scroll.
- Style should feel premium, elegant, uncluttered — not a generic Bootstrap template.

## 3. Target Audience

- Recruiters / hiring managers / interview panels.
- Instagram followers / personal network asking "what do you do?".
- Anyone the link is shared with (no login, fully public, static site).

## 4. Tech Stack (decided)

- **Framework:** React (Vite-based React app — faster dev/build than CRA, simple static output for GitHub Pages).
- **Language:** **TypeScript** (confirmed).
- **Dependency philosophy (important, confirmed by user):** Keep the site **self-dependent** — avoid third-party runtime UI/animation libraries so the site can't break if a package is deprecated, abandoned, or has a breaking release. Concretely:
  - **Styling:** Plain CSS / CSS Modules only (built into Vite, no extra build plugin required). No Tailwind CSS, no CSS-in-JS libraries.
  - **Animation:** Native browser APIs only — CSS transitions/keyframes/`@media (prefers-reduced-motion)` for entrance/hover effects, and the native `IntersectionObserver` API (via a small hand-written `useScrollReveal` hook) for scroll-triggered reveals. No Framer Motion, GSAP, AOS, or any other animation dependency.
  - **Allowed dependencies:** Only `react`, `react-dom`, and standard Vite/TypeScript/ESLint/Prettier tooling (dev-time only, does not ship to the browser). Any additional runtime dependency must be explicitly approved by the user first.
  - Rationale: fewer runtime dependencies = lower long-term maintenance risk and no breakage if a third-party library is deprecated or removed.
- **Routing:** Single-page, section-based (anchor scroll), no react-router needed unless a separate `/resume` or `/projects/:id` deep-link view is desired later.
- **Hosting/Deploy:** GitHub Pages, deployed from this repo (`KathireshanM.github.io`), built via GitHub Actions workflow (`npm run build` → publish `dist` to Pages). No custom domain for now.
- **Assets:** No profile photo or project screenshots. Use typography, CSS, and native UI treatments to present the work.

## 5. Site Sections (in order)

1. **Hero / Landing** — Full-viewport intro with name, title, a short tagline, and a scroll cue. Subtle entrance animation.
2. **About Me** — Short personal + professional summary. Scroll-reveal text and CSS-led visual treatment.
3. **Experience Timeline** — Reverse-chronological role history mapped as below (see §6). Animated timeline reveal as user scrolls, with selected evidence and outcomes rather than a wall of resume bullets.
4. **Skills / Tech Stack** — Grouped skill categories (e.g., Testing/QE, Automation, AI/Copilot tooling, Cloud/DevOps, Languages). Animated grid/tags.
5. **Selected Work / Innovation** — Feature sections for the tools and initiatives in §7, organized into AI engineering, test data and mocking platforms, automation migrations, application quality leadership, observability, and enterprise delivery. Each feature must explain the problem, what was built, how it worked, and the outcome where available.
6. **Education & Certifications** — Compact, scannable groups for the confirmed education and certifications.
7. **Achievements / Extracurricular** — Awards, technical achievements, and Year-End Event leadership.
8. **Contact / Footer** — Email, LinkedIn, GitHub, social icons, copyright. Phone number is intentionally excluded from the site. No resume download is included at this stage.

## 6. Experience / Role Mapping Rules (IMPORTANT — must be followed exactly)

The site must **not** use raw internal job titles as-is; map them to public-facing titles as follows:

| Internal / Actual Title                  | Display Title on Website        |
|-------------------------------------------|----------------------------------|
| Associate                                  | Senior Quality Engineer \| SDET |
| Programmer Analyst                         | Quality Engineer                |
| Programmer                                 | Junior Quality Engineer         |

- Any role title encountered that is a variant of "Associate" → display as **Senior Quality Engineer | SDET**.
- "Programmer Analyst" → display as **Quality Engineer**.
- "Programmer" → display as **Junior Quality Engineer**.
- The internal titles must not appear in the UI. Use only the public display titles above.
- Company names, exact dates, and durations must come from `req/resume.md` or be explicitly supplied by the user — do not invent dates or company names.

## 7. Key Projects and Capability Stories to Feature (content confirmed by user)

### 7.1 Test Case AI Agent (Senior Quality Engineer | SDET role)

- Built using the **GitHub Copilot SDK**.
- Purpose: AI agent that generates/assists with test cases.
- Highlight: cutting-edge, GenAI-driven quality engineering tooling.

### 7.2 XML and JSON Test Data Platforms (Quality Engineer and Senior Quality Engineer | SDET roles)

- Dynamically creates test data based on schemas resolved at run time.
- Runs inside an **Azure Pipeline**.
- Integrated with an **AWS service**.

### 7.3 Mock Server Tool (Senior Quality Engineer | SDET role)

- Advanced custom mocking capabilities:
  - Custom response status code, body, cookies, and full response object via custom JSON.
  - JavaScript scripting support to derive dynamic mock responses at runtime.
  - Custom API paths with **pattern matching** support.

### 7.4 AI Engineering and Custom Agents

- AI Mesh concept/prototype with structured self-notes, feedback loops, self-evaluation, and adaptive processing guidance for AI agents. It must be presented as a concept, not a production claim.
- Custom BDD test automation agent configured through markdown-based skills, agent instructions, and hooks; supports creating, modifying, and debugging automation code.
- GitHub Copilot used to understand application code, derive mock responses, identify bugs, edge cases, and gaps early.

### 7.5 Automation Framework Migrations

- Led the Serenity Java + Cucumber BDD to Cypress JavaScript + Cucumber BDD migration for 1,400 digital portal automation scripts and a four-member team; created the Cypress framework from scratch after a proof of concept.
- Led the Serenity Java + Cucumber BDD to WebdriverIO JavaScript + Cucumber BDD migration for Salesforce automation and a 15-member team; created the WebdriverIO framework from scratch after a proof of concept.
- Do not invent separate migration dates; describe both within the Quality Engineer employment period.

### 7.6 Application Quality Leadership and Observability

- Led an eight-member AWS Digital Customer web portal QA team, including Agile ceremonies, customer/business-focused testing, in-sprint automation, QA audits, DSR/MSR reporting, metrics, bug triage, and delivery support.
- Maintained approximately 80% automation coverage and pass percentage for twice-weekly releases while addressing flakiness, test data issues, and changing requirements.
- Built nightly smoke and deployment-triggered regression pipelines that published reports to GitHub Pages and emailed results to stakeholders.
- Created production synthetic tests and monitored DataDog alerts, metrics, thresholds, and errors.
- Built a real-time multi-device test that selected the top 10 production device/browser combinations and matched them to BrowserStack coverage.

### 7.7 Enterprise Migrations

- Led SAP user, billing, payment, meter, and industry-detail migration to Salesforce and a custom energy CRM connected to the UK energy industry during the Quality Engineer role.
- Led end-customer authentication migration from Spring Boot and AWS Cognito to Microsoft Entra for a digital web application and mobile app during the Senior Quality Engineer | SDET role.

## 8. Achievements / Culture Contribution

- Organized and conducted **Year-End Events** for the team — fun activities aimed at team spirit and bringing the team together.

## 9. Non-Functional Requirements

- **Performance:** Fast initial load (code-split, lazy-load images/animations), Lighthouse performance score ≥ 90 on desktop.
- **Responsiveness:** Fully responsive — mobile, tablet, desktop. Scroll animations must degrade gracefully / reduce-motion friendly (`prefers-reduced-motion`) on mobile and for accessibility.
- **Accessibility:** Semantic HTML, sufficient color contrast, keyboard navigable, alt text on images.
- **SEO:** Basic meta tags (title, description, Open Graph tags for link previews on Instagram/LinkedIn/WhatsApp), favicon.
- **No backend:** Fully static site, no server/database — safe to host on GitHub Pages for free.
- **No secrets committed:** No API keys, tokens, or personal sensitive data beyond what's intended to be public (email is intentionally public; phone number is excluded — see §10).

## 10. Open Items / Confirm Before Building (do not assume)

- [x] Resume-derived facts are available in `req/resume.md` and have been incorporated into `req/content.md`.
- [x] Phone number will NOT be published on the site — confirmed by the user. Only email, LinkedIn, and GitHub are shown for contact.
- [x] TypeScript confirmed for the React app.
- [x] Confirmed: plain CSS/CSS Modules only (no Tailwind), and no third-party animation library — see §4 dependency philosophy.
- [x] User confirmed the information in `req/resume.md` can be used on the website, including company and project details.
- [x] No profile photo or project screenshots are required; the design must work without them.

## 11. Deliverables for This Planning Phase

- `req/requirement.md` (this file) — full requirements.
- `req/content.md` — structured, ready-to-use copy/content for every section, populated from `req/resume.md`.
- `req/plan.md` — phased build plan/roadmap for the React app.
- `req/prompt.md` — the master prompt to paste into Copilot Chat (Agent Mode) to scaffold and build the actual website.
- `.github/copilot-instructions.md` — persistent repo-level instructions so every Copilot Agent session follows the same stack/conventions.

No application code is written in this planning phase — only planning/requirement/content markdown files.
