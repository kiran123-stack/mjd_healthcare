import React, { useState } from 'react';
import { useModal } from '../context/ModalContext';
import {
  Briefcase,
  ArrowRight,
  ChevronDown,
  Building2,
  Users,
  Target,
  Globe,
  Handshake,
  CheckCircle2,
  TrendingUp,
  ShieldCheck,
  Layers,
  FileText,
  Activity,
  Award,
  Compass
} from 'lucide-react';

const IMAGES = {
  heroBoardroom: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=1600&q=80',
  executiveTeam: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=1200&q=80',
  dataAnalytics: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80',
  strategyMeeting: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=1200&q=80',
  globalExpansion: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80'
};

const bdFaqs = [
  { q: "What is healthcare business development?", a: "Healthcare business development is the process of identifying, developing and converting commercial opportunities within the healthcare ecosystem." },
  { q: "Can MJD help medical device companies generate business opportunities?", a: "Yes. MJD can identify target accounts, map stakeholders, support outreach, develop opportunities and connect business development with market access and demand generation." },
  { q: "Does MJD provide hospital business development?", a: "Yes. Depending on the engagement, MJD can support hospital targeting, stakeholder mapping, engagement and opportunity development." },
  { q: "Can MJD help international healthcare companies enter India?", a: "Yes. MJD can support market assessment, partner identification, GTM planning and business development for healthcare companies entering the Indian market." },
  { q: "Is business development different from lead generation?", a: "Yes. Lead generation creates potential enquiries or opportunities. Business development focuses on developing strategically valuable opportunities towards commercial relationships." }
];

const bdProcessSteps = [
  {
    num: "01",
    phase: "IDENTIFY",
    desc: "Where is the commercial opportunity across target health systems?",
    detail: "Comprehensive mapping of top-tier hospital chains, multi-specialty centers, and regional health systems aligned with your product's clinical utility.",
    icon: Compass,
    metric: "TAM & Target Profiling"
  },
  {
    num: "02",
    phase: "PRIORITIZE",
    desc: "Which opportunities and hospital accounts deserve primary attention?",
    detail: "Filtering accounts by procurement cycles, capital expenditure capacity, bed count, surgical volumes, and strategic fit.",
    icon: Target,
    metric: "High-Yield Tiering"
  },
  {
    num: "03",
    phase: "CONNECT",
    desc: "Who are the relevant clinical, biomedical, and administrative decision-makers?",
    detail: "Direct access pathways to Key Opinion Leaders (KOLs), Chief Medical Officers, Biomedical Directors, and Materials Management heads.",
    icon: Users,
    metric: "Multi-Stakeholder Map"
  },
  {
    num: "04",
    phase: "ENGAGE",
    desc: "How should the commercial conversation begin through specialized briefings?",
    detail: "Crafting institutional dossiers, clinical differentiation decks, and economic value models that resonate with multidisciplinary committees.",
    icon: Briefcase,
    metric: "Tailored Briefings"
  },
  {
    num: "05",
    phase: "DEVELOP",
    desc: "How can the opportunity move forward through OT trials and finance reviews?",
    detail: "Managing in-hospital clinical trials, nurse/biomed evaluations, rate contract justifications, and commercial qualification hurdles.",
    icon: Activity,
    metric: "Clinical Trials & Eval"
  },
  {
    num: "06",
    phase: "CONVERT",
    desc: "What is required to reach a signed commercial PO or rate contract?",
    detail: "Finalizing procurement committee sign-offs, empanelment, distributor onboarding, and structured supply agreements.",
    icon: Award,
    metric: "Institutional PO Issued"
  }
];

export default function BusinessDevelopmentPage({ onNavigateHome }) {
  const { openModal } = useModal();
  const [openFaq, setOpenFaq] = useState(null);
  const [activeProcessStep, setActiveProcessStep] = useState(0);

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
            <span className="text-[#007BFF] font-black uppercase tracking-wider">Healthcare Business Development</span>
          </div>
          <div className="hidden sm:flex items-center gap-2 text-xs uppercase tracking-widest text-[#007BFF] font-extrabold bg-[#E0F2FE] px-4 py-1.5 rounded-full border border-[#BAE6FD]">
            <Briefcase className="w-4 h-4 text-[#007BFF]" />
            <span>Institutional BD Practice</span>
          </div>
        </div>
      </div>

      {/* 2. Hero Section with Angular Clip-Path & Layered Imagery */}
      <section className="relative w-full bg-white border-b border-[#E0F2FE] py-20 sm:py-28 lg:py-32 overflow-hidden">
        {/* Subtle Background SVG Grid */}
        <div className="absolute inset-0 pointer-events-none opacity-40">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="hero-pattern-grid" width="48" height="48" patternUnits="userSpaceOnUse">
                <path d="M 48 0 L 0 0 0 48" fill="none" stroke="#E2E8F0" strokeWidth="0.8" />
                <circle cx="48" cy="0" r="1.5" fill="#007BFF" opacity="0.3" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#hero-pattern-grid)" />
          </svg>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left Column: Heading & Content (Slide-in-Left) */}
            <div className="lg:col-span-6 space-y-8 animate-slide-left">
              <div className="inline-flex items-center gap-2.5 text-xs sm:text-sm font-extrabold uppercase tracking-[0.2em] text-[#007BFF] bg-[#E0F2FE] px-4 py-2 rounded-full border border-[#BAE6FD] shadow-sm">
                <span className="w-2.5 h-2.5 rounded-full bg-[#007BFF] animate-pulse" />
                <span>Healthcare Business Development</span>
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#16324F] leading-[1.12] tracking-tight">
                Find the Right Opportunities. Build the Right Relationships. <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#007BFF] to-[#38BDF8]">Create Revenue.</span>
              </h1>

              <p className="text-base sm:text-lg lg:text-xl text-[#475569] font-medium leading-relaxed max-w-2xl">
                Healthcare business development is not simply about finding leads. It is about identifying the right commercial opportunities, reaching the right stakeholders and developing relationships that can create sustainable business. MJD Healthcare provides business development support for medical device, MedTech, healthcare technology and healthcare service companies.
              </p>

              <div className="flex flex-wrap items-center gap-4 pt-2">
                <button
                  type="button"
                  onClick={() => openModal('BD Services Assessment Request')}
                  className="px-8 py-4 rounded-xl bg-[#007BFF] hover:bg-[#0056b3] text-white text-xs sm:text-sm font-extrabold uppercase tracking-wider shadow-xl shadow-[#007BFF]/30 hover:shadow-[#007BFF]/45 transition-all duration-300 cursor-pointer flex items-center gap-3 group"
                >
                  <span>Develop Healthcare Opportunities</span>
                  <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1.5 transition-transform" />
                </button>
              </div>
            </div>

            {/* Right Column: Layered Composition with Geometric Clip-Path (Slide-in-Right) */}
            <div className="lg:col-span-6 relative animate-slide-right">
              {/* Decorative Accent Glow */}
              <div className="absolute -inset-4 bg-gradient-to-tr from-[#007BFF]/15 via-[#38BDF8]/10 to-transparent rounded-3xl blur-2xl -z-10" />

              {/* Main Geometric Clipped Image Container */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white clip-polygon-hero bg-[#16324F]">
                <img
                  src={IMAGES.heroBoardroom}
                  alt="Executive healthcare business development strategy meeting"
                  className="w-full h-[400px] sm:h-[460px] object-cover object-center transform hover:scale-105 transition-transform duration-700"
                  loading="eager"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#16324F]/90 via-[#16324F]/30 to-transparent pointer-events-none" />

                {/* Inset Label inside Clipped Frame */}
                <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between text-white pointer-events-none">
                  <div className="space-y-1">
                    <span className="text-[10px] sm:text-xs font-black uppercase tracking-widest text-[#38BDF8]">Strategic Deal Facilitation</span>
                    <p className="text-sm sm:text-base font-bold text-white">Multi-Specialty &amp; Enterprise Hospital Networks</p>
                  </div>
                  <div className="w-10 h-10 rounded-xl bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/30 shrink-0">
                    <ShieldCheck className="w-5 h-5 text-white" />
                  </div>
                </div>
              </div>

              {/* Floating Glassmorphic Pill 1 (Top Left) */}
              <div className="absolute -top-6 -left-4 sm:-left-8 bg-white/95 backdrop-blur-md p-4 rounded-2xl shadow-xl border border-[#E0F2FE] flex items-center gap-3 animate-float max-w-xs">
                <div className="w-10 h-10 rounded-xl bg-[#E0F2FE] text-[#007BFF] flex items-center justify-center shrink-0">
                  <Target className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-black text-[#16324F] uppercase tracking-wider">Account Targeting</div>
                  <div className="text-[11px] text-[#64748B] font-semibold">Priority Tertiary Hospital Chains</div>
                </div>
              </div>

              {/* Floating Glassmorphic Pill 2 (Bottom Right) */}
              <div className="absolute -bottom-6 -right-2 sm:-right-6 bg-white/95 backdrop-blur-md p-4 rounded-2xl shadow-xl border border-[#E0F2FE] flex items-center gap-3 animate-float-alt max-w-xs">
                <div className="w-10 h-10 rounded-xl bg-[#007BFF] text-white flex items-center justify-center shrink-0">
                  <TrendingUp className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-black text-[#16324F] uppercase tracking-wider">Commercial Velocity</div>
                  <div className="text-[11px] text-[#007BFF] font-black">+140% Pipeline Acceleration</div>
                </div>
              </div>

            </div>

          </div>

          {/* 3 Highlights Row Below Hero */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-16 sm:pt-20">
            <div className="p-8 rounded-3xl bg-[#16324F] text-white shadow-xl border border-white/10 space-y-3 transform hover:-translate-y-1.5 transition-all duration-300">
              <div className="flex items-center justify-between">
                <span className="text-xs font-black text-[#38BDF8] uppercase tracking-widest">01 / ACCOUNT TARGETING</span>
                <Target className="w-5 h-5 text-[#38BDF8]" />
              </div>
              <h3 className="text-xl font-black text-white">Priority Hospital Accounts</h3>
              <p className="text-sm text-white/80 font-medium leading-relaxed">
                Focusing sales resources on high-potential hospital chains and multi-specialty centers.
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-white border-2 border-[#E0F2FE] text-[#16324F] shadow-lg space-y-3 transform hover:-translate-y-1.5 transition-all duration-300">
              <div className="flex items-center justify-between">
                <span className="text-xs font-black text-[#007BFF] uppercase tracking-widest">02 / STAKEHOLDER MAPPING</span>
                <Users className="w-5 h-5 text-[#007BFF]" />
              </div>
              <h3 className="text-xl font-black text-[#16324F]">Multi-Tier Buying Committees</h3>
              <p className="text-sm text-[#64748B] font-medium leading-relaxed">
                Mapping surgeons, biomedical directors, procurement teams, and hospital C-suite.
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-white border-2 border-[#E0F2FE] text-[#16324F] shadow-lg space-y-3 transform hover:-translate-y-1.5 transition-all duration-300">
              <div className="flex items-center justify-between">
                <span className="text-xs font-black text-[#007BFF] uppercase tracking-widest">03 / STRATEGIC ALLIANCES</span>
                <Handshake className="w-5 h-5 text-[#007BFF]" />
              </div>
              <h3 className="text-xl font-black text-[#16324F]">Partnerships &amp; Alliances</h3>
              <p className="text-sm text-[#64748B] font-medium leading-relaxed">
                Structuring distribution partnerships, institutional alliances, and India market entry tie-ups.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* 3. Bespoke Custom SVG Infographic: Multi-Tier Stakeholder Architecture */}
      <section className="py-20 sm:py-28 bg-[#F8FAFC] border-b border-[#E0F2FE] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
          
          <div className="max-w-3xl mb-14 space-y-3">
            <div className="inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-[0.2em] text-[#007BFF]">
              <span className="w-2.5 h-2.5 rounded-full bg-[#007BFF]" />
              <span>STAKEHOLDER ARCHITECTURE</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#16324F]">
              Navigating the Multi-Tier Hospital Buying Committee
            </h2>
            <p className="text-base sm:text-lg text-[#475569] font-medium leading-relaxed">
              Healthcare deals stall when only one stakeholder is engaged. MJD maps and synchronizes all four institutional buying pillars to secure committee consensus.
            </p>
          </div>

          {/* Interactive Responsive SVG Flowchart */}
          <div className="bg-white rounded-3xl p-6 sm:p-10 border-2 border-[#E0F2FE] shadow-xl relative overflow-hidden">
            
            {/* Visual SVG Diagram Representation */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
              
              {/* Pillar 1: Clinical Champions */}
              <div className="p-6 rounded-2xl bg-[#F8FAFC] border-2 border-[#BAE6FD] hover:border-[#007BFF] transition-all duration-300 space-y-4 group">
                <div className="w-12 h-12 rounded-xl bg-[#007BFF] text-white flex items-center justify-center font-black shadow-md group-hover:scale-110 transition-transform">
                  <Activity className="w-6 h-6" />
                </div>
                <div className="space-y-1">
                  <span className="text-[11px] font-black uppercase tracking-widest text-[#007BFF]">Tier 01</span>
                  <h4 className="text-lg font-black text-[#16324F]">Surgeons &amp; Clinicians</h4>
                  <p className="text-xs text-[#64748B] font-medium leading-relaxed">
                    Evaluate clinical superiority, ergonomic fit, patient recovery outcomes, and procedural efficacy.
                  </p>
                </div>
                <div className="pt-2 border-t border-[#E2E8F0] flex items-center gap-2 text-xs font-bold text-[#007BFF]">
                  <CheckCircle2 className="w-4 h-4 text-[#007BFF]" />
                  <span>Clinical Champion</span>
                </div>
              </div>

              {/* Pillar 2: Biomedical Engineering */}
              <div className="p-6 rounded-2xl bg-[#F8FAFC] border-2 border-[#BAE6FD] hover:border-[#007BFF] transition-all duration-300 space-y-4 group">
                <div className="w-12 h-12 rounded-xl bg-[#16324F] text-[#38BDF8] flex items-center justify-center font-black shadow-md group-hover:scale-110 transition-transform">
                  <Layers className="w-6 h-6" />
                </div>
                <div className="space-y-1">
                  <span className="text-[11px] font-black uppercase tracking-widest text-[#007BFF]">Tier 02</span>
                  <h4 className="text-lg font-black text-[#16324F]">Biomedical Engineering</h4>
                  <p className="text-xs text-[#64748B] font-medium leading-relaxed">
                    Reviews technical specifications, electrical safety, uptime reliability, warranty, and AMC/CMC contracts.
                  </p>
                </div>
                <div className="pt-2 border-t border-[#E2E8F0] flex items-center gap-2 text-xs font-bold text-[#16324F]">
                  <CheckCircle2 className="w-4 h-4 text-[#007BFF]" />
                  <span>Technical Clearance</span>
                </div>
              </div>

              {/* Pillar 3: Procurement & Purchase */}
              <div className="p-6 rounded-2xl bg-[#F8FAFC] border-2 border-[#BAE6FD] hover:border-[#007BFF] transition-all duration-300 space-y-4 group">
                <div className="w-12 h-12 rounded-xl bg-[#007BFF] text-white flex items-center justify-center font-black shadow-md group-hover:scale-110 transition-transform">
                  <Briefcase className="w-6 h-6" />
                </div>
                <div className="space-y-1">
                  <span className="text-[11px] font-black uppercase tracking-widest text-[#007BFF]">Tier 03</span>
                  <h4 className="text-lg font-black text-[#16324F]">Procurement &amp; Purchase</h4>
                  <p className="text-xs text-[#64748B] font-medium leading-relaxed">
                    Directs commercial rate contract terms, volume discounts, payment milestones, and vendor compliance.
                  </p>
                </div>
                <div className="pt-2 border-t border-[#E2E8F0] flex items-center gap-2 text-xs font-bold text-[#007BFF]">
                  <CheckCircle2 className="w-4 h-4 text-[#007BFF]" />
                  <span>Commercial Feasibility</span>
                </div>
              </div>

              {/* Pillar 4: Hospital C-Suite */}
              <div className="p-6 rounded-2xl bg-[#F8FAFC] border-2 border-[#BAE6FD] hover:border-[#007BFF] transition-all duration-300 space-y-4 group">
                <div className="w-12 h-12 rounded-xl bg-[#16324F] text-[#38BDF8] flex items-center justify-center font-black shadow-md group-hover:scale-110 transition-transform">
                  <Building2 className="w-6 h-6" />
                </div>
                <div className="space-y-1">
                  <span className="text-[11px] font-black uppercase tracking-widest text-[#007BFF]">Tier 04</span>
                  <h4 className="text-lg font-black text-[#16324F]">Hospital C-Suite &amp; MD</h4>
                  <p className="text-xs text-[#64748B] font-medium leading-relaxed">
                    Evaluates ROI, CAPEX allocation, competitive service differentiation, and multi-facility deployment.
                  </p>
                </div>
                <div className="pt-2 border-t border-[#E2E8F0] flex items-center gap-2 text-xs font-bold text-[#16324F]">
                  <CheckCircle2 className="w-4 h-4 text-[#007BFF]" />
                  <span>Final Executive Sanction</span>
                </div>
              </div>

            </div>

            {/* Central Convergence Banner */}
            <div className="mt-8 p-5 rounded-2xl bg-gradient-to-r from-[#16324F] via-[#1E4976] to-[#16324F] text-white flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-[#38BDF8]/20 flex items-center justify-center text-[#38BDF8]">
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs uppercase tracking-widest text-[#38BDF8] font-black">Outcome</span>
                  <h5 className="text-sm sm:text-base font-black">Zero Institutional Inertia → Signed Institutional Purchase Order</h5>
                </div>
              </div>
              <button
                type="button"
                onClick={() => openModal('BD Stakeholder Mapping Consultation')}
                className="px-5 py-2.5 rounded-lg bg-[#007BFF] hover:bg-[#0056b3] text-white text-xs font-extrabold uppercase tracking-wider transition-colors shrink-0"
              >
                Map Your Target Accounts
              </button>
            </div>

          </div>

        </div>
      </section>

      {/* 4. Core BD Capabilities Grid with Beveled Clip-Path Corners */}
      <section className="py-24 sm:py-32 bg-white border-b border-[#E0F2FE]">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
          
          <div className="max-w-3xl mb-16 space-y-3">
            <div className="inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-[0.2em] text-[#007BFF]">
              <span className="w-2.5 h-2.5 rounded-full bg-[#007BFF]" />
              <span>WHAT WE DO</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#16324F]">
              End-to-End Healthcare BD Services
            </h2>
            <p className="text-base sm:text-lg text-[#475569] font-medium leading-relaxed">
              Structured institutional execution across the entire commercialization lifecycle.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Market & Opportunity Identification",
                desc: "Identify potential opportunities across hospitals, hospital chains, diagnostic centres, clinics, healthcare institutions, government healthcare organizations, corporate healthcare, distributors, and strategic partners.",
                icon: Building2,
                tag: "Market Intelligence"
              },
              {
                title: "Account Targeting",
                desc: "Prioritize high-value accounts based on product relevance, market potential, geography, customer profile, buying potential, competitive environment, and strategic importance.",
                icon: Target,
                tag: "High-Value Prioritization"
              },
              {
                title: "Stakeholder Mapping",
                desc: "Identify and map key decision-makers: doctors, hospital management, procurement, biomedical teams, purchase departments, finance, distributors, and clinical champions.",
                icon: Users,
                tag: "Committee Navigation"
              },
              {
                title: "Business Opportunity Development",
                desc: "Guide prospects from Target Account → Initial Engagement → Qualification → Meeting → Product Discussion → Demonstration → Commercial Opportunity.",
                icon: Briefcase,
                tag: "Pipeline Progression"
              },
              {
                title: "Strategic Partnerships",
                desc: "Identify opportunities for strategic partnerships, healthcare alliances, technology partnerships, institutional collaborations, and distribution partnerships.",
                icon: Handshake,
                tag: "Ecosystem Alliances"
              },
              {
                title: "International Market Development",
                desc: "Support international healthcare companies looking beyond their home market with India market identification, partner vetting, and commercial opportunity development.",
                icon: Globe,
                tag: "India Market Entry"
              }
            ].map((bd, idx) => {
              const Icon = bd.icon;
              return (
                <div 
                  key={idx} 
                  className="rounded-3xl bg-[#F8FAFC] border-2 border-[#E0F2FE] hover:border-[#007BFF] hover:bg-white hover:shadow-2xl transition-all duration-300 flex flex-col justify-between group overflow-hidden clip-polygon-card relative"
                >
                  {/* Sliding Gradient Accent Line */}
                  <div className="h-1.5 w-0 group-hover:w-full bg-gradient-to-r from-[#007BFF] to-[#38BDF8] transition-all duration-500" />
                  
                  <div className="p-8 space-y-6">
                    <div className="flex items-center justify-between">
                      <div className="w-14 h-14 rounded-2xl bg-[#E0F2FE] text-[#007BFF] group-hover:bg-[#007BFF] group-hover:text-white flex items-center justify-center transition-all duration-300 shadow-sm">
                        <Icon className="w-7 h-7" />
                      </div>
                      <span className="text-[11px] font-black uppercase tracking-widest text-[#007BFF] bg-[#E0F2FE]/80 px-3 py-1 rounded-full">
                        {bd.tag}
                      </span>
                    </div>

                    <div className="space-y-3">
                      <h3 className="text-xl sm:text-2xl font-black text-[#16324F] group-hover:text-[#007BFF] transition-colors leading-snug">
                        {bd.title}
                      </h3>
                      <p className="text-sm sm:text-base text-[#64748B] font-medium leading-relaxed">
                        {bd.desc}
                      </p>
                    </div>
                  </div>

                  <div className="px-8 pb-8 pt-2">
                    <div className="flex items-center gap-2 text-xs font-bold text-[#007BFF] group-hover:text-[#0056b3] transition-colors">
                      <span className="uppercase tracking-wider">Institutional Delivery</span>
                      <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* 5. 6-Step BD Process: Left-Slide / Right-Slide Alternating Timeline */}
      <section className="py-24 sm:py-32 bg-[#F8FAFC] border-b border-[#E0F2FE] relative overflow-hidden">
        
        <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
          
          <div className="max-w-3xl mb-16 space-y-3">
            <div className="inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-[0.2em] text-[#007BFF]">
              <span className="w-2.5 h-2.5 rounded-full bg-[#007BFF]" />
              <span>OUR PROCESS</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#16324F]">
              The MJD Business Development Approach
            </h2>
            <p className="text-base sm:text-lg text-[#475569] font-medium leading-relaxed">
              A systematic, phased commercial pathway designed to move high-value healthcare products from initial prospect identification to signed institutional contracts.
            </p>
          </div>

          {/* Interactive Alternating Left/Right Slide Stage Cards */}
          <div className="space-y-6 relative">
            {bdProcessSteps.map((step, idx) => {
              const Icon = step.icon;
              const isEven = idx % 2 === 0;
              const isActive = activeProcessStep === idx;

              return (
                <div 
                  key={step.phase}
                  onClick={() => setActiveProcessStep(idx)}
                  className={`p-6 sm:p-8 rounded-3xl transition-all duration-500 cursor-pointer border-2 ${
                    isActive 
                      ? 'bg-white border-[#007BFF] shadow-2xl scale-[1.01]' 
                      : 'bg-white/80 hover:bg-white border-[#E0F2FE] hover:border-[#BAE6FD] shadow-sm'
                  } ${isEven ? 'hover:translate-x-1.5' : 'hover:-translate-x-1.5'} group`}
                >
                  <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
                    
                    {/* Left/Main Column: Step Number, Phase, and Locked Question */}
                    <div className="flex items-start sm:items-center gap-6">
                      <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#007BFF] to-[#0284C7] text-white flex items-center justify-center font-black text-2xl shadow-lg shrink-0 group-hover:scale-105 transition-transform">
                        {step.num}
                      </div>

                      <div className="space-y-1">
                        <div className="flex items-center gap-3">
                          <span className="text-xs font-black uppercase tracking-widest text-[#007BFF]">
                            Phase {step.num}
                          </span>
                          <span className="text-xs font-bold text-[#64748B] bg-[#F1F5F9] px-2.5 py-0.5 rounded-md">
                            {step.metric}
                          </span>
                        </div>
                        <h3 className="text-xl sm:text-2xl font-black text-[#16324F] group-hover:text-[#007BFF] transition-colors tracking-tight">
                          {step.phase}
                        </h3>
                        <p className="text-base sm:text-lg text-[#16324F] font-bold leading-snug">
                          {step.desc}
                        </p>
                      </div>
                    </div>

                    {/* Right Column: Execution Detail */}
                    <div className="lg:max-w-md bg-[#F8FAFC] p-4 rounded-2xl border border-[#E2E8F0] space-y-2 shrink-0">
                      <div className="flex items-center gap-2 text-xs font-extrabold uppercase tracking-wider text-[#16324F]">
                        <Icon className="w-4 h-4 text-[#007BFF]" />
                        <span>Institutional Pathway</span>
                      </div>
                      <p className="text-xs sm:text-sm text-[#64748B] font-medium leading-relaxed">
                        {step.detail}
                      </p>
                    </div>

                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* 6. Frequently Asked Questions (Accessible Accordion) */}
      <section className="py-24 sm:py-32 bg-white border-b border-[#E0F2FE]">
        <div className="max-w-4xl mx-auto px-4 sm:px-8 lg:px-12">
          
          <div className="text-center mb-16 space-y-3">
            <span className="text-xs font-extrabold uppercase tracking-widest text-[#007BFF] bg-[#E0F2FE] px-4 py-1.5 rounded-full border border-[#BAE6FD]">
              INQUIRIES
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#16324F]">
              Frequently Asked Questions
            </h2>
            <p className="text-base sm:text-lg text-[#64748B] font-medium">
              Key considerations for institutional healthcare business development.
            </p>
          </div>

          <div className="space-y-4">
            {bdFaqs.map((faq, idx) => (
              <div 
                key={idx} 
                className="bg-[#F8FAFC] rounded-2xl border-2 border-[#E0F2FE] hover:border-[#BAE6FD] overflow-hidden shadow-sm transition-all duration-200"
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(idx)}
                  className="w-full p-6 sm:p-7 text-left font-extrabold text-[#16324F] flex items-center justify-between gap-4 cursor-pointer hover:text-[#007BFF] transition-colors"
                  aria-expanded={openFaq === idx}
                >
                  <span className="text-base sm:text-lg lg:text-xl font-bold">{faq.q}</span>
                  <div className={`w-8 h-8 rounded-full bg-[#E0F2FE] text-[#007BFF] flex items-center justify-center shrink-0 transition-transform duration-300 ${openFaq === idx ? 'rotate-180 bg-[#007BFF] text-white' : ''}`}>
                    <ChevronDown className="w-5 h-5" />
                  </div>
                </button>
                {openFaq === idx && (
                  <div className="px-6 sm:px-7 pb-7 text-base text-[#475569] font-medium leading-relaxed border-t border-[#E0F2FE] pt-5 bg-white">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* 7. Closing Executive Conversion Banner */}
          <div className="mt-20 p-10 sm:p-14 rounded-3xl bg-[#16324F] text-white text-center shadow-2xl relative overflow-hidden space-y-6">
            

            <div className="relative z-10 space-y-4 max-w-2xl mx-auto">
              <span className="text-xs font-black uppercase tracking-widest text-[#38BDF8] bg-[#38BDF8]/15 px-4 py-1.5 rounded-full border border-[#38BDF8]/30 inline-block">
                Start Building Institutional Pipeline
              </span>
              <h3 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight">
                Accelerate Healthcare Business Development
              </h3>
              <p className="text-base sm:text-lg text-white/80 font-medium leading-relaxed">
                Develop strategic hospital and institutional relationships across India.
              </p>
              <div className="pt-4">
                <button
                  type="button"
                  onClick={() => openModal('BD Page CTA')}
                  className="px-9 py-5 rounded-xl bg-[#007BFF] hover:bg-[#0056b3] text-white text-sm font-extrabold uppercase tracking-wider cursor-pointer inline-flex items-center gap-3 shadow-xl shadow-[#007BFF]/40 hover:shadow-2xl hover:scale-105 transition-all duration-300"
                >
                  <span>Talk to MJD Healthcare</span>
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
}
