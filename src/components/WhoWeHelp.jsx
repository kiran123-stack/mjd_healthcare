import React from 'react';
import { useModal } from '../context/ModalContext';

const sectors = [
  {
    num: '01',
    title: 'Medical Device Manufacturers',
    tag: 'Class I / II / III Devices',
    icon: 'biotech',
    badgeColor: 'from-[#007BFF] to-[#38BDF8]',
    accentColor: '#007BFF',
    focus: 'Surgeon adoption & OT trials',
    desc: 'Navigating clinical trials, regulatory clearance, key opinion leader validation, and formulary entry for class I, II, and III medical hardware.',
    highlights: ['Surgeon KOL Alignment', 'Wet-lab Demonstrations', 'Formulary Inclusion'],
  },
  {
    num: '02',
    title: 'Medical Equipment Companies',
    tag: 'Capital Expenditure (CapEx)',
    icon: 'precision_manufacturing',
    badgeColor: 'from-[#0EA5E9] to-[#38BDF8]',
    accentColor: '#0EA5E9',
    focus: 'CapEx ROI & Finance committee clearance',
    desc: 'Managing complex capital expenditure sales cycles, structured hospital leasing, biomedical assessments, and CFO committee approvals.',
    highlights: ['Biomedical Clearance', 'CFO Financial Modeling', 'P&L Justification'],
  },
  {
    num: '03',
    title: 'Healthcare Product Companies',
    tag: 'High-Volume Consumables',
    icon: 'inventory_2',
    badgeColor: 'from-[#10B981] to-[#34D399]',
    accentColor: '#10B981',
    focus: 'Volume supply agreements & inventory rotation',
    desc: 'Securing high-volume recurring hospital supply contracts, managing institutional pharmacy distributor terms, and inventory rotation.',
    highlights: ['Institutional Tenders', 'Distributor Networks', 'Margin Protection'],
  },
  {
    num: '04',
    title: 'Healthcare Tech & SaaS',
    tag: 'Digital Health & Platforms',
    icon: 'terminal',
    badgeColor: 'from-[#6366F1] to-[#818CF8]',
    accentColor: '#6366F1',
    focus: 'CIO review & Clinical workflow adoption',
    desc: 'Overcoming hospital CIO cybersecurity reviews, electronic health record (EHR) integration barriers, and staff workflow inertia.',
    highlights: ['EHR Integration', 'Cybersecurity Clearance', 'Departmental Buy-in'],
  },
  {
    num: '05',
    title: 'Businesses Entering New Markets',
    tag: 'Cross-Border & New Territory Expansion',
    icon: 'language',
    badgeColor: 'from-[#007BFF] to-[#00D2FF]',
    accentColor: '#007BFF',
    focus: 'Territory licensing, local distributor networks & cluster penetration',
    desc: 'Global and domestic healthcare enterprises expanding into new metro clusters, regional hospital chains, or multi-state markets with tailored go-to-market strategies.',
    highlights: ['State Cluster Penetration', 'Tier-1 Distributor Alliances', 'Regulatory Market Entry'],
    featured: true,
  },
];

export default function WhoWeHelp() {
  const { openModal } = useModal();
  return (
    <section 
      id="who-we-help"
      className="relative w-full overflow-hidden bg-gradient-to-b from-[#FFFFFF] via-[#F8FCFF] to-[#FFFFFF] border-b border-[#E0F2FE] py-16 sm:py-20 lg:py-24"
    >
      {/* Background ambient light effects */}
      <div className="absolute top-10 right-10 w-[500px] h-[500px] bg-[#007BFF]/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[500px] h-[500px] bg-[#38BDF8]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 space-y-10 sm:space-y-14">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-2 text-left max-w-2xl">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#007BFF] animate-pulse" />
              <span className="text-xs sm:text-[13px] font-extrabold uppercase tracking-[0.18em] text-[#007BFF]">
                 WHO WE HELP
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-[46px] font-black text-[#16324F] leading-[1.28] sm:leading-[1.3] tracking-tight">
              Built for Healthcare Businesses{' '}
              <br className="hidden sm:inline" />
              <span className="text-[#007BFF]">Ready to Grow.</span>
            </h2>

            <p className="text-sm sm:text-base font-medium text-[#64748B] leading-relaxed pt-1">
              Each vertical in life sciences encounters distinct purchasing hurdles. Our operational models are pre-calibrated for your specific sector.
            </p>
          </div>

          <button 
            type="button"
            onClick={() => openModal('Who We Help — Sector Opportunity Assessment')}
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-[#E0F2FE] hover:bg-[#007BFF] text-[#007BFF] hover:text-white text-xs sm:text-sm font-extrabold uppercase tracking-wider transition-all self-start md:self-end shadow-sm cursor-pointer"
          >
            <span>Identify Your Sector Track</span>
            <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
          </button>
        </div>

        {/* Dynamic Sector Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
          {sectors.map((sec) => (
            <div
              key={sec.num}
              onClick={() => openModal(`Sector Track 0${sec.num}: ${sec.title}`)}
              className={`group relative rounded-3xl bg-white/90 backdrop-blur-xl border border-[#BAE6FD]/80 p-6 sm:p-7 shadow-[0_10px_30px_rgba(56,189,248,0.10)] hover:shadow-[0_20px_45px_rgba(0,123,255,0.20)] hover:border-[#007BFF] hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between cursor-pointer ${
                sec.featured ? 'md:col-span-2 lg:col-span-2' : ''
              }`}
            >
              {/* Card Ambient Glow on Hover */}
              <div className="absolute -inset-0.5 rounded-3xl bg-gradient-to-r from-[#007BFF]/15 to-[#38BDF8]/15 opacity-0 group-hover:opacity-100 blur-sm transition-opacity duration-300 pointer-events-none" />

              <div className="relative z-10 space-y-4">
                
                {/* Top Row: Sector Badge & 3D Glowing Icon */}
                <div className="flex items-center justify-between pb-3 border-b border-[#F0F6FA]">
                  <div className="flex items-center gap-2">
                    <span className="px-2.5 py-1 rounded-full bg-[#007BFF] text-white text-[10px] font-black tracking-wider">
                      {sec.num}
                    </span>
                    <span className="text-[10.5px] font-extrabold uppercase tracking-wider text-[#64748B] bg-[#F1F5F9] px-2.5 py-1 rounded-full">
                      {sec.tag}
                    </span>
                  </div>

                  {/* 3D Glowing Circular Icon */}
                  <div className={`w-12 h-12 rounded-2xl bg-gradient-to-tr ${sec.badgeColor} text-white flex items-center justify-center shadow-md shadow-[#007BFF]/25 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
                    <span className="material-symbols-outlined text-[24px]">
                      {sec.icon}
                    </span>
                  </div>
                </div>

                {/* Card Title */}
                <div>
                  <h3 className="text-lg sm:text-xl font-black text-[#16324F] tracking-tight group-hover:text-[#007BFF] transition-colors">
                    {sec.title}
                  </h3>
                  <div className="flex items-center gap-2 mt-1.5 text-xs font-bold text-[#007BFF]">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#007BFF]" />
                    <span>Focus: {sec.focus}</span>
                  </div>
                </div>

                {/* Card Description */}
                <p className="text-xs sm:text-[13px] font-medium text-[#64748B] leading-relaxed">
                  {sec.desc}
                </p>

                {/* Bullet Highlights */}
                <div className="pt-2">
                  <div className="text-[10px] font-black uppercase tracking-wider text-[#94A3B8] mb-2">
                    Key Deliverables
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {sec.highlights.map((h) => (
                      <span
                        key={h}
                        className="inline-flex items-center gap-1.5 px-3 py-1 rounded-xl bg-[#F0F9FF] border border-[#BAE6FD]/60 text-[11px] font-semibold text-[#16324F]"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-[#007BFF]" />
                        {h}
                      </span>
                    ))}
                  </div>
                </div>

              </div>

              {/* Bottom Card Action Footer */}
              <div className="relative z-10 pt-6 mt-4 border-t border-[#F0F6FA] flex items-center justify-between">
                <span className="text-[11px] font-extrabold uppercase tracking-wider text-[#007BFF]">
                  Commercial Advisory Track
                </span>
                <div className="w-8 h-8 rounded-full border border-[#BAE6FD] group-hover:border-[#007BFF] group-hover:bg-[#007BFF] group-hover:text-white flex items-center justify-center text-[#007BFF] transition-all">
                  <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
