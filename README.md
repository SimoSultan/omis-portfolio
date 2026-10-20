# OMIS Studios

Single-page-turned-multi-page site for OMIS Studios, a sole trader business by Simon Curran.

## Stack

- [Astro](https://astro.build) (static output, no client JS)
- [Tailwind CSS](https://tailwindcss.com) v4 (Vite plugin)
- [Syne](https://fonts.google.com/specimen/Syne) via Google Fonts

## Usage

```bash
npm install
npm run dev        # dev server, defaults to localhost:4321
npm run build      # static build to dist/
npm run preview    # serve the build
```

To expose on all interfaces (e.g. over Tailscale): `npm run dev -- --host 0.0.0.0 --port 8000`.

## Structure

| Path | Purpose |
| --- | --- |
| `src/styles/global.css` | Design system — the `@theme` block holds colors, font, type scale |
| `src/i18n/en.ts` | All hardcoded UI text (English) |
| `src/data/projects.ts` | Projects list — pages are generated from this |
| `src/layouts/BaseLayout.astro` | Shared `<head>` + header |
| `src/pages/` | Routes: `/`, `/projects`, `/projects/[slug]`, `/privacy-policy` |

## Design system

Edit values only in the `@theme` block in `src/styles/global.css` (e.g. `--color-bg`,
`--color-ink`, `--color-muted`, `--font-display`, `--text-hero`). Tailwind utilities
like `bg-bg`, `text-ink`, `text-hero` update everywhere automatically.

## Adding a project

Append an object to `src/data/projects.ts`:

```ts
{ slug: "my-app", name: "My App", description: "What it does.", initial: "M" }
```

The listing page and detail page (`/projects/my-app`) are generated automatically.
