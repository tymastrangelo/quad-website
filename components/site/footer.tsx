import Image from "next/image";
import { OnbyWordmark } from "./brand-mark";

const COLUMNS = [
  {
    heading: "Product",
    links: [
      { label: "The app", href: "/#app" },
      { label: "For orgs", href: "/#orgs" },
      { label: "FAQ", href: "/#faq" },
      { label: "Download", href: "/#download" },
    ],
  },
  {
    heading: "Support",
    links: [
      { label: "tmastrangelo@elon.edu", href: "mailto:tmastrangelo@elon.edu" },
      { label: "Privacy policy", href: "/privacy" },
      { label: "Terms of service", href: "/terms" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="border-t border-line bg-surface">
      <div className="mx-auto flex max-w-6xl flex-col gap-12 px-6 py-16 md:flex-row md:justify-between">
        <div className="flex max-w-xs flex-col gap-4">
          <div className="flex items-center gap-3">
            <Image
              src="/onby-icon.png"
              alt=""
              width={36}
              height={36}
              className="size-9 rounded-[10px]"
            />
            <OnbyWordmark />
          </div>
          <p className="text-sm text-ink-soft">
            Everything happening on campus. Come on by. Built at Elon, by a
            student, for students.
          </p>
          <p className="text-xs text-ink-soft/80">
            onby is read only. Events come from PhoenixCONNECT and link back
            to it.
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
                  className="text-sm text-ink-soft transition-colors hover:text-ink"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          ))}
        </div>
      </div>
      <div className="border-t border-line">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-6 py-6 text-xs text-ink-soft md:flex-row md:justify-between">
          <p>© 2026 Quad Software LLC. All rights reserved.</p>
          <p>Not affiliated with Elon University.</p>
        </div>
      </div>
    </footer>
  );
}
