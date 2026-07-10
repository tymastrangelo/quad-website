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
    q: "Who can use Quad?",
    a: "Anyone with an @elon.edu email address: students, faculty, and staff. Signup is verified on the server, so the community stays genuinely Elon only.",
  },
  {
    q: "Does it cost anything?",
    a: "No. Quad is free for everyone on campus. No ads, no premium tier, no catch.",
  },
  {
    q: "How does my organization get on Quad?",
    a: "Your org needs to be registered with Student Involvement on PhoenixConnect first. From there, submit it through the form inside Quad and it goes to the approval queue. Once approved, you get a club page, event and post publishing, and member management.",
  },
  {
    q: "Why do I only see some clubs?",
    a: "Fall 2026 is Quad's pilot semester. Student Involvement is starting with a preapproved set of organizations so it can measure the app's impact on campus. If students show up, use it, and advocate for it, Quad has the chance to open to every club at Elon in the spring and beyond. Nothing is guaranteed, which is exactly why your support matters.",
  },
  {
    q: "Will it blow up my notifications?",
    a: "Only if you want it to. Every notification type has its own toggle, quiet hours are enforced on the server, and event reminders only fire for events you said you're going to.",
  },
  {
    q: "What about my privacy?",
    a: "Quad is a closed community: no public web profiles, no anonymous browsing of your data. You can block users, control what you share, and delete your account, along with everything it knows about you, from inside the app.",
  },
  {
    q: "Where can I get it?",
    a: "Quad is on the App Store for iPhone and Google Play for Android.",
  },
];

export function Faq() {
  return (
    <section id="faq" className="mx-auto max-w-3xl scroll-mt-24 px-6 pb-28 md:pb-36">
      <SectionHeading eyebrow="Questions" title="Asked and answered" />
      <Reveal delay={0.1}>
        <Accordion type="single" collapsible className="mt-12">
          {FAQS.map((faq) => (
            <AccordionItem key={faq.q} value={faq.q}>
              <AccordionTrigger className="text-left font-display text-base font-semibold hover:no-underline md:text-lg">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="text-sm leading-relaxed text-muted-foreground md:text-base">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </Reveal>
    </section>
  );
}
