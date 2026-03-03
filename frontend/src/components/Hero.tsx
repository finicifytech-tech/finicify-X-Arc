import { useState } from 'react';

export default function Hero() {
  // 1. UPDATE THESE FILENAMES to match the images from your zip file in /public
  const screens = [
    "/screen1.png", 
    "/screen2.png", 
    "/screen3.png",
    "/screen4.png"
  ];
  
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((prev) => (prev === screens.length - 1 ? 0 : prev + 1));
  const prev = () => setCurrent((prev) => (prev === 0 ? screens.length - 1 : prev - 1));

  return (
    <section className="relative w-full pt-32 pb-20 px-10 md:px-20 font-montserrat bg-[#050a12] overflow-hidden">
      
      {/* BACKGROUND WALLPAPER - Using your walpaper.jpeg */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/walpaper.jpeg" 
          alt="Background" 
          className="w-full h-full object-cover opacity-25" 
        />
        {/* Dark overlay to make white text pop */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#050a12]/80 to-[#050a12]"></div>
      </div>

      <div className="max-w-[1440px] mx-auto relative z-10">
        
        {/* Text Content */}
        <div className="max-w-4xl">
          <h1 className="text-[36px] md:text-[64px] font-bold text-white max-w-5xl mb-8 tracking-wider leading-[1.15] md:leading-[1.2]">
            AI-Powered Analytics and Reporting Platform for Asset Management Institutions
          </h1>
          <p className="mt-6 text-[14px] md:text-[18px] text-gray-400 max-w-xl font-light leading-relaxed">
            Finicify is a multi-layered enterprise analytics and reporting platform that 
            automates analysis, reporting, and decision-making processes in financial 
            institutions, making efficiency sustainable.
          </p>

          <div className="mt-8">
            {/* BLUE GRADIENT BUTTON (#0275f6 to #1bc6e7) */}
            <button className="px-10 py-4 bg-gradient-to-r from-[#0275f6] to-[#1bc6e7] text-white font-bold rounded-lg text-[15px] hover:scale-105 transition-transform shadow-[0_0_30px_rgba(2,117,246,0.3)]">
              Book demo →
            </button>
          </div>
        </div>

        {/* INTEGRATED SLIDER CARD */}
        <div className="mt-16 w-full perspective-1000 relative group">
          
          {/* Blue Glow Effect around the card */}
          <div className="absolute -inset-1 bg-[#0275f6]/20 rounded-2xl blur-xl opacity-50 group-hover:opacity-100 transition duration-1000"></div>
          
          <div className="relative bg-[#0a1018] border border-gray-800 rounded-2xl aspect-video w-full overflow-hidden shadow-2xl transition-all duration-700 ease-out group-hover:rotate-x-2 group-hover:scale-[1.01] group-hover:-translate-y-2">
            
            {/* The Actual Sliding Images */}
            <div className="w-full h-full relative">
              <img 
                src={screens[current]} 
                className="w-full h-full object-cover transition-opacity duration-500"
                alt="Finicify Dashboard"
              />

              {/* Slider Controls - Visible on hover */}
              <div className="absolute inset-0 flex items-center justify-between px-6 opacity-0 group-hover:opacity-100 transition-opacity">
                <button 
                  onClick={prev} 
                  className="p-3 bg-black/60 text-white rounded-full hover:bg-[#0275f6] transition-colors"
                >
                  ←
                </button>
                <button 
                  onClick={next} 
                  className="p-3 bg-black/60 text-white rounded-full hover:bg-[#1bc6e7] transition-colors"
                >
                  →
                </button>
              </div>

              {/* Slide Pagination Dots */}
              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3">
                {screens.map((_, i) => (
                  <button 
                    key={i} 
                    onClick={() => setCurrent(i)}
                    className={`h-1.5 transition-all duration-300 rounded-full ${i === current ? 'w-8 bg-[#1bc6e7]' : 'w-2 bg-gray-600'}`}
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