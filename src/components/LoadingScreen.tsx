import { useState, useEffect } from 'react';
import { Code2, Sparkles, Zap, Trophy } from 'lucide-react';

interface LoadingScreenProps {
  onComplete: () => void;
}

const LoadingScreen = ({ onComplete }: LoadingScreenProps) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [progress, setProgress] = useState(0);
  
  const steps = [
    { text: 'Initializing premium experience...', icon: Sparkles },
    { text: 'Loading professional portfolio...', icon: Code2 },
    { text: 'Optimizing performance...', icon: Zap },
    { text: 'Welcome to excellence!', icon: Trophy }
  ];

  useEffect(() => {
    const typeText = (text: string, stepIndex: number) => {
      let index = 0;
      setDisplayText('');
      
      const interval = setInterval(() => {
        if (index <= text.length) {
          setDisplayText(text.slice(0, index));
          index++;
        } else {
          clearInterval(interval);
          setTimeout(() => {
            if (stepIndex < steps.length - 1) {
              setCurrentStep(stepIndex + 1);
            } else {
              setTimeout(onComplete, 1500);
            }
          }, 800);
        }
      }, 40);
    };

    // Update progress
    setProgress(((currentStep + 1) / steps.length) * 100);
    
    typeText(steps[currentStep].text, currentStep);
  }, [currentStep, onComplete]);

  const CurrentIcon = steps[currentStep].icon;

  return (
    <div className="fixed inset-0 bg-gradient-to-br from-background via-primary/5 to-background flex items-center justify-center z-50">
      <div className="text-center max-w-md mx-auto px-6">
        {/* Premium Logo Animation */}
        <div className="mb-12 relative">
          <div className="w-24 h-24 mx-auto relative">
            {/* Outer rotating ring */}
            <div className="absolute inset-0 rounded-full border-2 border-primary/20 animate-spin"></div>
            {/* Inner pulsing ring */}
            <div className="absolute inset-2 rounded-full border-2 border-primary/40 animate-pulse"></div>
            {/* Center icon container */}
            <div className="absolute inset-4 bg-gradient-to-br from-primary to-chart-2 rounded-full flex items-center justify-center shadow-2xl animate-glow-pulse">
              <CurrentIcon className="w-8 h-8 text-primary-foreground animate-bounce" />
            </div>
            {/* Sparkle effects */}
            <div className="absolute -top-2 -right-2 w-4 h-4 bg-chart-2 rounded-full animate-ping"></div>
            <div className="absolute -bottom-2 -left-2 w-3 h-3 bg-primary rounded-full animate-ping" style={{ animationDelay: '0.5s' }}></div>
          </div>
        </div>
        
        {/* Professional Brand */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gradient mb-2">Zishu Ahmad</h1>
          <p className="text-lg text-primary font-semibold">Premium Portfolio</p>
        </div>
        
        {/* Loading Text */}
        <div className="mb-8">
          <p className="text-lg font-medium text-foreground min-h-[1.5rem] tracking-wide">
            {displayText}
            <span className="typing-cursor animate-blink ml-1 text-primary">|</span>
          </p>
        </div>
        
        {/* Progress Bar */}
        <div className="mb-8">
          <div className="w-full bg-secondary/20 rounded-full h-2 overflow-hidden shadow-inner">
            <div 
              className="bg-gradient-to-r from-primary via-chart-2 to-primary h-2 rounded-full transition-all duration-1000 ease-out animate-shimmer shadow-lg"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
          <div className="flex justify-between mt-2 text-xs text-muted-foreground">
            <span>Loading...</span>
            <span>{Math.round(progress)}%</span>
          </div>
        </div>
        
        {/* Elegant Loading Dots */}
        <div className="flex justify-center space-x-2 mb-8">
          <div className="w-2 h-2 bg-primary rounded-full animate-bounce"></div>
          <div className="w-2 h-2 bg-chart-2 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
          <div className="w-2 h-2 bg-chart-3 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
          <div className="w-2 h-2 bg-chart-4 rounded-full animate-bounce" style={{ animationDelay: '0.3s' }}></div>
        </div>
        
        {/* Professional Tagline */}
        <p className="text-sm text-muted-foreground font-medium tracking-wide">
          Crafting exceptional digital experiences
        </p>
      </div>
    </div>
  );
};

export default LoadingScreen;