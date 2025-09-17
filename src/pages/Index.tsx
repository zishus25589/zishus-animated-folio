import { useState, useEffect } from 'react';
import LoadingScreen from '../components/LoadingScreen';
import Hero from '../components/Hero';
import About from '../components/About';
import CodingPhilosophy from '../components/CodingPhilosophy';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Experience from '../components/Experience';
import Contact from '../components/Contact';

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  useEffect(() => {
    // Ensure minimum loading time for better UX
    const timer = setTimeout(() => {
      if (isLoading) {
        setIsLoading(false);
      }
    }, 6000);

    return () => clearTimeout(timer);
  }, [isLoading]);

  return (
    <>
      {isLoading && <LoadingScreen onComplete={handleLoadingComplete} />}
      
      <div className={`transition-opacity duration-1000 ${isLoading ? 'opacity-0' : 'opacity-100'}`}>
        <Hero />
        <About />
        <CodingPhilosophy />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
        
        {/* Footer */}
        <footer className="py-8 bg-card/30 border-t border-border">
          <div className="container mx-auto px-6 text-center">
            <p className="text-muted-foreground">
              © 2024 Zishu Ahmad. Built with passion and code.
            </p>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Index;
