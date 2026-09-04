import React from 'react';
import { useModal } from '../context/ModalContext';

const bgImageUrl = "https://res.cloudinary.com/q1rn5v9m/image/upload/f_auto,q_auto/v1788416278/ChatGPT_Image_Sep_2_2026_11_11_14_PM.png";

const steps = [
  {
    num: '01',
    title: 'MARKET INTELLIGENCE',
    icon: 'query_stats',
    bullets: ['Market Analysis', 'Opportunity Mapping', 'Competitive Landscape'],
  },
  {
    num: '02',
    title: 'PRODUCT POSITIONING',
    icon: 'track_changes',
    bullets: ['Value Proposition', 'Differentiation', 'Positioning Strategy'],
  },
  {
    num: '03',
    title: 'GTM STRATEGY',
    icon: 'alt_route',
    bullets: ['Go-to-Market Plan', 'Target Segmentation', 'Channel Strategy'],
  },
  {
    num: '04',
    title: 'DEMAND GENERATION',
    icon: 'campaign',
    bullets: ['Digital Campaigns', 'Content & Outreach', 'Lead Generation'],
  },
  {
    num: '05',
    title: 'HOSPITAL ENGAGEMENT',
    icon: 'domain',
    bullets: ['Stakeholder Mapping', 'Clinical Engagement', 'KOL Collaboration'],
  },
  {
    num: '06',
    title: 'PROCUREMENT',
    icon: 'fact_check',
    bullets: ['Tender & RFP Support', 'Procurement Alignment', 'Decision Enablement'],
  },
  {
    num: '07',
    title: 'COMMERCIAL GROWTH',
    icon: 'trending_up',
    bullets: ['Institutional Sales', 'Pipeline Growth', 'Market Expansion'],
  },
];

export default function MarketAccessExplainer() {
  const { openModal } = useModal();
  return (
    <section 
      id="market-access-explainer"
      className="relative w-full overflow-hidden bg-[#070D18] text-white py-16 sm:py-20 lg:py-24 border-b border-[#1E293B]"
    >
      {/* Background Image from Cloudinary - Active on desktop (lg+) where horizontal corridor keeps face 100% visible */}
      <div 
        className="hidden lg:block absolute inset-0 bg-cover bg-center bg-no-repeat z-0 opacity-100 pointer-events-none"
        style={{
          backgroundImage: `url('${bgImageUrl}')`,
          backgroundPosition: 'center center',
          backgroundSize: 'cover',
        }}
      />

      {/* Mobile Ambient Glow Effects (Clean dark aesthetic, zero awkward half-crops) */}
      <div className="lg:hidden absolute top-1/4 left-1/2 -translate-x-1/2 w-80 h-80 bg-[#00D2FF]/15 rounded-full blur-[100px] pointer-events-none" />
      <div className="lg:hidden absolute bottom-1/4 right-0 w-60 h-60 bg-[#007BFF]/15 rounded-full blur-[90px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 space-y-8 sm:space-y-10">
        
        {/* Section Header Top-Left */}
        <div className="max-w-xl space-y-2 text-left">
          <div className="text-xs sm:text-[13px] font-extrabold uppercase tracking-[0.18em] text-[#00D2FF]">
             MARKET ACCESS EXPLAINER
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-black text-white leading-[1.28] sm:leading-[1.3] tracking-tight">
            What Does Healthcare{' '}
            <br />
            <span className="text-[#00D2FF]">Market Access</span> Really Mean?
          </h2>

          <p className="text-xs sm:text-sm font-medium text-white/80">
            A connected pathway from insight to institutional growth.
          </p>
        </div>

        {/* Mobile Dedicated Leadership Badge - Shows full face clearly with zero cutoff */}
        <div className="lg:hidden flex items-center gap-3.5 p-3.5 rounded-2xl bg-[#08121D]/95 border border-[#1E3A5F] shadow-lg">
          <div className="relative w-14 h-14 rounded-full overflow-hidden border-2 border-[#00D2FF] shadow-[0_0_12px_rgba(0,210,255,0.4)] shrink-0">
            <img 
              src={bgImageUrl} 
              alt="Majid - Market Access Strategy" 
              className="w-full h-full object-cover object-top scale-125"
            />
          </div>
          <div className="text-left">
            <div className="text-[10px] font-black uppercase tracking-wider text-[#00D2FF]">
              Executive Practice Lead
            </div>
            <div className="text-xs sm:text-sm font-black text-white leading-tight">
              Hospital Access &amp; Commercial Architecture
            </div>
            <div className="text-[10.5px] font-medium text-white/60">
              Direct pathways across apex health networks
            </div>
          </div>
        </div>

        {/* 7-Step Stepped Pathway Canvas */}
        <div className="relative w-full min-h-0 lg:min-h-[660px]">
          
          {/* SVG Connecting Blue Neon Pathway on Desktop */}
          <svg 
            className="hidden lg:block absolute inset-0 w-full h-full pointer-events-none z-10"
            viewBox="0 0 1200 660"
            fill="none"
          >
            <path
              d="M 110 230 L 110 320 L 290 320 L 290 440 L 460 440 L 460 560 L 670 560 L 670 460 L 980 460 L 980 300 L 1050 300 L 1050 120"
              stroke="#00D2FF"
              strokeWidth="2.5"
              strokeDasharray="5 5"
              strokeLinecap="round"
              strokeLinejoin="round"
              opacity="0.85"
            />
            
            <circle cx="110" cy="230" r="4.5" fill="#00D2FF" />
            <circle cx="290" cy="360" r="4.5" fill="#00D2FF" />
            <circle cx="460" cy="480" r="4.5" fill="#00D2FF" />
            <circle cx="670" cy="560" r="5.5" fill="#00D2FF" />
            <circle cx="920" cy="460" r="4.5" fill="#00D2FF" />
            <circle cx="1020" cy="280" r="4.5" fill="#00D2FF" />
            <circle cx="1050" cy="110" r="5" fill="#00D2FF" />
          </svg>

          {/* Stepped Cards in Exact Positions Leaving Face 100% Visible */}
          <div className="hidden lg:block relative w-full h-[660px]">
            
            {/* 01 MARKET INTELLIGENCE (Top Left) */}
            <div className="absolute left-[0%] top-[8%] w-[205px] rounded-2xl bg-[#08121D]/92 backdrop-blur-md p-3.5 border border-[#1E3A5F] shadow-2xl hover:border-[#00D2FF] transition-all hover:scale-105 z-20">
              <div className="flex items-center justify-between mb-1.5">
                <span className="text-[10.5px] font-black text-[#00D2FF]">01</span>
                <div className="w-7 h-7 rounded-full border border-[#00D2FF]/60 flex items-center justify-center text-[#00D2FF]">
                  <span className="material-symbols-outlined text-[15px]">query_stats</span>
                </div>
              </div>
              <h4 className="text-[11.5px] font-black uppercase text-white mb-1.5 leading-tight">
                MARKET INTELLIGENCE
              </h4>
              <ul className="text-[9.5px] font-medium text-white/70 space-y-1">
                {steps[0].bullets.map((b) => <li key={b}>• {b}</li>)}
              </ul>
            </div>

            {/* 02 PRODUCT POSITIONING (Mid-Left) */}
            <div className="absolute left-[15%] top-[28%] w-[205px] rounded-2xl bg-[#08121D]/92 backdrop-blur-md p-3.5 border border-[#1E3A5F] shadow-2xl hover:border-[#00D2FF] transition-all hover:scale-105 z-20">
              <div className="flex items-center justify-between mb-1.5">
                <span className="text-[10.5px] font-black text-[#00D2FF]">02</span>
                <div className="w-7 h-7 rounded-full border border-[#00D2FF]/60 flex items-center justify-center text-[#00D2FF]">
                  <span className="material-symbols-outlined text-[15px]">track_changes</span>
                </div>
              </div>
              <h4 className="text-[11.5px] font-black uppercase text-white mb-1.5 leading-tight">
                PRODUCT POSITIONING
              </h4>
              <ul className="text-[9.5px] font-medium text-white/70 space-y-1">
                {steps[1].bullets.map((b) => <li key={b}>• {b}</li>)}
              </ul>
            </div>

            {/* 03 GTM STRATEGY (Lower-Left) */}
            <div className="absolute left-[29%] top-[48%] w-[205px] rounded-2xl bg-[#08121D]/92 backdrop-blur-md p-3.5 border border-[#1E3A5F] shadow-2xl hover:border-[#00D2FF] transition-all hover:scale-105 z-20">
              <div className="flex items-center justify-between mb-1.5">
                <span className="text-[10.5px] font-black text-[#00D2FF]">03</span>
                <div className="w-7 h-7 rounded-full border border-[#00D2FF]/60 flex items-center justify-center text-[#00D2FF]">
                  <span className="material-symbols-outlined text-[15px]">alt_route</span>
                </div>
              </div>
              <h4 className="text-[11.5px] font-black uppercase text-white mb-1.5 leading-tight">
                GTM STRATEGY
              </h4>
              <ul className="text-[9.5px] font-medium text-white/70 space-y-1">
                {steps[2].bullets.map((b) => <li key={b}>• {b}</li>)}
              </ul>
            </div>

            {/* 04 DEMAND GENERATION (Center Lowest - Under Chin/Hands) */}
            <div className="absolute left-[50%] -translate-x-1/2 bottom-[2%] w-[215px] rounded-2xl bg-[#0A1624]/95 backdrop-blur-md p-3.5 border-2 border-[#00D2FF] shadow-[0_0_30px_rgba(0,210,255,0.4)] hover:scale-105 transition-all z-30">
              <div className="flex items-center justify-between mb-1.5">
                <span className="px-2 py-0.5 rounded-full bg-[#00D2FF] text-[#070D18] text-[9px] font-black">04</span>
                <div className="w-7 h-7 rounded-full border border-[#00D2FF] flex items-center justify-center text-[#00D2FF]">
                  <span className="material-symbols-outlined text-[16px]">campaign</span>
                </div>
              </div>
              <h4 className="text-[12px] font-black uppercase text-[#00D2FF] mb-1.5 leading-tight">
                DEMAND GENERATION
              </h4>
              <ul className="text-[9.5px] font-semibold text-white/90 space-y-1">
                {steps[3].bullets.map((b) => <li key={b}>• {b}</li>)}
              </ul>
            </div>

            {/* 05 HOSPITAL ENGAGEMENT (Lower-Right of Face) */}
            <div className="absolute right-[16%] top-[56%] w-[205px] rounded-2xl bg-[#08121D]/92 backdrop-blur-md p-3.5 border border-[#1E3A5F] shadow-2xl hover:border-[#00D2FF] transition-all hover:scale-105 z-20">
              <div className="flex items-center justify-between mb-1.5">
                <span className="text-[10.5px] font-black text-[#00D2FF]">05</span>
                <div className="w-7 h-7 rounded-full border border-[#00D2FF]/60 flex items-center justify-center text-[#00D2FF]">
                  <span className="material-symbols-outlined text-[15px]">domain</span>
                </div>
              </div>
              <h4 className="text-[11.5px] font-black uppercase text-white mb-1.5 leading-tight">
                HOSPITAL ENGAGEMENT
              </h4>
              <ul className="text-[9.5px] font-medium text-white/70 space-y-1">
                {steps[4].bullets.map((b) => <li key={b}>• {b}</li>)}
              </ul>
            </div>

            {/* 06 PROCUREMENT (Middle-Right of Face) */}
            <div className="absolute right-[1%] top-[34%] w-[205px] rounded-2xl bg-[#08121D]/92 backdrop-blur-md p-3.5 border border-[#1E3A5F] shadow-2xl hover:border-[#00D2FF] transition-all hover:scale-105 z-20">
              <div className="flex items-center justify-between mb-1.5">
                <span className="text-[10.5px] font-black text-[#00D2FF]">06</span>
                <div className="w-7 h-7 rounded-full border border-[#00D2FF]/60 flex items-center justify-center text-[#00D2FF]">
                  <span className="material-symbols-outlined text-[15px]">fact_check</span>
                </div>
              </div>
              <h4 className="text-[11.5px] font-black uppercase text-white mb-1.5 leading-tight">
                PROCUREMENT
              </h4>
              <ul className="text-[9.5px] font-medium text-white/70 space-y-1">
                {steps[5].bullets.map((b) => <li key={b}>• {b}</li>)}
              </ul>
            </div>

            {/* 07 COMMERCIAL GROWTH (Top-Right of Face) */}
            <div className="absolute right-[1%] top-[6%] w-[205px] rounded-2xl bg-[#08121D]/92 backdrop-blur-md p-3.5 border border-[#1E3A5F] shadow-2xl hover:border-[#00D2FF] transition-all hover:scale-105 z-20">
              <div className="flex items-center justify-between mb-1.5">
                <span className="text-[10.5px] font-black text-[#00D2FF]">07</span>
                <div className="w-7 h-7 rounded-full border border-[#00D2FF]/60 flex items-center justify-center text-[#00D2FF]">
                  <span className="material-symbols-outlined text-[15px]">trending_up</span>
                </div>
              </div>
              <h4 className="text-[11.5px] font-black uppercase text-white mb-1.5 leading-tight">
                COMMERCIAL GROWTH
              </h4>
              <ul className="text-[9.5px] font-medium text-white/70 space-y-1">
                {steps[6].bullets.map((b) => <li key={b}>• {b}</li>)}
              </ul>
            </div>

          </div>

          {/* Responsive Mobile / Tablet Layout (<1024px) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:hidden">
            {steps.map((step) => (
              <div 
                key={step.num}
                className="rounded-2xl bg-[#08121D]/92 backdrop-blur-md p-4 border border-[#1E3A5F] shadow-xl"
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-black text-[#00D2FF]">{step.num}</span>
                  <span className="material-symbols-outlined text-[20px] text-[#00D2FF]">{step.icon}</span>
                </div>
                <h4 className="text-xs font-black uppercase text-white mb-2">
                  {step.title}
                </h4>
                <ul className="text-xs font-medium text-white/70 space-y-1">
                  {step.bullets.map((b) => <li key={b}>• {b}</li>)}
                </ul>
              </div>
            ))}
          </div>

        </div>

        {/* Bottom Split Bar: THE OUTCOME (Left) & CTA Button (Right) */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-6 pt-2">
          
          {/* Left: THE OUTCOME Card */}
          <div className="flex items-center gap-4 px-5 py-3.5 rounded-2xl bg-[#08121D]/92 backdrop-blur-md border border-[#1E3A5F] shadow-xl">
            <div>
              <div className="text-[9.5px] font-black uppercase tracking-wider text-[#00D2FF] mb-0.5">
                THE OUTCOME
              </div>
              <div className="text-xs sm:text-[13px] font-black text-white">
                Better Access.{' '}
                <span className="text-[#00D2FF]">Stronger Relationships.</span>{' '}
                Measurable Growth.
              </div>
            </div>
            <span className="material-symbols-outlined text-[24px] text-[#00D2FF] ml-auto shrink-0">
              trending_up
            </span>
          </div>

          {/* Right: CTA Button */}
          <button
            type="button"
            onClick={() => openModal('Market Access Explainer — Opportunity Assessment')}
            className="inline-flex items-center justify-center gap-3 px-7 py-3.5 rounded-2xl bg-[#08121D]/92 border border-[#1E3A5F] hover:border-[#00D2FF] text-white text-xs sm:text-[13px] font-black uppercase tracking-wider shadow-xl transition-all group cursor-pointer"
          >
            <span>ASSESS MY MARKET ACCESS OPPORTUNITY</span>
            <div className="w-5 h-5 rounded-full bg-[#00D2FF] text-[#070D18] flex items-center justify-center group-hover:scale-110 transition-transform">
              <span className="material-symbols-outlined text-[14px] font-black">arrow_forward</span>
            </div>
          </button>

        </div>

      </div>
    </section>
  );
}
