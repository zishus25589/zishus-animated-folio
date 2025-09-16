import { ExternalLink, Github, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Projects = () => {
  const projects = [
    {
      title: "Portfolio Website",
      description: "A modern, responsive portfolio built with React and TypeScript featuring smooth animations and a clean design.",
      tech: ["React", "TypeScript", "Tailwind CSS", "Vite"],
      github: "#",
      demo: "#",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&h=300&fit=crop",
      featured: true
    },
    {
      title: "E-Commerce Platform",
      description: "Full-stack e-commerce solution with modern UI, payment integration, and admin dashboard.",
      tech: ["Next.js", "Node.js", "MongoDB", "Stripe"],
      github: "#",
      demo: "#",
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=500&h=300&fit=crop",
      featured: true
    },
    {
      title: "Task Management App",
      description: "Collaborative task management tool with real-time updates and team collaboration features.",
      tech: ["React", "Firebase", "Material-UI", "PWA"],
      github: "#",
      demo: "#",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=500&h=300&fit=crop",
      featured: false
    },
    {
      title: "Weather Dashboard",
      description: "Interactive weather app with location-based forecasts and beautiful data visualizations.",
      tech: ["Vue.js", "Chart.js", "Weather API", "CSS Grid"],
      github: "#",
      demo: "#",
      image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=500&h=300&fit=crop",
      featured: false
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-background to-secondary/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gradient mb-4 animate-slide-up">
            Featured Projects
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto animate-slide-up">
            Explore my latest work and creative solutions
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <div 
              key={index}
              className={`group glass-effect rounded-xl overflow-hidden hover-lift animate-bounce-in ${
                project.featured ? 'lg:col-span-1' : ''
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {project.featured && (
                <div className="absolute top-4 right-4 z-10 bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-semibold flex items-center gap-1">
                  <Star className="w-4 h-4" />
                  Featured
                </div>
              )}
              
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-4 line-clamp-2">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-sm border-glow"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3">
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="flex items-center gap-2 hover-lift"
                    asChild
                  >
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="w-4 h-4" />
                      Code
                    </a>
                  </Button>
                  <Button 
                    size="sm" 
                    className="flex items-center gap-2 hover-lift animate-shimmer"
                    asChild
                  >
                    <a href={project.demo} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-4 h-4" />
                      Live Demo
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button 
            variant="outline" 
            size="lg" 
            className="hover-lift animate-shimmer"
          >
            View All Projects
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;