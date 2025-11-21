import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";

const ProjectsEnhanced = () => {
  const projects = [
    {
      title: "3D Morphable Model & Facial Projection",
      description:
        "Advanced facial modeling system using 3D morphable models for realistic face reconstruction and projection.",
      tags: ["Computer Vision", "3D Graphics", "Python", "OpenCV"],
      link: "#",
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      title: "Real-time Language Translator",
      description:
        "End-to-end translation system with speech-to-text, neural translation, and text-to-speech capabilities.",
      tags: ["NLP", "Deep Learning", "STT", "TTS"],
      link: "#",
      gradient: "from-purple-500 to-pink-500",
    },
    {
      title: "Medical AI Chatbot",
      description:
        "Intelligent medical assistant powered by MedLlama for accurate health information and consultation.",
      tags: ["LLM", "Healthcare", "NLP", "AI"],
      link: "#",
      gradient: "from-green-500 to-emerald-500",
    },
    {
      title: "OpenGL Solar System Renderer",
      description:
        "High-performance 3D solar system visualization with advanced rendering techniques and realistic physics.",
      tags: ["OpenGL", "3D Graphics", "C++", "Physics"],
      link: "#",
      gradient: "from-orange-500 to-red-500",
    },
    {
      title: "Fullstack E-Commerce Platform",
      description:
        "Modern e-commerce solution built with React frontend and Spring Boot backend with MySQL database.",
      tags: ["React", "Spring Boot", "MySQL", "REST API"],
      link: "#",
      gradient: "from-indigo-500 to-blue-500",
    },
    {
      title: "Face Recognition Password Reset",
      description:
        "Secure authentication system using facial recognition for password recovery and identity verification.",
      tags: ["Computer Vision", "Security", "ML", "Authentication"],
      link: "#",
      gradient: "from-teal-500 to-cyan-500",
    },
    {
      title: "Knowledge Graph Builder",
      description:
        "Automated system for extracting and building knowledge graphs from unstructured data sources.",
      tags: ["Knowledge Engineering", "NLP", "Graph DB", "Python"],
      link: "#",
      gradient: "from-violet-500 to-purple-500",
    },
    {
      title: "Neural Style Transfer App",
      description:
        "Real-time artistic style transfer application using convolutional neural networks.",
      tags: ["Deep Learning", "CNN", "PyTorch", "Computer Vision"],
      link: "#",
      gradient: "from-pink-500 to-rose-500",
    },
  ];

  return (
    <section id="projects" className="py-24 bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1.5s" }} />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
            Featured Projects
          </span>
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative"
              style={{
                animation: "fade-in 0.6s ease-out",
                animationDelay: `${index * 0.1}s`,
                animationFillMode: "backwards",
              }}
            >
              {/* Glow effect on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} rounded-3xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500`} />
              
              <div className="relative bg-slate-900/80 backdrop-blur-xl rounded-3xl p-6 border border-slate-700/50 shadow-2xl hover:shadow-cyan-500/20 hover:border-cyan-500/50 transition-all duration-500 hover:-translate-y-2 overflow-hidden">
                {/* Top gradient bar */}
                <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${project.gradient}`} />
                
                {/* Holographic effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                
                <div className="relative">
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="text-xl font-semibold text-cyan-300 group-hover:text-cyan-200 transition-colors">
                      {project.title}
                    </h3>
                    <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                      <Button
                        size="icon"
                        variant="ghost"
                        className="h-8 w-8 bg-slate-800/50 hover:bg-cyan-500/20 border border-cyan-500/30 hover:border-cyan-400"
                        onClick={() => window.open(project.link, "_blank")}
                      >
                        <Github className="w-4 h-4 text-cyan-400" />
                      </Button>
                      <Button
                        size="icon"
                        variant="ghost"
                        className="h-8 w-8 bg-slate-800/50 hover:bg-cyan-500/20 border border-cyan-500/30 hover:border-cyan-400"
                        onClick={() => window.open(project.link, "_blank")}
                      >
                        <ExternalLink className="w-4 h-4 text-cyan-400" />
                      </Button>
                    </div>
                  </div>

                  <p className="text-slate-400 text-sm mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <Badge
                        key={tag}
                        className="text-xs px-2 py-1 bg-slate-800/80 border border-slate-600/50 text-slate-300 hover:bg-cyan-500/20 hover:border-cyan-500/50 hover:text-cyan-300 transition-all"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  <Button
                    variant="outline"
                    className={`w-full bg-gradient-to-r ${project.gradient} text-white border-0 hover:shadow-lg hover:shadow-cyan-500/50 transition-all group-hover:scale-105`}
                    onClick={() => window.open(project.link, "_blank")}
                  >
                    View Project →
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsEnhanced;
