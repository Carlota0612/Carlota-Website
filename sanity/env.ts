export const apiVersion = "2025-02-19";
export const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || "production";
export const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "";
export const studioUrl = process.env.SANITY_STUDIO_PREVIEW_URL || "http://localhost:3000/studio";
export const token = process.env.SANITY_API_READ_TOKEN;
export const hasSanityConfig = Boolean(projectId && dataset);
