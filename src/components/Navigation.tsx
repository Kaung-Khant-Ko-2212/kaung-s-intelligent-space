import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

const Navigation = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-slate-950/80 backdrop-blur-xl border-b border-cyan-500/30 shadow-lg shadow-cyan-500/20"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <button
            onClick={() => scrollToSection("hero")}
            className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent hover:from-cyan-300 hover:to-blue-400 transition-all"
          >
            KKK
          </button>

          <div className="hidden md:flex items-center gap-8">
            {["About", "Projects", "Skills", "Timeline", "Contact"].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className="text-sm font-medium text-slate-300 hover:text-cyan-400 transition-colors relative group"
              >
                {item}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-500 group-hover:w-full transition-all duration-300" />
              </button>
            ))}
          </div>

          <Button
            onClick={() => {
              const link = document.createElement("a");
              link.href = `${import.meta.env.BASE_URL}Kaung Khant Ko.pdf`;
              link.download = "Kaung Khant Ko.pdf";
              link.click();
            }}
            className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 shadow-lg shadow-blue-500/50 hover:shadow-cyan-500/50 transition-all hover:scale-105 border border-cyan-400/50"
          >
            Download CV
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
