/* Two faces of one site. "onby" is the app for any campus, in onby cobalt.
   "elon" is onby for Elon, in Elon's color, the way the app swaps its tint
   per school. Every section reads its copy from here; nothing campus
   specific lives in a component. */

export type CampusKey = "onby" | "elon";

type Card = { label: string; title: string; meta: string };

export type Campus = {
  key: CampusKey;
  path: string;
  toggle: string;
  navSuffix?: string;
  title: string;
  description: string;
  screenshot: string;
  screenshotAlt: string;
  eyebrow: string;
  lead: string;
  signIn: string;
  cards: { next: Card; live: Card; saved: Card };
  ticker: string[];
  showcase: {
    sub: string;
    forYou: [Card, Card];
    live: Card;
    digestCount: string;
    map: Card;
    bodies: [string, string, string];
  };
  features: { source: { title: string; body: string }; closed: string };
  orgs: {
    heading: string;
    lead: string;
    bullets: string[];
    pilotEyebrow: string;
    pilotBody: string;
    mock: { initials: string; name: string; sub: string; rows: [Card, Card]; source: string };
  };
  steps: { signIn: { title: string; body: string }; follow: string };
  faq: { q: string; a: string }[];
  cta: { eyebrow: string; body: string; fine: string };
  footer: { blurb: string; note: string; affiliation: string };
};

const onby: Campus = {
  key: "onby",
  path: "/",
  toggle: "onby",
  title: "onby | Everything happening on campus",
  description:
    "onby puts your campus's events and organizations in one feed built around you. Save what you want to catch, get a nudge before it starts, and come on by. One campus at a time, starting spring 2027.",
  screenshot: "/screens/onby-home.png",
  screenshotAlt:
    "The onby Home tab: a live event happening now, what's up next for you, and today's events from the orgs you follow",
  eyebrow: "Any campus · Coming spring 2027",
  lead:
    "Your campus's events and orgs in one feed built around you. Save what you want to catch, get a nudge before it starts, and stop hearing “wait, that was tonight?”",
  signIn: "Free for students. Sign in with your school email.",
  cards: {
    next: { label: "onby · in 1 hour", title: "Hack night", meta: "Computing club · Innovation lab" },
    live: { label: "Live now", title: "Open mic night", meta: "Student union · until 9:00 PM" },
    saved: { label: "Saved · reminder set", title: "Sunrise yoga", meta: "Campus Rec · the lawn · Tomorrow 7:00 AM" },
  },
  ticker: [
    "Sunrise yoga on the lawn",
    "Open mic night at the student union",
    "Hack night with the computing club",
    "Run club at sunrise",
    "Homecoming tailgate",
    "Trivia night",
    "Club swim open swim",
    "Movie on the quad",
    "A cappella showcase",
    "Farmers market on the quad",
  ],
  showcase: {
    sub: "Flyers, newsletters and six group chats, replaced by one place that knows what's going on.",
    forYou: [
      { label: "For you · you follow the outing club", title: "Sunrise hike", meta: "Trailhead lot · Sat 6:30 AM" },
      { label: "Because you saved a run", title: "Run club sunrise loop", meta: "Student union steps · Wed 6:30 AM" },
    ],
    live: { label: "Starts in 1 hour", title: "Men's basketball", meta: "The arena · you're going" },
    digestCount: "6 events",
    map: { label: "", title: "Open mic night", meta: "Student union · 4 min walk" },
    bodies: [
      "Follow your orgs and For You puts their events first, weighted by what you save and show up to. No engagement bait. Just what's on.",
      "Save an event and onby reminds you before it starts. Turn on the daily digest and get one quiet note each morning with what's happening today.",
      "Every event on a campus map, with what's near you highlighted and walking directions a tap away. Never wander the student center looking for the room again.",
    ],
  },
  features: {
    source: {
      title: "Straight from your campus",
      body: "Events come from the system your school already uses. Orgs post once, where they always have, and every event links back there.",
    },
    closed: "Verified school email accounts only. No public profiles, no rosters, no outside eyes on your campus.",
  },
  orgs: {
    heading: "Nothing new to run",
    lead:
      "onby only does the finding. Orgs keep posting events where they already do, and students who follow them see those events in a feed built around them, with reminders before they start.",
    bullets: [
      "Your events show up from the system your campus already uses. Nothing to post twice, nothing new to manage.",
      "Every event links back to your org's page to join, register or learn more.",
      "Students follow your org and get a reminder before the events they save.",
      "Want out? Ask, and your org is left out the same day.",
    ],
    pilotEyebrow: "One campus at a time",
    pilotBody:
      "onby launches one campus at a time, starting spring 2027. If you want it at yours, write to the address in the footer and tell me what your students use today.",
    mock: {
      initials: "RC",
      name: "Run Club",
      sub: "Club sport",
      rows: [
        { label: "Saved", title: "Sunrise loop", meta: "Wed 6:30 AM · Student union steps" },
        { label: "Save", title: "Long run", meta: "Sat 8:00 AM · Rec center" },
      ],
      source: "From your campus's events system · updated every 2 hours",
    },
  },
  steps: {
    signIn: {
      title: "Sign in with your school email",
      body: "onby is a closed campus community. Your school email is the only key, verified at the door and enforced on the server.",
    },
    follow: "Every org in onby is public, so follow anything that catches your eye. Each follow teaches your For You feed what matters.",
  },
  faq: [
    { q: "Which campuses is onby on?", a: "onby launches one campus at a time, starting spring 2027. If you want it at yours, write to the address in the footer and tell me what your students use today." },
    { q: "Who can use it?", a: "Students at a campus onby runs on, with their school email. Signup is verified on the server, so each community stays genuinely its own." },
    { q: "Does it cost anything?", a: "No. onby is free for students. No ads, no premium tier, no catch." },
    { q: "Does onby replace what my school already uses?", a: "No. Your school's events system stays the place where orgs register, post events and take registrations. onby only does the finding: it reads the public events orgs already posted, never writes anything back, and every event links back." },
    { q: "How does my organization get on onby?", a: "There is nothing to set up. If your org posts public events in your school's system and your campus is on onby, they show up on their own. onby does not take event submissions, and it does not ask orgs to post twice." },
    { q: "Will it blow up my notifications?", a: "Only if you want it to. Every notification type has its own toggle, quiet hours are enforced on the server, event reminders only fire for events you saved, and the daily digest is opt in." },
    { q: "What about my privacy?", a: "onby receives only public event and organization information. No rosters, no memberships, no attendance. What you save stays in onby. You can block people and delete your account, along with everything it knows about you, from inside the app." },
    { q: "Where can I get it?", a: "onby comes to the App Store and Google Play when your campus launches, starting spring 2027. Check back here." },
  ],
  cta: {
    eyebrow: "Free · iOS & Android · your school email",
    body: "Everything happening on your campus, in your pocket. Get onby and never hear “wait, that was tonight?” again.",
    fine: "Spring 2027 · One campus at a time",
  },
  footer: {
    blurb: "Everything happening on campus. Come on by. Built by a student, for students.",
    note: "onby is read only. Events come from the system your campus already uses and link back to it.",
    affiliation: "Not affiliated with any university.",
  },
};

const elon: Campus = {
  key: "elon",
  path: "/elon",
  toggle: "for Elon",
  navSuffix: "for Elon",
  title: "onby for Elon | Everything happening on campus",
  description:
    "onby for Elon puts your orgs' PhoenixCONNECT events in one feed built around you. Save what you want to catch, get a nudge before it starts, and come on by. Spring 2027 pilot.",
  screenshot: "/screens/elon-home.png",
  screenshotAlt:
    "The onby Home tab for Elon in Elon's colors: Research Help Desk live at Belk Library, Men's Basketball vs UNCG up next at Schar Center, and today's events",
  eyebrow: "Elon University · Spring 2027",
  lead:
    "Your orgs' events from PhoenixCONNECT in one feed built around you. Save what you want to catch, get a nudge before it starts, and stop hearing “wait, that was tonight?”",
  signIn: "Free for Elon students. Sign in with your @elon.edu email.",
  cards: {
    next: { label: "onby · in 1 hour", title: "College Coffee", meta: "Phi Beta Kappa Commons · Tue 9:40 AM" },
    live: { label: "Live now", title: "Festival of Lights and Luminaries", meta: "Under the Oaks · until 8:00 PM" },
    saved: { label: "Saved · reminder set", title: "Sunrise yoga", meta: "Campus Rec · Lake Mary Nell · Tomorrow 7:00 AM" },
  },
  ticker: [
    "Festival of Lights and Luminaries under the oaks",
    "Sunrise yoga at Lake Mary Nell",
    "ElonTHON dance marathon in Alumni Gym",
    "ElonRUNS sunrise run from Moseley",
    "Men's Basketball vs UNCG at Schar Center",
    "Open mic night at Oak House",
    "College Coffee, Tuesday 9:40",
    "Club Swimming open swim at Beck Pool",
    "Homecoming at Rhodes Stadium",
    "Hack night in Innovation Hall",
    "Spring Organization Fair in Moseley",
    "Trivia night with SUB",
  ],
  showcase: {
    sub: "Flyers, newsletters and six group chats, replaced by one place that knows what's going on at Elon.",
    forYou: [
      { label: "For you · you follow ElonTHON", title: "ElonTHON dance marathon", meta: "Alumni Gym · Sat 10:00 AM" },
      { label: "Because you saved sunrise yoga", title: "ElonRUNS sunrise run", meta: "Moseley Center steps · Wed 6:30 AM" },
    ],
    live: { label: "Starts in 1 hour", title: "Men's Basketball vs UNCG", meta: "Schar Center · you're going" },
    digestCount: "6 events",
    map: { label: "", title: "Festival of Lights and Luminaries", meta: "Under the Oaks · 4 min walk" },
    bodies: [
      "Follow your orgs and For You puts their events first, weighted by what you save and show up to. No engagement bait. Just what's on.",
      "Save an event and onby reminds you before it starts. Turn on the daily digest and get one quiet note each morning with what's happening today.",
      "Every event on a campus map, with what's near you highlighted and walking directions a tap away. Never wander Moseley looking for the room again.",
    ],
  },
  features: {
    source: {
      title: "Straight from PhoenixCONNECT",
      body: "Events come from what orgs already posted. Every one links back to PhoenixCONNECT to join or register.",
    },
    closed: "Verified @elon.edu accounts only. No public profiles, no rosters, no outside eyes on your campus.",
  },
  orgs: {
    heading: "Nothing new to run",
    lead:
      "onby only does the finding. You keep posting events on PhoenixCONNECT, and students who follow you see them in a feed built around them, with reminders before they start.",
    bullets: [
      "Your events show up from PhoenixCONNECT. Nothing to post twice, nothing new to manage.",
      "Every event links back to your PhoenixCONNECT page to join, register or learn more.",
      "Students follow your org and get a reminder before the events they save.",
      "Want out? Ask, and your org is left out the same day.",
    ],
    pilotEyebrow: "Spring 2027 pilot",
    pilotBody:
      "onby starts at Elon with a set of approved organizations while its impact is measured through the spring. Everything else stays on PhoenixCONNECT, one tap away, and the feed can grow from there.",
    mock: {
      initials: "CS",
      name: "Club Swimming",
      sub: "Elon University · Club sport",
      rows: [
        { label: "Saved", title: "Open swim", meta: "Tonight 8:00 PM · Beck Pool" },
        { label: "Save", title: "Practice", meta: "Mon 7:00 PM · Beck Pool" },
      ],
      source: "From PhoenixCONNECT · updated every 2 hours",
    },
  },
  steps: {
    signIn: {
      title: "Sign in with your @elon.edu",
      body: "onby is a closed campus community. Your Elon email is the only key, verified at the door and enforced on the server.",
    },
    follow: "Every org in onby is public, so follow anything that catches your eye. Each follow teaches your For You feed what matters.",
  },
  faq: [
    { q: "Who can use onby at Elon?", a: "Anyone with an @elon.edu email address. Signup is verified on the server, so the community stays genuinely Elon only." },
    { q: "Does it cost anything?", a: "No. onby is free for everyone on campus. No ads, no premium tier, no catch." },
    { q: "Does onby replace PhoenixCONNECT?", a: "No. PhoenixCONNECT stays the place where organizations register, post events and take registrations. onby only does the finding: it reads the public events orgs already posted, never writes anything back, and every event links to PhoenixCONNECT." },
    { q: "How does my organization get on onby?", a: "There is nothing to set up. If your org posts public events on PhoenixCONNECT and is part of the pilot, they show up in onby on their own. onby does not take event submissions, and it does not ask orgs to post twice." },
    { q: "Why do I only see some orgs?", a: "Spring 2027 is onby's pilot semester at Elon. It starts with a set of approved organizations so its impact can be measured through the spring. Everything else is on PhoenixCONNECT, one tap away, and the list can grow from there." },
    { q: "Will it blow up my notifications?", a: "Only if you want it to. Every notification type has its own toggle, quiet hours are enforced on the server, event reminders only fire for events you saved, and the daily digest is opt in." },
    { q: "What about my privacy?", a: "onby receives only public event and organization information, the same things already visible on PhoenixCONNECT. No rosters, no memberships, no attendance. What you save stays in onby. You can block people and delete your account, along with everything it knows about you, from inside the app." },
    { q: "Where can I get it?", a: "onby comes to the App Store and Google Play for the spring 2027 start. Check back here, or follow an org that will tell you." },
  ],
  cta: {
    eyebrow: "Free · iOS & Android · @elon.edu",
    body: "Everything happening at Elon, in your pocket. Get onby and never hear “wait, that was tonight?” again.",
    fine: "Spring 2027 · Elon University",
  },
  footer: {
    blurb: "Everything happening at Elon. Come on by. Built on campus, by a student, for students.",
    note: "onby is read only. Events come from PhoenixCONNECT and link back to it.",
    affiliation: "Not affiliated with Elon University.",
  },
};

export const CAMPUSES: Record<CampusKey, Campus> = { onby, elon };

export function campusFromPath(pathname: string): CampusKey {
  return pathname.startsWith("/elon") ? "elon" : "onby";
}
