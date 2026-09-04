import {
  useEffect,
  useMemo,
  useRef,
  useState,
  type CSSProperties,
  type ReactNode,
} from 'react'
import heroVisual from './assets/hero.png'
import './App.css'
import {
  about,
  achievements,
  certifications,
  experience,
  footerContent,
  profile,
  projects,
  siteSections,
  skillGroups,
} from './data/content'
import {
  Badge,
  Button,
  Container,
  SectionHeading,
} from './components/ui/primitives'
import { useActiveSection } from './hooks/useActiveSection'
import { useScrollReveal } from './hooks/useScrollReveal'

const revealStyle = (index: number) =>
  ({ '--reveal-index': index }) as CSSProperties

function usePastHero(heroId: string) {
  const [isPastHero, setIsPastHero] = useState(false)

  useEffect(() => {
    const hero = document.getElementById(heroId)

    if (!hero) {
      return undefined
    }

    const updateFromHeroPosition = () => {
      setIsPastHero(hero.getBoundingClientRect().bottom <= 0)
    }

    updateFromHeroPosition()

    if (typeof IntersectionObserver === 'undefined') {
      let frameId = 0
      const scheduleUpdate = () => {
        if (frameId !== 0) {
          return
        }

        frameId = window.requestAnimationFrame(() => {
          frameId = 0
          updateFromHeroPosition()
        })
      }

      window.addEventListener('scroll', scheduleUpdate, { passive: true })
      window.addEventListener('resize', scheduleUpdate)

      return () => {
        window.removeEventListener('scroll', scheduleUpdate)
        window.removeEventListener('resize', scheduleUpdate)

        if (frameId !== 0) {
          window.cancelAnimationFrame(frameId)
        }
      }
    }

    const observer = new IntersectionObserver(([entry]) => {
      setIsPastHero(
        !entry.isIntersecting && hero.getBoundingClientRect().bottom <= 0,
      )
    })

    observer.observe(hero)

    return () => observer.disconnect()
  }, [heroId])

  return isPastHero
}

function RevealSection({
  children,
  className = '',
  id,
  labelledBy,
}: {
  children: ReactNode
  className?: string
  id: string
  labelledBy: string
}) {
  const { ref, isVisible } = useScrollReveal<HTMLElement>()

  return (
    <section
      className={`page-section reveal ${isVisible ? 'is-visible' : ''} ${className}`.trim()}
      id={id}
      ref={ref}
      aria-labelledby={labelledBy}
    >
      {children}
    </section>
  )
}

function SiteHeader() {
  const isPastHero = usePastHero('home')
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const menuButtonRef = useRef<HTMLButtonElement>(null)
  const sectionIds = useMemo(
    () => siteSections.map((section) => section.href.replace('#', '')),
    [],
  )
  const activeSection = useActiveSection(sectionIds)

  useEffect(() => {
    if (!isMenuOpen) {
      return undefined
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsMenuOpen(false)
        menuButtonRef.current?.focus()
      }
    }

    document.addEventListener('keydown', handleKeyDown)

    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [isMenuOpen])

  useEffect(() => {
    const wideNav = window.matchMedia('(min-width: 761px)')
    const closeMenuOnWideNav = () => {
      if (wideNav.matches) {
        setIsMenuOpen(false)
      }
    }

    closeMenuOnWideNav()
    wideNav.addEventListener('change', closeMenuOnWideNav)

    return () => wideNav.removeEventListener('change', closeMenuOnWideNav)
  }, [])

  return (
    <header
      className={`site-header${isPastHero ? ' is-solid' : ''}${isMenuOpen ? ' is-open' : ''}`}
    >
      <div className="site-header__inner">
        <a
          className="site-brand"
          href="#home"
          onClick={() => setIsMenuOpen(false)}
        >
          {profile.name}
        </a>

        <button
          className="menu-toggle"
          type="button"
          ref={menuButtonRef}
          aria-label={
            isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'
          }
          aria-controls="primary-navigation"
          aria-expanded={isMenuOpen}
          onClick={() => setIsMenuOpen((current) => !current)}
        >
          <span className="menu-toggle__line" aria-hidden="true" />
          <span className="menu-toggle__line" aria-hidden="true" />
          <span className="menu-toggle__line" aria-hidden="true" />
        </button>

        <nav
          className="primary-nav"
          id="primary-navigation"
          aria-label="Primary navigation"
        >
          {siteSections.map((section) => (
            <a
              className={`site-nav-link${
                activeSection === section.href.replace('#', '')
                  ? ' is-active'
                  : ''
              }`}
              href={section.href}
              key={section.href}
              aria-current={
                activeSection === section.href.replace('#', '')
                  ? 'page'
                  : undefined
              }
              onClick={() => setIsMenuOpen(false)}
            >
              {section.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  )
}

function HeroSection() {
  return (
    <section className="hero-section" id="home" aria-labelledby="home-heading">
      <Container className="hero-grid">
        <div className="hero-copy">
          <p className="eyebrow">Portfolio</p>
          <h1 id="home-heading">{profile.name}</h1>
          <p className="display-title">{profile.displayTitle}</p>
          <p className="tagline">{profile.shortOneLiner}</p>

          <div className="cta-row" aria-label="Primary actions">
            <Button href="#projects">Explore Projects</Button>
            <Button variant="secondary" href={profile.resumeUrl} download>
              Download Resume
            </Button>
          </div>
        </div>

        <div className="hero-visual" aria-hidden="true">
          <img
            src={heroVisual}
            alt=""
            width="343"
            height="361"
            decoding="async"
            fetchPriority="high"
          />
          <div className="orbit-card orbit-card--top">AI agents</div>
          <div className="orbit-card orbit-card--bottom">Automation</div>
        </div>

        <a
          className="scroll-cue"
          href="#about"
          aria-label="Scroll to About section"
        >
          <span>Scroll</span>
          <span aria-hidden="true">↓</span>
        </a>
      </Container>
    </section>
  )
}

function AboutSection() {
  return (
    <RevealSection
      id="about"
      labelledBy="about-heading"
      className="about-section"
    >
      <Container className="about-grid">
        <SectionHeading
          id="about-heading"
          eyebrow={about.eyebrow}
          title={about.title}
          description="Where quality engineering meets AI — turning testing challenges into smarter, faster solutions."
        />

        <div className="about-copy">
          {about.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>

        <div className="about-card" aria-label="Profile highlights">
          <div className="profile-mark" aria-hidden="true">
            KM
          </div>
          {about.stats.map((stat) => (
            <div className="stat" key={stat.label}>
              <strong>{stat.value}</strong>
              <span>{stat.label}</span>
            </div>
          ))}
        </div>
      </Container>
    </RevealSection>
  )
}

function ExperienceSection() {
  return (
    <RevealSection id="experience" labelledBy="experience-heading">
      <Container>
        <SectionHeading
          id="experience-heading"
          eyebrow="Experience"
          title="Timeline of quality engineering impact."
          description="Public-facing titles are mapped from internal resume titles as required."
        />

        <ol className="timeline">
          {experience.map((role, index) => (
            <li
              className="timeline-item"
              key={`${role.company}-${role.period}`}
              style={revealStyle(index)}
            >
              <div className="timeline-marker" aria-hidden="true">
                {String(index + 1).padStart(2, '0')}
              </div>
              <article className="timeline-card">
                <div className="timeline-card__header">
                  <div>
                    <p className="card-meta">{role.period}</p>
                    <h3>{role.displayTitle}</h3>
                  </div>
                  <p className="company-name">{role.company}</p>
                </div>
                <ul className="highlight-list">
                  {role.highlights.map((highlight) => (
                    <li key={highlight}>{highlight}</li>
                  ))}
                </ul>
              </article>
            </li>
          ))}
        </ol>
      </Container>
    </RevealSection>
  )
}

function SkillsSection() {
  return (
    <RevealSection id="skills" labelledBy="skills-heading">
      <Container>
        <SectionHeading
          id="skills-heading"
          eyebrow="Skills"
          title="Tools and practices for modern quality delivery."
          description="Grouped from the verified technical skills in the resume."
        />

        <div className="skills-grid">
          {skillGroups.map((group, groupIndex) => (
            <article
              className="skill-card"
              key={group.name}
              style={revealStyle(groupIndex)}
            >
              <h3>{group.name}</h3>
              <div className="token-pills" aria-label={`${group.name} skills`}>
                {group.skills.map((skill, skillIndex) => (
                  <Badge key={skill}>
                    <span className="badge-text" style={revealStyle(skillIndex)}>
                      {skill}
                    </span>
                  </Badge>
                ))}
              </div>
            </article>
          ))}
        </div>
      </Container>
    </RevealSection>
  )
}

function ProjectsSection() {
  return (
    <RevealSection id="projects" labelledBy="projects-heading">
      <Container>
        <SectionHeading
          id="projects-heading"
          eyebrow="Projects"
          title="Featured systems that turn testing pain points into reusable platforms."
          description="Portfolio projects and tools from the approved content and resume highlights."
        />

        <div className="project-stack">
          {projects.map((project, index) => (
            <article
              className="project-feature"
              key={project.name}
              style={revealStyle(index)}
            >
              <div className="project-visual" aria-hidden="true">
                <span>{String(index + 1).padStart(2, '0')}</span>
              </div>
              <div className="project-copy">
                <p className="card-meta">{project.builtDuring}</p>
                <h3>{project.name}</h3>
                <p>{project.summary}</p>
                {'impact' in project ? (
                  <p className="impact-note">{project.impact}</p>
                ) : null}
                <div
                  className="token-pills"
                  aria-label={`${project.name} technology`}
                >
                  {project.tech.map((tech) => (
                    <Badge key={tech}>{tech}</Badge>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </RevealSection>
  )
}

function AchievementsSection() {
  return (
    <RevealSection id="achievements" labelledBy="achievements-heading">
      <Container>
        <SectionHeading
          id="achievements-heading"
          eyebrow="Achievements"
          title="Recognition for delivery, leadership, and team culture."
          description="Includes the year-end team culture contribution and resume-backed recognition."
        />

        <div className="achievement-grid">
          {achievements.map((achievement, index) => (
            <article
              className="achievement-card"
              key={achievement.title}
              style={revealStyle(index)}
            >
              <h3>{achievement.title}</h3>
              <p>{achievement.detail}</p>
            </article>
          ))}
        </div>

        <div className="certification-card">
          <h3>Certifications</h3>
          <ul className="compact-list">
            {certifications.map((certification) => (
              <li key={certification}>{certification}</li>
            ))}
          </ul>
        </div>
      </Container>
    </RevealSection>
  )
}

function ResumeSection() {
  return (
    <RevealSection
      id="resume"
      labelledBy="resume-heading"
      className="resume-section"
    >
      <Container className="resume-panel">
        <SectionHeading
          id="resume-heading"
          eyebrow="Resume"
          title="Download the full resume for deeper project and delivery details."
          description="The public site intentionally excludes phone number and keeps only the approved contact channels visible."
        />
        <Button href={profile.resumeUrl} download>
          Download Resume PDF
        </Button>
      </Container>
    </RevealSection>
  )
}

function SiteFooter() {
  return (
    <footer
      className="site-footer"
      id="contact"
      aria-labelledby="contact-heading"
    >
      <div className="site-footer__inner">
        <div className="footer-copy">
          <p className="eyebrow">{footerContent.eyebrow}</p>
          <h2 id="contact-heading">{footerContent.heading}</h2>
          <p>{footerContent.note}</p>
          <a className="footer-email" href={`mailto:${profile.email}`}>
            {profile.email}
          </a>
        </div>

        <div className="footer-links" aria-label="Contact links">
          <a href={profile.linkedIn} target="_blank" rel="noreferrer">
            LinkedIn
          </a>
          <a href={profile.github} target="_blank" rel="noreferrer">
            GitHub
          </a>
          <a href={profile.resumeUrl} download>
            Resume
          </a>
        </div>

        <p className="copyright">
          © {new Date().getFullYear()} {profile.name}. All rights reserved.
        </p>
      </div>
    </footer>
  )
}

function App() {
  return (
    <>
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>
      <SiteHeader />

      <main id="main-content" tabIndex={-1}>
        <HeroSection />
        <AboutSection />
        <ExperienceSection />
        <SkillsSection />
        <ProjectsSection />
        <AchievementsSection />
        <ResumeSection />
      </main>

      <SiteFooter />
    </>
  )
}

export default App
