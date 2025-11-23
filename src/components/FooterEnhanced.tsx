const FooterEnhanced = () => {
  return (
    <footer className="relative py-12 bg-gradient-to-br from-slate-950 via-blue-950 to-slate-950 border-t border-cyan-500/20 overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-gradient-to-br from-cyan-500/30 to-purple-500/30 rounded-full blur-3xl animate-pulse" />
      </div>

      {/* Grid pattern */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `linear-gradient(rgba(59, 130, 246, 0.3) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(59, 130, 246, 0.3) 1px, transparent 1px)`,
          backgroundSize: "50px 50px",
        }}
      />
      
      <div className="relative container mx-auto px-6 text-center z-10">
        <div className="inline-block">
          <p className="text-slate-400 mb-4">
            © 2025 Kaung Khant Ko
          </p>
          
        </div>
      </div>
    </footer>
  );
};

export default FooterEnhanced;
