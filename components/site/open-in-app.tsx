"use client";

import Link from "next/link";
import { useSyncExternalStore } from "react";

// Only routes the app actually shares: /event/<id>, /club/<id>, /post/<id>, with an optional
// ?source=… tag. Anything else is ignored so this page can never be used to build an arbitrary link.
const SHARED = /^\/(event|club|post)\/\d+(\?source=[a-z_]+)?$/;

const NOUN: Record<string, string> = { event: "an event", club: "a club", post: "a post" };

export function OpenInApp() {
  // undefined in the static HTML and on first paint, then the address of this visit.
  const search = useSyncExternalStore(
    () => () => {},
    () => window.location.search,
    () => undefined,
  );
  const raw = search === undefined ? undefined : (new URLSearchParams(search).get("to") ?? "");
  const to = raw === undefined ? undefined : SHARED.test(raw) ? raw : null;

  const kind = to ? NOUN[to.split("/")[1]] : null;

  return (
    <>
      <h1 className="font-display text-4xl leading-[1.1] font-extrabold tracking-[-0.02em] text-balance md:text-5xl">
        {kind ? `Someone shared ${kind} with you` : "Open onby"}
        <span className="text-coral">.</span>
      </h1>
      <p className="mt-4 max-w-[60ch] text-lg leading-relaxed text-pretty text-ink-soft">
        {to === null
          ? "This link doesn’t point at anything in onby. It may have been cut off when it was copied."
          : "It lives in the onby app, where you sign in with your school email. If onby is on this phone, the button opens it there."}
      </p>
      {to ? (
        <a
          href={`onby:/${to}`}
          className="mt-8 inline-flex h-12 items-center rounded-full bg-brand px-6 text-base font-semibold text-white transition-transform duration-150 active:scale-[0.96]"
        >
          Open in onby
        </a>
      ) : null}
      <p className="mt-6 text-sm text-ink-soft">
        Don’t have it yet?{" "}
        <Link href="/#download" className="font-medium text-brand hover:underline">
          Get onby
        </Link>
        , then come back to this link.
      </p>
    </>
  );
}
