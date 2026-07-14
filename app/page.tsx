const experience = [
  {
    role: "Product-Focused Software Developer",
    company: "Placeholder Studio",
    period: "2023 — Present",
    summary:
      "Builds polished digital experiences, collaborates with cross-functional teams, and turns ideas into reliable web products.",
  },
  {
    role: "Frontend Developer",
    company: "Creative Technology Lab",
    period: "2021 — 2023",
    summary:
      "Delivered responsive interfaces, improved accessibility, and maintained reusable component systems for growing teams.",
  },
];

const projects = [
  {
    name: "Portfolio Refresh",
    description:
      "A responsive personal brand site with clear storytelling, fast performance, and a modern visual system.",
    tags: ["Next.js", "TypeScript", "CSS"],
  },
  {
    name: "Client Dashboard Concept",
    description:
      "A placeholder project showcasing data presentation, user-friendly navigation, and scalable UI patterns.",
    tags: ["React", "UX", "Analytics"],
  },
  {
    name: "Community Landing Page",
    description:
      "A clean landing page concept designed to promote events, highlight resources, and drive contact inquiries.",
    tags: ["Responsive", "Design", "Content"],
  },
];

const navItems = ["About", "Experience", "Projects", "Contact"];

export default function Home() {
  return (
    <main>
      <nav className="nav" aria-label="Main navigation">
        <a className="brand" href="#home" aria-label="Carlota home">
          Carlota
        </a>
        <div className="navLinks">
          {navItems.map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`}>
              {item}
            </a>
          ))}
        </div>
      </nav>

      <section id="home" className="hero section">
        <div className="heroContent">
          <p className="eyebrow">Available for thoughtful web projects</p>
          <h1>Carlota</h1>
          <h2>Frontend Developer & Digital Product Builder</h2>
          <p className="intro">
            I create elegant, responsive web experiences that combine clear strategy, accessible design, and reliable engineering. This site uses placeholder content and is ready to personalize with your real story.
          </p>
          <div className="heroActions">
            <a className="button primary" href="#projects">
              View projects
            </a>
            <a className="button secondary" href="#contact">
              Get in touch
            </a>
          </div>
        </div>
        <div className="profileCard" aria-label="Professional snapshot">
          <div className="avatar">C</div>
          <p className="cardLabel">Professional focus</p>
          <strong>Human-centered web products</strong>
          <span>Design systems · Responsive UI · Performance</span>
        </div>
      </section>

      <section id="about" className="section splitSection">
        <div>
          <p className="eyebrow">About me</p>
          <h2>Building calm, useful technology with a refined visual touch.</h2>
        </div>
        <p>
          I am a creative technology professional with a passion for crafting websites that feel intuitive, polished, and easy to maintain. My background blends product thinking, modern frontend development, and collaborative problem-solving. Replace this paragraph with your biography, values, and the kinds of work you want to attract.
        </p>
      </section>

      <section id="experience" className="section">
        <p className="eyebrow">Professional experience</p>
        <h2>Experience that connects design, code, and outcomes.</h2>
        <div className="timeline">
          {experience.map((item) => (
            <article className="timelineItem" key={`${item.role}-${item.company}`}>
              <div>
                <span>{item.period}</span>
                <h3>{item.role}</h3>
                <p className="company">{item.company}</p>
              </div>
              <p>{item.summary}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="projects" className="section">
        <p className="eyebrow">Projects</p>
        <h2>Selected work and concepts.</h2>
        <div className="projectGrid">
          {projects.map((project) => (
            <article className="projectCard" key={project.name}>
              <h3>{project.name}</h3>
              <p>{project.description}</p>
              <div className="tags">
                {project.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="contact" className="section contactSection">
        <p className="eyebrow">Contact</p>
        <h2>Let&apos;s create something memorable.</h2>
        <p>
          For collaborations, opportunities, or questions, reach out using the placeholder contact details below and replace them with your preferred channels.
        </p>
        <div className="contactLinks">
          <a href="mailto:hello@example.com">hello@example.com</a>
          <a href="https://www.linkedin.com" target="_blank" rel="noreferrer">
            LinkedIn
          </a>
          <a href="https://github.com" target="_blank" rel="noreferrer">
            GitHub
          </a>
        </div>
      </section>
    </main>
  );
}
