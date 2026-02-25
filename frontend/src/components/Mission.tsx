export default function Mission() {
  return (
    <section id="mission" className="w-full min-h-screen bg-[#050a12] flex flex-col md:flex-row font-montserrat border-t border-gray-800/30">
      
      {/* Left Content Side */}
      <div className="w-full md:w-1/2 flex items-center px-10 md:px-20 py-24">
        <div className="max-w-xl">
          <h2 className="text-[#ccff00] text-[12px] uppercase tracking-[0.4em] font-bold mb-8">
            Our Mission
          </h2>
          
          {/* Headline updated with more "spread out" spacing */}
          <h3 className="text-[32px] md:text-[52px] font-bold text-white leading-[1.15] mb-12 tracking-tight">
            Building the infrastructure for modern financial intelligence.
          </h3>
          
          <div className="space-y-8">
            <p className="text-gray-300 text-[19px] leading-relaxed font-light tracking-wide">
              Finicify integrates data, analytics, and decision-making processes into a unified ecosystem. 
              We are dedicated to eliminating inefficient manual operations by providing an automated, 
              institutional-grade platform that ensures precision in every data point.
            </p>

            <p className="text-gray-400 text-[17px] leading-relaxed font-light border-l-2 border-[#ccff00]/30 pl-6">
              By enabling sustainable, scalable content production and rigorous process management, 
              we are directly contributing to the digital transformation and development of 
              capital markets—starting with a foundation of trust and transparency.
            </p>
          </div>
        </div>
      </div>

      {/* Right Visual Side */}
      <div className="w-full md:w-1/2 bg-[#0a1018] relative overflow-hidden flex items-center justify-center border-l border-gray-800/50">
        {/* Subtle grid pattern background */}
        <div className="absolute inset-0 opacity-10" 
             style={{ backgroundImage: 'radial-gradient(#ccff00 0.5px, transparent 0.5px)', backgroundSize: '30px 30px' }}>
        </div>
        
        <div className="relative z-10 flex flex-col items-center">
           <div className="w-64 h-64 rounded-full border border-[#ccff00]/10 flex items-center justify-center animate-pulse">
              <div className="w-48 h-48 rounded-full border border-[#ccff00]/20 flex items-center justify-center">
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