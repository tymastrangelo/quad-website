/* Two faces of one site. "onby" is the app for any campus, in onby cobalt.
   "elon" is onby for Elon, in Elon’s color, the way the app swaps its tint
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
  does: { title: string; body: string }[];
  also: string[];
  /* How onby fits a school's setup. Only the any-campus page has it. */
  fit?: { heading: string; intro: string; modes: { title: string; body: string }[]; note: string };
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
    "onby puts every event and org at your school in one app. It works with the events system your campus already uses, or runs on its own if there isn’t one.",
  screenshot: "/screens/onby-home.png",
  screenshotAlt:
    "The onby Home tab: a live event happening now, what’s up next for you, and today’s events from the orgs you follow",
  where: "For any campus.",
  lead: "One app for every event and org at your school. onby works with the system your campus already uses, or runs on its own if there isn’t one.",
  does: [
    {
      title: "A feed of your orgs",
      body: "Follow the orgs you care about and their events come to you, soonest first. Nothing from orgs you don’t follow.",
    },
    {
      title: "Reminders you set yourself",
      body: "Save an event and you get a nudge before it starts. Turn on the morning digest if you want one note a day with what’s on.",
    },
    {
      title: "A map of where things are",
      body: "Every event is on a campus map with walking directions, because finding the room is half the battle.",
    },
  ],
  also: [
    "Say I’m going and see who else is in.",
    "Send any event to your calendar.",
    "Invite a friend to an event from inside the app.",
    "Choose which notifications you get, with quiet hours enforced on the server.",
    "School email only. No public profiles.",
    "Every org has a page with its upcoming events, meeting times and how to reach it.",
  ],
  fit: {
    heading: "How it fits your school",
    intro: "Every campus starts in a different place. Some already have an events system that’s missing a good mobile app. Some don’t have one at all. onby is built to work either way.",
    modes: [
      {
        title: "Alongside what you have",
        body: "If your school already uses an events platform, onby reads the public events from it and adds what’s missing: a real app, reminders, a map. Orgs keep posting where they do today, nothing is written back, and every event links to the original.",
      },
      {
        title: "On its own",
        body: "If there’s nothing in place yet, onby can be your campus’s events home, running on its own backend. Orgs register and manage their pages in the app, and campus staff get insights and announcements to keep things moving.",
      },
    ],
    note: "Either way, onby carries your school’s name and colors, and only your school email gets in.",
  },
  orgs: {
    heading: "If you run an org",
    body: "There’s nothing new to learn. If your school already has an events system, keep posting there, and students who follow you see your events in onby with a reminder before they start. If onby is your campus’s system, register your org in the app and you’re set. Either way, if you’d rather not be in it, tell me and you’re out the same day.",
    pilot: "onby comes to one campus at a time, and I work with each school to set it up the way that fits. Want it at yours? Find your school below and leave your email.",
  },
  steps: ["Sign in with your school email.", "Follow a few orgs.", "Show up."],
  faq: [
    {
      q: "Which campuses is onby on?",
      a: "It comes to one campus at a time. Search for your school above, and if it isn’t there yet, leave your school email and I’ll reach out.",
    },
    {
      q: "My school already has an events system. Does onby replace it?",
      a: "No, it works alongside it. Your school’s system is still where orgs register, post events and take sign-ups. onby reads the public events, never writes anything back, and links to the original every time.",
    },
    {
      q: "What if my school doesn’t have one?",
      a: "Then onby can be it. It runs on its own backend, so your campus gets org pages, notifications and admin tools without bringing in anything else.",
    },
    {
      q: "I work at a school. How do we get started?",
      a: "Find your school above and leave your email, or write to me at tmastrangelo@elon.edu. We’ll look at what you use today and decide together whether onby plugs into it or runs on its own.",
    },
    {
      q: "How does my org get on it?",
      a: "If onby reads from your school’s events system, there’s nothing to set up: your public events show up on their own, and I won’t ask you to post twice. If onby is your campus’s system, register your org in the app.",
    },
    {
      q: "Who can use it?",
      a: "Students at a campus onby runs on, with their school email. Signup is checked on the server, so each campus stays its own community.",
    },
    { q: "Does it cost anything?", a: "No. No ads, no paid tier." },
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
      a: "App Store and Google Play, once your campus is on onby.",
    },
  ],
  cta: {
    body: "Free, on iPhone and Android.",
    fine: "One campus at a time",
  },
  footer: {
    blurb: "Built by a student, for students. Everything happening on campus. Come on by.",
    note: "onby works with the events system your campus already uses, or runs on its own if there isn’t one.",
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
    "onby pulls your orgs’ PhoenixCONNECT events into one feed and reminds you before they start.",
  screenshot: "/screens/elon-home.png",
  screenshotAlt:
    "The onby Home tab for Elon in Elon’s colors: Research Help Desk live at Belk Library, Men’s Basketball vs UNCG up next at Schar Center, and today’s events",
  where: "Elon University.",
  lead: "onby pulls your orgs’ PhoenixCONNECT events into one feed and reminds you before they start.",
  does: [
    {
      title: "A feed of your orgs",
      body: "Follow the orgs you care about and their PhoenixCONNECT events come to you, soonest first. Nothing from orgs you don’t follow.",
    },
    {
      title: "Reminders you set yourself",
      body: "Save an event and you get a nudge before it starts. Turn on the morning digest if you want one note a day with what’s on at Elon.",
    },
    {
      title: "A map of where things are",
      body: "Every event is on a campus map with walking directions, because finding the right room in Moseley is half the battle.",
    },
  ],
  also: [
    "Say I’m going and see who else is in.",
    "Send any event to your calendar.",
    "Invite a friend to an event from inside the app.",
    "Choose which notifications you get, with quiet hours enforced on the server.",
    "@elon.edu only. No public profiles.",
    "Read only. Events come from PhoenixCONNECT and link back to it.",
  ],
  orgs: {
    heading: "If you run an org",
    body: "You don’t have to do anything. Keep posting events on PhoenixCONNECT like you already do. Students who follow you see them in onby, with a reminder before they start, and every event links back to your PhoenixCONNECT page. If you’d rather not be in it, tell me and your org is out the same day.",
    pilot: "onby starts at Elon with a set of approved organizations. Everything else is on PhoenixCONNECT, one tap away, and the list can grow from there.",
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
      a: "There’s nothing to set up. If your org posts public events on PhoenixCONNECT and is part of the pilot, they show up. I don’t take event submissions and I won’t ask you to post twice.",
    },
    {
      q: "Why do I only see some orgs?",
      a: "onby starts with a set of approved organizations so I can measure how it goes. Everything else is on PhoenixCONNECT, one tap away, and the list can grow from there.",
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
      a: "App Store and Google Play.",
    },
  ],
  cta: {
    body: "Free, on iPhone and Android.",
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
