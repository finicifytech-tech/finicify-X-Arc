export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 flex justify-between items-center px-10 md:px-20 py-6 bg-[#050a12]/90 backdrop-blur-md border-b border-gray-800/30 font-montserrat">
      
      {/* LOGO GROUP: Icon + White Text side-by-side */}
<a href="#home" className="flex items-center gap-2 md:gap-3 hover:opacity-80 transition-opacity">
  {/* The Blue Symbol Icon */}
  <img 
    src="/logo.png" 
    alt="Finicify Icon" 
    className="h-8 md:h-10 w-auto object-contain" 
  />
  
  {/* The White Text Logo - Placed to the right horizontally */}
  <img 
    src="/type_white.png" 
    alt="Finicify" 
    className="h-4 md:h-5 w-auto object-contain mt-0.5" 
  />
</a>
      
      
      {/* Navigation and Buttons */}
      <div className="flex items-center gap-12">
        
        <div className="hidden lg:flex gap-10 text-[11px] uppercase tracking-[0.2em] text-gray-400 font-semibold">
          <a href="#modules" className="hover:text-white transition-colors">Modules</a>
          <a href="#who-is-it-for" className="hover:text-white transition-colors">Who is it for?</a>
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