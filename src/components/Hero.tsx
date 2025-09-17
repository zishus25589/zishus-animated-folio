import { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, Download, Code } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  const [displayedText, setDisplayedText] = useState('');
  const fullText = "Hi, I'm Zishu";

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index < fullText.length) {
        setDisplayedText(fullText.slice(0, index + 1));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 100);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-background via-secondary/30 to-accent/20">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-20 w-32 h-32 bg-primary/10 rounded-full animate-float"></div>
        <div className="absolute top-40 right-32 w-24 h-24 bg-chart-2/10 rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-32 left-32 w-20 h-20 bg-chart-3/10 rounded-full animate-float" style={{ animationDelay: '4s' }}></div>
        <div className="absolute bottom-20 right-20 w-28 h-28 bg-chart-4/10 rounded-full animate-float" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="container mx-auto px-6 text-center z-10">
        <div className="max-w-4xl mx-auto">
          {/* Main Heading with Typing Effect */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-slide-up">
            <span className="text-gradient">{displayedText}</span>
            <span className="animate-pulse text-primary">|</span>
          </h1>

          {/* Subtitle */}
          <div className="mb-8 animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <p className="text-xl md:text-2xl text-muted-foreground mb-2">
              Full Stack Developer & UI/UX Designer
            </p>
            <p className="text-lg text-primary font-semibold">
              Crafting Digital Experiences with Code & Creativity
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-slide-up" style={{ animationDelay: '0.4s' }}>
            <Button 
              size="lg" 
              className="hover-lift animate-shimmer group"
            >
              <Code className="w-5 h-5 mr-2 group-hover:animate-bounce" />
              View My Work
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="hover-lift border-glow group"
            >
              <Download className="w-5 h-5 mr-2 group-hover:animate-bounce" />
              Download Resume
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex justify-center gap-6 mb-12 animate-slide-up" style={{ animationDelay: '0.6s' }}>
            <a 
              href="https://github.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-12 h-12 bg-card border border-border rounded-full flex items-center justify-center hover-lift animate-glow-pulse group"
            >
              <Github className="w-6 h-6 group-hover:text-primary transition-colors" />
            </a>
            <a 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-12 h-12 bg-card border border-border rounded-full flex items-center justify-center hover-lift animate-glow-pulse group"
            >
              <Linkedin className="w-6 h-6 group-hover:text-primary transition-colors" />
            </a>
            <a 
              href="mailto:zishuahmad96@outlook.com"
              className="w-12 h-12 bg-card border border-border rounded-full flex items-center justify-center hover-lift animate-glow-pulse group"
            >
              <Mail className="w-6 h-6 group-hover:text-primary transition-colors" />
            </a>
          </div>

          {/* Scroll Indicator */}
          <div className="animate-slide-up" style={{ animationDelay: '0.8s' }}>
            <div className="mx-auto w-6 h-10 border-2 border-primary rounded-full p-1">
              <div className="w-1 h-3 bg-primary rounded-full mx-auto animate-bounce"></div>
            </div>
            <p className="text-sm text-muted-foreground mt-2">Scroll to explore</p>
          </div>
        </div>
      </div>

      {/* Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-background/5 to-transparent pointer-events-none animate-shimmer"></div>
    </section>
  );
};

export default Hero;