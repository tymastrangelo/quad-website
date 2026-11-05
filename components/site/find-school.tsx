"use client";

import { useId, useState } from "react";
import Link from "next/link";
import { ArrowRight, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { findSchool, REQUEST_ENDPOINT } from "@/lib/campus-directory";
import { Reveal } from "./reveal";
import { SectionHeading } from "./section-heading";

type Status = "idle" | "sending" | "sent" | "error";

/* Search for your school. A match links to its page; no match offers a
   one-field form that emails Tyler the student's school address so he
   can reach out. The form posts to the campus-request edge function. */
export function FindSchool() {
  const [query, setQuery] = useState("");
  const [email, setEmail] = useState("");
  const [trap, setTrap] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const searchId = useId();
  const emailId = useId();

  const match = findSchool(query);
  const typed = query.trim().length >= 2;

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (status === "sending" || trap) return;
    setStatus("sending");
    try {
      const res = await fetch(REQUEST_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: email.trim(), school: query.trim(), source: "website" }),
      });
      setStatus(res.ok ? "sent" : "error");
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="find" className="mx-auto max-w-3xl scroll-mt-24 px-6 pb-28 md:pb-36">
      <SectionHeading
        eyebrow="Your school"
        title="Is onby at your school yet?"
        sub="Search for your campus. If it's not here, leave your school email and I'll reach out about bringing it there."
      />
      <Reveal delay={0.1}>
        <div className="mt-10 rounded-[28px] border border-line bg-surface p-3 shadow-soft">
          <label htmlFor={searchId} className="sr-only">
            School name
          </label>
          <div className="flex items-center gap-3 rounded-full bg-surface-2 px-5">
            <Search className="size-5 shrink-0 text-ink-soft" aria-hidden="true" />
            <input
              id={searchId}
              type="search"
              autoComplete="off"
              placeholder="Type your school"
              value={query}
              onChange={(e) => {
                setQuery(e.target.value);
                if (status !== "idle") setStatus("idle");
              }}
              className="h-13 w-full bg-transparent text-base text-ink outline-none placeholder:text-ink-soft/70"
            />
          </div>

          {match && (
            <div className="mt-3 flex flex-col gap-3 rounded-[22px] bg-brand-soft/70 p-5 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="font-display text-xl font-extrabold tracking-tight">
                  Yes. onby for {match.name.replace(" University", "")}
                </p>
                <p className="mt-0.5 text-sm text-ink-soft">
                  {match.name} · {match.note}
                </p>
              </div>
              <Button
                asChild
                className="rounded-full bg-brand px-5 font-semibold text-white hover:bg-brand-deep"
              >
                <Link href={match.path}>
                  Open it
                  <ArrowRight data-slot="icon" />
                </Link>
              </Button>
            </div>
          )}

          {typed && !match && (
            <form onSubmit={submit} className="mt-3 rounded-[22px] bg-surface-2/70 p-5" noValidate={false}>
              <p className="font-display text-xl font-extrabold tracking-tight">
                Not yet. Want it there?
              </p>
              <p className="mt-1 text-sm text-ink-soft">
                Leave your school email and I&apos;ll get in touch about bringing onby to{" "}
                {query.trim()}. One email, no list.
              </p>
              {status === "sent" ? (
                <p role="status" className="mt-4 rounded-full bg-brand-soft px-4 py-2.5 text-sm font-semibold text-brand">
                  Got it. I&apos;ll reach out to {email.trim()}.
                </p>
              ) : (
                <div className="mt-4 flex flex-col gap-2 sm:flex-row">
                  <label htmlFor={emailId} className="sr-only">
                    Your school email
                  </label>
                  <input
                    id={emailId}
                    type="email"
                    required
                    inputMode="email"
                    autoComplete="email"
                    placeholder="you@yourschool.edu"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="h-12 flex-1 rounded-full border border-line bg-surface px-5 text-base text-ink outline-none placeholder:text-ink-soft/70 focus-visible:ring-2 focus-visible:ring-brand/50"
                  />
                  {/* honeypot: real people never see or fill this */}
                  <input
                    type="text"
                    name="website"
                    tabIndex={-1}
                    autoComplete="off"
                    value={trap}
                    onChange={(e) => setTrap(e.target.value)}
                    className="absolute -left-[9999px] h-0 w-0 opacity-0"
                    aria-hidden="true"
                  />
                  <Button
                    type="submit"
                    disabled={status === "sending"}
                    className="h-12 rounded-full bg-brand px-6 font-semibold text-white hover:bg-brand-deep"
                  >
                    {status === "sending" ? "Sending" : "Ask for onby"}
                  </Button>
                </div>
              )}
              {status === "error" && (
                <p role="alert" className="mt-3 text-sm text-ink-soft">
                  That didn&apos;t go through. Email{" "}
                  <a href="mailto:tmastrangelo@elon.edu" className="font-medium text-brand hover:underline">
                    tmastrangelo@elon.edu
                  </a>{" "}
                  instead.
                </p>
              )}
            </form>
          )}
        </div>
      </Reveal>
    </section>
  );
}
