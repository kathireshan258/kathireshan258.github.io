# Site Content (Source of Truth for Copy)

> This file holds the actual words/data the website should render. Resume facts are
> transcribed from `req/resume.md`. Copilot must not invent additional facts.

## Identity

- **Name:** Kathireshan M
- **Display Title / Tagline:** Senior Quality Engineer | SDET
- **Short one-liner (hero subtext):** I turn complex quality problems into intelligent tools, resilient automation, and measurable delivery improvements.

## About Me

Draft (edit freely):

> I'm Kathireshan M, a Senior Quality Engineer | SDET who turns complex quality challenges into intelligent tools, resilient automation, and measurable delivery improvements. My work spans AI-assisted test case generation, schema-driven XML and JSON test data platforms, advanced API mocking, framework migrations, cloud-connected pipelines, observability, and quality leadership.

The site should keep the tone professional and concise. Do not add hobbies or personal details that are not present in the source content.

## Experience Timeline

> Titles must use the **display title**, not the internal title (see mapping table in `req/requirement.md` §6). The internal titles are retained here only to document the mapping and must not appear in the UI.

| # | Display Title | Internal Title (for reference only, not shown) | Company | Start – End | Key Highlights |
|---|---------------|--------------------------------------------------|---------|-------------|-----------------|
| 1 | Senior Quality Engineer \| SDET | Associate | Cognizant Technology Solutions Pvt. Ltd. | October 2025 – Present | Built AI-assisted quality tools, a production-grade API Mock Server, GitHub Copilot extensibility workflows, MCP integrations, and dynamic schema-based XML tooling; led authentication migration and reduced script rework cycles by 70%. |
| 2 | Quality Engineer | Programmer Analyst | Cognizant Technology Solutions Pvt. Ltd. | November 2020 – October 2025 | Led automation migrations, SAP-to-Salesforce delivery, an eight-member application QA team, XML/JSON test data tooling, and cloud pipelines; achieved 95% cross-browser/device coverage, 60% faster Cypress execution, and mentored 10+ testers. |

## Skills

Group into categories — refine list from resume + projects:

- **Automation Tools:** Selenium, Cypress, Playwright, REST Assured, Postman, BrowserStack, Cucumber, TestNG
- **AI Engineering & LLMs:** GitHub Copilot Extensibility, Model Context Protocol (MCP), Multi-Agent Mesh Systems, State Retention Loops, Prompt Engineering, Claude, Autonomous Subagents
- **Programming Languages & Frameworks:** Java, JavaScript, Node.js, Cypress, Serenity, WebdriverIO (WDIO)
- **CI/CD & Build Tools:** Maven, Azure DevOps Pipelines, GitHub Actions, Git
- **Defect & Test Management:** Azure DevOps, Trello, GitHub Project Board, ServiceNow, DataDog, JIRA
- **Testing Specialties:** UI Automation, API Automation, Functional Testing, Regression Testing, Integration Testing, Cross-Browser Testing, Cross-Device Testing
- **Cloud, Architectures & Methodologies:** Amazon Web Services (AWS), Microsoft Azure, Salesforce, MuleSoft, Vlocity, Microservices, React, Angular, WayPoint, Agile, Scrum, Sprint Delivery
- **Leadership & Delivery:** QA Team Leadership, Agile Ceremonies, In-Sprint Automation, QA Audits, DSR/MSR Reporting, Bug Triage, Quality Metrics, Stakeholder Communication
- **Observability:** DataDog Synthetic Monitoring, Production Alerts, Metrics and Threshold Monitoring, BrowserStack Real-Device Testing

## Projects

### 1. Test Case AI Agent

- **Built during:** Senior Quality Engineer | SDET role
- **Summary:** A guarded AI test case creation agent built with the GitHub Copilot SDK. It connects through custom MCP tooling to Azure DevOps and GitHub Project Board, retrieves user story descriptions and acceptance criteria, searches related stories by keywords, and prepares relevant context for the LLM while conserving token usage.
- **Tech:** GitHub Copilot SDK, GitHub Copilot Extensibility, MCP, Node.js, Express.js
- **Impact / Result:** Drastically reduced manual test case authoring effort. Guardrails, human-in-the-loop approvals, staged review, and a security-analysis factor help keep the workflow transparent, responsible, and secure.

### 2. XML and JSON Test Data Platforms

- **Built during:** Quality Engineer and Senior Quality Engineer | SDET roles
- **Summary:** Created XML and JSON test data tools so the team could generate valid test files instead of preparing data manually. The XML tool began in Serenity Cucumber Java, moved to Express.js, and was later upgraded to fetch the latest XML schema from the Azure DevOps developer repository and generate data from current schema rules.
- **Tech:** Serenity Cucumber Java, Express.js, JavaScript, Azure DevOps, XML/XSD, JSON, Azure Pipelines
- **Impact / Result:** Reduced XML test data creation time from 30 minutes to 5 minutes and reduced maintenance when developers changed or introduced schemas.

### 3. Mock Server Tool

- **Built during:** Senior Quality Engineer | SDET role
- **Summary:** A standalone Fiddler-like mock server that monitors configured API calls from Chrome, Edge, Postman, and other applications, then returns static or programmatic responses. Multiple APIs can be mocked simultaneously, including response headers, body, cookies, and the complete response object.
- **Tech:** Node.js, Express.js, custom JSON, JavaScript
- **Impact / Result:** Enables dynamic edge-case testing before dependent services or uncommon response conditions are available, with static URL matching or pattern matching.

### 4. Custom BDD Automation Agent

- **Built during:** Senior Quality Engineer | SDET role
- **Summary:** Created a custom agent using markdown-based skills, agent instructions, and hooks to work on BDD test automation.
- **Capabilities:** Creates new automation code, modifies existing code, and diagnoses/debugs automation failures.
- **Impact / Result:** Improved the quality of AI-generated BDD automation and reduced the manual modifications required from QA engineers.

### 5. AI Mesh Architecture Concept

- **Built during:** Senior Quality Engineer | SDET role
- **Summary:** Designed an AI usage concept in which agents keep structured notes about what worked, what failed, how to process future requests, and how to present results, creating a feedback loop for self-evaluation and refinement.
- **Framing:** This is an architecture concept/prototype and must not be presented as a production deployment.

### 6. Automation Framework Migrations

- **Serenity to Cypress:** Planned and led the migration of 1,400 digital portal Serenity Java + Cucumber BDD scripts to a Cypress JavaScript + Cucumber BDD framework. Created the Cypress framework from scratch after a proof of concept and led a four-member migration team.
- **Serenity to WebdriverIO:** Planned and led the Salesforce Serenity Java + Cucumber BDD migration to a WebdriverIO JavaScript + Cucumber BDD framework. Created the framework from scratch after a proof of concept and led a 15-member migration team.
- **Outcome:** Modernized automation foundations while improving execution speed, maintainability, and team delivery capability.

### 7. Application Quality Leadership

- **Scope:** Led an eight-member AWS Digital Customer web portal QA team, balancing customer experience, business requirements, Agile ceremonies, in-sprint automation, delivery readiness, and QA process audits.
- **Delivery:** Supported twice-weekly releases while maintaining approximately 80% automation coverage and pass percentage by addressing flakiness, test data issues, and change-driven maintenance.
- **Pipelines:** Created nightly smoke and deployment-triggered regression pipelines. Reports were hosted on GitHub Pages and shared with stakeholders by email with test percentage and status.
- **Quality operations:** Collected DSRs, prepared MSRs and automation metrics, led bug triage communication, checked agreed SDLC quality measures, and supported squads toward shared quality goals.

### 8. Production Observability and Real-Device Testing

- **Summary:** Created DataDog synthetic tests for production checks, monitored alerts, metrics, errors, and threshold spikes, and built a real-time multi-device test using DataDog and BrowserStack.
- **Implementation:** The test identifies the top 10 production device/browser combinations in real time, matches them to available BrowserStack devices, and executes coverage against representative production usage.
- **Impact / Result:** Strengthened early detection, production confidence, and customer-focused cross-device coverage.

### 9. Enterprise Migration Leadership

- **SAP to Salesforce:** Led migration of user, billing, payment, meter, and industry details from SAP into Salesforce and a custom energy CRM connected to the UK energy industry.
- **Cognito to Microsoft Entra:** Led migration of end-customer authentication from Spring Boot and AWS Cognito to Microsoft Entra for a digital web application and mobile app.

## Achievements / Culture

- **Year-End Event Organizer:** Planned and conducted year-end events for the team, creating fun moments and strengthening team spirit and camaraderie.
- **Awards:** Best Team Player of the Year (2024); Best Performer of the Month (2024); Leadership Excellence Award (2025); KM Portal Implementation Recognition (2023).
- **Technical Achievements:** Built an autonomous context-crawling AI agent; developed a custom Prompt Library VS Code extension; architected an Anthropic MCP server using Microsoft Graph APIs.
- **Year-End Communications:** Planned and conducted year-end events for the entire onshore and offshore team from joining Cognizant through 2024. Created polished year-end deck videos and presentations covering Delivery Lead changes, turnovers, achievements, innovation ideas, successes, and KPIs for Delivery Leads meetings.

## Education

- **Master of Science – Information Technology:** Bharathiar University, Coimbatore (2021 – 2025)
- **Bachelor of Science – Information Technology:** Kongunadu Arts and Science College, Coimbatore (2017 – 2020)

## Certifications

- Anthropic - Claude Certified Architect (Foundations), including Advanced Track, Cloud Implementations, and Workflow Toolkits
- DataDog Foundation
- Introduction to Observability

## Contact

> Phone is intentionally excluded. These public contact values are transcribed from `req/resume.md`.

- **Email:** kathireshanmanoharan@gmail.com
- **LinkedIn:** https://www.linkedin.com/in/kathireshan-manoharan-18599a192
- **GitHub:** https://github.com/kathireshan258

## SEO / Social Preview

- **Page Title:** Kathireshan M | Senior Quality Engineer & SDET
- **Meta Description:** Portfolio of Kathireshan M — Senior Quality Engineer | SDET specializing in AI-driven test automation, test data engineering, API mocking, and cloud-connected quality engineering.
- **Open Graph Image:** No custom image; use a text-based/social preview fallback if supported by the implementation.
