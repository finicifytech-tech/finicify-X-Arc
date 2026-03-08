import React from 'react';

// Added interface to define props and clear TypeScript errors
interface MissionProps {
  t?: {
    label: string;
    title: string;
    desc1: string;
    desc2: string;
  };
}

export default function Mission({ t }: MissionProps) {
  // SAFETY GUARD: Prevents the "Cannot read properties of undefined" error
  if (!t) return null;

  return (
    <section id="mission" className="w-full min-h-screen bg-[#050a12] flex flex-col md:flex-row font-montserrat border-t border-gray-800/30">
      
      {/* Left Content Area */}
      <div className="w-full md:w-1/2 flex items-center px-10 md:px-20 py-24">
        <div className="max-w-xl">
          {/* Linked to translation file */}
          <h2 className="text-[#1bc6e7] text-[12px] uppercase tracking-[0.4em] font-bold mb-8">
            {t.label}
          </h2>
          
          <h3 className="text-[32px] md:text-[52px] font-bold text-white leading-[1.15] mb-12 tracking-tight">
            {t.title}
          </h3>
          
          <div className="space-y-8">
            <p className="text-gray-300 text-[19px] leading-relaxed font-light tracking-wide">
              {t.desc1}
            </p>

            <p className="text-gray-400 text-[17px] leading-relaxed font-light border-l-2 border-[#1bc6e7]/30 pl-6">
              {t.desc2}
            </p>
          </div>
        </div>
      </div>

      {/* Right Visual Area - No styling changes made as requested */}
      <div className="w-full md:w-1/2 bg-[#0a1018] relative overflow-hidden flex items-center justify-center border-l border-gray-800/50">
        
        <div className="absolute inset-0 opacity-10" 
             style={{ backgroundImage: 'radial-gradient(#0275f6 0.5px, transparent 0.5px)', backgroundSize: '30px 30px' }}>
        </div>
        
        <div className="relative z-10 flex flex-col items-center">
           <div className="w-64 h-64 rounded-full border border-[#0275f6]/10 flex items-center justify-center animate-pulse">
              <div className="w-48 h-48 rounded-full border border-[#0275f6]/20 flex items-center justify-center">
                 <img src="/logo.png" alt="Finicify Symbol" className="w-20 opacity-40 grayscale" />
              </div>
           </div>
           <span className="mt-8 text-gray-600 uppercase tracking-[0.5em] font-bold text-[10px]">
             Institutional Infrastructure
           </span>
        </div>

        <div className="absolute inset-0 bg-gradient-to-b from-[#050a12]/0 via-[#050a12]/40 to-[#050a12]"></div>
      </div>

    </section>
  );
}