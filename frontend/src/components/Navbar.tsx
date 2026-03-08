import type { Language } from "../translation";


// This Interface removes the red lines in App.tsx
interface NavbarProps {
  lang: Language;
  setLang: (lang: Language) => void;
  t: { 
    modules: string; 
    who: string; 
    mission: string; 
    about: string; 
    signIn: string 
  };
}

export default function Navbar({ lang, setLang, t }: NavbarProps) {
  return (
    <nav className="fixed top-0 w-full z-50 flex justify-between items-center px-10 md:px-20 py-6 bg-[#050a12]/90 backdrop-blur-md border-b border-gray-800/30 font-montserrat">
      
      {/* LOGO GROUP: Icon + White Text perfectly aligned */}
      <a href="#home" className="flex items-center gap-2 md:gap-3 hover:opacity-80 transition-opacity">
        <img 
          src="/logo.png" 
          alt="Finicify Icon" 
          className="h-8 md:h-9 w-auto object-contain" 
        />
        <img 
          src="/type_white.png" 
          alt="Finicify" 
          className="h-4 md:h-5 w-auto object-contain mt-1" 
        />
      </a>
      
      {/* Navigation and Buttons */}
      <div className="flex items-center gap-12">
        
        {/* Dynamic Nav Links using the 't' prop */}
        <div className="hidden lg:flex gap-10 text-[10px] uppercase tracking-[0.2em] text-gray-400 font-bold">
          <a href="#modules" className="hover:text-white transition-colors">{t.modules}</a>
          <a href="#who-is-it-for" className="hover:text-white transition-colors">{t.who}</a>
          <a href="#mission" className="hover:text-white transition-colors">{t.mission}</a>
          <a href="#about" className="hover:text-white transition-colors">{t.about}</a>
        </div>

        <div className="flex items-center gap-6 border-l border-gray-800/50 pl-10">
          <button className="px-6 py-2 border border-gray-700 rounded-lg text-[12px] font-bold text-white hover:bg-white hover:text-black transition-all">
            {t.signIn}
          </button>
          
          {/* LANGUAGE TOGGLE BUTTON */}
          <button 
            onClick={() => setLang(lang === 'EN' ? 'TR' : 'EN')}
            className="text-[#1bc6e7] text-[12px] font-bold hover:text-white transition-all flex items-center gap-1"
          >
            {lang} 🌐
          </button>
        </div>
      </div>
    </nav>
  );
}