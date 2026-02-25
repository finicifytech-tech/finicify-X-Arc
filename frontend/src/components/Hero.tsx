export default function Hero() {
  return (
    <section className="relative w-full pt-32 pb-20 px-10 md:px-20 font-montserrat">
      <div className="max-w-[1440px] mx-auto">
        
  
        <div className="max-w-4xl">
      <h1 className="text-[36px] md:text-[64px] font-bold text-white max-w-5xl mb-8 
  tracking-wider leading-[1.15] md:leading-[1.2]">
  AI-Powered Analytics and Reporting Platform for Asset Management Institutions
</h1>
          <p className="mt-6 text-[14px] md:text-[18px] text-gray-400 max-w-xl font-light leading-relaxed">
            Finicify is a multi-layered enterprise analytics and reporting platform that 
            automates analysis, reporting, and decision-making processes in financial 
            institutions, making efficiency sustainable.
          </p>

          <div className="mt-8">
            <button className="px-8 py-3.5 bg-[#ccff00] text-black font-bold rounded-lg text-[15px] hover:scale-105 transition-transform shadow-[0_0_20px_rgba(204,255,0,0.1)]">
              Book demo →
            </button>
          </div>
        </div>

        <div className="mt-16 w-full perspective-1000 relative group">
    
          <div className="absolute -inset-1 bg-[#007bff]/20 rounded-2xl blur-xl opacity-50 group-hover:opacity-100 transition duration-1000"></div>
          
          <div className="relative bg-[#12181f] border border-gray-800 rounded-2xl aspect-video w-full flex items-center justify-center shadow-2xl transition-all duration-700 ease-out group-hover:rotate-x-6 group-hover:scale-[1.01] group-hover:-translate-y-2">
            <span className="text-gray-600 text-sm font-medium tracking-widest uppercase opacity-50">
              [ Finicify Dashboard Interface ]
            </span>
          </div>
        </div>

      </div>
    </section>
  );
}