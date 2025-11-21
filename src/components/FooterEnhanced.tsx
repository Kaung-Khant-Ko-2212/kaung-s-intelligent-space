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
          <div className="relative inline-block group">
            {/* Glow effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 via-purple-500 to-cyan-500 rounded-full blur-xl opacity-0 group-hover:opacity-50 transition-opacity" />
            
            <p className="relative text-sm px-8 py-3 rounded-full bg-gradient-to-r from-slate-900/90 to-slate-800/90 backdrop-blur-sm border border-cyan-500/30 shadow-lg shadow-cyan-500/20 group-hover:border-cyan-400/50 transition-all">
              <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent font-semibold">
                Built with AI & Love
              </span>{" "}
              <span className="inline-block animate-pulse">✨</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterEnhanced;
