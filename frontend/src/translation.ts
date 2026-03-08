export type Language = 'EN' | 'TR';

export const translation = {
  EN: {
    nav: { modules: "Modules", who: "Who is it for?", mission: "Mission", about: "About Us", signIn: "Sign In" },
    hero: {
      title: "AI-Powered Analytics and Reporting Platform for Asset Management Institutions",
      desc: "Finicify is a multi-layered enterprise analytics and reporting platform...",
      cta: "Book demo →"
    },
    // ADD THIS: Mission section data for English
    mission: {
      label: "Our Mission",
      title: "Building the infrastructure for modern financial intelligence.",
      desc1: "Finicify integrates data, analytics, and decision-making processes into a unified ecosystem. We are dedicated to eliminating inefficient manual operations by providing an automated, institutional-grade platform that ensures precision in every data point.",
      desc2: "By enabling sustainable, scalable content production and rigorous process management, we are directly contributing to the digital transformation and development of capital markets—starting with a foundation of trust and transparency."
    }
  },
  TR: {
    nav: { modules: "Modüller", who: "Kimin İçin?", mission: "Misyonumuz", about: "Hakkımızda", signIn: "Giriş Yap" },
    hero: {
      title: "Portföy Yönetim Kurumları İçin Yapay Zeka Destekli Analiz ve Raporlama Platformu",
      desc: "Finicify; analiz, raporlama ve karar alma süreçlerini otomatize eden...",
      cta: "Demo Al →"
    },
    // ADD THIS: Mission section data for Turkish
    mission: {
      label: "Misyonumuz",
      title: "Modern finansal istihbarat için altyapı inşa ediyoruz.",
      desc1: "Finicify; veri, analiz ve karar alma süreçlerini birleşik bir ekosisteme entegre eder. Kurumsal düzeyde bir platform sunarak verimsiz manuel operasyonları ortadan kaldırmaya ve her veri noktasında hassasiyet sağlamaya kararlıyız.",
      desc2: "Sürdürülebilir, ölçeklenebilir içerik üretimi ve titiz süreç yönetimi sağlayarak, sermaye piyasalarının dijital dönüşümüne ve gelişimine doğrudan katkıda bulunuyoruz—güven ve şeffaflık temeliyle başlıyoruz."
    }
  }
};