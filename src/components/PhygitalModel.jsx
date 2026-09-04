import React from 'react';
import { useModal } from '../context/ModalContext';

const bgImageUrl = "https://res.cloudinary.com/q1rn5v9m/image/upload/f_auto,q_auto/v1788412818/ChatGPT_Image_Sep_2_2026_10_19_23_PM.png";

const digitalPoints = [
  {
    icon: 'search',
    title: 'SEO & GEO',
    desc: 'Rank higher, Get discovered, Attract the right audience.',
  },
  {
    icon: 'share',
    title: 'LinkedIn & B2B Content',
    desc: 'Build authority and engage healthcare decision-makers.',
  },
  {
    icon: 'query_stats',
    title: 'Digital Demand Generation',
    desc: 'Targeted campaigns that generate qualified demand.',
  },
  {
    icon: 'person',
    title: 'Lead Qualification & Nurturing',
    desc: 'Nurture leads with insights and tailored engagement.',
  },
];

const physicalPoints = [
  {
    icon: 'domain',
    title: 'Hospital Outreach',
    desc: 'Connect with the right hospitals and decision-makers.',
  },
  {
    icon: 'co_present',
    title: 'Product Demonstrations',
    desc: 'Showcase value through live and impactful demos.',
  },
  {
    icon: 'groups',
    title: 'KOL & Clinical Engagement',
    desc: 'Engage key opinion leaders and clinical influencers.',
  },
  {
    icon: 'handshake',
    title: 'Institutional Business Development',
    desc: 'Build strong institutional partnerships and pipeline.',
  },
];

const processFlow = [
  { icon: 'search', label: 'Discover' },
  { icon: 'groups', label: 'Engage' },
  { icon: 'co_present', label: 'Demonstrate' },
  { icon: 'verified', label: 'Build Trust' },
  { icon: 'check_circle', label: 'Convert' },
  { icon: 'trending_up', label: 'Scale' },
];

export default function PhygitalModel() {
  const { openModal } = useModal();
  return (
    <section 
      id="phygital"
      className="relative w-full overflow-hidden bg-[#F2F8FD] border-b border-[#E0F2FE] py-14 sm:py-18 lg:py-20"
    >
      {/* Background Graphic Artwork */}
      <div 
        className="absolute inset-0 bg-cover sm:bg-contain bg-center bg-no-repeat z-0 pointer-events-none opacity-90 sm:opacity-95"
        style={{
          backgroundImage: `url('${bgImageUrl}')`,
          backgroundPosition: 'center center',
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 space-y-8 sm:space-y-10">
        
        {/* Section Header Top-Left aligned matching screenshot */}
        <div className="space-y-1.5 max-w-2xl text-left">
          <div className="text-xs sm:text-[13px] font-extrabold uppercase tracking-[0.18em] text-[#007BFF]">
             PHYGITAL GROWTH MODEL
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-black text-[#16324F] leading-[1.28] sm:leading-[1.3] tracking-tight">
            Digital Demand Meets{' '}
            <br />
            <span className="text-[#007BFF]">Real Healthcare</span> Market Access.
          </h2>

          <p className="text-xs sm:text-sm font-semibold text-[#64748B]">
            A connected approach to healthcare commercialization.
          </p>
        </div>

        {/* Top 3-Column Area: Left Digital Card | Center Doctor Space | Right Physical Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-center min-h-[380px] sm:min-h-[440px]">
          
          {/* LEFT: DIGITAL CARD (Blue Glass Card) */}
          <div className="lg:col-span-4 w-full max-w-[360px] mx-auto lg:mx-0 rounded-3xl bg-gradient-to-b from-white/95 to-[#EBF5FF]/90 backdrop-blur-md p-5 sm:p-6 border border-[#BAE6FD] shadow-[0_12px_32px_rgba(56,189,248,0.18)] space-y-4">
            
            {/* Header Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#007BFF] text-white text-[11px] font-black uppercase tracking-wider shadow-sm">
              <span className="material-symbols-outlined text-[15px]">language</span>
              DIGITAL
            </div>

            {/* 4 Feature Items */}
            <div className="space-y-3.5">
              {digitalPoints.map((item) => (
                <div key={item.title} className="flex items-start gap-3 group">
                  <div className="w-10 h-10 rounded-xl bg-white border border-[#BAE6FD] flex items-center justify-center text-[#007BFF] shrink-0 shadow-sm group-hover:bg-[#007BFF] group-hover:text-white transition-all">
                    <span className="material-symbols-outlined text-[20px]">
                      {item.icon}
                    </span>
                  </div>
                  <div>
                    <h4 className="text-[13px] sm:text-[13.5px] font-black text-[#16324F] group-hover:text-[#007BFF] transition-colors leading-tight">
                      {item.title}
                    </h4>
                    <p className="text-[11px] font-medium text-[#64748B] leading-snug mt-0.5">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

          </div>

          {/* CENTER: Open Area showcasing the Doctor & Mobile UI in Background */}
          <div className="hidden lg:block lg:col-span-4 h-full min-h-[360px] pointer-events-none" />

          {/* RIGHT: PHYSICAL CARD (Teal Glass Card) */}
          <div className="lg:col-span-4 w-full max-w-[360px] mx-auto lg:ml-auto lg:mr-0 rounded-3xl bg-gradient-to-b from-white/95 to-[#E6FAF7]/90 backdrop-blur-md p-5 sm:p-6 border border-[#99F6E4] shadow-[0_12px_32px_rgba(20,184,166,0.18)] space-y-4">
            
            {/* Header Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0D9488] text-white text-[11px] font-black uppercase tracking-wider shadow-sm">
              <span className="material-symbols-outlined text-[15px]">groups</span>
              PHYSICAL
            </div>

            {/* 4 Feature Items */}
            <div className="space-y-3.5">
              {physicalPoints.map((item) => (
                <div key={item.title} className="flex items-start gap-3 group">
                  <div className="w-10 h-10 rounded-xl bg-white border border-[#99F6E4] flex items-center justify-center text-[#0D9488] shrink-0 shadow-sm group-hover:bg-[#0D9488] group-hover:text-white transition-all">
                    <span className="material-symbols-outlined text-[20px]">
                      {item.icon}
                    </span>
                  </div>
                  <div>
                    <h4 className="text-[13px] sm:text-[13.5px] font-black text-[#16324F] group-hover:text-[#0D9488] transition-colors leading-tight">
                      {item.title}
                    </h4>
                    <p className="text-[11px] font-medium text-[#64748B] leading-snug mt-0.5">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

          </div>

        </div>

        {/* Lower 3-Column Area: Left Reach Card | Center Map Space | Right Phygital Brand Text */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center min-h-[160px] sm:min-h-[190px]">
          
          {/* LOWER LEFT: Nationwide Reach Card */}
          <div className="lg:col-span-5 w-full max-w-[390px] mx-auto lg:mx-0 rounded-2xl bg-white/95 backdrop-blur-md p-4 sm:p-5 border border-[#E0F2FE] shadow-md space-y-3">
            <h4 className="text-xs sm:text-[13px] font-black text-[#16324F] leading-snug">
              We empower teams across India to reach the right healthcare stakeholders.
            </h4>

            <div className="space-y-2">
              <div className="flex items-center gap-2.5 p-1.5 rounded-lg bg-[#F8FAFC]">
                <span className="material-symbols-outlined text-[#007BFF] text-[18px] shrink-0">
                  location_on
                </span>
                <span className="text-[10.5px] sm:text-[11px] font-bold text-[#16324F]">
                  Nationwide reach across hospitals and healthcare institutions.
                </span>
              </div>

              <div className="flex items-center gap-2.5 p-1.5 rounded-lg bg-[#F8FAFC]">
                <span className="material-symbols-outlined text-[#0D9488] text-[18px] shrink-0">
                  people
                </span>
                <span className="text-[10.5px] sm:text-[11px] font-bold text-[#16324F]">
                  Stronger connections with key decision-makers.
                </span>
              </div>

              <div className="flex items-center gap-2.5 p-1.5 rounded-lg bg-[#F8FAFC]">
                <span className="material-symbols-outlined text-[#007BFF] text-[18px] shrink-0">
                  chat
                </span>
                <span className="text-[10.5px] sm:text-[11px] font-bold text-[#16324F]">
                  Drive adoption and accelerate institutional revenue.
                </span>
              </div>
            </div>
          </div>

          {/* LOWER CENTER: Open Area showcasing the map in background */}
          <div className="hidden lg:block lg:col-span-3 h-full min-h-[160px] pointer-events-none" />

          {/* LOWER RIGHT: Brand Model Typography */}
          <div className="lg:col-span-4 text-center lg:text-left space-y-1.5 lg:pl-4">
            <h3 className="text-xl sm:text-2xl font-black text-[#16324F] tracking-tight leading-tight">
              MJD <span className="text-[#007BFF]">PHYGITAL</span> <br />
              GROWTH MODEL™
            </h3>
            <p className="text-xs sm:text-sm font-black text-[#0D9488]">
              Digital + Physical + Strategy
            </p>
            <p className="text-xs font-semibold text-[#64748B]">
              A Connected Healthcare Growth Engine.
            </p>
          </div>

        </div>

        {/* Bottom Connected Process Conduit Bar */}
        <div className="w-full pt-2">
          <div className="max-w-4xl mx-auto rounded-full bg-white/95 border border-[#CBD5E1] p-2 sm:p-2.5 shadow-sm flex items-center justify-between gap-1 overflow-x-auto">
            {processFlow.map((step, idx) => (
              <React.Fragment key={step.label}>
                <div 
                  onClick={() => openModal(`Phygital Model — ${step.label} Stage`)}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-full hover:bg-[#007BFF] hover:text-white transition-all cursor-pointer shrink-0 group"
                >
                  <span className="material-symbols-outlined text-[16px] text-[#007BFF] group-hover:text-white transition-colors">
                    {step.icon}
                  </span>
                  <span className="text-[11px] sm:text-xs font-black text-[#16324F] group-hover:text-white transition-colors">
                    {step.label}
                  </span>
                </div>

                {idx < processFlow.length - 1 && (
                  <span className="material-symbols-outlined text-[14px] text-[#94A3B8] shrink-0">
                    arrow_forward
                  </span>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
