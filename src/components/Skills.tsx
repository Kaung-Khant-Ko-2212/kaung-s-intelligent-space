import { Code, Brain, Database, Palette, Globe, Cpu } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      icon: Code,
      category: "Programming",
      skills: [
        { name: "Python", level: 95 },
        { name: "Java", level: 90 },
        { name: "JavaScript/TypeScript", level: 85 },
        { name: "C++", level: 80 },
      ],
    },
    {
      icon: Brain,
      category: "AI & Machine Learning",
      skills: [
        { name: "Deep Learning", level: 90 },
        { name: "NLP", level: 88 },
        { name: "Computer Vision", level: 92 },
        { name: "Neural Networks", level: 87 },
      ],
    },
    {
      icon: Globe,
      category: "Web Development",
      skills: [
        { name: "React", level: 90 },
        { name: "Spring Boot", level: 85 },
        { name: "Node.js", level: 80 },
        { name: "REST APIs", level: 88 },
      ],
    },
    {
      icon: Database,
      category: "Data & Databases",
      skills: [
        { name: "MySQL", level: 85 },
        { name: "Knowledge Graphs", level: 90 },
        { name: "Data Engineering", level: 82 },
        { name: "PostgreSQL", level: 80 },
      ],
    },
    {
      icon: Palette,
      category: "3D & Graphics",
      skills: [
        { name: "OpenGL", level: 88 },
        { name: "3D Modeling", level: 85 },
        { name: "Computer Graphics", level: 87 },
        { name: "Rendering", level: 83 },
      ],
    },
    {
      icon: Cpu,
      category: "Tools & Frameworks",
      skills: [
        { name: "PyTorch", level: 90 },
        { name: "TensorFlow", level: 85 },
        { name: "Git", level: 92 },
        { name: "Docker", level: 78 },
      ],
    },
  ];

  return (
    <section id="skills" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
          Skills & Expertise
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-card/50 backdrop-blur-sm rounded-2xl p-6 border border-border shadow-lg hover:shadow-xl hover:border-primary/50 transition-all"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <category.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground">{category.category}</h3>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm font-medium text-foreground">{skill.name}</span>
                      <span className="text-sm text-muted-foreground">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-muted rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-primary to-accent rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${skill.level}%` }}
                      />
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
