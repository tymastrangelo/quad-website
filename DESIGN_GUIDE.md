# Quad Design Guide

The single source of truth for how Quad looks, moves, and speaks. It covers the marketing site in this repo and translates every decision for the mobile app, so the two always feel like one product. Colors and voice are shared everywhere; each surface then applies them at its own scale (marketing type is bigger, app type is denser).

Contents:
1. Brand essence
2. Color system
3. Typography
4. Spacing, radius, and borders
5. Iconography and the pin motif
6. Elevation and surfaces
7. Motion
8. Component recipes
9. Signature elements
10. Voice and copy rules
11. Accessibility floor
12. Token reference (CSS + React Native)

---

## 1. Brand essence

**Quad is the campus quad at night: warm, alive, and yours.** The brand world is one university (Elon), real places (Rudd Field, McCrary Theatre, Moseley Center), and one recurring mark: the location pin. Everything Quad makes should feel:

- **Grounded**: real campus names, real coordinates (36.1036° N · 79.5043° W), no invented stats.
- **Alive**: something is always happening. Live dots pulse, tickers move, cards float. Motion says "right now."
- **Closed and safe**: @elon.edu only. The design language is confident and warm, never corporate or public-facing SaaS.
- **Semibold**: the voice and the type both lean bold. Quad states things plainly and in the active voice.

The maroon comes from Elon; the bright pin red comes from the logo; the gold is the collegiate accent. That trio is the brand. Do not add new hues.

---

## 2. Color system

### Core palette

| Token | Hex | Name it by | Role |
|---|---|---|---|
| `night` | `#0A0406` | maroon black | Site background. A maroon-tinted near black, never pure `#000`. |
| `paper` | `#F6EFE9` | warm paper | Primary text on dark. Warm off white, never pure `#FFF` for body text. |
| `maroon` | `#73000A` | Elon maroon | The brand anchor. Surfaces, gradients, primary brand color in the app. |
| `maroon-deep` | `#3D0410` | deep maroon | Gradient partner for maroon; panel backgrounds. |
| `pin` | `#E8323F` | pin red | The action color: CTAs, live indicators, "I'm going." From the logo pin. |
| `gold` | `#C9A55C` | Elon gold | Fine details only: eyebrows, icons, thin accents. Never large fills. |

### Supporting darks (site)

| Token | Value | Role |
|---|---|---|
| `card` | `#150A0E` | Card and panel surface on night |
| `muted` (surface) | `#241318` | Deeper inset surface |
| `muted-foreground` | `#B39A9D` | Secondary text on dark |
| `border` | `rgba(246,239,233,0.10)` | Default hairline border (paper at 10%) |
| `input` | `rgba(246,239,233,0.14)` | Input borders, slightly stronger |

### Light surfaces (app UI and site vignettes)

When Quad UI appears on light backgrounds (the app itself, or the mock cards on the site):

| Value | Role |
|---|---|
| `#FDFAF7` | Primary light card surface (warm white, not pure white) |
| `#F2EAE2` | Secondary light surface (a stacked or recessed card) |
| `#0A0406` (night) | Titles on light |
| neutral 500 grays | Meta text on light |
| `maroon #73000A` | Brand text, labels, section accents on light |
| `pin #E8323F` | Buttons and live accents on light |

### Usage rules

1. **80 / 15 / 5**: roughly 80% night and dark surfaces, 15% paper text, 5% color (maroon glow, pin actions, gold details). Color earns attention because it is scarce.
2. **Pin red means "act" or "now."** Buttons, live dots, going states, selected states. Never use it for decorative fills or long text.
3. **Gold means "label."** Eyebrows, icons, tiny chips (like "IN 45 MIN"). If gold ever covers more than a chip, it is wrong.
4. **Maroon means "brand atmosphere."** Gradients, glows, panels, selection highlight. It reads as depth, not as an action.
5. Backgrounds glow, they do not band: use radial gradients of maroon into night (`radial-gradient(closest-side, rgba(115,0,10,0.75), rgba(232,50,63,0.12), transparent)`), then blur.
6. Never introduce cool grays. Every neutral is warmed toward the maroon family (note `#B39A9D`, `#241318`).

### Translating to the app

The app is a light UI. Mapping:

- Primary / brand: `maroon #73000A` (default user theme color).
- Action & live accents: `pin #E8323F` (live badges, destructive, "Going" confirmation moments).
- Highlight details: `gold #C9A55C`, used as sparingly as on the site (badge text, small accents).
- Light surfaces: warm whites above (`#FDFAF7` cards on a `#FFFFFF` or `#FBF7F3` canvas) instead of stark gray-whites.
- A future app dark mode should use `night`, `card`, `muted`, and `paper` exactly as specified here, not generic `#121212`.

### Contrast (WCAG, measured)

| Pair | Ratio | Verdict |
|---|---|---|
| paper on night | 17.9:1 | AAA, body text |
| paper on card | 17.1:1 | AAA, body text |
| muted-foreground on night | 7.8:1 | AA+, body text |
| gold on night / card | 8.7 / 8.3:1 | AA+, labels fine |
| pin on night | 4.8:1 | AA for large text and UI; do not set small body text in pin |
| white on pin | 4.2:1 | Fine for buttons and large labels; not small body text |
| white on maroon | 12.1:1 | AAA |
| maroon on white | 12.1:1 | AAA |
| night on `#FDFAF7` | 19.6:1 | AAA |

---

## 3. Typography

### Typefaces

- **UI and display: the platform system font.** No custom fonts, exactly like the app. Web stack: `-apple-system, BlinkMacSystemFont, "SF Pro Display", "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif`. This renders as San Francisco on Apple devices and Roboto on Android, so the site and the app are literally the same face.
- **Utility voice: Space Mono** (web only). Used exclusively for tiny uppercase labels: eyebrows, coordinates, chips like "LIVE NOW" and "24 GOING". Always uppercase, tracked out `+0.14em` to `+0.22em`, 9 to 12px, usually gold (or pin for live). The app does not use a mono face; its equivalent voice is small uppercase system font at weight 600.

### Weights (both surfaces)

| Weight | Use |
|---|---|
| 700 | Headings, display lines, the wordmark |
| 600 | Default emphasis: card titles, buttons, row titles |
| 500 | Labels and secondary buttons |
| 400 | Body text |

Semibold-heavy is the house style: when in doubt between 400 and 600 for a title, choose 600.

### Scale: marketing site

| Role | Size | Weight / tracking |
|---|---|---|
| Hero display | `clamp` ~60 to 96px (`text-6xl` / `md:text-8xl`) | 700, tracking tight, tight leading |
| Section heading | 36 to 48px (`text-4xl` / `md:text-5xl`) | 600, tracking tight |
| Card / feature title | 18 to 24px (`text-lg` to `text-2xl`) | 600 |
| Body | 14 to 18px | 400, relaxed leading |
| Meta | 11 to 12px | 400 to 500, muted color |
| Eyebrow (mono) | 11px | uppercase, +0.22em, gold |

### Scale: app (unchanged, for reference)

Body 13 to 16 (base 14), meta 11 to 12, subheads 17 to 18, titles 20 to 24, display numbers 28 to 32. Same weight table as above.

### Wordmark

The wordmark is the word QUAD in uppercase, weight 700, slight letterspacing (`+0.04em`), always paired with the pin mark at left. On dark it is paper; on maroon it is white (as in the app icon).

---

## 4. Spacing, radius, and borders

- **Section rhythm (site)**: vertical padding 112 to 144px (`py-28` / `md:py-36`) per section; content max width 1152px (`max-w-6xl`), narrow text columns 576 to 672px.
- **Radii**: pills (`9999px`) for buttons, nav, chips; 16px (`rounded-2xl`) for small cards; 24px (`rounded-3xl`) for feature cards and panels; 12px base radius for shadcn primitives. The app's equivalent: keep cards generously rounded (14 to 20) so surfaces feel soft.
- **Borders**: 1px hairlines of paper at 10% opacity on dark. State changes recolor the border (hover: `pin` at 40% or `gold` at 40%) rather than adding heavy shadows.
- **Gaps**: cards sit in 16 to 24px gaps (`gap-4` / `gap-6`). Inside cards, 24 to 28px padding (`p-6` / `p-7`).

---

## 5. Iconography and the pin motif

- **App: Ionicons only.** Outline variants for chrome and actions, filled/outline pairs for tab states. (Established app convention; never mix icon sets.)
- **Site: Lucide** at 1.5px stroke, sized 16 to 28px, usually `gold` for feature icons and `muted` for meta icons. Functionally the same "outline" language as Ionicons, so the surfaces match.
- **The pin mark** is the one custom glyph: the logo's location pin (bright `pin` red fill, `night` hole). It appears as logo, bullet separator in the ticker, map markers, and a giant 7% opacity watermark behind the final CTA. Rule: the pin is the only decorative brandmark; do not invent secondary glyphs.
- Store badges use the official Apple and Google artwork (`public/badge-app-store.svg`, `public/badge-google-play.svg`) at equal heights; never redraw or restyle them.

---

## 6. Elevation and surfaces

Dark UIs get depth from light and color, not gray shadows:

1. **Hairline border first** (paper at 10%).
2. **Glow second**: colored shadows for hero objects, e.g. the phone: `0 60px 140px -30px rgba(232,50,63,0.4)` plus a deep black drop.
3. **Glass for floating objects**: `bg-white/6` + `backdrop-blur-md` + hairline border (the hero notification cards).
4. **Film grain** at 5% opacity over the whole page (tiny SVG turbulence tile, fixed, pointer-events none) so large dark fields never look flat.
5. Light cards on dark (vignettes) get real shadows: `0 20px 50px -12px rgba(0,0,0,0.7)` and a `ring-1 ring-black/5`.

---

## 7. Motion

Motion is the "living, breathing" layer. Budget it: one hero moment, quiet ambient loops, restrained reveals.

| Pattern | Spec |
|---|---|
| Entrance (page load) | opacity 0→1, y 28→0, 0.8s, ease `cubic-bezier(0.21, 0.47, 0.32, 0.98)`, staggered 80ms per element |
| Scroll reveal | same curve, 0.7s, y 32→0, triggered once at ~80px before viewport, stagger 80 to 120ms across siblings |
| The phone lift | scroll-scrubbed: rotateX 54°→0°, scale 0.88→1, perspective 1300px, origin top center, smoothed with a spring (stiffness ~130, damping ~26) |
| Ambient float | y ±12px, 6 to 9s, ease-in-out, infinite; desynchronize siblings with different durations and delays |
| Live pulse | ping ring: scale 1→2.6, opacity 0.6→0, 2.4s infinite over a solid 8px dot |
| Marquee | translateX 0→−50% over 45s linear infinite, content duplicated once, pause on hover |
| Micro-interactions | color/border transitions 300ms; hover states recolor borders or lift 2 to 4px, never both |

**Hard rule: everything above must respect reduced motion.** On the web: `useReducedMotion` for JS animation, a `prefers-reduced-motion` media block killing CSS loops. In the app: honor the OS reduce motion setting; the app's existing optimistic UI + skeleton loading philosophy is the motion equivalent there (feels instant, never blocks).

---

## 8. Component recipes

### Primary button
Pill (`rounded-full`), `pin` background, white text, weight 500 to 600, height 44 to 48px, horizontal padding 20 to 28px. Hover: 90% opacity. This is the only solid red element in any given view.

### Secondary button
Pill, transparent fill, 1px `white/20` border, paper text. Hover: `white/5` wash.

### Eyebrow
Mono, 11px, uppercase, +0.22em tracking, gold. Sits 16px above its heading, optionally preceded by the pin mark at 12 to 14px.

### Dark card
`card` background, `white/10` hairline, radius 16 to 24px, padding 24 to 28px. Hover: border becomes `pin/40` (feature cards) or `gold/40` (detail cards). Title 600, body in `muted-foreground`.

### Light "app" card (vignette)
`#FDFAF7`, radius 16px, padding 16px, real shadow + `ring-black/5`. Inside: maroon mono label 9px, `night` title 600 at 14px, neutral-500 meta 11px with a small icon. Rotate ±1 to 3° when stacked playfully; stack with edge overlap only, never covering text, back card in `#F2EAE2`.

### Live badge
Pulsing pin-red dot + mono uppercase "LIVE NOW" in pin. Card variant: `night/80 to 90` surface with a `pin/30 to 40` border.

### Time chip
Pill, `gold/15` fill, gold mono text 10px uppercase ("IN 45 MIN").

### Glass notification
`white/6` + blur + `white/10` border, radius 16px, width 224 to 256px, shadow 2xl. Contents follow the app's notification anatomy: source line (mono, tiny), title (600), meta (muted).

### Store badges
The official black badge artwork, both at ~52px height (they share a 3.375:1 ratio). Until a listing is live, its badge is a button that pops a gold mono "COMING SOON" bubble above itself for ~2.4s; once live, it becomes a plain link. Both are currently coming soon.

### Nav
Floating pill, `night/70` + heavy blur, hairline border, height 56px, max width 896px, 16px from top. Logo left, links center (hidden on mobile), primary button right.

### FAQ
Accordion rows divided by hairlines, question at 600, answer in `muted-foreground`, chevron rotates 180°.

---

## 9. Signature elements

Protect these; they are what makes Quad's site memorable:

1. **The phone lift.** The real app screenshot in an iPhone frame, lying back in 3D and standing up on scroll. One per page, in the hero. Never WebGL; CSS perspective only.
2. **The coordinates.** `36.1036° N · 79.5043° W · Elon University` as a mono eyebrow in the hero and the footer. It encodes "this is a real place."
3. **The ticker.** A slightly rotated (−1.2°) full-bleed marquee of real campus happenings on a maroon gradient strip, mono uppercase, pin marks as separators.
4. **The glowing pin.** Giant pin mark at 7% opacity behind the final CTA, inside a maroon radial glow.
5. **Light-on-dark vignettes.** Wherever the app's UI is depicted, it stays light, like a phone screen glowing against the night page.

---

## 10. Voice and copy rules

- **No em dashes, no en dashes, anywhere.** Use periods, commas, or colons. For meta separators use the middot: `Rudd Field · 4 min walk`. Avoid hyphenated compounds in headings; rephrase ("Going in one tap").
- Sentence case everywhere except mono labels (all caps) and the QUAD wordmark.
- Active voice, plain verbs, second person. "Follow your clubs," not "Clubs can be followed."
- Ground copy in the real campus: Rudd Field, McCrary Theatre, Moseley Center, Oak House, Lakeside. Never generic "State University."
- Honesty is a design constraint: no invented user counts, ratings, or partner logos. Product truths only (free, @elon.edu only, iOS + Android, quiet hours enforced on the server).
- Feature phrasing matches in-app vocabulary: "I'm going," "For You," "Save," "Follow."
- **Never say RSVP.** "I'm going" is a social signal: friends invite each other, and events show how many people are probably going. Student Involvement runs official RSVPs separately (on PhoenixConnect), so the word RSVP must not appear in any Quad copy. Use "going," "going count," "who's in."
- **The pilot is part of the story.** Fall 2026 launches with a preapproved lineup of organizations while Student Involvement measures impact; strong student support gives Quad the chance to expand to every club in spring. Expansion is not guaranteed, so never phrase it as a promise. Clubs register on PhoenixConnect first, then submit through the in-app form for approval. Copy may reference this (For Clubs note, FAQ, CTA line) but should frame it as momentum, not limitation.
- **All clubs are public.** There are no private clubs or follow requests right now; never depict approve/decline follow flows in copy or mock UI.
- The one permitted flourish per section is a single conversational beat ("never hear 'wait, that was tonight?' again"). Everything else states what the product does.
- Legal name: **Quad Connect** ("© 2026 Quad Connect. All rights reserved."), plus "Not affiliated with Elon University."

---

## 11. Accessibility floor

- Keyboard focus is always visible: 2px `pin` outline, 3px offset, on every interactive element.
- Reduced motion honored everywhere (see §7).
- Text contrast per the measured table in §2; never set small body text in `pin` on dark or white on `pin`.
- Alt text describes what the screenshot shows, not "screenshot."
- Decorative layers (glows, grain, dot grids, watermark pin) are `aria-hidden` and `pointer-events: none`.
- Semantic landmarks: one `h1`, sections with headings, `nav` labeled, accordion is real disclosure widgets (Radix).

---

## 12. Token reference

### CSS (site, `app/globals.css`)

```css
--night: #0a0406;      --paper: #f6efe9;
--maroon: #73000a;     --maroon-deep: #3d0410;
--pin: #e8323f;        --gold: #c9a55c;
--card: #150a0e;       --muted: #241318;
--muted-foreground: #b39a9d;
--border: rgba(246, 239, 233, 0.10);
--radius: 0.75rem;     /* cards 1rem to 1.5rem, pills 9999px */
```

### React Native (drop-in palette for the app's theme)

```ts
// Quad brand palette (see DESIGN_GUIDE.md)
export const QUAD_COLORS = {
  // brand
  maroon: "#73000A",      // primary / default theme color
  pin: "#E8323F",         // live, going, destructive accents
  gold: "#C9A55C",        // fine details only

  // light theme surfaces
  canvasLight: "#FBF7F3",
  cardLight: "#FDFAF7",
  cardLightAlt: "#F2EAE2",
  textOnLight: "#0A0406",

  // dark theme (future) surfaces
  night: "#0A0406",
  cardDark: "#150A0E",
  insetDark: "#241318",
  textOnDark: "#F6EFE9",
  mutedOnDark: "#B39A9D",
  borderOnDark: "rgba(246,239,233,0.10)",
};
```

Typography in the app stays on the platform system font with the existing scale (base 14; meta 11 to 12; subheads 17 to 18; titles 20 to 24; display 28 to 32) and the weight table from §3.
