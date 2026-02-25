import React from 'react';

/**
 * Footer Component for Finicify
 * - Minimalist institutional design
 * - Matches the #050a12 deep dark theme
 * - Simple navigation for a clean UI
 */

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-[#050a12] pt-20 pb-10 px-10 md:px-20 border-t border-gray-800/30 font-montserrat">
      <div className="max-w-[1440px] mx-auto">
        
        <div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-16">
          {/* Brand Identity */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-white tracking-tight">FINICIFY</h2>
            <p className="text-gray-400 text-sm max-w-xs leading-relaxed">
              AI-powered financial intelligence platform for institutional-grade analytics and automated reporting.
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col gap-4">
            <h4 className="text-[#ccff00] text-[10px] uppercase tracking-[0.3em] font-bold">Navigation</h4>
            <nav className="flex flex-wrap gap-x-8 gap-y-3">
              {['Home', 'Features', 'About', 'Contact'].map((item) => (
                <a 
                  key={item} 
                  href={`#${item.toLowerCase()}`} 
                  className="text-white text-sm font-medium hover:text-[#ccff00] transition-colors"
                >
                  {item}
                </a>
              ))}
            </nav>
          </div>
        </div>

        {/* Divider */}
        <div className="h-[1px] w-full bg-gray-800/50 mb-8"></div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Legal Links */}
          <div className="flex gap-8">
            <a href="/privacy" className="text-gray-500 text-[11px] hover:text-white transition-colors">Privacy Policy</a>
            <a href="/terms" className="text-gray-500 text-[11px] hover:text-white transition-colors">Terms of Service</a>
          </div>

          {/* Copyright */}
          <p className="text-gray-500 text-[11px] tracking-wide">
            © {currentYear} Finicify. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}