import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { HeroSection } from "./components/HeroSection";
import Navbar from "./components/Navbar";
import Portfolio from "./components/Portfolio";
import Skills from "./components/Skills";

function App() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <About />
      <Skills />
      <Portfolio />
      <Contact />
      <Footer />
    </main>
  );
}

export default App;
