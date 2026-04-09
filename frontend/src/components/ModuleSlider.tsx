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
  // Start in the middle copy of the triplicated array for infinite loop
  const [currentIndex, setCurrentIndex] = useState(6);
  const [stepPx, setStepPx] = useState(0);
  const [dragOffset, setDragOffset] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [animated, setAnimated] = useState(true);
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
            desc: "Finicify provides a flexible and sustainable analytics and reporting infrastructure that adapts to your institution's methodologies and operational standards.",
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
  const n = current.modules.length; // 6

  // Triple the array: [copy1, real, copy2] — start in the middle (real) set
  const loopModules = useMemo(
    () => [...current.modules, ...current.modules, ...current.modules],
    [current.modules]
  );

  // Silently jump to the equivalent position in the middle set without animation
  const jumpSilent = useCallback((target: number) => {
    setAnimated(false);
    setCurrentIndex(target);
    // Re-enable animation after two frames so the DOM has updated
    requestAnimationFrame(() => {
      requestAnimationFrame(() => setAnimated(true));
    });
  }, []);

  // After each animated move, if we've drifted into a cloned set → snap back silently
  useEffect(() => {
    if (currentIndex < n || currentIndex >= 2 * n) {
      const target = currentIndex < n ? currentIndex + n : currentIndex - n;
      const timer = setTimeout(() => jumpSilent(target), 720);
      return () => clearTimeout(timer);
    }
  }, [currentIndex, n, jumpSilent]);

  // Measure card width + gap to drive the transform
  const measureStep = useCallback(() => {
    const track = trackRef.current;
    const first = track?.firstElementChild as HTMLElement | null;
    if (!track || !first) return;
    const gap = parseFloat(getComputedStyle(track).gap) || 0;
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
  }, [measureStep, lang]);

  const handleNext = useCallback(() => setCurrentIndex((p) => p + 1), []);
  const handlePrev = useCallback(() => setCurrentIndex((p) => p - 1), []);

  const maxDrag = stepPx * 0.4;
  const clampedDrag = Math.max(-maxDrag, Math.min(maxDrag, dragOffset));
  const baseX = -(currentIndex * stepPx) + (isDragging ? clampedDrag : 0);

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

  const finishDrag = (e: React.PointerEvent) => {
    const start = dragStartRef.current;
    if (!start || start.pointerId !== e.pointerId) return;
    try { (e.currentTarget as HTMLElement).releasePointerCapture(e.pointerId); } catch { /* noop */ }
    const dx = e.clientX - start.x;
    dragStartRef.current = null;
    setIsDragging(false);
    setDragOffset(0);
    const threshold = Math.min(60, stepPx * 0.15);
    if (dx > threshold) handlePrev();
    else if (dx < -threshold) handleNext();
  };

  const cancelDrag = () => {
    dragStartRef.current = null;
    setIsDragging(false);
    setDragOffset(0);
  };

  // Which real dot should be active (maps any index back to 0–n-1)
  const dotIndex = ((currentIndex % n) + n) % n;

  return (
    <section
      id="modules"
      className="w-full py-16 sm:py-24 bg-[#050a12] font-montserrat overflow-hidden"
    >
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-20">

        {/* ── Header ── */}
        <div className="flex flex-col gap-5 sm:flex-row sm:justify-between sm:items-end mb-10 sm:mb-14">
          <div className="flex-1 min-w-0">
            <h2 className="text-[10px] sm:text-[11px] uppercase tracking-[0.35em] sm:tracking-[0.4em] text-[#1bc6e7] font-bold mb-3 opacity-90">
              {current.label}
            </h2>
            <div className="h-px w-32 sm:w-48 bg-gray-800" />
          </div>

          <div className="flex gap-2 shrink-0 self-start sm:self-auto">
            <button
              type="button"
              onClick={handlePrev}
              className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-gray-700 text-gray-400 hover:border-[#0275f6] hover:text-white hover:bg-[#0275f6]/20 transition-all touch-manipulation flex items-center justify-center"
              aria-label="Previous module"
            >
              ←
            </button>
            <button
              type="button"
              onClick={handleNext}
              className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-gray-700 text-gray-400 hover:border-[#1bc6e7] hover:text-white hover:bg-[#1bc6e7]/20 transition-all touch-manipulation flex items-center justify-center"
              aria-label="Next module"
            >
              →
            </button>
          </div>
        </div>

        <p className="text-gray-600 text-[11px] mb-5 lg:hidden select-none">
          Swipe to browse modules
        </p>

        {/* ── Infinite carousel ── */}
        <div
          className="relative overflow-hidden select-none cursor-grab active:cursor-grabbing [touch-action:pan-y]"
          onPointerDown={onPointerDown}
          onPointerMove={onPointerMove}
          onPointerUp={finishDrag}
          onPointerCancel={cancelDrag}
          onLostPointerCapture={cancelDrag}
          role="region"
          aria-roledescription="carousel"
          aria-label="Modules"
        >
          <div
            ref={trackRef}
            style={{ transform: `translate3d(${baseX}px, 0, 0)` }}
            className={[
              "flex gap-4 sm:gap-5 will-change-transform",
              animated && !isDragging
                ? "transition-transform duration-[680ms] ease-in-out"
                : "",
            ].join(" ")}
          >
            {loopModules.map((item, index) => (
              <div
                key={index}
                className="shrink-0 w-full sm:w-[calc(50%-10px)] lg:w-[calc((100%-40px)/3)] bg-[#0c1420] border border-white/[0.06] rounded-2xl overflow-hidden flex flex-col"
              >
                {/* Full-width image */}
                <div className="w-full aspect-[16/9] overflow-hidden bg-[#080f1a]">
                  <img
                    src={item.image}
                    alt={item.title}
                    draggable={false}
                    className="w-full h-full object-cover pointer-events-none"
                  />
                </div>

                {/* Card body */}
                <div className="flex flex-col flex-1 p-5 sm:p-6 gap-3">
                  <h3 className="text-white font-semibold text-[14px] sm:text-[15px] leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-gray-500 text-[13px] leading-relaxed flex-1">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── Dot pagination ── */}
        <div className="flex justify-center items-center gap-2 mt-8">
          {current.modules.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => setCurrentIndex(n + i)}
              aria-label={`Go to module ${i + 1}`}
              className={[
                "rounded-full transition-all duration-300",
                i === dotIndex
                  ? "w-6 h-[6px] bg-[#1bc6e7]"
                  : "w-[6px] h-[6px] bg-gray-700 hover:bg-gray-500",
              ].join(" ")}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
