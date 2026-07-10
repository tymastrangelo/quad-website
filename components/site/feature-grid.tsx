import {
  BellRing,
  Bookmark,
  CalendarCheck,
  Newspaper,
  ShieldCheck,
  UserPlus,
} from "lucide-react";
import { Reveal } from "./reveal";
import { SectionHeading } from "./section-heading";

const ITEMS = [
  {
    icon: CalendarCheck,
    title: "Going in one tap",
    body: "Say \"I'm going\" and it's done. See who else is in, watch the going count climb, and send it to your calendar.",
  },
  {
    icon: BellRing,
    title: "Reminders, not spam",
    body: "Pick exactly what pings you and set quiet hours. Quad respects them, enforced on the server.",
  },
  {
    icon: Bookmark,
    title: "Save it for later",
    body: "Torn between two Friday plans? Keep a shortlist and decide when you're ready.",
  },
  {
    icon: Newspaper,
    title: "A feed without noise",
    body: "Posts and announcements only from clubs you follow. Unfollow, and it's gone.",
  },
  {
    icon: UserPlus,
    title: "Bring your people",
    body: "Invite friends to any event inside the app. Better than forwarding a flyer.",
  },
  {
    icon: ShieldCheck,
    title: "Closed to the public",
    body: "Verified @elon.edu accounts only. No public profiles, no outside eyes on your campus.",
  },
];

export function FeatureGrid() {
  return (
    <section className="relative mx-auto max-w-6xl px-6 pb-28 md:pb-36">
      <SectionHeading
        eyebrow="And everything else"
        title="The details students actually feel"
        sub="Quad is fast, quiet, and respectful of your attention, because it was built by a student who uses it every day."
      />
      <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {ITEMS.map((item, i) => (
          <Reveal key={item.title} delay={(i % 3) * 0.08}>
            <div className="group h-full rounded-2xl border border-white/10 bg-card p-6 transition-colors duration-300 hover:border-gold/40">
              <item.icon className="h-5 w-5 text-gold" aria-hidden="true" />
              <h3 className="mt-4 font-display text-lg font-semibold">
                {item.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {item.body}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
