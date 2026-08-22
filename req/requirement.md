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
- **Assets:** Local images under `src/assets` (placeholders for now — profile photo and project screenshots to be added later by the user).

## 5. Site Sections (in order)

1. **Hero / Landing** — Full-viewport intro with name, title, a short tagline, and a scroll cue. Subtle entrance animation.
2. **About Me** — Short personal + professional summary. Scroll-reveal text/image.
3. **Experience Timeline** — Reverse-chronological role history mapped as below (see §6). Animated timeline reveal as user scrolls.
4. **Skills / Tech Stack** — Grouped skill categories (e.g., Testing/QE, Automation, AI/Copilot tooling, Cloud/DevOps, Languages). Animated grid/tags.
5. **Projects** — Feature cards/sections for the 3 projects in §7, each with description, tech used, and impact. Apple-style "product feature" treatment (large heading, supporting visual placeholder, short copy).
6. **Achievements / Extracurricular** — Year End Event organizing (team building/culture contributions).
7. **Resume** — Prominent "Download Resume" button (serves the PDF from `req/` or a copied `public/` asset).
9. **Contact / Footer** — Email, LinkedIn, GitHub (exact values to be pulled from resume — see Open Items §10), social icons, copyright. Phone number is intentionally excluded from the site.

## 6. Experience / Role Mapping Rules (IMPORTANT — must be followed exactly)

The site must **not** use raw internal job titles as-is; map them to public-facing titles as follows:

| Internal / Actual Title                  | Display Title on Website        |
|-------------------------------------------|----------------------------------|
| Associate                                  | Senior Quality Engineer \| SDET |
| Programmer Analyst / Programmer            | Quality Engineer                |
| Programmer Trainee                         | Junior Quality Engineer         |

- Any role title encountered that is a variant of "Associate" → display as **Senior Quality Engineer | SDET**.
- Any role title that is "Programmer Analyst" or "Programmer" → display as **Quality Engineer**.
- "Programmer Trainee" → display as **Junior Quality Engineer**.
- Company names, exact dates, and durations must come from the resume (`req/Kathireshan Manoharan.pdf`) or be explicitly supplied by the user — do not invent dates or company names.

## 7. Key Projects to Feature (content confirmed by user)

### 7.1 Test Case AI Agent (current year, Senior Quality Engineer | SDET role)

- Built using the **GitHub Copilot SDK**.
- Purpose: AI agent that generates/assists with test cases.
- Highlight: cutting-edge, GenAI-driven quality engineering tooling.

### 7.2 Dynamic Run-Time Schema Based Test Data Creation Tool (built during Quality Engineer role or earlier)

- Dynamically creates test data based on schemas resolved at run time.
- Runs inside an **Azure Pipeline**.
- Integrated with an **AWS service**.

### 7.3 Mock Server Tool (built during Quality Engineer role or earlier)

- Advanced custom mocking capabilities:
  - Custom response status code, body, cookies, and full response object via custom JSON.
  - JavaScript scripting support to derive dynamic mock responses at runtime.
  - Custom API paths with **pattern matching** support.

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

- [ ] Exact resume-derived facts: company names, employment dates/durations for each role, degree/education, exact email, LinkedIn URL, GitHub URL — must be transcribed from `req/Kathireshan Manoharan.pdf` (or pasted by the user) into `req/content.md` before the agent builds the site. **The AI agent must not invent these.**
- [x] Phone number will NOT be published on the site — confirmed by the user. Only email, LinkedIn, and GitHub are shown for contact.
- [x] TypeScript confirmed for the React app.
- [x] Confirmed: plain CSS/CSS Modules only (no Tailwind), and no third-party animation library — see §4 dependency philosophy.
- [ ] Confirm project/company names are safe to publish (some employers restrict naming internal tools/clients — user to confirm no confidentiality issue with project descriptions above).
- [ ] Profile photo and project screenshots — placeholders will be used until the user supplies real images.

## 11. Deliverables for This Planning Phase

- `req/requirement.md` (this file) — full requirements.
- `req/content.md` — structured, ready-to-use copy/content for every section (with explicit TODO markers where resume data is still needed).
- `req/plan.md` — phased build plan/roadmap for the React app.
- `req/prompt.md` — the master prompt to paste into Copilot Chat (Agent Mode) to scaffold and build the actual website.
- `.github/copilot-instructions.md` — persistent repo-level instructions so every Copilot Agent session follows the same stack/conventions.

No application code is written in this planning phase — only planning/requirement/content markdown files.
