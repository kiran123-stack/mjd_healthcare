import React from 'react';
import { useModal } from '../../context/ModalContext';

export default function ServicesCTA() {
  const { openModal } = useModal();

  const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section className="relative w-full bg-white text-[#16324F] py-20 sm:py-24 border-t border-b border-[#E0F2FE] overflow-hidden">
      {/* Soft Background Radial Glow */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#E0F2FE]/40 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#007BFF]/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-12 text-center space-y-8">
        
        {/* Eyebrow */}
        <div className="inline-flex items-center justify-center gap-2 text-xs sm:text-[13px] font-extrabold uppercase tracking-[0.2em] text-[#007BFF]">
          <span className="w-2.5 h-2.5 rounded-full bg-[#007BFF] animate-pulse" />
          <span>READY TO BUILD YOUR GROWTH SYSTEM?</span>
        </div>

        {/* H1/H2 Heading */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[50px] font-black text-[#16324F] leading-[1.2] tracking-tight">
          Build Your Healthcare Growth Strategy
        </h2>

        {/* Supporting Copy */}
        <p className="text-base sm:text-lg font-medium text-[#64748B] max-w-3xl mx-auto leading-relaxed">
          Whether you need market access, GTM strategy, demand generation, business development, sales enablement or a connected growth system, start with the business challenge you're trying to solve.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <button
            type="button"
            onClick={() => openModal('Final Services CTA — Talk to MJD Healthcare')}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-[#007BFF] hover:bg-[#0066d6] text-white text-xs sm:text-sm font-extrabold uppercase tracking-wider shadow-lg shadow-[#007BFF]/25 hover:shadow-xl transition-all duration-200 cursor-pointer"
          >
            <span>Talk to MJD Healthcare</span>
            <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
          </button>

          <button
            type="button"
            onClick={handleScrollTop}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-[#F8FAFC] hover:bg-[#E0F2FE]/50 text-[#16324F] border border-[#CBD5E1] text-xs sm:text-sm font-extrabold uppercase tracking-wider transition-all duration-200 cursor-pointer"
          >
            <span>Explore Services Again</span>
            <span className="material-symbols-outlined text-[18px] text-[#007BFF]">arrow_upward</span>
          </button>
        </div>

        {/* Sub-text */}
        <p className="text-xs font-bold text-[#94A3B8] pt-2">
          Specialized growth advisory for medical device, MedTech and healthcare enterprises.
        </p>

      </div>
    </section>
  );
}
