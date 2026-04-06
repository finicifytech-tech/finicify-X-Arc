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
      "/finicify-X-Arc/research and analysis team.jpeg",
      "/finicify-X-Arc/sales and marketing team.jpeg",
      "/finicify-X-Arc/collective investment fund managers.jpeg",
      "/finicify-X-Arc/Treasury and finance departments.jpeg",
      "/finicify-X-Arc/strategy teams.jpeg",
      "/finicify-X-Arc/executive management and boards.jpeg"
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
            "Finicify automates data collection, analysis, and reporting processes...",
            "Through customized reports and model portfolios...",
            "Finicify enables controlled and sustainable portfolio management...",
            "Finicify empowers institutions managing their own assets...",
            "By evaluating competitive and scenario analyses...",
            "Through summarized, verified, and approved reports..."
          ]
        )
      },
      TR: {
        heading: "Finansal Veriye Dayalı Karar Verenler İçin Üretildi",
        subheading: "Kimin İçin?",
        label: "Şunun İçin Çözümler",
        audience: getAudience(
          ["Araştırma & Analiz", "Satış ve Pazarlama", "Fon Yöneticileri", "Hazine & Finans", "Strateji", "Yönetim"],
          [
            "Veri toplama, analiz ve raporlama süreçlerini otomatikleştirir...",
            "Farklı müşteri gruplarına özel içerik sunar...",
            "Fon performansını tek platformda izler...",
            "Kurumlara veri odaklı yatırım imkanı sağlar...",
            "Rekabet analizlerini değerlendirir...",
            "Onaylı raporlarla güvenli karar alma sağlar..."
          ]
        )
      },
      DE: {
        heading: "Zielgruppen",
        subheading: "Entwickelt für Entscheidungsträger",
        label: "Lösungen für",
        audience: getAudience(
          ["Analyse Teams", "Marketing", "Fondsmanager", "Finanzabteilungen", "Strategie", "Vorstand"],
          [
            "Finicify automatisiert Datenprozesse...",
            "Maßgeschneiderte Berichte beschleunigen Vertrieb...",
            "Kontrolliertes Portfoliomanagement...",
            "Datenbasierte Entscheidungen...",
            "Analyse von Szenarien...",
            "Schnelle Entscheidungsfindung..."
          ]
        )
      }
    };
  }, []);

  const data = translations[lang] || translations.EN;
  const activeContent = data.audience[activeTab];

  return (
    <section id="who-is-it-for" className="w-full py-24 bg-[#050a12] font-montserrat">
      <div className="max-w-[1440px] mx-auto px-10 md:px-20">

        <div className="text-center mb-16">
          <h2 className="text-[28px] md:text-[42px] font-bold text-white mb-2">
            {data.heading}
          </h2>
          <p className="text-[#1bc6e7] text-[14px] uppercase tracking-widest">
            {data.subheading}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-20 max-w-5xl mx-auto">
          {data.audience.map((item, index) => (
            <button
              key={item.title}
              onClick={() => setActiveTab(index)}
              className={`px-4 py-4 rounded-xl text-[12px] font-bold ${
                activeTab === index ? "bg-[#0275f6] text-white" : "text-gray-500"
              }`}
            >
              {item.title}
            </button>
          ))}
        </div>

        <div className="max-w-5xl mx-auto flex flex-col md:flex-row gap-12 items-center">
          <div className="w-full md:w-1/2">
            <img 
              src={activeContent.image}
              alt={activeContent.title}
              className="w-full h-full object-cover rounded-2xl"
            />
          </div>

          <div className="w-full md:w-1/2">
            <h3 className="text-[#1bc6e7] mb-4">{data.label}</h3>
            <h3 className="text-2xl font-bold text-white mb-6">
              {activeContent.title}
            </h3>
            <p className="text-gray-400">
              {activeContent.desc}
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}