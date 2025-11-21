import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Github, Linkedin, Send } from "lucide-react";
import { toast } from "sonner";

const Contact = () => {
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
    <section id="contact" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
          Get In Touch
        </h2>

        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-6">
            <div className="bg-card/50 backdrop-blur-sm rounded-2xl p-8 border border-border shadow-lg">
              <h3 className="text-2xl font-semibold mb-6 text-foreground">Let's Connect</h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                I'm always open to discussing new projects, creative ideas, or opportunities
                to be part of your vision. Feel free to reach out!
              </p>

              <div className="space-y-4">
                <Button
                  variant="outline"
                  className="w-full justify-start gap-3 h-auto py-4 hover:bg-primary hover:text-primary-foreground transition-colors"
                  onClick={() => window.open("mailto:kaungkhantko@example.com")}
                >
                  <Mail className="w-5 h-5" />
                  <div className="text-left">
                    <div className="font-semibold">Email</div>
                    <div className="text-sm opacity-70">kaungkhantko@example.com</div>
                  </div>
                </Button>

                <Button
                  variant="outline"
                  className="w-full justify-start gap-3 h-auto py-4 hover:bg-primary hover:text-primary-foreground transition-colors"
                  onClick={() => window.open("https://github.com/kaungkhantko", "_blank")}
                >
                  <Github className="w-5 h-5" />
                  <div className="text-left">
                    <div className="font-semibold">GitHub</div>
                    <div className="text-sm opacity-70">@kaungkhantko</div>
                  </div>
                </Button>

                <Button
                  variant="outline"
                  className="w-full justify-start gap-3 h-auto py-4 hover:bg-primary hover:text-primary-foreground transition-colors"
                  onClick={() =>
                    window.open("https://linkedin.com/in/kaungkhantko", "_blank")
                  }
                >
                  <Linkedin className="w-5 h-5" />
                  <div className="text-left">
                    <div className="font-semibold">LinkedIn</div>
                    <div className="text-sm opacity-70">Kaung Khant Ko</div>
                  </div>
                </Button>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-card/50 backdrop-blur-sm rounded-2xl p-8 border border-border shadow-lg">
            <h3 className="text-2xl font-semibold mb-6 text-foreground">Send a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Input
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="bg-background/50"
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
                  className="bg-background/50"
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
                  className="bg-background/50 resize-none"
                />
              </div>
              <Button
                type="submit"
                className="w-full gap-2 py-6 text-lg shadow-lg hover:shadow-xl transition-all hover:scale-105"
              >
                <Send className="w-5 h-5" />
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
