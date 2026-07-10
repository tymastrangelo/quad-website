@AGENTS.md

# Quad Marketing / Landing Site

Next.js 16 (App Router) · TypeScript · Tailwind CSS v4 · shadcn/ui (radix-ui flavor) · Motion (`motion/react`). Fully static one page marketing site for the Quad mobile app. This is **not** the app repo; the Expo/Supabase app lives elsewhere and this folder only ships the website.

## Commands
- `npm run dev`: dev server
- `npx tsc --noEmit`: typecheck
- `npm run build`: production build (all routes prerender static; treat a non-static route as a regression)
- The user owns deploys and any future git history. Don't init git, commit, or deploy unless asked.

## Structure
- `app/layout.tsx`: fonts + metadata. `metadataBase` is unset until there's a real domain (harmless build warning).
- `app/page.tsx`: assembles the sections in order; each section is one file in `components/site/`.
- `components/site/`: Navbar, Hero (3D phone lift), Ticker, Showcase, FeatureGrid, ForClubs, Steps, Faq, Cta, Footer, plus shared bits (PinMark/QuadWordmark, Reveal, SectionHeading, PhoneFrame, StoreBadges).
- `components/ui/`: shadcn components (add more via `npx shadcn@latest add <name>`; `components.json` is configured).
- `public/quad-screenshot.png`: the real app screenshot inside PhoneFrame. To update it, drop a new iPhone screenshot (1179×2556) in `assets/images/quad/` and copy it over.
- `assets/`: source images (app icon, screenshot, old template art). Not served; copy what's needed into `public/`.
- `_legacy-template/`: the original HTML template the site replaced. Reference only; never import from it.
- `DESIGN_GUIDE.md`: the full brand/design system (colors, type, motion, components). Keep it in sync with any visual change here; the user also uses it to update the app.

## Design system (all tokens in `app/globals.css`)
- Palette: night `#0a0406` (bg), paper `#f6efe9` (text), maroon `#73000a`, maroon-deep `#3d0410`, pin `#e8323f` (CTAs/live dots), gold `#c9a55c` (eyebrows/icons). Use the Tailwind names (`bg-night`, `text-pin`, `text-gold`, …), never raw hexes in components. The user loves this palette; do not change it.
- **Typography: platform system font stack only** (SF on Apple, Roboto on Android), matching the app, which uses no custom fonts. `--font-sans` and `--font-display` are both the system stack; weights follow the app's convention (700 headings, 600 emphasis, 500 labels). Space Mono is the one exception, used only for tiny uppercase eyebrow/label text. Never add another web font.
- The nav/footer wordmark is uppercase QUAD (bold, slight letterspacing) to match the logo.
- `eyebrow` utility class = Space Mono uppercase gold label; use it for all section eyebrows.
- Server components by default; `"use client"` only where Motion needs it (Hero, Reveal). Scroll reveals go through the `<Reveal>` wrapper; don't hand-roll new ones.
- Every animation must respect reduced motion: Motion via `useReducedMotion`, CSS keyframes via the `prefers-reduced-motion` block in globals.css.
- 3D is CSS perspective transforms (hero phone lift). No WebGL/three.js; keep the bundle light.

## Copy rules
- **No em dashes or en dashes anywhere** (copy, docs, comments). The user explicitly hates them. Rewrite with periods, commas, colons, or middots (`·` is the separator for meta lines like "Rudd Field · 4 min walk"). Avoid hyphenated compounds in headings and titles too; rephrase instead (e.g. "Going in one tap", not "One-tap Going").
- Everything on the page must stay true to the real app: @elon.edu only signup, free, iOS + Android, For You recommendations, live/upcoming events, campus map, club posts/feed, one tap "I'm going", saved events, calendar export, invites, per type notification prefs + server enforced quiet hours, club admin tools, blocking + in app account deletion. Don't invent user counts or ratings.
- **Never say RSVP.** "I'm going" is a social signal (friends invite each other; events show how many people are probably going), not an RSVP. Student Involvement runs official RSVPs separately on PhoenixConnect, and the distinction matters to them. Say "going", "going count", "who's in".
- **Club onboarding + Fall 2026 pilot**: clubs must be registered on PhoenixConnect first, then submitted through the in-app form for approval. The Fall 2026 demo launches with preapproved organizations only; strong student support gives Quad **the chance** to expand to all clubs in spring and beyond. Expansion is not guaranteed, so never write "Quad opens to every club" as a promise. This messaging lives in the For Clubs pilot note, two FAQ entries, and the CTA fine print. Frame it as momentum, not limitation.
- **All clubs are public right now.** No private clubs, no follow requests, no approve/decline follow flows. Don't depict or mention them.
- **Google Play is coming soon.** The Play badge is a button that pops a "Coming soon" bubble (see `StoreBadges`), not a link. The App Store badge is a normal link (`#` until the listing is live). Both badges use the official store artwork in `public/badge-app-store.svg` and `public/badge-google-play.svg`; never recreate them by hand.
- Canonical campus coordinates: `36.1036° N · 79.5043° W` (hero eyebrow + footer). Don't reintroduce older values.
- Legal/copyright name is **Quad Connect** (footer: "© 2026 Quad Connect. All rights reserved."). Keep "Not affiliated with Elon University."
- Store badge links and privacy/terms links are `#` placeholders until real URLs exist.
