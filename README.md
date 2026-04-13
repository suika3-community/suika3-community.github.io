# Suika3 Community Website

Official website for the Suika3 visual novel engine.

https://suika3.vn

## About

This is the community website for Suika3, a mobile-first visual novel engine. The site provides information about the engine, documentation, and links to resources.

## Tech Stack

- Next.js 16
- React 19
- Tailwind CSS 4
- TypeScript
- Radix UI components

## Development

### Prerequisites

- Node.js 18+
- npm or pnpm

### Setup

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

The site will be available at http://localhost:3000

### Build

```bash
# Build for production (static export)
npm run build
```

The static files will be generated in the `out` directory.

## Project Structure

```
app/
  layout.tsx       - Root layout with metadata
  page.tsx         - Home page
  docs/            - Documentation pages
components/
  header.tsx       - Site header
  footer.tsx       - Site footer
  hero-section.tsx - Hero section
  features-section.tsx
  philosophy-section.tsx
  lineage-section.tsx
  markdown-renderer.tsx - Markdown rendering component
  ui/              - Reusable UI components
public/
  logo.png         - Site logo
```

## Deployment

The site is deployed to GitHub Pages via GitHub Actions. On push to `main`, the site is automatically built and deployed.

## Related Links

- Suika3 Engine: https://github.com/suika3-community/suika3

## License

MIT License - see LICENSE file for details.
