@AGENTS.md

# onby marketing / landing site (formerly Quad)

Next.js 16 (App Router) · TypeScript · Tailwind CSS v4 · shadcn/ui (radix-ui flavor) · Motion (`motion/react`). Fully static one page marketing site for the onby mobile app plus `/privacy` and `/terms`. This is **not** the app repo; the Expo/Supabase app lives in `../quad-app` and this folder only ships the website. Rebranded Quad → onby on 2026-11-05 (branch `onby-rebrand`).

## Commands
- `npm run dev`: dev server
- `npx tsc --noEmit` · `npx eslint app components`: typecheck + lint (both must be clean)
- `npm run build`: production build (all routes prerender static; treat a non-static route as a regression)
- Git: Tyler owns `master` and the live deploy. Work on a branch and push it when he asks; never push to `master` or deploy. All `*.md` files are gitignored except READMEs; CLAUDE.md, DESIGN_GUIDE.md, AGENTS.md, privacy.md, terms.md are local only.

## Two campuses, one page
- `/` is onby for any campus (cobalt). `/elon` is onby for Elon (Elon maroon `#73000A`, dark `#E2475B`, from `schools.accent_*`). Both routes render `components/site/landing.tsx`, a client component that holds the campus in state, swaps copy and screenshot in place, and moves the URL with `pushState` so the DOM persists and every brand color glides to the new accent (`[data-campus]` wrapper sets `--brand*`; `[data-campus-ready]` arms the color transitions after the first switch).
- All campus-specific copy lives in `lib/campus.ts`. Components never hardcode Elon or PhoenixCONNECT; add a field there instead.
- The switch is the wordmark dropdown in the nav (`components/site/campus-menu.tsx`): hover opens on a mouse, tap toggles on touch. Tyler rejected a nav segmented control and a hero pill; keep it in the wordmark.
- The phone shows the real app: `public/screens/onby-home.png` (demo campus, cobalt) and `public/screens/elon-home.png` (Elon tenant). Both are mounted and crossfade. Never replace them with a CSS mock; Tyler wants actual screenshots. Sources in `assets/images/onby/screens/`.

## Structure
- `app/layout.tsx`: fonts + metadata. Nunito (next/font) is only the web fallback for the rounded display face. `metadataBase` is unset until there's a real domain (harmless build warning).
- `app/page.tsx`: assembles the sections in order; each section is one file in `components/site/`.
- `app/privacy/page.tsx` + `app/terms/page.tsx`: legal pages on the shared primitives in `components/site/legal.tsx`. Product name is onby, legal entity stays Quad Software, LLC. The legal substance still describes posts, RSVPs and club admin tools from the Quad era; it is under review with the Elon Law clinic, so change wording only when Tyler hands over new text.
- `components/site/`: Navbar, Hero (3D phone lift), Ticker, Showcase, FeatureGrid, ForOrgs, Steps, Faq, Cta, Footer, plus shared bits (`brand-mark.tsx`: `OnbyWordmark` + `Dot`, Reveal, SectionHeading, PhoneFrame, StoreBadges).
- `components/site/phone-frame.tsx` renders the real screenshots (1206×2622 captures resampled to 1179 wide: `sips --resampleWidth 1179 <src> --out public/screens/<name>.png`).
- `public/onby-icon.png`, `app/icon.png`, `app/apple-icon.png`: rendered from `assets/images/onby/icon.png` (copied from the app repo's `assets/icon.png`). Re-copy when the app icon changes.
- `assets/images/quad/`: the old brand's art, reference only. `_legacy-template/`: the original HTML template, never import from it.
- `DESIGN_GUIDE.md`: the site's design system. Keep it in sync with any visual change.

## Design system (all tokens in `app/globals.css`, mirrors the app's `lib/palette.ts`)
- Light first, dark follows `prefers-color-scheme`. Canvas `#F6F4F0` / black · surface white / `#1C1C1E` · surface-2 `#EFECE6` / `#2C2C2E` · ink `#1C1C1E` / `#F5F5F7` · ink-soft `#5C5C63` · line `#E8E4DC` · brand = onby cobalt `#2B5CFF` / `#5E82FF` (Elon maroon on `/elon`) · brand-soft · coral `#FF6A5C`. Use the Tailwind names (`bg-canvas`, `text-ink-soft`, `border-line`, `bg-brand`, `text-coral`, …), never raw hexes in components. The accent token is `brand`, not `cobalt`, because it changes per campus.
- One interactive accent: `brand` (cobalt on `/`, Elon maroon on `/elon`). Coral is the dot only: the wordmark period, live indicators, ticker separators, the CTA watermark. Never a coral button or coral body text.
- Type: body is the platform system stack (SF / Roboto), display is `font-display` = `ui-rounded` → SF Pro Rounded on Apple, Nunito elsewhere. Headings 800 (`font-extrabold`), card titles 600, labels 500. `eyebrow` utility = 12px cobalt uppercase +0.14em. `numerals` utility = rounded tabular figures for times, counts, step numbers. No mono face anymore.
- Radii 12/16/22/28 (`rounded-xl`…`rounded-[28px]`), pills for buttons and chips. Cards: white surface + `border-line` hairline + `shadow-soft`; hover recolors the border to `cobalt/40` and lifts 2 to 4px.
- Server components by default; `"use client"` only where Motion needs it (Hero, Reveal, StoreBadges). Scroll reveals go through `<Reveal>`. Every animation respects reduced motion (`useReducedMotion`, the `prefers-reduced-motion` block). 3D is CSS perspective only.

## Copy rules
- **No em dashes or en dashes anywhere** (copy, docs, comments). Periods, commas, colons, or middots (`·`) for meta lines. Avoid hyphenated compounds in headings.
- The brand is lowercase `onby` with a coral period in the wordmark; in prose it is `onby`, even at the start of a sentence. Tagline: "Everything happening on campus. Come on by."
- Stay true to the real app and the Spring 2027 Elon pilot: @elon.edu only signup, free, iOS + Android, read-only from PhoenixCONNECT, every event links back, For You feed, follow orgs, save + reminders, opt-in daily digest, "I'm going" + calendar export, invites, per type notification prefs + server enforced quiet hours, campus map, blocking + in app account deletion. **No org posts or feed for Elon**, no event submissions, no rosters or SSO. Don't invent user counts or ratings.
- **Never say RSVP.** Say "I'm going", "going", "who's in".
- **Pilot framing:** spring 2027 at Elon with "a set of approved organizations" while impact is measured; everything else is on PhoenixCONNECT; the list "can grow from there". Do not name Student Involvement as a partner on the site until Tyler confirms the pilot is approved (meeting 2026-11-06). Never promise expansion. Orgs do nothing to join: no submissions, no "request your org" button.
- Other schools come later; Elon stays first. Don't name other campuses.
- **Neither store listing is live.** Both badges are buttons that pop a "Spring 2027" bubble (`StoreBadges`). When a listing goes live, swap that badge back to an `<a>` with the real URL. Official store artwork only.
- Legal/copyright: "© 2026 Quad Software LLC. All rights reserved." + "Not affiliated with Elon University." Support: tmastrangelo@elon.edu. Nav/footer anchors use `/#section` so they work from subpages.
