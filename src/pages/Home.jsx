import About from "../components/About";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import { HeroSection } from "../components/HeroSection";
import Navbar from "../components/Navbar";
import Portfolio from "../components/Portfolio";
import PracticeProjects from "../components/PracticeProjects";
import Skills from "../components/Skills";
import Testimonial from "../components/Testimonial";

export default function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <About />
      <Testimonial />
      <Skills />
      <PracticeProjects />
      <Portfolio />
      <Contact />
      <Footer />
    </>
  );
}
