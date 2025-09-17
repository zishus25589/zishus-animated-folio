import { useState, useEffect } from 'react';

interface LoadingScreenProps {
  onComplete: () => void;
}

const LoadingScreen = ({ onComplete }: LoadingScreenProps) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [displayText, setDisplayText] = useState('');
  
  const steps = [
    'Compiling code...',
    'Loading projects...',
    'Initializing portfolio...',
    'Ready to code'
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
          }, 1000);
        }
      }, 50);
    };

    typeText(steps[currentStep], currentStep);
  }, [currentStep, onComplete]);

  return (
    <div className="fixed inset-0 bg-gradient-to-br from-background via-secondary/10 to-primary/5 flex items-center justify-center z-50">
      <div className="text-center">
        <div className="mb-8">
          <div className="relative">
            <div className="w-20 h-20 border-2 border-primary/30 rounded-lg rotate-45 mx-auto mb-4 animate-pulse"></div>
            <div className="absolute inset-0 w-20 h-20 border-2 border-primary rounded-lg mx-auto animate-spin"></div>
            <div className="absolute inset-2 w-16 h-16 bg-primary/10 rounded-lg mx-auto animate-pulse"></div>
          </div>
        </div>
        
        <div className="mb-6">
          <p className="text-xl font-mono text-primary font-bold min-h-[1.5rem]">
            {displayText}
            <span className="typing-cursor animate-blink">|</span>
          </p>
        </div>
        
        <div className="flex justify-center space-x-3 mb-8">
          <div className="w-3 h-3 bg-primary rounded-full animate-bounce"></div>
          <div className="w-3 h-3 bg-primary rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
          <div className="w-3 h-3 bg-primary rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
        </div>
        
        <div className="w-80 bg-secondary/20 rounded-full h-2 mx-auto overflow-hidden">
          <div 
            className="bg-gradient-to-r from-primary to-chart-2 h-2 rounded-full transition-all duration-1000 ease-out animate-shimmer"
            style={{ width: `${((currentStep + 1) / steps.length) * 100}%` }}
          ></div>
        </div>
        
        <p className="text-sm text-muted-foreground mt-4 font-mono">
          Building the future, one line at a time...
        </p>
      </div>
    </div>
  );
};

export default LoadingScreen;