import { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, MapPin } from 'lucide-react';

const Hero = () => {
  const [displayedText, setDisplayedText] = useState('');
  const fullText = "Hi, I'm Zishu Ahmad";

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      if (index <= fullText.length) {
        setDisplayedText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(interval);
      }
    }, 100);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-card"></div>
      
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-primary rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-3/4 right-1/4 w-24 h-24 bg-accent rounded-full blur-2xl animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center animate-fade-in-up">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="gradient-text">
              {displayedText}
              <span className="typing-cursor"></span>
            </span>
          </h1>
          
          <div className="text-xl md:text-2xl text-muted-foreground mb-8 animate-fade-in-up" style={{animationDelay: '0.3s'}}>
            <p className="mb-2">Passionate Programmer & Developer</p>
            <div className="flex items-center justify-center gap-4 text-sm">
              <span className="flex items-center gap-1">
                <MapPin className="w-4 h-4 text-primary" />
                Delhi, India
              </span>
              <span>•</span>
              <span>19 years old</span>
            </div>
          </div>

          <div className="flex justify-center gap-6 mb-12 animate-fade-in-up" style={{animationDelay: '0.6s'}}>
            <a 
              href="mailto:zishuahmad96@outlook.com" 
              className="flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:shadow-lg hover:scale-105 transition-all duration-300 glow-effect"
            >
              <Mail className="w-5 h-5" />
              Contact Me
            </a>
            <a 
              href="#portfolio" 
              className="flex items-center gap-2 px-6 py-3 border border-primary text-primary rounded-lg hover:bg-primary hover:text-primary-foreground transition-all duration-300"
            >
              View Work
            </a>
          </div>

          <div className="flex justify-center gap-6 animate-fade-in-up" style={{animationDelay: '0.9s'}}>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors duration-300">
              <Github className="w-6 h-6" />
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors duration-300">
              <Linkedin className="w-6 h-6" />
            </a>
            <a href="mailto:zishuahmad96@outlook.com" className="text-muted-foreground hover:text-primary transition-colors duration-300">
              <Mail className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;