import type { Metadata } from "next";
import { Landing } from "@/components/site/landing";
import { CAMPUSES } from "@/lib/campus";

export const metadata: Metadata = {
  title: CAMPUSES.elon.title,
  description: CAMPUSES.elon.description,
  openGraph: {
    title: "onby for Elon | Everything happening on campus. Come on by.",
    description: CAMPUSES.elon.description,
    type: "website",
    images: ["/onby-icon.png"],
  },
};

export default function ElonHome() {
  return <Landing initial="elon" />;
}
