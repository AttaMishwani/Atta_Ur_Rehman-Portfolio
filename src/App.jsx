import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { HeroSection } from "./components/HeroSection";
import Navbar from "./components/Navbar";
import Portfolio from "./components/Portfolio";
import Skills from "./components/Skills";
import Testimonial from "./components/Testimonial";

function App() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <About />
      <Testimonial />
      <Skills />
      <Portfolio />
      <Contact />
      <Footer />
    </main>
  );
}

export default App;
