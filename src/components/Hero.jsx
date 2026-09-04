import React from 'react';
import { useModal } from '../context/ModalContext';

const bgImageUrl = "https://res.cloudinary.com/q1rn5v9m/image/upload/f_auto,q_auto/ChatGPT_Image_Sep_2_2026_09_00_19_PM";

const nodes = [
  {
    id: 'intel',
    x: '6%',
    y: '78%',
    icon: 'query_stats',
    title: 'MARKET INTELLIGENCE',
    isApex: false,
  },
  {
    id: 'strategy',
    x: '27%',
    y: '58%',
    icon: 'track_changes',
    title: 'STRATEGY & POSITIONING',
    isApex: false,
  },
  {
    id: 'demand',
    x: '48%',
    y: '42%',
    icon: 'campaign',
    title: 'DEMAND GENERATION',
    isApex: false,
  },
  {
    id: 'access',
    x: '70%',
    y: '26%',
    icon: 'domain',
    title: 'MARKET ACCESS',
    isApex: false,
  },
  {
    id: 'growth',
    x: '90%',
    y: '10%',
    icon: 'trending_up',
    title: 'COMMERCIAL GROWTH',
    isApex: true,
  },
];

export default function Hero() {
  return (
    <section className="relative w-full overflow-hidden bg-white border-b border-[#E0F2FE] flex flex-col justify-between">
      {/* Background City Skyline Image */}
      <div 
        className="absolute inset-0 bg-cover bg-no-repeat z-0"
        style={{
          backgroundImage: `url('${bgImageUrl}')`,
          backgroundPosition: 'right 20% center',
        }}
      >
        {/* Responsive Gradient Masks for text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/95 sm:via-white/90 lg:via-white/80 to-white/40 lg:to-transparent z-1" />
        <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-white/30 sm:hidden z-1" />
      </div>

      {/* Main Content Area */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 pt-8 sm:pt-14 lg:pt-20 pb-10 sm:pb-14 lg:pb-16 w-full flex-grow flex flex-col justify-center">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 lg:gap-8 items-center">
          
          {/* Left Column: Copy & Actions */}
          <div className="lg:col-span-6 space-y-4 sm:space-y-6 lg:max-w-xl text-left">
            {/* Tagline */}
            <div className="inline-block">
              <span className="text-xs sm:text-sm font-extrabold uppercase tracking-[0.2em] text-[#007BFF]">
                STRATEGY. ACCESS. GROWTH.
              </span>
            </div>

            {/* Main Title */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[54px] xl:text-[60px] font-black text-[#16324F] leading-[1.24] sm:leading-[1.2] tracking-tight">
              Turn Your Healthcare{' '}
              <br className="hidden sm:inline" />
              Product Into{' '}
              <br className="hidden sm:inline" />
              <span className="text-[#007BFF] relative inline-block">
                Market Demand.
                {/* Blue decorative underline */}
                <span className="absolute -bottom-1 left-0 w-full h-[3px] sm:h-[4px] bg-[#007BFF] rounded-full" />
              </span>
            </h1>

            {/* Description */}
            <p className="text-sm sm:text-base lg:text-lg font-medium text-[#16324F]/80 leading-relaxed max-w-lg">
              We help medical device and healthcare businesses build smarter go-to-market strategies, reach the right decision-makers and create qualified commercial opportunities.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 pt-1 sm:pt-2">
              <button
                type="button"
                onClick={() => openModal('Hero Section — Market Opportunity Assessment')}
                className="inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-3.5 sm:py-4 rounded-lg bg-[#007BFF] hover:bg-[#0066d6] text-white text-[11px] sm:text-[12px] md:text-[13px] font-extrabold uppercase tracking-wider shadow-md shadow-[#007BFF]/30 hover:shadow-lg transition-all duration-200 text-center cursor-pointer"
              >
                <span>GET YOUR MARKET OPPORTUNITY ASSESSMENT</span>
                <span className="material-symbols-outlined text-[16px] sm:text-[18px]">arrow_forward</span>
              </button>

              <a
                href="#approach"
                className="inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-3.5 sm:py-4 rounded-lg bg-white/95 hover:bg-white text-[#16324F] border border-[#CBD5E1] hover:border-[#007BFF] text-[11px] sm:text-[12px] md:text-[13px] font-extrabold uppercase tracking-wider transition-all duration-200 shadow-sm text-center"
              >
                <span>EXPLORE OUR APPROACH</span>
                <span className="material-symbols-outlined text-[16px] sm:text-[18px] text-[#007BFF]">arrow_forward</span>
              </a>
            </div>
          </div>

          {/* Right Column: Upward Trajectory Arc with 5 Circular Nodes */}
          <div className="lg:col-span-6 w-full mt-4 lg:mt-0 flex justify-center items-center">
            <div className="w-full max-w-[560px] aspect-[560/420] relative">
              
              {/* SVG Glowing Arc Line */}
              <svg
                className="absolute inset-0 w-full h-full pointer-events-none z-10 overflow-visible"
                viewBox="0 0 560 420"
                fill="none"
                preserveAspectRatio="none"
              >
                <defs>
                  <filter id="arcGlow" x="-20%" y="-20%" width="140%" height="140%">
                    <feGaussianBlur stdDeviation="5" result="blur" />
                    <feMerge>
                      <feMergeNode in="blur" />
                      <feMergeNode in="SourceGraphic" />
                    </feMerge>
                  </filter>
                  <linearGradient id="arcStroke" x1="0%" y1="100%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#38BDF8" stopOpacity="0.4" />
                    <stop offset="50%" stopColor="#007BFF" stopOpacity="0.8" />
                    <stop offset="100%" stopColor="#00D2FF" stopOpacity="1" />
                  </linearGradient>
                </defs>

                {/* Ambient Soft Glow */}
                <path
                  d="M 40 335 Q 210 320 290 230 T 495 50"
                  fill="none"
                  stroke="#38BDF8"
                  strokeWidth="10"
                  strokeLinecap="round"
                  opacity="0.25"
                />

                {/* Primary Trajectory Arc */}
                <path
                  d="M 40 335 Q 210 320 290 230 T 495 50"
                  fill="none"
                  stroke="url(#arcStroke)"
                  strokeWidth="3.5"
                  strokeLinecap="round"
                  filter="url(#arcGlow)"
                />

                {/* Upward Arrow at Apex */}
                <path
                  d="M 480 65 L 498 48 L 500 70"
                  fill="none"
                  stroke="#00D2FF"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />

                {/* Energy Pulse Dots */}
                <circle cx="185" cy="305" r="3.5" fill="#FFFFFF" filter="url(#arcGlow)" />
                <circle cx="305" cy="215" r="4" fill="#FFFFFF" filter="url(#arcGlow)" />
                <circle cx="395" cy="140" r="3.5" fill="#FFFFFF" filter="url(#arcGlow)" />
              </svg>

              {/* 5 Circular Nodes mapped to exact positions */}
              {nodes.map((node) => (
                <div
                  key={node.id}
                  className="absolute z-20 flex flex-col items-center group cursor-pointer -translate-x-1/2 -translate-y-1/2"
                  style={{ left: node.x, top: node.y }}
                >
                  {node.isApex ? (
                    <div className="relative flex flex-col items-center">
                      {/* Outer Glow Halo for Apex */}
                      <div className="absolute -inset-1.5 sm:-inset-2 rounded-full bg-[#00C0FF]/30 blur-md animate-pulse pointer-events-none" />
                      
                      <div className="relative w-14 h-14 sm:w-18 sm:h-18 lg:w-20 lg:h-20 rounded-full bg-white/95 backdrop-blur-md border-[2.5px] sm:border-3 border-[#00C0FF] shadow-[0_0_25px_rgba(0,192,255,0.6)] flex items-center justify-center text-[#007BFF] transition-transform duration-300 group-hover:scale-110">
                        <span className="material-symbols-outlined text-[26px] sm:text-[34px] lg:text-[38px] text-[#007BFF]">
                          {node.icon}
                        </span>
                      </div>
                      <span className="mt-1.5 text-[8px] sm:text-[9.5px] lg:text-[10.5px] font-black uppercase tracking-wider text-[#16324F] text-center max-w-[85px] sm:max-w-[110px] leading-tight drop-shadow-sm">
                        {node.title}
                      </span>
                    </div>
                  ) : (
                    <div className="flex flex-col items-center">
                      <div className="w-10 h-10 sm:w-13 sm:h-13 lg:w-15 lg:h-15 rounded-full bg-white/95 backdrop-blur-md border-2 border-[#38BDF8] shadow-[0_0_15px_rgba(56,189,248,0.4)] flex items-center justify-center text-[#007BFF] transition-all duration-300 group-hover:scale-110 group-hover:border-[#007BFF] group-hover:shadow-[0_0_20px_rgba(0,123,255,0.5)]">
                        <span className="material-symbols-outlined text-[18px] sm:text-[24px] lg:text-[26px]">
                          {node.icon}
                        </span>
                      </div>
                      <span className="mt-1 text-[7.5px] sm:text-[9px] lg:text-[9.5px] font-extrabold uppercase tracking-wider text-[#16324F] text-center max-w-[75px] sm:max-w-[95px] leading-tight">
                        {node.title}
                      </span>
                    </div>
                  )}
                </div>
              ))}

            </div>
          </div>

        </div>
      </div>

      {/* Bottom Capabilities Strip */}
      <div className="relative z-10 border-t border-[#E0F2FE] bg-white/90 backdrop-blur-md py-3.5 sm:py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 md:gap-0 md:divide-x md:divide-[#E0F2FE]">
            
            {/* 01 Market Strategy */}
            <div className="flex items-center gap-2.5 sm:gap-3 md:px-4 md:first:pl-0">
              <span className="material-symbols-outlined text-[20px] sm:text-[22px] text-[#007BFF] shrink-0">
                target
              </span>
              <span className="text-[12px] sm:text-[13px] md:text-[14px] font-bold text-[#16324F] truncate">
                Market Strategy
              </span>
            </div>

            {/* 02 Demand Generation */}
            <div className="flex items-center gap-2.5 sm:gap-3 md:px-4">
              <span className="material-symbols-outlined text-[20px] sm:text-[22px] text-[#007BFF] shrink-0">
                bar_chart
              </span>
              <span className="text-[12px] sm:text-[13px] md:text-[14px] font-bold text-[#16324F] truncate">
                Demand Generation
              </span>
            </div>

            {/* 03 Market Access */}
            <div className="flex items-center gap-2.5 sm:gap-3 md:px-4">
              <span className="material-symbols-outlined text-[20px] sm:text-[22px] text-[#007BFF] shrink-0">
                handshake
              </span>
              <span className="text-[12px] sm:text-[13px] md:text-[14px] font-bold text-[#16324F] truncate">
                Market Access
              </span>
            </div>

            {/* 04 Institutional Sales */}
            <div className="flex items-center gap-2.5 sm:gap-3 md:px-4">
              <span className="material-symbols-outlined text-[20px] sm:text-[22px] text-[#007BFF] shrink-0">
                group
              </span>
              <span className="text-[12px] sm:text-[13px] md:text-[14px] font-bold text-[#16324F] truncate">
                Institutional Sales
              </span>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
