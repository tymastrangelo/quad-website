import { Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { Campus, CampusKey } from "@/lib/campus";
import { CampusMenu } from "./campus-menu";
import { MobileMenu } from "./mobile-menu";

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
  const prefixed = links.map((l) => ({ ...l, href: `${prefix}${l.href}` }));
  return (
    <header className="fixed inset-x-0 top-4 z-50 px-4">
      <nav
        className="relative mx-auto flex h-14 max-w-4xl items-center justify-between rounded-full border border-line bg-[var(--nav-glass)] pr-2 pl-5 shadow-soft backdrop-blur-xl md:grid"
        style={{ gridTemplateColumns: "1fr auto 1fr" }}
      >
        <div className="flex min-w-0 justify-start">
          <CampusMenu campus={campus} onSelect={onSelect} />
        </div>
        <div className="hidden items-center justify-center gap-1 md:flex">
          {prefixed.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-full px-4 py-2 text-sm font-medium text-ink-soft transition-colors hover:bg-surface-2 hover:text-ink"
            >
              {link.label}
            </a>
          ))}
        </div>
        <div className="hidden justify-end md:flex">
          <Button
            asChild
            className="rounded-full bg-brand px-5 font-semibold text-white transition-[background-color,scale] duration-150 ease-out hover:bg-brand-deep enabled:active:scale-[0.96]"
          >
            <a href="#download">
              <Download data-slot="icon" />
              Get the app
            </a>
          </Button>
        </div>
        <MobileMenu links={prefixed} />
      </nav>
    </header>
  );
}
