import Link from "next/link";
import { Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { OnbyWordmark } from "./brand-mark";

const LINKS = [
  { href: "/#app", label: "The app" },
  { href: "/#orgs", label: "For orgs" },
  { href: "/#faq", label: "FAQ" },
];

export function Navbar() {
  return (
    <header className="fixed inset-x-0 top-4 z-50 px-4">
      <nav className="mx-auto flex h-14 max-w-4xl items-center justify-between rounded-full border border-line bg-[var(--nav-glass)] pr-2 pl-5 shadow-soft backdrop-blur-xl">
        <Link href="/" aria-label="onby home" className="rounded-full">
          <OnbyWordmark />
        </Link>
        <div className="hidden items-center gap-1 md:flex">
          {LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-full px-4 py-2 text-sm font-medium text-ink-soft transition-colors hover:bg-surface-2 hover:text-ink"
            >
              {link.label}
            </a>
          ))}
        </div>
        <Button
          asChild
          className="rounded-full bg-cobalt px-5 font-semibold text-white transition-transform hover:bg-cobalt-deep active:scale-[0.97]"
        >
          <Link href="/#download">
            <Download data-slot="icon" />
            Get the app
          </Link>
        </Button>
      </nav>
    </header>
  );
}
