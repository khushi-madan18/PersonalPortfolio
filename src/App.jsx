import Background3D from './components/Background3D';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <div className="relative w-full min-h-screen text-white overflow-hidden">
      <Background3D />

      {/* 2. Fixed Navbar */}
      <Navbar />

      {/* 3. Scrollable Content Overlay */}
      <main className="relative z-10 w-full h-screen overflow-y-auto scroll-smooth">
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Contact />
      </main>
    </div>
  );
}

export default App;
