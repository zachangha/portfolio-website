import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Projects from "../components/Projects";
import Contact from "../components/Contact";

export default function Home() {
  return (
    <main className="bg-black min-h-screen text-white">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Contact />
      <footer className="bg-black border-t border-gold/10 text-center py-6 text-white/40">
        <p>© {new Date().getFullYear()} Zach Angha · Software Engineer</p>
      </footer>
    </main>
  );
}
