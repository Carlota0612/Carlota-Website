import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { presentationTool } from "sanity/presentation";
import { visionTool } from "@sanity/vision";
import { apiVersion, dataset, projectId } from "./sanity/env";
import { schemaTypes } from "./sanity/schema";

const singletonActions = new Set(["publish", "discardChanges", "restore"]);

export default defineConfig({
  name: "carlota_website",
  title: "Carlota Ortiz Website",
  projectId: projectId || "placeholder",
  dataset,
  apiVersion,
  basePath: "/studio",
  schema: { types: schemaTypes },
  document: { actions: (prev, context) => context.schemaType === "siteSettings" ? prev.filter(({ action }) => action && singletonActions.has(action)) : prev },
  plugins: [
    structureTool({ structure: (S) => S.list().title("Content").items([S.listItem().title("Site Settings").id("siteSettings").child(S.document().schemaType("siteSettings").documentId("siteSettings"))]) }),
    presentationTool({ previewUrl: { origin: process.env.SANITY_STUDIO_PREVIEW_URL || "http://localhost:3000", previewMode: { enable: "/api/draft-mode/enable", disable: "/api/draft-mode/disable" } }, resolve: { mainDocuments: [{ route: "/", filter: `_type == "siteSettings"` }] } }),
    visionTool(),
  ],
});
