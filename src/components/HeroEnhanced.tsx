import { Button } from "@/components/ui/button";
import { Suspense } from "react";
import Scene3D from "./Scene3D";
import profileAvatar from "@/assets/my_profile.jpg";

const HeroEnhanced = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-950 via-blue-950 to-purple-950"
    >
      {/* 3D Background */}
      <div className="absolute inset-0 z-0">
        <Suspense fallback={null}>
          <Scene3D />
        </Suspense>
      </div>

      {/* Animated gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-cyan-500/10 animate-gradient-shift bg-[length:200%_200%]" />

      {/* Grid overlay */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `linear-gradient(rgba(59, 130, 246, 0.3) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(59, 130, 246, 0.3) 1px, transparent 1px)`,
          backgroundSize: "50px 50px",
        }}
      />

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-gradient-to-r from-blue-400 to-cyan-400"
            style={{
              width: `${Math.random() * 6 + 2}px`,
              height: `${Math.random() * 6 + 2}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `particle ${15 + Math.random() * 15}s linear infinite`,
              animationDelay: `${Math.random() * 5}s`,
              filter: "blur(1px)",
              boxShadow: "0 0 10px currentColor",
            }}
          />
        ))}
      </div>

      {/* Spotlight effects */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/30 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/30 rounded-full blur-3xl animate-pulse delay-1000" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        {/* Avatar with holographic effect */}
        <div className="flex justify-center mb-8 animate-fade-in">
          <div className="relative group">
            {/* Outer glow rings */}
            <div className="absolute inset-0 -m-8 rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 opacity-50 blur-2xl animate-glow-pulse" />
            <div className="absolute inset-0 -m-4 rounded-full border-2 border-cyan-400/50 animate-rotate-slow" />
            <div className="absolute inset-0 -m-6 rounded-full border border-purple-400/30 animate-rotate-slow" style={{ animationDirection: "reverse" }} />
            
            {/* Avatar */}
            <div className="relative">
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-500/50 to-purple-500/50 blur-xl" />
              <img
                src={profileAvatar}
                alt="Kaung Khant Ko"
                className="relative w-40 h-40 rounded-full object-cover border-4 border-cyan-400/70 shadow-2xl group-hover:scale-110 transition-transform duration-500"
                style={{ boxShadow: "0 0 60px rgba(59, 130, 246, 0.6)" }}
              />
            </div>

            {/* Floating badges */}
            <div className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full flex items-center justify-center shadow-lg animate-bounce-slow">
              <span className="text-xs">🤖</span>
            </div>
            <div className="absolute -bottom-2 -left-2 w-8 h-8 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full flex items-center justify-center shadow-lg animate-bounce-slow" style={{ animationDelay: "1s" }}>
              <span className="text-xs">⚡</span>
            </div>
          </div>
        </div>

        {/* Title with animated gradient */}
        <h1 className="text-5xl md:text-8xl font-bold mb-6 leading-[1.45] md:leading-[1.40] animate-fade-in">
          <span className="inline-block text-white">Hi, I'm{" "}</span>
          <span className="inline-block text-cyan-300 drop-shadow-[0_0_16px_rgba(34,211,238,0.7)]">
            Kaung Khant Ko
          </span>
        </h1>

        {/* Subtitle with glow */}
        <div className="relative inline-block mb-4 animate-fade-in-delay">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-500 blur-2xl opacity-50" />
          <p className="relative text-2xl md:text-3xl font-semibold text-cyan-300 px-6 py-3 rounded-full border border-cyan-400/50 bg-slate-900/50 backdrop-blur-sm">
            Knowledge Engineering Student & AI Developer
          </p>
        </div>

        <p className="text-xl text-slate-300 mb-12 max-w-3xl mx-auto animate-fade-in-delay leading-relaxed">
          Building <span className="text-cyan-400 font-semibold">intelligent systems</span> that understand, reason, and create using cutting-edge{" "}
          <span className="text-purple-400 font-semibold">AI technology</span>
        </p>

        {/* CTA Buttons with enhanced effects */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center animate-fade-in-delay">
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full blur-xl group-hover:blur-2xl transition-all opacity-70" />
            <Button
              size="lg"
              onClick={() => scrollToSection("projects")}
              className="relative text-lg px-10 py-7 bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 shadow-2xl hover:shadow-cyan-500/50 transition-all hover:scale-110 border border-cyan-400/50 font-semibold"
            >
              🚀 View My Work
            </Button>
          </div>

          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full blur-xl group-hover:blur-2xl transition-all opacity-50" />
            <Button
              size="lg"
              variant="outline"
              onClick={() => {
                const link = document.createElement("a");
                link.href = `${import.meta.env.BASE_URL}Kaung Khant Ko.pdf`;
                link.download = "Kaung Khant Ko.pdf";
                link.click();
              }}
              className="relative text-lg px-10 py-7 bg-slate-900/80 backdrop-blur-sm border-2 border-purple-400/70 hover:bg-slate-800 text-purple-300 hover:text-purple-200 shadow-2xl hover:shadow-purple-500/50 transition-all hover:scale-110 font-semibold"
            >
              📄 Download CV
            </Button>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-cyan-400/50 rounded-full flex justify-center pt-2">
            <div className="w-1 h-3 bg-cyan-400 rounded-full animate-pulse" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroEnhanced;
