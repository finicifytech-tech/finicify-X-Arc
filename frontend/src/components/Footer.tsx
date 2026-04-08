
interface FooterProps {
  t: {
    modules: string;
    who: string;
    mission: string;
    about: string;
    signIn: string;
  };
  lang: 'EN' | 'TR' | 'DE';
}

export default function Footer({ t, lang }: FooterProps) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-[#050a12] pt-16 sm:pt-20 pb-8 sm:pb-10 px-4 sm:px-6 md:px-20 border-t border-gray-800/30 font-montserrat">
      <div className="max-w-[1440px] mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-16">
          <div className="space-y-6">
            <a href="#home" className="flex items-center gap-2 md:gap-3 hover:opacity-80 transition-opacity">
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
          </div>

          <div className="flex flex-col gap-4">
            <h4 className="text-[#1bc6e7] text-[10px] uppercase tracking-[0.3em] font-bold">
              {lang === 'EN' ? 'Navigation' : lang === 'TR' ? 'Navigasyon' : 'Navigation'}
            </h4>
            <nav className="flex flex-wrap gap-x-8 gap-y-3">
              <a href="#modules" className="text-white text-sm font-medium hover:text-[#1bc6e7] transition-colors">{t.modules}</a>
              <a href="#who-is-it-for" className="text-white text-sm font-medium hover:text-[#1bc6e7] transition-colors">{t.who}</a>
              <a href="#mission" className="text-white text-sm font-medium hover:text-[#1bc6e7] transition-colors">{t.mission}</a>
              <a href="#about" className="text-white text-sm font-medium hover:text-[#1bc6e7] transition-colors">{t.about}</a>
            </nav>
          </div>
        </div>

        <div className="h-[1px] w-full bg-gray-800/50 mb-8"></div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-2">
            <a href="/privacy" className="text-gray-500 text-[11px] hover:text-white transition-colors">
              {lang === 'EN' ? 'Privacy Policy' : lang === 'TR' ? 'Gizlilik Politikası' : 'Datenschutzerklärung'}
            </a>
            <a href="/terms" className="text-gray-500 text-[11px] hover:text-white transition-colors">
              {lang === 'EN' ? 'Terms of Service' : lang === 'TR' ? 'Kullanım Koşulları' : 'Nutzungsbedingungen'}
            </a>
            <a href="/cookies" className="text-gray-500 text-[11px] hover:text-white transition-colors">
              {lang === 'EN' ? 'Cookie Policy' : lang === 'TR' ? 'Çerez Politikası' : 'Cookie-Richtlinie'}
            </a>
            <a href="/imprint" className="text-gray-500 text-[11px] hover:text-white transition-colors">
              {lang === 'EN' ? 'Imprint' : lang === 'TR' ? 'Künye' : 'Impressum'}
            </a>
          </div>

          <p className="text-gray-500 text-[11px] tracking-wide">
            © {currentYear} Finicify. {lang === 'EN' ? 'All rights reserved.' : lang === 'TR' ? 'Tüm hakları saklıdır.' : 'Alle Rechte vorbehalten.'}
          </p>
        </div>
      </div>
    </footer>
  );
}