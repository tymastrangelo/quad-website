# onby Design Guide (web)

How the onby marketing site looks, moves and speaks. It mirrors the app's design rules (native first, one accent, warm canvas) at web scale. Tokens live in `app/globals.css` and match the app's `lib/palette.ts`.

## 1. Essence
onby is the campus on a good evening: warm, bright, easy to walk into. The brand is one mark (the wordmark with its coral dot), one accent (cobalt), a warm off white canvas and rounded display type. Inside the app at a given school the interactive tint becomes that school's color; cobalt belongs to onby itself (icon, splash, signed out flow, this site).

Feels: **warm** (canvas, not white; black, not gray), **alive** (the dot pulses, the ticker moves, cards float), **honest** (real orgs, real places, no invented numbers), **light** (lots of air, hairlines not boxes).

## 2. Color

| Token | Light | Dark | Role |
|---|---|---|---|
| canvas | `#F6F4F0` | `#000000` | page background |
| surface | `#FFFFFF` | `#1C1C1E` | cards, nav, footer |
| surface-2 | `#EFECE6` | `#2C2C2E` | recessed rows, vignette backgrounds |
| ink | `#1C1C1E` | `#F5F5F7` | text |
| ink-soft | `#5C5C63` | `#A1A1A6` | secondary text |
| line | `#E8E4DC` | white 10% | hairlines |
| cobalt | `#2B5CFF` | `#5E82FF` | the one interactive accent |
| cobalt-deep | `#1F46D6` | `#7A98FF` | hover |
| cobalt-soft | `#E9EEFF` | cobalt 16% | tint bands, chips, icon wells |
| coral | `#FF6A5C` | same | the dot: wordmark period, live, separators, watermark |

Rules: cobalt is the only button color. Coral never fills a button or sets body text. Glows are cobalt at 18 to 22% (`--glow`), anchored to the bottom edge like a horizon, paired with the dot's concentric ripple rings. Grain stays at 3.5%. No grays that aren't warmed (`#5C5C63`, `#EFECE6`).

Contrast: ink on canvas 15.6:1 · ink-soft on canvas 6.4:1 · cobalt on canvas 4.9:1 (fine for labels and large text; not small body) · white on cobalt 5.0:1 · coral on canvas 2.7:1 (decorative and 12px uppercase labels only, always beside a dot or icon).

## 3. Type
- **Body:** platform system stack (SF Pro Text on Apple, Roboto on Android, Segoe on Windows). 400 body, 500 labels, 600 card titles and buttons.
- **Display:** `font-display` = `ui-rounded` (SF Pro Rounded on Apple) with Nunito as the web fallback. Weight 800 for headings, 900 only for the wordmark. Tight tracking, tight leading. Used for headings, the wordmark, numerals and stats (`numerals` utility: rounded, tabular).
- **Eyebrow:** 12px, 600, uppercase, +0.14em, cobalt. No mono face anywhere.
- Scale: hero `2.9rem` → `5.5rem`; section heading `text-4xl` → `text-5xl`; card title `text-lg` to `text-2xl`; body 14 to 18; meta 11 to 12.

## 4. Space, radius, borders
- Section rhythm `py-28` / `md:py-36`; content `max-w-6xl`; text columns `max-w-xl`.
- Radii: 12 (inner chips), 16 (small cards), 22 (feature cards), 28 (panels, FAQ, org mock); pills for buttons, nav, chips. The app uses the same ladder (8/12/16/22/28).
- Borders: 1px `line` hairlines. Hover recolors to `cobalt/40`; never a heavy shadow on hover.
- Shadows: `shadow-soft` on resting cards, `shadow-lift` on floating objects. Warm ink tinted, never pure black.

## 5. The dot
The coral dot is the only decorative glyph. It is the period on `onby.`, the period on the hero headline (dropping in with a spring), the live indicator with its ping ring, the separator in the ticker, the "from PhoenixCONNECT" marker, and the 420px watermark at 7% behind the final CTA. Do not invent a second glyph. Icons are Lucide at 1.5px stroke in cobalt icon wells (`bg-cobalt-soft`).

## 6. Motion
Same budget as before: one hero moment, quiet ambient loops, restrained reveals.

| Pattern | Spec |
|---|---|
| Entrance | opacity 0→1, y 28→0, 0.8s, `cubic-bezier(0.21,0.47,0.32,0.98)`, 80ms stagger |
| Scroll reveal | same curve, 0.7s, y 32→0, once, 80px early |
| Phone lift | scroll scrubbed rotateX 54°→0°, scale 0.88→1, perspective 1300, spring 130/26 |
| Ambient float | y ±12px, 6 to 9s, desynchronized |
| Live pulse | ring scale 1→2.6, opacity 0.6→0, 2.4s |
| Marquee | 48s linear, paused on hover |
| Buttons | hover color 200ms, press `scale(0.97)` |

Everything honors reduced motion.

## 7. Components
- **Primary button:** pill, cobalt, white 600 text, hover cobalt-deep, press scale 0.97. The only solid cobalt element in view.
- **Secondary button:** pill, surface fill, `line` border, `shadow-soft`, hover surface-2.
- **Card:** surface, hairline, radius 22 to 28, padding 24 to 28, `shadow-soft`.
- **Chip:** pill, `cobalt-soft` fill, cobalt 600 text, rounded numerals when it carries a number.
- **Live badge:** coral dot + ping + 11px coral uppercase label.
- **Glass card (hero):** `var(--glass)` + blur + hairline + `shadow-lift`.
- **Nav:** floating pill, `var(--nav-glass)` + blur, hairline, 56px, `max-w-4xl`.
- **Phone:** `MockHome` renders the app's Home tab with Elon maroon as the tint; shadow is cobalt glow + soft black.
- **Store badges:** official artwork, "Spring 2027" bubble until the listings go live.

## 8. Voice
Plain, second person, active. Sentence case. No em or en dashes; middots for meta. Lowercase `onby` always. Never RSVP. Real org names (ElonRUNS, Elon Society of Computing, Club Swimming, Yarn Arts) and real places (Moseley, Oak House, Beck Pool, Innovation Hall); never invented counts. The pilot is "a set of approved organizations" at Elon in spring 2027, everything else on PhoenixCONNECT, and the list can grow from there. One conversational beat per section ("wait, that was tonight?").

## 9. Accessibility floor
Focus ring 2px cobalt, 3px offset. Reduced motion everywhere. Decorative layers `aria-hidden` and `pointer-events-none`. One `h1`. Alt text describes content. The mock phone is `aria-hidden` because it is illustration.
