import type { Language } from "../translation";

interface NavbarProps {
  lang: Language;
  setLang: (lang: Language) => void;
  t: {
    modules: string;
    who: string;
    mission: string;
    about: string;
    signIn: string;
  };
}

export default function Navbar({ lang, setLang, t }: NavbarProps) {
  const handleLangToggle = () => {
    if (lang === 'EN') setLang('TR');
    else if (lang === 'TR') setLang('DE');
    else setLang('EN');
  };

  return (
    <nav className="fixed top-0 w-full z-50 font-montserrat">
      <div className="relative w-full px-8 md:px-20 py-4 flex justify-between items-center
        bg-white/[0.03] backdrop-blur-2xl
        border-b border-white/[0.06]
        shadow-[0_1px_0_rgba(255,255,255,0.04),0_4px_24px_rgba(0,0,0,0.3)]
        before:absolute before:inset-0 before:bg-gradient-to-r before:from-[#0275f6]/5 before:via-transparent before:to-[#1bc6e7]/5 before:pointer-events-none"
      >

        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#1bc6e7]/30 to-transparent" />

        <a href="#home" className="flex items-center gap-2 md:gap-3 hover:opacity-80 transition-opacity relative z-10">
          <img
            src="/logo resized.png"
            alt="Finicify Icon"
            className="h-5 md:h-6 w-auto object-contain"
          />
          <img
            src="/type_white.png"
            alt="Finicify"
            className="h-4 md:h-5 w-auto object-contain"
          />
        </a>

        <div className="flex items-center gap-12 relative z-10">
          <div className="hidden lg:flex gap-10 text-[10px] uppercase tracking-[0.2em] text-gray-400 font-bold">
            <a href="#modules" className="hover:text-white transition-colors duration-200">{t.modules}</a>
            <a href="#who-is-it-for" className="hover:text-white transition-colors duration-200">{t.who}</a>
            <a href="#mission" className="hover:text-white transition-colors duration-200">{t.mission}</a>
            <a href="#about" className="hover:text-white transition-colors duration-200">{t.about}</a>
          </div>

          <div className="flex items-center gap-4 border-l border-white/10 pl-8">
            <a
              href="https://calendly.com/tunca-finicify"
              target="_blank"
              rel="noopener noreferrer"
              className="
                relative px-5 py-2 text-[11px] font-bold text-white tracking-wider
                bg-white/5 hover:bg-white/10
                border border-white/10 hover:border-white/20
                rounded-lg backdrop-blur-sm
                transition-all duration-200
                shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]
              "
            >
              {t.signIn}
            </a>

            <button
              onClick={handleLangToggle}
              className="
                px-3 py-2 text-[11px] font-bold tracking-wider
                text-[#1bc6e7] hover:text-white
                bg-[#1bc6e7]/5 hover:bg-[#1bc6e7]/15
                border border-[#1bc6e7]/20 hover:border-[#1bc6e7]/40
                rounded-lg backdrop-blur-sm
                transition-all duration-200
                flex items-center gap-1.5
                shadow-[0_0_12px_rgba(27,198,231,0.1)]
              "
            >
              {lang} 🌐
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}