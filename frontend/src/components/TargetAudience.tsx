import { useState } from 'react';

export default function TargetAudience() {
  const [activeTab, setActiveTab] = useState(0);

  const audienceData = [
    {
      title: "Research & Analysis Teams",
      desc: "Finicify automates data collection, analysis, and reporting processes, enabling analysts to produce deeper, faster, and more consistent insights."
    },
    {
      title: "Sales & Marketing Teams",
      desc: "Through customized reports and model portfolios tailored to different client segments and risk profiles, Finicify delivers data-driven content that accelerates sales cycles and increases client acquisition."
    },
    {
      title: "Collective Investment Fund Managers",
      desc: "Finicify enables controlled and sustainable portfolio management by providing comparative performance, risk, and benchmark analytics within a single platform."
    },
    {
      title: "Treasury & Finance Departments",
      desc: "Finicify empowers institutions managing their own assets to make data-driven investment decisions through customizable, multi-asset analytics aligned with institutional strategies, strengthening financial planning processes."
    },
    {
      title: "Strategy Teams",
      desc: "By evaluating competitive and scenario analyses using data-driven methodologies, Finicify identifies institutional positioning and development areas, strengthening long-term strategic planning."
    },
    {
      title: "Executive Management & Boards",
      desc: "Through summarized, verified, and approved reports and a fully integrated, data-driven monitoring system, Finicify enables fast, transparent, and reliable decision-making while strengthening governance and oversight processes."
    }
  ];

  return (
    <section id="target-audience" className="w-full py-24 bg-[#050a12] font-montserrat">
      <div className="max-w-[1440px] mx-auto px-10 md:px-20">
        
        {/* Section Heading */}
        <h2 className="text-[28px] md:text-[42px] font-bold text-white text-center mb-12">
          Built for Financial Decision Makers
        </h2>

        
        <div className="flex flex-wrap justify-center gap-3 mb-16">
          {audienceData.map((item, index) => (
            <button
              key={index}
              onClick={() => setActiveTab(index)}
              className={`px-6 py-3 rounded-full text-[13px] font-semibold transition-all duration-300 border ${
                activeTab === index 
                ? "bg-[#ccff00] text-black border-[#ccff00]" 
                : "bg-transparent text-gray-400 border-gray-800 hover:border-gray-600"
              }`}
            >
              {item.title}
            </button>
          ))}
        </div>

        {/* Content Box - Animated and Clean */}
        <div className="max-w-5xl mx-auto bg-[#12181f] border border-gray-800 rounded-3xl p-10 md:p-16 flex flex-col md:flex-row gap-12 items-center min-h-[400px]">
          
          {/* Image/Visual Placeholder */}
          <div className="w-full md:w-1/2 aspect-square bg-gray-900 rounded-2xl flex items-center justify-center border border-gray-800">
             <span className="text-gray-700 uppercase tracking-widest text-xs">Visual Representation</span>
          </div>

          {/* Text Content */}
          <div className="w-full md:w-1/2">
            <h3 className="text-2xl font-bold text-white mb-6">
              {audienceData[activeTab].title}
            </h3>
            <p className="text-gray-400 leading-relaxed text-lg font-light">
              {audienceData[activeTab].desc}
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}