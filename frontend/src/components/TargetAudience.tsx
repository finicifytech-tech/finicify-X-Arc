import { useState, useMemo } from 'react';

type Language = 'EN' | 'TR' | 'DE';

interface AudienceMember {
  title: string;
  desc: string;
  image: string;
}

interface Localization {
  heading: string;
  subheading: string;
  label: string;
  audience: AudienceMember[];
}

export default function TargetAudience({ lang }: { lang: Language }) {
  const [activeTab, setActiveTab] = useState(0);

  const translations: Record<Language, Localization> = useMemo(() => {
    const images = [
      "research and analysis team.jpeg",
      "sales and marketing team.jpeg",
      "collective investment fund managers.jpeg",
      "Treasury and finance departments.jpeg",
      "strategy teams.jpeg",
      "executive management and boards.jpeg"
    ];

    const getAudience = (titles: string[], descs: string[]) => 
      titles.map((title, i) => ({ title, desc: descs[i], image: images[i] }));

    return {
      EN: {
        heading: "Who is it for?",
        subheading: "Built for financial decision makers",
        label: "Solutions for",
        audience: getAudience(
          ["Research & Analysis Teams", "Sales & Marketing Teams", "Collective Investment Fund Managers", "Treasury & Finance Departments", "Strategy Teams", "Executive Management & Boards"],
          [
            "Finicify automates data collection, analysis, and reporting processes, enabling analysts to produce deeper, faster, and more consistent insights.",
            "Through customized reports and model portfolios tailored to different client segments and risk profiles, Finicify delivers data-driven content that accelerates sales cycles and increases client acquisition.",
            "Finicify enables controlled and sustainable portfolio management by providing comparative performance, risk, and benchmark analytics within a single platform.",
            "Finicify empowers institutions managing their own assets to make data-driven investment decisions through customizable, multi-asset analytics aligned with institutional strategies, strengthening financial planning processes.",
            "By evaluating competitive and scenario analyses using data-driven methodologies, Finicify identifies institutional positioning and development areas, strengthening long-term strategic planning.",
            "Through summarized, verified, and approved reports and a fully integrated, data-driven monitoring system, Finicify enables fast, transparent, and reliable decision-making while strengthening governance and oversight processes."
          ]
        )
      },
      TR: {
        heading: "Finansal Veriye Dayalı Karar Verenler İçin Üretildi",
        subheading: "Kimin İçin?",
        label: "Şunun İçin Çözümler",
        audience: getAudience(
          ["Araştırma & Analiz Departmanı Çalışanları", "Satış ve Pazarlama Departmanı Çalışanları", "Kolektif Yatırım Fonu Yöneticileri", "Hazine & Finans Departmanları", "Strateji Departmanı Çalışanları", "İcra ve Yönetim Kurulları"],
          [
            "Veri toplama, analiz ve raporlama süreçlerini otomatikleştirerek analistlerin daha derin, hızlı ve tutarlı içerikler üretmesini sağlar.",
            "Farklı müşteri gruplarına ve risk seviyelerine uygun özelleştirilmiş raporlar ve model portföyler sayesinde, müşteri ihtiyaçlarına özel veri destekli içerikler sunarak satış süreçlerini hızlandırır ve müşteri kazanım oranını artırır.",
            "Fon performansını, risk metriklerini ve benchmark analizlerini karşılaştırmalı olarak tek platformda izleyerek daha kontrollü ve sürdürülebilir portföy yönetimi sağlar.",
            "Kendi varlığını yöneten kurumlara yönelik farklı varlık türleri için kurumsal yaklaşıma uygun özelleştirilebilir analizler sayesinde yatırım tercihlerini veriye dayalı olarak yapma imkanı sağlar ve finansal planlama süreçlerini güçlendirir.",
            "Rekabet ve senaryo analizlerini veriye dayalı olarak değerlendirerek, kurumun sektördeki konumunu ve gelişim alanlarını objektif biçimde tespit eder; bu bulgularla desteklenen uzun vadeli stratejik planlamayı güçlendirir.",
            "Özetlenmiş, doğrulanmış ve onaylı raporlar ile tüm süreçlerin veriye dayalı olarak izlenip değerlendirilebildiği entegre bir sistem sayesinde hızlı, şeffaf ve güvenilir karar alma imkânı sunar, denetim ve yönetim süreçlerini güçlendirir."
          ]
        )
      },
      DE: {
        heading: "Zielgruppen",
        subheading: "Entwickelt für finanzielle Entscheidungsträger",
        label: "Lösungen für",
        audience: getAudience(
          ["Research- & Analyseteams", "Vertriebs- & Marketingteams", "Investmentfondsmanager", "Treasury- & Finanzabteilungen", "Strategieteams", "Vorstand & Aufsichtsrat"],
          [
            "Finicify automatisiert Datenerfassungs-, Analyse- und Berichterstattungsprozesse und ermöglicht es Analysten, tiefere Erkenntnisse zu gewinnen.",
            "Durch maßgeschneiderte Berichte und Modellportfolios liefert Finicify datengesteuerte Inhalte, die Vertriebszyklen beschleunigen.",
            "Finicify ermöglicht ein kontrolliertes Portfoliomanagement durch vergleichende Performance-, Risiko- und Benchmark-Analysen.",
            "Finicify befähigt Institutionen, datengesteuerte Investitionsentscheidungen durch anpassbare Multi-Asset-Analysen zu treffen.",
            "Durch die Bewertung von Wettbewerbs- und Szenarioanalysen identifiziert Finicify institutionelle Positionierungs- und Entwicklungsbereiche.",
            "Durch verifizierte Berichte und ein voll integriertes Monitoring-System ermöglicht Finicify eine schnelle und zuverlässige Entscheidungsfindung."
          ]
        )
      }
    };
  }, []);

  const data = translations[lang] || translations.EN;
  const activeContent = data.audience[activeTab];

  return (
    <section id="who-is-it-for" className="w-full py-16 sm:py-24 bg-[#050a12] font-montserrat">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-20">
        <div className="text-center mb-16">
          <h2 className="text-[22px] sm:text-[28px] md:text-[42px] font-bold text-white tracking-tight mb-2 px-1">
            {data.heading}
          </h2>
          <p className="text-[#1bc6e7] text-[14px] uppercase tracking-widest font-medium opacity-80">
            {data.subheading}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 mb-12 sm:mb-20 max-w-5xl mx-auto">
          {data.audience.map((item, index) => (
            <button
              key={item.title}
              type="button"
              onClick={() => setActiveTab(index)}
              className={`px-3 sm:px-4 py-3.5 sm:py-4 rounded-xl text-[10px] sm:text-[12px] uppercase tracking-wide sm:tracking-wider font-bold transition-all duration-300 border text-balance leading-snug touch-manipulation min-h-[48px] ${
                activeTab === index 
                ? "bg-gradient-to-r from-[#0275f6] to-[#1bc6e7] text-white border-transparent shadow-[0_0_20px_rgba(2,117,246,0.3)]" 
                : "bg-transparent text-gray-500 border-gray-800 hover:border-gray-600 hover:text-white"
              }`}
            >
              {item.title}
            </button>
          ))}
        </div>

        <div className="max-w-5xl mx-auto bg-[#12181f] border border-gray-800 rounded-2xl sm:rounded-3xl p-6 sm:p-10 md:p-16 flex flex-col md:flex-row gap-8 sm:gap-12 items-center min-h-0 md:min-h-[450px]">
          <div className="w-full md:w-1/2 aspect-square bg-[#0a1018] rounded-2xl flex items-center justify-center border border-gray-800 overflow-hidden relative">
            <img 
              src={`/${activeContent.image}`}
              alt={activeContent.title}
              className="w-full h-full object-cover scale-105 opacity-100 transition-all duration-500"
              onError={(e) => { e.currentTarget.style.display = 'none'; }} 
            />
          </div>

          <div className="w-full md:w-1/2">
            <h3 className="text-[#1bc6e7] text-[11px] uppercase tracking-[0.3em] font-bold mb-4">
              {data.label}
            </h3>
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-4 sm:mb-6 leading-tight">
              {activeContent.title}
            </h3>
            <p className="text-gray-400 leading-relaxed text-sm sm:text-base md:text-lg font-light">
              {activeContent.desc}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}