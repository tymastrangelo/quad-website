import { Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { Campus, CampusKey } from "@/lib/campus";
import { CampusMenu } from "./campus-menu";

const LINKS = [
  { href: "#app", label: "The app" },
  { href: "#orgs", label: "For orgs" },
  { href: "#faq", label: "FAQ" },
];

export function Navbar({
  campus,
  onSelect,
}: {
  campus: Campus;
  onSelect?: (key: CampusKey) => void;
}) {
  const prefix = campus.path === "/" ? "" : campus.path;
  const links = campus.key === "onby" ? [...LINKS, { href: "#find", label: "Your school" }] : LINKS;
  return (
    <header className="fixed inset-x-0 top-4 z-50 px-4">
      <nav className="mx-auto grid h-14 max-w-4xl grid-cols-[1fr_auto_1fr] items-center rounded-full border border-line bg-[var(--nav-glass)] pr-2 pl-5 shadow-soft backdrop-blur-xl">
        <div className="flex justify-start">
          <CampusMenu campus={campus} onSelect={onSelect} />
        </div>
        <div className="hidden items-center justify-center gap-1 md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={`${prefix}${link.href}`}
              className="rounded-full px-4 py-2 text-sm font-medium text-ink-soft transition-colors hover:bg-surface-2 hover:text-ink"
            >
              {link.label}
            </a>
          ))}
        </div>
        <div className="flex justify-end">
          <Button
            asChild
            className="rounded-full bg-brand px-5 font-semibold text-white transition-transform hover:bg-brand-deep active:scale-[0.97]"
          >
            <a href="#download">
              <Download data-slot="icon" />
              Get the app
            </a>
          </Button>
        </div>
      </nav>
    </header>
  );
}
