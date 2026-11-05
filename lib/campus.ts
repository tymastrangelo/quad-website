/* Two faces of one site. "onby" is the app for any campus, in onby cobalt.
   "elon" is onby for Elon, in Elon's color, the way the app swaps its tint
   per school. Every section reads its copy from here; nothing campus
   specific lives in a component. Voice: Tyler, first person, plain. */

export type CampusKey = "onby" | "elon";

export type Campus = {
  key: CampusKey;
  path: string;
  toggle: string;
  navSuffix?: string;
  title: string;
  description: string;
  screenshot: string;
  screenshotAlt: string;
  where: string;
  lead: string;
  signIn: string;
  does: { title: string; body: string }[];
  also: string[];
  orgs: { heading: string; body: string; pilot: string };
  steps: string[];
  faq: { q: string; a: string }[];
  cta: { body: string; fine: string };
  footer: { blurb: string; note: string; affiliation: string };
};

const onby: Campus = {
  key: "onby",
  path: "/",
  toggle: "onby",
  title: "onby | Everything happening on campus",
  description:
    "onby shows you what your orgs are doing this week and reminds you before it starts. One campus at a time, starting spring 2027.",
  screenshot: "/screens/onby-home.png",
  screenshotAlt:
    "The onby Home tab: a live event happening now, what's up next for you, and today's events from the orgs you follow",
  where: "Any campus. Starting spring 2027.",
  lead: "onby shows you what your orgs are doing this week and reminds you before it starts. That's the whole idea.",
  signIn: "Free. Sign in with your school email.",
  does: [
    {
      title: "A feed of your orgs",
      body: "Follow the orgs you care about and their events come to you, soonest first. Nothing from orgs you don't follow.",
    },
    {
      title: "Reminders you set yourself",
      body: "Save an event and you get a nudge before it starts. Turn on the morning digest if you want one note a day with what's on.",
    },
    {
      title: "A map of where things are",
      body: "Every event is on a campus map with walking directions, because finding the room is half the battle.",
    },
  ],
  also: [
    "Say I'm going and see who else is in.",
    "Send any event to your calendar.",
    "Invite a friend to an event from inside the app.",
    "Choose which notifications you get, with quiet hours enforced on the server.",
    "School email only. No public profiles.",
    "Read only. Events come from the system your school already uses and link back to it.",
  ],
  orgs: {
    heading: "If you run an org",
    body: "You don't have to do anything. Keep posting events where you already do. Students who follow you see them in onby, with a reminder before they start, and every event links back to your page. If you'd rather not be in it, tell me and your org is out the same day.",
    pilot: "onby launches one campus at a time, starting spring 2027. If you want it at yours, find your school below and leave your email.",
  },
  steps: ["Sign in with your school email.", "Follow a few orgs.", "Show up."],
  faq: [
    {
      q: "Which campuses is onby on?",
      a: "One at a time, starting spring 2027. Search for your school above. If it isn't there yet, leave your school email and I'll get in touch.",
    },
    {
      q: "Who can use it?",
      a: "Students at a campus onby runs on, with their school email. Signup is checked on the server, so each campus stays its own community.",
    },
    { q: "Does it cost anything?", a: "No. No ads, no paid tier." },
    {
      q: "Does it replace what my school already uses?",
      a: "No. Your school's events system is still where orgs register, post events and take sign-ups. onby reads the public events, never writes anything back, and links to the original every time.",
    },
    {
      q: "How does my org get on it?",
      a: "There's nothing to set up. If your org posts public events in your school's system and your campus is on onby, they show up. I don't take event submissions and I won't ask you to post twice.",
    },
    {
      q: "Will it spam me?",
      a: "Every notification type has its own switch, quiet hours are enforced on the server, reminders only fire for events you saved, and the morning digest is off until you turn it on.",
    },
    {
      q: "What do you collect?",
      a: "Public event and org information, and what you save or follow inside the app. No rosters, no attendance. You can block people and delete your account from inside the app.",
    },
    {
      q: "Where do I get it?",
      a: "App Store and Google Play, when your campus launches. Check back here.",
    },
  ],
  cta: {
    body: "Free, on iPhone and Android, starting spring 2027.",
    fine: "One campus at a time",
  },
  footer: {
    blurb: "Built by a student, for students. Everything happening on campus. Come on by.",
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
    "onby pulls your orgs' PhoenixCONNECT events into one feed and reminds you before they start. Spring 2027 pilot at Elon.",
  screenshot: "/screens/elon-home.png",
  screenshotAlt:
    "The onby Home tab for Elon in Elon's colors: Research Help Desk live at Belk Library, Men's Basketball vs UNCG up next at Schar Center, and today's events",
  where: "Elon University. Spring 2027.",
  lead: "onby pulls your orgs' PhoenixCONNECT events into one feed and reminds you before they start. That's the whole idea.",
  signIn: "Free. Sign in with your @elon.edu email.",
  does: [
    {
      title: "A feed of your orgs",
      body: "Follow the orgs you care about and their PhoenixCONNECT events come to you, soonest first. Nothing from orgs you don't follow.",
    },
    {
      title: "Reminders you set yourself",
      body: "Save an event and you get a nudge before it starts. Turn on the morning digest if you want one note a day with what's on at Elon.",
    },
    {
      title: "A map of where things are",
      body: "Every event is on a campus map with walking directions, because finding the right room in Moseley is half the battle.",
    },
  ],
  also: [
    "Say I'm going and see who else is in.",
    "Send any event to your calendar.",
    "Invite a friend to an event from inside the app.",
    "Choose which notifications you get, with quiet hours enforced on the server.",
    "@elon.edu only. No public profiles.",
    "Read only. Events come from PhoenixCONNECT and link back to it.",
  ],
  orgs: {
    heading: "If you run an org",
    body: "You don't have to do anything. Keep posting events on PhoenixCONNECT like you already do. Students who follow you see them in onby, with a reminder before they start, and every event links back to your PhoenixCONNECT page. If you'd rather not be in it, tell me and your org is out the same day.",
    pilot: "This spring onby starts at Elon with a set of approved organizations while I measure how it goes. Everything else is on PhoenixCONNECT, one tap away, and the list can grow from there.",
  },
  steps: ["Sign in with your @elon.edu email.", "Follow a few orgs.", "Show up."],
  faq: [
    {
      q: "Who can use it?",
      a: "Anyone with an @elon.edu email. Signup is checked on the server, so it stays Elon only.",
    },
    { q: "Does it cost anything?", a: "No. No ads, no paid tier." },
    {
      q: "Does it replace PhoenixCONNECT?",
      a: "No. PhoenixCONNECT is still where orgs register, post events and take sign-ups. onby reads the public events, never writes anything back, and links to PhoenixCONNECT every time.",
    },
    {
      q: "How does my org get on it?",
      a: "There's nothing to set up. If your org posts public events on PhoenixCONNECT and is part of the pilot, they show up. I don't take event submissions and I won't ask you to post twice.",
    },
    {
      q: "Why do I only see some orgs?",
      a: "Spring 2027 is a pilot. It starts with a set of approved organizations so I can measure how it goes. Everything else is on PhoenixCONNECT, one tap away, and the list can grow from there.",
    },
    {
      q: "Will it spam me?",
      a: "Every notification type has its own switch, quiet hours are enforced on the server, reminders only fire for events you saved, and the morning digest is off until you turn it on.",
    },
    {
      q: "What do you collect?",
      a: "Public event and org information from PhoenixCONNECT, and what you save or follow inside the app. No rosters, no attendance. You can block people and delete your account from inside the app.",
    },
    {
      q: "Where do I get it?",
      a: "App Store and Google Play for the spring 2027 start. Check back here, or an org you follow will tell you.",
    },
  ],
  cta: {
    body: "Free, on iPhone and Android, spring 2027.",
    fine: "Elon University",
  },
  footer: {
    blurb: "Built at Elon, by a student, for students. Everything happening on campus. Come on by.",
    note: "onby is read only. Events come from PhoenixCONNECT and link back to it.",
    affiliation: "Not affiliated with Elon University.",
  },
};

export const CAMPUSES: Record<CampusKey, Campus> = { onby, elon };

export function campusFromPath(pathname: string): CampusKey {
  return pathname.startsWith("/elon") ? "elon" : "onby";
}
