import { QuadWordmark } from "./pin-logo";

const COLUMNS = [
  {
    heading: "Product",
    links: [
      { label: "The app", href: "/#app" },
      { label: "For clubs", href: "/#clubs" },
      { label: "FAQ", href: "/#faq" },
      { label: "Download", href: "/#download" },
    ],
  },
  {
    heading: "Support",
    links: [
      { label: "Feedback (in the app)", href: "/#faq" },
      { label: "Privacy policy", href: "/privacy" },
      { label: "Terms of service", href: "/terms" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="border-t border-white/10">
      <div className="mx-auto flex max-w-6xl flex-col gap-12 px-6 py-16 md:flex-row md:justify-between">
        <div className="flex max-w-xs flex-col gap-4">
          <QuadWordmark />
          <p className="text-sm text-muted-foreground">
            The home for everything happening at Elon University. Built on
            campus, by a student, for students.
          </p>
          <p className="font-mono text-[11px] tracking-[0.18em] text-paper/40 uppercase">
            36.1036° N · 79.5043° W
          </p>
        </div>
        <div className="flex gap-16">
          {COLUMNS.map((col) => (
            <nav key={col.heading} aria-label={col.heading} className="flex flex-col gap-3">
              <p className="eyebrow">{col.heading}</p>
              {col.links.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-sm text-paper/70 transition-colors hover:text-paper"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          ))}
        </div>
      </div>
      <div className="border-t border-white/5">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-6 py-6 text-xs text-paper/40 md:flex-row md:justify-between">
          <p>© 2026 Quad Connect. All rights reserved.</p>
          <p>Not affiliated with Elon University.</p>
        </div>
      </div>
    </footer>
  );
}
