# onby Landing Site

Marketing site for **onby**, the campus events app. Everything happening on campus. Come on by. Starting at Elon University, spring 2027.

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

- `app/`: root layout (fonts, metadata, theme), the single page, and `/privacy` + `/terms`
- `components/site/`: one file per page section (hero, ticker, showcase, orgs, FAQ, …)
- `components/ui/`: shadcn/ui primitives
- `public/`: served assets (app icon, store badges)
- `assets/`: source imagery (onby icon and splash; the old Quad art under `images/quad/`)
- `_legacy-template/`: the original static HTML template this site replaced (kept for reference)

Design tokens (warm canvas, cobalt accent, coral dot, rounded display face, dark mode) live in `app/globals.css`. See `CLAUDE.md` for working conventions.
