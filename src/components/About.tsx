import { Code, Zap, Target, Heart } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: Code,
      title: "Clean Code",
      description: "Writing maintainable and efficient code"
    },
    {
      icon: Zap,
      title: "Fast Learner",
      description: "Quick to adapt to new technologies"
    },
    {
      icon: Target,
      title: "Goal-Oriented",
      description: "Focused on delivering quality results"
    },
    {
      icon: Heart,
      title: "Passionate",
      description: "Love for programming and problem-solving"
    }
  ];

  return (
    <section id="about" className="py-20 bg-card/50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">About Me</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A passionate 19-year-old programmer from Delhi, India, dedicated to creating 
            innovative solutions and continuously learning new technologies.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-slide-in-left">
            <h3 className="text-2xl font-semibold mb-6 text-foreground">My Journey</h3>
            <div className="space-y-4 text-muted-foreground">
              <p>
                Starting my programming journey at a young age, I've developed a deep passion 
                for creating digital solutions that make a difference. Based in Delhi, I'm 
                constantly exploring new technologies and methodologies.
              </p>
              <p>
                My approach combines creative problem-solving with technical expertise, 
                always aiming for clean, efficient code that delivers exceptional user experiences.
              </p>
              <p>
                Currently focusing on full-stack development, I enjoy working on projects 
                that challenge me to grow and learn something new every day.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            {highlights.map((item, index) => (
              <div 
                key={index}
                className="p-6 bg-card rounded-lg border border-border hover:border-primary/50 transition-all duration-300 hover:scale-105 hover:shadow-lg"
                style={{animationDelay: `${index * 0.1}s`}}
              >
                <item.icon className="w-8 h-8 text-primary mb-4" />
                <h4 className="font-semibold mb-2 text-foreground">{item.title}</h4>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;