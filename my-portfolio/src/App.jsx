import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import About from './sections/About';
import Skills from './sections/Skills';
import Experience from './sections/Experience';
import Projects from './sections/Projects';
import Contact from './sections/Contact';
import Footer from './sections/Footer';

function App() {
  useEffect(() => {
    // Reveal animation on scroll observer
    const observerOptions = {
      threshold: 0.1,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, observerOptions);

    document.querySelectorAll('.reveal-on-scroll').forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="relative overflow-x-hidden">
      {/* Global Background Decorations */}
      <div className="fixed inset-0 -z-50 bg-white">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-mesh opacity-50" />
      </div>

      <Navbar />
      
      <main>
        <Hero />
        <div className="space-y-0">
          <About />
          <Skills />
          <Experience />
          <Projects />
          <Contact />
        </div>
      </main>

      <Footer />

      {/* Custom Cursor Decoration (Optional - can be added later) */}
    </div>
  );
}

export default App;