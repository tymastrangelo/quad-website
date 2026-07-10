import { Cta } from "@/components/site/cta";
import { Faq } from "@/components/site/faq";
import { FeatureGrid } from "@/components/site/feature-grid";
import { Footer } from "@/components/site/footer";
import { ForClubs } from "@/components/site/for-clubs";
import { Hero } from "@/components/site/hero";
import { Navbar } from "@/components/site/navbar";
import { Showcase } from "@/components/site/showcase";
import { Steps } from "@/components/site/steps";
import { Ticker } from "@/components/site/ticker";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Ticker />
        <Showcase />
        <FeatureGrid />
        <ForClubs />
        <Steps />
        <Faq />
        <Cta />
      </main>
      <Footer />
    </>
  );
}
