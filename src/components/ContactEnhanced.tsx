import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Github, Linkedin, Send } from "lucide-react";
import { toast } from "sonner";

const ContactEnhanced = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Message sent! I'll get back to you soon.");
    setFormData({ name: "", email: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="py-24 bg-gradient-to-br from-slate-950 via-blue-950 to-slate-950 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-cyan-500/30 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-purple-500/30 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
            Get In Touch
          </span>
        </h2>

        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-6">
            <div className="bg-slate-900/80 backdrop-blur-xl rounded-3xl p-8 border border-slate-700/50 shadow-2xl relative overflow-hidden group">
              {/* Gradient bar */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-500 to-purple-500" />
              
              <h3 className="text-2xl font-semibold mb-6 text-cyan-300">Let's Connect</h3>
              <p className="text-slate-400 leading-relaxed mb-6">
                I'm always open to discussing new projects, creative ideas, or opportunities
                to be part of your vision. Feel free to reach out!
              </p>

              <div className="space-y-4">
                <Button
                  variant="outline"
                  className="w-full justify-start gap-3 h-auto py-4 bg-slate-800/50 backdrop-blur-sm border border-cyan-500/30 hover:bg-cyan-500/20 hover:border-cyan-400/50 text-slate-300 hover:text-cyan-300 transition-all group/btn"
                  onClick={() => window.open("mailto:kaungkhantko@example.com")}
                >
                  <div className="p-2 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-lg group-hover/btn:shadow-lg group-hover/btn:shadow-cyan-500/50 transition-all">
                    <Mail className="w-5 h-5 text-white" />
                  </div>
                  <div className="text-left">
                    <div className="font-semibold">Email</div>
                    <div className="text-sm opacity-70">kaungkhantko@example.com</div>
                  </div>
                </Button>

                <Button
                  variant="outline"
                  className="w-full justify-start gap-3 h-auto py-4 bg-slate-800/50 backdrop-blur-sm border border-purple-500/30 hover:bg-purple-500/20 hover:border-purple-400/50 text-slate-300 hover:text-purple-300 transition-all group/btn"
                  onClick={() => window.open("https://github.com/kaungkhantko", "_blank")}
                >
                  <div className="p-2 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg group-hover/btn:shadow-lg group-hover/btn:shadow-purple-500/50 transition-all">
                    <Github className="w-5 h-5 text-white" />
                  </div>
                  <div className="text-left">
                    <div className="font-semibold">GitHub</div>
                    <div className="text-sm opacity-70">@kaungkhantko</div>
                  </div>
                </Button>

                <Button
                  variant="outline"
                  className="w-full justify-start gap-3 h-auto py-4 bg-slate-800/50 backdrop-blur-sm border border-blue-500/30 hover:bg-blue-500/20 hover:border-blue-400/50 text-slate-300 hover:text-blue-300 transition-all group/btn"
                  onClick={() =>
                    window.open("https://linkedin.com/in/kaungkhantko", "_blank")
                  }
                >
                  <div className="p-2 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg group-hover/btn:shadow-lg group-hover/btn:shadow-blue-500/50 transition-all">
                    <Linkedin className="w-5 h-5 text-white" />
                  </div>
                  <div className="text-left">
                    <div className="font-semibold">LinkedIn</div>
                    <div className="text-sm opacity-70">Kaung Khant Ko</div>
                  </div>
                </Button>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-slate-900/80 backdrop-blur-xl rounded-3xl p-8 border border-slate-700/50 shadow-2xl relative overflow-hidden">
            {/* Gradient bar */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-500 to-cyan-500" />
            
            <h3 className="text-2xl font-semibold mb-6 text-cyan-300">Send a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Input
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="bg-slate-800/50 backdrop-blur-sm border-slate-600/50 text-slate-200 placeholder:text-slate-500 focus:border-cyan-500/50 focus:ring-cyan-500/20"
                />
              </div>
              <div>
                <Input
                  name="email"
                  type="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="bg-slate-800/50 backdrop-blur-sm border-slate-600/50 text-slate-200 placeholder:text-slate-500 focus:border-cyan-500/50 focus:ring-cyan-500/20"
                />
              </div>
              <div>
                <Textarea
                  name="message"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="bg-slate-800/50 backdrop-blur-sm border-slate-600/50 text-slate-200 placeholder:text-slate-500 resize-none focus:border-cyan-500/50 focus:ring-cyan-500/20"
                />
              </div>
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg blur-lg opacity-50 group-hover:opacity-75 transition-opacity" />
                <Button
                  type="submit"
                  className="relative w-full gap-2 py-6 text-lg bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 shadow-2xl shadow-cyan-500/50 hover:shadow-cyan-500/70 transition-all hover:scale-105 border border-cyan-400/50"
                >
                  <Send className="w-5 h-5" />
                  Send Message
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactEnhanced;
