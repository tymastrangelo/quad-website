import {
  BellRing,
  Bookmark,
  CalendarCheck,
  Link2,
  ShieldCheck,
  UserPlus,
} from "lucide-react";
import { Reveal } from "./reveal";
import { SectionHeading } from "./section-heading";

const ITEMS = [
  {
    icon: CalendarCheck,
    title: "Going in one tap",
    body: "Say \"I'm going\" and it's done. See who else is in, and send it to your calendar.",
  },
  {
    icon: BellRing,
    title: "Reminders, not spam",
    body: "Pick exactly what pings you and set quiet hours. onby respects them, enforced on the server.",
  },
  {
    icon: Bookmark,
    title: "Save it for later",
    body: "Torn between two Friday plans? Keep a shortlist and decide when you're ready.",
  },
  {
    icon: Link2,
    title: "Straight from PhoenixCONNECT",
    body: "Events come from what orgs already posted. Every one links back to PhoenixCONNECT to join or register.",
  },
  {
    icon: UserPlus,
    title: "Bring your people",
    body: "Invite friends to any event inside the app. Better than forwarding a flyer.",
  },
  {
    icon: ShieldCheck,
    title: "Closed to the public",
    body: "Verified @elon.edu accounts only. No public profiles, no rosters, no outside eyes on your campus.",
  },
];

export function FeatureGrid() {
  return (
    <section className="relative mx-auto max-w-6xl px-6 pb-28 md:pb-36">
      <SectionHeading
        eyebrow="And everything else"
        title="The details students actually feel"
        sub="onby is fast, quiet and respectful of your attention, because it was built by a student who uses it every day."
      />
      <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {ITEMS.map((item, i) => (
          <Reveal key={item.title} delay={(i % 3) * 0.08}>
            <div className="group h-full rounded-[22px] border border-line bg-surface p-6 shadow-soft transition-[border-color,transform] duration-300 hover:-translate-y-0.5 hover:border-cobalt/40">
              <span className="inline-flex size-10 items-center justify-center rounded-xl bg-cobalt-soft text-cobalt">
                <item.icon className="h-5 w-5" aria-hidden="true" />
              </span>
              <h3 className="font-display mt-4 text-lg font-extrabold tracking-tight">
                {item.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                {item.body}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
