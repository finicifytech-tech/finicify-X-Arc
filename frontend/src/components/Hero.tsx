import { useState, useEffect, useCallback } from 'react';

type Language = 'EN' | 'TR' | 'DE';

interface HeroProps {
  t: {
    title: string;
    desc: string;
    cta: string;
  };
  lang: Language;
}

export default function Hero({ t }: HeroProps) {
  
  const screens = ["/first.jpeg", "/second.png", "/third.png", "/fourth.png", "/fifth.png"];
  const [current, setCurrent] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const handleNext = useCallback(() => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrent((prev) => (prev === screens.length - 1 ? 0 : prev + 1));
  }, [isAnimating, screens.length]);

  const handlePrev = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrent((prev) => (prev === 0 ? screens.length - 1 : prev - 1));
  };

  useEffect(() => {
    const autoPlayTimer = setInterval(() => {
      handleNext();
    }, 4000);

    return () => clearInterval(autoPlayTimer);
  }, [handleNext]);

  
  useEffect(() => {
    const timer = setTimeout(() => setIsAnimating(false), 500);
    return () => clearTimeout(timer);
  }, [current]);

  return (
    <section className="relative w-full pt-32 pb-20 px-10 md:px-20 font-montserrat bg-[#050a12] overflow-hidden">
    
      <div className="absolute inset-0 z-0">
        <img src="/finicify-X-Arc/walpaper.jpeg" alt="" className="w-full h-full object-cover opacity-50" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#050a12]/40 to-[#050a12]" />
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
            <a
  href="https://calendly.com/tunca-finicify"
  target="_blank"
  rel="noopener noreferrer"
  className="inline-block px-10 py-4 bg-gradient-to-r from-[#0275f6] to-[#1bc6e7] text-white font-bold rounded-lg text-[15px] hover:scale-105 transition-transform shadow-[0_0_30px_rgba(2,117,246,0.3)]"
>
  {t.cta}
</a>
          </div>
        </div>

        <div className="mt-16 w-full relative group">
         
          <div className="absolute -inset-1 bg-[#0275f6]/20 rounded-2xl blur-xl opacity-60 group-hover:opacity-100 transition duration-1000" />

          
          <div className="relative rounded-2xl overflow-hidden shadow-[0_30px_80px_rgba(2,117,246,0.2)] border border-gray-700/50 transition-all duration-700 ease-out group-hover:scale-[1.01] group-hover:-translate-y-1">
            
            <div className="relative w-full aspect-video bg-[#0d1117]">
             
              <img
                src={screens[current]}
                className={`w-full h-full object-cover object-top transition-opacity duration-700 ${isAnimating ? 'opacity-40' : 'opacity-100'}`}
                alt="Dashboard Preview"
              />

              {/* Navigation Arrows */}
              <div className="absolute inset-0 flex items-center justify-between px-4 sm:px-8 pointer-events-none">
                <button
                  onClick={handlePrev}
                  className="pointer-events-auto p-3 bg-black/20 hover:bg-[#0275f6] backdrop-blur-sm text-white rounded-full border border-white/10 transition-all duration-300 shadow-xl"
                  aria-label="Previous slide"
                >
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                <button
                  onClick={handleNext}
                  className="pointer-events-auto p-3 bg-black/20 hover:bg-[#1bc6e7] backdrop-blur-sm text-white rounded-full border border-white/10 transition-all duration-300 shadow-xl"
                  aria-label="Next slide"
                >
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>

              {/* Progress Bar Dots */}
              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3">
                {screens.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrent(i)}
                    className={`h-1.5 transition-all duration-500 rounded-full shadow-sm ${i === current ? 'w-10 bg-[#1bc6e7]' : 'w-2 bg-white/40 hover:bg-white/60'}`}
                    aria-label={`Go to slide ${i + 1}`}
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