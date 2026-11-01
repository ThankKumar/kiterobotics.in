"use client";

import About from "./components/About";
import Services from "./components/Services";
import Products from "./components/Products";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Faq from "./components/Faq";
import { ScrollSection, HeroScrollReveal } from "./components/ScrollSection";

export default function Home() {
  return (
    <>
      {/* 🌟 About section with 360° Plan constellation as the primary Home Hero (like TatvaOS) */}
      <HeroScrollReveal>
        <About />
      </HeroScrollReveal>

      {/* Each section slides up smoothly */}
      <ScrollSection index={1} total={5}>
        <Services />
      </ScrollSection>

      <ScrollSection index={2} total={5}>
        <Products />
      </ScrollSection>

      <ScrollSection index={3} total={5}>
        <Faq />
      </ScrollSection>

      <ScrollSection index={4} total={5}>
        <Contact />
      </ScrollSection>

      <ScrollSection index={5} total={5}>
        <Footer />
      </ScrollSection>
    </>
  );
}
