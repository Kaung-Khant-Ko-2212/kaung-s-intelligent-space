import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "3D Morphable Model & Facial Projection",
      description:
        "Advanced facial modeling system using 3D morphable models for realistic face reconstruction and projection.",
      tags: ["Computer Vision", "3D Graphics", "Python", "OpenCV"],
      link: "#",
    },
    {
      title: "Real-time Language Translator",
      description:
        "End-to-end translation system with speech-to-text, neural translation, and text-to-speech capabilities.",
      tags: ["NLP", "Deep Learning", "STT", "TTS"],
      link: "#",
    },
    {
      title: "Medical AI Chatbot",
      description:
        "Intelligent medical assistant powered by MedLlama for accurate health information and consultation.",
      tags: ["LLM", "Healthcare", "NLP", "AI"],
      link: "#",
    },
    {
      title: "OpenGL Solar System Renderer",
      description:
        "High-performance 3D solar system visualization with advanced rendering techniques and realistic physics.",
      tags: ["OpenGL", "3D Graphics", "C++", "Physics"],
      link: "#",
    },
    {
      title: "Fullstack E-Commerce Platform",
      description:
        "Modern e-commerce solution built with React frontend and Spring Boot backend with MySQL database.",
      tags: ["React", "Spring Boot", "MySQL", "REST API"],
      link: "#",
    },
    {
      title: "Face Recognition Password Reset",
      description:
        "Secure authentication system using facial recognition for password recovery and identity verification.",
      tags: ["Computer Vision", "Security", "ML", "Authentication"],
      link: "#",
    },
    {
      title: "Knowledge Graph Builder",
      description:
        "Automated system for extracting and building knowledge graphs from unstructured data sources.",
      tags: ["Knowledge Engineering", "NLP", "Graph DB", "Python"],
      link: "#",
    },
    {
      title: "Neural Style Transfer App",
      description:
        "Real-time artistic style transfer application using convolutional neural networks.",
      tags: ["Deep Learning", "CNN", "PyTorch", "Computer Vision"],
      link: "#",
    },
  ];

  return (
    <section id="projects" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
          Featured Projects
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-card/50 backdrop-blur-sm rounded-2xl p-6 border border-border shadow-lg hover:shadow-2xl hover:border-primary/50 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="flex items-start justify-between mb-4">
                <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <div className="flex gap-2">
                  <Button
                    size="icon"
                    variant="ghost"
                    className="opacity-0 group-hover:opacity-100 transition-opacity"
                    onClick={() => window.open(project.link, "_blank")}
                  >
                    <Github className="w-4 h-4" />
                  </Button>
                  <Button
                    size="icon"
                    variant="ghost"
                    className="opacity-0 group-hover:opacity-100 transition-opacity"
                    onClick={() => window.open(project.link, "_blank")}
                  >
                    <ExternalLink className="w-4 h-4" />
                  </Button>
                </div>
              </div>

              <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <Badge
                    key={tag}
                    variant="secondary"
                    className="text-xs px-2 py-1 hover:bg-primary/20 transition-colors"
                  >
                    {tag}
                  </Badge>
                ))}
              </div>

              <Button
                variant="outline"
                className="w-full mt-4 group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary transition-all"
                onClick={() => window.open(project.link, "_blank")}
              >
                View Project
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
