import { Download, Eye, Briefcase, GraduationCap, Award, Star, Code, Database, Globe, Zap, Mail, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Resume = () => {
  const resumeHighlights = [
    {
      icon: Briefcase,
      title: "Professional Experience",
      description: "Freelance Full Stack Developer specializing in modern web applications with 20+ successful projects delivered"
    },
    {
      icon: Code,
      title: "Technical Skills",
      description: "Expert in React.js, Node.js, Express.js, MongoDB, TypeScript, Tailwind CSS, and cloud deployment"
    },
    {
      icon: Database,
      title: "Backend Expertise",
      description: "RESTful API development, database design, authentication systems, and microservices architecture"
    },
    {
      icon: Globe,
      title: "Frontend Mastery",
      description: "Responsive design, modern UI/UX principles, performance optimization, and cross-browser compatibility"
    }
  ];

  const achievements = [
    "Built e-commerce platforms handling 1000+ daily transactions",
    "Developed real-time chat applications with WebSocket integration",
    "Created automated task management systems for teams",
    "Optimized web applications for 40% faster loading times"
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-background via-primary/5 to-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full text-primary font-medium mb-6 animate-fade-in">
            <Zap className="w-4 h-4" />
            Professional Resume
          </div>
          <h2 className="text-5xl font-bold text-gradient mb-6 animate-slide-up">
            Premium Portfolio
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto animate-slide-up">
            A comprehensive showcase of professional achievements and technical expertise. 
            Ready for immediate opportunities and collaborations.
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          {/* Professional Header */}
          <div className="glass-effect rounded-3xl p-8 mb-8 border-2 border-primary/20 animate-bounce-in">
            <div className="flex flex-col lg:flex-row items-center gap-8">
              <div className="w-32 h-32 bg-gradient-to-br from-primary via-chart-2 to-primary rounded-2xl flex items-center justify-center animate-glow-pulse shadow-2xl">
                <Briefcase className="w-16 h-16 text-primary-foreground" />
              </div>
              
              <div className="flex-1 text-center lg:text-left">
                <h1 className="text-4xl font-bold text-gradient mb-2">Zishu Ahmad</h1>
                <h2 className="text-2xl text-primary font-semibold mb-3">Senior Full Stack Developer</h2>
                <p className="text-lg text-muted-foreground mb-4">Age: 19 Years | Available for Immediate Start</p>
                
                <div className="flex flex-wrap justify-center lg:justify-start gap-4 mb-4">
                  <div className="flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full">
                    <Mail className="w-4 h-4 text-primary" />
                    <span className="text-sm font-medium">zishu.dev@gmail.com</span>
                  </div>
                  <div className="flex items-center gap-2 bg-chart-2/10 px-4 py-2 rounded-full">
                    <Phone className="w-4 h-4 text-chart-2" />
                    <span className="text-sm font-medium">Available on Request</span>
                  </div>
                </div>
                
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Passionate developer specializing in MERN stack with expertise in building scalable, 
                  high-performance web applications. Committed to delivering exceptional user experiences.
                </p>
              </div>
            </div>
          </div>

          {/* Professional Stats */}
          <div className="grid md:grid-cols-4 gap-6 mb-8">
            <div className="glass-effect text-center p-6 rounded-2xl border border-primary/20 hover-lift">
              <div className="text-3xl font-bold text-primary mb-2">25+</div>
              <div className="text-sm text-muted-foreground font-medium">Projects Delivered</div>
            </div>
            <div className="glass-effect text-center p-6 rounded-2xl border border-chart-2/20 hover-lift">
              <div className="text-3xl font-bold text-chart-2 mb-2">2.5+</div>
              <div className="text-sm text-muted-foreground font-medium">Years Experience</div>
            </div>
            <div className="glass-effect text-center p-6 rounded-2xl border border-chart-3/20 hover-lift">
              <div className="text-3xl font-bold text-chart-3 mb-2">15+</div>
              <div className="text-sm text-muted-foreground font-medium">Technologies</div>
            </div>
            <div className="glass-effect text-center p-6 rounded-2xl border border-chart-4/20 hover-lift">
              <div className="text-3xl font-bold text-chart-4 mb-2">98%</div>
              <div className="text-sm text-muted-foreground font-medium">Client Satisfaction</div>
            </div>
          </div>

          {/* Core Competencies */}
          <div className="glass-effect rounded-3xl p-8 mb-8 border border-primary/20">
            <h3 className="text-2xl font-bold text-gradient mb-8 text-center">Core Competencies</h3>
            <div className="grid md:grid-cols-2 gap-6">
              {resumeHighlights.map((item, index) => {
                const Icon = item.icon;
                return (
                  <div 
                    key={index}
                    className="flex items-start space-x-4 p-6 bg-gradient-to-br from-secondary/10 to-primary/5 rounded-2xl hover-lift border border-primary/10"
                  >
                    <div className="w-12 h-12 bg-gradient-to-br from-primary to-chart-2 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
                      <Icon className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg mb-2 text-foreground">{item.title}</h4>
                      <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Key Achievements */}
          <div className="glass-effect rounded-3xl p-8 mb-8 border border-primary/20">
            <h3 className="text-2xl font-bold text-gradient mb-8 text-center">Key Achievements</h3>
            <div className="grid md:grid-cols-2 gap-4">
              {achievements.map((achievement, index) => (
                <div key={index} className="flex items-start gap-3 p-4 bg-primary/5 rounded-xl hover-lift">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-sm text-muted-foreground leading-relaxed">{achievement}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Action Section */}
          <div className="glass-effect rounded-3xl p-8 mb-8 border border-primary/20">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-gradient mb-4">Download Resume</h3>
              <p className="text-muted-foreground mb-6">Get the complete professional resume with detailed experience and portfolio links</p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg" 
                  className="hover-lift animate-shimmer group bg-gradient-to-r from-primary to-chart-2 text-primary-foreground shadow-lg"
                >
                  <Download className="w-5 h-5 mr-2 group-hover:animate-bounce" />
                  Download PDF Resume
                </Button>
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="hover-lift border-glow group border-2 border-primary/30"
                >
                  <Eye className="w-5 h-5 mr-2 group-hover:animate-bounce" />
                  View Online Portfolio
                </Button>
              </div>
            </div>
          </div>

          {/* Job Opportunity CTA */}
          <div className="text-center bg-gradient-to-r from-primary/10 via-chart-2/5 to-primary/10 rounded-3xl p-12 border-2 border-primary/20 animate-glow-pulse shadow-2xl">
            <div className="w-16 h-16 bg-gradient-to-br from-primary to-chart-2 rounded-2xl flex items-center justify-center mx-auto mb-6 animate-bounce">
              <Zap className="w-8 h-8 text-primary-foreground" />
            </div>
            <h3 className="text-3xl font-bold text-gradient mb-4">Ready for Your Next Hire?</h3>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
              I'm actively seeking opportunities to join innovative teams and contribute to meaningful projects. 
              Let's discuss how my expertise can drive your company's success.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="hover-lift animate-shimmer bg-gradient-to-r from-primary to-chart-2 text-primary-foreground shadow-lg"
              >
                Schedule Interview
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="hover-lift border-glow border-2 border-primary/30"
              >
                View Full Portfolio
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;