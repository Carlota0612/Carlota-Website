# Carlota Personal Website

A modern, responsive personal website built with Next.js, TypeScript, and CSS. It includes a homepage, About Me, Professional Experience, Projects, Contact section, and navigation menu with placeholder content that can be customized.

## Tech Stack

- Next.js
- TypeScript
- React
- Responsive CSS

## Run Locally

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Required Environment Variables

No environment variables are required yet.

If you add integrations later, create a `.env.local` file and document the required variables here.

## Render Deployment

This project is prepared for Render as a Node web service.

- **Build command:** `npm install && npm run build`
- **Start command:** `npm run start`
- **Node version:** `20` or newer

Render automatically provides a `PORT` environment variable. The `start` script uses that value when available and falls back to port `3000` locally.

## Available Scripts

```bash
npm run dev     # Start local development server
npm run build   # Create a production build
npm run start   # Start the production server
npm run lint    # Run ESLint checks
```

## Notes

- No database is included.
- No authentication is included.
- Replace placeholder biography, experience, projects, and contact links with real content before publishing.
