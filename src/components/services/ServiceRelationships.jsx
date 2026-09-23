import React, { useState } from 'react';
import { servicePathways } from './servicesData';
import { useModal } from '../../context/ModalContext';

export default function ServiceRelationships() {
  const [activePathwayId, setActivePathwayId] = useState('launch');
  const { openModal } = useModal();

  const currentPathway = servicePathways.find(p => p.id === activePathwayId) || servicePathways[0];

  const handlePathwayClick = (id) => {
    setActivePathwayId(id);
    // Smooth scroll on mobile & desktop so user immediately sees the updated roadmap details
    setTimeout(() => {
      const el = document.getElementById('pathway-roadmap-details');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      }
    }, 50);
  };

  return (
    <section className="relative w-full bg-white py-20 sm:py-28 border-b border-[#E0F2FE]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 space-y-12 pb-12 lg:pb-0">
        
        {/* Header */}
        <div className="max-w-3xl text-left space-y-4">
          <div className="inline-flex items-center gap-2.5 text-xs sm:text-sm font-extrabold uppercase tracking-[0.2em] text-[#0066FF]">
            <span className="w-2.5 h-2.5 rounded-full bg-[#0066FF] animate-pulse" />
            <span>HOW OUR SERVICES WORK TOGETHER</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#16324F] leading-[1.2] tracking-tight">
            Growth Rarely Depends on One Service.
          </h2>

          <p className="text-base sm:text-lg font-medium text-[#334155] leading-relaxed">
            Real commercial traction requires multiple specialized functions operating in sequence. Explore how MJD services connect to solve common healthcare commercial objectives.
          </p>
        </div>

        {/* Pathway Selection Tabs - Fully Responsive (Vertical Stack on Mobile, Row on Desktop) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 border-b border-[#CBD5E1] pb-6">
          {servicePathways.map((pathway) => {
            const isActive = pathway.id === activePathwayId;
            return (
              <button
                key={pathway.id}
                type="button"
                onClick={() => handlePathwayClick(pathway.id)}
                className={`w-full text-left p-6 rounded-2xl border-2 transition-all duration-200 cursor-pointer flex flex-col justify-between space-y-4 relative ${
                  isActive
                    ? 'bg-[#16324F] border-[#16324F] text-white shadow-xl scale-[1.01]'
                    : 'bg-white border-[#CBD5E1] text-[#16324F] hover:border-[#0066FF] hover:bg-[#F8FAFC]'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className={`text-xs font-black uppercase tracking-widest font-mono ${isActive ? 'text-[#38BDF8]' : 'text-[#0066FF]'}`}>
                    PATHWAY {pathway.id === 'launch' ? '01' : pathway.id === 'entry' ? '02' : '03'}
                  </span>
                  {isActive ? (
                    <span className="inline-flex items-center gap-1.5 text-[11px] font-black uppercase text-[#38BDF8] bg-white/10 px-2.5 py-1 rounded-full border border-[#38BDF8]/40">
                      <span className="w-2 h-2 rounded-full bg-[#38BDF8] animate-pulse" />
                      Active Roadmap ↓
                    </span>
                  ) : (
                    <span className="text-[11px] font-bold text-[#64748B] hover:text-[#0066FF] inline-flex items-center gap-1">
                      <span>View Roadmap</span>
                      <span className="material-symbols-outlined text-[14px]">arrow_downward</span>
                    </span>
                  )}
                </div>

                <div>
                  <h3 className={`text-lg sm:text-xl font-black ${isActive ? 'text-white' : 'text-[#16324F]'}`}>
                    {pathway.title}
                  </h3>

                  <p className={`text-xs sm:text-sm font-medium leading-relaxed mt-1 ${isActive ? 'text-white/80' : 'text-[#475569]'}`}>
                    {pathway.subtitle}
                  </p>
                </div>

                {/* Mobile visual clue indicator when selected */}
                {isActive && (
                  <div className="text-[11px] font-black uppercase tracking-wider text-[#38BDF8] flex items-center gap-1.5 pt-2 border-t border-white/10">
                    <span className="material-symbols-outlined text-[16px] animate-bounce">arrow_downward</span>
                    <span>Roadmap Updated Below</span>
                  </div>
                )}
              </button>
            );
          })}
        </div>

        {/* Active Pathway Sequence Visualization - Fully Responsive Grid */}
        <div 
          id="pathway-roadmap-details"
          className="bg-[#F8FAFC] border-2 border-[#CBD5E1] rounded-3xl p-6 sm:p-10 space-y-8 shadow-sm scroll-mt-28"
        >
          
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#E2E8F0] pb-5">
            <div className="space-y-1">
              <span className="text-xs font-extrabold uppercase tracking-widest text-[#0066FF] inline-flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#0066FF] animate-pulse" />
                COMMERCIAL EXECUTION SEQUENCE
              </span>
              <h4 className="text-2xl font-black text-[#16324F]">
                {currentPathway.title} Roadmap
              </h4>
            </div>

            <button
              type="button"
              onClick={() => openModal(`Pathway Consultation: ${currentPathway.title}`)}
              className="inline-flex items-center gap-2 text-xs sm:text-sm font-extrabold uppercase tracking-wider px-5 py-3 rounded-xl bg-[#0066FF] text-white shadow-md hover:bg-[#0052cc] transition-colors cursor-pointer shrink-0 self-start sm:self-auto"
            >
              <span>Build This Pathway</span>
              <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
            </button>
          </div>

          {/* Sequential Step Nodes - Responsive Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-7 gap-4 relative">
            {currentPathway.steps.map((step, idx) => (
              <div key={`${step.name}-${idx}`} className="relative flex flex-col justify-between group">
                
                {/* Step Card - Accessible 14px Font & Spacious Padding */}
                <div className="h-full bg-white border border-[#CBD5E1] group-hover:border-[#0066FF] rounded-2xl p-4 sm:p-5 flex flex-col justify-between space-y-4 shadow-sm transition-all">
                  
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-xs font-black tracking-wider text-[#0066FF] bg-[#E0F2FE] px-2.5 py-1 rounded-md font-mono">
                        STEP 0{idx + 1}
                      </span>
                      <span className="text-xs font-mono font-bold text-[#64748B]">
                        {step.num}
                      </span>
                    </div>

                    <h5 className="text-sm font-black text-[#16324F] leading-snug group-hover:text-[#0066FF] transition-colors">
                      {step.name}
                    </h5>
                  </div>

                  <div className="pt-3 border-t border-[#F1F5F9] flex items-center justify-between text-xs font-bold text-[#475569]">
                    <span>Phase 0{idx + 1}</span>
                    <span className="material-symbols-outlined text-[16px] text-[#0066FF]">arrow_forward</span>
                  </div>

                </div>

              </div>
            ))}
          </div>

          {/* Bottom Explanation */}
          <div className="bg-white p-5 rounded-2xl border border-[#CBD5E1] flex items-center gap-3 text-xs sm:text-sm font-semibold text-[#334155]">
            <span className="material-symbols-outlined text-[#0066FF] text-[22px] shrink-0">schema</span>
            <span>
              MJD coordinates each capability in sequence — ensuring product positioning feeds GTM strategy, GTM feeds market access, and access feeds sales enablement.
            </span>
          </div>

        </div>

      </div>
    </section>
  );
}
