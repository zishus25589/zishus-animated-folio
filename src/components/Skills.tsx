import { useState } from 'react';

const Skills = () => {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  const skillCategories = [
    {
      title: "Frontend",
      skills: [
        { name: "JavaScript", level: 85, color: "from-yellow-500 to-yellow-600" },
        { name: "TypeScript", level: 80, color: "from-blue-500 to-blue-600" },
        { name: "React", level: 85, color: "from-cyan-500 to-cyan-600" },
        { name: "HTML/CSS", level: 90, color: "from-orange-500 to-orange-600" },
      ]
    },
    {
      title: "Backend",
      skills: [
        { name: "Node.js", level: 75, color: "from-green-500 to-green-600" },
        { name: "Python", level: 80, color: "from-blue-400 to-blue-500" },
        { name: "Databases", level: 70, color: "from-purple-500 to-purple-600" },
        { name: "APIs", level: 85, color: "from-red-500 to-red-600" },
      ]
    },
    {
      title: "Tools & Others",
      skills: [
        { name: "Git", level: 80, color: "from-gray-500 to-gray-600" },
        { name: "VS Code", level: 90, color: "from-blue-600 to-blue-700" },
        { name: "Linux", level: 70, color: "from-yellow-600 to-yellow-700" },
        { name: "Problem Solving", level: 88, color: "from-primary to-accent" },
      ]
    }
  ];

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">Skills & Technologies</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Continuously expanding my toolkit with modern technologies and best practices
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div 
              key={category.title}
              className="bg-card p-6 rounded-lg border border-border hover:border-primary/50 transition-all duration-300"
              style={{animationDelay: `${categoryIndex * 0.2}s`}}
            >
              <h3 className="text-xl font-semibold mb-6 text-foreground">{category.title}</h3>
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div 
                    key={skill.name}
                    className="group"
                    onMouseEnter={() => setHoveredSkill(skill.name)}
                    onMouseLeave={() => setHoveredSkill(null)}
                  >
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium text-foreground">{skill.name}</span>
                      <span className="text-xs text-muted-foreground">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-secondary rounded-full h-2 overflow-hidden">
                      <div 
                        className={`h-full rounded-full bg-gradient-to-r ${skill.color} transition-all duration-1000 ease-out`}
                        style={{
                          width: hoveredSkill === skill.name ? `${skill.level}%` : '0%',
                          animationDelay: `${skillIndex * 0.1}s`
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;