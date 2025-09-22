import { Download, Eye, Briefcase, GraduationCap, Award, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Resume = () => {
  const resumeHighlights = [
    {
      icon: Briefcase,
      title: "Work Experience",
      description: "Freelance Full Stack Developer - Built 20+ responsive web applications using React, Express.js, and MongoDB"
    },
    {
      icon: GraduationCap,
      title: "Education & Skills",
      description: "Self-taught programmer with expertise in MERN stack, RESTful APIs, and modern JavaScript frameworks"
    },
    {
      icon: Award,
      title: "Key Projects",
      description: "E-commerce platform with payment integration, Real-time chat application, Task management system"
    },
    {
      icon: Star,
      title: "Technical Expertise",
      description: "React.js, Node.js, Express.js, MongoDB, MySQL, Git, Docker, AWS, TypeScript, Tailwind CSS"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-primary/5 via-background to-chart-2/5">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-gradient mb-6 animate-slide-up">
            Professional Resume
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto animate-slide-up">
            A comprehensive overview of my professional journey, skills, and achievements. 
            Perfect for recruiters and potential collaborators.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Resume Preview */}
          <div className="glass-effect rounded-2xl p-8 mb-12 animate-bounce-in">
            <div className="text-center mb-8">
              <div className="w-24 h-24 bg-gradient-to-br from-primary to-chart-2 rounded-full flex items-center justify-center mx-auto mb-6 animate-glow-pulse">
                <Briefcase className="w-12 h-12 text-primary-foreground" />
              </div>
              <h3 className="text-3xl font-bold text-gradient mb-2">Zishu Ahmad</h3>
              <p className="text-lg text-primary font-semibold mb-1">Full Stack Developer</p>
              <p className="text-base text-muted-foreground mb-2">Age: 19 Years</p>
              <p className="text-lg text-muted-foreground">
                Passionate Developer | MERN Stack Expert | API Specialist
              </p>
            </div>

            {/* Quick Stats */}
            <div className="grid md:grid-cols-4 gap-6 mb-8">
              <div className="text-center p-4 bg-primary/10 rounded-xl border border-primary/20">
                <div className="text-2xl font-bold text-primary">20+</div>
                <div className="text-sm text-muted-foreground">Web Apps Built</div>
              </div>
              <div className="text-center p-4 bg-chart-2/10 rounded-xl border border-chart-2/20">
                <div className="text-2xl font-bold text-chart-2">2+</div>
                <div className="text-sm text-muted-foreground">Years Coding</div>
              </div>
              <div className="text-center p-4 bg-chart-3/10 rounded-xl border border-chart-3/20">
                <div className="text-2xl font-bold text-chart-3">10+</div>
                <div className="text-sm text-muted-foreground">Tech Stack</div>
              </div>
              <div className="text-center p-4 bg-chart-4/10 rounded-xl border border-chart-4/20">
                <div className="text-2xl font-bold text-chart-4">5★</div>
                <div className="text-sm text-muted-foreground">Client Rating</div>
              </div>
            </div>

            {/* Resume Highlights */}
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              {resumeHighlights.map((item, index) => {
                const Icon = item.icon;
                return (
                  <div 
                    key={index}
                    className="flex items-start space-x-4 p-4 bg-secondary/20 rounded-xl hover-lift"
                  >
                    <div className="w-12 h-12 bg-gradient-to-br from-primary to-chart-2 rounded-full flex items-center justify-center flex-shrink-0">
                      <Icon className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg mb-1">{item.title}</h4>
                      <p className="text-sm text-muted-foreground">{item.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="hover-lift animate-shimmer group"
              >
                <Download className="w-5 h-5 mr-2 group-hover:animate-bounce" />
                Download Full Resume
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="hover-lift border-glow group"
              >
                <Eye className="w-5 h-5 mr-2 group-hover:animate-bounce" />
                Preview Online
              </Button>
            </div>
          </div>

          {/* Job Interaction CTA */}
          <div className="text-center bg-gradient-to-r from-primary/10 via-chart-2/10 to-chart-3/10 rounded-2xl p-12 border border-primary/20 animate-glow-pulse">
            <h3 className="text-3xl font-bold text-gradient mb-4">Ready to Hire?</h3>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              I'm actively seeking new opportunities to create innovative solutions and contribute to amazing teams. 
              Let's discuss how I can help bring your vision to life.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="hover-lift animate-shimmer">
                Schedule Interview
              </Button>
              <Button variant="outline" size="lg" className="hover-lift border-glow">
                View Portfolio
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;