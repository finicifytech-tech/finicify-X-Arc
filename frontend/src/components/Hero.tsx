import { useMemo } from 'react';

interface AboutProps {
  lang: 'EN' | 'TR' | 'DE';
}

interface TeamMember {
  name: string;
  role: string;
  image: string;
  linkedin: string;
}

export default function About({ lang }: AboutProps) {
  const team: TeamMember[] = useMemo(() => {
    const roleLabel = lang === 'TR' ? "Kurucu Ortak" : "Co-Founder";
    
    return [
      { 
        name: "Tunca Tosun", 
        role: roleLabel,
        image: "/finicify-X-Arc/founder4.jpeg", 
        linkedin: "http://linkedin.com/in/tunca-tosun-9098bb192" 
      },
      { 
        name: "Orhan Alay", 
        role: roleLabel, 
        image: "/finicify-X-Arc/founder1.jpeg", 
        linkedin: "https://www.sahibinden.com/ilan/vasita-otomobil-fiat-2024-fiat-egea-1.3-mjet-20-faturali-boyasiz-11.000-km-1305839058/detay" 
      },
      { 
        name: "Baran Alp Narinoğlu", 
        role: roleLabel,
        image: "/finicify-X-Arc/founder3.jpeg", 
        linkedin: "http://linkedin.com/in/baran-alp-narinoglu-3a2692184" 
      },
      { 
        name: "Can Say", 
        role: roleLabel,
        image: "/finicify-X-Arc/founder2.jpeg", 
        linkedin: "http://linkedin.com/in/can-say-58869b168" 
      },
    ];
  }, [lang]);

  const content = {
    teamLabel: lang === 'EN' ? 'Founders' : lang === 'TR' ? 'Kurucular' : 'Gründer',
    teamTitle: lang === 'EN' ? 'The Founding Team' : lang === 'TR' ? 'Kurucu Ekibimiz' : 'Das Gründerteam',
    ctaTitle: lang === 'EN' 
      ? 'Shaping the future of financial automation.' 
      : lang === 'TR' ? 'Finansal otomasyonun geleceğini şekillendiriyoruz.' : 'Die Zukunft der Finanzautomatisierung gestalten.',
    ctaDesc: lang === 'EN' 
      ? 'Through AI-powered analytics and automated reporting systems, Finicify is shaping the future of financial content, enabling institutions to deliver faster, more scalable, and higher-quality outputs.' 
      : lang === 'TR' 
      ? 'Yapay zeka destekli analiz ve otomatik raporlama sistemleri aracılığıyla Finicify, finansal içeriğin geleceğini şekillendirerek kurumların daha hızlı, daha ölçeklenebilir ve daha yüksek kaliteli çıktılar sunmasını sağlar.'
      : 'Durch KI-gestützte Analysen und automatisierte Berichterstattung gestaltet Finicify die Zukunft von Finanzinhalten und ermöglicht Institutionen eine schnellere und hochwertigere Bereitstellung.',
    ctaButton: lang === 'EN' ? 'Contact Us' : lang === 'TR' ? 'Bize Ulaşın' : 'Kontaktieren Sie uns'
  };

  return (
    <section id="about" className="w-full font-montserrat">
      <div className="w-full bg-[#050a12] py-24 md:py-32 px-10 md:px-20 border-t border-gray-800/30">
        <div className="max-w-[1440px] mx-auto">
          <div className="text-center mb-20">
            <span className="text-[#1bc6e7] text-[12px] uppercase tracking-[0.4em] font-bold">
              {content.teamLabel}
            </span>
            <h3 className="text-[36px] md:text-[48px] font-bold text-white mt-4">
              {content.teamTitle}
            </h3>
          </div>

          <div className="flex flex-col lg:flex-row justify-center items-stretch gap-8 max-w-7xl mx-auto">
            {team.map((member) => (
              <div key={member.name} className="flex-1 min-w-[250px] max-w-[320px] flex flex-col">
                <div className="w-full aspect-[4/5] bg-[#0a1018] border border-gray-800/50 rounded-2xl mb-6 flex items-center justify-center overflow-hidden relative shadow-2xl transition-all duration-500 hover:border-[#0275f6]/40 group">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0275f6]/15 to-transparent pointer-events-none" />
                </div>

                <div className="flex-grow space-y-1">
                  <div className="flex items-center gap-2">
                    <h4 className="text-[17px] font-bold text-white truncate">{member.name}</h4>
                    <a 
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-5 h-5 bg-gray-800 rounded flex items-center justify-center text-[#0275f6] text-[10px] font-bold cursor-pointer hover:bg-[#0275f6] hover:text-white transition-all flex-shrink-0"
                    >
                      in
                    </a>
                  </div>
                  <p className="text-gray-400 font-semibold text-sm">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="w-full bg-gradient-to-r from-[#0275f6] to-[#1bc6e7] py-24 px-10 md:px-20 flex flex-col items-center justify-center text-center">
        <h2 className="text-[28px] md:text-[44px] font-bold text-white mb-6 tracking-tight">
          {content.ctaTitle}
        </h2>
        <p className="text-white/90 text-[14px] md:text-[16px] font-normal max-w-3xl mb-10 leading-relaxed">
          {content.ctaDesc}
        </p>
        <a
          href="https://calendly.com/tunca-finicify"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-10 py-4 bg-black text-white font-bold rounded-lg hover:scale-105 transition-transform duration-300 shadow-xl"
        >
          {content.ctaButton}
        </a>
      </div>
    </section>
  );
}