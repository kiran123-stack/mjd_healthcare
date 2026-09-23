import React, { useState } from 'react';
import { useModal } from '../context/ModalContext';
import {
  TrendingUp,
  Building2,
  Users,
  ShieldCheck,
  ArrowRight,
  CheckCircle2,
  Briefcase,
  Network,
  Compass,
  ChevronDown,
  Activity,
  Layers,
  Search,
  Lock,
  Stethoscope,
  DollarSign,
  Award,
  Sparkles,
  Target,
  Zap,
  Check
} from 'lucide-react';

const IMAGES = {
  heroStrategy: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=1920&q=80",
  consultingMeeting: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1000&q=80",
  analyticsReview: "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=1000&q=80",
  medtechHardware: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=1000&q=80"
};

const aboutFaqs = [
  { q: "What is MJD Healthcare?", a: "MJD Healthcare is a healthcare-focused business consulting and growth company helping medical device, MedTech and healthcare businesses with market access, GTM strategy, business development, digital demand generation and Phygital growth." },
  { q: "Does MJD Healthcare work only with medical device companies?", a: "No. Our core expertise is healthcare, but we also work with healthcare startups, diagnostics, hospitals, healthcare providers, healthcare technology companies and healthcare service businesses." },
  { q: "What makes MJD Healthcare different from a healthcare marketing agency?", a: "MJD combines business strategy, market access, GTM, sales enablement and digital marketing. The focus is on building a commercial growth system rather than simply generating marketing activity." },
  { q: "Can MJD help a company launch a new healthcare product?", a: "Yes. MJD can support product positioning, market assessment, GTM planning, demand generation, institutional outreach, channel strategy and market activation." },
  { q: "Does MJD Healthcare provide services across India?", a: "Yes. MJD can support healthcare businesses targeting markets across India through a combination of digital and physical market development." },
  { q: "What type of companies should work with MJD Healthcare?", a: "Companies that are launching, entering a new market, expanding hospital penetration, developing channels, generating qualified leads or building a stronger healthcare growth strategy can benefit from MJD." }
];

export default function AboutPage({ onNavigateHome }) {
  const { openModal } = useModal();
  const [openFaq, setOpenFaq] = useState(null);
  const [activeQuestion, setActiveQuestion] = useState(0);
  const toggleFaq = (idx) => setOpenFaq(openFaq === idx ? null : idx);

  const stakeholders = [
    { gateIndex: 1, role: "Surgeons & Clinicians", typeLabel: "Clinical Efficacy Gate", IconComponent: Stethoscope, priority: "Clinical Efficacy, Safety & Ergonomics", obstacle: "Skeptical of marketing claims; requires peer-reviewed evidence, clinical endpoints, and peer surgeon validation.", solution: "KOL consensus building, clinical evidence dossiers, and hands-on wet-lab / OT demo facilitation." },
    { gateIndex: 2, role: "Biomedical Engineering", typeLabel: "Technical Compliance Gate", IconComponent: Activity, priority: "Safety, Calibration & Uptime SLAs", obstacle: "Rejects hardware without electrical safety clearance, AMC/CMC terms, calibration ease, and spare parts guarantees.", solution: "Pre-installation technical specification audits, engineer-to-engineer compliance briefings, and uptime SLAs." },
    { gateIndex: 3, role: "Value Analysis Committees", typeLabel: "Clinical Protocol Gate", IconComponent: ShieldCheck, priority: "Comparative Value vs Current Standard", obstacle: "Multi-disciplinary review boards that evaluate whether switching from existing suppliers justifies switching costs.", solution: "Health Economics & Outcomes Research (HEOR) alignment, risk-sharing proposals, and trial protocols." },
    { gateIndex: 4, role: "Distributor & Channel Partners", typeLabel: "Channel Delivery Gate", IconComponent: Network, priority: "Margin Health, Inventory & Pull", obstacle: "Hesitant to stock unproven brands without hospital pull, credit protection, and active rep field support.", solution: "Pre-qualified institutional demand pipeline, territory exclusivity agreements, and co-branded enablement." },
    { gateIndex: 5, role: "Hospital CFOs & Finance", typeLabel: "CapEx / Payback ROI Gate", IconComponent: DollarSign, priority: "CapEx vs. OpEx & Procedure Payback", obstacle: "Unwilling to commit capital without documented procedure billing potential and clear capital recovery periods.", solution: "Procedure volume ROI calculators, consumable recurring cost models, and flexible financing/lease framing." },
    { gateIndex: 6, role: "Procurement & Materials", typeLabel: "Commercial Terms Gate", IconComponent: Briefcase, priority: "Contract Terms, Codes & Credit Terms", obstacle: "Focuses on item codes, vendor reliability, payment credit terms, warranty coverage, and rate contracts.", solution: "Structured commercial dossiers, rate contract justification, and vendor onboarding compliance." },
    { gateIndex: 7, role: "Hospital C-Suite & CEOs", typeLabel: "Executive Governance Gate", IconComponent: Building2, priority: "Operational Excellence & Risk Mitigation", obstacle: "Balancing patient safety, accreditation compliance (NABH/JCI), and hospital-wide efficiency benchmarks.", solution: "Executive value briefings, cross-department impact modeling, and patient turnaround metrics." },
    { gateIndex: 8, role: "Tender & HTA Boards", typeLabel: "Institutional Tender Gate", IconComponent: Layers, priority: "Public Tenders, GeM & Compliance", obstacle: "Rigid tender criteria, GeM portal compliances, multi-tier bidding rules, and protracted bureaucratic reviews.", solution: "Tender specification alignment, regulatory documentation architecture, and public sector advisory." }
  ];

  const commercialQuestions = [
    { num: "01", q: "Where should we compete?", a: "We identify the right markets, territories, customer segments and institutional opportunities across India's Tier-1, Tier-2 and regional healthcare networks." },
    { num: "02", q: "How should we enter?", a: "We build practical Go-To-Market strategies around product positioning, pricing, channels, sales and market entry." },
    { num: "03", q: "How do we reach decision-makers?", a: "We create market access pathways across hospitals, healthcare institutions, distributors, government procurement and digital channels." },
    { num: "04", q: "How do we create demand?", a: "We combine digital marketing, content, SEO, AI-search visibility, lead generation and targeted outreach with physical market activation." },
    { num: "05", q: "How do we convert growth into revenue?", a: "We connect marketing with sales enablement, business development, channel development and measurable commercial outcomes." }
  ];

  return (
    <div className="bg-[#F8FAFC] text-[#0F172A] font-manrope selection:bg-[#007BFF]/20 selection:text-[#007BFF] overflow-x-hidden min-h-screen">
      
      {/* 1. Breadcrumb Navigation Bar */}
      <div className="bg-[#0B1528] border-b border-white/10 py-4 text-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 flex items-center justify-between text-xs sm:text-sm font-semibold">
          <div className="flex items-center gap-2 text-slate-300">
            <button
              type="button"
              onClick={onNavigateHome}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Home
            </button>
            <span className="text-slate-600">/</span>
            <span className="text-[#38BDF8] font-bold">About MJD Healthcare</span>
          </div>
          <div className="hidden sm:flex items-center gap-2 text-xs font-bold tracking-wider text-[#38BDF8] bg-white/10 px-4 py-2 rounded-full border border-white/15">
            <Compass className="w-4 h-4 text-[#38BDF8]" />
            <span className="uppercase">Healthcare Commercial Advisory</span>
          </div>
        </div>
      </div>

      {/* 2. Full Background Image Hero Section with High Accessibility Contrast */}
      <section className="relative w-full min-h-[640px] lg:min-h-[720px] flex flex-col justify-center overflow-hidden bg-[#0A1124] py-24 sm:py-32 lg:py-36">
        {/* Full-bleed executive strategy background image */}
        <div className="absolute inset-0">
          <img
            src={IMAGES.heroStrategy}
            alt="MJD Healthcare Executive Commercial Advisory"
            className="w-full h-full object-cover brightness-[0.32] contrast-125 scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0A1124]/90 via-[#0A1124]/80 to-[#0A1124]" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-6 sm:px-10 lg:px-16 text-center space-y-8">
          <div className="inline-flex items-center gap-2.5 text-xs sm:text-sm font-extrabold uppercase tracking-[0.25em] text-[#38BDF8] bg-white/10 backdrop-blur-md px-5 py-2.5 rounded-full border border-white/15">
            <span className="w-2.5 h-2.5 rounded-full bg-[#38BDF8] animate-pulse" />
            <span>About MJD Healthcare</span>
          </div>
          
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-[1.16] tracking-tight">
            Healthcare Growth Requires <span className="text-[#38BDF8]">More Than Marketing.</span>
          </h1>

          <p className="text-lg sm:text-xl text-slate-200 font-normal leading-relaxed max-w-4xl mx-auto">
            MJD Healthcare is a healthcare-focused business consulting and growth partner helping medical device manufacturers, MedTech companies, healthcare startups, diagnostics companies, hospitals, healthcare providers and healthcare brands build markets, generate demand and convert opportunities into sustainable business growth.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-5 pt-4">
            <button
              type="button"
              onClick={() => openModal('About Page CTA')}
              className="px-9 py-4 rounded-xl bg-[#007BFF] hover:bg-[#0069d9] text-white text-sm sm:text-base font-bold uppercase tracking-wider shadow-xl shadow-[#007BFF]/30 transition-all duration-300 cursor-pointer flex items-center gap-3 transform hover:-translate-y-0.5"
            >
              <span>Talk to Our Team</span>
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>

      {/* 3. 5 Critical Commercial Questions — Spacious Interactive Matrix */}
      <section className="py-24 sm:py-32 lg:py-36 bg-[#F8FAFC] border-b border-[#E2E8F0]">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
          <div className="max-w-3xl mb-16 sm:mb-20 space-y-4">
            <span className="text-xs sm:text-sm font-extrabold uppercase tracking-widest text-[#007BFF] block">
              WHAT WE DO
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0F172A] tracking-tight leading-tight">
              5 Critical Commercial Questions We Help Answer
            </h2>
            <p className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed">
              Click each commercial dimension to explore our resolution framework.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-stretch">
            {/* Left Interactive Dimension Tabs */}
            <div className="lg:col-span-5 space-y-4">
              {commercialQuestions.map((item, idx) => {
                const isActive = activeQuestion === idx;
                return (
                  <div
                    key={item.num}
                    onClick={() => setActiveQuestion(idx)}
                    className={`p-6 rounded-2xl border-2 transition-all duration-300 cursor-pointer flex items-center justify-between gap-5 select-none ${
                      isActive
                        ? 'bg-white border-[#007BFF] shadow-xl shadow-[#007BFF]/10 translate-x-2'
                        : 'bg-white/80 border-[#E2E8F0] hover:border-slate-300 hover:bg-white'
                    }`}
                  >
                    <div className="flex items-center gap-4">
                      <span className={`w-9 h-9 rounded-full text-xs sm:text-sm font-black flex items-center justify-center shrink-0 transition-colors ${
                        isActive ? 'bg-[#007BFF] text-white' : 'bg-[#E0F2FE] text-[#007BFF]'
                      }`}>
                        {item.num}
                      </span>
                      <span className={`text-base sm:text-lg font-bold tracking-tight ${
                        isActive ? 'text-[#007BFF]' : 'text-[#0F172A]'
                      }`}>
                        {item.q}
                      </span>
                    </div>
                    <ChevronDown className={`w-5 h-5 shrink-0 text-[#007BFF] transition-transform duration-300 ${isActive ? '-rotate-90' : ''}`} />
                  </div>
                );
              })}
            </div>

            {/* Right Large Detail Showcase Card */}
            <div className="lg:col-span-7 flex">
              <div className="w-full p-8 sm:p-12 rounded-3xl bg-[#0F172A] text-white shadow-2xl flex flex-col justify-between space-y-8 relative overflow-hidden border border-white/10">
                <div className="space-y-6 relative z-10">
                  <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#38BDF8] bg-white/10 px-3.5 py-1.5 rounded-full border border-white/15">
                    <span>DIMENSION {commercialQuestions[activeQuestion].num}</span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white leading-tight tracking-tight">
                    {commercialQuestions[activeQuestion].q}
                  </h3>
                  <p className="text-base sm:text-lg lg:text-xl text-slate-200 font-normal leading-relaxed pt-2">
                    {commercialQuestions[activeQuestion].a}
                  </p>
                </div>

                <div className="pt-8 border-t border-white/10 flex flex-wrap items-center justify-between gap-4 relative z-10">
                  <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#38BDF8]">
                    Commercial Impact Framework
                  </span>
                  <button
                    type="button"
                    onClick={() => openModal(`About Commercial Question: ${commercialQuestions[activeQuestion].q}`)}
                    className="px-6 py-3 rounded-xl bg-[#007BFF] hover:bg-[#0069d9] text-white text-xs sm:text-sm font-bold uppercase tracking-wider cursor-pointer inline-flex items-center gap-2.5 transition-all shadow-md"
                  >
                    <span>Assess Strategy</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Why MJD 5 Pillars — Spacious Bento Architecture */}
      <section className="py-24 sm:py-32 lg:py-36 bg-white border-b border-[#E2E8F0]">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
          <div className="max-w-3xl mb-16 sm:mb-20 space-y-4">
            <span className="text-xs sm:text-sm font-extrabold uppercase tracking-widest text-[#007BFF] block">
              WHY MJD HEALTHCARE?
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0F172A] tracking-tight leading-tight">
              5 Pillars of Commercial Competence
            </h2>
            <p className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed">
              Why healthcare leaders partner with MJD for strategic commercialization.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
            {[
              { num: "01", title: "Healthcare-focused", desc: "We understand the commercial complexity of healthcare, medical devices, MedTech and institutional selling.", icon: Stethoscope },
              { num: "02", title: "Strategy-led", desc: "We start with the business objective, target market and commercial opportunity—not with a social media calendar.", icon: Target },
              { num: "03", title: "Digital + Physical", desc: "We combine online visibility with real-world healthcare market activation.", icon: Layers },
              { num: "04", title: "Commercially focused", desc: "The objective is not simply more impressions or followers. The objective is market access, qualified opportunities, adoption and revenue growth.", icon: TrendingUp },
              { num: "05", title: "Execution-oriented", desc: "Strategy only creates value when it can be implemented. We therefore build practical strategies that can move from boardroom decisions to market execution.", icon: ShieldCheck, wide: true }
            ].map((p) => {
              const Icon = p.icon;
              return (
                <div 
                  key={p.num} 
                  className={`group relative p-8 sm:p-10 rounded-3xl bg-[#F8FAFC] border-2 border-[#E2E8F0] hover:border-[#007BFF] hover:bg-white hover:shadow-2xl hover:shadow-[#007BFF]/10 transition-all duration-300 flex flex-col justify-between transform hover:-translate-y-1.5 ${
                    p.wide ? 'md:col-span-2 lg:col-span-2 bg-gradient-to-br from-[#E0F2FE]/40 via-[#F8FAFC] to-white' : ''
                  }`}
                >
                  <div className="space-y-5">
                    <div className="flex items-center justify-between pb-4 border-b border-[#E2E8F0]">
                      <span className="text-xs font-bold uppercase tracking-wider text-[#007BFF] bg-[#E0F2FE] px-4 py-1.5 rounded-full border border-[#BAE6FD]">
                        PILLAR {p.num}
                      </span>
                      <div className="w-12 h-12 rounded-2xl bg-[#E0F2FE] text-[#007BFF] group-hover:bg-[#007BFF] group-hover:text-white flex items-center justify-center transition-all duration-300 shadow-sm">
                        <Icon className="w-6 h-6 transition-transform group-hover:scale-110" />
                      </div>
                    </div>
                    <h3 className="text-xl sm:text-2xl font-black text-[#0F172A] group-hover:text-[#007BFF] transition-colors">
                      {p.title}
                    </h3>
                    <p className="text-base text-slate-600 font-normal leading-relaxed">
                      {p.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 5. 8 Stakeholder Gates with Accessible Cards & Generous Padding */}
      <section className="py-24 sm:py-32 lg:py-36 bg-[#F8FAFC] border-b border-[#E2E8F0]">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
          <div className="max-w-3xl mb-16 sm:mb-20 space-y-4">
            <span className="text-xs sm:text-sm font-extrabold uppercase tracking-widest text-[#007BFF] block">
              INSTITUTIONAL CHALLENGE
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0F172A] tracking-tight leading-tight">
              Clearing the 8 Healthcare Buying Gatekeepers
            </h2>
            <p className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed">
              Navigating distinct hospital priorities, commercial hurdles, and MJD resolution pathways.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10">
            {stakeholders.map((s) => {
              const Icon = s.IconComponent;
              return (
                <div
                  key={s.gateIndex}
                  className="group bg-white rounded-3xl border-2 border-[#E2E8F0] hover:border-[#007BFF] p-8 sm:p-10 shadow-sm hover:shadow-xl transition-all duration-300 space-y-5 transform hover:-translate-y-1"
                >
                  <div className="flex items-center justify-between pb-4 border-b border-[#E2E8F0]">
                    <div className="flex flex-wrap items-center gap-2.5">
                      <span className="px-3.5 py-1.5 rounded-full bg-[#0F172A] text-[#38BDF8] text-xs font-black uppercase tracking-wider">
                        Gate 0{s.gateIndex}
                      </span>
                      <span className="text-xs font-bold text-[#007BFF] bg-[#E0F2FE] px-3.5 py-1.5 rounded-full border border-[#BAE6FD]">
                        {s.typeLabel}
                      </span>
                    </div>
                    <div className="w-12 h-12 rounded-2xl bg-[#E0F2FE] text-[#007BFF] group-hover:bg-[#007BFF] group-hover:text-white flex items-center justify-center transition-all duration-300 shadow-sm shrink-0">
                      <Icon className="w-6 h-6" />
                    </div>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-black text-[#0F172A] group-hover:text-[#007BFF] transition-colors">
                    {s.role}
                  </h3>
                  
                  <div className="text-sm font-semibold text-slate-600">
                    Priority: <strong className="text-[#0F172A]">{s.priority}</strong>
                  </div>

                  <div className="space-y-4 pt-2">
                    <div className="p-5 rounded-2xl bg-red-50/90 border border-red-200 text-sm font-normal text-slate-800 leading-relaxed">
                      <strong className="text-red-700 font-bold block mb-1.5 text-xs uppercase tracking-wider">
                        Commercial Obstacle:
                      </strong>
                      {s.obstacle}
                    </div>
                    <div className="p-5 rounded-2xl bg-[#F0F9FF] border border-[#BAE6FD] text-sm font-normal text-slate-800 leading-relaxed">
                      <strong className="text-[#007BFF] font-bold block mb-1.5 text-xs uppercase tracking-wider">
                        MJD Clearance Solution:
                      </strong>
                      {s.solution}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 6. Position Statement with High-Contrast Accessible Dark Navy Backdrop */}
      <section className="py-24 sm:py-32 bg-[#0F172A] text-white border-b border-white/10">
        <div className="max-w-4xl mx-auto px-6 sm:px-10 lg:px-16 text-center space-y-8">
          <span className="text-xs font-bold text-[#38BDF8] uppercase tracking-[0.25em] bg-white/10 px-4 py-1.5 rounded-full border border-white/15 inline-block">
            OUR POSITION
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-extrabold text-white leading-tight tracking-tight">
            We don't just market healthcare products.<br />
            <span className="text-[#38BDF8]">We build the commercial pathway that helps healthcare products reach the right market.</span>
          </h2>
          <div className="pt-4">
            <button
              type="button"
              onClick={() => openModal('About Bottom CTA')}
              className="px-9 py-4 rounded-xl bg-[#007BFF] hover:bg-[#0069d9] text-white text-sm sm:text-base font-bold uppercase tracking-wider cursor-pointer inline-flex items-center gap-3 shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-0.5"
            >
              <span>Talk to MJD Healthcare</span>
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>

      {/* 7. FAQs Section with Accessible Contrast and Large Text */}
      <section className="py-24 sm:py-32 bg-[#F8FAFC]">
        <div className="max-w-4xl mx-auto px-6 sm:px-10 lg:px-16">
          <div className="text-center mb-16 space-y-3">
            <span className="text-xs sm:text-sm font-extrabold uppercase tracking-widest text-[#007BFF] block">
              INQUIRIES
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0F172A] tracking-tight">
              Frequently Asked Questions
            </h2>
            <p className="text-base text-slate-600 font-normal">
              Direct insights into how MJD Healthcare structures strategic healthcare partnerships.
            </p>
          </div>

          <div className="space-y-4">
            {aboutFaqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={idx}
                  className={`bg-white rounded-2xl border transition-all duration-200 overflow-hidden ${
                    isOpen ? 'border-[#007BFF] shadow-md' : 'border-[#E2E8F0] hover:border-slate-300'
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => toggleFaq(idx)}
                    className="w-full p-6 sm:p-7 text-left font-bold text-[#0F172A] flex items-center justify-between gap-4 cursor-pointer hover:bg-slate-50/60 transition-colors"
                  >
                    <span className="text-base sm:text-lg lg:text-xl leading-snug">{faq.q}</span>
                    <ChevronDown className={`w-5 h-5 shrink-0 text-[#007BFF] transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
                  </button>
                  {isOpen && (
                    <div className="px-6 sm:px-7 pb-6 sm:pb-7 text-base text-slate-600 font-normal leading-relaxed border-t border-[#F1F5F9] pt-4">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

    </div>
  );
}


