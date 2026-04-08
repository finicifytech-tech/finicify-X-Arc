import { useState, useMemo, useCallback, useRef, useEffect } from "react";

type Language = "EN" | "TR" | "DE";

interface Module {
  title: string;
  desc: string;
  image: string;
}

interface Localization {
  label: string;
  modules: Module[];
}

export default function ModuleSlider({ lang }: { lang: Language }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [stepPx, setStepPx] = useState(432);
  const [dragOffset, setDragOffset] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const dragStartRef = useRef<{ x: number; pointerId: number } | null>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  const data: Record<Language, Localization> = useMemo(
    () => ({
      EN: {
        label: "MODULES / FEATURES",
        modules: [
          {
            title: "AI-Powered Data Processing and Insight Generation",
            desc: "Finicify analyzes large-scale data sets through advanced, customizable analytics and artificial intelligence to deliver fast, accurate, and actionable insights that support decision-making.",
            image: "/1.png",
          },
          {
            title: "Customizable Automated Analytics and Reporting Infrastructure Aligned with Institutional Standards",
            desc: "Finicify provides a flexible and sustainable analytics and reporting infrastructure that adapts to your institution’s methodologies and operational standards.",
            image: "/2.png",
          },
          {
            title: "Scalable, High-Quality Content Production Despite Growing Data Volumes",
            desc: "Finicify ensures consistent, comprehensive, and high-quality report generation while maintaining scalability as data and content volumes increase.",
            image: "/3.png",
          },
          {
            title: "Role-Based Hierarchical Authorization (Four-Eyes Principle)",
            desc: "Finicify enables secure, transparent, and auditable process management through role-based permissions and executive-level approval mechanisms.",
            image: "/4.png",
          },
          {
            title: "Workforce Optimization and Productivity Enhancement",
            desc: "By automating manual processes, Finicify reduces operational workload, increases employee productivity, and delivers significant time and cost savings.",
            image: "/5.png",
          },
          {
            title: "Integrated and Centralized Management of Analytics and Reporting Processes",
            desc: "Finicify eliminates operational complexity by managing all analytics, reporting, and approval workflows through a single, integrated platform.",
            image: "/6.png",
          },
        ],
      },
      TR: {
        label: "MODÜLLER / ÖZELLİKLER",
        modules: [
          {
            title: "Yapay Zeka Destekli Veri İşleme ve İçgörü Üretimi",
            desc: "Finicify, büyük veri setlerini kapsamlı ve özelleştirilebilir analizler ve yapay zeka ile analiz ederek karar süreçlerini destekleyen hızlı, doğru ve aksiyon alınabilir içgörüler üretir.",
            image: "/1.png",
          },
          {
            title: "Kurum Yaklaşımına Uygun Özelleştirilebilir Otomatik Analiz ve Raporlama Altyapısı",
            desc: "Kurumunuzun yaklaşımına ve standartlarına uyum sağlayan otomatik analiz ve raporlama altyapısı ile esnek ve sürdürülebilir bir yapı sunar.",
            image: "/2.png",
          },
          {
            title: "Genişleyen İçerik Hacmine Rağmen Ölçeklenebilir Ve Yüksek Kaliteli İçerik Üretimi",
            desc: "Artan veri ve içerik hacmine rağmen, kalite standartlarını koruyarak ölçeklenebilir, geniş kapsamlı ve tutarlı rapor üretimi sağlar.",
            image: "/3.png",
          },
          {
            title: "Rol Bazlı Hiyerarşik Yetkilendirme (Four-Eyes Principle)",
            desc: "Farklı kullanıcı seviyelerine özel yetkilendirme ve üst yönetim onay mekanizmaları ile güvenli, şeffaf ve denetlenebilir süreç yönetimi sağlar.",
            image: "/4.png",
          },
          {
            title: "İnsan Kaynağı Optimizasyonu Ve Verimlilik Artışı",
            desc: "Manuel süreçleri otomatikleştirerek ekiplerin operasyonel yükünü azaltır, verimliliği arttırır, zaman ve maliyet tasarrufu sağlar.",
            image: "/5.png",
          },
          {
            title: "Raporlama ve Analiz Süreçlerinin Entegre ve Tek Sistemden Yönetilmesi",
            desc: "Tüm analiz, raporlama ve onay süreçlerini tek bir platform üzerinden entegre şekilde yöneterek operasyonel karmaşıklığı ortadan kaldırır.",
            image: "/6.png",
          },
        ],
      },
      DE: {
        label: "MODULE / FUNKTIONEN",
        modules: [
          {
            title: "KI-gestützte Datenverarbeitung und Insight-Generierung",
            desc: "Finicify analysiert große Datensätze durch fortschrittliche, anpassbare Analysen und künstliche Intelligenz, um schnelle, genaue und umsetzbare Erkenntnisse für die Entscheidungsfindung zu liefern.",
            image: "/1.png",
          },
          {
            title: "Anpassbare Infrastruktur für automatisierte Analysen und Reporting nach institutionellen Standards",
            desc: "Finicify bietet eine flexible und nachhaltige Analyse- und Reporting-Infrastruktur, die sich an die Methoden und operativen Standards Ihrer Institution anpasst.",
            image: "/2.png",
          },
          {
            title: "Skalierbare, hochwertige Content-Erstellung trotz wachsender Datenmengen",
            desc: "Finicify gewährleistet eine konsistente, umfassende und qualitativ hochwertige Berichterstellung bei gleichzeitiger Skalierbarkeit.",
            image: "/3.png",
          },
          {
            title: "Rollenbasierte hierarchische Autorisierung (Vier-Augen-Prinzip)",
            desc: "Finicify ermöglicht ein sicheres, transparentes und prüfbares Prozessmanagement durch rollenbasierte Berechtigungen.",
            image: "/4.png",
          },
          {
            title: "Optimierung der Belegschaft und Produktivitätssteigerung",
            desc: "Durch die Automatisierung manueller Prozesse reduziert Finicify die operative Arbeitsbelastung.",
            image: "/5.png",
          },
          {
            title: "Integriertes und zentralisiertes Management von Analyse- und Reporting-Prozessen",
            desc: "Finicify beseitigt operative Komplexität.",
            image: "/6.png",
          },
        ],
      },
    }),
    []
  );

  const current = data[lang];

  const measureStep = useCallback(() => {
    const track = trackRef.current;
    const first = track?.firstElementChild as HTMLElement | undefined;
    if (!track || !first) return;
    const gapStr = getComputedStyle(track).gap;
    const gap = parseFloat(gapStr) || 0;
    const w = first.getBoundingClientRect().width;
    if (w > 0) setStepPx(w + gap);
  }, []);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    const ro = new ResizeObserver(() => measureStep());
    ro.observe(track);
    const first = track.firstElementChild;
    if (first) ro.observe(first);
    window.addEventListener("orientationchange", measureStep);
    const raf = requestAnimationFrame(() => measureStep());
    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
      window.removeEventListener("orientationchange", measureStep);
    };
  }, [measureStep, lang, currentIndex, current.modules.length]);

  const handleNext = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % current.modules.length);
  }, [current.modules.length]);

  const handlePrev = useCallback(() => {
    setCurrentIndex((prev) => (prev === 0 ? current.modules.length - 1 : prev - 1));
  }, [current.modules.length]);

  const maxOffset = stepPx * 0.35;
  const clampedDrag = Math.max(-maxOffset, Math.min(maxOffset, dragOffset));

  const baseX = -(currentIndex * stepPx) + (isDragging ? clampedDrag : 0);
  const transformStyle = { transform: `translate3d(${baseX}px, 0, 0)` };

  const onPointerDown = (e: React.PointerEvent) => {
    if (e.button !== 0) return;
    (e.currentTarget as HTMLElement).setPointerCapture(e.pointerId);
    dragStartRef.current = { x: e.clientX, pointerId: e.pointerId };
    setIsDragging(true);
    setDragOffset(0);
  };

  const onPointerMove = (e: React.PointerEvent) => {
    const start = dragStartRef.current;
    if (!start || start.pointerId !== e.pointerId) return;
    setDragOffset(e.clientX - start.x);
  };

  const finishPointer = (e: React.PointerEvent) => {
    const start = dragStartRef.current;
    if (!start || start.pointerId !== e.pointerId) return;
    try {
      (e.currentTarget as HTMLElement).releasePointerCapture(e.pointerId);
    } catch {
      /* ignore */
    }
    const dx = e.clientX - start.x;
    dragStartRef.current = null;
    setIsDragging(false);
    setDragOffset(0);
    const threshold = Math.min(72, stepPx * 0.18);
    if (dx > threshold) handlePrev();
    else if (dx < -threshold) handleNext();
  };

  const onPointerUp = (e: React.PointerEvent) => finishPointer(e);
  const onPointerCancel = (e: React.PointerEvent) => {
    dragStartRef.current = null;
    setIsDragging(false);
    setDragOffset(0);
    try {
      (e.currentTarget as HTMLElement).releasePointerCapture(e.pointerId);
    } catch {
      /* ignore */
    }
  };

  return (
    <section id="modules" className="w-full py-16 sm:py-24 bg-[#050a12] font-montserrat overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-20">
        <div className="flex flex-col gap-6 sm:flex-row sm:justify-between sm:items-end mb-10 sm:mb-16">
          <div className="flex-1 min-w-0">
            <h2 className="text-[10px] sm:text-[11px] uppercase tracking-[0.35em] sm:tracking-[0.4em] text-[#1bc6e7] font-bold mb-3 sm:mb-4 opacity-90">
              {current.label}
            </h2>
            <div className="h-px w-32 sm:w-48 bg-gray-800" />
          </div>

          <div className="flex gap-2 sm:gap-4 shrink-0 self-start sm:self-auto sm:ml-8">
            <button
              type="button"
              onClick={handlePrev}
              className="p-2.5 sm:p-3 rounded-full border border-gray-800 text-white hover:bg-[#0275f6] transition touch-manipulation"
              aria-label="Previous module"
            >
              ←
            </button>
            <button
              type="button"
              onClick={handleNext}
              className="p-2.5 sm:p-3 rounded-full border border-gray-800 text-white hover:bg-[#1bc6e7] transition touch-manipulation"
              aria-label="Next module"
            >
              →
            </button>
          </div>
        </div>

        <p className="text-gray-500 text-xs mb-4 lg:hidden">Swipe or drag the cards horizontally</p>

        <div
          className="relative overflow-hidden rounded-xl [-webkit-overflow-scrolling:touch] select-none cursor-grab active:cursor-grabbing [touch-action:none]"
          onPointerDown={onPointerDown}
          onPointerMove={onPointerMove}
          onPointerUp={onPointerUp}
          onPointerCancel={onPointerCancel}
          onLostPointerCapture={() => {
            dragStartRef.current = null;
            setIsDragging(false);
            setDragOffset(0);
          }}
          role="region"
          aria-roledescription="carousel"
          aria-label="Modules"
        >
          <div
            ref={trackRef}
            className={`flex gap-6 sm:gap-8 will-change-transform ${isDragging ? "" : "transition-transform duration-700 ease-in-out"}`}
            style={transformStyle}
          >
            {current.modules.map((item, index) => (
              <div
                key={index}
                className="shrink-0 min-w-[min(100%,280px)] sm:min-w-[320px] md:min-w-[400px] max-w-[calc(100vw-3rem)] sm:max-w-none bg-[#12181f] rounded-2xl p-5 sm:p-8"
              >
                <img src={item.image} alt="" className="w-full h-[140px] sm:h-[160px] object-cover rounded-xl mb-4 sm:mb-6" />

                <h3 className="text-white font-semibold mb-3 sm:mb-4 text-[15px] sm:text-base leading-snug">{item.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
