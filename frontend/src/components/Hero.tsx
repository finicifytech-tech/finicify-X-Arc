import { useState, useEffect } from 'react';

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
  const screens = ["/1.png", "/2.png", "/3.png", "/4.png", "/5.png"];
  const [current, setCurrent] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const handleNext = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrent((prev) => (prev === screens.length - 1 ? 0 : prev + 1));
  };

  const handlePrev = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrent((prev) => (prev === 0 ? screens.length - 1 : prev - 1));
  };

  useEffect(() => {
    const timer = setTimeout(() => setIsAnimating(false), 500);
    return () => clearTimeout(timer);
  }, [current]);

  return (
    <section className="relative w-full pt-32 pb-20 px-10 md:px-20 font-montserrat bg-[#050a12] overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img src="/walpaper.jpeg" alt="" className="w-full h-full object-cover opacity-50" />
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
            <button className="px-10 py-4 bg-gradient-to-r from-[#0275f6] to-[#1bc6e7] text-white font-bold rounded-lg text-[15px] hover:scale-105 transition-transform shadow-[0_0_30px_rgba(2,117,246,0.3)]">
              {t.cta}
            </button>
          </div>
        </div>

        <div className="mt-16 w-full relative group">
          <div className="absolute -inset-1 bg-[#0275f6]/20 rounded-2xl blur-xl opacity-60 group-hover:opacity-100 transition duration-1000" />

          <div className="relative rounded-2xl overflow-hidden shadow-[0_30px_80px_rgba(2,117,246,0.2)] border border-gray-700/50 transition-all duration-700 ease-out group-hover:scale-[1.01] group-hover:-translate-y-1">

            {/* Browser Header UI */}
            <div className="bg-[#0d1117] border-b border-gray-700/60 px-4 py-3 flex items-center gap-3">
              <div className="flex items-center gap-1.5">
                <span className="w-3 h-3 rounded-full bg-[#ff5f57]" />
                <span className="w-3 h-3 rounded-full bg-[#febc2e]" />
                <span className="w-3 h-3 rounded-full bg-[#28c840]" />
              </div>
              <div className="flex-1 mx-4">
                <div className="bg-[#1a2030] rounded-md px-4 py-1.5 flex items-center gap-2 max-w-sm mx-auto">
                  <svg className="w-3 h-3 text-gray-500 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                  <span className="text-[11px] text-gray-400 tracking-wide">finicify.com</span>
                </div>
              </div>
            </div>

            <div className="relative w-full bg-black">
              {/* Added bg-black and object-fill logic to prevent any white borders */}
              <img
                src={screens[current]}
                className={`w-full h-auto min-h-[400px] object-fill object-top transition-opacity duration-500 bg-black ${isAnimating ? 'opacity-70' : 'opacity-100'}`}
                alt="Dashboard Preview"
              />

              {/* Navigation Controls */}
              <div className="absolute inset-0 flex items-center justify-between px-4 sm:px-8 pointer-events-none">
                <button
                  onClick={handlePrev}
                  className="pointer-events-auto p-3 bg-black/40 hover:bg-[#0275f6] backdrop-blur-md text-white rounded-full border border-white/20 transition-all duration-300 shadow-2xl"
                  aria-label="Previous slide"
                >
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                <button
                  onClick={handleNext}
                  className="pointer-events-auto p-3 bg-black/40 hover:bg-[#1bc6e7] backdrop-blur-md text-white rounded-full border border-white/20 transition-all duration-300 shadow-2xl"
                  aria-label="Next slide"
                >
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>

              {/* Slider Dots */}
              <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex gap-2.5">
                {screens.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrent(i)}
                    className={`h-1.5 transition-all duration-300 rounded-full ${i === current ? 'w-8 bg-[#1bc6e7]' : 'w-2 bg-gray-600 hover:bg-gray-400'}`}
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