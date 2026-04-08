import { useCallback, useEffect, useState } from "react";
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

const navShellClass =
  "relative w-full px-4 sm:px-6 md:px-20 py-3 sm:py-4 " +
  "bg-white/[0.03] backdrop-blur-2xl [-webkit-backdrop-filter:blur(40px)] " +
  "border-b border-white/[0.06] " +
  "shadow-[0_1px_0_rgba(255,255,255,0.04),0_4px_24px_rgba(0,0,0,0.3)] " +
  "before:absolute before:inset-0 before:bg-gradient-to-r before:from-[#0275f6]/5 before:via-transparent before:to-[#1bc6e7]/5 before:pointer-events-none";

const btnDemoClass =
  "relative inline-flex items-center justify-center shrink-0 " +
  "px-2.5 sm:px-5 py-2 text-[9px] sm:text-[11px] font-bold text-white tracking-wide sm:tracking-wider text-center leading-tight max-w-[7.25rem] sm:max-w-none " +
  "bg-white/5 hover:bg-white/10 " +
  "border border-white/10 hover:border-white/20 " +
  "rounded-lg backdrop-blur-sm [-webkit-backdrop-filter:blur(12px)] " +
  "transition-all duration-200 " +
  "shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]";

const btnLangClass =
  "inline-flex items-center justify-center gap-1.5 shrink-0 " +
  "px-2.5 sm:px-3 py-2 text-[10px] sm:text-[11px] font-bold tracking-wider whitespace-nowrap " +
  "text-[#1bc6e7] hover:text-white " +
  "bg-[#1bc6e7]/5 hover:bg-[#1bc6e7]/15 " +
  "border border-[#1bc6e7]/20 hover:border-[#1bc6e7]/40 " +
  "rounded-lg backdrop-blur-sm [-webkit-backdrop-filter:blur(12px)] " +
  "transition-all duration-200 " +
  "shadow-[0_0_12px_rgba(27,198,231,0.1)]";

export default function Navbar({ lang, setLang, t }: NavbarProps) {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLangToggle = useCallback(() => {
    if (lang === "EN") setLang("TR");
    else if (lang === "TR") setLang("DE");
    else setLang("EN");
  }, [lang, setLang]);

  const closeMenu = useCallback(() => setMenuOpen(false), []);

  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [menuOpen]);

  const navLinkClass =
    "block py-3 text-sm uppercase tracking-[0.2em] text-gray-300 font-bold hover:text-white transition-colors border-b border-white/5";

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 font-montserrat">
      <div className={navShellClass}>
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#1bc6e7]/30 to-transparent" />

        <div className="relative z-10 flex w-full items-center gap-3 min-h-[44px]">
          {/* Logo — left, never shrinks */}
          <a
            href="#home"
            onClick={closeMenu}
            className="flex shrink-0 items-center gap-2 md:gap-3 hover:opacity-80 transition-opacity min-w-0"
          >
            <img
              src="/logo resized.png"
              alt=""
              className="h-5 md:h-6 w-auto max-h-6 object-contain"
            />
            <img
              src="/type_white.png"
              alt="Finicify"
              className="h-3.5 sm:h-4 md:h-5 w-auto max-w-[120px] sm:max-w-none object-contain object-left"
            />
          </a>

          {/* Center nav — desktop only */}
          <div className="hidden lg:flex flex-1 justify-center min-w-0 px-4">
            <div className="flex flex-wrap justify-center gap-x-8 gap-y-2 text-[10px] uppercase tracking-[0.2em] text-gray-400 font-bold">
              <a href="#modules" className="hover:text-white transition-colors duration-200 whitespace-nowrap">
                {t.modules}
              </a>
              <a href="#who-is-it-for" className="hover:text-white transition-colors duration-200 whitespace-nowrap">
                {t.who}
              </a>
              <a href="#mission" className="hover:text-white transition-colors duration-200 whitespace-nowrap">
                {t.mission}
              </a>
              <a href="#about" className="hover:text-white transition-colors duration-200 whitespace-nowrap">
                {t.about}
              </a>
            </div>
          </div>

          {/* Right: CTA + language + menu — aligned end, never squeezed */}
          <div className="ml-auto flex shrink-0 items-center gap-2 sm:gap-3 md:gap-4">
            <a
              href="https://calendly.com/tunca-finicify"
              target="_blank"
              rel="noopener noreferrer"
              className={btnDemoClass}
            >
              {t.signIn}
            </a>

            <button type="button" onClick={handleLangToggle} className={btnLangClass} aria-label="Change language">
              <span>{lang}</span>
              <span aria-hidden>🌐</span>
            </button>

            <button
              type="button"
              className="lg:hidden flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-white/15 bg-white/5 text-white hover:bg-white/10 transition-colors [-webkit-backdrop-filter:blur(12px)] backdrop-blur-sm"
              aria-expanded={menuOpen}
              aria-controls="mobile-nav-menu"
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              onClick={() => setMenuOpen((o) => !o)}
            >
              <span className="sr-only">{menuOpen ? "Close" : "Menu"}</span>
              {menuOpen ? (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
                  <path d="M6 6l12 12M18 6L6 18" />
                </svg>
              ) : (
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
                  <path d="M4 7h16M4 12h16M4 17h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile / tablet slide-down panel */}
      <div
        id="mobile-nav-menu"
        className={`lg:hidden fixed left-0 right-0 top-[4.5rem] sm:top-[4.75rem] z-40 overflow-hidden transition-[max-height,opacity] duration-300 ease-out border-b border-white/[0.08] bg-[#050a12]/95 [-webkit-backdrop-filter:blur(20px)] backdrop-blur-xl ${
          menuOpen ? "max-h-[min(85vh,520px)] opacity-100 shadow-[0_16px_40px_rgba(0,0,0,0.45)]" : "max-h-0 opacity-0 pointer-events-none"
        }`}
        aria-hidden={!menuOpen}
      >
        <div className="px-4 pb-6 pt-2 max-h-[min(85vh,520px)] overflow-y-auto overscroll-contain [-webkit-overflow-scrolling:touch]">
          <a href="#modules" onClick={closeMenu} className={navLinkClass}>
            {t.modules}
          </a>
          <a href="#who-is-it-for" onClick={closeMenu} className={navLinkClass}>
            {t.who}
          </a>
          <a href="#mission" onClick={closeMenu} className={navLinkClass}>
            {t.mission}
          </a>
          <a href="#about" onClick={closeMenu} className={navLinkClass}>
            {t.about}
          </a>
          <div className="mt-4 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <a
              href="https://calendly.com/tunca-finicify"
              target="_blank"
              rel="noopener noreferrer"
              onClick={closeMenu}
              className={`${btnDemoClass} w-full sm:w-auto justify-center py-3`}
            >
              {t.signIn}
            </a>
            <button type="button" onClick={handleLangToggle} className={`${btnLangClass} w-full sm:w-auto justify-center py-3`}>
              {lang} 🌐
            </button>
          </div>
        </div>
      </div>

      {menuOpen ? (
        <button
          type="button"
          className="lg:hidden fixed inset-0 top-[4.5rem] sm:top-[4.75rem] z-30 bg-black/40"
          aria-label="Close menu"
          onClick={closeMenu}
        />
      ) : null}
    </nav>
  );
}
