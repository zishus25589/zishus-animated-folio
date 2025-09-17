import { Code, Lightbulb, Trophy, Zap } from 'lucide-react';

const CodingPhilosophy = () => {
  const philosophies = [
    {
      icon: Code,
      title: "Code Craftsmanship",
      description: "Every line of code is a work of art. I believe in writing clean, elegant, and maintainable code that stands the test of time."
    },
    {
      icon: Lightbulb,
      title: "Innovation First",
      description: "I don't just solve problems, I reimagine solutions. Innovation isn't just what I do - it's who I am."
    },
    {
      icon: Trophy,
      title: "Excellence Standard",
      description: "Good isn't good enough. I strive for perfection in every project, pushing the boundaries of what's possible."
    },
    {
      icon: Zap,
      title: "Performance Obsessed",
      description: "Speed matters. Every millisecond counts. I optimize not just for functionality, but for lightning-fast performance."
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-primary/5 via-background to-chart-2/5 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 left-10 w-32 h-32 bg-primary/5 rounded-full animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-24 h-24 bg-chart-2/5 rounded-full animate-float"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-chart-3/5 rounded-full animate-bounce-slow"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-gradient mb-6 animate-slide-up">
            Coding Philosophy
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto animate-slide-up" style={{ animationDelay: '0.2s' }}>
            I'm not just a coder - I'm a digital architect, a problem-solving virtuoso, and quite possibly the most passionate developer you'll ever meet. 
            Code isn't just my profession; it's my art, my passion, my way of making the impossible possible.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto mb-16">
          {philosophies.map((item, index) => {
            const Icon = item.icon;
            return (
              <div 
                key={index}
                className="glass-effect rounded-xl p-8 hover-lift animate-bounce-in group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-chart-2 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Icon className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gradient">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{item.description}</p>
              </div>
            );
          })}
        </div>

        {/* Best Coder Section */}
        <div className="text-center bg-gradient-to-r from-primary/10 via-chart-2/10 to-chart-3/10 rounded-2xl p-12 border border-primary/20 animate-glow-pulse">
          <div className="mb-8">
            <div className="w-24 h-24 bg-gradient-to-br from-primary to-chart-2 rounded-full flex items-center justify-center mx-auto mb-6 animate-bounce-slow">
              <Trophy className="w-12 h-12 text-primary-foreground" />
            </div>
            <h3 className="text-4xl font-bold text-gradient mb-4">World-Class Developer</h3>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              With an unwavering commitment to excellence and an insatiable hunger for knowledge, 
              I don't just write code - I craft digital experiences that push the boundaries of technology. 
              Every project is an opportunity to prove that impossible is just another word for challenge.
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4 mt-8">
            <div className="px-6 py-3 bg-primary/20 rounded-full border border-primary/30">
              <span className="text-sm font-semibold text-primary">🚀 Innovation Expert</span>
            </div>
            <div className="px-6 py-3 bg-chart-2/20 rounded-full border border-chart-2/30">
              <span className="text-sm font-semibold text-chart-2">⚡ Performance Guru</span>
            </div>
            <div className="px-6 py-3 bg-chart-3/20 rounded-full border border-chart-3/30">
              <span className="text-sm font-semibold text-chart-3">🎯 Problem Solver</span>
            </div>
            <div className="px-6 py-3 bg-chart-4/20 rounded-full border border-chart-4/30">
              <span className="text-sm font-semibold text-chart-4">💎 Code Craftsman</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CodingPhilosophy;