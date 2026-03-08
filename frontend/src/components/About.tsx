import React from 'react';

// Added this to handle the language prop from App.tsx
interface AboutProps {
  lang: 'EN' | 'TR';
}

interface TeamMember {
  name: string;
  role: string;
  sub: string;
  image: string;
  linkedin: string;
}

export default function About({ lang }: AboutProps) {
  
  const team: TeamMember[] = [
    { 
      name: "Tunca Tosun", 
      role: "CEO", 
      sub: lang === 'EN' ? "Co-Founder" : "Kurucu Ortak", 
      image: "/founder1.jpeg.jpeg", 
      linkedin: "http://linkedin.com/in/tunca-tosun-9098bb192" 
    },
    { 
      name: "Can Say", 
      role: lang === 'EN' ? "Product Lead" : "Ürün Lideri", 
      sub: lang === 'EN' ? "Co-Founder" : "Kurucu Ortak", 
      image: "/founder2,jpeg.jpeg", 
      linkedin: "http://linkedin.com/in/can-say-58869b168" 
    },
    
    { 
      name: "Founder 4", 
      role: lang === 'EN' ? "Executive Lead" : "Yönetici Lider", 
      sub: lang === 'EN' ? "Founder" : "Kurucu", 
      image: "/founder4.jpeg", 
      linkedin: "#" 
    },
    { 
      name: "Baran Alp Narinoğlu", 
      role: "Co-Founder", 
      sub: "", 
      image: "/founder3.jpeg.jpeg", 
      linkedin: "http://linkedin.com/in/baran-alp-narinoglu-3a2692184" 
    },
      
  ];

  return (
    <section id="about" className="w-full font-montserrat">
      
      {/* PART 1: Team Section */}
      <div className="w-full bg-[#050a12] py-24 md:py-32 px-10 md:px-20 border-t border-gray-800/30">
        <div className="max-w-[1440px] mx-auto">
          
          <div className="text-center mb-20">
            <span className="text-[#1bc6e7] text-[12px] uppercase tracking-[0.4em] font-bold">
              {lang === 'EN' ? 'Founders' : 'Kurucular'}
            </span>
            <h3 className="text-[36px] md:text-[48px] font-bold text-white mt-4">
              {lang === 'EN' ? 'The Founding Team' : 'Kurucu Ekibimiz'}
            </h3>
          </div>

          <div className="flex flex-col lg:flex-row justify-center items-stretch gap-8 max-w-7xl mx-auto">
            {team.map((member, index) => (
              <div key={index} className="flex-1 min-w-[250px] max-w-[320px] flex flex-col">
                
                <div className="w-full aspect-[4/5] bg-[#0a1018] border border-gray-800/50 rounded-2xl mb-6 flex items-center justify-center overflow-hidden relative shadow-2xl transition-all duration-500 hover:border-[#0275f6]/40 group">
                  <img 
                    src={member.image} 
                    alt={member.name} 
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
                  <p className="text-gray-600 text-[10px] font-medium uppercase tracking-widest">{member.sub}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* PART 2: Blue CTA Section */}
      <div className="w-full bg-gradient-to-r from-[#0275f6] to-[#1bc6e7] py-24 px-10 md:px-20 flex flex-col items-center justify-center text-center">
        <h2 className="text-[24px] md:text-[40px] font-bold text-white leading-[1.1] max-w-4xl mb-10 tracking-tight">
          {lang === 'EN' 
            ? 'Shaping the future of financial Automation Through AI-Powered Analytics and Reporting System.' 
            : 'Yapay Zeka Destekli Analiz ve Raporlama Sistemi ile Finansal Otomasyonun Geleceğini Şekillendiriyoruz.'}
        </h2>
        <button className="px-10 py-4 bg-black text-white font-bold rounded-lg hover:scale-105 transition-transform duration-300 shadow-xl">
          {lang === 'EN' ? 'Contact Us' : 'Bize Ulaşın'}
        </button>
      </div>

    </section>
  );
}