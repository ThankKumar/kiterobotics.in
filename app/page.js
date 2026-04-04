
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Products from "./components/Products"; // New import
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Faq from "./components/Faq"; 


export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Services />
      <Products />
      <About />
      <Faq /> 
      <Contact />
      <Footer />
    </>
  );
}
