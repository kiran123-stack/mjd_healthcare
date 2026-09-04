import React from 'react';
import { useModal } from '../context/ModalContext';

const solutions = [
  {
    num: '01',
    title: 'MARKET STRATEGY',
    icon: 'explore',
    sub: 'Know Where to Compete. Know How to Win.',
    desc: 'We uncover the right markets, segments and positioning strategies for sustainable growth.',
  },
  {
    num: '02',
    title: 'DEMAND GENERATION',
    icon: 'campaign',
    sub: 'Generate Opportunities— Not Just Leads.',
    desc: 'We create targeted demand through content, campaigns and digital engagement that attract the right decision-makers.',
  },
  {
    num: '03',
    title: 'HEALTHCARE MARKET ACCESS',
    icon: 'domain',
    sub: 'Get Closer to the Hospitals That Matter.',
    desc: 'We build relationships and open doors with hospitals, clinicians, KOLs and procurement teams.',
  },
  {
    num: '04',
    title: 'SALES & MARKET DEVELOPMENT',
    icon: 'trending_up',
    sub: 'Turn Market Opportunities Into Commercial Opportunities.',
    desc: 'We strengthen your sales pipeline and drive long-term, scalable revenue growth.',
  },
];

export default function Solutions() {
  const { openModal } = useModal();
  return (
    <section 
      id="solutions"
      className="relative w-full overflow-hidden bg-gradient-to-b from-[#F8FCFF] via-[#EEF7FE] to-[#F4FAFF] border-b border-[#E0F2FE] py-16 sm:py-20 lg:py-24"
    >
      {/* Luminous Glowing Background Effects */}
      <div className="absolute top-10 left-10 w-[500px] h-[500px] bg-[#007BFF]/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[600px] h-[600px] bg-[#38BDF8]/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-[#00E599]/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 space-y-10 sm:space-y-12">
        
        {/* Section Header */}
        <div className="space-y-2 text-left">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#10B981] animate-pulse" />
            <span className="text-xs sm:text-[13px] font-extrabold uppercase tracking-[0.18em] text-[#64748B]">
              SOLUTIONS
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-[46px] font-black text-[#16324F] leading-[1.28] sm:leading-[1.3] tracking-tight">
            Healthcare Growth Solutions{' '}
            <br className="hidden sm:inline" />
            <span className="text-[#007BFF]">Built Around Your Commercial Goals.</span>
          </h2>
        </div>

        {/* Asymmetrical Solutions Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          
          {/* LEFT 2 TALL CARDS (01 & 02) */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-6">
            
            {/* Card 01 - MARKET STRATEGY */}
            <div 
              onClick={() => openModal(`Solutions — 01: ${solutions[0].title}`)}
              className="group relative rounded-3xl bg-white/80 backdrop-blur-xl border border-white/90 p-6 sm:p-7 shadow-[0_12px_35px_rgba(56,189,248,0.12)] hover:shadow-[0_20px_45px_rgba(0,123,255,0.22)] hover:border-[#007BFF] hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between cursor-pointer"
            >
              {/* Card Ambient Glow on Hover */}
              <div className="absolute -inset-0.5 rounded-3xl bg-gradient-to-r from-[#007BFF]/20 to-[#38BDF8]/20 opacity-0 group-hover:opacity-100 blur-sm transition-opacity duration-300 pointer-events-none" />

              <div className="relative z-10 space-y-4">
                <div className="flex items-start justify-between">
                  <span className="text-xs font-black text-[#10B981] uppercase tracking-wider">
                    {solutions[0].num}
                  </span>
                  
                  {/* 3D Circular Compass Badge */}
                  <div className="w-16 h-16 rounded-full bg-gradient-to-b from-[#F0FDF4] to-white border-2 border-[#10B981]/30 shadow-[0_8px_20px_rgba(16,185,129,0.2)] flex items-center justify-center text-[#10B981] group-hover:scale-110 transition-transform">
                    <span className="material-symbols-outlined text-[32px]">
                      {solutions[0].icon}
                    </span>
                  </div>
                </div>

                <div>
                  <h3 className="text-base sm:text-lg font-black uppercase text-[#16324F] tracking-tight">
                    {solutions[0].title}
                  </h3>
                  <div className="w-8 h-[2.5px] bg-[#10B981] rounded-full mt-1.5 mb-3" />
                </div>

                <div className="space-y-2">
                  <h4 className="text-xs sm:text-[13px] font-black text-[#16324F] leading-snug">
                    {solutions[0].sub}
                  </h4>
                  <p className="text-xs sm:text-[12.5px] font-medium text-[#64748B] leading-relaxed">
                    {solutions[0].desc}
                  </p>
                </div>
              </div>

              <div className="relative z-10 pt-6">
                <div className="w-10 h-10 rounded-full border border-[#CBD5E1] group-hover:border-[#007BFF] group-hover:bg-[#007BFF] group-hover:text-white flex items-center justify-center text-[#16324F] transition-all">
                  <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                </div>
              </div>
            </div>

            {/* Card 02 - DEMAND GENERATION */}
            <div 
              onClick={() => openModal(`Solutions — 02: ${solutions[1].title}`)}
              className="group relative rounded-3xl bg-white/80 backdrop-blur-xl border border-white/90 p-6 sm:p-7 shadow-[0_12px_35px_rgba(56,189,248,0.12)] hover:shadow-[0_20px_45px_rgba(0,123,255,0.22)] hover:border-[#007BFF] hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between cursor-pointer"
            >
              <div className="absolute -inset-0.5 rounded-3xl bg-gradient-to-r from-[#007BFF]/20 to-[#38BDF8]/20 opacity-0 group-hover:opacity-100 blur-sm transition-opacity duration-300 pointer-events-none" />

              <div className="relative z-10 space-y-4">
                <div className="flex items-start justify-between">
                  <span className="text-xs font-black text-[#10B981] uppercase tracking-wider">
                    {solutions[1].num}
                  </span>
                  
                  {/* 3D Circular Megaphone Badge */}
                  <div className="w-16 h-16 rounded-full bg-gradient-to-b from-[#F0F9FF] to-white border-2 border-[#007BFF]/30 shadow-[0_8px_20px_rgba(0,123,255,0.2)] flex items-center justify-center text-[#007BFF] group-hover:scale-110 transition-transform">
                    <span className="material-symbols-outlined text-[32px]">
                      {solutions[1].icon}
                    </span>
                  </div>
                </div>

                <div>
                  <h3 className="text-base sm:text-lg font-black uppercase text-[#16324F] tracking-tight">
                    {solutions[1].title}
                  </h3>
                  <div className="w-8 h-[2.5px] bg-[#007BFF] rounded-full mt-1.5 mb-3" />
                </div>

                <div className="space-y-2">
                  <h4 className="text-xs sm:text-[13px] font-black text-[#16324F] leading-snug">
                    {solutions[1].sub}
                  </h4>
                  <p className="text-xs sm:text-[12.5px] font-medium text-[#64748B] leading-relaxed">
                    {solutions[1].desc}
                  </p>
                </div>
              </div>

              <div className="relative z-10 pt-6">
                <div className="w-10 h-10 rounded-full border border-[#CBD5E1] group-hover:border-[#007BFF] group-hover:bg-[#007BFF] group-hover:text-white flex items-center justify-center text-[#16324F] transition-all">
                  <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                </div>
              </div>
            </div>

          </div>

          {/* RIGHT SIDE: Top Particle Wave Graphic + Bottom 2 Cards (03 & 04) */}
          <div className="lg:col-span-6 space-y-6 flex flex-col justify-between">
            
            {/* Top Right Particle Wave Container */}
            <div className="w-full h-[180px] sm:h-[200px] rounded-3xl bg-white/70 backdrop-blur-xl border border-white/90 shadow-sm p-4 relative overflow-hidden flex items-center justify-center">
              
              {/* Particle Sine Wave Graphic Canvas */}
              <svg 
                className="w-full h-full"
                viewBox="0 0 600 180" 
                fill="none"
                preserveAspectRatio="none"
              >
                <defs>
                  <linearGradient id="waveGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#10B981" stopOpacity="0.8" />
                    <stop offset="50%" stopColor="#007BFF" stopOpacity="0.9" />
                    <stop offset="100%" stopColor="#38BDF8" stopOpacity="0.8" />
                  </linearGradient>
                </defs>

                {/* Multi-layered undulating dotted curves */}
                {[0, 10, 20, 30, 40, 50].map((offset) => (
                  <path
                    key={offset}
                    d={`M 0 ${90 + offset * 0.4} Q 150 ${20 + offset * 1.2} 300 ${90 - offset * 0.3} T 600 ${90 + offset * 0.5}`}
                    fill="none"
                    stroke="url(#waveGrad)"
                    strokeWidth="1.5"
                    strokeDasharray="3 7"
                    opacity={0.3 + offset * 0.012}
                  />
                ))}

                {[0, 15, 30, 45].map((offset) => (
                  <path
                    key={`b-${offset}`}
                    d={`M 0 ${90 - offset * 0.4} Q 150 ${160 - offset * 1.1} 300 ${90 + offset * 0.3} T 600 ${90 - offset * 0.5}`}
                    fill="none"
                    stroke="url(#waveGrad)"
                    strokeWidth="1.8"
                    strokeDasharray="2 6"
                    opacity={0.35 + offset * 0.01}
                  />
                ))}
              </svg>

              {/* Floating Pulse Indicator */}
              <div className="absolute top-4 right-5 flex items-center gap-2 px-3 py-1 rounded-full bg-[#E0F2FE]/80 border border-[#BAE6FD] text-[10px] font-black uppercase tracking-wider text-[#007BFF]">
                <span className="w-2 h-2 rounded-full bg-[#007BFF] animate-ping" />
                INTEGRATED ENGINE
              </div>
            </div>

            {/* Bottom 2 Cards: 03 & 04 */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 flex-grow">
              
              {/* Card 03 - HEALTHCARE MARKET ACCESS */}
              <div 
                onClick={() => openModal(`Solutions — 03: ${solutions[2].title}`)}
                className="group relative rounded-3xl bg-white/80 backdrop-blur-xl border border-white/90 p-6 sm:p-7 shadow-[0_12px_35px_rgba(56,189,248,0.12)] hover:shadow-[0_20px_45px_rgba(0,123,255,0.22)] hover:border-[#007BFF] hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between cursor-pointer"
              >
                <div className="absolute -inset-0.5 rounded-3xl bg-gradient-to-r from-[#007BFF]/20 to-[#38BDF8]/20 opacity-0 group-hover:opacity-100 blur-sm transition-opacity duration-300 pointer-events-none" />

                <div className="relative z-10 space-y-4">
                  <div className="flex items-start justify-between">
                    <span className="text-xs font-black text-[#10B981] uppercase tracking-wider">
                      {solutions[2].num}
                    </span>
                    
                    {/* 3D Hospital Icon */}
                    <div className="w-16 h-16 rounded-full bg-gradient-to-b from-[#F0FDF4] to-white border-2 border-[#10B981]/30 shadow-[0_8px_20px_rgba(16,185,129,0.2)] flex items-center justify-center text-[#10B981] group-hover:scale-110 transition-transform">
                      <span className="material-symbols-outlined text-[32px]">
                        {solutions[2].icon}
                      </span>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-base sm:text-lg font-black uppercase text-[#16324F] tracking-tight">
                      {solutions[2].title}
                    </h3>
                    <div className="w-8 h-[2.5px] bg-[#10B981] rounded-full mt-1.5 mb-3" />
                  </div>

                  <div className="space-y-2">
                    <h4 className="text-xs sm:text-[13px] font-black text-[#16324F] leading-snug">
                      {solutions[2].sub}
                    </h4>
                    <p className="text-xs sm:text-[12.5px] font-medium text-[#64748B] leading-relaxed">
                      {solutions[2].desc}
                    </p>
                  </div>
                </div>

                <div className="relative z-10 pt-6">
                  <div className="w-10 h-10 rounded-full border border-[#CBD5E1] group-hover:border-[#007BFF] group-hover:bg-[#007BFF] group-hover:text-white flex items-center justify-center text-[#16324F] transition-all">
                    <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                  </div>
                </div>
              </div>

              {/* Card 04 - SALES & MARKET DEVELOPMENT */}
              <div 
                onClick={() => openModal(`Solutions — 04: ${solutions[3].title}`)}
                className="group relative rounded-3xl bg-white/80 backdrop-blur-xl border border-white/90 p-6 sm:p-7 shadow-[0_12px_35px_rgba(56,189,248,0.12)] hover:shadow-[0_20px_45px_rgba(0,123,255,0.22)] hover:border-[#007BFF] hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between cursor-pointer"
              >
                <div className="absolute -inset-0.5 rounded-3xl bg-gradient-to-r from-[#007BFF]/20 to-[#38BDF8]/20 opacity-0 group-hover:opacity-100 blur-sm transition-opacity duration-300 pointer-events-none" />

                <div className="relative z-10 space-y-4">
                  <div className="flex items-start justify-between">
                    <span className="text-xs font-black text-[#10B981] uppercase tracking-wider">
                      {solutions[3].num}
                    </span>
                    
                    {/* 3D Growth Chart Icon */}
                    <div className="w-16 h-16 rounded-full bg-gradient-to-b from-[#F0FDF4] to-white border-2 border-[#10B981]/30 shadow-[0_8px_20px_rgba(16,185,129,0.2)] flex items-center justify-center text-[#10B981] group-hover:scale-110 transition-transform">
                      <span className="material-symbols-outlined text-[32px]">
                        {solutions[3].icon}
                      </span>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-base sm:text-lg font-black uppercase text-[#16324F] tracking-tight">
                      {solutions[3].title}
                    </h3>
                    <div className="w-8 h-[2.5px] bg-[#10B981] rounded-full mt-1.5 mb-3" />
                  </div>

                  <div className="space-y-2">
                    <h4 className="text-xs sm:text-[13px] font-black text-[#16324F] leading-snug">
                      {solutions[3].sub}
                    </h4>
                    <p className="text-xs sm:text-[12.5px] font-medium text-[#64748B] leading-relaxed">
                      {solutions[3].desc}
                    </p>
                  </div>
                </div>

                <div className="relative z-10 pt-6">
                  <div className="w-10 h-10 rounded-full border border-[#CBD5E1] group-hover:border-[#007BFF] group-hover:bg-[#007BFF] group-hover:text-white flex items-center justify-center text-[#16324F] transition-all">
                    <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                  </div>
                </div>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
