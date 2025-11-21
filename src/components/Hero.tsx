import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.jpg";
import profileAvatar from "@/assets/profile-avatar.jpg";

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: `url(${heroBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-background/60 backdrop-blur-sm" />

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-primary/30 rounded-full animate-particle"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 15}s`,
              animationDuration: `${15 + Math.random() * 10}s`,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <div className="flex justify-center mb-8 animate-fade-in">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-accent/30 rounded-full blur-2xl animate-glow-pulse" />
            <img
              src={profileAvatar}
              alt="Kaung Khant Ko"
              className="relative w-32 h-32 rounded-full object-cover border-4 border-primary/50 shadow-2xl"
            />
          </div>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-6 animate-fade-in">
          Hi, I'm{" "}
          <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Kaung Khant Ko
          </span>
        </h1>

        <p className="text-xl md:text-2xl text-muted-foreground mb-4 animate-fade-in-delay">
          Knowledge Engineering Student & AI Developer
        </p>

        <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto animate-fade-in-delay">
          I build intelligent systems that understand, reason, and create.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-delay">
          <Button
            size="lg"
            onClick={() => scrollToSection("projects")}
            className="text-lg px-8 py-6 shadow-lg hover:shadow-xl transition-all hover:scale-105"
          >
            View My Work
          </Button>
          <Button
            size="lg"
            variant="outline"
            onClick={() => window.open("/cv.pdf", "_blank")}
            className="text-lg px-8 py-6 shadow-lg hover:shadow-xl transition-all hover:scale-105 border-2"
          >
            Download CV
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
