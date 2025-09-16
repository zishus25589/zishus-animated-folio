import { useState, useEffect } from 'react';

interface LoadingScreenProps {
  onComplete: () => void;
}

const LoadingScreen = ({ onComplete }: LoadingScreenProps) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [displayText, setDisplayText] = useState('');
  
  const steps = [
    'Initializing system...',
    'Loading portfolio data...',
    'Establishing connection...',
    'Welcome, Zishu Ahmad'
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
    <div className="fixed inset-0 bg-background flex items-center justify-center z-50">
      <div className="text-center">
        <div className="mb-8">
          <div className="w-16 h-16 border-4 border-primary/20 border-t-primary rounded-full animate-spin mx-auto"></div>
        </div>
        
        <div className="mb-6">
          <p className="text-lg font-mono text-foreground min-h-[1.5rem]">
            {displayText}
            <span className="typing-cursor"></span>
          </p>
        </div>
        
        <div className="flex justify-center space-x-2">
          <div className="loading-dot"></div>
          <div className="loading-dot"></div>
          <div className="loading-dot"></div>
        </div>
        
        <div className="mt-8 w-64 bg-secondary/20 rounded-full h-1 mx-auto">
          <div 
            className="bg-primary h-1 rounded-full transition-all duration-1000 ease-out"
            style={{ width: `${((currentStep + 1) / steps.length) * 100}%` }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;