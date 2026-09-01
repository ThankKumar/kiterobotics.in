"use client";

import Hero from "./components/Hero";
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
      {/* Hero stays pinned and shrinks as you scroll past it */}
      <HeroScrollReveal>
        <Hero />
      </HeroScrollReveal>

      {/* Each section slides up and overlaps the previous one like book pages */}
      <ScrollSection index={1} total={6}>
        <Services />
      </ScrollSection>

      <ScrollSection index={2} total={6}>
        <Products />
      </ScrollSection>

      <ScrollSection index={3} total={6}>
        <About />
      </ScrollSection>

      <ScrollSection index={4} total={6}>
        <Faq />
      </ScrollSection>

      <ScrollSection index={5} total={6}>
        <Contact />
      </ScrollSection>

      <ScrollSection index={6} total={6}>
        <Footer />
      </ScrollSection>
    </>
  );
}
