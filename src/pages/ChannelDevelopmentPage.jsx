import React, { useState } from 'react';
import { useModal } from '../context/ModalContext';
import {
  Network,
  ArrowRight,
  CheckCircle2,
  ChevronDown,
  Building2,
  Users,
  Target,
  ShieldCheck,
  BarChart3,
  TrendingUp,
  Layers,
  Sparkles,
  ChevronsRight,
  Globe,
  Award,
  Zap
} from 'lucide-react';

const IMAGES = {
  // 1. Global Logistics and Cargo Distribution Infrastructure
  corporateArchitecture: 'https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=1400&q=80',
  // 2. Highway Distribution Interchange & Logistics Transit Telemetry
  distributionTelemetry: 'https://images.unsplash.com/photo-1519003722824-194d4455a60c?auto=format&fit=crop&w=1200&q=80',
  // 3. Distributor Partnership Agreement & Channel Contract Negotiation
  teamBriefing: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1200&q=80',
  // 4. Vast Transport Logistics Terminal at Dawn for Pan-India Reach
  clearHorizon: 'https://images.unsplash.com/photo-1506521781263-d8422e82f27a?auto=format&fit=crop&w=1200&q=80'
};

const channelFaqs = [
  { 
    q: "Can MJD help find medical device distributors in India?", 
    a: "Yes. MJD can support distributor identification and channel development based on the product, territory and target market." 
  },
  { 
    q: "How do you evaluate a healthcare distributor?", 
    a: "Evaluation can include territory coverage, hospital relationships, sales capability, product portfolio, infrastructure and strategic fit." 
  },
  { 
    q: "Can MJD help activate existing distributors?", 
    a: "Yes. MJD can support sales enablement, digital demand generation, account targeting and channel activation." 
  },
  { 
    q: "Should medical device companies use direct sales or distributors?", 
    a: "It depends on the product, territory, customer segment, sales cycle and commercial model. MJD can help evaluate the appropriate channel structure." 
  }
];

const channelServices = [
  {
    title: "Channel Strategy",
    desc: "Assess whether your business requires direct sales, distributors, regional partners, institutional partners, or hybrid models.",
    icon: Target,
    color: "#007BFF",
    tag: "Commercial Architecture",
    tagBg: "bg-[#E0F2FE]",
    tagText: "text-[#007BFF]",
    iconBg: "bg-[#E0F2FE]",
    iconColor: "text-[#007BFF]",
    borderHover: "hover:border-[#007BFF]"
  },
  {
    title: "Distributor Identification",
    desc: "Identify potential partners based on geography, product category, existing healthcare relationships, sales capability, and hospital access.",
    icon: Users,
    color: "#8B5CF6",
    tag: "Territory Scouting",
    tagBg: "bg-[#EDE9FE]",
    tagText: "text-[#7C3AED]",
    iconBg: "bg-[#EDE9FE]",
    iconColor: "text-[#7C3AED]",
    borderHover: "hover:border-[#8B5CF6]"
  },
  {
    title: "Partner Evaluation",
    desc: "Assess partners on market reach, product portfolio, customer base, sales team strength, infrastructure, territory strength, and strategic fit.",
    icon: ShieldCheck,
    color: "#F59E0B",
    tag: "Due Diligence",
    tagBg: "bg-[#FEF3C7]",
    tagText: "text-[#D97706]",
    iconBg: "bg-[#FEF3C7]",
    iconColor: "text-[#D97706]",
    borderHover: "hover:border-[#F59E0B]"
  },
  {
    title: "Distributor Onboarding",
    desc: "Structure product communication, sales materials, commercial positioning, territory priorities, lead-sharing processes, and sales enablement.",
    icon: Building2,
    color: "#10B981",
    tag: "Operational Governance",
    tagBg: "bg-[#D1FAE5]",
    tagText: "text-[#059669]",
    iconBg: "bg-[#D1FAE5]",
    iconColor: "text-[#059669]",
    borderHover: "hover:border-[#10B981]"
  },
  {
    title: "Channel Activation",
    desc: "Support partners with product presentations, digital campaigns, sales tools, lead generation, hospital targeting, and market activation.",
    icon: Network,
    color: "#F43F5E",
    tag: "Field Execution",
    tagBg: "bg-[#FFE4E6]",
    tagText: "text-[#E11D48]",
    iconBg: "bg-[#FFE4E6]",
    iconColor: "text-[#E11D48]",
    borderHover: "hover:border-[#F43F5E]"
  },
  {
    title: "Channel Performance KPIs",
    desc: "Establish clear metrics for new accounts, active customers, pipeline, product demonstrations, orders, and territory revenue growth.",
    icon: BarChart3,
    color: "#06B6D4",
    tag: "Revenue Telemetry",
    tagBg: "bg-[#CFFAFE]",
    tagText: "text-[#0891B2]",
    iconBg: "bg-[#CFFAFE]",
    iconColor: "text-[#0891B2]",
    borderHover: "hover:border-[#06B6D4]"
  }
];

const channelFrameworkStages = [
  { 
    step: "01", 
    name: "Channel Strategy", 
    detail: "Define model mix (Direct vs. Distributor vs. Hybrid) per target region.",
    color: "#007BFF"
  },
  { 
    step: "02", 
    name: "Partner Profiling", 
    detail: "Map & shortlist active distributors with relevant hospital access.",
    color: "#8B5CF6"
  },
  { 
    step: "03", 
    name: "Vetting & Selection", 
    detail: "Evaluate infrastructure, team strength, customer base & financial fit.",
    color: "#F59E0B"
  },
  { 
    step: "04", 
    name: "Enablement & Onboarding", 
    detail: "Equip sales teams with pitch decks, clinical data & demonstration protocols.",
    color: "#10B981"
  },
  { 
    step: "05", 
    name: "Growth & KPIs", 
    detail: "Track account conversion, quarterly targets & re-order frequency.",
    color: "#F43F5E"
  }
];

export default function ChannelDevelopmentPage({ onNavigateHome }) {
  const { openModal } = useModal();
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (idx) => setOpenFaq(openFaq === idx ? null : idx);

  return (
    <div className="bg-[#F8FAFC] text-[#16324F] font-manrope selection:bg-[#38BDF8]/20 selection:text-[#0284C7] overflow-x-hidden">
      
      {/* 1. Breadcrumb & Navigation */}
      <div className="bg-white border-b border-[#E0F2FE] py-4 sticky top-0 z-30 shadow-sm backdrop-blur-md bg-white/95">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 flex items-center justify-between text-xs sm:text-sm font-bold text-[#64748B]">
          <div className="flex items-center gap-2">
            <button type="button" onClick={onNavigateHome} className="hover:text-[#007BFF] transition-colors cursor-pointer">
              Home
            </button>
            <span className="text-[#CBD5E1]">/</span>
            <span className="text-[#64748B]">Services</span>
            <span className="text-[#CBD5E1]">/</span>
            <span className="text-[#007BFF] font-black uppercase tracking-wider">Channel &amp; Distributor Development</span>
          </div>
          <div className="hidden sm:flex items-center gap-2 text-xs uppercase tracking-widest text-[#007BFF] font-extrabold bg-[#E0F2FE] px-4 py-1.5 rounded-full border border-[#BAE6FD]">
            <Network className="w-4 h-4 text-[#007BFF]" />
            <span>Channel Strategy Practice</span>
          </div>
        </div>
      </div>

      {/* 2. Hero Section: Full Architectural Background + Rich Spatial Cadence */}
      <section className="relative w-full bg-[#16324F] text-white py-28 sm:py-36 lg:py-40 overflow-hidden">
        {/* Architectural Image 1 (Full-Bleed Header Background with Accessible Navy Scrim) */}
        <div className="absolute inset-0 z-0">
          <img
            src={IMAGES.corporateArchitecture}
            alt="Modern corporate glass architecture"
            className="w-full h-full object-cover object-center opacity-25 filter grayscale contrast-125"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#16324F] via-[#16324F]/95 to-[#16324F]/85" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left Column: Heading & Copy */}
            <div className="lg:col-span-7 space-y-8 animate-slide-left">
              <div className="inline-flex items-center gap-3">
                <span className="px-4 py-2 rounded-full bg-[#38BDF8]/20 text-[#38BDF8] border border-[#38BDF8]/40 text-xs sm:text-sm font-extrabold uppercase tracking-[0.2em]">
                  Channel &amp; Distributor Development
                </span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-[1.12] tracking-tight">
                Build a Channel That Can <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#38BDF8] to-[#00D2FF]">Actually Grow Your Market.</span>
              </h1>

              <p className="text-base sm:text-lg lg:text-xl text-white/80 font-medium leading-relaxed max-w-2xl">
                The right distributor can accelerate market entry. The wrong distributor can slow it down. MJD Healthcare helps healthcare and medical device companies build structured, high-performing channel strategies across regional hospital networks in India.
              </p>

              <div className="flex flex-wrap items-center gap-4 pt-4">
                <button
                  type="button"
                  onClick={() => openModal('Channel Assessment Request')}
                  className="px-9 py-4.5 rounded-xl bg-[#007BFF] hover:bg-[#0056b3] text-white text-xs sm:text-sm font-extrabold uppercase tracking-wider shadow-2xl shadow-[#007BFF]/40 hover:shadow-[#007BFF]/60 hover:scale-105 transition-all duration-300 cursor-pointer flex items-center gap-3 group"
                >
                  <span>Structure Channel Network</span>
                  <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1.5 transition-transform" />
                </button>
              </div>
            </div>

            {/* Right Column: Visual Image 2 (Earth Globe Digital Network) with Overlapping Metric Chips */}
            <div className="lg:col-span-5 relative flex justify-center animate-slide-right">
              
              <div className="relative w-full max-w-md rounded-3xl overflow-hidden shadow-2xl border-4 border-white/20 bg-[#0A1128] group">
                <img
                  src={IMAGES.distributionTelemetry}
                  alt="High-speed highway distribution network and regional healthcare supply chain transit"
                  className="w-full h-80 sm:h-96 object-cover object-center transform group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#16324F] via-transparent to-transparent opacity-80" />

                {/* Floating Metric Badge 1: Top Right */}
                <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-md rounded-2xl p-3.5 shadow-xl border border-white/40 flex items-center gap-3 transform hover:scale-105 transition-transform">
                  <div className="w-10 h-10 rounded-xl bg-[#007BFF]/10 flex items-center justify-center text-[#007BFF]">
                    <Building2 className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[10px] font-black uppercase text-[#64748B] tracking-wider">Hospital Coverage</div>
                    <div className="text-base font-black text-[#16324F]">Tier-1 &amp; 2 Networks</div>
                  </div>
                </div>

                {/* Floating Metric Badge 2: Bottom Left */}
                <div className="absolute bottom-4 left-4 right-4 bg-[#16324F]/90 backdrop-blur-md rounded-2xl p-4 border border-white/20 text-white shadow-2xl">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-xs font-bold text-[#38BDF8] uppercase tracking-wider">Regional Distribution</div>
                      <div className="text-lg font-black text-white">Pan-India Channel Reach</div>
                    </div>
                    <div className="w-9 h-9 rounded-full bg-[#10B981]/20 border border-[#10B981]/40 flex items-center justify-center text-[#10B981]">
                      <CheckCircle2 className="w-5 h-5" />
                    </div>
                  </div>
                  <div className="w-full bg-white/10 h-1.5 rounded-full mt-3 overflow-hidden">
                    <div className="bg-gradient-to-r from-[#007BFF] to-[#38BDF8] h-full w-[95%]" />
                  </div>
                </div>
              </div>

            </div>

          </div>

          {/* 3 Value Pillars (Locked Content) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16 pt-12 border-t border-white/10">
            <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm space-y-2 hover:bg-white/10 transition-all">
              <div className="flex items-center justify-between text-[#38BDF8] mb-1">
                <span className="text-xs font-black uppercase tracking-widest">01 / ACCESS</span>
                <Building2 className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-black text-white">Hospital Network Reach</h3>
              <p className="text-sm text-white/70 font-medium leading-relaxed">
                Connect with specialized distributors with established access to Tier-1 and Tier-2 hospital networks.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm space-y-2 hover:bg-white/10 transition-all">
              <div className="flex items-center justify-between text-[#38BDF8] mb-1">
                <span className="text-xs font-black uppercase tracking-widest">02 / GOVERNANCE</span>
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-black text-white">Vetted Partner Selection</h3>
              <p className="text-sm text-white/70 font-medium leading-relaxed">
                Rigorously evaluate partners on infrastructure, customer base, sales capability, and financial stability.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm space-y-2 hover:bg-white/10 transition-all">
              <div className="flex items-center justify-between text-[#38BDF8] mb-1">
                <span className="text-xs font-black uppercase tracking-widest">03 / VELOCITY</span>
                <BarChart3 className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-black text-white">KPI-Driven Activation</h3>
              <p className="text-sm text-white/70 font-medium leading-relaxed">
                Empower partners with sales collateral, lead pipelines, product onboarding, and quantitative growth targets.
              </p>
            </div>
          </div>

        </div>

        {/* Seamless Organic Wave Shape Divider */}
        <div className="absolute bottom-0 left-0 right-0 w-full overflow-hidden leading-none z-10 pointer-events-none">
          <svg
            className="relative block w-full h-12 sm:h-16 lg:h-20 text-[#F8FAFC]"
            viewBox="0 0 1000 100"
            preserveAspectRatio="none"
          >
            <path
              fill="currentColor"
              d="M500,97C126.7,96.3,0.8,19.8,0,0v100l1000,0V1C1000,19.4,873.3,97.8,500,97z"
            />
          </svg>
        </div>
      </section>

      {/* 3. Stat Counter Banner */}
      <section className="relative z-20 -mt-8 sm:-mt-10 max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          
          <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-xl border border-[#E0F2FE] hover:border-[#007BFF] transition-all transform hover:-translate-y-1">
            <div className="w-12 h-12 rounded-full bg-[#E0F2FE] text-[#007BFF] flex items-center justify-center mb-4 font-black">
              <Building2 className="w-6 h-6" />
            </div>
            <div className="text-3xl sm:text-4xl font-black text-[#16324F] tracking-tight">100+</div>
            <div className="text-xs sm:text-sm font-bold text-[#64748B] mt-1 uppercase tracking-wider">Hospitals Mapped</div>
            <p className="text-xs text-[#94A3B8] mt-2 leading-relaxed">Across tertiary networks and regional medical centers.</p>
          </div>

          <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-xl border border-[#E0F2FE] hover:border-[#8B5CF6] transition-all transform hover:-translate-y-1">
            <div className="w-12 h-12 rounded-full bg-[#EDE9FE] text-[#8B5CF6] flex items-center justify-center mb-4 font-black">
              <TrendingUp className="w-6 h-6" />
            </div>
            <div className="text-3xl sm:text-4xl font-black text-[#16324F] tracking-tight">4.2x</div>
            <div className="text-xs sm:text-sm font-bold text-[#64748B] mt-1 uppercase tracking-wider">Faster Clearance</div>
            <p className="text-xs text-[#94A3B8] mt-2 leading-relaxed">Accelerating partner onboarding and hospital rate contracts.</p>
          </div>

          <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-xl border border-[#E0F2FE] hover:border-[#10B981] transition-all transform hover:-translate-y-1">
            <div className="w-12 h-12 rounded-full bg-[#D1FAE5] text-[#10B981] flex items-center justify-center mb-4 font-black">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div className="text-3xl sm:text-4xl font-black text-[#16324F] tracking-tight">95%</div>
            <div className="text-xs sm:text-sm font-bold text-[#64748B] mt-1 uppercase tracking-wider">Network Coverage</div>
            <p className="text-xs text-[#94A3B8] mt-2 leading-relaxed">Spanning Tier-1 metros and key Tier-2 healthcare clusters.</p>
          </div>

          <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-xl border border-[#E0F2FE] hover:border-[#F59E0B] transition-all transform hover:-translate-y-1">
            <div className="w-12 h-12 rounded-full bg-[#FEF3C7] text-[#D97706] flex items-center justify-center mb-4 font-black">
              <Award className="w-6 h-6" />
            </div>
            <div className="text-3xl sm:text-4xl font-black text-[#16324F] tracking-tight">10+</div>
            <div className="text-xs sm:text-sm font-bold text-[#64748B] mt-1 uppercase tracking-wider">Years Experience</div>
            <p className="text-xs text-[#94A3B8] mt-2 leading-relaxed">In medical device distribution and commercial governance.</p>
          </div>

        </div>
      </section>

      {/* 4. Conversational Side-by-Side "Talk-Through" Narrative Section */}
      <section className="py-24 sm:py-32 lg:py-36">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left Side: Editorial Image 3 (Collaborative Executive Strategy Team) */}
            <div className="lg:col-span-6 relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-white group">
                <img
                  src={IMAGES.teamBriefing}
                  alt="Executive consulting and medical device channel partner briefing"
                  className="w-full h-[400px] sm:h-[480px] object-cover object-center transform group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#16324F]/80 via-transparent to-transparent" />
                
                {/* Floating Consultation Trigger Card */}
                <div className="absolute bottom-6 left-6 right-6 p-5 rounded-2xl bg-white/95 backdrop-blur-md shadow-2xl border border-[#E0F2FE] flex items-center justify-between gap-4">
                  <div className="flex items-center gap-3.5">
                    <div className="w-12 h-12 rounded-xl bg-[#007BFF] text-white flex items-center justify-center shrink-0 shadow-md">
                      <Network className="w-6 h-6" />
                    </div>
                    <div>
                      <span className="text-[11px] font-black uppercase tracking-wider text-[#007BFF] block">Channel Strategy</span>
                      <span className="text-sm font-black text-[#16324F]">Distributor Network Review</span>
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={() => openModal('Distributor Network Assessment')}
                    className="p-3 rounded-xl bg-[#F0F9FF] hover:bg-[#E0F2FE] text-[#007BFF] transition-colors cursor-pointer shrink-0"
                    aria-label="Request channel assessment"
                  >
                    <ChevronsRight className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* Decorative Background Glow */}
              <div className="absolute -bottom-8 -left-8 w-64 h-64 bg-[#007BFF]/10 rounded-full filter blur-3xl -z-10" />
            </div>

            {/* Right Side: Conversational Editorial Storytelling */}
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-widest text-[#007BFF] bg-[#E0F2FE] px-3.5 py-1.5 rounded-full border border-[#BAE6FD]">
                <Sparkles className="w-3.5 h-3.5 text-[#007BFF]" />
                <span>The Distribution Imperative</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-black text-[#16324F] leading-tight tracking-tight">
                Why Great Medical Technologies Stall at the <span className="text-[#007BFF]">Distributor Tier.</span>
              </h2>

              <p className="text-base sm:text-lg text-[#475569] font-medium leading-relaxed">
                Traditional surgical stockists often treat innovative devices as passive catalogue items. Without active clinical engagement and disciplined governance, channel partners default to mature commodities, leading to margin leakage and stalled regional hospital penetration. MJD Healthcare structures distributor partnerships with clear commercial covenants, clinical training, and pipeline visibility.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-4.5 rounded-2xl bg-white border border-[#E0F2FE] shadow-sm hover:shadow-md transition-shadow flex items-start gap-3">
                  <div className="w-7 h-7 rounded-lg bg-[#E0F2FE] text-[#007BFF] flex items-center justify-center shrink-0 mt-0.5">
                    <ChevronsRight className="w-4 h-4" />
                  </div>
                  <p className="text-xs sm:text-sm font-bold text-[#16324F] leading-snug">
                    Shifts distributors from passive catalogue stockists into proactive clinical demand creators.
                  </p>
                </div>

                <div className="p-4.5 rounded-2xl bg-white border border-[#E0F2FE] shadow-sm hover:shadow-md transition-shadow flex items-start gap-3">
                  <div className="w-7 h-7 rounded-lg bg-[#EDE9FE] text-[#8B5CF6] flex items-center justify-center shrink-0 mt-0.5">
                    <ChevronsRight className="w-4 h-4" />
                  </div>
                  <p className="text-xs sm:text-sm font-bold text-[#16324F] leading-snug">
                    Establishes clear tiered margin models that protect profitability during hospital price negotiations.
                  </p>
                </div>

                <div className="p-4.5 rounded-2xl bg-white border border-[#E0F2FE] shadow-sm hover:shadow-md transition-shadow flex items-start gap-3">
                  <div className="w-7 h-7 rounded-lg bg-[#D1FAE5] text-[#10B981] flex items-center justify-center shrink-0 mt-0.5">
                    <ChevronsRight className="w-4 h-4" />
                  </div>
                  <p className="text-xs sm:text-sm font-bold text-[#16324F] leading-snug">
                    Integrates CDSCO compliance, cold-chain integrity, and ethical sales standards across secondary distributors.
                  </p>
                </div>

                <div className="p-4.5 rounded-2xl bg-white border border-[#E0F2FE] shadow-sm hover:shadow-md transition-shadow flex items-start gap-3">
                  <div className="w-7 h-7 rounded-lg bg-[#FEF3C7] text-[#D97706] flex items-center justify-center shrink-0 mt-0.5">
                    <ChevronsRight className="w-4 h-4" />
                  </div>
                  <p className="text-xs sm:text-sm font-bold text-[#16324F] leading-snug">
                    Synchronizes manufacturer clinical specialists with distributor sales reps for rapid OT evaluations.
                  </p>
                </div>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* 5. 6 Core Channel Services (Vibrant Multi-Colored Cards with 64px Circular Icon Containers) */}
      <section className="py-24 sm:py-32 bg-white border-y border-[#E0F2FE]">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
          
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="text-xs font-extrabold uppercase tracking-widest text-[#007BFF] bg-[#E0F2FE] px-4 py-1.5 rounded-full border border-[#BAE6FD]">
              OUR CHANNEL SERVICES
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#16324F] tracking-tight">
              End-to-End Distribution Architecture
            </h2>
            <p className="text-base sm:text-lg text-[#64748B] font-medium leading-relaxed">
              We structure every layer of your healthcare distribution network—from partner diligence to contract governance and hospital account execution.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {channelServices.map((service, idx) => {
              const IconComponent = service.icon;
              return (
                <div
                  key={service.title}
                  className={`relative bg-[#F8FAFC] rounded-3xl p-8 border-2 border-[#E2E8F0] ${service.borderHover} hover:bg-white hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 flex flex-col justify-between group overflow-hidden`}
                >
                  {/* Top Color Accent Line */}
                  <div
                    className="absolute top-0 left-0 right-0 h-1.5 transition-all duration-300 group-hover:h-2"
                    style={{ backgroundColor: service.color }}
                  />

                  <div>
                    {/* Header Row: 64px Icon Container & Number */}
                    <div className="flex items-center justify-between mb-6">
                      <div className={`w-16 h-16 rounded-2xl ${service.iconBg} ${service.iconColor} flex items-center justify-center shadow-md group-hover:scale-110 transition-transform duration-300`}>
                        <IconComponent className="w-8 h-8" />
                      </div>
                      <span className="text-3xl font-black text-[#94A3B8] font-mono group-hover:text-[#16324F] transition-colors">
                        0{idx + 1}
                      </span>
                    </div>

                    {/* Tag Badge */}
                    <div className="mb-3">
                      <span className={`text-[11px] font-black uppercase tracking-wider px-3 py-1 rounded-full ${service.tagBg} ${service.tagText}`}>
                        {service.tag}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-black text-[#16324F] mb-3 tracking-tight group-hover:text-[#007BFF] transition-colors">
                      {service.title}
                    </h3>

                    {/* Description */}
                    <p className="text-xs sm:text-sm text-[#64748B] font-medium leading-relaxed">
                      {service.desc}
                    </p>
                  </div>

                  <div className="pt-6 mt-6 border-t border-[#E2E8F0] flex items-center justify-between text-xs font-bold text-[#64748B]">
                    <span>Module 0{idx + 1} of 06</span>
                    <span className="text-[#007BFF] font-black flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                      Channel Capability <ChevronsRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* 6. 5-Stage Channel Development Framework */}
      <section className="py-24 sm:py-32 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
          
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="text-xs font-extrabold uppercase tracking-widest text-[#007BFF] bg-[#E0F2FE] px-4 py-1.5 rounded-full border border-[#BAE6FD]">
              EXECUTION ROADMAP
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#16324F] tracking-tight">
              5-Stage Channel Development Framework
            </h2>
            <p className="text-base sm:text-lg text-[#64748B] font-medium leading-relaxed">
              A structured, sequential methodology for establishing, qualifying, and scaling healthcare distribution partners.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {channelFrameworkStages.map((stage, idx) => (
              <div 
                key={stage.step}
                className="relative bg-white rounded-3xl p-6 sm:p-7 border-2 border-[#E2E8F0] hover:border-[#007BFF] shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 flex flex-col justify-between group overflow-hidden"
              >
                <div 
                  className="absolute top-0 left-0 right-0 h-1.5 group-hover:h-2 transition-all duration-300"
                  style={{ backgroundColor: stage.color }}
                />

                <div>
                  <span 
                    className="font-mono text-3xl font-black block mb-3"
                    style={{ color: stage.color }}
                  >
                    {stage.step}
                  </span>
                  
                  <h4 className="text-lg font-black text-[#16324F] mb-2 tracking-tight group-hover:text-[#007BFF] transition-colors">
                    {stage.name}
                  </h4>
                  
                  <p className="text-xs sm:text-sm text-[#64748B] font-medium leading-relaxed">
                    {stage.detail}
                  </p>
                </div>

                <div className="pt-4 mt-6 border-t border-[#F1F5F9] flex items-center justify-between text-[11px] font-extrabold text-[#94A3B8]">
                  <span>Stage {stage.step}</span>
                  <span className="text-[#007BFF] flex items-center gap-0.5 group-hover:translate-x-0.5 transition-transform">
                    Next <ChevronsRight className="w-3 h-3" />
                  </span>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 7. Serene Ocean Horizon Metaphor Section (Image 4: Broad Commercial Clarity) */}
      <section className="relative py-28 sm:py-36 bg-[#0A1128] text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={IMAGES.clearHorizon}
            alt="Pristine ocean horizon metaphor for clear channel reach and regional coverage"
            className="w-full h-full object-cover object-center opacity-30 filter contrast-125"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0A1128] via-[#0A1128]/70 to-[#0A1128]" />
        </div>

        <div className="max-w-5xl mx-auto px-4 sm:px-8 lg:px-12 relative z-10 text-center space-y-8">
          <div className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-widest text-[#38BDF8] bg-[#38BDF8]/20 px-4 py-2 rounded-full border border-[#38BDF8]/40">
            <Globe className="w-4 h-4 text-[#38BDF8]" />
            <span>Regional Clarity &amp; Reach</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight">
            When Distribution Is Structured Right, Market Scale Becomes Predictable.
          </h2>

          <p className="text-base sm:text-lg lg:text-xl text-white/85 font-medium leading-relaxed max-w-3xl mx-auto">
            Navigating complex regional healthcare markets requires clear partner governance. When distributors have the right incentives, clinical collateral, and territory exclusivity, your hospital adoption compounds sustainably.
          </p>

          <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
            <button
              type="button"
              onClick={() => openModal('Channel Horizon Briefing')}
              className="px-8 py-4 rounded-xl bg-[#007BFF] hover:bg-[#0056b3] text-white text-xs sm:text-sm font-extrabold uppercase tracking-wider shadow-2xl shadow-[#007BFF]/50 hover:scale-105 transition-all duration-300 cursor-pointer flex items-center gap-3"
            >
              <span>Map Your Distribution Network</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* 8. Frequently Asked Questions (4 Accessible Accordions) */}
      <section className="py-24 sm:py-32 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-8 lg:px-12">
          
          <div className="text-center mb-16 space-y-3">
            <span className="text-xs font-extrabold uppercase tracking-widest text-[#007BFF] bg-[#E0F2FE] px-4 py-1.5 rounded-full border border-[#BAE6FD]">
              INQUIRIES
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-[#16324F]">Frequently Asked Questions</h2>
            <p className="text-sm sm:text-base text-[#64748B] font-medium">
              Common questions regarding healthcare channel structuring, distributor due diligence, and regional activation.
            </p>
          </div>

          <div className="space-y-4">
            {channelFaqs.map((faq, idx) => (
              <div 
                key={idx} 
                className="bg-[#F8FAFC] rounded-2xl border-2 border-[#E2E8F0] hover:border-[#007BFF] transition-all duration-300 overflow-hidden shadow-sm"
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(idx)}
                  className="w-full p-6 text-left font-black text-[#16324F] flex items-center justify-between gap-4 cursor-pointer group"
                >
                  <span className="text-base sm:text-lg group-hover:text-[#007BFF] transition-colors">{faq.q}</span>
                  <div className={`w-8 h-8 rounded-full bg-white flex items-center justify-center shrink-0 border border-[#E2E8F0] group-hover:border-[#007BFF] transition-transform duration-300 ${openFaq === idx ? 'rotate-180 bg-[#007BFF] text-white' : 'text-[#007BFF]'}`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>
                {openFaq === idx && (
                  <div className="px-6 pb-6 text-sm text-[#475569] font-medium leading-relaxed border-t border-[#E2E8F0] pt-4 bg-white">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 9. Executive Conversion Banner */}
      <section className="py-20 bg-[#F8FAFC]">
        <div className="max-w-5xl mx-auto px-4 sm:px-8 lg:px-12">
          
          <div className="p-10 sm:p-14 lg:p-16 rounded-3xl bg-[#16324F] text-white text-center shadow-2xl border-2 border-white/10 space-y-6 relative overflow-hidden">
            <div className="absolute -right-16 -bottom-16 w-64 h-64 bg-[#007BFF]/20 rounded-full filter blur-3xl" />
            <div className="absolute -left-16 -top-16 w-64 h-64 bg-[#38BDF8]/20 rounded-full filter blur-3xl" />
            
            <div className="relative z-10 space-y-4">
              <span className="text-xs font-black uppercase tracking-widest text-[#38BDF8] bg-white/10 px-4 py-1.5 rounded-full border border-white/20">
                COMMERCIAL SCALE
              </span>

              <h3 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
                Build Your Distribution Network
              </h3>

              <p className="text-base sm:text-lg text-white/80 font-medium max-w-2xl mx-auto leading-relaxed">
                Identify and activate specialized medical device distributors across key hospital clusters.
              </p>

              <div className="pt-6 flex flex-col sm:flex-row items-center justify-center gap-4">
                <button
                  type="button"
                  onClick={() => openModal('Channel Page CTA')}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-[#007BFF] hover:bg-[#0066d6] text-white text-xs sm:text-sm font-extrabold uppercase tracking-wider shadow-lg shadow-[#007BFF]/25 hover:shadow-xl transition-all duration-200 cursor-pointer"
                >
                  <span>Talk to MJD Healthcare</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
}
