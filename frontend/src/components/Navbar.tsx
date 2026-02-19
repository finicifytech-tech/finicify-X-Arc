export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 flex justify-between items-center px-10 md:px-20 py-6 bg-[#050a12]/90 backdrop-blur-md border-b border-gray-800/30 font-montserrat">
      
    
      <div className="text-[18px] font-bold tracking-tight text-white uppercase">
        FINICIFY
      </div>
      
   
      <div className="flex items-center gap-12">
        
        <div className="hidden lg:flex gap-10 text-[11px] uppercase tracking-[0.2em] text-gray-400 font-semibold">
          <a href="#modules" className="hover:text-white transition-colors">Modules</a>
          <a href="#target-audience" className="hover:text-white transition-colors">Target Audience</a>
          <a href="#mission" className="hover:text-white transition-colors">Mission</a>
          <a href="#about" className="hover:text-white transition-colors">About Us</a>
        </div>

        <div className="flex items-center gap-6 border-l border-gray-800 pl-10">
          <button className="px-6 py-2 border border-white/20 rounded-lg text-[13px] font-semibold text-white hover:bg-white hover:text-black transition-all">
            Sign In
          </button>
          <button className="text-white text-[13px] opacity-70 hover:opacity-100 flex items-center gap-1">
            EN 🌐
          </button>
        </div>

      </div>
    </nav>
  );
}