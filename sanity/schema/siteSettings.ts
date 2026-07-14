import { defineArrayMember, defineField, defineType } from "sanity";

// Sanity validation builder is provided dynamically by the Studio.
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const hexRule = (Rule: any) => Rule.regex(/^#([0-9A-Fa-f]{6})$/, { name: "hex colour" });
const sectionIds = ["about", "what-i-do", "expertise", "experience", "projects", "education", "beyond-work", "quote", "contact"];

export const siteSettings = defineType({
  name: "siteSettings", title: "Site Settings", type: "document",
  groups: ["identity", "hero", "content", "design", "sections"].map((name) => ({ name, title: name[0].toUpperCase() + name.slice(1) })),
  fields: [
    defineField({ name: "identity", title: "Identity", type: "object", group: "identity", fields: ["name", "professionalTitle", "professionalSubtitle", "location", "email", "linkedinUrl", "githubUrl"].map((name) => defineField({ name, type: name.includes("Url") ? "url" : "string" })) }),
    defineField({ name: "hero", type: "object", group: "hero", fields: [
      defineField({ name: "eyebrow", type: "string" }), defineField({ name: "heading", type: "string" }), defineField({ name: "intro", type: "array", of: [defineArrayMember({ type: "text" })] }),
      defineField({ name: "primaryButtonLabel", type: "string" }), defineField({ name: "primaryButtonDestination", type: "string" }), defineField({ name: "secondaryButtonLabel", type: "string" }), defineField({ name: "secondaryButtonDestination", type: "string" }),
    ]}),
    defineField({ name: "about", type: "object", group: "content", fields: [defineField({ name: "title", type: "string" }), defineField({ name: "introduction", type: "text" }), defineField({ name: "paragraphs", type: "array", of: [defineArrayMember({ type: "text" })] })] }),
    defineField({ name: "whatIDo", title: "What I Do", type: "object", group: "content", fields: [defineField({ name: "title", type: "string" }), defineField({ name: "intro", type: "text" }), defineField({ name: "questions", type: "array", of: [defineArrayMember({ type: "string" })] })] }),
    defineField({ name: "expertise", type: "array", group: "content", of: [defineArrayMember({ type: "object", fields: [defineField({ name: "title", type: "string" }), defineField({ name: "description", type: "text" }), defineField({ name: "icon", type: "string" })], preview: { select: { title: "title", subtitle: "description" } } })] }),
    defineField({ name: "experience", type: "array", group: "content", of: [defineArrayMember({ type: "object", fields: ["company", "role", "location", "startYear", "endYear"].map((name) => defineField({ name, type: "string" })).concat([defineField({ name: "description", type: "text" }), defineField({ name: "visible", type: "boolean", initialValue: true })]) })] }),
    defineField({ name: "projects", type: "array", group: "content", of: [defineArrayMember({ type: "object", fields: [defineField({ name: "name", type: "string" }), defineField({ name: "subtitle", type: "string" }), defineField({ name: "description", type: "text" }), defineField({ name: "url", type: "url" }), defineField({ name: "githubUrl", type: "url" }), defineField({ name: "status", type: "string" }), defineField({ name: "visible", type: "boolean", initialValue: true })] })] }),
    defineField({ name: "education", type: "array", group: "content", of: [defineArrayMember({ type: "object", fields: ["qualification", "institution", "year"].map((name) => defineField({ name, type: "string" })).concat([defineField({ name: "visible", type: "boolean", initialValue: true })]) })] }),
    defineField({ name: "beyondWork", type: "object", group: "content", fields: [defineField({ name: "title", type: "string" }), defineField({ name: "intro", type: "text" }), defineField({ name: "interests", type: "array", of: [defineArrayMember({ type: "string" })] })] }),
    defineField({ name: "quote", type: "object", group: "content", fields: [defineField({ name: "text", type: "text" }), defineField({ name: "visible", type: "boolean", initialValue: true })] }),
    defineField({ name: "contact", type: "object", group: "content", fields: ["heading", "intro", "email", "linkedin", "github", "location"].map((name) => defineField({ name, type: name === "intro" ? "text" : "string" })) }),
    defineField({ name: "themeSettings", type: "object", group: "design", fields: ["primaryAccent", "darkAccent", "lightAccentBackground", "pageBackground", "mainText"].map((name) => defineField({ name, type: "string", validation: hexRule })).concat(["heroSize", "headingStyle", "cardStyle", "cornerStyle", "backgroundStyle"].map((name) => defineField({ name, type: "string", options: { list: name === "heroSize" ? ["compact", "standard", "large"] : name === "headingStyle" ? ["clean", "editorial", "bold"] : name === "cardStyle" ? ["minimal", "soft", "outlined"] : name === "cornerStyle" ? ["square", "soft", "rounded"] : ["white", "warm-light", "lavender", "dark"] } }))) }),
    defineField({ name: "sections", type: "array", group: "sections", of: [defineArrayMember({ type: "object", fields: [defineField({ name: "sectionId", type: "string", options: { list: sectionIds } }), defineField({ name: "navLabel", type: "string" }), defineField({ name: "visible", type: "boolean", initialValue: true }), defineField({ name: "order", type: "number" })], preview: { select: { title: "navLabel", subtitle: "sectionId" } } })] }),
  ],
});
