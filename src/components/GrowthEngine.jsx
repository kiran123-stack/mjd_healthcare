import React from 'react';
import { useModal } from '../context/ModalContext';

const stages = [
  {
    num: '01',
    title: 'DISCOVER',
    color: '#007BFF',
    badgeBg: 'bg-[#007BFF]',
    textColor: 'text-[#007BFF]',
    icon: 'query_stats',
    statement: 'Understand the market opportunity.',
    bullets: 'Market intelligence · Target segments · Competitors · High-potential territories',
    isHero: false,
  },
  {
    num: '02',
    title: 'POSITION',
    color: '#10B981',
    badgeBg: 'bg-[#10B981]',
    textColor: 'text-[#10B981]',
    icon: 'track_changes',
    statement: 'Define why the market should choose you.',
    bullets: 'Product positioning · Value proposition · GTM strategy',
    isHero: false,
  },
  {
    num: '03',
    title: 'GENERATE',
    color: '#F59E0B',
    badgeBg: 'bg-[#F59E0B]',
    textColor: 'text-[#F59E0B]',
    icon: 'campaign',
    statement: 'Create targeted healthcare demand.',
    bullets: 'SEO · LinkedIn · Content · Digital campaigns · Strategic outreach',
    isHero: false,
  },
  {
    num: '04',
    title: 'ACCESS',
    color: '#7C3AED',
    badgeBg: 'bg-[#7C3AED]',
    textColor: 'text-[#7C3AED]',
    icon: 'groups',
    statement: 'Reach the right healthcare stakeholders.',
    bullets: 'Hospitals · Clinicians · KOLs · Procurement teams',
    isHero: true,
  },
  {
    num: '05',
    title: 'CONVERT',
    color: '#0284C7',
    badgeBg: 'bg-[#0284C7]',
    textColor: 'text-[#0284C7]',
    icon: 'handshake',
    statement: 'Move opportunities toward commercial decisions.',
    bullets: 'Product evaluation · Sales enablement · Institutional opportunities',
    isHero: false,
  },
  {
    num: '06',
    title: 'SCALE',
    color: '#007BFF',
    badgeBg: 'bg-[#007BFF]',
    textColor: 'text-[#007BFF]',
    icon: 'trending_up',
    statement: 'Build repeatable market growth.',
    bullets: 'Territory expansion · Channel development · Pipeline growth',
    isHero: false,
  },
];

export default function GrowthEngine() {
  const { openModal } = useModal();
  return (
    <section 
      id="growth-engine"
      className="relative w-full overflow-hidden bg-[#030A14] text-white py-16 sm:py-20 lg:py-24 border-b border-[#1E293B]"
    >
      {/* Background glow effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-[#007BFF]/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/4 right-1/4 w-[400px] h-[300px] bg-[#7C3AED]/15 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 space-y-12 sm:space-y-16">
        
        {/* Section Header Top-Left */}
        <div className="space-y-2 text-left">
          <div className="text-xs sm:text-[13px] font-extrabold uppercase tracking-[0.18em] text-[#007BFF]">
            GROWTH ENGINE
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-[46px] font-black text-white leading-[1.35] tracking-tight">
            Our 6-Stage Healthcare{' '}
            <br className="hidden sm:inline" />
            <span className="text-[#007BFF]">Commercial Growth Model.</span>
          </h2>

          <p className="text-xs sm:text-sm font-medium text-white/70 max-w-2xl pt-1">
            A continuous, connected process that turns insights into market demand and market demand into scalable commercial growth.
          </p>
        </div>

        {/* 6 Stage Cards Grid */}
        <div className="relative">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-4 sm:gap-4 items-stretch">
            {stages.map((stage, idx) => (
              <div
                key={stage.num}
                onClick={() => openModal(`Growth Engine — Stage 0${stage.num}: ${stage.title}`)}
                className={`relative flex flex-col items-center justify-between p-4 sm:p-5 rounded-2xl bg-white text-[#16324F] transition-all duration-300 group cursor-pointer ${
                  stage.isHero
                    ? 'border-2 border-[#7C3AED] shadow-[0_12px_35px_rgba(124,58,237,0.35)] -translate-y-2.5 sm:-translate-y-3.5 z-10'
                    : 'border border-[#E0F2FE] shadow-lg hover:-translate-y-1 hover:border-[#007BFF] z-0'
                }`}
              >
                  <div>
                    {/* Floating Top Number Badge */}
                    <div className="flex justify-center -mt-8 mb-3">
                      <div className={`w-8 h-8 rounded-full ${stage.badgeBg} text-white font-black text-xs flex items-center justify-center shadow-md border-2 border-white`}>
                        {stage.num}
                      </div>
                    </div>

                    {/* Stage Title */}
                    <div className="text-center mb-3">
                      <h3 className={`text-sm sm:text-base font-black uppercase tracking-wider ${stage.textColor}`}>
                        {stage.title}
                      </h3>
                    </div>

                    {/* Large Icon Badge */}
                    <div className="flex justify-center mb-4">
                      <div className="w-16 h-16 rounded-full border-2 border-current flex items-center justify-center" style={{ color: stage.color }}>
                        <span className="material-symbols-outlined text-[32px]">
                          {stage.icon}
                        </span>
                      </div>
                    </div>

                    {/* Core Statement */}
                    <p className={`text-xs sm:text-[13px] font-bold text-center leading-snug mb-3 ${stage.textColor}`}>
                      {stage.statement}
                    </p>
                  </div>

                  {/* Sub-bullets */}
                  <div>
                    <div className="w-full h-px bg-[#F1F5F9] my-2" />
                    <p className="text-[10px] sm:text-[11px] font-medium text-[#64748B] text-center leading-relaxed">
                      {stage.bullets}
                    </p>
                  </div>

                  {/* 3D Pedestal Glow Base for Stage 04 (ACCESS) */}
                  {stage.isHero && (
                    <>
                      <div className="hidden lg:block absolute -bottom-3 inset-x-2 h-4 bg-[#7C3AED]/70 rounded-b-2xl blur-[6px] -z-10" />
                      <div className="hidden lg:block absolute -bottom-2 inset-x-3 h-3 bg-gradient-to-r from-[#8B5CF6] via-[#7C3AED] to-[#6D28D9] rounded-b-xl -z-10 shadow-[0_8px_20px_rgba(124,58,237,0.6)]" />
                    </>
                  )}

                  {/* Connecting Right Arrow between cards on desktop */}
                  {idx < stages.length - 1 && (
                    <div className="hidden lg:flex absolute -right-3 top-1/2 -translate-y-1/2 z-20 text-[#007BFF]">
                      <span className="material-symbols-outlined text-[20px] drop-shadow">
                        arrow_forward
                      </span>
                    </div>
                  )}

                </div>
            ))}
          </div>
        </div>

        {/* Bottom Banner matching exact screenshot */}
        <div className="w-full max-w-4xl mx-auto rounded-full bg-[#051122] border border-[#1E3A5F] px-6 py-4 shadow-xl flex flex-col sm:flex-row items-center justify-center gap-4 text-center">
          <div className="w-9 h-9 rounded-full bg-white text-[#007BFF] flex items-center justify-center shrink-0 shadow-md">
            <span className="material-symbols-outlined text-[20px]">
              trending_up
            </span>
          </div>

          <div className="hidden sm:block w-px h-5 bg-[#1E3A5F]" />

          <p className="text-sm sm:text-base md:text-lg font-bold tracking-wide">
            <span className="text-white">Strategy creates</span>{' '}
            <span className="text-[#007BFF]">direction.</span>{' '}
            <span className="text-white">Execution creates</span>{' '}
            <span className="text-[#007BFF]">growth.</span>
          </p>
        </div>

      </div>
    </section>
  );
}
