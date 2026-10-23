import { useState } from 'react'
import './App.css'

const navigation = [
  { label: 'Pathway', href: '#pathway' },
  { label: 'Skills', href: '#skills' },
  { label: 'Roles', href: '#roles' },
  { label: 'Tools', href: '#tools' },
  { label: 'About', href: '#about' },
]

const careerLevels = [
  {
    number: '01',
    level: 'START HERE',
    title: 'IT Support Technician',
    experience: '0–2 years · Entry-level',
    description:
      'Build a strong technical foundation by helping people solve everyday hardware, software, and access problems.',
    responsibilities: [
      'Troubleshoot devices, applications, and connectivity',
      'Set up accounts, workstations, and peripherals',
      'Document requests and solutions in a ticketing system',
    ],
    skills: ['Customer service', 'Windows / macOS', 'Troubleshooting'],
    icon: '01',
  },
  {
    number: '02',
    level: 'GROW YOUR SCOPE',
    title: 'Junior System Administrator',
    experience: '2–4 years · Intermediate',
    description:
      'Move from individual support to maintaining the systems, accounts, and services an organization depends on.',
    responsibilities: [
      'Manage user accounts, permissions, and directory services',
      'Monitor servers, backups, and routine maintenance',
      'Assist with patching, deployments, and incident response',
    ],
    skills: ['Linux / Windows Server', 'Networking', 'PowerShell / Bash'],
    icon: '02',
  },
  {
    number: '03',
    level: 'OWN THE SYSTEMS',
    title: 'System Administrator',
    experience: '4–7 years · Intermediate',
    description:
      'Take ownership of reliable, secure infrastructure across on-premises, cloud, and hybrid environments.',
    responsibilities: [
      'Design and maintain server and cloud environments',
      'Automate recurring tasks and improve service reliability',
      'Plan recovery, security controls, and capacity',
    ],
    skills: ['Automation', 'Cloud platforms', 'Security'],
    icon: '03',
  },
  {
    number: '04',
    level: 'LEAD & DESIGN',
    title: 'Systems Engineer / IT Infrastructure Manager',
    experience: '7+ years · Advanced',
    description:
      'Shape the long-term direction of infrastructure and guide teams through complex technical change.',
    responsibilities: [
      'Architect scalable, resilient infrastructure solutions',
      'Lead technical projects, standards, and service strategy',
      'Mentor teammates and communicate risk to stakeholders',
    ],
    skills: ['Systems architecture', 'Leadership', 'Strategic planning'],
    icon: '04',
  },
]

const skills = [
  {
    number: '01',
    title: 'Operating systems',
    description:
      'Administer Windows and Linux, manage users and services, and understand logs, permissions, and updates.',
    tag: 'FOUNDATION',
  },
  {
    number: '02',
    title: 'Networking',
    description:
      'Know how IP addressing, DNS, DHCP, routing, and firewalls work so you can find where a connection breaks.',
    tag: 'CONNECTIVITY',
  },
  {
    number: '03',
    title: 'Troubleshooting',
    description:
      'Use a calm, repeatable process to isolate root causes, test fixes, and clearly document what you learn.',
    tag: 'EVERYDAY PRACTICE',
  },
  {
    number: '04',
    title: 'Security fundamentals',
    description:
      'Apply least privilege, patch systems, protect credentials, and recognize common security risks.',
    tag: 'SAFE OPERATIONS',
  },
  {
    number: '05',
    title: 'Scripting & automation',
    description:
      'Use PowerShell or Bash to reduce repetitive work, standardize tasks, and prevent avoidable mistakes.',
    tag: 'WORK SMARTER',
  },
  {
    number: '06',
    title: 'Communication',
    description:
      'Explain technical issues in plain language and keep users and teammates informed during incidents.',
    tag: 'TEAM IMPACT',
  },
]

const roles = [
  {
    title: 'IT Support Technician',
    focus: 'PEOPLE & ENDPOINTS',
    description:
      'Works closest to end users, resolving workstation, account, application, and connectivity issues.',
    outcome: 'Keeps people productive and problems well documented.',
  },
  {
    title: 'System Administrator',
    focus: 'SERVERS & SERVICES',
    description:
      'Maintains the shared infrastructure behind day-to-day work: servers, identity, storage, and backups.',
    outcome: 'Keeps core systems secure, available, and up to date.',
  },
  {
    title: 'Systems Engineer',
    focus: 'DESIGN & AUTOMATION',
    description:
      'Builds and improves infrastructure, connecting platforms and automating how services are delivered.',
    outcome: 'Makes systems more scalable, repeatable, and resilient.',
  },
]

const tools = [
  {
    category: 'OPERATING SYSTEMS',
    name: 'Windows Server & Linux',
    description: 'Practice managing services, users, permissions, and system logs.',
    mark: 'OS',
  },
  {
    category: 'IDENTITY',
    name: 'Active Directory',
    description: 'Learn centralized identity, group policy, and access management.',
    mark: 'ID',
  },
  {
    category: 'AUTOMATION',
    name: 'PowerShell & Bash',
    description: 'Script repeatable admin tasks and turn manual steps into workflows.',
    mark: '</>',
  },
  {
    category: 'CLOUD',
    name: 'Microsoft Azure or AWS',
    description: 'Explore virtual machines, cloud networking, storage, and monitoring.',
    mark: '☁',
  },
]

function ArrowIcon() {
  return (
    <svg viewBox="0 0 20 20" aria-hidden="true">
      <path d="M4 10h11M10 5l5 5-5 5" />
    </svg>
  )
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false)

  const closeMenu = () => setMenuOpen(false)

  return (
    <>
      <header className="site-header">
        <a className="brand" href="#home" onClick={closeMenu} aria-label="Career Pathways home">
          <span className="brand-mark">CP</span>
          <span>CAREER PATHWAYS</span>
        </a>
        <button
          className="menu-toggle"
          type="button"
          aria-expanded={menuOpen}
          aria-controls="main-navigation"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span className="menu-toggle-label">{menuOpen ? 'Close' : 'Menu'}</span>
          <span className={`menu-icon ${menuOpen ? 'is-open' : ''}`} aria-hidden="true">
            <i />
            <i />
          </span>
        </button>
        <nav
          className={`main-navigation ${menuOpen ? 'is-open' : ''}`}
          id="main-navigation"
          aria-label="Main navigation"
        >
          {navigation.map((item) => (
            <a key={item.href} href={item.href} onClick={closeMenu}>
              {item.label}
            </a>
          ))}
          <a className="nav-cta" href="#about" onClick={closeMenu}>
            Meet the developer <ArrowIcon />
          </a>
        </nav>
      </header>

      <main>
        <section className="hero section-wrap" id="home">
          <div className="hero-copy">
            <p className="eyebrow"><span /> A FIELD GUIDE TO IT CAREERS</p>
            <h1>
              Build systems.
              <br />
              <span>Build your future.</span>
            </h1>
            <p className="hero-description">
              A practical guide to growing a career in system administration—from your first
              support ticket to designing the infrastructure that keeps a business moving.
            </p>
            <div className="hero-actions">
              <a className="button button-dark" href="#pathway">
                Explore the pathway <ArrowIcon />
              </a>
              <a className="text-link" href="#skills">
                Skills to get started <span>↘</span>
              </a>
            </div>
            <div className="hero-proof">
              <span className="proof-line" />
              <p><strong>4 career stages</strong><span> · </span>One step at a time</p>
            </div>
          </div>

          <div className="hero-visual" aria-label="Illustration of connected system infrastructure" role="img">
            <div className="visual-grid" />
            <div className="visual-orbit orbit-one" />
            <div className="visual-orbit orbit-two" />
            <div className="server server-back">
              <span /><span /><span />
            </div>
            <div className="server server-front">
              <span /><span /><span />
              <div className="server-label">SYSTEMS ONLINE</div>
            </div>
            <div className="floating-chip chip-top"><span className="chip-dot" /> 99.98% uptime</div>
            <div className="floating-chip chip-bottom"><span className="chip-icon">⌘</span> Infrastructure / 01</div>
            <div className="visual-caption">THE WORK BEHIND<br />EVERYTHING WORKING.</div>
          </div>
          <a className="scroll-note" href="#pathway"><span /> SCROLL TO EXPLORE</a>
        </section>

        <section className="pathway-section section-pad" id="pathway">
          <div className="section-wrap">
            <div className="section-heading pathway-heading">
              <div>
                <p className="eyebrow"><span /> THE CAREER MAP</p>
                <h2>Every expert<br />started <em>somewhere.</em></h2>
              </div>
              <p className="section-intro">
                Career paths aren’t always perfectly linear. Use these stages as a map—not a
                stopwatch—and build experience as your responsibilities grow.
              </p>
            </div>

            <div className="pathway-list">
              {careerLevels.map((career, index) => (
                <article className="career-card" key={career.number}>
                  <div className="career-index">
                    <span>{career.number}</span>
                    {index < careerLevels.length - 1 && <i aria-hidden="true" />}
                  </div>
                  <div className="career-main">
                    <div className="career-topline">
                      <span className="career-level">{career.level}</span>
                      <span className="career-time">{career.experience}</span>
                    </div>
                    <h3>{career.title}</h3>
                    <p className="career-description">{career.description}</p>
                    <div className="career-detail-grid">
                      <div>
                        <h4>WHAT YOU’LL DO</h4>
                        <ul>
                          {career.responsibilities.map((responsibility) => (
                            <li key={responsibility}><span>↗</span>{responsibility}</li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4>SKILLS TO BUILD</h4>
                        <div className="tag-list">
                          {career.skills.map((skill) => <span className="tag" key={skill}>{skill}</span>)}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="career-badge" aria-hidden="true">{career.icon}</div>
                </article>
              ))}
            </div>
            <p className="pathway-footnote">
              <span>↗</span> Certifications, hands-on labs, and real-world projects can help you
              grow at every stage.
            </p>
          </div>
        </section>

        <section className="skills-section section-pad" id="skills">
          <div className="section-wrap">
            <div className="section-heading skills-heading">
              <div>
                <p className="eyebrow"><span /> YOUR TECHNICAL TOOLKIT</p>
                <h2>Skills that keep<br />you <em>one step ahead.</em></h2>
              </div>
              <p className="section-intro">
                Great administrators combine technical know-how with a thoughtful, service-first
                approach. Start with the fundamentals, then keep learning.
              </p>
            </div>
            <div className="skills-grid">
              {skills.map((skill) => (
                <article className="skill-card" key={skill.number}>
                  <div className="skill-card-top"><span>{skill.number}</span><span>{skill.tag}</span></div>
                  <h3>{skill.title}</h3>
                  <p>{skill.description}</p>
                  <span className="skill-rule" />
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="roles-section section-pad" id="roles">
          <div className="section-wrap">
            <div className="roles-heading">
              <div>
                <p className="eyebrow"><span /> FIND YOUR FOCUS</p>
                <h2>Different roles.<br /><em>Shared purpose.</em></h2>
              </div>
              <p className="section-intro">
                These roles work together to keep technology useful and dependable. The focus
                shifts from helping individual users to operating and engineering shared systems.
              </p>
            </div>
            <div className="roles-table">
              <div className="roles-table-head">
                <span>ROLE</span><span>PRIMARY FOCUS</span><span>THE DIFFERENCE</span><span>IMPACT</span>
              </div>
              {roles.map((role, index) => (
                <article className="role-row" key={role.title}>
                  <div className="role-title"><span>0{index + 1}</span><h3>{role.title}</h3></div>
                  <span className="role-focus">{role.focus}</span>
                  <p>{role.description}</p>
                  <p className="role-outcome">{role.outcome}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="tools-section section-pad" id="tools">
          <div className="section-wrap tools-layout">
            <div className="tools-copy">
              <p className="eyebrow"><span /> LEARN BY DOING</p>
              <h2>Get comfortable<br />with the <em>real tools.</em></h2>
              <p className="section-intro">
                You don’t need access to an enterprise data center to start. A home lab and
                curiosity are enough to begin exploring.
              </p>
              <a className="button button-outline" href="#about">
                Start your journey <ArrowIcon />
              </a>
            </div>
            <div className="tools-grid">
              {tools.map((tool) => (
                <article className="tool-card" key={tool.name}>
                  <div className="tool-card-head">
                    <span className="tool-mark">{tool.mark}</span>
                    <span>{tool.category}</span>
                  </div>
                  <h3>{tool.name}</h3>
                  <p>{tool.description}</p>
                  <span className="tool-arrow" aria-hidden="true">↗</span>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="about-section section-pad" id="about">
          <div className="section-wrap about-card">
            <div className="about-monogram" aria-hidden="true">
              <span>MAJ</span>
              <i className="monogram-orbit orbit-a" />
              <i className="monogram-orbit orbit-b" />
              <small>IT · SYSTEMS · PEOPLE</small>
            </div>
            <div className="about-copy">
              <p className="eyebrow"><span /> THE PERSON BEHIND THE PATH</p>
              <h2>Hi, I’m <em>Malayo Armando Jr.</em></h2>
              <p className="about-lead">
                I’m an Information Technology student curious about what makes the digital world
                work—and how to make it work better for everyone.
              </p>
              <div className="about-details">
                <div><span>MY PROGRAM</span><strong>Information Technology</strong></div>
                <div><span>MY CAREER PATH</span><strong>System Administration</strong></div>
                <div><span>MY GOAL</span><strong>Build secure, reliable systems</strong></div>
              </div>
              <p className="about-note">
                My goal is to keep learning, grow into an infrastructure professional, and help
                organizations use technology with confidence.
              </p>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <a className="brand footer-brand" href="#home">
          <span className="brand-mark">CP</span><span>CAREER PATHWAYS</span>
        </a>
        <p>A field guide to a career in system administration.</p>
        <a href="#home" className="back-to-top">BACK TO TOP ↑</a>
        <span className="footer-credit">© 2026 · STUART MALAYO</span>
      </footer>
    </>
  )
}

export default App
