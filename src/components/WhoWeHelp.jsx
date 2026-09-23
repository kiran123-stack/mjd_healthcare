import React from 'react';
import { useModal } from '../context/ModalContext';
import {
  Stethoscope,
  Pill,
  Cpu,
  Rocket,
  Microscope,
  Terminal,
  Building2,
  Package,
  Handshake,
  Award,
  Globe,
  ArrowRight
} from 'lucide-react';

const sectors = [
  {
    num: '01',
    title: 'Medical Device Manufacturers',
    tag: 'Class I / II / III Devices',
    icon: Stethoscope,
    focus: 'Surgeon adoption & hospital procurement',
    desc: 'Helping hardware innovators clear regulatory approvals, biomedical reviews, and hospital formulary boards across regional health systems.',
    highlights: ['Formulary Clearance', 'Surgeon KOL Alignment', 'OT Demonstration Trials'],
    page: 'industries',
  },
  {
    num: '02',
    title: 'Pharmaceutical Manufacturing',
    tag: 'Specialty Formulations & Biologics',
    icon: Pill,
    focus: 'Formulary listing & physician adoption',
    desc: 'Driving specialty drug therapies, critical care formulations, and hospital pharmacy adoption across corporate and academic health networks.',
    highlights: ['Formulary Access', 'Clinical Protocol Framing', 'Channel Distribution'],
    page: 'industries',
  },
  {
    num: '03',
    title: 'MedTech Companies',
    tag: 'AI, Robotics & Software',
    icon: Cpu,
    focus: 'Clinical validation & hospital IT integration',
    desc: 'Building GTM strategies, clinical proof points, and hospital procurement pathways for surgical robotics, AI diagnostics, and digital health tools.',
    highlights: ['Hospital IT/EHR Integration', 'KOL Outreach', 'Demonstration Logistics'],
    page: 'go-to-market-strategy',
  },
  {
    num: '04',
    title: 'Healthcare Startups',
    tag: 'Seed to Series B Ventures',
    icon: Rocket,
    focus: 'Rapid product-market fit & early adoption',
    desc: 'Equipping emerging healthcare ventures with instant market access, avoiding years of costly trial-and-error sales experiments.',
    highlights: ['Early Customer Traction', 'Market Entry Strategy', 'Pitch & GTM Frameworks'],
    page: 'industries',
  },
  {
    num: '05',
    title: 'Diagnostic Companies',
    tag: 'IVD, Pathology & POC Testing',
    icon: Microscope,
    focus: 'Reagent rental & instrument placement',
    desc: 'Accelerating instrument placement models and consumable reagent supply contracts across corporate and independent diagnostic networks.',
    highlights: ['Reagent Rental Contracts', 'Lab Network Access', 'B2B Procurement'],
    page: 'industries',
  },
  {
    num: '06',
    title: 'Healthcare Technology Companies',
    tag: 'Health Software & Telemetry',
    icon: Terminal,
    focus: 'C-Suite buy-in & clinical workflow',
    desc: 'Navigating hospital CIO reviews, data compliance, and clinical workflow adoption for enterprise healthcare platforms.',
    highlights: ['CIO Governance', 'Cybersecurity Clearance', 'Clinical Workflow Integration'],
    page: 'industries',
  },
  {
    num: '07',
    title: 'Hospitals & Healthcare Providers',
    tag: 'Multi-Specialty & Tertiary Systems',
    icon: Building2,
    focus: 'Specialty service line expansion & referral growth',
    desc: 'Assisting health systems in clinical service line expansion, center-of-excellence launch, and medical referral network development.',
    highlights: ['Patient Acquisition', 'Referral Networks', 'Specialty Center GTM'],
    page: 'industries',
  },
  {
    num: '08',
    title: 'Medical Equipment Companies',
    tag: 'CapEx Equipment & Infrastructure',
    icon: Package,
    focus: 'CFO finance committee & biomedical approval',
    desc: 'Managing complex capital equipment sales cycles, structured hospital leasing, biomedical clearance, and CFO committee sign-offs.',
    highlights: ['CFO Payback Calculations', 'Biomedical Audit Pack', 'Lease & OpEx Framing'],
    page: 'industries',
  },
  {
    num: '09',
    title: 'Healthcare Service Providers',
    tag: 'B2B Operational Services',
    icon: Handshake,
    focus: 'B2B lead generation & institutional contracts',
    desc: 'Helping healthcare service providers sharpen their value proposition and secure long-term commercial agreements with health networks.',
    highlights: ['Institutional Contracting', 'B2B Lead Generation', 'Partnership Architecture'],
    page: 'healthcare-business-development',
  },
  {
    num: '10',
    title: 'Healthcare Brands',
    tag: 'Clinical & Consumer Healthcare',
    icon: Award,
    focus: 'Brand positioning & commercial scale',
    desc: 'Building strong healthcare brand positioning that resonates with clinicians, pharmacists, and end-user patients.',
    highlights: ['Clinical Brand Authority', 'Multichannel Reach', 'Reputation Governance'],
    page: 'product-positioning-commercialization',
  },
  {
    num: '11',
    title: 'International Companies Entering India',
    tag: 'Cross-Border Market Entry',
    icon: Globe,
    focus: 'India market entry, licensing & distribution',
    desc: 'Guiding global healthcare companies through regulatory landscape, hospital access, partner identification, and regional distributor networks.',
    highlights: ['India Market Assessment', 'Tier-1 Distributor Alliances', 'Regulatory Compliance'],
    featured: true,
    page: 'market-access',
  }
];

export default function WhoWeHelp({ onNavigate }) {
  const { openModal } = useModal();

  const handleSectorClick = (e, page) => {
    e.preventDefault();
    if (onNavigate) {
      onNavigate(page, null);
    } else {
      window.location.hash = `#${page}`;
    }
  };

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
                WHO WE WORK WITH
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-[46px] font-black text-[#16324F] leading-[1.28] sm:leading-[1.3] tracking-tight">
              Specialized Commercial Pathways Across{' '}
              <span className="text-[#007BFF]">11 Healthcare Verticals.</span>
            </h2>

            <p className="text-sm sm:text-base font-medium text-[#64748B] leading-relaxed pt-1">
              Each healthcare domain encounters distinct purchasing gatekeepers and regulatory cycles. Our commercial frameworks are customized for your specific healthcare sector.
            </p>
          </div>

          {/* MAIN CTA BUTTON -> OPENS MODAL FORM */}
          <button 
            type="button"
            onClick={() => openModal('Who We Work With — Sector Assessment')}
            className="inline-flex items-center gap-2.5 px-7 py-4 rounded-full bg-[#007BFF] hover:bg-[#0066d6] text-white text-xs sm:text-sm font-extrabold uppercase tracking-wider transition-all duration-300 self-start md:self-end shadow-lg shadow-[#007BFF]/25 hover:shadow-xl hover:shadow-[#007BFF]/40 cursor-pointer transform hover:-translate-y-0.5"
          >
            <span>Assess Your Sector Strategy</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* Dynamic Sector Cards Grid - Exact match to user screenshot layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
          {sectors.map((sec) => {
            const IconComponent = sec.icon;
            return (
              <a
                key={sec.num}
                href={`#${sec.page}`}
                onClick={(e) => handleSectorClick(e, sec.page)}
                className={`group relative rounded-3xl bg-white/95 backdrop-blur-xl border border-[#BAE6FD]/80 p-6 sm:p-7 shadow-[0_10px_30px_rgba(56,189,248,0.08)] hover:shadow-[0_20px_45px_rgba(0,123,255,0.20)] hover:border-[#007BFF] hover:-translate-y-2 transition-all duration-300 flex flex-col justify-between cursor-pointer ${
                  sec.featured ? 'md:col-span-2 lg:col-span-2' : ''
                }`}
              >
                {/* Card Ambient Glow on Hover */}
                <div className="absolute -inset-0.5 rounded-3xl bg-gradient-to-r from-[#007BFF]/20 to-[#38BDF8]/20 opacity-0 group-hover:opacity-100 blur-sm transition-opacity duration-300 pointer-events-none" />

                <div className="relative z-10 space-y-4">
                  
                  {/* Top Row: Exact match to screenshot layout (Circle step number, center tag, right icon) */}
                  <div className="flex items-center justify-between gap-2 pb-3.5 border-b border-[#E0F2FE]">
                    <div className="flex items-center gap-2 overflow-hidden">
                      <span className="w-7 h-7 rounded-full bg-[#007BFF] text-white text-xs font-mono font-bold flex items-center justify-center shrink-0 shadow-sm shadow-[#007BFF]/30">
                        {sec.num}
                      </span>
                      <span className="text-[10px] font-extrabold uppercase tracking-wider text-[#64748B] bg-[#E0F2FE]/60 px-3 py-1 rounded-full truncate">
                        {sec.tag}
                      </span>
                    </div>

                    <div className="w-10 h-10 rounded-xl bg-[#E0F2FE] text-[#007BFF] group-hover:bg-[#007BFF] group-hover:text-white flex items-center justify-center transition-all duration-300 shrink-0 shadow-sm">
                      <IconComponent className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" />
                    </div>
                  </div>

                  {/* Card Title & Focus Bullet */}
                  <div>
                    <h3 className="text-lg sm:text-xl font-black text-[#16324F] tracking-tight group-hover:text-[#007BFF] transition-colors">
                      {sec.title}
                    </h3>
                    <div className="flex items-start gap-1.5 mt-2 text-xs font-bold text-[#007BFF]">
                      <span className="w-2 h-2 rounded-full bg-[#007BFF] shrink-0 mt-1" />
                      <span>Focus: {sec.focus}</span>
                    </div>
                  </div>

                  {/* Card Description */}
                  <p className="text-xs sm:text-[13px] font-medium text-[#64748B] leading-relaxed">
                    {sec.desc}
                  </p>

                  {/* Commercial Focus Areas Tag Pills */}
                  <div className="pt-2">
                    <div className="text-[10px] font-black uppercase tracking-wider text-[#94A3B8] mb-2">
                      COMMERCIAL FOCUS AREAS
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {sec.highlights.map((h) => (
                        <span
                          key={h}
                          className="inline-flex items-center gap-1.5 px-3 py-1 rounded-xl bg-[#F0F9FF] border border-[#BAE6FD]/60 text-[11px] font-semibold text-[#16324F] group-hover:border-[#007BFF]/30 transition-colors"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-[#007BFF]" />
                          {h}
                        </span>
                      ))}
                    </div>
                  </div>

                </div>

                {/* Bottom Card Action Footer — Explore Page Link */}
                <div className="relative z-10 pt-5 mt-4 border-t border-[#E0F2FE] flex items-center justify-between">
                  <span className="text-[11px] font-extrabold uppercase tracking-wider text-[#007BFF] group-hover:underline">
                    Explore Sector Page →
                  </span>
                  <div className="w-8 h-8 rounded-full border border-[#BAE6FD] group-hover:border-[#007BFF] group-hover:bg-[#007BFF] group-hover:text-white flex items-center justify-center text-[#007BFF] transition-all">
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>

              </a>
            );
          })}
        </div>

      </div>
    </section>
  );
}

