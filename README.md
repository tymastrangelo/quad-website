# Quad Landing Site

Marketing site for **Quad**, the campus events app for Elon University. Every event, every club, one app.

Built with Next.js (App Router), Tailwind CSS v4, shadcn/ui, and Motion. Fully static: no backend, no env vars.

## Develop

```bash
npm install
npm run dev        # http://localhost:3000
```

## Ship

```bash
npm run build      # static production build
```

Deploy anywhere that hosts Next.js (Vercel is zero-config).

## Layout

- `app/`: root layout (fonts, metadata, theme) and the single page
- `components/site/`: one file per page section (hero, ticker, showcase, FAQ, …)
- `components/ui/`: shadcn/ui primitives
- `public/`: served assets, including the real app screenshot shown in the hero phone
- `assets/`: source imagery (app icon, screenshots)
- `_legacy-template/`: the original static HTML template this site replaced (kept for reference)

Design tokens (maroon/pin/gold palette, fonts, animations) live in `app/globals.css`. See `CLAUDE.md` for working conventions.
