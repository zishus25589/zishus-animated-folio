import { useState, useEffect } from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import LoadingScreen from '../components/LoadingScreen';
import Hero from '../components/Hero';
import About from '../components/About';
import CodingPhilosophy from '../components/CodingPhilosophy';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Experience from '../components/Experience';
import Resume from '../components/Resume';
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
        <Resume />
        <Contact />
        
        {/* Footer */}
        <footer className="py-12 bg-gradient-to-r from-card/20 via-primary/5 to-card/20 border-t border-primary/20">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              {/* Contact Information */}
              <div className="flex flex-wrap justify-center gap-6 mb-8">
                <div className="flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full hover-lift">
                  <Mail className="w-4 h-4 text-primary" />
                  <span className="text-sm font-medium">zishus76@gmail.com</span>
                </div>
                <div className="flex items-center gap-2 bg-chart-2/10 px-4 py-2 rounded-full hover-lift">
                  <Phone className="w-4 h-4 text-chart-2" />
                  <span className="text-sm font-medium">Available on Request</span>
                </div>
                <div className="flex items-center gap-2 bg-chart-3/10 px-4 py-2 rounded-full hover-lift">
                  <MapPin className="w-4 h-4 text-chart-3" />
                  <span className="text-sm font-medium">Remote/Hybrid Ready</span>
                </div>
              </div>
              
              {/* Copyright */}
              <div className="text-center">
                <p className="text-muted-foreground font-medium">
                  © 2024 Zishu Ahmad. Built with passion and expertise.
                </p>
                <p className="text-sm text-muted-foreground/70 mt-2">
                  Ready for immediate opportunities • Professional Full Stack Developer
                </p>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Index;
