import React from 'react';
import { useModal } from '../context/ModalContext';

const stakeholders = [
  { id: 'clinicians', icon: 'medical_information', label: 'CLINICIANS', pos: 'top' },
  { id: 'dept-heads', icon: 'groups', label: 'DEPARTMENT\nHEADS', pos: 'top-right' },
  { id: 'biomedical', icon: 'precision_manufacturing', label: 'BIOMEDICAL\nTEAMS', pos: 'right' },
  { id: 'procurement', icon: 'shopping_cart', label: 'PROCUREMENT', pos: 'bottom-right' },
  { id: 'finance', icon: 'receipt_long', label: 'FINANCE', pos: 'bottom-left' },
  { id: 'management', icon: 'manage_accounts', label: 'MANAGEMENT', pos: 'left' },
  { id: 'buyers', icon: 'domain', label: 'INSTITUTIONAL\nBUYERS', pos: 'top-left' },
];

const pillars = [
  {
    num: '01',
    title: 'STRATEGY',
    color: '#007BFF',
    badgeBg: 'bg-[#007BFF]',
    textColor: 'text-[#007BFF]',
    borderColor: 'border-[#007BFF]',
    icon: 'psychology',
    desc: 'Know where to compete and how to position your product.',
  },
  {
    num: '02',
    title: 'DEMAND',
    color: '#10B981',
    badgeBg: 'bg-[#10B981]',
    textColor: 'text-[#10B981]',
    borderColor: 'border-[#10B981]',
    icon: 'track_changes',
    desc: 'Create targeted interest among relevant decision-makers.',
  },
  {
    num: '03',
    title: 'ACCESS',
    color: '#06B6D4',
    badgeBg: 'bg-[#06B6D4]',
    textColor: 'text-[#06B6D4]',
    borderColor: 'border-[#06B6D4]',
    icon: 'hub',
    desc: 'Build meaningful connections with hospitals and institutions.',
  },
  {
    num: '04',
    title: 'SALES',
    color: '#8B5CF6',
    badgeBg: 'bg-[#8B5CF6]',
    textColor: 'text-[#8B5CF6]',
    borderColor: 'border-[#8B5CF6]',
    icon: 'handshake',
    desc: 'Move qualified opportunities toward commercial conversations.',
  },
  {
    num: '05',
    title: 'SCALE',
    color: '#F59E0B',
    badgeBg: 'bg-[#F59E0B]',
    textColor: 'text-[#F59E0B]',
    borderColor: 'border-[#F59E0B]',
    icon: 'trending_up',
    desc: 'Expand territories, channels and market opportunities.',
  },
];

export default function TheDifferentiator() {
  const { openModal } = useModal();
  return (
    <section 
      id="approach"
      className="relative w-full overflow-hidden bg-white border-b border-[#E0F2FE] py-16 sm:py-20 lg:py-24"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 space-y-12 sm:space-y-16">
        
        {/* Top Split Area: Left Copy & Right Stakeholder Orbit */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          
          {/* Left Column: Heading & Description */}
          <div className="lg:col-span-5 space-y-5">
            {/* Tag Badge */}
            <div className="flex items-center gap-3">
              <span className="px-3.5 py-1 rounded-full bg-[#007BFF] text-white text-[11px] font-black uppercase tracking-widest shadow-sm">
                THE DIFFERENTIATOR
              </span>
              <span className="w-8 h-[2px] bg-[#007BFF]" />
            </div>

            {/* Headline */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#16324F] leading-[1.28] sm:leading-[1.3] tracking-tight">
              More Than Marketing.{' '}
              <br />
              <span className="text-[#007BFF] relative inline-block mt-1">
                We Build Healthcare
                <br />
                Growth Systems.
                <span className="absolute -bottom-1 left-0 w-24 h-[3.5px] bg-[#007BFF] rounded-full" />
              </span>
            </h2>

            {/* Subtitle */}
            <p className="text-sm sm:text-base md:text-lg font-medium text-[#16324F]/80 leading-relaxed max-w-md pt-1">
              Healthcare buying is complex. We connect every stakeholder and build the path from visibility to commercial opportunity.
            </p>
          </div>

          {/* Right Column: Circular Multi-Stakeholder Orbit Ecosystem */}
          <div className="lg:col-span-7 w-full flex justify-center items-center">
            <div className="w-full max-w-[540px] aspect-[540/460] relative flex items-center justify-center p-4">
              
              {/* SVG Orbit Track with Directional Arrows */}
              <svg 
                className="absolute inset-0 w-full h-full pointer-events-none"
                viewBox="0 0 540 460"
                fill="none"
              >
                {/* Orbit Circle */}
                <ellipse 
                  cx="270" 
                  cy="230" 
                  rx="180" 
                  ry="150" 
                  stroke="#38BDF8" 
                  strokeWidth="1.5" 
                  strokeDasharray="4 4"
                  opacity="0.6"
                />
                
                {/* Orbit Directional Node Markers */}
                <circle cx="270" cy="80" r="3.5" fill="#007BFF" />
                <circle cx="430" cy="140" r="3.5" fill="#007BFF" />
                <circle cx="445" cy="300" r="3.5" fill="#007BFF" />
                <circle cx="360" cy="370" r="3.5" fill="#007BFF" />
                <circle cx="180" cy="370" r="3.5" fill="#007BFF" />
                <circle cx="95" cy="300" r="3.5" fill="#007BFF" />
                <circle cx="110" cy="140" r="3.5" fill="#007BFF" />
              </svg>

              {/* Center Hospital Hub */}
              <div className="relative z-10 w-36 h-36 sm:w-44 sm:h-44 rounded-full bg-white/95 backdrop-blur-md border-2 border-[#007BFF]/40 shadow-[0_0_30px_rgba(0,123,255,0.15)] flex flex-col items-center justify-center p-3 text-center">
                <span className="material-symbols-outlined text-[36px] sm:text-[44px] text-[#007BFF] mb-1">
                  local_hospital
                </span>
                <span className="text-[8.5px] sm:text-[9.5px] font-black uppercase tracking-wider text-[#007BFF] leading-tight max-w-[110px]">
                  BETTER ALIGNMENT, STRONGER OUTCOMES.
                </span>
              </div>

              {/* 7 Orbiting Stakeholder Cards positioned around perimeter */}

              {/* 1. CLINICIANS (Top) */}
              <div className="absolute top-[2%] left-1/2 -translate-x-1/2 z-20 flex items-center gap-1.5 sm:gap-2 px-3 py-1.5 rounded-lg bg-white shadow-md border border-[#E0F2FE] hover:border-[#007BFF] transition-all hover:scale-105 cursor-pointer">
                <span className="material-symbols-outlined text-[16px] sm:text-[18px] text-[#007BFF]">medical_information</span>
                <span className="text-[9px] sm:text-[10px] font-black uppercase tracking-wider text-[#16324F]">CLINICIANS</span>
              </div>

              {/* 2. DEPARTMENT HEADS (Top-Right) */}
              <div className="absolute top-[16%] right-[2%] sm:right-[4%] z-20 flex items-center gap-1.5 sm:gap-2 px-3 py-1.5 rounded-lg bg-white shadow-md border border-[#E0F2FE] hover:border-[#007BFF] transition-all hover:scale-105 cursor-pointer">
                <span className="material-symbols-outlined text-[16px] sm:text-[18px] text-[#007BFF]">groups</span>
                <span className="text-[9px] sm:text-[10px] font-black uppercase tracking-wider text-[#16324F] text-left leading-tight">
                  DEPARTMENT<br />HEADS
                </span>
              </div>

              {/* 3. BIOMEDICAL TEAMS (Right) */}
              <div className="absolute top-[52%] right-[0%] sm:right-[1%] -translate-y-1/2 z-20 flex items-center gap-1.5 sm:gap-2 px-3 py-1.5 rounded-lg bg-white shadow-md border border-[#E0F2FE] hover:border-[#007BFF] transition-all hover:scale-105 cursor-pointer">
                <span className="material-symbols-outlined text-[16px] sm:text-[18px] text-[#007BFF]">precision_manufacturing</span>
                <span className="text-[9px] sm:text-[10px] font-black uppercase tracking-wider text-[#16324F] text-left leading-tight">
                  BIOMEDICAL<br />TEAMS
                </span>
              </div>

              {/* 4. PROCUREMENT (Bottom-Right) */}
              <div className="absolute bottom-[8%] right-[10%] sm:right-[14%] z-20 flex items-center gap-1.5 sm:gap-2 px-3 py-1.5 rounded-lg bg-white shadow-md border border-[#E0F2FE] hover:border-[#007BFF] transition-all hover:scale-105 cursor-pointer">
                <span className="material-symbols-outlined text-[16px] sm:text-[18px] text-[#007BFF]">shopping_cart</span>
                <span className="text-[9px] sm:text-[10px] font-black uppercase tracking-wider text-[#16324F]">PROCUREMENT</span>
              </div>

              {/* 5. FINANCE (Bottom-Left) */}
              <div className="absolute bottom-[8%] left-[10%] sm:left-[14%] z-20 flex items-center gap-1.5 sm:gap-2 px-3 py-1.5 rounded-lg bg-white shadow-md border border-[#E0F2FE] hover:border-[#007BFF] transition-all hover:scale-105 cursor-pointer">
                <span className="material-symbols-outlined text-[16px] sm:text-[18px] text-[#007BFF]">receipt_long</span>
                <span className="text-[9px] sm:text-[10px] font-black uppercase tracking-wider text-[#16324F]">FINANCE</span>
              </div>

              {/* 6. MANAGEMENT (Left) */}
              <div className="absolute top-[52%] left-[0%] sm:left-[1%] -translate-y-1/2 z-20 flex items-center gap-1.5 sm:gap-2 px-3 py-1.5 rounded-lg bg-white shadow-md border border-[#E0F2FE] hover:border-[#007BFF] transition-all hover:scale-105 cursor-pointer">
                <span className="material-symbols-outlined text-[16px] sm:text-[18px] text-[#007BFF]">manage_accounts</span>
                <span className="text-[9px] sm:text-[10px] font-black uppercase tracking-wider text-[#16324F]">MANAGEMENT</span>
              </div>

              {/* 7. INSTITUTIONAL BUYERS (Top-Left) */}
              <div className="absolute top-[16%] left-[2%] sm:left-[4%] z-20 flex items-center gap-1.5 sm:gap-2 px-3 py-1.5 rounded-lg bg-white shadow-md border border-[#E0F2FE] hover:border-[#007BFF] transition-all hover:scale-105 cursor-pointer">
                <span className="material-symbols-outlined text-[16px] sm:text-[18px] text-[#007BFF]">domain</span>
                <span className="text-[9px] sm:text-[10px] font-black uppercase tracking-wider text-[#16324F] text-left leading-tight">
                  INSTITUTIONAL<br />BUYERS
                </span>
              </div>

            </div>
          </div>

        </div>

        {/* Middle Section: 5 Distinct Color-Coded Growth Pillars */}
        <div className="relative pt-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 sm:gap-5">
            {pillars.map((pillar) => (
              <div
                key={pillar.num}
                onClick={() => openModal(`The Differentiator — Pillar 0${pillar.num}: ${pillar.title}`)}
                className="flex flex-col justify-between p-5 sm:p-6 rounded-2xl bg-white border border-[#E0F2FE] shadow-[0_4px_16px_rgba(22,50,79,0.04)] hover:shadow-[0_12px_28px_rgba(0,123,255,0.15)] hover:border-[#007BFF] hover:-translate-y-1.5 transition-all duration-300 group cursor-pointer"
              >
                <div>
                  {/* Top Circular Solid Icon Badge */}
                  <div className={`w-13 h-13 sm:w-14 sm:h-14 rounded-full ${pillar.badgeBg} text-white flex items-center justify-center shadow-md mb-4 group-hover:scale-110 transition-transform`}>
                    <span className="material-symbols-outlined text-[26px]">
                      {pillar.icon}
                    </span>
                  </div>

                  {/* Number Badge & Title Row */}
                  <div className="flex items-center gap-2 mb-2">
                    <span className={`w-5 h-5 rounded-full border ${pillar.borderColor} ${pillar.textColor} text-[10px] font-black flex items-center justify-center`}>
                      {pillar.num}
                    </span>
                    <h3 className={`text-sm sm:text-base font-black uppercase tracking-wider ${pillar.textColor}`}>
                      {pillar.title}
                    </h3>
                  </div>

                  {/* Description */}
                  <p className="text-xs sm:text-[12.5px] font-medium text-[#16324F]/75 leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>

                {/* Bottom colored bar indicator */}
                <div className="mt-5 pt-3 border-t border-[#F1F5F9] flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full" style={{ backgroundColor: pillar.color }} />
                  <div className="h-0.5 flex-1 rounded-full opacity-40" style={{ backgroundColor: pillar.color }} />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Floating Quote Banner */}
        <div className="w-full max-w-4xl mx-auto rounded-xl sm:rounded-2xl bg-[#F8FAFC] border border-[#E0F2FE] p-4 sm:p-5 shadow-sm flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 text-center sm:text-left">
          <div className="w-10 h-10 rounded-xl bg-[#007BFF] text-white flex items-center justify-center shrink-0 shadow-sm shadow-[#007BFF]/30">
            <span className="material-symbols-outlined text-[20px]">
              trending_up
            </span>
          </div>
          
          <div className="hidden sm:block w-px h-6 bg-[#CBD5E1]" />

          <p className="text-xs sm:text-sm md:text-base font-medium text-[#16324F] leading-snug">
            <span>We don’t just create visibility.</span>{' '}
            <span className="text-[#007BFF] font-bold">We build the path from visibility to commercial opportunity.</span>
          </p>
        </div>

      </div>
    </section>
  );
}
