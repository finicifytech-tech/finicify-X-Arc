import React from 'react';

// Define the interface to match your App.tsx
interface FooterProps {
  t: {
    modules: string;
    who: string;
    mission: string;
    about: string;
    signIn: string;
  };
  lang: 'EN' | 'TR';
}


export default function Footer({ t, lang }: FooterProps) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-[#050a12] pt-20 pb-10 px-10 md:px-20 border-t border-gray-800/30 font-montserrat">
      <div className="max-w-[1440px] mx-auto">
        
        <div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-16">
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-white tracking-tight">FINICIFY</h2>
            <p className="text-gray-400 text-sm max-w-xs leading-relaxed">
              {lang === 'EN' 
                ? "AI-powered financial intelligence platform for institutional-grade analytics and automated reporting."
                : "Kurumsal düzeyde analitik ve otomatik raporlama için yapay zeka destekli finansal istihbarat platformu."}
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <h4 className="text-[#1bc6e7] text-[10px] uppercase tracking-[0.3em] font-bold">
              {lang === 'EN' ? 'Navigation' : 'Navigasyon'}
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
          <div className="flex gap-8">
            <a href="/privacy" className="text-gray-500 text-[11px] hover:text-white transition-colors">
              {lang === 'EN' ? 'Privacy Policy' : 'Gizlilik Politikası'}
            </a>
            <a href="/terms" className="text-gray-500 text-[11px] hover:text-white transition-colors">
              {lang === 'EN' ? 'Terms of Service' : 'Kullanım Koşulları'}
            </a>
          </div>

          <p className="text-gray-500 text-[11px] tracking-wide">
            © {currentYear} Finicify. {lang === 'EN' ? 'All rights reserved.' : 'Tüm hakları saklıdır.'}
          </p>
        </div>
      </div>
    </footer>
  );
}