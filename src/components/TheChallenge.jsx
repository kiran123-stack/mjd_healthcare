import React from 'react';
import { useModal } from '../context/ModalContext';

const bgImageUrl = "https://res.cloudinary.com/q1rn5v9m/image/upload/f_auto,q_auto/v1788409840/ChatGPT_Image_Sep_2_2026_09_29_35_PM.png";

const painPoints = [
  {
    id: 'access',
    icon: 'local_hospital',
    title: 'Limited\nHospital Access',
  },
  {
    id: 'opps',
    icon: 'bar_chart',
    title: 'Inconsistent\nOpportunities',
  },
  {
    id: 'positioning',
    icon: 'track_changes',
    title: 'Weak Market\nPositioning',
  },
  {
    id: 'adoption',
    icon: 'hourglass_empty',
    title: 'Slow Product\nAdoption',
  },
  {
    id: 'expansion',
    icon: 'open_with',
    title: 'Difficult Market\nExpansion',
  },
  {
    id: 'pipeline',
    icon: 'trending_down',
    title: 'Unpredictable\nSales Pipeline',
  },
];

export default function TheChallenge() {
  return (
    <section 
      id="the-challenge"
      className="relative w-full overflow-hidden bg-[#F4F8FC] border-b border-[#E0F2FE] py-16 sm:py-20 lg:py-24"
    >
      {/* Background Image of Bridge over water */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0 opacity-95"
        style={{
          backgroundImage: `url('${bgImageUrl}')`,
          backgroundPosition: 'center center',
        }}
      >
        {/* Soft top gradient to blend smoothly with section title */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/95 via-white/80 to-white/40 sm:to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 flex flex-col items-center">
        
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto space-y-3 sm:space-y-4">
          <div className="text-xs sm:text-[13px] font-extrabold uppercase tracking-[0.2em] text-[#007BFF]">
            THE CHALLENGE
          </div>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[50px] font-black text-[#16324F] leading-[1.28] sm:leading-[1.3] lg:leading-[1.32] tracking-tight">
            <span>Your Product Isn’t the Problem.</span>{' '}
            <br />
            <span className="text-[#007BFF] relative inline-block mt-1">
              Your Market Strategy Might Be.
              {/* Clean underline under Strategy */}
              <span className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-16 h-[3.5px] bg-[#007BFF] rounded-full" />
            </span>
          </h2>

          <div className="pt-2">
            <p className="text-sm sm:text-base md:text-lg font-medium text-[#16324F]/80 max-w-xl mx-auto leading-relaxed">
              A strong healthcare product doesn’t automatically create commercial success.
            </p>
          </div>
        </div>

        {/* 6 Pain Point Circular Cards Strip */}
        <div className="w-full max-w-6xl mt-10 sm:mt-12 mb-8 sm:mb-12">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6">
            {painPoints.map((item) => (
              <div 
                key={item.id}
                className="flex flex-col items-center text-center group cursor-pointer"
              >
                {/* Circular Glass Badge */}
                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-white/95 backdrop-blur-md border-2 border-[#38BDF8]/60 shadow-[0_4px_16px_rgba(56,189,248,0.25)] flex items-center justify-center text-[#007BFF] transition-all duration-300 group-hover:scale-110 group-hover:border-[#007BFF] group-hover:shadow-[0_6px_22px_rgba(0,123,255,0.4)]">
                  <span className="material-symbols-outlined text-[24px] sm:text-[28px]">
                    {item.icon}
                  </span>
                </div>

                {/* Title text */}
                <span className="mt-3 text-xs sm:text-[12.5px] font-bold text-[#16324F] leading-snug whitespace-pre-line group-hover:text-[#007BFF] transition-colors">
                  {item.title}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Center Bridge Labels & MJD Glow Connector Area */}
        <div className="w-full max-w-5xl my-4 sm:my-8 relative min-h-[140px] sm:min-h-[180px] flex items-center justify-between px-2 sm:px-6">
          
          {/* Left Bridge Block: YOUR PRODUCT */}
          <div className="px-4 sm:px-6 py-2 sm:py-3 rounded-lg bg-[#16324F]/90 backdrop-blur-md border border-white/20 shadow-xl text-white text-xs sm:text-sm font-extrabold uppercase tracking-widest">
            YOUR PRODUCT
          </div>

          {/* Center Glowing Energy Gap: MJD HEALTHCARE */}
          <div className="flex-1 mx-3 sm:mx-6 flex flex-col items-center text-center relative py-4">
            {/* Glowing connecting beam */}
            <div className="absolute top-1/2 left-0 right-0 h-[3px] bg-gradient-to-r from-transparent via-[#00D2FF] to-transparent shadow-[0_0_15px_#00D2FF] -translate-y-1/2 z-0" />
            
            <div className="relative z-10 bg-white/95 backdrop-blur-md px-4 sm:px-6 py-2.5 rounded-full border border-[#00D2FF]/50 shadow-[0_0_25px_rgba(0,210,255,0.35)]">
              <span className="text-xs sm:text-sm font-black tracking-wider text-[#007BFF] uppercase block">
                MJD HEALTHCARE
              </span>
              <span className="text-[10px] sm:text-[11px] font-semibold text-[#16324F]/75 block leading-tight mt-0.5">
                Bridging the gap between your product and the market that needs it.
              </span>
            </div>
          </div>

          {/* Right Bridge Block: THE MARKET */}
          <div className="px-4 sm:px-6 py-2 sm:py-3 rounded-lg bg-[#16324F]/90 backdrop-blur-md border border-white/20 shadow-xl text-white text-xs sm:text-sm font-extrabold uppercase tracking-widest">
            THE MARKET
          </div>
        </div>

        {/* Bottom Floating Quote Card */}
        <div className="w-full max-w-3xl mt-6 sm:mt-8 bg-white/95 backdrop-blur-md rounded-2xl border border-white/80 shadow-[0_15px_40px_rgba(22,50,79,0.12)] p-6 sm:p-8 text-center relative">
          
          {/* Left Quote Icon */}
          <span className="absolute top-4 left-4 sm:top-6 sm:left-6 text-3xl sm:text-4xl text-[#38BDF8]/60 font-serif select-none pointer-events-none">
            “
          </span>

          {/* Right Quote Icon */}
          <span className="absolute bottom-4 right-4 sm:bottom-6 sm:right-6 text-3xl sm:text-4xl text-[#38BDF8]/60 font-serif select-none pointer-events-none">
            ”
          </span>

          <div className="space-y-3 px-4 sm:px-8">
            <p className="text-base sm:text-lg font-bold text-[#16324F] leading-snug">
              The real gap is often not between your product and the market.
            </p>
            
            <p className="text-base sm:text-lg font-extrabold text-[#007BFF] leading-snug">
              It’s between your product and the people who decide whether the market will buy it.
            </p>

            <div className="w-10 h-0.5 bg-[#CBD5E1] rounded-full mx-auto my-3" />

            <div className="pt-2">
              <button
                type="button"
                onClick={() => openModal('The Challenge — Growth Gap Identification')}
                className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3.5 rounded-lg bg-[#007BFF] hover:bg-[#0066d6] text-white text-xs sm:text-sm font-extrabold uppercase tracking-wider shadow-md shadow-[#007BFF]/25 hover:shadow-lg transition-all duration-200 cursor-pointer"
              >
                <span>IDENTIFY MY GROWTH GAP</span>
                <span className="material-symbols-outlined text-[16px] sm:text-[18px]">arrow_forward</span>
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
