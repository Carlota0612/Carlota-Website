export type SectionId = "about" | "what-i-do" | "expertise" | "experience" | "projects" | "education" | "beyond-work" | "quote" | "contact";

export const defaultSections = [
  { sectionId: "about", navLabel: "About", visible: true, order: 10 },
  { sectionId: "what-i-do", navLabel: "What I Do", visible: true, order: 20 },
  { sectionId: "expertise", navLabel: "Expertise", visible: true, order: 30 },
  { sectionId: "experience", navLabel: "Experience", visible: true, order: 40 },
  { sectionId: "projects", navLabel: "Projects", visible: true, order: 50 },
  { sectionId: "education", navLabel: "Education", visible: true, order: 60 },
  { sectionId: "beyond-work", navLabel: "Beyond Work", visible: true, order: 70 },
  { sectionId: "quote", navLabel: "Approach", visible: true, order: 80 },
  { sectionId: "contact", navLabel: "Contact", visible: true, order: 90 },
] satisfies Array<{ sectionId: SectionId; navLabel: string; visible: boolean; order: number }>;

export const siteContent = {
  _id: "siteSettings",
  _type: "siteSettings",
  identity: {
    name: "Carlota Ortiz",
    professionalTitle: "Senior HR Business Partner",
    professionalSubtitle: "Technology · Research · Organisational Growth",
    location: "Lausanne, Switzerland",
    email: "carlota.mortiz@gmail.com",
    linkedinUrl: "https://linkedin.com/in/carlota-o-336058a8",
    githubUrl: "https://github.com/Carlota0612",
  },
  hero: {
    eyebrow: "Senior HR Business Partner",
    heading: "Building the teams behind breakthrough technology.",
    intro: [
      "I’m Carlota Ortiz, a Senior HR Business Partner focused on helping technology and research organisations grow through people strategy, organisational design, and strategic hiring.",
      "Over the last decade, I have worked with international companies at different stages of growth, partnering with leaders to build strong teams and scalable organisations.",
    ],
    primaryButtonLabel: "View Experience",
    primaryButtonDestination: "#experience",
    secondaryButtonLabel: "Contact Me",
    secondaryButtonDestination: "#contact",
  },
  about: {
    title: "My Story",
    introduction: "A people strategy career shaped by curiosity, growth, and technical teams.",
    paragraphs: [
      "I did not begin my career with a fixed plan to work in HR.",
      "What has always interested me is understanding how organisations work, why some teams achieve exceptional results, and what allows people to perform at their best.",
      "My career began in Talent Acquisition, where I learned that hiring is not simply about filling vacancies. It is about understanding what a business needs, identifying people who can make a meaningful contribution, and creating the conditions for them to succeed.",
      "I joined Nordcloud during a period of rapid growth, working closely with technical and business leaders as the company expanded internationally.",
      "Over time, I became increasingly interested in the broader questions behind hiring: how teams should be structured, which capabilities a business needs, how organisations can scale sustainably, and how people strategy can support long-term goals.",
      "That progression led me into HR Business Partnering.",
      "Today, I work at Huawei R&D Switzerland, partnering with leaders in a highly international research and technology environment.",
      "What I enjoy most is helping organisations build the teams, structures, and people practices they need to grow and solve meaningful problems.",
    ],
  },
  whatIDo: {
    title: "Better decisions about people, structure, and growth.",
    intro: "I see HR as a strategic function that helps organisations make better decisions about people, structure, and growth.",
    questions: ["How should a team evolve as the organisation grows?", "Which capabilities are currently missing?", "What type of talent would create the greatest impact?", "How can hiring decisions become more structured and evidence-based?", "How can an organisation scale without losing quality?", "How should roles and responsibilities evolve over time?"],
  },
  expertise: [
    { title: "Strategic HR Partnership", description: "Connecting people strategy with organisational and business priorities.", icon: "partnership" },
    { title: "Strategic Hiring", description: "Helping organisations identify and attract the talent needed for future growth.", icon: "search" },
    { title: "Organisational Design", description: "Supporting leaders in defining effective team structures, roles, and capabilities.", icon: "structure" },
    { title: "Structured Interviewing", description: "Designing fair and evidence-based interview and assessment processes.", icon: "conversation" },
    { title: "Compensation and Market Intelligence", description: "Using market information to support competitive and equitable people decisions.", icon: "market" },
    { title: "Performance and Organisational Change", description: "Advising leaders through performance matters, change, and evolving organisational needs.", icon: "change" },
    { title: "HR Process Improvement", description: "Building practical and scalable people processes across the employee lifecycle.", icon: "process" },
  ],
  experience: [
    { company: "Huawei R&D Switzerland", role: "Senior HR Business Partner", location: "Lausanne, Switzerland", startYear: "2025", endYear: "Present", description: "Partnering with research and technology leaders on people strategy, organisational growth, and specialised talent.", visible: true },
    { company: "Nordcloud, an IBM Company", role: "Senior Global Talent Partner", location: "London, United Kingdom", startYear: "2021", endYear: "2025", description: "Joined during rapid international growth and progressed from technical recruitment into a senior global talent role.", visible: true },
  ],
  projects: [
    { name: "FAInd", subtitle: "AI Talent Intelligence Platform", description: "An AI-powered talent sourcing project designed to make specialised research and engineering talent discovery more effective.", url: "https://github.com/Carlota0612", githubUrl: "https://github.com/Carlota0612", status: "In development", visible: true },
    { name: "Personal Website", subtitle: "Next.js, TypeScript, Sanity and Render", description: "A personal website built with a private visual content editor and resilient local fallback content.", url: "https://github.com/Carlota0612", githubUrl: "https://github.com/Carlota0612", status: "Live", visible: true },
  ],
  education: [
    { qualification: "MBA", institution: "EAE Business School", year: "2018", visible: true },
    { qualification: "Master’s Degree in Human Resources", institution: "EAE Business School", year: "2017", visible: true },
    { qualification: "Bachelor’s Degree in Tourism and Business", institution: "University of Seville", year: "2011", visible: true },
  ],
  beyondWork: { title: "Energy, curiosity, and craft outside the office.", intro: "Outside work, I enjoy endurance sports, hiking in the Swiss Alps, painting, and exploring how technology can improve recruiting and people operations.", interests: ["Endurance sports", "Swiss Alps hiking", "Painting", "Recruiting technology"] },
  quote: { text: "Great companies are not built by hiring the most people.\n\nThey are built by hiring the right people, creating the right environment, and helping talented individuals do the best work of their careers.", visible: true },
  contact: { heading: "Let’s connect.", intro: "I’m always happy to connect with people interested in technology, research, organisational growth, and the future of work.", email: "carlota.mortiz@gmail.com", linkedin: "https://linkedin.com/in/carlota-o-336058a8", github: "https://github.com/Carlota0612", location: "Lausanne, Switzerland" },
  sections: defaultSections,
  themeSettings: { primaryAccent: "#6D3CC4", darkAccent: "#432475", lightAccentBackground: "#F4EFFE", pageBackground: "#FCFAFF", mainText: "#19171D", heroSize: "standard", headingStyle: "editorial", cardStyle: "outlined", cornerStyle: "soft", backgroundStyle: "warm-light" },
} as const;

export type SiteSettings = typeof siteContent;
