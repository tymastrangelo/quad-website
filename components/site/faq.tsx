import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import type { Campus } from "@/lib/campus";
import { Reveal } from "./reveal";
import { SectionHeading } from "./section-heading";

export function Faq({ campus }: { campus: Campus }) {
  return (
    <section id="faq" className="mx-auto max-w-3xl scroll-mt-24 px-6 pb-28 md:pb-36">
      <SectionHeading eyebrow="Questions" title="Asked and answered" />
      <Reveal delay={0.1}>
        <Accordion
          type="single"
          collapsible
          className="mt-12 rounded-[28px] border border-line bg-surface px-6 shadow-soft"
        >
          {campus.faq.map((faq) => (
            <AccordionItem key={faq.q} value={faq.q}>
              <AccordionTrigger className="text-left font-display text-base font-extrabold tracking-tight hover:no-underline md:text-lg">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="text-sm leading-relaxed text-ink-soft md:text-base">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </Reveal>
    </section>
  );
}
