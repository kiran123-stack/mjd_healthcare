import React from 'react';
import { useModal } from '../../context/ModalContext';

const heroBgImage = "/images/service_hero.jpg";

export default function ServicesHero() {
  const { openModal } = useModal();

  const handleScrollToDirectory = (e) => {
    e.preventDefault();
    const el = document.getElementById('services-directory');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative w-full overflow-hidden bg-[#16324F] text-white py-24 sm:py-32 border-b border-white/10 flex items-center min-h-[580px]">
      
      {/* FULL-BLEED COMPLETE BACKGROUND IMAGE */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0 filter contrast-110 saturate-[0.95]"
        style={{ backgroundImage: `url('${heroBgImage}')` }}
      />

      {/* Dark Vignette & Gradient Overlays for Superior Text Contrast & Editorial Elegance */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#16324F] via-[#16324F]/90 to-[#16324F]/60 z-1" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(22,50,79,0.85)_100%)] z-1" />

      {/* Main Content Area */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 w-full">
        <div className="max-w-3xl text-left space-y-6">
          
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 text-xs sm:text-[13px] font-extrabold uppercase tracking-[0.22em] text-[#38BDF8]">
            <span className="w-2.5 h-2.5 rounded-full bg-[#38BDF8] animate-pulse" />
            <span>MJD HEALTHCARE SERVICES</span>
          </div>

          {/* Exact PRD H1 */}
          <h1 className="text-4xl sm:text-5xl lg:text-[56px] font-black text-white leading-[1.18] tracking-tight drop-shadow-md">
            Healthcare Growth Services Built for{' '}
            <span className="text-[#38BDF8] relative inline-block">
              Market Adoption.
              <span className="absolute -bottom-1.5 left-0 w-full h-[4px] bg-[#38BDF8] rounded-full" />
            </span>
          </h1>

          {/* Exact PRD Supporting Copy */}
          <div className="space-y-3 text-base sm:text-lg font-medium text-white/90 leading-relaxed max-w-2xl drop-shadow-sm">
            <p className="font-bold text-white text-lg sm:text-xl">
              Healthcare businesses don't need more disconnected marketing activities.
            </p>
            <p>
              They need a commercial system that connects strategy, market access, demand generation and sales.
            </p>
            <p className="text-white/70 text-sm">
              MJD Healthcare provides specialized growth services for medical device, MedTech and healthcare businesses.
            </p>
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-4">
            <a
              href="#services-directory"
              onClick={handleScrollToDirectory}
              className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl bg-[#007BFF] hover:bg-[#0066d6] text-white text-xs sm:text-[13px] font-extrabold uppercase tracking-wider shadow-lg shadow-[#007BFF]/30 hover:shadow-xl transition-all duration-200 text-center cursor-pointer"
            >
              <span>Explore Services</span>
              <span className="material-symbols-outlined text-[18px]">arrow_downward</span>
            </a>

            <button
              type="button"
              onClick={() => openModal('Services Hero — Talk to MJD Healthcare')}
              className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl bg-white/10 hover:bg-white/20 text-white border border-white/30 text-xs sm:text-[13px] font-extrabold uppercase tracking-wider backdrop-blur-md transition-all duration-200 shadow-sm text-center cursor-pointer"
            >
              <span>Talk to MJD Healthcare</span>
              <span className="material-symbols-outlined text-[18px] text-[#38BDF8]">arrow_forward</span>
            </button>
          </div>

          {/* Bottom Commercial Pathway Strip */}
          <div className="pt-8 border-t border-white/15 flex flex-wrap items-center gap-3 text-xs font-bold text-white/80">
            <span className="text-[#38BDF8] uppercase tracking-wider font-mono">GROWTH SYSTEM:</span>
            <span className="bg-white/10 px-3 py-1 rounded-md">Strategy</span>
            <span className="text-[#38BDF8]">→</span>
            <span className="bg-white/10 px-3 py-1 rounded-md">Market Access</span>
            <span className="text-[#38BDF8]">→</span>
            <span className="bg-white/10 px-3 py-1 rounded-md">Demand Generation</span>
            <span className="text-[#38BDF8]">→</span>
            <span className="bg-white/10 px-3 py-1 rounded-md">Sales</span>
            <span className="text-[#38BDF8]">→</span>
            <span className="bg-[#10B981]/30 text-[#10B981] px-3 py-1 rounded-md border border-[#10B981]/50">Adoption</span>
          </div>

        </div>
      </div>
    </section>
  );
}
