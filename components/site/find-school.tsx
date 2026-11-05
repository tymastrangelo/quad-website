"use client";

import { useEffect, useId, useMemo, useRef, useState } from "react";
import Link from "next/link";
import { ArrowRight, Check, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import {
  LIVE,
  loadSchools,
  REQUEST_ENDPOINT,
  searchSchools,
  type School,
} from "@/lib/schools";
import { Reveal } from "./reveal";
import { SectionHeading } from "./section-heading";

type Status = "idle" | "sending" | "sent" | "error";

/* Second line of a result: state (US) or country, then the domain. */
function schoolSub(s: School) {
  const where = s.country === "US" ? s.state : s.country;
  return [where, s.domain].filter(Boolean).join(" · ");
}
type Pick = { kind: "school"; school: School } | { kind: "other" };

/* A real picker: type, choose from the list (10k schools, loaded on
   first touch), or choose "Other" for a school that isn't listed. A live
   campus links to its page; anything else offers a one-field form that
   emails Tyler the student's school address. */
export function FindSchool() {
  const [schools, setSchools] = useState<School[] | null>(null);
  const [loadError, setLoadError] = useState(false);
  const [query, setQuery] = useState("");
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(0);
  const [pick, setPick] = useState<Pick | null>(null);
  const [otherName, setOtherName] = useState("");
  const [email, setEmail] = useState("");
  const [trap, setTrap] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const root = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const listId = useId();
  const emailId = useId();
  const otherId = useId();

  const ensureLoaded = () => {
    if (schools || loadError) return;
    loadSchools()
      .then(setSchools)
      .catch(() => setLoadError(true));
  };

  const results = useMemo(
    () => (schools ? searchSchools(schools, query) : []),
    [schools, query],
  );
  const typed = query.trim().length >= 2;
  const options = typed ? [...results.map((s) => ({ kind: "school" as const, school: s })), { kind: "other" as const }] : [];

  useEffect(() => {
    if (!open) return;
    const onDown = (e: PointerEvent) => {
      if (!root.current?.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("pointerdown", onDown);
    return () => document.removeEventListener("pointerdown", onDown);
  }, [open]);

  const choose = (opt: Pick) => {
    setPick(opt);
    setOpen(false);
    setStatus("idle");
    if (opt.kind === "school") setQuery(opt.school.name);
  };

  const reset = () => {
    setPick(null);
    setQuery("");
    setOtherName("");
    setStatus("idle");
    requestAnimationFrame(() => inputRef.current?.focus());
  };

  const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (!open || options.length === 0) {
      if (e.key === "ArrowDown" && typed) setOpen(true);
      return;
    }
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setActive((i) => (i + 1) % options.length);
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setActive((i) => (i - 1 + options.length) % options.length);
    } else if (e.key === "Enter") {
      e.preventDefault();
      choose(options[active]);
    } else if (e.key === "Escape") {
      setOpen(false);
    }
  };

  const live = pick?.kind === "school" ? LIVE[pick.school.domain] : undefined;
  const pickedName =
    pick?.kind === "school" ? pick.school.name : otherName.trim() || "your school";
  const domainHint = pick?.kind === "school" && pick.school.domain ? pick.school.domain : "yourschool.edu";

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (status === "sending" || trap) return;
    const school =
      pick?.kind === "school"
        ? `${pick.school.name} (${pick.school.country}${pick.school.state ? ", " + pick.school.state : ""})`
        : `Other: ${otherName.trim()}`;
    setStatus("sending");
    try {
      const res = await fetch(REQUEST_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: email.trim(), school, source: "website" }),
      });
      setStatus(res.ok ? "sent" : "error");
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="find" className="mx-auto max-w-6xl scroll-mt-24 px-6 py-20 md:py-32">
      <SectionHeading
        title="Is onby at your school yet?"
        sub="Search for your campus and pick it from the list. If it's not there yet, leave your school email and I'll get in touch."
      />
      <Reveal delay={0.1}>
        <div ref={root} className="relative mt-8 max-w-2xl rounded-[28px] border border-line bg-surface p-3 shadow-soft">
          {/* the search */}
          <div
            className={cn(
              "flex items-center gap-3 rounded-full bg-surface-2 px-5 transition-shadow focus-within:ring-2 focus-within:ring-brand/40",
              pick && "opacity-70",
            )}
          >
            <Search className="size-5 shrink-0 text-ink-soft" aria-hidden="true" />
            <input
              ref={inputRef}
              role="combobox"
              aria-expanded={open && options.length > 0}
              aria-controls={listId}
              aria-autocomplete="list"
              aria-activedescendant={open && options.length ? `${listId}-${active}` : undefined}
              aria-label="Search for your school"
              type="text"
              autoComplete="off"
              spellCheck={false}
              placeholder="Type your school"
              value={query}
              disabled={!!pick}
              onFocus={() => {
                ensureLoaded();
                if (typed) setOpen(true);
              }}
              onChange={(e) => {
                ensureLoaded();
                setQuery(e.target.value);
                setActive(0);
                setOpen(true);
              }}
              onKeyDown={onKeyDown}
              className="h-13 w-full bg-transparent text-base text-ink outline-none placeholder:text-ink-soft/70 disabled:cursor-default"
            />
            {pick && (
              <button
                type="button"
                onClick={reset}
                className="shrink-0 rounded-full px-3 py-1.5 text-sm font-semibold text-brand hover:bg-brand-soft"
              >
                Change
              </button>
            )}
          </div>

          {/* the list */}
          {open && !pick && typed && (
            <ul
              id={listId}
              role="listbox"
              aria-label="Schools"
              className="absolute inset-x-3 top-[4.6rem] z-20 overflow-hidden rounded-[22px] border border-line bg-surface p-1.5 shadow-lift"
            >
              {!schools && !loadError && (
                <li className="px-4 py-3 text-sm text-ink-soft">Loading schools</li>
              )}
              {options.map((opt, i) => {
                const isActive = i === active;
                const isOther = opt.kind === "other";
                return (
                  <li
                    key={isOther ? "other" : `${opt.school.name}|${opt.school.country}`}
                    id={`${listId}-${i}`}
                    role="option"
                    aria-selected={isActive}
                    onMouseEnter={() => setActive(i)}
                    onMouseDown={(e) => e.preventDefault()}
                    onClick={() => choose(opt)}
                    className={cn(
                      "flex cursor-pointer items-center justify-between gap-3 rounded-2xl px-4 py-2.5 text-sm transition-colors",
                      isActive ? "bg-brand-soft text-ink" : "text-ink",
                      isOther && results.length > 0 && "mt-1 border-t border-line pt-3",
                    )}
                  >
                    {isOther ? (
                      <span className="text-ink-soft">
                        Other: my school isn&apos;t listed
                      </span>
                    ) : (
                      <span className="min-w-0">
                        <span className="block truncate font-semibold">{opt.school.name}</span>
                        <span className="block truncate text-xs text-ink-soft">
                          {schoolSub(opt.school)}
                        </span>
                      </span>
                    )}
                    {!isOther && LIVE[opt.school.domain] && (
                      <span className="shrink-0 rounded-full bg-brand px-2.5 py-1 text-[11px] font-bold text-white">
                        onby is here
                      </span>
                    )}
                  </li>
                );
              })}
            </ul>
          )}

          {/* picked: live campus */}
          {pick?.kind === "school" && live && (
            <div className="mt-3 flex flex-col gap-3 rounded-[22px] bg-brand-soft/70 p-5 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-start gap-3">
                <span className="mt-1 flex size-6 shrink-0 items-center justify-center rounded-full bg-brand text-white">
                  <Check className="size-3.5" strokeWidth={3} />
                </span>
                <div>
                  <p className="font-display text-xl font-extrabold tracking-tight">
                    Yes. onby for {live.short}
                  </p>
                  <p className="mt-0.5 text-sm text-ink-soft">
                    {pick.school.name} · {live.note}
                  </p>
                </div>
              </div>
              <Button asChild className="rounded-full bg-brand px-5 font-semibold text-white hover:bg-brand-deep">
                <Link href={live.path}>
                  Open it
                  <ArrowRight data-slot="icon" />
                </Link>
              </Button>
            </div>
          )}

          {/* picked: not yet, or other */}
          {pick && !live && (
            <form onSubmit={submit} className="mt-3 rounded-[22px] bg-surface-2/70 p-5">
              <p className="font-display text-xl font-extrabold tracking-tight">
                {pick.kind === "other" ? "Tell me where" : `Not yet at ${pick.school.name}`}
              </p>
              <p className="mt-1 text-sm text-ink-soft">
                Leave your school email and I&apos;ll get in touch about bringing onby to {pickedName}. One
                email, no list.
              </p>

              {status === "sent" ? (
                <p role="status" className="mt-4 rounded-full bg-brand-soft px-4 py-2.5 text-sm font-semibold text-brand">
                  Got it. I&apos;ll reach out to {email.trim()}.
                </p>
              ) : (
                <div className="mt-4 flex flex-col gap-2">
                  {pick.kind === "other" && (
                    <>
                      <label htmlFor={otherId} className="sr-only">
                        School name
                      </label>
                      <input
                        id={otherId}
                        type="text"
                        required
                        maxLength={120}
                        placeholder="School name"
                        value={otherName}
                        onChange={(e) => setOtherName(e.target.value)}
                        className="h-12 rounded-full border border-line bg-surface px-5 text-base text-ink outline-none placeholder:text-ink-soft/70 focus-visible:ring-2 focus-visible:ring-brand/50"
                      />
                    </>
                  )}
                  <div className="flex flex-col gap-2 sm:flex-row">
                    <label htmlFor={emailId} className="sr-only">
                      Your school email
                    </label>
                    <input
                      id={emailId}
                      type="email"
                      required
                      inputMode="email"
                      autoComplete="email"
                      placeholder={`you@${domainHint}`}
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

          {loadError && !pick && (
            <p className="mt-3 px-4 text-sm text-ink-soft">
              The school list didn&apos;t load. Type your school and pick &ldquo;Other&rdquo; to continue.
            </p>
          )}
        </div>
      </Reveal>
    </section>
  );
}
