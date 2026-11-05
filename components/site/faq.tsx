import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Reveal } from "./reveal";
import { SectionHeading } from "./section-heading";

const FAQS = [
  {
    q: "Who can use onby?",
    a: "Anyone with an @elon.edu email address. Signup is verified on the server, so the community stays genuinely Elon only. Other schools come later, and Elon stays first.",
  },
  {
    q: "Does it cost anything?",
    a: "No. onby is free for everyone on campus. No ads, no premium tier, no catch.",
  },
  {
    q: "Does onby replace PhoenixCONNECT?",
    a: "No. PhoenixCONNECT stays the place where organizations register, post events and take registrations. onby only does the finding: it reads the public events orgs already posted, never writes anything back, and every event links to PhoenixCONNECT.",
  },
  {
    q: "How does my organization get on onby?",
    a: "There is nothing to set up. If your org posts public events on PhoenixCONNECT and is part of the pilot, they show up in onby on their own. onby does not take event submissions, and it does not ask orgs to post twice.",
  },
  {
    q: "Why do I only see some orgs?",
    a: "Spring 2027 is onby's pilot semester at Elon. It starts with a set of approved organizations so its impact can be measured through the spring. Everything else is on PhoenixCONNECT, one tap away, and the list can grow from there.",
  },
  {
    q: "Will it blow up my notifications?",
    a: "Only if you want it to. Every notification type has its own toggle, quiet hours are enforced on the server, event reminders only fire for events you saved, and the daily digest is opt in.",
  },
  {
    q: "What about my privacy?",
    a: "onby receives only public event and organization information, the same things already visible on PhoenixCONNECT. No rosters, no memberships, no attendance. What you save stays in onby. You can block people and delete your account, along with everything it knows about you, from inside the app.",
  },
  {
    q: "Where can I get it?",
    a: "onby comes to the App Store and Google Play for the spring 2027 start. Check back here, or follow an org that will tell you.",
  },
];

export function Faq() {
  return (
    <section id="faq" className="mx-auto max-w-3xl scroll-mt-24 px-6 pb-28 md:pb-36">
      <SectionHeading eyebrow="Questions" title="Asked and answered" />
      <Reveal delay={0.1}>
        <Accordion
          type="single"
          collapsible
          className="mt-12 rounded-[28px] border border-line bg-surface px-6 shadow-soft"
        >
          {FAQS.map((faq) => (
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
