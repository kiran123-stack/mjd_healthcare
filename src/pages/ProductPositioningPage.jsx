import React, { useState } from 'react';
import { useModal } from '../context/ModalContext';
import {
  Target,
  ArrowRight,
  ChevronDown,
  FileCheck,
  Zap,
  TrendingUp,
  Layers,
  Award,
  ShieldCheck,
  Users,
  Compass,
  Globe,
  CheckCircle2,
  ChevronsRight,
  Sparkles,
  Building2,
  Activity,
  Play
} from 'lucide-react';

const IMAGES = {
  // 1. Modern Futuristic Twilight Glass Innovation Headquarters
  corporateArchitecture: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1400&q=80',
  // 2. High-Precision Clinical Device Engineering & Lab Diagnostics
  medtechInnovation: 'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&w=1200&q=80',
  // 3. Clinical Leadership & Positioning Strategy Executive Summit
  teamBriefing: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=1200&q=80',
  // 4. Commercial Takeoff / Boundless Market Horizon Above the Clouds
  clearHorizon: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=1200&q=80'
};

const positioningFaqs = [
  { 
    q: "What is product positioning in healthcare?", 
    a: "Healthcare product positioning defines how a product should be understood, differentiated and valued by its target customers and stakeholders." 
  },
  { 
    q: "Can MJD position medical devices?", 
    a: "Yes. MJD specializes in translating technical medical device capabilities into market-specific commercial messaging." 
  },
  { 
    q: "What is healthcare product commercialization?", 
    a: "Commercialization is the process of taking a healthcare product from product readiness into the market through positioning, GTM, demand generation, sales, market access and adoption." 
  },
  { 
    q: "Can MJD support new product launches?", 
    a: "Yes. MJD can support product positioning, launch strategy, demand generation, sales enablement and market activation." 
  }
];

const positioningFrameworkPoints = [
  { 
    num: "01", 
    title: "PRODUCT", 
    question: "What does it do technically?",
    desc: "Deconstruct engineering, mechanism of action, software architecture, and raw device parameters into structured capability definitions.",
    color: "#007BFF",
    tag: "Core Capability",
    tagBg: "bg-[#E0F2FE]",
    tagText: "text-[#007BFF]",
    iconBg: "bg-[#E0F2FE]",
    iconColor: "text-[#007BFF]",
    borderHover: "hover:border-[#007BFF]",
    icon: Layers
  },
  { 
    num: "02", 
    title: "CUSTOMER", 
    question: "Who specifically needs it across clinicians, surgeons, and hospital teams?",
    desc: "Segment exact clinical users, OT managers, biomedical evaluators, department heads, and C-suite hospital budget holders.",
    color: "#8B5CF6",
    tag: "Stakeholder Matrix",
    tagBg: "bg-[#EDE9FE]",
    tagText: "text-[#7C3AED]",
    iconBg: "bg-[#EDE9FE]",
    iconColor: "text-[#7C3AED]",
    borderHover: "hover:border-[#8B5CF6]",
    icon: Users
  },
  { 
    num: "03", 
    title: "PROBLEM", 
    question: "What clinical or operational problem does it solve?",
    desc: "Clarify the precise friction point: diagnostic delays, surgical complication risks, equipment downtime, or unsustainable operational expenditure.",
    color: "#F59E0B",
    tag: "Clinical Pain Point",
    tagBg: "bg-[#FEF3C7]",
    tagText: "text-[#D97706]",
    iconBg: "bg-[#FEF3C7]",
    iconColor: "text-[#D97706]",
    borderHover: "hover:border-[#F59E0B]",
    icon: Zap
  },
  { 
    num: "04", 
    title: "VALUE", 
    question: "What measurable outcomes or financial changes occur for the customer?",
    desc: "Quantify surgical recovery time reductions, bed turnover velocity, DRG reimbursement margin expansion, and cost-per-procedure savings.",
    color: "#10B981",
    tag: "Economic Payback",
    tagBg: "bg-[#D1FAE5]",
    tagText: "text-[#059669]",
    iconBg: "bg-[#D1FAE5]",
    iconColor: "text-[#059669]",
    borderHover: "hover:border-[#10B981]",
    icon: TrendingUp
  },
  { 
    num: "05", 
    title: "DIFFERENTIATION", 
    question: "Why choose this product instead of existing standard alternatives?",
    desc: "Isolate competitive moats against incumbent market leaders, obsolete procedural standards, and lower-cost commoditized alternatives.",
    color: "#F43F5E",
    tag: "Competitive Moat",
    tagBg: "bg-[#FFE4E6]",
    tagText: "text-[#E11D48]",
    iconBg: "bg-[#FFE4E6]",
    iconColor: "text-[#E11D48]",
    borderHover: "hover:border-[#F43F5E]",
    icon: Award
  },
  { 
    num: "06", 
    title: "PROOF", 
    question: "What clinical evidence, trials, or peer validation support the claims?",
    desc: "Assemble multicenter trial registries, peer-reviewed journals, KOL case studies, regulatory clearances, and bench-test validations.",
    color: "#06B6D4",
    tag: "Clinical Evidence",
    tagBg: "bg-[#CFFAFE]",
    tagText: "text-[#0891B2]",
    iconBg: "bg-[#CFFAFE]",
    iconColor: "text-[#0891B2]",
    borderHover: "hover:border-[#06B6D4]",
    icon: FileCheck
  },
  { 
    num: "07", 
    title: "COMMERCIALIZATION", 
    question: "How should the market be structured and approached?",
    desc: "Architect the pricing tiers, hospital formulary submission dossiers, distributor onboarding kits, and targeted multi-channel launch roadmap.",
    color: "#16324F",
    tag: "Go-To-Market Execution",
    tagBg: "bg-[#E2E8F0]",
    tagText: "text-[#1E293B]",
    iconBg: "bg-[#E2E8F0]",
    iconColor: "text-[#1E293B]",
    borderHover: "hover:border-[#16324F]",
    icon: Compass
  }
];

export default function ProductPositioningPage({ onNavigateHome }) {
  const { openModal } = useModal();
  const [openFaq, setOpenFaq] = useState(null);
  const [activeStep, setActiveStep] = useState(0);

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
            <span className="text-[#007BFF] font-black uppercase tracking-wider">Product Positioning &amp; Commercialization</span>
          </div>
          <div className="hidden sm:flex items-center gap-2 text-xs uppercase tracking-widest text-[#007BFF] font-extrabold bg-[#E0F2FE] px-4 py-1.5 rounded-full border border-[#BAE6FD]">
            <Target className="w-4 h-4 text-[#007BFF]" />
            <span>Commercialization Practice</span>
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
                  Product Positioning &amp; Commercialization
                </span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-[1.12] tracking-tight">
                A Great Product Still Needs a <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#38BDF8] to-[#00D2FF]">Reason to Be Chosen.</span>
              </h1>

              <p className="text-base sm:text-lg lg:text-xl text-white/80 font-medium leading-relaxed max-w-2xl">
                Healthcare products often communicate features. Customers buy value, outcomes, confidence and relevance. MJD Healthcare helps healthcare companies transform technical products into commercially compelling propositions.
              </p>

              <div className="flex flex-wrap items-center gap-4 pt-4">
                <button
                  type="button"
                  onClick={() => openModal('Product Positioning Assessment Request')}
                  className="px-9 py-4.5 rounded-xl bg-[#007BFF] hover:bg-[#0056b3] text-white text-xs sm:text-sm font-extrabold uppercase tracking-wider shadow-2xl shadow-[#007BFF]/40 hover:shadow-[#007BFF]/60 hover:scale-105 transition-all duration-300 cursor-pointer flex items-center gap-3 group"
                >
                  <span>Position Your Product</span>
                  <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1.5 transition-transform" />
                </button>
              </div>
            </div>

            {/* Right Column: Visual Image 2 (Earth Globe Digital Network) with Overlapping Metric Chips */}
            <div className="lg:col-span-5 relative flex justify-center animate-slide-right">
              
              <div className="relative w-full max-w-md rounded-3xl overflow-hidden shadow-2xl border-4 border-white/20 bg-[#0A1128] group">
                <img
                  src={IMAGES.medtechInnovation}
                  alt="High-precision medical device clinical engineering and lab instrumentation"
                  className="w-full h-80 sm:h-96 object-cover object-center transform group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#16324F] via-transparent to-transparent opacity-80" />

                {/* Floating Metric Badge 1: Top Right */}
                <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-md rounded-2xl p-3.5 shadow-xl border border-white/40 flex items-center gap-3 transform hover:scale-105 transition-transform">
                  <div className="w-10 h-10 rounded-xl bg-[#007BFF]/10 flex items-center justify-center text-[#007BFF]">
                    <Target className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[10px] font-black uppercase text-[#64748B] tracking-wider">Formulary Conversion</div>
                    <div className="text-base font-black text-[#16324F]">4.2x Faster</div>
                  </div>
                </div>

                {/* Floating Metric Badge 2: Bottom Left */}
                <div className="absolute bottom-4 left-4 right-4 bg-[#16324F]/90 backdrop-blur-md rounded-2xl p-4 border border-white/20 text-white shadow-2xl">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-xs font-bold text-[#38BDF8] uppercase tracking-wider">Commercial Alignment</div>
                      <div className="text-lg font-black text-white">Value Proposition Clarity</div>
                    </div>
                    <div className="w-9 h-9 rounded-full bg-[#10B981]/20 border border-[#10B981]/40 flex items-center justify-center text-[#10B981]">
                      <CheckCircle2 className="w-5 h-5" />
                    </div>
                  </div>
                  <div className="w-full bg-white/10 h-1.5 rounded-full mt-3 overflow-hidden">
                    <div className="bg-gradient-to-r from-[#007BFF] to-[#38BDF8] h-full w-[91%]" />
                  </div>
                </div>
              </div>

            </div>

          </div>

          {/* 3 Value Pillars (Locked Content) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16 pt-12 border-t border-white/10">
            <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm space-y-2 hover:bg-white/10 transition-all">
              <div className="flex items-center justify-between text-[#38BDF8] mb-1">
                <span className="text-xs font-black uppercase tracking-widest">01 / VALUE PROPOSITION</span>
                <FileCheck className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-black text-white">Clinical &amp; Economic Relevance</h3>
              <p className="text-sm text-white/70 font-medium leading-relaxed">
                Translating engineering specifications into surgeon outcomes and CFO payback metrics.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm space-y-2 hover:bg-white/10 transition-all">
              <div className="flex items-center justify-between text-[#38BDF8] mb-1">
                <span className="text-xs font-black uppercase tracking-widest">02 / DIFFERENTIATION</span>
                <Award className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-black text-white">Competitive Differentiation</h3>
              <p className="text-sm text-white/70 font-medium leading-relaxed">
                Establishing why your medical device should be selected over market alternatives.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm space-y-2 hover:bg-white/10 transition-all">
              <div className="flex items-center justify-between text-[#38BDF8] mb-1">
                <span className="text-xs font-black uppercase tracking-widest">03 / COMMERCIAL LAUNCH</span>
                <TrendingUp className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-black text-white">Market Commercialization</h3>
              <p className="text-sm text-white/70 font-medium leading-relaxed">
                Connecting product positioning with sales decks, landing pages, and hospital outreach.
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
            <p className="text-xs text-[#94A3B8] mt-2 leading-relaxed">Across tertiary centers and multispecialty healthcare chains.</p>
          </div>

          <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-xl border border-[#E0F2FE] hover:border-[#8B5CF6] transition-all transform hover:-translate-y-1">
            <div className="w-12 h-12 rounded-full bg-[#EDE9FE] text-[#8B5CF6] flex items-center justify-center mb-4 font-black">
              <TrendingUp className="w-6 h-6" />
            </div>
            <div className="text-3xl sm:text-4xl font-black text-[#16324F] tracking-tight">4.2x</div>
            <div className="text-xs sm:text-sm font-bold text-[#64748B] mt-1 uppercase tracking-wider">Faster Clearance</div>
            <p className="text-xs text-[#94A3B8] mt-2 leading-relaxed">Through structured economic and clinical formulary dossiers.</p>
          </div>

          <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-xl border border-[#E0F2FE] hover:border-[#10B981] transition-all transform hover:-translate-y-1">
            <div className="w-12 h-12 rounded-full bg-[#D1FAE5] text-[#10B981] flex items-center justify-center mb-4 font-black">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div className="text-3xl sm:text-4xl font-black text-[#16324F] tracking-tight">91%</div>
            <div className="text-xs sm:text-sm font-bold text-[#64748B] mt-1 uppercase tracking-wider">Stakeholder Consensus</div>
            <p className="text-xs text-[#94A3B8] mt-2 leading-relaxed">Achieving unified alignment between clinicians and CFOs.</p>
          </div>

          <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-xl border border-[#E0F2FE] hover:border-[#F59E0B] transition-all transform hover:-translate-y-1">
            <div className="w-12 h-12 rounded-full bg-[#FEF3C7] text-[#D97706] flex items-center justify-center mb-4 font-black">
              <Award className="w-6 h-6" />
            </div>
            <div className="text-3xl sm:text-4xl font-black text-[#16324F] tracking-tight">10+</div>
            <div className="text-xs sm:text-sm font-bold text-[#64748B] mt-1 uppercase tracking-wider">Years Experience</div>
            <p className="text-xs text-[#94A3B8] mt-2 leading-relaxed">In Indian and Asian medical device commercialization.</p>
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
                  alt="Executive consulting and medical device commercialization briefing"
                  className="w-full h-[400px] sm:h-[480px] object-cover object-center transform group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#16324F]/80 via-transparent to-transparent" />
                
                {/* Floating Consultation Trigger Card */}
                <div className="absolute bottom-6 left-6 right-6 p-5 rounded-2xl bg-white/95 backdrop-blur-md shadow-2xl border border-[#E0F2FE] flex items-center justify-between gap-4">
                  <div className="flex items-center gap-3.5">
                    <div className="w-12 h-12 rounded-xl bg-[#007BFF] text-white flex items-center justify-center shrink-0 shadow-md">
                      <Target className="w-6 h-6" />
                    </div>
                    <div>
                      <span className="text-[11px] font-black uppercase tracking-wider text-[#007BFF] block">Commercial Review</span>
                      <span className="text-sm font-black text-[#16324F]">Positioning Strategy Assessment</span>
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={() => openModal('Strategy Assessment Briefing')}
                    className="p-3 rounded-xl bg-[#F0F9FF] hover:bg-[#E0F2FE] text-[#007BFF] transition-colors cursor-pointer shrink-0"
                    aria-label="Request assessment briefing"
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
                <span>The Positioning Imperative</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-black text-[#16324F] leading-tight tracking-tight">
                Engineered for Excellence, <span className="text-[#007BFF]">Positioned for Institutional Adoption.</span>
              </h2>

              <p className="text-base sm:text-lg text-[#475569] font-medium leading-relaxed">
                Most medical technologies don't fail because the engineering falls short. They fail because hospital buying committees, surgeons, and procurement boards cannot discern the economic and clinical payback within seconds of review. At MJD Healthcare, we bridge the communication gap between clinical R&amp;D and institutional procurement—aligning every feature to measurable hospital ROI.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-4.5 rounded-2xl bg-white border border-[#E0F2FE] shadow-sm hover:shadow-md transition-shadow flex items-start gap-3">
                  <div className="w-7 h-7 rounded-lg bg-[#E0F2FE] text-[#007BFF] flex items-center justify-center shrink-0 mt-0.5">
                    <ChevronsRight className="w-4 h-4" />
                  </div>
                  <p className="text-xs sm:text-sm font-bold text-[#16324F] leading-snug">
                    Translates complex clinical data into rapid, C-suite consumable economic evidence.
                  </p>
                </div>

                <div className="p-4.5 rounded-2xl bg-white border border-[#E0F2FE] shadow-sm hover:shadow-md transition-shadow flex items-start gap-3">
                  <div className="w-7 h-7 rounded-lg bg-[#EDE9FE] text-[#8B5CF6] flex items-center justify-center shrink-0 mt-0.5">
                    <ChevronsRight className="w-4 h-4" />
                  </div>
                  <p className="text-xs sm:text-sm font-bold text-[#16324F] leading-snug">
                    Equips field reps and clinical specialists with clear differentiation battlecards against incumbent devices.
                  </p>
                </div>

                <div className="p-4.5 rounded-2xl bg-white border border-[#E0F2FE] shadow-sm hover:shadow-md transition-shadow flex items-start gap-3">
                  <div className="w-7 h-7 rounded-lg bg-[#D1FAE5] text-[#10B981] flex items-center justify-center shrink-0 mt-0.5">
                    <ChevronsRight className="w-4 h-4" />
                  </div>
                  <p className="text-xs sm:text-sm font-bold text-[#16324F] leading-snug">
                    Aligns clinician user desires with procurement formulary evaluation metrics.
                  </p>
                </div>

                <div className="p-4.5 rounded-2xl bg-white border border-[#E0F2FE] shadow-sm hover:shadow-md transition-shadow flex items-start gap-3">
                  <div className="w-7 h-7 rounded-lg bg-[#FEF3C7] text-[#D97706] flex items-center justify-center shrink-0 mt-0.5">
                    <ChevronsRight className="w-4 h-4" />
                  </div>
                  <p className="text-xs sm:text-sm font-bold text-[#16324F] leading-snug">
                    Accelerates hospital committee sign-offs by addressing budget, payback, and patient safety upfront.
                  </p>
                </div>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* 5. The 7-Point Product Positioning Framework (Vibrant Multi-Colored Cards) */}
      <section className="py-24 sm:py-32 bg-white border-y border-[#E0F2FE]">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
          
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="text-xs font-extrabold uppercase tracking-widest text-[#007BFF] bg-[#E0F2FE] px-4 py-1.5 rounded-full border border-[#BAE6FD]">
              OUR FRAMEWORK
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#16324F] tracking-tight">
              The 7-Point Product Positioning Framework
            </h2>
            <p className="text-base sm:text-lg text-[#64748B] font-medium leading-relaxed">
              Every breakthrough healthcare product requires a rigorously structured narrative that eliminates friction across the entire clinical and administrative buying committee.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {positioningFrameworkPoints.map((point, idx) => {
              const IconComponent = point.icon;
              return (
                <div
                  key={point.title}
                  className={`relative bg-[#F8FAFC] rounded-3xl p-8 border-2 border-[#E2E8F0] ${point.borderHover} hover:bg-white hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 flex flex-col justify-between group overflow-hidden`}
                >
                  {/* Top Color Accent Line */}
                  <div
                    className="absolute top-0 left-0 right-0 h-1.5 transition-all duration-300 group-hover:h-2"
                    style={{ backgroundColor: point.color }}
                  />

                  <div>
                    {/* Header Row: 64px Icon Container & Number */}
                    <div className="flex items-center justify-between mb-6">
                      <div className={`w-16 h-16 rounded-2xl ${point.iconBg} ${point.iconColor} flex items-center justify-center shadow-md group-hover:scale-110 transition-transform duration-300`}>
                        <IconComponent className="w-8 h-8" />
                      </div>
                      <span className="text-3xl font-black text-[#94A3B8] font-mono group-hover:text-[#16324F] transition-colors">
                        {point.num}
                      </span>
                    </div>

                    {/* Tag Badge */}
                    <div className="mb-3">
                      <span className={`text-[11px] font-black uppercase tracking-wider px-3 py-1 rounded-full ${point.tagBg} ${point.tagText}`}>
                        {point.tag}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-black text-[#16324F] mb-2 tracking-tight group-hover:text-[#007BFF] transition-colors">
                      {point.title}
                    </h3>

                    {/* Primary Locked Question */}
                    <p className="text-sm font-bold text-[#007BFF] mb-3 leading-snug">
                      “{point.question}”
                    </p>

                    {/* Detailed Context */}
                    <p className="text-xs sm:text-sm text-[#64748B] font-medium leading-relaxed">
                      {point.desc}
                    </p>
                  </div>

                  <div className="pt-6 mt-6 border-t border-[#E2E8F0] flex items-center justify-between text-xs font-bold text-[#64748B]">
                    <span>Step {point.num} of 07</span>
                    <span className="text-[#007BFF] font-black flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                      Commercial Alignment <ChevronsRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* 6. Translation Showcase: Technical Specs vs Commercial Proposition */}
      <section className="py-24 sm:py-32 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
          
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="text-xs font-extrabold uppercase tracking-widest text-[#007BFF] bg-[#E0F2FE] px-4 py-1.5 rounded-full border border-[#BAE6FD]">
              OUR APPROACH
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#16324F] tracking-tight">
              From Technical Product to Commercial Proposition
            </h2>
            <p className="text-base sm:text-lg text-[#64748B] font-medium leading-relaxed">
              Witness how engineering parameters are transformed into language that accelerates clinical champion sign-offs and hospital procurement approvals.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            
            {/* The Spec-Only Problem Card */}
            <div className="relative rounded-3xl p-8 sm:p-10 bg-white border-2 border-red-200 shadow-xl space-y-6 overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-2 bg-red-500" />
              
              <div className="flex items-center justify-between">
                <span className="text-xs font-black uppercase tracking-widest text-red-600 bg-red-50 px-3.5 py-1.5 rounded-full border border-red-200">
                  Instead of Communicating Only Technical Specs
                </span>
                <span className="text-xs font-bold text-red-500">Traditional Trap</span>
              </div>

              <div className="p-6 rounded-2xl bg-red-50/70 border border-red-100">
                <p className="text-lg sm:text-xl font-bold text-red-950 font-mono leading-relaxed">
                  “200 L/min turbine flow capacity with 0.1s pressure response.”
                </p>
              </div>

              <div className="space-y-3">
                <h4 className="text-sm font-black text-[#16324F] uppercase tracking-wider">The Market Consequence:</h4>
                <p className="text-sm text-[#64748B] font-medium leading-relaxed">
                  Technical specifications alone leave clinicians and CFOs guessing why it matters to their hospital operations or budget. It forces hospital committees to compare you purely on price rather than clinical value.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-red-50/50 border border-red-100 flex items-center gap-3 text-xs font-bold text-red-800">
                <div className="w-2 h-2 rounded-full bg-red-500" />
                <span>Result: Long evaluation delays, price resistance &amp; lost tenders.</span>
              </div>
            </div>

            {/* The MJD Commercial Value Card */}
            <div className="relative rounded-3xl p-8 sm:p-10 bg-[#16324F] text-white shadow-2xl space-y-6 overflow-hidden border-2 border-[#38BDF8]/40">
              <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-[#007BFF] to-[#38BDF8]" />
              
              <div className="flex items-center justify-between">
                <span className="text-xs font-black uppercase tracking-widest text-[#38BDF8] bg-[#38BDF8]/20 px-3.5 py-1.5 rounded-full border border-[#38BDF8]/40">
                  MJD Translates It into Commercial Value
                </span>
                <span className="text-xs font-bold text-[#10B981] flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5" /> High Conversion
                </span>
              </div>

              <div className="p-6 rounded-2xl bg-white/10 border border-white/10 backdrop-blur-sm">
                <p className="text-lg sm:text-xl font-bold text-white leading-relaxed">
                  “Reduces ICU ventilator weaning time by 22%, saving ₹45,000 per patient stay while increasing bed turnover.”
                </p>
              </div>

              <div className="space-y-3">
                <h4 className="text-sm font-black text-[#38BDF8] uppercase tracking-wider">The Commercial Impact:</h4>
                <p className="text-sm text-white/80 font-medium leading-relaxed">
                  Translating technical features into clinical endpoints and financial savings makes formulary sign-off immediate. Clinicians get superior clinical outcomes while hospital administrators capture clear DRG margin savings.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-white/5 border border-white/10 flex items-center gap-3 text-xs font-bold text-[#38BDF8]">
                <div className="w-2 h-2 rounded-full bg-[#10B981]" />
                <span>Result: Rapid purchase approval, C-suite consensus &amp; sustainable margin.</span>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 7. Serene Ocean Horizon Metaphor Section (Image 4: Broad Commercial Clarity) */}
      <section className="relative py-28 sm:py-36 bg-[#0A1128] text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={IMAGES.clearHorizon}
            alt="Pristine ocean horizon metaphor for clear market positioning"
            className="w-full h-full object-cover object-center opacity-30 filter contrast-125"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0A1128] via-[#0A1128]/70 to-[#0A1128]" />
        </div>

        <div className="max-w-5xl mx-auto px-4 sm:px-8 lg:px-12 relative z-10 text-center space-y-8">
          <div className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-widest text-[#38BDF8] bg-[#38BDF8]/20 px-4 py-2 rounded-full border border-[#38BDF8]/40">
            <Globe className="w-4 h-4 text-[#38BDF8]" />
            <span>Market Clarity &amp; Commercial Horizon</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight">
            Clear Positioning Cuts Through Healthcare Complexity.
          </h2>

          <p className="text-base sm:text-lg lg:text-xl text-white/85 font-medium leading-relaxed max-w-3xl mx-auto">
            In competitive hospital procurement, ambiguous claims result in indefinite delays. When your medical device communicates distinct clinical superiority and economic payback, market entry shifts from a grueling struggle into seamless adoption.
          </p>

          <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
            <button
              type="button"
              onClick={() => openModal('Horizon Commercialization Briefing')}
              className="px-8 py-4 rounded-xl bg-[#007BFF] hover:bg-[#0056b3] text-white text-xs sm:text-sm font-extrabold uppercase tracking-wider shadow-2xl shadow-[#007BFF]/50 hover:scale-105 transition-all duration-300 cursor-pointer flex items-center gap-3"
            >
              <span>Map Your Commercial Horizon</span>
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
              Common questions about healthcare product positioning and commercialization services.
            </p>
          </div>

          <div className="space-y-4">
            {positioningFaqs.map((faq, idx) => (
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
                READY TO SCALE ADOPTION?
              </span>

              <h3 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
                Transform Your Product Positioning
              </h3>

              <p className="text-base sm:text-lg text-white/80 font-medium max-w-2xl mx-auto leading-relaxed">
                Turn technical features into commercially compelling value propositions that clinicians recommend and CFOs fund.
              </p>

              <div className="pt-6 flex flex-col sm:flex-row items-center justify-center gap-4">
                <button
                  type="button"
                  onClick={() => openModal('Positioning Page CTA')}
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
