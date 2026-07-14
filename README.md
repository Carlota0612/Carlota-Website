# Carlota Ortiz Personal Website

A modern, professional personal website for Carlota Ortiz. The site presents a concise professional story for a senior HR professional working with technology and research organisations, rather than a traditional online CV.

## Technology stack

- Next.js
- React
- TypeScript
- CSS Modules-free responsive CSS in `app/globals.css`
- ESLint with Next.js rules
- Render-ready standalone production output

## Local installation

Install dependencies:

```bash
npm install
```

## Development command

Run the local development server:

```bash
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000).

## Production build command

Create a production build:

```bash
npm run build
```

## Production start command

Start the production server locally:

```bash
npm run start
```

The start script uses Render's `PORT` environment variable when it exists and falls back to port `3000`.

## Render deployment

Create a new Render **Web Service** connected to the GitHub repository.

Recommended settings:

- **Environment:** Node
- **Build command:** `npm install && npm run build`
- **Start command:** `npm run start`
- **Node version:** 20 or newer

No database, authentication service, paid API, or environment variable is required for the current website.

## Deploying from GitHub to Render

1. Push this repository to GitHub.
2. In Render, choose **New +** and select **Web Service**.
3. Connect the GitHub repository.
4. Confirm the build command is `npm install && npm run build`.
5. Confirm the start command is `npm run start`.
6. Select a Node runtime using Node 20 or newer.
7. Click **Create Web Service**.
8. Render will build the Next.js app and deploy it automatically.
9. Optional: enable automatic deploys so every push to the selected branch triggers a new deployment.

## Connecting a custom domain on Render

1. Open the deployed Render Web Service.
2. Go to **Settings** and find **Custom Domains**.
3. Add the custom domain, for example `carlotaortiz.com` or `www.carlotaortiz.com`.
4. Follow Render's DNS instructions for the domain registrar.
   - For an apex/root domain, add the DNS record Render provides.
   - For a `www` subdomain, add the CNAME record Render provides.
5. Wait for DNS propagation.
6. Render will issue and renew the TLS certificate automatically once the DNS records are correct.

## Updating website content

Most editable content is centralised in:

```text
content/site.ts
```

Update that file to edit:

- Navigation labels and section links
- Hero text
- My Story copy
- What I Do questions
- Expertise cards
- Experience entries
- Projects
- Education
- Beyond Work interests
- Approach quote
- Contact details

Global metadata is in:

```text
app/layout.tsx
```

The main page structure is in:

```text
app/page.tsx
```

Global styling is in:

```text
app/globals.css
```

The favicon placeholder is in:

```text
public/favicon.svg
```

## Available scripts

```bash
npm run dev     # Start local development server
npm run build   # Create a production build
npm run start   # Start the production server
npm run lint    # Run ESLint checks
```

## Deployment readiness checklist

- No database is required.
- No authentication is included.
- No paid APIs are used.
- External links are standard email, LinkedIn, and GitHub links.
- The layout is responsive and keyboard accessible.
- SEO and Open Graph metadata are configured.
- The project is configured with `output: "standalone"` for Render deployment.
