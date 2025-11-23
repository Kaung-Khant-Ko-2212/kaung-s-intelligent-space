import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";

const ProjectsEnhanced = () => {
  const projects = [
    {
      title: "Deepfake Voice Detection with Wav2Vec2 and LCNN",
      description:
        "A hybrid deep learning framework for detecting synthetic speech and voice cloning attacks using Wav2Vec2 feature extraction and a Light CNN (LCNN) backend.",
      tags: ["PyTorch", "Wav2Vec2", "LCNN", "Deepfake Detection"],
      link: "https://github.com/Kaung-Khant-Ko-2212/Deepfake-Voice-Detection-with-Wav2Vec2-and-LCNN",
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      title: "AI-Powered Healthcare Management System",
      description:
        "End-to-end digital health platform that connects patients, doctors, and administrators through intelligent automation, real-time analytics, and AI Chatbot.",
      tags: ["React", "Spring Boot", "MySQL", "REST API"],
      link: "https://github.com/Kaung-Khant-Ko-2212/AI-Powered-Healthcare-Management-System",
      gradient: "from-purple-500 to-pink-500",
    },
    {
      title: "Mahawthada: The AI Judge",
      description:
        "Mahawthada is an AI-powered legal assistant platform designed to analyze legal cases, generate verdicts, and provide legal insights using advanced language models and knowledge bases.",
      tags: ["LLM", "Legal Assistant", "NLP", "AI"],
      link: "https://github.com/taite-ang-saiyin/Mahawthader",
      gradient: "from-green-500 to-emerald-500",
    },
    {
      title: "Fuzzy AI Drone Swarm Coordination System",
      description:
        "A fuzzy logic-based system for coordinating a swarm of drones to achieve cooperative behaviors such as formation flying, obstacle avoidance, and target tracking.",
      tags: ["Fuzzy Logic", "Coordinations", "Deep RL", "AI"],
      link: "https://github.com/taite-ang-saiyin/Fuzzy-ai-drone-swarm-coordination",
      gradient: "from-orange-500 to-red-500",
    },
    {
      title: "Virtual Tour of Our Solar System",
      description:
        "An interactive Python/OpenGL virtual tour of the Solar System that renders textured 3D planets, provides informational pages for each world, and includes simulation examples (eclipses, orbits, and visual aids) for educational presentations.",
      tags: ["Python", "OpenGL", "3D Rendering", "Educational"],
      link: "https://github.com/taite-ang-saiyin/Virtual-Tour-of-Our-Solar-System",
      gradient: "from-indigo-500 to-blue-500",
    },
    {
      title: "RAMbo Cybersecurity Chatbot",
      description:
        "RAMbo is a multilingual AI chatbot that protects low-literacy users in rural Myanmar from phishing, scam links, and QR threats using voice input, real-time detection, and gamified cybersecurity education—even offering recovery advice after an attack.",
      tags: ["LLM", "Security", "ML", "Education"],
      link: "#",
      gradient: "from-teal-500 to-cyan-500",
    },
    {
      title: "Skincare Recommendation Chatbot Using Prolog",
      description:
        "The Skincare Recommendation Chatbot is a Python program that uses a Prolog knowledge base to provide personalized skincare routine tips and product suggestions based on a user's specified skin type.",
      tags: ["Prolog", "Python", "LLM", "React"],
      link: "https://github.com/Kaung-Khant-Ko-2212/Skincare-Recommendation-Chatbot-Using-Prolog",
      gradient: "from-yellow-500 to-amber-500",
    },
    {
      title: "Deepfake Voice Detection: Countering Deepfake Audio with Deep Learning Architectures",
      description:
        "The paper, Deepfake Voice Detection: Countering Deepfake Audio with Deep Learning Architectures, public in IEEE Xplore from the 6th ICAIT, systematically compares three deep learning architectures—a hybrid CNN-RNN, a CNN-LSTM ensemble, and a Wav2Vec2 with LCNN system—to advance the detection of deepfake audio by evaluating their trade-offs on benchmark datasets like ASVspoof 2019, WaveFake, and FoR.",
      tags: ["Deepfake", "Voice Detection", "Wav2Vec2", "CNN-RNN", "Ensemble Learning"],
      link: "https://ieeexplore.ieee.org/document/11236771",
      gradient: "from-rose-500 to-pink-500",
      fullWidth: true,
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
              className={`group relative flex ${project.fullWidth ? 'md:col-span-1 lg:col-span-2' : ''}`}
              style={{
                animation: "fade-in 0.6s ease-out",
                animationDelay: `${index * 0.1}s`,
                animationFillMode: "backwards",
              }}
            >
              {/* Glow effect on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} rounded-3xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500`} />
              
              <div className="relative bg-slate-900/80 backdrop-blur-xl rounded-3xl p-6 border border-slate-700/50 shadow-2xl hover:shadow-cyan-500/20 hover:border-cyan-500/50 transition-all duration-500 hover:-translate-y-2 overflow-hidden flex flex-col h-full w-full">
                {/* Top gradient bar */}
                <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${project.gradient}`} />
                
                {/* Holographic effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                
                <div className="relative flex flex-col h-full">
                  <div className="flex items-center justify-center mb-4 relative">
                    <h3 className="text-xl font-semibold text-cyan-300 group-hover:text-cyan-200 transition-colors text-center">
                      {project.title}
                    </h3>
                    
                  </div>

                  <p className="text-slate-400 text-sm mb-4 leading-relaxed text-justify flex-grow">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4 justify-center">
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
                    className={`w-full bg-gradient-to-r ${project.gradient} text-white border-0 hover:shadow-lg hover:shadow-cyan-500/50 transition-all group-hover:scale-105 mt-auto`}
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
