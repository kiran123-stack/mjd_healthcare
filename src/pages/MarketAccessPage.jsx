import React, { useState, useEffect, useRef } from 'react';
import { useModal } from '../context/ModalContext';
import {
  ShieldCheck,
  Building2,
  Network,
  Briefcase,
  Compass,
  ArrowRight,
  CheckCircle2,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Layers,
  Search,
  Target,
  Building,
  Sparkles,
  Activity
} from 'lucide-react';

const targetAudienceData = [
  {
    id: 1,
    title: "Medical device manufacturers",
    category: "SURGICAL & DIAGNOSTIC HARDWARE",
    desc: "Navigating complex apex hospital clearance, biomedical engineering evaluations, and formulary approval committees.",
    metric1: "850+",
    label1: "Hospitals Mapped",
    metric2: "3.8x",
    label2: "Faster Clearance",
    image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=800&q=80",
    tag: "Apex Formulary Access"
  },
  {
    id: 2,
    title: "MedTech startups",
    category: "EARLY COMMERCIAL VALIDATION",
    desc: "Structuring pilot validation trials, key opinion leader (KOL) endorsements, and institutional market-entry pathways.",
    metric1: "12-16 Wks",
    label1: "Pilot Cycle",
    metric2: "100%",
    label2: "Regulatory Compliance",
    image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=800&q=80",
    tag: "KOL Pilot Endorsements"
  },
  {
    id: 3,
    title: "Healthcare technology companies",
    category: "DIGITAL HEALTH & WORKFLOW AI",
    desc: "Aligning institutional hospital software systems, clinical leadership priorities, and clinical workflow adoption.",
    metric1: "45+ Chains",
    label1: "Enterprise Accounts",
    metric2: "92%",
    label2: "Formulary Clearance",
    image: "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=800&q=80",
    tag: "Hospital IT Integration"
  },
  {
    id: 4,
    title: "International healthcare companies entering India",
    category: "INDIA MARKET ENTRY",
    desc: "Establishing Pan-India regulatory navigation, pricing benchmark models, regional distributor alliances, and apex hospital access.",
    metric1: "Pan-India",
    label1: "Territory Coverage",
    metric2: "CDSCO",
    label2: "Regulatory Alignment",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80",
    tag: "Cross-Border Commercialization"
  },
  {
    id: 5,
    title: "Companies launching new medical products",
    category: "CATEGORY CREATION & POSITIONING",
    desc: "Translating complex clinical evidence into surgeon outcome briefing dossiers and CFO institutional payback models.",
    metric1: "6-Phase",
    label1: "GTM Framework",
    metric2: "Surgeon-Led",
    label2: "OT Briefing Protocols",
    image: "https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&w=800&q=80",
    tag: "Clinical Efficacy Framing"
  },
  {
    id: 6,
    title: "Manufacturers looking to expand hospital penetration",
    category: "PORTFOLIO & TERRITORY SCALING",
    desc: "Scaling commercial penetration from metro apex hubs into Tier 1 and Tier 2 private hospital chains and regional health centers.",
    metric1: "28 States",
    label1: "Network Reach",
    metric2: "Tier 1 & 2",
    label2: "Procurement Access",
    image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=800&q=80",
    tag: "Tier 2 Hospital Expansion"
  },
  {
    id: 7,
    title: "Healthcare companies developing distributor networks",
    category: "CHANNEL GOVERNANCE & ALLIANCES",
    desc: "Selecting qualified regional dealers, defining enforceable distribution SLAs, and governing pan-India territory commercial pipelines.",
    metric1: "120+",
    label1: "Vetted Distributors",
    metric2: "SLA-Driven",
    label2: "Territory Governance",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80",
    tag: "Distributor SLAs & Margins"
  }
];

const marketAccessFaqs = [
  { q: "What is healthcare market access?", a: "Healthcare market access is the process of creating practical pathways for healthcare products and services to reach target customers, institutions and decision-makers and ultimately achieve adoption." },
  { q: "What is medical device market access?", a: "Medical device market access involves identifying target markets, understanding purchasing stakeholders, developing institutional access, creating clinical and commercial positioning and building channels for adoption." },
  { q: "Can MJD help medical device companies enter India?", a: "Yes. MJD can support market assessment, positioning, GTM planning, hospital access, channel development, digital demand generation and business development." },
  { q: "Does market access include hospital sales?", a: "Hospital access can be an important component of a broader market access strategy, particularly for institutional medical device and MedTech businesses." },
  { q: "Can MJD help develop distributors?", a: "Yes. Distributor and channel development can be incorporated into the market access strategy depending on the product, territory and business model." },
  { q: "Is market access only for large companies?", a: "No. Startups and emerging healthcare companies often benefit significantly from a structured market access strategy because it helps them focus limited resources on the right opportunities." }
];

export default function MarketAccessPage({ onNavigateHome }) {
  const { openModal } = useModal();
  const [openFaq, setOpenFaq] = useState(null);
  const [activeCardIndex, setActiveCardIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const toggleFaq = (idx) => setOpenFaq(openFaq === idx ? null : idx);

  // Auto-looping 3D depth transition every 3.8 seconds (paused on hover)
  useEffect(() => {
    if (isHovered) return;
    const interval = setInterval(() => {
      setActiveCardIndex((prev) => (prev + 1) % targetAudienceData.length);
    }, 3800);
    return () => clearInterval(interval);
  }, [isHovered]);

  const handleNextCard = () => {
    setActiveCardIndex((prev) => (prev + 1) % targetAudienceData.length);
  };

  const handlePrevCard = () => {
    setActiveCardIndex((prev) => (prev - 1 + targetAudienceData.length) % targetAudienceData.length);
  };

  return (
    <div className="bg-[#F8FAFC] text-[#16324F] font-manrope selection:bg-[#E0F2FE] selection:text-[#0284C7] overflow-x-hidden">
      
      {/* 1. Breadcrumb Bar */}
      <div className="bg-white border-b border-[#E2E8F0] py-3.5">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 flex items-center justify-between text-xs sm:text-sm font-semibold text-[#64748B]">
          <div className="flex items-center gap-2">
            <button 
              type="button" 
              onClick={onNavigateHome} 
              className="hover:text-[#007BFF] transition-colors cursor-pointer focus-ring rounded"
            >
              Home
            </button>
            <span className="text-[#CBD5E1]">/</span>
            <span>Services</span>
            <span className="text-[#CBD5E1]">/</span>
            <span className="text-[#007BFF] font-black uppercase tracking-wider">Market Access</span>
          </div>
          <div className="hidden sm:inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[#0066FF] font-extrabold bg-[#E0F2FE] px-3.5 py-1.5 rounded-lg border border-[#BAE6FD]">
            <ShieldCheck className="w-4 h-4 text-[#0066FF]" />
            <span>Institutional Clearance Practice</span>
          </div>
        </div>
      </div>

      {/* 2. Hero Section & 3 Access Pillars */}
      <section className="relative w-full bg-white border-b border-[#E2E8F0] py-16 sm:py-24 lg:py-28 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
            
            {/* Left Column: Thesis & Primary CTA */}
            <div className="lg:col-span-7 space-y-6 text-left">
              <div className="inline-flex items-center gap-2 text-xs sm:text-sm font-extrabold uppercase tracking-[0.2em] text-[#0066FF]">
                <span className="w-2.5 h-2.5 rounded-full bg-[#0066FF] animate-pulse" />
                <span>Healthcare Market Access</span>
              </div>
              
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#16324F] leading-[1.2] tracking-tight">
                From Product Availability to <span className="text-[#0066FF]">Market Adoption.</span>
              </h1>

              <p className="text-base sm:text-lg text-[#334155] font-medium leading-relaxed max-w-2xl">
                A healthcare product can be technically strong and commercially unsuccessful. The difference is often market access. MJD Healthcare helps medical device manufacturers, MedTech companies and healthcare businesses build practical pathways to reach the people and institutions that influence purchasing and adoption.
              </p>

              <div className="pt-2">
                <button
                  type="button"
                  onClick={() => openModal('Market Access Assessment Request')}
                  className="px-7 py-4 rounded-xl bg-[#0066FF] hover:bg-[#0052cc] text-white text-xs sm:text-sm font-extrabold uppercase tracking-wider shadow-md hover:shadow-lg transition-all duration-200 cursor-pointer inline-flex items-center gap-2.5 focus-ring"
                >
                  <span>Build Market Access Pathway</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Right Column: 3 Structured Access Pillars */}
            <div className="lg:col-span-5 space-y-4">
              <div className="p-6 rounded-2xl bg-[#16324F] text-white border border-[#1E4976] space-y-2.5 shadow-md">
                <div className="flex items-center justify-between pb-2 border-b border-white/15">
                  <span className="text-xs font-black text-[#38BDF8] uppercase tracking-widest font-mono">01 / INSTITUTIONAL CLEARANCE</span>
                  <Building className="w-5 h-5 text-[#38BDF8]" />
                </div>
                <h3 className="text-lg font-black text-white">Hospital &amp; Procurement Access</h3>
                <p className="text-xs sm:text-sm text-white/80 font-medium leading-relaxed">
                  Navigating clinical value committees, biomedical reviews, and CFO finance boards.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-white border border-[#CBD5E1] hover:border-[#0066FF] text-[#16324F] shadow-xs space-y-2.5 transition-colors">
                <div className="flex items-center justify-between pb-2 border-b border-[#F1F5F9]">
                  <span className="text-xs font-black text-[#0066FF] uppercase tracking-widest font-mono">02 / PUBLIC TENDERS</span>
                  <Layers className="w-5 h-5 text-[#0066FF]" />
                </div>
                <h3 className="text-lg font-black text-[#16324F]">Government Procurement</h3>
                <p className="text-xs sm:text-sm text-[#64748B] font-medium leading-relaxed">
                  Structuring bids for public health networks, state procurement, and PSU tenders.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-white border border-[#CBD5E1] hover:border-[#0066FF] text-[#16324F] shadow-xs space-y-2.5 transition-colors">
                <div className="flex items-center justify-between pb-2 border-b border-[#F1F5F9]">
                  <span className="text-xs font-black text-[#0066FF] uppercase tracking-widest font-mono">03 / CHANNEL ARCHITECTURE</span>
                  <Network className="w-5 h-5 text-[#0066FF]" />
                </div>
                <h3 className="text-lg font-black text-[#16324F]">Distributor &amp; Territory Expansion</h3>
                <p className="text-xs sm:text-sm text-[#64748B] font-medium leading-relaxed">
                  Activating specialized regional medical hardware distributors across metro clusters.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. Market Access Thesis Block */}
      <section className="py-20 bg-[#16324F] text-white border-b border-[#E2E8F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 space-y-10">
          <div className="max-w-3xl space-y-3 text-left">
            <span className="text-xs font-extrabold uppercase tracking-widest text-[#38BDF8]">WHAT MARKET ACCESS MEANS TO MJD</span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white leading-tight">
              Creating a Pathway From Opportunity to Repeat Adoption
            </h2>
            <p className="text-sm sm:text-base text-white/85 font-medium leading-relaxed">
              Market access is not simply getting a product listed somewhere. It is about creating a predictable, compliant commercial pathway across every stage:
            </p>
          </div>

          {/* 6-Stage Continuum Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3.5">
            {[
              { step: "01", label: "Market Opportunity" },
              { step: "02", label: "Decision-Maker" },
              { step: "03", label: "Access" },
              { step: "04", label: "Evaluation" },
              { step: "05", label: "Adoption" },
              { step: "06", label: "Repeat Business" }
            ].map((item) => (
              <div 
                key={item.step} 
                className="p-5 rounded-xl bg-white/5 border border-white/10 text-left space-y-2 hover:bg-white/10 hover:border-[#38BDF8]/40 transition-colors"
              >
                <div className="text-xs font-mono font-black text-[#38BDF8] bg-white/10 inline-block px-2 py-0.5 rounded">
                  STEP {item.step}
                </div>
                <div className="text-sm font-bold text-white leading-snug">
                  {item.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. 7 Core Services Grid */}
      <section className="py-20 sm:py-28 bg-white border-b border-[#E2E8F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 space-y-12">
          <div className="max-w-3xl space-y-3 text-left">
            <div className="inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-[0.2em] text-[#0066FF]">
              <span className="w-2.5 h-2.5 rounded-full bg-[#0066FF]" />
              <span>OUR MARKET ACCESS SERVICES</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-[#16324F] leading-tight">
              Comprehensive Institutional Access Solutions
            </h2>
            <p className="text-base text-[#64748B] font-medium leading-relaxed">
              Targeted modules engineered to resolve institutional gating and accelerate commercial clearance.
            </p>
          </div>

          {/* Asymmetric Editorial Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                num: "01",
                title: "Market & Opportunity Assessment",
                desc: "Identify target markets, geographic opportunities, customer segments, hospital segments, competitive landscape, demand opportunities, and market-entry barriers.",
                icon: Search,
                featured: true
              },
              {
                num: "02",
                title: "Hospital & Institutional Access",
                desc: "Strategies to reach private hospitals, hospital chains, nursing homes, diagnostic centres, clinics, procurement teams, biomedical departments, and clinical stakeholders.",
                icon: Building2
              },
              {
                num: "03",
                title: "Government & Institutional Procurement",
                desc: "Navigate government healthcare institutions, state procurement organizations, public hospitals, institutional tenders, PSU opportunities, and GeM procurement.",
                icon: Layers
              },
              {
                num: "04",
                title: "Channel & Distributor Development",
                desc: "Identify and develop regional distributors, channel partners, institutional sales partners, strategic alliances, and territory partners.",
                icon: Network
              },
              {
                num: "05",
                title: "Business Development",
                desc: "Opportunity identification and commercial relationship development with key healthcare stakeholders, medical boards, and purchase committees.",
                icon: Briefcase
              },
              {
                num: "06",
                title: "Product Positioning",
                desc: "Translate technical product features into commercially relevant value propositions for clinicians, administrators, biomedical engineers, and CFOs.",
                icon: Target
              },
              {
                num: "07",
                title: "Market Expansion",
                desc: "Identify expansion opportunities across new states, cities, hospital segments, customer categories, channels, and institutional frameworks.",
                icon: Compass,
                wide: true
              }
            ].map((svc) => {
              const Icon = svc.icon;
              return (
                <div 
                  key={svc.num} 
                  className={`p-7 rounded-2xl border border-[#CBD5E1] hover:border-[#0066FF] bg-[#F8FAFC] hover:bg-white transition-all duration-200 flex flex-col justify-between space-y-4 shadow-xs ${
                    svc.featured ? 'md:col-span-2 lg:col-span-2 bg-[#F1F5F9]' : ''
                  } ${svc.wide ? 'md:col-span-2 lg:col-span-3' : ''}`}
                >
                  <div className="space-y-3 text-left">
                    <div className="flex items-center justify-between pb-3 border-b border-[#E2E8F0]">
                      <span className="text-xs font-mono font-black text-[#0066FF] bg-[#E0F2FE] px-2.5 py-1 rounded-md">
                        SERVICE {svc.num}
                      </span>
                      <div className="w-10 h-10 rounded-xl bg-white border border-[#CBD5E1] text-[#0066FF] flex items-center justify-center">
                        <Icon className="w-5 h-5" />
                      </div>
                    </div>
                    <h3 className="text-xl font-black text-[#16324F] tracking-tight">
                      {svc.title}
                    </h3>
                    <p className="text-sm text-[#475569] font-medium leading-relaxed">
                      {svc.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 5. The MJD Market Access Framework */}
      <section className="py-20 sm:py-28 bg-[#F8FAFC] border-b border-[#E2E8F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 space-y-12">
          <div className="max-w-3xl space-y-3 text-left">
            <span className="text-xs font-extrabold uppercase tracking-widest text-[#0066FF]">OUR FRAMEWORK</span>
            <h2 className="text-3xl sm:text-4xl font-black text-[#16324F] leading-tight">
              The MJD Market Access Framework
            </h2>
            <p className="text-base text-[#64748B] font-medium leading-relaxed">
              A structured 6-stage operational sequence for commercial adoption.
            </p>
          </div>

          <div className="space-y-4">
            {[
              { phase: "IDENTIFY", num: "01", desc: "Find the right market and commercial opportunity." },
              { phase: "POSITION", num: "02", desc: "Define why your product should be considered by clinical and financial decision-makers." },
              { phase: "ACCESS", num: "03", desc: "Build pathways to relevant stakeholders, biomedical review boards, and procurement teams." },
              { phase: "ENGAGE", num: "04", desc: "Create clinical and commercial conversations through structured OT trials and executive briefings." },
              { phase: "CONVERT", num: "05", desc: "Move qualified opportunities towards evaluation, formulary sign-off, and purchase contracts." },
              { phase: "EXPAND", num: "06", desc: "Build repeatability through regional channels, hospital accounts, and territory scaling." }
            ].map((f) => (
              <div 
                key={f.phase} 
                className="p-6 sm:p-7 rounded-2xl bg-white border border-[#CBD5E1] hover:border-[#0066FF] transition-colors flex flex-col md:flex-row md:items-center justify-between gap-4 text-left shadow-xs"
              >
                <div className="flex items-start sm:items-center gap-5">
                  <span className="text-2xl sm:text-3xl font-black text-[#0066FF] font-mono shrink-0 bg-[#E0F2FE] px-3 py-1.5 rounded-lg">
                    {f.num}
                  </span>
                  <div>
                    <h3 className="text-lg sm:text-xl font-black text-[#16324F] tracking-tight">{f.phase}</h3>
                    <p className="text-xs sm:text-sm text-[#475569] font-medium mt-0.5 leading-relaxed">{f.desc}</p>
                  </div>
                </div>
                <div className="shrink-0 self-start md:self-auto">
                  <span className="inline-flex items-center gap-1.5 text-xs font-black uppercase tracking-wider text-[#0066FF] bg-[#F8FAFC] border border-[#CBD5E1] px-3.5 py-1.5 rounded-lg">
                    <span>Phase {f.num}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Target Audience — Looping 3D Depth Card-Stack Carousel (Matches Reference Exactly) */}
      <section className="py-24 sm:py-32 bg-[#0C1A2B] text-white border-b border-[#1E4976] relative overflow-hidden">
        
        {/* Subtle Ambient Radial Lighting */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[550px] bg-[#0066FF]/15 rounded-full blur-[140px] pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 space-y-12 z-10 text-center">
          
          {/* Centered Header: Zero text on the left */}
          <div className="max-w-3xl mx-auto space-y-3">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-[#38BDF8]">
              <Sparkles className="w-3.5 h-3.5 text-[#38BDF8]" />
              <span>WHO NEEDS THIS SERVICE?</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight">
              Who Needs Market Access Support?
            </h2>
            <p className="text-sm sm:text-base text-slate-300 font-medium leading-relaxed">
              Institutional commercialization pathways tailored for medical device manufacturers, MedTech startups, and global healthcare companies.
            </p>
          </div>

          {/* Centered 3D Depth Viewport with At Least 3 Visible Cards */}
          <div 
            className="relative w-full max-w-6xl mx-auto h-[530px] sm:h-[580px] flex items-center justify-center overflow-hidden py-4"
            style={{ perspective: '1200px' }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            {targetAudienceData.map((card, idx) => {
              const total = targetAudienceData.length;
              let offset = (idx - activeCardIndex + total) % total;
              if (offset > total / 2) offset -= total;

              // Compute exact 3D positioning for center, left, right, and background layers
              let transform = 'translate3d(-50%, -50%, -300px) scale(0.5)';
              let opacity = 0;
              let blur = '10px';
              let zIndex = 0;
              let pointerEvents = 'none';

              if (offset === 0) {
                // 1. Center Primary Card: Sharp, Prominent, Active
                transform = 'translate3d(-50%, -50%, 0px) scale(1) rotate(0deg)';
                opacity = 1;
                blur = '0px';
                zIndex = 30;
                pointerEvents = 'auto';
              } else if (offset === -1) {
                // 2. Left Card: Clearly visible behind on the left
                transform = 'translate3d(calc(-50% - 210px), -50%, -70px) scale(0.86) rotate(-2deg)';
                opacity = 0.65;
                blur = '1px';
                zIndex = 20;
                pointerEvents = 'auto';
              } else if (offset === 1) {
                // 3. Right Card: Clearly visible behind on the right
                transform = 'translate3d(calc(-50% + 210px), -50%, -70px) scale(0.86) rotate(2deg)';
                opacity = 0.65;
                blur = '1px';
                zIndex = 20;
                pointerEvents = 'auto';
              } else if (offset === -2) {
                // 4. Far Left Layer
                transform = 'translate3d(calc(-50% - 380px), -50%, -150px) scale(0.72) rotate(-4deg)';
                opacity = 0.25;
                blur = '3.5px';
                zIndex = 10;
                pointerEvents = 'none';
              } else if (offset === 2) {
                // 5. Far Right Layer
                transform = 'translate3d(calc(-50% + 380px), -50%, -150px) scale(0.72) rotate(4deg)';
                opacity = 0.25;
                blur = '3.5px';
                zIndex = 10;
                pointerEvents = 'none';
              }

              return (
                <div
                  key={card.id}
                  onClick={() => {
                    if (offset !== 0) setActiveCardIndex(idx);
                  }}
                  style={{
                    transform,
                    opacity,
                    filter: `blur(${blur})`,
                    zIndex,
                    pointerEvents,
                    transition: 'transform 0.7s cubic-bezier(0.25, 1, 0.5, 1), opacity 0.7s cubic-bezier(0.25, 1, 0.5, 1), filter 0.7s cubic-bezier(0.25, 1, 0.5, 1)',
                    transformStyle: 'preserve-3d',
                  }}
                  className="absolute top-1/2 left-1/2 w-[290px] sm:w-[350px] md:w-[390px] h-[470px] sm:h-[510px] rounded-2xl bg-white border border-white/20 shadow-2xl overflow-hidden flex flex-col text-[#16324F] select-none cursor-pointer transition-all duration-700"
                >
                  {/* Top Half: Real Authentic Photography Header with Rounded Top */}
                  <div className="relative h-[220px] sm:h-[250px] w-full overflow-hidden bg-[#16324F] shrink-0">
                    <img 
                      src={card.image} 
                      alt={card.title}
                      className="w-full h-full object-cover object-center filter contrast-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />
                    
                    {/* Top Tag Badge */}
                    <div className="absolute top-3.5 left-4 right-4 flex items-center justify-between">
                      <span className="text-[10px] font-extrabold uppercase tracking-wider text-white bg-black/60 backdrop-blur-md px-3 py-1 rounded-full border border-white/20">
                        {card.tag}
                      </span>
                      <span className="text-[11px] font-bold text-white/90 bg-white/15 backdrop-blur-md px-2.5 py-0.5 rounded">
                        0{card.id} / 07
                      </span>
                    </div>

                    {/* Category Label */}
                    <div className="absolute bottom-3 left-4 right-4 text-left">
                      <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#38BDF8] block">
                        {card.category}
                      </span>
                    </div>
                  </div>

                  {/* Bottom Half: Clean White Container Matching Reference */}
                  <div className="p-5 sm:p-6 flex flex-col justify-between flex-1 bg-white text-left space-y-3">
                    <div>
                      <h3 className="text-lg sm:text-xl font-black text-[#16324F] leading-tight tracking-tight">
                        {card.title}
                      </h3>
                      <p className="text-xs text-[#475569] font-medium leading-relaxed mt-1.5 line-clamp-2">
                        {card.desc}
                      </p>
                    </div>

                    {/* Metric Tiles matching reference (e.g. 500 INFLUENCERS / 1500 ACTIVATIONS) */}
                    <div className="pt-3 border-t border-[#E2E8F0] grid grid-cols-2 gap-3">
                      <div className="p-2 rounded-lg bg-[#F8FAFC] border border-[#E2E8F0]">
                        <div className="text-base sm:text-lg font-black text-[#16324F]">
                          {card.metric1}
                        </div>
                        <div className="text-[10px] font-extrabold text-[#64748B] uppercase tracking-wider mt-0.5">
                          {card.label1}
                        </div>
                      </div>
                      <div className="p-2 rounded-lg bg-[#F8FAFC] border border-[#E2E8F0]">
                        <div className="text-base sm:text-lg font-black text-[#0066FF]">
                          {card.metric2}
                        </div>
                        <div className="text-[10px] font-extrabold text-[#64748B] uppercase tracking-wider mt-0.5">
                          {card.label2}
                        </div>
                      </div>
                    </div>

                    {/* Action Button */}
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        openModal(`Market Access Assessment: ${card.title}`);
                      }}
                      className="w-full py-2.5 rounded-lg bg-[#16324F] hover:bg-[#0066FF] text-white text-xs font-extrabold uppercase tracking-wider shadow-sm hover:shadow-md transition-all duration-200 cursor-pointer flex items-center justify-center gap-2"
                    >
                      <span>Structure Access Plan</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>

                </div>
              );
            })}
          </div>

          {/* Centered Controls & Dot Indicators */}
          <div className="flex flex-col items-center gap-4 pt-2">
            <div className="flex items-center gap-4">
              <button
                type="button"
                onClick={handlePrevCard}
                aria-label="Previous card in stack"
                className="w-11 h-11 rounded-full bg-white/10 hover:bg-[#0066FF] text-white border border-white/20 flex items-center justify-center transition-all cursor-pointer hover:scale-105"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              {/* Dot Indicators */}
              <div className="flex items-center gap-2">
                {targetAudienceData.map((_, i) => (
                  <button
                    key={i}
                    type="button"
                    onClick={() => setActiveCardIndex(i)}
                    aria-label={`Jump to card ${i + 1}`}
                    className={`h-2.5 rounded-full transition-all cursor-pointer ${
                      i === activeCardIndex ? 'w-8 bg-[#38BDF8]' : 'w-2.5 bg-white/25 hover:bg-white/50'
                    }`}
                  />
                ))}
              </div>

              <button
                type="button"
                onClick={handleNextCard}
                aria-label="Next card in stack"
                className="w-11 h-11 rounded-full bg-white/10 hover:bg-[#0066FF] text-white border border-white/20 flex items-center justify-center transition-all cursor-pointer hover:scale-105"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>

            {/* Subtle Autoplay Status Indicator */}
            <div className="text-xs text-slate-400 flex items-center gap-2">
              <span className={`w-2 h-2 rounded-full ${isHovered ? 'bg-[#F59E0B]' : 'bg-[#10B981] animate-pulse'}`} />
              <span>{isHovered ? 'Paused on hover • click any card or arrow to navigate' : 'Auto-advancing every 3.8s • hover to pause'}</span>
            </div>
          </div>

        </div>
      </section>

      {/* 7. FAQs */}
      <section className="py-20 bg-[#F8FAFC] border-b border-[#E2E8F0]">
        <div className="max-w-4xl mx-auto px-4 sm:px-8 lg:px-12 space-y-10">
          <div className="text-center space-y-2">
            <span className="text-xs font-extrabold uppercase tracking-widest text-[#0066FF]">INQUIRIES</span>
            <h2 className="text-3xl font-black text-[#16324F]">Frequently Asked Questions</h2>
          </div>

          <div className="space-y-3.5 text-left">
            {marketAccessFaqs.map((faq, idx) => (
              <div key={idx} className="bg-white rounded-xl border border-[#CBD5E1] overflow-hidden shadow-xs">
                <button
                  type="button"
                  onClick={() => toggleFaq(idx)}
                  aria-expanded={openFaq === idx}
                  className="w-full p-5 sm:p-6 text-left font-extrabold text-[#16324F] flex items-center justify-between gap-4 cursor-pointer hover:bg-[#F8FAFC] transition-colors focus-ring"
                >
                  <span className="text-base sm:text-lg">{faq.q}</span>
                  <ChevronDown className={`w-5 h-5 text-[#0066FF] transition-transform duration-200 shrink-0 ${openFaq === idx ? 'rotate-180' : ''}`} />
                </button>
                {openFaq === idx && (
                  <div className="px-5 sm:px-6 pb-6 text-sm text-[#475569] font-medium leading-relaxed border-t border-[#F1F5F9] pt-4">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* 8. Final Strategic CTA */}
          <div className="mt-14 p-8 sm:p-12 rounded-2xl bg-[#16324F] text-white text-center shadow-lg space-y-4 border border-[#1E4976]">
            <h3 className="text-2xl sm:text-3xl font-black text-white">
              Build Your Healthcare Market Access Strategy
            </h3>
            <p className="text-sm sm:text-base text-white/85 font-medium max-w-xl mx-auto leading-relaxed">
              Talk to MJD Healthcare to structure your hospital and channel access pathways across India.
            </p>
            <div className="pt-2">
              <button
                type="button"
                onClick={() => openModal('Market Access Page Final CTA')}
                className="px-7 py-4 rounded-xl bg-[#0066FF] hover:bg-[#0052cc] text-white text-xs sm:text-sm font-extrabold uppercase tracking-wider cursor-pointer inline-flex items-center gap-2 shadow-md transition-colors focus-ring"
              >
                <span>Talk to MJD Healthcare</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}


