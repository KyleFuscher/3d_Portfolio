import About from "./components/About";
import Hero from "./components/Hero";
import NavBar from "./components/Navbar";
import Features from "./components/Features";
import Story from "./components/Story";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Portfolio from "./components/Portfolio";
import Skills from "./components/Skills";
import Certificates from "./components/Certificates";

function App() {
  return (
    <main className="relative min-h-screen w-screen overflow-x-hidden">
      <NavBar />
      <Hero id="hero" />
      <About id="about" />
      <Features id="features" />
      <Story id="story" />
      <Portfolio id="portfolio" />
      <Skills id="skills" />
      <Certificates id="certificate" />
      <Contact id="contact" />
      <Footer />
    </main>
  );
}

export default App;
