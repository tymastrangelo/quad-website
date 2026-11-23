import type { Metadata } from "next";
import { Footer } from "@/components/site/footer";
import { Navbar } from "@/components/site/navbar";
import { OpenInApp } from "@/components/site/open-in-app";
import { CAMPUSES } from "@/lib/campus";

// Where links shared from the app land for someone who doesn't have it (or whose phone didn't hand
// the link straight to the app). Shows nothing about the event itself: campus content needs a sign-in.
export const metadata: Metadata = {
  title: "Open in onby",
  description: "A link shared from the onby app.",
  robots: { index: false, follow: false },
};

export default function OpenPage() {
  return (
    <div data-campus="onby">
      <Navbar campus={CAMPUSES.onby} />
      <main className="mx-auto max-w-3xl px-6 pt-36 pb-24">
        <OpenInApp />
      </main>
      <Footer campus={CAMPUSES.onby} />
    </div>
  );
}
