import { Badge } from "@/components/ui/badge";
import { Brain, Code, Sparkles, Database } from "lucide-react";

const About = () => {
  const skills = [
    "Knowledge Graphs",
    "Python",
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
    <section id="about" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
          About Me
        </h2>

        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Left Column - Bio */}
          <div className="space-y-6">
            <div className="bg-card/50 backdrop-blur-sm rounded-2xl p-8 border border-border shadow-lg hover:shadow-xl transition-all">
              <h3 className="text-2xl font-semibold mb-4 text-foreground">
                Knowledge Engineering Student
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                I'm passionate about the intersection of artificial intelligence and human
                creativity. My journey in Knowledge Engineering has equipped me with a deep
                understanding of how to build systems that don't just compute, but truly
                understand and reason.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                From real-time language translation to 3D facial modeling, I love pushing
                the boundaries of what's possible with AI. Every project is an opportunity
                to blend cutting-edge technology with practical, human-centered solutions.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                My interests span across NLP, computer vision, deep learning, and advanced
                rendering techniques. I believe in building technology that's not just
                powerful, but also accessible and meaningful.
              </p>
            </div>

            {/* Skills */}
            <div className="flex flex-wrap gap-2">
              {skills.map((skill) => (
                <Badge
                  key={skill}
                  variant="secondary"
                  className="px-4 py-2 text-sm font-medium hover:bg-primary hover:text-primary-foreground transition-colors cursor-default"
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
                className="bg-card/50 backdrop-blur-sm rounded-2xl p-6 border border-border shadow-lg hover:shadow-xl hover:border-primary/50 transition-all group"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                    <highlight.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-2 text-foreground">
                      {highlight.title}
                    </h4>
                    <p className="text-muted-foreground text-sm">{highlight.description}</p>
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
