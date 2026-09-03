export const profile = {
  name: 'Kathireshan M',
  displayTitle: 'Senior Quality Engineer | SDET',
  shortOneLiner:
    'Building AI-assisted quality engineering tools, resilient automation frameworks, and faster paths to reliable releases.',
  email: 'kathireshan258@gmail.com',
  linkedIn: 'https://www.linkedin.com/in/kathireshan-manoharan-18599a192',
  github: 'https://github.com/kathireshan258',
  resumeUrl: '/resume.pdf',
} as const

export const siteSections = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Achievements', href: '#achievements' },
  { label: 'Resume', href: '#resume' },
  { label: 'Contact', href: '#contact' },
] as const

export const about = {
  eyebrow: 'About',
  title: 'Automation-first quality engineer building practical AI systems.',
  paragraphs: [
    "I'm Kathireshan M, a Senior Quality Engineer | SDET who builds AI-assisted testing tools and automation platforms that help teams ship reliable software faster.",
    'My work spans GenAI-powered test case generation, schema-driven test data automation, production-grade API mocking, Salesforce and MuleSoft integrations, and CI/CD-driven automation across cloud platforms.',
    'I focus on dependable delivery under tight deadlines, strong collaboration with business and technical teams, and reusable systems that reduce manual effort for QA teams.',
  ],
  stats: [
    { value: '4+', label: 'Years in automation testing' },
    { value: '95%', label: 'Cross-browser and device test coverage delivered' },
    { value: '10+', label: 'Testers mentored and supported' },
  ],
} as const

export const experience = [
  {
    displayTitle: 'Senior Quality Engineer | SDET',
    internalTitle: 'Associate',
    company: 'Cognizant Technology Solutions Pvt. Ltd.',
    period: 'October 2025 – Present',
    highlights: [
      'Architected a cross-platform GitHub Copilot ecosystem across web, extension, and CLI interfaces using specialized configurations and custom MCP servers.',
      'Built a production-grade standalone API Mocking Tool with Node.js and Express.js, enabling dynamic edge-case responses for critical UI release cycles.',
      'Designed an autonomous AI mesh architecture for LLMs with stateful context feedback loops to refine skills per application feature.',
      'Evolved a legacy framework into a production-ready Node.js and Express.js mock data tool that parses active XSD schemas and reduced manual update workloads by 80%.',
      'Built an AI Test Case Creation Agent on the GitHub Copilot SDK with custom MCP integrations into Azure DevOps and GitHub Projects, adding guardrails, human-in-the-loop approvals, and a risk-based review ratio for transparent, secure automation.',
      'Created a custom BDD test automation agent using skills and agent configuration files, capable of generating, modifying, and debugging Cucumber automation code, cutting down manual rework on AI-generated scripts.',
      'Planned and led the migration of Salesforce Cucumber BDD automation from Serenity (Java) to WebdriverIO (JavaScript), building the framework from proof of concept and guiding a 15-member team through the transition.',
      'Led the end-to-end migration of customer authentication from Spring Boot and AWS Cognito to Microsoft Entra across the digital web and mobile applications.',
    ],
  },
  {
    displayTitle: 'Quality Engineer',
    internalTitle: 'Programmer Analyst',
    company: 'Cognizant Technology Solutions Pvt. Ltd.',
    period: 'Nov 2020 – October 2025',
    highlights: [
      'Designed and implemented scalable automation frameworks using BrowserStack, AWS, Azure Pipelines, Selenium with Java, and Maven.',
      'Planned and led the migration of the Serenity (Java) Cucumber BDD digital portal automation to a Cypress (JavaScript) Cucumber BDD framework — built from proof of concept and guided a 4-member team through migrating 1,400 automation scripts, improving execution speed by 60% and reducing maintenance effort by 40%.',
      'Led SAP to Salesforce migration quality efforts, including full user, billing, payment, meter, and industry data migration to a custom energy CRM, delivering near error-free releases across AWS and Salesforce modules.',
      'Led an 8-member QA team as Application Lead for an AWS digital customer web portal, running in-sprint automation with 80% coverage and pass rate across twice-weekly releases while maintaining zero production bugs.',
      'Built scheduled nightly smoke-test and UAT/staging auto-trigger regression pipelines, publishing results to GitHub Pages and emailing stakeholders coverage and pass-rate reports.',
      'Created production synthetic monitoring in DataDog and a real-time multi-device test pipeline that matched the top production browsers/devices to BrowserStack for continuous cross-device coverage.',
      'Owned QA process audits, DSR/MSR reporting, automation metrics, and bug-triage communication with developers and stakeholders to keep delivery quality visible and on track.',
      'Created an XML test data creation tool (Serenity Cucumber Java, later migrated to Express.js) that cut test data creation time from 30 minutes to 5 minutes, plus a companion JSON test data creation tool.',
      'Automated repetitive manual processes, saving over 120 hours per release cycle and increasing team efficiency by 25%.',
      'Conducted API testing with Postman and REST Assured and implemented CI/CD solutions through Azure DevOps.',
    ],
  },
] as const

export const skillGroups = [
  {
    name: 'AI / GenAI Tooling',
    skills: [
      'GitHub Copilot Extensibility',
      'Model Context Protocol (MCP)',
      'Multi-Agent Mesh Systems',
      'State Retention Loops',
      'Prompt Engineering',
      'Claude (Anthropic)',
      'Autonomous Subagents',
    ],
  },
  {
    name: 'Test Automation & QE',
    skills: [
      'Selenium',
      'Cypress',
      'Playwright',
      'REST Assured',
      'Postman',
      'BrowserStack',
      'Cucumber',
      'TestNG',
      'UI Automation',
      'API Automation',
      'Functional Testing',
      'Regression Testing',
      'Integration Testing',
      'Cross-Browser Testing',
      'Cross-Device Testing',
    ],
  },
  {
    name: 'Cloud, CI/CD & Platforms',
    skills: [
      'Amazon Web Services (AWS)',
      'Microsoft Azure',
      'Azure DevOps Pipelines',
      'GitHub Actions',
      'Maven',
      'Git',
      'Salesforce',
      'MuleSoft',
      'Vlocity',
      'Micro Services',
      'Agile',
      'Scrum',
    ],
  },
  {
    name: 'Languages, Frameworks & Tools',
    skills: [
      'Java',
      'JavaScript',
      'Node.js',
      'Express.js',
      'React',
      'Angular',
      'Serenity',
      'WebdriverIO (WDIO)',
      'Azure DevOps',
      'Trello',
      'GitHub Project Board',
      'ServiceNow',
      'DataDog',
      'JIRA',
    ],
  },
] as const

export const projects = [
  {
    name: 'Test Case AI Agent',
    builtDuring: 'Senior Quality Engineer | SDET role',
    summary:
      'An AI agent built using the GitHub Copilot SDK that assists in generating and maintaining test cases, reducing manual authoring effort and improving coverage consistency.',
    tech: ['GitHub Copilot SDK', 'Prompt Engineering', 'AI Test Case Generation'],
  },
  {
    name: 'Dynamic Run-Time Schema Based Test Data Creation Tool',
    builtDuring: 'Quality Engineer role',
    summary:
      'A schema-driven test data tool that resolves schemas at run time, runs in Azure Pipeline workflows, integrates with AWS, and helps reduce manual test data preparation.',
    tech: ['Azure Pipelines', 'AWS', 'XSD Schemas', 'Node.js', 'Express.js'],
    impact: 'Reduced manual update workloads by 80% through active schema parsing.',
  },
  {
    name: 'Mock Server Tool',
    builtDuring: 'Quality Engineer role',
    summary:
      'A custom mock server enabling advanced response mocking with configurable status codes, bodies, cookies, full response objects, JavaScript scripting, and pattern-matched API paths.',
    tech: ['Node.js', 'Express.js', 'JavaScript', 'API Mocking'],
    impact: 'Enabled dynamic edge-case responses for critical UI release cycles.',
  },
  {
    name: 'AI Mesh Architecture',
    builtDuring: 'Senior Quality Engineer | SDET role',
    summary:
      'A stateful feedback-loop architecture where AI agents record self-notes on what worked and what did not, then use that running knowledge base to refine their own process, steps, and output quality over time.',
    tech: ['LLM Agents', 'State Retention Loops', 'Prompt Engineering'],
    impact: 'Reduced prompt iterations and token consumption through continuous self-evaluation.',
  },
  {
    name: 'Custom BDD Test Automation Agent',
    builtDuring: 'Senior Quality Engineer | SDET role',
    summary:
      'A custom AI agent configured with agent and skills files and project-specific hooks to generate, modify, and debug Cucumber BDD test automation code.',
    tech: ['GitHub Copilot', 'Agent Skills', 'Cucumber BDD'],
    impact: 'Improved AI-generated automation accuracy and cut manual rework by the QA team.',
  },
] as const

export const achievements = [
  {
    title: 'Year-End Event Organizer',
    detail:
      'Planned and conducted year-end events for the entire onshore and offshore team, producing highlight decks and videos showcasing delivery leads on key changes, achievements, and KPIs.',
  },
  {
    title: 'Best Team Player of the Year — 2024',
    detail:
      'Recognized for exceptional performance, adaptability, and consistent contribution to successful project deliveries.',
  },
  {
    title: 'Best Performer of the Month — 2024',
    detail:
      'Awarded for effectively leading the end-to-end SAP to Salesforce migration project and ensuring seamless quality output.',
  },
  {
    title: 'Leadership Excellence Award — 2025',
    detail:
      'Honoured for fostering a collaborative, high-performance work environment and driving team success through mentorship and guidance.',
  },
  {
    title: 'KM Portal Implementation Recognition — 2023',
    detail:
      'Acknowledged for independently setting up the Knowledge Management Portal for the Centrica QE team.',
  },
] as const

export const certifications = [
  'Anthropic - Claude Certified Architect (Foundations)',
  'Advanced Track: Model Context Protocol Advanced Topics, Introduction to Subagents, Introduction to Agent Skills',
  'Cloud Implementations: Claude with Google Cloud Vertex AI, Claude in Amazon Bedrock',
  'Workflow Toolkits: Claude Code in Action, Building with Claude API, Introduction to Claude CoWork',
  'DataDog Foundation',
  'Introduction to Observability',
  'ASP.NET with C# Development Certification (ISO Certified, HP) — completed during internship',
] as const

export const footerContent = {
  eyebrow: 'Contact',
  heading: "Let's build reliable software together.",
  note: 'Open to conversations about quality engineering, automation strategy, and AI-assisted testing systems.',
} as const
