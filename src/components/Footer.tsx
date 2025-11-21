const Footer = () => {
  return (
    <footer className="relative py-12 bg-background border-t border-border">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-primary/5 pointer-events-none" />
      
      <div className="relative container mx-auto px-6 text-center">
        <div className="inline-block">
          <p className="text-muted-foreground mb-2">
            © 2025 Kaung Khant Ko
          </p>
          <p className="text-sm text-muted-foreground/70 bg-gradient-to-r from-primary/20 via-accent/20 to-primary/20 px-6 py-2 rounded-full border border-primary/20 shadow-lg">
            Built with AI & Love ✨
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
