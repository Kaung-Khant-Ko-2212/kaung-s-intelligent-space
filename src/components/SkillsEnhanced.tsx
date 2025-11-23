import { Code, Brain, Database, Palette, Globe, Cpu } from "lucide-react";

const SkillsEnhanced = () => {
  const skillCategories = [
    {
      icon: Code,
      category: "Programming",
      skills: [
        { name: "Python", level: 95 },
        { name: "Java", level: 70 },
        { name: "JavaScript/TypeScript", level: 85 },
        { name: "C++", level: 80 },
      ],
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: Brain,
      category: "AI & Machine Learning",
      skills: [
        { name: "Deep Learning", level: 85 },
        { name: "NLP", level: 80 },
        { name: "Computer Vision", level: 90 },
        { name: "Neural Networks", level: 75 },
      ],
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: Globe,
      category: "Web Development",
      skills: [
        { name: "React", level: 70 },
        { name: "Spring Boot", level: 60 },
        { name: "Node.js", level: 0 },
        { name: "REST APIs", level: 75 },
      ],
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: Database,
      category: "Data & Databases",
      skills: [
        { name: "MySQL", level: 85 },
        { name: "Knowledge Bases", level: 90 },
        { name: "PostgreSQL", level: 85 },
      ],
      color: "from-orange-500 to-red-500",
    },
    {
      icon: Palette,
      category: "3D & Graphics",
      skills: [
        { name: "OpenGL", level: 85 },
        { name: "Computer Graphics", level: 85 },
        { name: "Rendering", level: 75 },
      ],
      color: "from-indigo-500 to-blue-500",
    },
    {
      icon: Cpu,
      category: "Tools & Frameworks",
      skills: [
        { name: "PyTorch", level: 90 },
        { name: "TensorFlow", level: 90 },
        { name: "Git", level: 80 },
      ],
      color: "from-teal-500 to-cyan-500",
    },
  ];

  return (
    <section id="skills" className="py-24 bg-gradient-to-br from-slate-950 via-blue-950 to-slate-950 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-500/30 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-purple-500/30 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
      </div>

      {/* Grid pattern */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `linear-gradient(rgba(59, 130, 246, 0.3) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(59, 130, 246, 0.3) 1px, transparent 1px)`,
          backgroundSize: "50px 50px",
        }}
      />

      <div className="container mx-auto px-6 relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
            Skills & Expertise
          </span>
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="group relative"
              style={{
                animation: "fade-in 0.6s ease-out",
                animationDelay: `${index * 0.1}s`,
                animationFillMode: "backwards",
              }}
            >
              {/* Glow effect */}
              <div className={`absolute inset-0 bg-gradient-to-br ${category.color} rounded-3xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500`} />
              
              <div className="relative bg-slate-900/80 backdrop-blur-xl rounded-3xl p-6 border border-slate-700/50 shadow-2xl hover:shadow-cyan-500/20 hover:border-cyan-500/50 transition-all duration-500 overflow-hidden">
                {/* Top gradient bar */}
                <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${category.color}`} />
                
                {/* Holographic effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                
                <div className="relative">
                  <div className="flex items-center gap-3 mb-6">
                    <div className={`p-3 bg-gradient-to-br ${category.color} rounded-xl shadow-lg`}>
                      <category.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-cyan-300">{category.category}</h3>
                  </div>

                  <div className="space-y-4">
                    {category.skills.map((skill, skillIndex) => (
                      <div key={skillIndex}>
                        <div className="flex justify-between mb-2">
                          <span className="text-sm font-medium text-slate-300">{skill.name}</span>
                          <span className="text-sm text-cyan-400 font-semibold">{skill.level}%</span>
                        </div>
                        <div className="h-2 bg-slate-800/80 rounded-full overflow-hidden border border-slate-700/50">
                          <div
                            className={`h-full bg-gradient-to-r ${category.color} rounded-full transition-all duration-1000 ease-out shadow-lg`}
                            style={{
                              width: `${skill.level}%`,
                              boxShadow: `0 0 10px currentColor`,
                            }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsEnhanced;
