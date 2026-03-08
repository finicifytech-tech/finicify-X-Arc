import { useState } from 'react';

interface HeroProps {
  t: {
    title: string;
    desc: string;
    cta: string;
  };
}

export default function Hero({ t }: HeroProps) {

  const screens = [
    "/1.png", 
    "/2.png", 
    "/3.png",
    "/4.png",
    "/5.png"
  ];
  
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((prev) => (prev === screens.length - 1 ? 0 : prev + 1));
  const prev = () => setCurrent((prev) => (prev === 0 ? screens.length - 1 : prev - 1));

  return (
    <section className="relative w-full pt-32 pb-20 px-10 md:px-20 font-montserrat bg-[#050a12] overflow-hidden">
      
      {/* BACKGROUND WALLPAPER */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/walpaper.jpeg" 
          alt="Background" 
          className="w-full h-full object-cover opacity-50" 
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#050a12]/40 to-[#050a12]"></div>
      </div>

      <div className="max-w-[1440px] mx-auto relative z-10">
        <div className="max-w-4xl">
          <h1 className="text-[36px] md:text-[64px] font-bold text-white max-w-5xl mb-8 tracking-wider leading-[1.15] md:leading-[1.2] drop-shadow-lg">
            {t.title}
          </h1>
          <p className="mt-6 text-[14px] md:text-[18px] text-gray-200 max-w-xl font-medium leading-relaxed drop-shadow-md">
            {t.desc}
          </p>

          <div className="mt-8">
            <button className="px-10 py-4 bg-gradient-to-r from-[#0275f6] to-[#1bc6e7] text-white font-bold rounded-lg text-[15px] hover:scale-105 transition-transform shadow-[0_0_30px_rgba(2,117,246,0.3)]">
              {t.cta}
            </button>
          </div>
        </div>

        {/* UPDATED SLIDER CARD */}
        <div className="mt-16 w-full perspective-1000 relative group">
          <div className="absolute -inset-1 bg-[#0275f6]/20 rounded-2xl blur-xl opacity-50 group-hover:opacity-100 transition duration-1000"></div>
          
          <div className="relative bg-black border border-gray-800 rounded-2xl aspect-video w-full overflow-hidden shadow-2xl transition-all duration-700 ease-out group-hover:rotate-x-2 group-hover:scale-[1.01] group-hover:-translate-y-2">
            
            <div className="w-full h-full relative">
              {/* FIX: Changed to object-fill and added bg-black to eliminate white lines */}
              <img 
                src={screens[current]} 
                className="w-full h-full object-fill transition-opacity duration-500 bg-black"
                alt={`Finicify Dashboard Screen ${current + 1}`}
              />

             
              <div className="absolute inset-0 flex items-center justify-between px-4 sm:px-10 pointer-events-none">
                <button 
                  onClick={prev} 
                  className="pointer-events-auto p-4 bg-white/10 hover:bg-[#0275f6] backdrop-blur-md text-white rounded-full border border-white/20 transition-all duration-300 shadow-2xl group/btn"
                >
                  <span className="text-2xl font-bold group-hover:scale-125 block">←</span>
                </button>
                <button 
                  onClick={next} 
                  className="pointer-events-auto p-4 bg-white/10 hover:bg-[#1bc6e7] backdrop-blur-md text-white rounded-full border border-white/20 transition-all duration-300 shadow-2xl group/btn"
                >
                  <span className="text-2xl font-bold group-hover:scale-125 block">→</span>
                </button>
              </div>

              {/* Progress Indicators */}
              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3">
                {screens.map((_, i) => (
                  <button 
                    key={i} 
                    onClick={() => setCurrent(i)}
                    className={`h-1.5 transition-all duration-300 rounded-full ${i === current ? 'w-8 bg-[#1bc6e7]' : 'w-2 bg-gray-600 hover:bg-gray-400'}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}