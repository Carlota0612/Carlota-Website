# Carlota Ortiz Personal Website

Next.js 15, TypeScript, Sanity Studio, Sanity Visual Editing, and Render Web Service deployment.

## Local development

```bash
yarn install
yarn dev
```

Open the public site at `http://localhost:3000` and the private Studio at `http://localhost:3000/studio`.

## Sanity setup

1. Create a Sanity account and project at sanity.io, choosing an empty/clean project.
2. Find the project ID in the Sanity Manage dashboard under the project name or in **Project settings → API**.
3. Create or confirm a `production` dataset in **Project settings → Datasets**.
4. Create a server-side API token in **Project settings → API → Tokens** with Viewer permissions. Keep it secret; it is only used by Next.js server code for draft preview.
5. Configure CORS in **Project settings → API → CORS origins**. Add `http://localhost:3000` for local development and the Render production URL. Allow credentials for Studio/Presentation preview.
6. Copy `.env.example` to `.env.local` and fill in:
   - `NEXT_PUBLIC_SANITY_PROJECT_ID`
   - `NEXT_PUBLIC_SANITY_DATASET=production`
   - `SANITY_API_READ_TOKEN`
   - `SANITY_STUDIO_PREVIEW_URL=http://localhost:3000` locally
7. In Render, add the same environment variables. Set `SANITY_STUDIO_PREVIEW_URL` to the production site origin, for example `https://your-service.onrender.com`.
8. Keep Render commands as:
   - Build: `yarn install && yarn build`
   - Start: `yarn start`

## Editing content

1. Visit `/studio` and sign in with a Sanity account that has access to the project.
2. Open **Site Settings**. This singleton controls identity, hero, about, what I do, expertise, experience, projects, education, beyond work, quote, contact, design settings, and section management.
3. Edit fields and select **Publish** when ready. Draft changes are private until published.
4. Open the Presentation tool in Studio to preview the website inside the editor. It enables Next.js Draft Mode through `/api/draft-mode/enable` so draft content can be previewed securely.
5. Click editable content in Presentation to jump to the corresponding Studio field.
6. Use **Theme Settings** to safely change colours and predefined style options. Colour values must be six-digit hex values.
7. Use **Sections** to reorder navigation and page sections with drag and drop, change navigation labels, or hide sections. The hero always stays first.

## Recovery and fallback

The public homepage includes local fallback content. If Sanity is unavailable, misconfigured, or environment variables are absent, the homepage continues rendering from `content/site.ts`; Studio and draft preview require valid Sanity configuration.

Never commit `.env.local` or real Sanity tokens.
