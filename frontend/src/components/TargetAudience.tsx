import { useState } from 'react';

// Added specific Language type to match your App.tsx
type Language = 'EN' | 'TR';

export default function TargetAudience({ lang }: { lang: Language }) {
  const [activeTab, setActiveTab] = useState(0);

  // Localized data dictionary to handle switching
  const translations = {
    EN: {
      heading: "Who is it for?",
      label: "Solutions for",
      audience: [
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
      ]
    },
    TR: {
      heading: "Kimin İçin?",
      label: "Şunun İçin Çözümler",
      audience: [
        {
          title: "Araştırma ve Analiz Ekipleri",
          desc: "Finicify; veri toplama, analiz ve raporlama süreçlerini otomatize ederek analistlerin daha derin, hızlı ve tutarlı içgörüler üretmesini sağlar."
        },
        {
          title: "Satış ve Pazarlama Ekipleri",
          desc: "Farklı müşteri segmentlerine ve risk profillerine göre özelleştirilmiş raporlar ve model portföyler aracılığıyla Finicify, satış döngülerini hızlandıran ve müşteri kazanımını artıran veri odaklı içerikler sunar."
        },
        {
          title: "Yatırım Fonu Yöneticileri",
          desc: "Finicify; tek bir platform içinde karşılaştırmalı performans, risk ve benchmark analitiği sunarak kontrollü ve sürdürülebilir portföy yönetimini mümkün kılar."
        },
        {
          title: "Hazine ve Finans Departmanları",
        desc: "Finicify, kendi varlıklarını yöneten kurumların kurumsal stratejilerle uyumlu, özelleştirilebilir ve çoklu varlık analitiği aracılığıyla veri odaklı yatırım kararları almasını sağlayarak finansal planlama süreçlerini güçlendirir."
        },
        {
          title: "Strateji Ekipleri",
          desc: "Finicify; veri odaklı metodolojiler kullanarak rekabet ve senaryo analizlerini değerlendirip kurumsal konumlandırma ve gelişim alanlarını belirler, uzun vadeli stratejik planlamayı güçlendirir."
        },
        {
          title: "Üst Yönetim ve Kurullar",
          desc: "Finicify; özetlenmiş, doğrulanmış ve onaylanmış raporlar ile tam entegre, veri odaklı bir izleme sistemi aracılığıyla hızlı, şeffaf ve güvenilir karar almayı sağlarken yönetişim ve denetim süreçlerini güçlendirir."
        }
      ]
    }
  };

  // Select the current language data
  const currentData = translations[lang];
  const audienceData = currentData.audience;

  return (
    <section id="who-is-it-for" className="w-full py-24 bg-[#050a12] font-montserrat">
      <div className="max-w-[1440px] mx-auto px-10 md:px-20">
        
        {/* Section Heading */}
        <h2 className="text-[28px] md:text-[42px] font-bold text-white text-center mb-16 tracking-tight">
          {currentData.heading}
        </h2>

        {/* Updated Button Layout with Blue Theme */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-20 max-w-5xl mx-auto">
          {audienceData.map((item, index) => (
            <button
              key={index}
              onClick={() => setActiveTab(index)}
              className={`px-4 py-4 rounded-xl text-[12px] uppercase tracking-wider font-bold transition-all duration-300 border ${
                activeTab === index 
                ? "bg-gradient-to-r from-[#0275f6] to-[#1bc6e7] text-white border-transparent shadow-[0_0_20px_rgba(2,117,246,0.3)]" 
                : "bg-transparent text-gray-500 border-gray-800 hover:border-gray-600 hover:text-white"
              }`}
            >
              {item.title}
            </button>
          ))}
        </div>

        {/* Content Box */}
        <div className="max-w-5xl mx-auto bg-[#12181f] border border-gray-800 rounded-3xl p-10 md:p-16 flex flex-col md:flex-row gap-12 items-center min-h-[450px]">
          
          {/* Visual Representation */}
          <div className="w-full md:w-1/2 aspect-square bg-gray-900 rounded-2xl flex items-center justify-center border border-gray-800 overflow-hidden relative">
              <img 
                src={`/audience-${activeTab + 1}.jpeg`} 
                alt={audienceData[activeTab].title}
                className="w-full h-full object-cover opacity-50 transition-opacity duration-500"
                onError={(e) => (e.currentTarget.style.display = 'none')} 
              />
              <span className="absolute text-gray-700 uppercase tracking-widest text-[10px] font-bold">
                Platform Interface Visual
              </span>
          </div>

          {/* Text Content */}
          <div className="w-full md:w-1/2">
            {/* Blue Label Text */}
            <h3 className="text-[#1bc6e7] text-[11px] uppercase tracking-[0.3em] font-bold mb-4">
              {currentData.label}
            </h3>
            <h3 className="text-3xl font-bold text-white mb-6 leading-tight">
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