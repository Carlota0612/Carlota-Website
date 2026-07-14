import { Nav } from "@/components/Nav";
import { siteContent } from "@/content/site";

export default function Home() {
  const { contact } = siteContent;

  return (
    <>
      <Nav />
      <main id="home">
        <section className="hero section" aria-labelledby="hero-heading">
          <div className="heroContent">
            <p className="eyebrow">Senior HR Business Partner · Technology & research</p>
            <h1 id="hero-heading">{siteContent.hero.heading}</h1>
            <div className="intro">
              {siteContent.hero.intro.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
            <div className="heroActions" aria-label="Primary actions">
              <a className="button primary" href="#experience">
                View Experience
              </a>
              <a className="button secondary" href="#contact">
                Contact Me
              </a>
            </div>
          </div>
          <aside className="profileCard" aria-label="Professional snapshot">
            <div className="monogram" aria-hidden="true">CO</div>
            <p className="cardLabel">People strategy for ambitious technical teams</p>
            <strong>Organisational design, strategic hiring, and scalable people practices.</strong>
          </aside>
        </section>

        <section id="about" className="section storySection" aria-labelledby="about-heading">
          <div className="sectionIntro">
            <p className="eyebrow">About me</p>
            <h2 id="about-heading">My Story</h2>
          </div>
          <div className="storyGrid">
            {siteContent.story.map((paragraph, index) => (
              <p className={index === 0 || index === 5 ? "storyLead" : undefined} key={paragraph}>
                {paragraph}
              </p>
            ))}
          </div>
        </section>

        <section className="section questionsSection" aria-labelledby="what-i-do-heading">
          <div className="sectionIntro narrow">
            <p className="eyebrow">What I do</p>
            <h2 id="what-i-do-heading">Better decisions about people, structure, and growth.</h2>
            <p>{siteContent.whatIDo.intro}</p>
          </div>
          <div className="questionGrid">
            {siteContent.whatIDo.questions.map((question) => (
              <article className="questionCard" key={question}>
                <span aria-hidden="true">?</span>
                <h3>{question}</h3>
              </article>
            ))}
          </div>
        </section>

        <section id="expertise" className="section" aria-labelledby="expertise-heading">
          <div className="sectionIntro narrow">
            <p className="eyebrow">Expertise</p>
            <h2 id="expertise-heading">Practical HR partnership for complex organisations.</h2>
          </div>
          <div className="expertiseGrid">
            {siteContent.expertise.map(([title, description]) => (
              <article className="expertiseCard" key={title}>
                <h3>{title}</h3>
                <p>{description}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="experience" className="section" aria-labelledby="experience-heading">
          <div className="sectionIntro narrow">
            <p className="eyebrow">Experience</p>
            <h2 id="experience-heading">Concise experience across technology and research environments.</h2>
          </div>
          <div className="timeline">
            {siteContent.experience.map((item) => (
              <article className="timelineItem" key={item.company}>
                <div>
                  <span className="period">{item.period}</span>
                  <h3>{item.company}</h3>
                  <p className="role">{item.role}</p>
                  <p className="location">{item.location}</p>
                </div>
                <p>{item.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="projects" className="section" aria-labelledby="projects-heading">
          <div className="sectionIntro narrow">
            <p className="eyebrow">Projects</p>
            <h2 id="projects-heading">Building with technology, not only working around it.</h2>
          </div>
          <div className="projectGrid">
            {siteContent.projects.map((project) => (
              <article className="projectCard" key={project.name}>
                <div>
                  <h3>{project.name}</h3>
                  {"subtitle" in project ? <p className="projectSubtitle">{project.subtitle}</p> : null}
                </div>
                <p>{project.description}</p>
                <a className="textLink" href={project.href} target="_blank" rel="noreferrer">
                  {project.cta}
                </a>
              </article>
            ))}
          </div>
        </section>

        <section id="education" className="section compactSection" aria-labelledby="education-heading">
          <div className="sectionIntro">
            <p className="eyebrow">Education</p>
            <h2 id="education-heading">Academic foundation.</h2>
          </div>
          <div className="educationList">
            {siteContent.education.map(([degree, school, year]) => (
              <article className="educationItem" key={degree}>
                <h3>{degree}</h3>
                <p>{school}</p>
                <span>{year}</span>
              </article>
            ))}
          </div>
        </section>

        <section className="section beyondSection" aria-labelledby="beyond-heading">
          <div className="sectionIntro narrow">
            <p className="eyebrow">Beyond work</p>
            <h2 id="beyond-heading">Energy, curiosity, and craft outside the office.</h2>
            <p>Outside work, I enjoy endurance sports, hiking in the Swiss Alps, painting, and exploring how technology can improve recruiting and people operations.</p>
          </div>
          <div className="interestGrid" aria-label="Interests">
            {siteContent.beyondWork.map((interest) => (
              <span key={interest}>{interest}</span>
            ))}
          </div>
        </section>

        <section className="section quoteSection" aria-labelledby="approach-heading">
          <p className="eyebrow" id="approach-heading">My Approach</p>
          <blockquote>{siteContent.approach}</blockquote>
        </section>

        <section id="contact" className="section contactSection" aria-labelledby="contact-heading">
          <p className="eyebrow">Contact</p>
          <h2 id="contact-heading">Let’s connect.</h2>
          <p>{contact.intro}</p>
          <address className="contactLinks">
            <a href={`mailto:${contact.email}`}>{contact.email}</a>
            <a href={contact.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
            <a href={contact.github} target="_blank" rel="noreferrer">GitHub</a>
            <span>{contact.location}</span>
          </address>
        </section>
      </main>
      <footer className="footer">
        <p>{siteContent.person} · {siteContent.currentYear}</p>
      </footer>
    </>
  );
}
