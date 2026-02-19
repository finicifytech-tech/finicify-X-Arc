export default function ModuleSlider() {

  const modules = [
    { title: "AI Data Processing", desc: "Generate actionable insights from complex datasets using Finicify AI." },
    { title: "Custom Reporting", desc: "Automated infrastructure that adapts to your institutional standards." },
    { title: "Scalable Content", desc: "Maintain high quality even as your data volume grows exponentially." },
    { title: "Secure Workflow", desc: "Role-based authorization following the Four-Eyes Principle." },
  ];

  return (
    <section id="modules" className="w-full py-24 bg-[#050a12] font-montserrat">
      <div className="max-w-[1440px] mx-auto px-10 md:px-20">
        
        {/* Section Header */}
        <div className="mb-16">
          <h2 className="text-[12px] uppercase tracking-[0.3em] text-[#ccff00] font-bold mb-4">
            Modules / Features
          </h2>
          <div className="h-[1px] w-full bg-gray-800"></div>
        </div>

        {/* The Sliding Container */}
        <div className="flex gap-6  pb-10 overflow-x-auto no-scrollbar scrollbar-hide snap-x snap-mandatory">
          {modules.map((item, index) => (
            <div 
              key={index}
              className="min-w-[300px] md:min-w-[400px] aspect-[4/5] bg-[#12181f] border border-gray-800 rounded-2xl p-8 snap-start flex flex-col justify-end group hover:border-[#007bff] transition-all duration-500"
            >
              {/* Card Content Placeholder */}
              <div className="mb-auto">
                 <div className="w-12 h-12 rounded-full bg-[#007bff]/10 flex items-center justify-center text-[#007bff] mb-6">
                    {index + 1}
                 </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-[#ccff00] transition-colors">
                  {item.title}
                </h3>
                <p className="text-gray-400 leading-relaxed text-sm">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}