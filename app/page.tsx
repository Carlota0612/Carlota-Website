import type { CSSProperties } from "react";
import { Nav } from "@/components/Nav";
import { VisualEditing } from "@/components/VisualEditing";
import { siteContent, type SectionId, type SiteSettings } from "@/content/site";
import { hasSanityConfig } from "@/sanity/env";
import { sanityFetch } from "@/sanity/lib/live";
import { siteSettingsQuery } from "@/sanity/lib/queries";

export const revalidate = 60;

type SectionConfig = SiteSettings["sections"][number];

async function getSiteSettings(): Promise<SiteSettings> {
  if (!hasSanityConfig) return siteContent;
  try {
    const { data } = await sanityFetch({ query: siteSettingsQuery, tags: ["siteSettings"] });
    return data ? ({ ...siteContent, ...data } as SiteSettings) : siteContent;
  } catch (error) {
    console.error("Sanity unavailable; using local fallback content.", error);
    return siteContent;
  }
}

function styleVars(theme: SiteSettings["themeSettings"]) {
  return {
    "--accent": theme.primaryAccent,
    "--accent-dark": theme.darkAccent,
    "--accent-soft": theme.lightAccentBackground,
    "--background": theme.pageBackground,
    "--foreground": theme.mainText,
  } as CSSProperties;
}

export default async function Home() {
  const content = await getSiteSettings();
  const sections = [...content.sections].filter((section) => section.visible).sort((a, b) => a.order - b.order);

  const renderSection = (section: SectionConfig) => {
    switch (section.sectionId as SectionId) {
      case "about": return <section id="about" className="section storySection" aria-labelledby="about-heading" key="about"><div className="sectionIntro"><p className="eyebrow">About me</p><h2 id="about-heading">{content.about.title}</h2><p>{content.about.introduction}</p></div><div className="storyGrid">{content.about.paragraphs.map((p, i) => <p className={i === 0 || i === 5 ? "storyLead" : undefined} key={p}>{p}</p>)}</div></section>;
      case "what-i-do": return <section id="what-i-do" className="section questionsSection" aria-labelledby="what-i-do-heading" key="what-i-do"><div className="sectionIntro narrow"><p className="eyebrow">What I do</p><h2 id="what-i-do-heading">{content.whatIDo.title}</h2><p>{content.whatIDo.intro}</p></div><div className="questionGrid">{content.whatIDo.questions.map((q) => <article className="questionCard" key={q}><span aria-hidden="true">?</span><h3>{q}</h3></article>)}</div></section>;
      case "expertise": return <section id="expertise" className="section" aria-labelledby="expertise-heading" key="expertise"><div className="sectionIntro narrow"><p className="eyebrow">Expertise</p><h2 id="expertise-heading">Practical HR partnership for complex organisations.</h2></div><div className="expertiseGrid">{content.expertise.map((item) => <article className="expertiseCard" key={item.title}><span className="iconMark">{item.icon?.slice(0,1)?.toUpperCase() || "•"}</span><h3>{item.title}</h3><p>{item.description}</p></article>)}</div></section>;
      case "experience": return <section id="experience" className="section" aria-labelledby="experience-heading" key="experience"><div className="sectionIntro narrow"><p className="eyebrow">Experience</p><h2 id="experience-heading">Concise experience across technology and research environments.</h2></div><div className="timeline">{content.experience.filter((i) => i.visible).map((item) => <article className="timelineItem" key={item.company}><div><span className="period">{item.startYear} – {item.endYear}</span><h3>{item.company}</h3><p className="role">{item.role}</p><p className="location">{item.location}</p></div><p>{item.description}</p></article>)}</div></section>;
      case "projects": return <section id="projects" className="section" aria-labelledby="projects-heading" key="projects"><div className="sectionIntro narrow"><p className="eyebrow">Projects</p><h2 id="projects-heading">Building with technology, not only working around it.</h2></div><div className="projectGrid">{content.projects.filter((p) => p.visible).map((project) => <article className="projectCard" key={project.name}><div><span className="period">{project.status}</span><h3>{project.name}</h3><p className="projectSubtitle">{project.subtitle}</p></div><p>{project.description}</p><a className="textLink" href={project.githubUrl || project.url} target="_blank" rel="noreferrer">View project</a></article>)}</div></section>;
      case "education": return <section id="education" className="section compactSection" aria-labelledby="education-heading" key="education"><div className="sectionIntro"><p className="eyebrow">Education</p><h2 id="education-heading">Academic foundation.</h2></div><div className="educationList">{content.education.filter((e) => e.visible).map((item) => <article className="educationItem" key={item.qualification}><h3>{item.qualification}</h3><p>{item.institution}</p><span>{item.year}</span></article>)}</div></section>;
      case "beyond-work": return <section id="beyond-work" className="section beyondSection" aria-labelledby="beyond-heading" key="beyond"><div className="sectionIntro narrow"><p className="eyebrow">Beyond work</p><h2 id="beyond-heading">{content.beyondWork.title}</h2><p>{content.beyondWork.intro}</p></div><div className="interestGrid" aria-label="Interests">{content.beyondWork.interests.map((i) => <span key={i}>{i}</span>)}</div></section>;
      case "quote": return content.quote.visible ? <section id="quote" className="section quoteSection" aria-labelledby="approach-heading" key="quote"><p className="eyebrow" id="approach-heading">My Approach</p><blockquote>{content.quote.text}</blockquote></section> : null;
      case "contact": return <section id="contact" className="section contactSection" aria-labelledby="contact-heading" key="contact"><p className="eyebrow">Contact</p><h2 id="contact-heading">{content.contact.heading}</h2><p>{content.contact.intro}</p><address className="contactLinks"><a href={`mailto:${content.contact.email}`}>{content.contact.email}</a><a href={content.contact.linkedin} target="_blank" rel="noreferrer">LinkedIn</a><a href={content.contact.github} target="_blank" rel="noreferrer">GitHub</a><span>{content.contact.location}</span></address></section>;
    }
  };

  return <div style={styleVars(content.themeSettings)} className={`theme-${content.themeSettings.backgroundStyle} hero-${content.themeSettings.heroSize} headings-${content.themeSettings.headingStyle} cards-${content.themeSettings.cardStyle} corners-${content.themeSettings.cornerStyle}`}><Nav name={content.identity.name} items={content.sections} /><main id="home"><section className="hero section" aria-labelledby="hero-heading"><div className="heroContent"><p className="heroEyebrow">{content.hero.eyebrow}</p><p className="positioning">{content.identity.professionalSubtitle}</p><h1 id="hero-heading">{content.hero.heading}</h1><div className="intro">{content.hero.intro.map((p) => <p key={p}>{p}</p>)}</div><div className="heroActions" aria-label="Primary actions"><a className="button primary" href={content.hero.primaryButtonDestination}>{content.hero.primaryButtonLabel}</a><a className="button secondary" href={content.hero.secondaryButtonDestination}>{content.hero.secondaryButtonLabel}</a></div></div><aside className="profileCard" aria-label="Professional snapshot"><div className="monogram" aria-hidden="true">CO</div><p className="cardLabel">People strategy for ambitious technical teams</p><strong>Organisational design, strategic hiring, and scalable people practices.</strong></aside></section>{sections.map(renderSection)}</main><footer className="footer"><p>{content.identity.name} · {new Date().getFullYear()}</p></footer><VisualEditing /></div>;
}
