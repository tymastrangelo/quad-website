import { Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { QuadWordmark } from "./pin-logo";

const LINKS = [
  { href: "#app", label: "The app" },
  { href: "#clubs", label: "For clubs" },
  { href: "#faq", label: "FAQ" },
];

export function Navbar() {
  return (
    <header className="fixed inset-x-0 top-4 z-50 px-4">
      <nav className="mx-auto flex h-14 max-w-4xl items-center justify-between rounded-full border border-white/10 bg-night/70 pr-2 pl-5 backdrop-blur-xl">
        <a href="#" aria-label="Quad home" className="rounded-full">
          <QuadWordmark />
        </a>
        <div className="hidden items-center gap-1 md:flex">
          {LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-full px-4 py-2 text-sm text-paper/70 transition-colors hover:text-paper"
            >
              {link.label}
            </a>
          ))}
        </div>
        <Button
          asChild
          className="rounded-full bg-pin px-5 font-medium text-white hover:bg-pin/90"
        >
          <a href="#download">
            <Download data-slot="icon" />
            Get the app
          </a>
        </Button>
      </nav>
    </header>
  );
}
