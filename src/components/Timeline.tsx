import { GraduationCap, Briefcase, Award, Rocket } from "lucide-react";

const Timeline = () => {
  const events = [
    {
      icon: GraduationCap,
      year: "2022 - Present",
      title: "Knowledge Engineering Student",
      organization: "University of Technology",
      description:
        "Specializing in AI, machine learning, and intelligent systems. Focus on knowledge representation, reasoning, and semantic technologies.",
      type: "education",
    },
    {
      icon: Briefcase,
      year: "Summer 2024",
      title: "AI Research Intern",
      organization: "Tech Innovation Labs",
      description:
        "Developed advanced NLP models for real-time translation. Worked on improving accuracy and reducing latency in speech-to-text systems.",
      type: "work",
    },
    {
      icon: Award,
      year: "2023",
      title: "Best Project Award",
      organization: "University Hackathon",
      description:
        "Won first place for developing an AI-powered medical chatbot that provides accurate health information using MedLlama.",
      type: "achievement",
    },
    {
      icon: Rocket,
      year: "2023",
      title: "Published Research",
      organization: "International Conference on AI",
      description:
        "Published paper on 3D facial reconstruction using morphable models and deep learning techniques.",
      type: "achievement",
    },
    {
      icon: Briefcase,
      year: "Summer 2023",
      title: "Software Engineering Intern",
      organization: "Digital Solutions Inc.",
      description:
        "Built full-stack e-commerce platform using React and Spring Boot. Implemented secure authentication and payment processing.",
      type: "work",
    },
    {
      icon: GraduationCap,
      year: "2021",
      title: "Computer Science Foundation",
      organization: "Tech Prep Academy",
      description:
        "Completed intensive program covering algorithms, data structures, and software engineering principles.",
      type: "education",
    },
  ];

  const getTypeColor = (type: string) => {
    switch (type) {
      case "education":
        return "from-blue-500 to-cyan-500";
      case "work":
        return "from-primary to-accent";
      case "achievement":
        return "from-amber-500 to-orange-500";
      default:
        return "from-primary to-accent";
    }
  };

  return (
    <section id="timeline" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
          Journey & Milestones
        </h2>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-accent to-primary/30" />

            <div className="space-y-12">
              {events.map((event, index) => (
                <div key={index} className="relative flex gap-6">
                  {/* Icon */}
                  <div className="relative z-10 flex-shrink-0">
                    <div
                      className={`w-16 h-16 rounded-full bg-gradient-to-br ${getTypeColor(
                        event.type
                      )} p-0.5 shadow-lg`}
                    >
                      <div className="w-full h-full bg-background rounded-full flex items-center justify-center">
                        <event.icon className="w-7 h-7 text-primary" />
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 bg-card/50 backdrop-blur-sm rounded-2xl p-6 border border-border shadow-lg hover:shadow-xl hover:border-primary/50 transition-all group">
                    <div className="text-sm font-semibold text-primary mb-2">{event.year}</div>
                    <h3 className="text-xl font-bold text-foreground mb-1 group-hover:text-primary transition-colors">
                      {event.title}
                    </h3>
                    <div className="text-sm font-medium text-muted-foreground mb-3">
                      {event.organization}
                    </div>
                    <p className="text-muted-foreground leading-relaxed">{event.description}</p>
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

export default Timeline;
