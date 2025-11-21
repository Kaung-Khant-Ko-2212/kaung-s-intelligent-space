import { GraduationCap, Briefcase, Award, Rocket } from "lucide-react";

const TimelineEnhanced = () => {
  const events = [
    {
      icon: GraduationCap,
      year: "2022 - Present",
      title: "Knowledge Engineering Student",
      organization: "University of Technology",
      description:
        "Specializing in AI, machine learning, and intelligent systems. Focus on knowledge representation, reasoning, and semantic technologies.",
      type: "education",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: Briefcase,
      year: "Summer 2024",
      title: "AI Research Intern",
      organization: "Tech Innovation Labs",
      description:
        "Developed advanced NLP models for real-time translation. Worked on improving accuracy and reducing latency in speech-to-text systems.",
      type: "work",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: Award,
      year: "2023",
      title: "Best Project Award",
      organization: "University Hackathon",
      description:
        "Won first place for developing an AI-powered medical chatbot that provides accurate health information using MedLlama.",
      type: "achievement",
      color: "from-amber-500 to-orange-500",
    },
    {
      icon: Rocket,
      year: "2023",
      title: "Published Research",
      organization: "International Conference on AI",
      description:
        "Published paper on 3D facial reconstruction using morphable models and deep learning techniques.",
      type: "achievement",
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: Briefcase,
      year: "Summer 2023",
      title: "Software Engineering Intern",
      organization: "Digital Solutions Inc.",
      description:
        "Built full-stack e-commerce platform using React and Spring Boot. Implemented secure authentication and payment processing.",
      type: "work",
      color: "from-indigo-500 to-blue-500",
    },
    {
      icon: GraduationCap,
      year: "2021",
      title: "Computer Science Foundation",
      organization: "Tech Prep Academy",
      description:
        "Completed intensive program covering algorithms, data structures, and software engineering principles.",
      type: "education",
      color: "from-teal-500 to-cyan-500",
    },
  ];

  return (
    <section id="timeline" className="py-24 bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/3 left-1/3 w-96 h-96 bg-cyan-500/30 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/3 right-1/3 w-96 h-96 bg-purple-500/30 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1.5s" }} />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
            Journey & Milestones
          </span>
        </h2>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-cyan-500 via-blue-500 to-purple-500 rounded-full shadow-lg shadow-cyan-500/50" />

            <div className="space-y-12">
              {events.map((event, index) => (
                <div
                  key={index}
                  className="relative flex gap-6"
                  style={{
                    animation: "fade-in 0.6s ease-out",
                    animationDelay: `${index * 0.15}s`,
                    animationFillMode: "backwards",
                  }}
                >
                  {/* Icon */}
                  <div className="relative z-10 flex-shrink-0">
                    <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${event.color} p-1 shadow-2xl animate-glow-pulse`}>
                      <div className="w-full h-full bg-slate-950 rounded-full flex items-center justify-center">
                        <event.icon className={`w-7 h-7 bg-gradient-to-br ${event.color} bg-clip-text text-transparent`} style={{ filter: "drop-shadow(0 0 8px currentColor)" }} />
                      </div>
                    </div>
                    {/* Connecting line dot */}
                    <div className="absolute top-1/2 -translate-y-1/2 -left-8 w-8 h-0.5 bg-gradient-to-r from-transparent to-cyan-500" />
                  </div>

                  {/* Content */}
                  <div className="flex-1 group relative">
                    {/* Glow effect */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${event.color} rounded-3xl blur-xl opacity-0 group-hover:opacity-20 transition-opacity duration-500`} />
                    
                    <div className="relative bg-slate-900/80 backdrop-blur-xl rounded-3xl p-6 border border-slate-700/50 shadow-2xl hover:shadow-cyan-500/20 hover:border-cyan-500/50 transition-all duration-500 overflow-hidden">
                      {/* Top gradient bar */}
                      <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${event.color}`} />
                      
                      {/* Holographic effect */}
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                      
                      <div className="relative">
                        <div className={`text-sm font-semibold bg-gradient-to-r ${event.color} bg-clip-text text-transparent mb-2`}>
                          {event.year}
                        </div>
                        <h3 className="text-xl font-bold text-cyan-300 mb-1 group-hover:text-cyan-200 transition-colors">
                          {event.title}
                        </h3>
                        <div className="text-sm font-medium text-slate-400 mb-3">
                          {event.organization}
                        </div>
                        <p className="text-slate-400 leading-relaxed">{event.description}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TimelineEnhanced;
