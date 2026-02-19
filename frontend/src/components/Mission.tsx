export default function Mission() {
  return (
    <section id="mission" className="w-full min-h-screen bg-[#050a12] flex flex-col md:flex-row font-montserrat border-t border-gray-800/30">
      

      <div className="w-full md:w-1/2 flex items-center px-10 md:px-20 py-20">
        <div className="max-w-xl">
          <h2 className="text-[#ccff00] text-[12px] uppercase tracking-[0.3em] font-bold mb-8">
            Our Mission
          </h2>
          
          <h3 className="text-[32px] md:text-[48px] font-bold text-white leading-[1.2] mb-10">
            Building the infrastructure for modern financial decision-making.
          </h3>
          
          <p className="text-gray-400 text-[18px] leading-relaxed font-light">
            Finicify integrates data, analytics, and decision-making processes into a unified platform, 
            eliminating manual operations and enabling sustainable, scalable content production 
            and process management—contributing to the development of the Turkish capital markets.
          </p>
        </div>
      </div>

   
      <div className="w-full md:w-1/2 bg-gray-900 relative overflow-hidden">
       
        <div className="absolute inset-0 bg-gradient-to-b from-[#050a12]/20 to-[#050a12]"></div>
        <div className="w-full h-full flex items-center justify-center border-l border-gray-800">
           <span className="text-gray-800 uppercase tracking-widest font-bold text-xl opacity-20">
             Finicify Mission Visual
           </span>
        </div>
      </div>

    </section>
  );
}