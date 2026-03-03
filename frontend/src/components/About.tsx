import React from 'react';

interface TeamMember {
  name: string;
  role: string;
  sub: string;
  image: string;
  linkedin: string;
}

export default function About() {
  
  const team: TeamMember[] = [
    { 
      name: "Baran Alp Narinoğlu", 
      role: "CEO", 
      sub: "Co-Founder", 
      image: "/founder1.jpeg", 
      linkedin: "http://linkedin.com/in/baran-alp-narinoglu-3a2692184" 
    },
    { 
      name: "Can Say", 
      role: "Co-Founder", 
      sub: "Product Lead", 
      image: "/founder2.jpeg", 
      linkedin: "http://linkedin.com/in/can-say-58869b168" 
    },
    { 
      name: "Tunca Tosun", 
      role: "Founder", 
      sub: "Lead Engineer", 
      image: "/founder3.jpeg", 
      linkedin: "http://linkedin.com/in/tunca-tosun-9098bb192" 
    },
  ];

  return (
    <section id="about" className="w-full font-montserrat">
      
      {/* PART 1: Team Section (Now on top) */}
      <div className="w-full bg-[#050a12] py-24 md:py-32 px-10 md:px-20 border-t border-gray-800/30">
        <div className="max-w-[1440px] mx-auto">
          
          <div className="text-center mb-20">
            <span className="text-[#ccff00] text-[12px] uppercase tracking-[0.4em] font-bold">Founders</span>
            <h3 className="text-[36px] md:text-[48px] font-bold text-white mt-4">The Founding Team</h3>
          </div>

          <div className="flex flex-col sm:flex-row flex-wrap justify-center items-center gap-12">
            {team.map((member, index) => (
              <div key={index} className="w-full max-w-[320px]">
                
                <div className="aspect-[4/5] bg-[#12181f] border border-gray-800 rounded-2xl mb-6 flex items-center justify-center overflow-hidden relative shadow-2xl transition-all duration-500 hover:border-[#ccff00]/50 group">
                  {member.image ? (
                    <img 
                      src={member.image} 
                      alt={member.name} 
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
                    />
                  ) : (
                    <div className="flex flex-col items-center gap-3 opacity-40">
                      <div className="w-16 h-16 rounded-full border border-gray-700 flex items-center justify-center">
                        <span className="text-[#ccff00] text-xl font-bold">+</span>
                      </div>
                      <span className="text-[10px] text-gray-400 uppercase tracking-[0.2em] font-bold">Team Member</span>
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#007bff]/10 to-transparent pointer-events-none" />
                </div>
                   
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <h4 className="text-xl font-bold text-white">{member.name}</h4>
                    <a 
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-5 h-5 bg-gray-800 rounded flex items-center justify-center text-[#ccff00] text-[10px] font-bold cursor-pointer hover:bg-[#007bff] hover:text-white transition-all"
                    >
                      in
                    </a>
                  </div>
                  <p className="text-gray-400 font-semibold text-sm">{member.role}</p>
                  <p className="text-gray-600 text-[11px] font-medium uppercase tracking-widest">{member.sub}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* PART 2: Yellow CTA Section (Now at the bottom) */}
      <div className="w-full bg-[#ccff00] py-24 px-10 md:px-20 flex flex-col items-center justify-center text-center">
        <h2 className="text-[24px] md:text-[40px] font-bold text-black leading-[1.1] max-w-4xl mb-10 tracking-tight">
          Shaping the future of financial Automation Through AI-Powered Analytics and Reporting System.
        </h2>
        <button className="px-10 py-4 bg-black text-white font-bold rounded-lg hover:scale-105 transition-transform duration-300">
          Contact Us
        </button>
      </div>

    </section>
  );
}