import { Briefcase, Calendar, Award, Code } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: "Frontend Developer",
      company: "Tech Innovations Ltd",
      period: "2024 - Present",
      type: "Full-time",
      description: "Developing modern web applications using React, TypeScript, and Next.js. Collaborating with cross-functional teams to deliver high-quality user experiences.",
      skills: ["React", "TypeScript", "Next.js", "Tailwind CSS"],
      icon: Code,
      current: true
    },
    {
      title: "Junior Web Developer",
      company: "Digital Solutions Co",
      period: "2023 - 2024",
      type: "Internship",
      description: "Built responsive websites and web applications. Gained experience in modern development practices and agile methodologies.",
      skills: ["HTML", "CSS", "JavaScript", "React"],
      icon: Briefcase,
      current: false
    },
    {
      title: "Freelance Developer",
      company: "Self-Employed",
      period: "2022 - 2023",
      type: "Freelance",
      description: "Created custom websites for small businesses and startups. Focused on responsive design and user experience optimization.",
      skills: ["WordPress", "PHP", "MySQL", "CSS"],
      icon: Award,
      current: false
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-accent/20 to-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gradient mb-4 animate-slide-up">
            Work Experience
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto animate-slide-up">
            My professional journey and career highlights
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-chart-2 to-chart-3"></div>

            {experiences.map((exp, index) => {
              const IconComponent = exp.icon;
              return (
                <div 
                  key={index}
                  className="relative mb-12 ml-20 animate-bounce-in"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  {/* Timeline Dot */}
                  <div className={`absolute -left-20 top-6 w-16 h-16 rounded-full flex items-center justify-center border-4 border-background animate-glow-pulse ${
                    exp.current ? 'bg-gradient-to-br from-primary to-chart-2' : 'bg-gradient-to-br from-chart-2 to-chart-3'
                  }`}>
                    <IconComponent className="w-8 h-8 text-primary-foreground" />
                  </div>

                  {/* Content Card */}
                  <div className="glass-effect rounded-xl p-6 hover-lift">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-gradient mb-1">
                          {exp.title}
                        </h3>
                        <p className="text-lg font-semibold text-primary mb-2">
                          {exp.company}
                        </p>
                        <div className="flex items-center gap-4 text-sm text-muted-foreground">
                          <div className="flex items-center gap-1">
                            <Calendar className="w-4 h-4" />
                            {exp.period}
                          </div>
                          <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                            exp.current 
                              ? 'bg-primary text-primary-foreground' 
                              : 'bg-secondary text-secondary-foreground'
                          }`}>
                            {exp.type}
                          </span>
                        </div>
                      </div>
                      {exp.current && (
                        <div className="flex items-center gap-1 text-primary text-sm font-semibold">
                          <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
                          Current
                        </div>
                      )}
                    </div>

                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      {exp.description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {exp.skills.map((skill, skillIndex) => (
                        <span 
                          key={skillIndex}
                          className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-sm border-glow hover-lift"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-32 right-20 w-24 h-24 bg-primary/5 rounded-full animate-float"></div>
          <div className="absolute bottom-32 left-20 w-20 h-20 bg-chart-2/5 rounded-full animate-float" style={{ animationDelay: '3s' }}></div>
        </div>
      </div>
    </section>
  );
};

export default Experience;