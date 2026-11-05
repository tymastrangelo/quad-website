"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { CAMPUSES, campusFromPath, type CampusKey } from "@/lib/campus";
import { Cta } from "./cta";
import { Faq } from "./faq";
import { FeatureGrid } from "./feature-grid";
import { FindSchool } from "./find-school";
import { Footer } from "./footer";
import { ForOrgs } from "./for-orgs";
import { Hero } from "./hero";
import { Navbar } from "./navbar";
import { Showcase } from "./showcase";
import { Steps } from "./steps";
import { Ticker } from "./ticker";

/* One page, two campuses. The toggle swaps copy and screenshot in place
   and moves the URL between / and /elon with pushState, so the DOM
   persists and every brand color can glide to the new accent. A hard
   load of either URL renders the right campus on the server. */
export function Landing({ initial }: { initial: CampusKey }) {
  const [key, setKey] = useState<CampusKey>(initial);
  const wrapper = useRef<HTMLDivElement>(null);
  const campus = CAMPUSES[key];

  useEffect(() => {
    const onPop = () => setKey(campusFromPath(window.location.pathname));
    window.addEventListener("popstate", onPop);
    return () => window.removeEventListener("popstate", onPop);
  }, []);

  const select = useCallback(
    (next: CampusKey) => {
      if (next === key) return;
      // Arm the color transitions only once a switch actually happens, so
      // the first paint never animates.
      wrapper.current?.setAttribute("data-campus-ready", "");
      setKey(next);
      const target = CAMPUSES[next];
      window.history.pushState(null, "", target.path + window.location.hash);
      document.title = target.title;
    },
    [key],
  );

  return (
    <div ref={wrapper} data-campus={key}>
      <Navbar campus={campus} onSelect={select} />
      <main>
        <Hero campus={campus} />
        <Ticker campus={campus} />
        <Showcase campus={campus} />
        <FeatureGrid campus={campus} />
        <ForOrgs campus={campus} />
        <Steps campus={campus} />
        {campus.key === "onby" && <FindSchool />}
        <Faq campus={campus} />
        <Cta campus={campus} />
      </main>
      <Footer campus={campus} />
    </div>
  );
}
