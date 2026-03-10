import { useState, useMemo } from 'react';

type Language = 'EN' | 'TR' | 'DE';

interface Module {
  title: string;
  desc: string;
}

interface Localization {
  label: string;
  modules: Module[];
}

export default function ModuleSlider({ lang }: { lang: Language }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const data: Record<Language, Localization> = useMemo(() => ({
    EN: {
      label: "MODULES / FEATURES",
      modules: [
        { 
          title: "AI-Powered Data Processing and Insight Generation", 
          desc: "Finicify analyzes large-scale data sets through advanced, customizable analytics and artificial intelligence to deliver fast, accurate, and actionable insights that support decision-making." 
        },
        { 
          title: "Customizable Automated Analytics and Reporting Infrastructure Aligned with Institutional Standards", 
          desc: "Finicify provides a flexible and sustainable analytics and reporting infrastructure that adapts to your institution’s methodologies and operational standards." 
        },
        { 
          title: "Scalable, High-Quality Content Production Despite Growing Data Volumes", 
          desc: "Finicify ensures consistent, comprehensive, and high-quality report generation while maintaining scalability as data and content volumes increase." 
        },
        { 
          title: "Role-Based Hierarchical Authorization (Four-Eyes Principle)", 
          desc: "Finicify enables secure, transparent, and auditable process management through role-based permissions and executive-level approval mechanisms." 
        },
        { 
          title: "Workforce Optimization and Productivity Enhancement", 
          desc: "By automating manual processes, Finicify reduces operational workload, increases employee productivity, and delivers significant time and cost savings." 
        },
        { 
          title: "Integrated and Centralized Management of Analytics and Reporting Processes", 
          desc: "Finicify eliminates operational complexity by managing all analytics, reporting, and approval workflows through a single, integrated platform." 
        }
      ]
    },
    TR: {
      label: "MODÜLLER / ÖZELLİKLER",
      modules: [
        { 
          title: "Yapay Zeka Destekli Veri İşleme ve İçgörü Üretimi", 
          desc: "Finicify, büyük veri setlerini kapsamlı ve özelleştirilebilir analizler ve yapay zeka ile analiz ederek karar süreçlerini destekleyen hızlı, doğru ve aksiyon alınabilir içgörüler üretir." 
        },
        { 
          title: "Kurum Yaklaşımına Uygun Özelleştirilebilir Otomatik Analizi ve Raporlama Altyapısı", 
          desc: "Kurumunuzun yaklaşımına ve standartlarına uyum sağlayan otomatik analiz ve raporlama altyapısı ile esnek ve sürdürülebilir bir yapı sunar." 
        },
        { 
          title: "Genişleyen İçerik Hacmine Rağmen Ölçeklenebilir Ve Yüksek Kalite İçerik Üretimi", 
          desc: "Artan veri ve içerik hacmine rağmen, kalite standartlarını koruyarak ölçeklenebilir, geniş kapsamlı ve tutarlı rapor üretimi sağlar." 
        },
        { 
          title: "Rol Bazlı Hiyerarşik Yetkilendirme (Four-Eyes Principle)", 
          desc: "Farklı kullanıcı seviyelerine özel yetkilendirme ve üst yönetim onay mekanizmaları ile güvenli, şeffaf ve denetlenebilir süreç yönetimi sağlar." 
        },
        { 
          title: "İnsan Kaynağı Optimizasyonu Ve Verimlilik Artışı", 
          desc: "Manuel süreçleri otomatikleştirerek ekiplerin operasyonel yükünü azaltır, verimliliği arttırır, zaman ve maliyet tasarrufu sağlar." 
        },
        { 
          title: "Raporlama ve Analiz Süreçlerin Entegre ve Tek Sistemden Yönetilmesi", 
          desc: "Tüm analiz, raporlama ve onay süreçlerini tek bir platform üzerinden entegre şekilde yöneterek operasyonel karmaşıklığı ortadan kaldırır." 
        }
      ]
    },
    DE: {
      label: "MODULE / FUNKTIONEN",
      modules: [
        { 
          title: "KI-gestützte Datenverarbeitung und Insight-Generierung", 
          desc: "Finicify analysiert große Datensätze durch fortschrittliche, anpassbare Analysen und künstliche Intelligenz, um schnelle, genaue und umsetzbare Erkenntnisse für die Entscheidungsfindung zu liefern." 
        },
        { 
          title: "Anpassbare Infrastruktur für automatisierte Analysen und Reporting nach institutionellen Standards", 
          desc: "Finicify bietet eine flexible und nachhaltige Analyse- und Reporting-Infrastruktur, die sich an die Methoden und operativen Standards Ihrer Institution anpasst." 
        },
        { 
          title: "Skalierbare, hochwertige Content-Erstellung trotz wachsender Datenmengen", 
          desc: "Finicify gewährleistet eine konsistente, umfassende und qualitativ hochwertige Berichterstellung bei gleichzeitiger Skalierbarkeit, auch wenn das Daten- und Content-Volumen zunimmt." 
        },
        { 
          title: "Rollenbasierte hierarchische Autorisierung (Vier-Augen-Prinzip)", 
          desc: "Finicify ermöglicht ein sicheres, transparentes und prüfbares Prozessmanagement durch rollenbasierte Berechtigungen und Genehmigungsmechanismen auf Managementebene." 
        },
        { 
          title: "Optimierung der Belegschaft und Produktivitätssteigerung", 
          desc: "Durch die Automatisierung manueller Prozesse reduziert Finicify die operative Arbeitsbelastung, steigert die Produktivität der Mitarbeiter und sorgt für erhebliche Zeit- und Kosteneinsparungen." 
        },
        { 
          title: "Integriertes und zentralisiertes Management von Analyse- und Reporting-Prozessen", 
          desc: "Finicify beseitigt operative Komplexität, indem alle Analyse-, Reporting- und Genehmigungsworkflows über eine einzige, integrierte Plattform verwaltet werden." 
        }
      ]
    }
  }), []);

  const current = data[lang];
  const handleNext = () => setCurrentIndex((prev) => (prev + 1) % current.modules.length);
  const handlePrev = () => setCurrentIndex((prev) => (prev === 0 ? current.modules.length - 1 : prev - 1));

  return (
    <section id="modules" className="w-full py-24 bg-[#050a12] font-montserrat overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-10 md:px-20">
        <div className="flex justify-between items-end mb-16">
          <div className="flex-1">
            <h2 className="text-[11px] uppercase tracking-[0.4em] text-[#1bc6e7] font-bold mb-4 opacity-90">
              {current.label}
            </h2>
            <div className="h-[1px] w-48 bg-gray-800" />
          </div>
          <div className="flex gap-4 ml-8">
            <button onClick={handlePrev} className="p-3 rounded-full border border-gray-800 text-white hover:bg-[#0275f6] hover:border-[#0275f6] transition-all duration-300 active:scale-95 shadow-lg">←</button>
            <button onClick={handleNext} className="p-3 rounded-full border border-gray-800 text-white hover:bg-[#1bc6e7] hover:border-[#1bc6e7] transition-all duration-300 active:scale-95 shadow-lg">→</button>
          </div>
        </div>

        <div className="relative">
          <div 
            className="flex gap-8 transition-transform duration-700 ease-in-out"
            style={{ transform: `translateX(calc(-${currentIndex * (400 + 32)}px))` }}
          >
            {current.modules.map((item, index) => (
              <div 
                key={index}
                className="min-w-[320px] md:min-w-[400px] aspect-[4/5] bg-[#12181f] border border-gray-800 rounded-2xl p-8 flex flex-col justify-end group hover:border-[#0275f6]/50 transition-all duration-500"
              >
                <div className="mb-auto">
                   <div className="w-10 h-10 rounded-full bg-[#0275f6]/5 flex items-center justify-center text-[#0275f6] mb-6 font-bold border border-[#0275f6]/10 text-sm">
                      {String(index + 1).padStart(2, '0')}
                   </div>
                </div>

                <div>
                  <h3 className="text-lg md:text-[20px] font-semibold text-white mb-4 group-hover:text-[#1bc6e7] transition-colors leading-snug tracking-tight">
                    {item.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed text-[14px] font-normal opacity-80">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}