import { Badge } from "@/components/ui/badge";
import { Brain, Code, Sparkles, Database } from "lucide-react";

const About = () => {
  const skills = [
    "Python",
    "C++",
    "Java",
    "Machine Learning",
    "React",
    "NLP",
    "Computer Vision",
    "Deep Learning",
  ];

  const highlights = [
    {
      icon: Brain,
      title: "AI & ML Expert",
      description: "Specializing in intelligent systems and neural networks",
    },
    {
      icon: Code,
      title: "Full-Stack Developer",
      description: "Building scalable applications with modern tech stacks",
    },
    {
      icon: Sparkles,
      title: "Creative Problem Solver",
      description: "Transforming complex challenges into elegant solutions",
    },
    {
      icon: Database,
      title: "Data Engineer",
      description: "Designing robust knowledge representation systems",
    },
  ];

  return (
    <section id="about" className="py-24 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 relative overflow-hidden">
      {/* Animated background effects */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
      
      <div className="container mx-auto px-6 relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
            About Me
          </span>
        </h2>

        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Left Column - Bio */}
          <div className="space-y-6">
            <div className="bg-slate-900/70 backdrop-blur-xl rounded-3xl p-8 border border-cyan-500/30 shadow-2xl shadow-cyan-500/20 hover:shadow-cyan-500/40 transition-all hover:border-cyan-500/50 relative overflow-hidden group">
              {/* Holographic effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-500/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />

              <h3 className="text-2xl font-semibold mb-4 text-cyan-300 relative">
                Knowledge Engineering Student
              </h3>
              
              {/* Added text-justify here */}
              <p className="text-slate-300 leading-relaxed mb-4 relative text-justify">
                I'm passionate about the intersection of artificial intelligence and human
                creativity. My journey in Knowledge Engineering has equipped me with a deep
                understanding of how to build systems that don't just compute, but truly
                understand and reason.
              </p>

              {/* Added text-justify here */}
              <p className="text-slate-300 leading-relaxed mb-4 relative text-justify">
                From real-time Deepfake Voice Detection to 3D model simulations, I love pushing
                the boundaries of what's possible with AI. Every project is an opportunity
                to blend cutting-edge technology with practical, human-centered solutions.
              </p>

              {/* Added text-justify here */}
              <p className="text-slate-300 leading-relaxed relative text-justify">
                My interests span across NLP, computer vision, machine learning, and deep learning. I believe in building technology that's not just
                powerful, but also accessible and meaningful.
              </p>
            </div>

            {/* Skills */}
            <div className="flex flex-wrap gap-2">
              {skills.map((skill) => (
                <Badge
                  key={skill}
                  className="px-4 py-2 text-sm font-medium bg-slate-800/80 backdrop-blur-sm border border-cyan-500/30 text-cyan-300 hover:bg-cyan-500/20 hover:border-cyan-400/50 hover:text-cyan-200 transition-all cursor-default shadow-lg hover:shadow-cyan-500/30"
                >
                  {skill}
                </Badge>
              ))}
            </div>
          </div>

          {/* Right Column - Highlights */}
          <div className="space-y-4">
            {highlights.map((highlight, index) => (
              <div
                key={index}
                className="bg-slate-900/70 backdrop-blur-xl rounded-3xl p-6 border border-blue-500/30 shadow-2xl shadow-blue-500/20 hover:shadow-blue-500/40 hover:border-blue-500/50 transition-all group relative overflow-hidden"
              >
                {/* Holographic sweep */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-500/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                
                <div className="flex items-start gap-4 relative">
                  <div className="p-3 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-xl group-hover:from-blue-500/30 group-hover:to-cyan-500/30 transition-colors border border-blue-400/30 shadow-lg shadow-blue-500/20">
                    <highlight.icon className="w-6 h-6 text-cyan-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-2 text-cyan-300 relative">
                      {highlight.title}
                    </h4>
                    <p className="text-slate-400 text-sm relative">{highlight.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
