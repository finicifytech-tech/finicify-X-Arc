import React from "react";

interface MissionProps {
  t?: {
    label: string;
    title: string;
    desc1: string;
    desc2?: string; // Made optional to match Excel structure
  };
}

export default function Mission({ t }: MissionProps) {
  if (!t) return null;

  return (
    <section
      id="mission"
      className="w-full min-h-screen bg-[#050a12] flex flex-col md:flex-row font-montserrat border-t border-gray-800/30"
    >
      {/* Text Area */}
      <div className="w-full md:w-1/2 flex items-center px-10 md:px-20 py-24">
        <div className="max-w-xl">
          <h2 className="text-[#1bc6e7] text-[12px] uppercase tracking-[0.4em] font-bold mb-8">
            {t.label}
          </h2>

          <h3 className="text-[32px] md:text-[52px] font-bold text-white leading-[1.15] mb-12 tracking-tight">
            {t.title}
          </h3>

          <div className="space-y-8">
            {/* Main Mission Text from Excel */}
            <p className="text-gray-300 text-[19px] leading-relaxed font-light tracking-wide">
              {t.desc1}
            </p>

            {/* desc2 will only show if you actually put text in it, otherwise it stays hidden */}
            {t.desc2 && (
              <p className="text-gray-400 text-[17px] leading-relaxed font-light border-l-2 border-[#1bc6e7]/30 pl-6">
                {t.desc2}
              </p>
            )}
          </div>
        </div>
      </div>

      {/* Image Area: Clean & Bright */}
      <div className="w-full md:w-1/2 bg-[#0a1018] relative overflow-hidden flex items-center justify-center border-l border-gray-800/50">
        <img 
          src="/our mission image.jpeg" 
          alt="Our Mission" 
          className="w-full h-full object-cover scale-105 opacity-100 transition-transform duration-700" 
        />
        
        {/* Subtle gradient to ensure it matches the website theme */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#050a12]/10 via-transparent to-[#050a12]/30"></div>
      </div>
    </section>
  );
}