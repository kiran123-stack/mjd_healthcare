import React, { useState } from 'react';
import { useModal } from '../context/ModalContext';
import {
  Globe,
  ArrowRight,
  ChevronDown,
  Search,
  Zap,
  Target,
  FileText,
  MessageSquare,
  Database,
  Users,
  CheckCircle2,
  TrendingUp,
  Activity,
  Layers,
  Sparkles,
  Award,
  Send,
  BarChart3
} from 'lucide-react';

const IMAGES = {
  executiveTeam: 'https://images.unsplash.com/photo-1573496799652-408c2ac9fe98?auto=format&fit=crop&w=1200&q=80',
  dataAnalytics: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80',
  strategyMeeting: 'https://images.unsplash.com/photo-1527689368864-3a821dbccc34?auto=format&fit=crop&w=1200&q=80',
  modernOffice: 'https://images.unsplash.com/photo-1504384764586-bb4cdc1707b0?auto=format&fit=crop&w=1200&q=80'
};

const demandFaqs = [
  { q: "What is healthcare demand generation?", a: "Healthcare demand generation is the process of creating awareness, interest and qualified commercial demand for healthcare products and services." },
  { q: "Can MJD generate medical device leads?", a: "Yes. MJD can build digital lead-generation programs for medical device and MedTech companies using search, social, content, landing pages and targeted campaigns." },
  { q: "Does MJD only manage social media?", a: "No. Social media is only one component. MJD's demand generation approach can combine SEO, AEO, AI-search visibility, paid advertising, landing pages, content, WhatsApp and CRM." },
  { q: "Can MJD generate B2B healthcare leads?", a: "Yes. MJD focuses on targeted healthcare audiences and B2B opportunities rather than generic consumer traffic." }
];

const demandServices = [
  {
    title: "Healthcare SEO",
    desc: "Improve organic search visibility for healthcare products, medical equipment, clinical services, and commercial queries.",
    icon: Search,
    color: "#007BFF",
    tag: "Search Authority",
    tagBg: "bg-[#E0F2FE]",
    tagText: "text-[#007BFF]",
    iconBg: "bg-[#007BFF]",
    borderHover: "hover:border-[#007BFF]"
  },
  {
    title: "AEO (Answer Engine Optimization)",
    desc: "Structure content to directly answer questions healthcare decision-makers ask across search platforms.",
    icon: Zap,
    color: "#10B981",
    tag: "Answer Synthesis",
    tagBg: "bg-[#D1FAE5]",
    tagText: "text-[#059669]",
    iconBg: "bg-[#10B981]",
    borderHover: "hover:border-[#10B981]"
  },
  {
    title: "GEO & AI Search Visibility",
    desc: "Build content authority designed for discoverability across AI-driven engines like ChatGPT, Perplexity, and Gemini.",
    icon: Globe,
    color: "#06B6D4",
    tag: "AI Discoverability",
    tagBg: "bg-[#CFFAFE]",
    tagText: "text-[#0891B2]",
    iconBg: "bg-[#06B6D4]",
    borderHover: "hover:border-[#06B6D4]"
  },
  {
    title: "Google Ads",
    desc: "Capture high-intent commercial searches and convert them into relevant procurement and clinical enquiries.",
    icon: Target,
    color: "#F59E0B",
    tag: "High-Intent Capture",
    tagBg: "bg-[#FEF3C7]",
    tagText: "text-[#D97706]",
    iconBg: "bg-[#F59E0B]",
    borderHover: "hover:border-[#F59E0B]"
  },
  {
    title: "LinkedIn B2B Marketing",
    desc: "Target healthcare professionals, hospital administrators, C-suite executives, and B2B decision-makers.",
    icon: Users,
    color: "#8B5CF6",
    tag: "Executive ABM",
    tagBg: "bg-[#EDE9FE]",
    tagText: "text-[#7C3AED]",
    iconBg: "bg-[#8B5CF6]",
    borderHover: "hover:border-[#8B5CF6]"
  },
  {
    title: "Meta Advertising",
    desc: "Targeted campaigns for relevant healthcare provider, clinic, and patient acquisition objectives.",
    icon: Activity,
    color: "#F43F5E",
    tag: "Provider Acquisition",
    tagBg: "bg-[#FFE4E6]",
    tagText: "text-[#E11D48]",
    iconBg: "bg-[#F43F5E]",
    borderHover: "hover:border-[#F43F5E]"
  },
  {
    title: "Conversion Landing Pages",
    desc: "High-converting landing pages tailored to specific medical devices, healthcare specialties, and GTM campaigns.",
    icon: FileText,
    color: "#0EA5E9",
    tag: "CRO & Clinical Funnels",
    tagBg: "bg-[#E0F2FE]",
    tagText: "text-[#0284C7]",
    iconBg: "bg-[#0EA5E9]",
    borderHover: "hover:border-[#0EA5E9]"
  },
  {
    title: "WhatsApp Lead Generation",
    desc: "Connect digital campaigns directly with structured WhatsApp workflows and instant lead follow-up.",
    icon: MessageSquare,
    color: "#22C55E",
    tag: "Instant Conversion",
    tagBg: "bg-[#DCFCE7]",
    tagText: "text-[#16A34A]",
    iconBg: "bg-[#22C55E]",
    borderHover: "hover:border-[#22C55E]"
  },
  {
    title: "CRM & Marketing Automation",
    desc: "Systems for lead capture, lead scoring, automated nurturing sequences, sales handover, and reporting.",
    icon: Database,
    color: "#1E4976",
    tag: "Commercial Telemetry",
    tagBg: "bg-[#E2E8F0]",
    tagText: "text-[#1E4976]",
    iconBg: "bg-[#1E4976]",
    borderHover: "hover:border-[#1E4976]"
  }
];

const funnelStages = [
  {
    stage: "01",
    label: "VISIBILITY",
    desc: "Search, AEO & AI discoverability indexing across Google, ChatGPT, and medical databases.",
    color: "#007BFF"
  },
  {
    stage: "02",
    label: "ENGAGEMENT",
    desc: "Targeted LinkedIn ABM, clinical white-paper dossiers, and peer-to-peer interest.",
    color: "#10B981"
  },
  {
    stage: "03",
    label: "QUALIFIED LEAD",
    desc: "Specific buyer inquiries verified against hospital size, specialty, and budget fit.",
    color: "#06B6D4"
  },
  {
    stage: "04",
    label: "SALES OPPORTUNITY",
    desc: "Direct handover to hospital key account managers for OT trials and commercial proposals.",
    color: "#8B5CF6"
  }
];

export default function DigitalDemandPage({ onNavigateHome }) {
  const { openModal } = useModal();
  const [openFaq, setOpenFaq] = useState(null);
  const [activeStage, setActiveStage] = useState(0);

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
            <span className="text-[#007BFF] font-black uppercase tracking-wider">Digital Demand Generation</span>
          </div>
          <div className="hidden sm:flex items-center gap-2 text-xs uppercase tracking-widest text-[#007BFF] font-extrabold bg-[#E0F2FE] px-4 py-1.5 rounded-full border border-[#BAE6FD]">
            <Globe className="w-4 h-4 text-[#007BFF]" />
            <span>Digital Growth Practice</span>
          </div>
        </div>
      </div>

      {/* 2. Hero Section: Hexagon Image Masks + Airplane Clip-Path Badge */}
      <section className="relative w-full bg-white border-b border-[#E0F2FE] py-20 sm:py-28 lg:py-32 overflow-hidden">
        {/* Background Grid Accent */}
        <div className="absolute inset-0 pointer-events-none opacity-40">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="demand-grid" width="48" height="48" patternUnits="userSpaceOnUse">
                <path d="M 48 0 L 0 0 0 48" fill="none" stroke="#E2E8F0" strokeWidth="0.8" />
                <circle cx="48" cy="0" r="1.5" fill="#007BFF" opacity="0.3" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#demand-grid)" />
          </svg>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left Column: Heading, Airplane Trajectory Badge & CTAs */}
            <div className="lg:col-span-6 space-y-8 animate-slide-left">
              
              {/* Airplane / Aerodynamic Dynamic Badge */}
              <div className="inline-flex items-center gap-3">
                <div className="px-5 py-2.5 bg-gradient-to-r from-[#007BFF] via-[#0284C7] to-[#38BDF8] text-white text-xs sm:text-sm font-extrabold uppercase tracking-[0.18em] shadow-lg shadow-[#007BFF]/25 clip-aerodynamic-badge flex items-center gap-2">
                  <Send className="w-4 h-4 -rotate-45" />
                  <span>Digital Demand Generation</span>
                </div>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#16324F] leading-[1.12] tracking-tight">
                Don't Chase Traffic. <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#007BFF] via-[#0284C7] to-[#38BDF8]">Create Qualified Healthcare Demand.</span>
              </h1>

              <p className="text-base sm:text-lg lg:text-xl text-[#475569] font-medium leading-relaxed max-w-2xl">
                MJD Healthcare builds digital demand generation systems designed around commercial objectives. We don't measure success simply by followers, likes, impressions, or generic web traffic—we focus on qualified sales opportunities.
              </p>

              <div className="flex flex-wrap items-center gap-4 pt-2">
                <button
                  type="button"
                  onClick={() => openModal('Demand Generation Audit Request')}
                  className="px-8 py-4 rounded-xl bg-[#007BFF] hover:bg-[#0056b3] text-white text-xs sm:text-sm font-extrabold uppercase tracking-wider shadow-xl shadow-[#007BFF]/30 hover:shadow-[#007BFF]/45 transition-all duration-300 cursor-pointer flex items-center gap-3 group"
                >
                  <span>Generate Qualified Demand</span>
                  <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1.5 transition-transform" />
                </button>
              </div>
            </div>

            {/* Right Column: Hexagon Image Cluster with Concentric Rings */}
            <div className="lg:col-span-6 relative flex items-center justify-center animate-slide-right min-h-[420px]">
              
              {/* Concentric Hexagon SVG Accent Rings */}
              <svg className="absolute w-[440px] h-[440px] sm:w-[500px] sm:h-[500px] pointer-events-none -z-10 animate-pulse-glow" viewBox="0 0 500 500" fill="none">
                <polygon points="250,15 465,138 465,362 250,485 35,362 35,138" stroke="#38BDF8" strokeWidth="2" strokeDasharray="8 8" opacity="0.4" />
                <polygon points="250,45 440,154 440,346 250,455 60,346 60,154" stroke="#007BFF" strokeWidth="1.5" opacity="0.25" />
              </svg>

              {/* Central Primary Hexagon Image Container */}
              <div className="relative w-64 h-72 sm:w-80 sm:h-92 clip-hexagon shadow-2xl bg-[#16324F] transform hover:scale-105 transition-transform duration-500 overflow-hidden border-4 border-white">
                <img
                  src={IMAGES.executiveTeam}
                  alt="Healthcare digital demand generation consulting team"
                  className="w-full h-full object-cover object-center"
                  loading="eager"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#16324F]/80 via-transparent to-transparent pointer-events-none" />
                
                <div className="absolute bottom-6 inset-x-4 text-center pointer-events-none">
                  <span className="text-[10px] font-black uppercase tracking-widest text-[#38BDF8] bg-[#16324F]/90 px-2.5 py-1 rounded-md">
                    B2B Demand Architecture
                  </span>
                </div>
              </div>

              {/* Secondary Overlapping Hexagon Image (Top Right) */}
              <div className="absolute -top-4 right-0 sm:right-4 w-32 h-36 sm:w-40 sm:h-44 clip-hexagon shadow-xl bg-[#007BFF] overflow-hidden border-2 border-white animate-float hidden sm:block">
                <img
                  src={IMAGES.dataAnalytics}
                  alt="Real-time clinical analytics dashboard"
                  className="w-full h-full object-cover object-center"
                />
                <div className="absolute inset-0 bg-[#007BFF]/30 pointer-events-none" />
              </div>

              {/* Floating Glassmorphic Pill 1 (Top Left) */}
              <div className="absolute -top-6 left-0 sm:-left-4 bg-white/95 backdrop-blur-md p-4 rounded-2xl shadow-xl border border-[#E0F2FE] flex items-center gap-3 animate-float max-w-xs">
                <div className="w-10 h-10 rounded-xl bg-[#D1FAE5] text-[#059669] flex items-center justify-center shrink-0">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-black text-[#16324F] uppercase tracking-wider">Prescriber Reach</div>
                  <div className="text-[11px] text-[#64748B] font-semibold">Verified Specialists &amp; HODs</div>
                </div>
              </div>

              {/* Floating Glassmorphic Pill 2 (Bottom Left) */}
              <div className="absolute -bottom-6 left-2 sm:left-6 bg-white/95 backdrop-blur-md p-4 rounded-2xl shadow-xl border border-[#E0F2FE] flex items-center gap-3 animate-float-alt max-w-xs">
                <div className="w-10 h-10 rounded-xl bg-[#007BFF] text-white flex items-center justify-center shrink-0">
                  <TrendingUp className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-black text-[#16324F] uppercase tracking-wider">AI Search Authority</div>
                  <div className="text-[11px] text-[#007BFF] font-black">AEO &amp; GEO Recommendation</div>
                </div>
              </div>

            </div>

          </div>

          {/* 3 Highlights Row Below Hero with Differentiated Colors */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-16 sm:pt-20">
            
            {/* Highlight 1: Cyan / AEO */}
            <div className="p-8 rounded-3xl bg-white border-2 border-[#BAE6FD] text-[#16324F] shadow-lg space-y-3 transform hover:-translate-y-1.5 transition-all duration-300 relative overflow-hidden group">
              <div className="h-1.5 absolute top-0 inset-x-0 bg-[#06B6D4]" />
              <div className="flex items-center justify-between">
                <span className="text-xs font-black text-[#0891B2] uppercase tracking-widest">01 / SEARCH &amp; AI VISIBILITY</span>
                <Search className="w-5 h-5 text-[#06B6D4]" />
              </div>
              <h3 className="text-xl font-black text-[#16324F] group-hover:text-[#06B6D4] transition-colors">Healthcare SEO, AEO &amp; GEO</h3>
              <p className="text-sm text-[#64748B] font-medium leading-relaxed">
                Optimizing discoverability across Google, ChatGPT, Perplexity, and medical search engines.
              </p>
            </div>

            {/* Highlight 2: Royal Blue / ABM */}
            <div className="p-8 rounded-3xl bg-[#16324F] text-white shadow-xl border border-white/10 space-y-3 transform hover:-translate-y-1.5 transition-all duration-300 relative overflow-hidden group">
              <div className="h-1.5 absolute top-0 inset-x-0 bg-[#38BDF8]" />
              <div className="flex items-center justify-between">
                <span className="text-xs font-black text-[#38BDF8] uppercase tracking-widest">02 / LINKEDIN &amp; META ABM</span>
                <Users className="w-5 h-5 text-[#38BDF8]" />
              </div>
              <h3 className="text-xl font-black text-white group-hover:text-[#38BDF8] transition-colors">B2B Decision-Maker Targeting</h3>
              <p className="text-sm text-white/80 font-medium leading-relaxed">
                Targeted account outreach to surgeons, hospital administrators, and biomedical engineers.
              </p>
            </div>

            {/* Highlight 3: Emerald / Conversion */}
            <div className="p-8 rounded-3xl bg-white border-2 border-[#A7F3D0] text-[#16324F] shadow-lg space-y-3 transform hover:-translate-y-1.5 transition-all duration-300 relative overflow-hidden group">
              <div className="h-1.5 absolute top-0 inset-x-0 bg-[#10B981]" />
              <div className="flex items-center justify-between">
                <span className="text-xs font-black text-[#059669] uppercase tracking-widest">03 / CONVERSION WORKFLOWS</span>
                <MessageSquare className="w-5 h-5 text-[#10B981]" />
              </div>
              <h3 className="text-xl font-black text-[#16324F] group-hover:text-[#10B981] transition-colors">WhatsApp &amp; CRM Nurturing</h3>
              <p className="text-sm text-[#64748B] font-medium leading-relaxed">
                Direct conversation pipelines with instant lead qualification and sales team handover.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* 3. Upward Glowing Arc Trajectory: Funnel Formula Banner (From Home Page Hero Arc) */}
      <section className="py-20 sm:py-24 bg-[#16324F] text-white border-b border-[#E0F2FE] relative overflow-hidden">
        
        {/* Ambient Upward Arc SVG Graphics */}
        <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 relative z-10">
          
          <div className="text-center space-y-4 mb-14">
            <div className="inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-[0.2em] text-[#38BDF8] bg-[#38BDF8]/15 px-4 py-1.5 rounded-full border border-[#38BDF8]/30">
              <span>OUR FOCUS</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight">
              Visibility → Engagement → Qualified Lead → Sales Opportunity
            </h2>
            <p className="text-sm sm:text-base text-white/70 max-w-2xl mx-auto font-medium">
              Every touchpoint is designed to convert high-intent healthcare decision-makers into verified hospital sales opportunities.
            </p>
          </div>

          {/* Interactive 4-Stage Demand Chain */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {funnelStages.map((st, idx) => {
              const isActive = activeStage === idx;
              return (
                <div
                  key={st.stage}
                  onClick={() => setActiveStage(idx)}
                  className={`p-6 rounded-2xl transition-all duration-300 cursor-pointer border-2 relative ${
                    isActive 
                      ? 'bg-[#1E293B] border-[#38BDF8] shadow-xl scale-105' 
                      : 'bg-[#16324F]/80 hover:bg-[#1E293B] border-white/15'
                  }`}
                >
                  <div className="flex items-center justify-between mb-3">
                    <span 
                      className="text-2xl font-black font-manrope" 
                      style={{ color: st.color }}
                    >
                      {st.stage}
                    </span>
                    <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: st.color }} />
                  </div>
                  <h4 className="text-lg font-black text-white mb-2">{st.label}</h4>
                  <p className="text-xs sm:text-sm text-white/75 font-medium leading-relaxed">
                    {st.desc}
                  </p>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* 4. 9 Digital Demand Services Grid (Vibrant Multi-Colored Cards) */}
      <section className="py-24 sm:py-32 bg-white border-b border-[#E0F2FE]">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
          
          <div className="max-w-3xl mb-16 space-y-3">
            <div className="inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-[0.2em] text-[#007BFF]">
              <span className="w-2.5 h-2.5 rounded-full bg-[#007BFF]" />
              <span>OUR DIGITAL DEMAND SERVICES</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#16324F]">
              Comprehensive Digital Demand Channels
            </h2>
            <p className="text-base sm:text-lg text-[#475569] font-medium leading-relaxed">
              Integrated omnichannel execution connecting modern search visibility, account-based outreach, and compliant conversion pipelines.
            </p>
          </div>

          {/* 3x3 Differentiated Card Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {demandServices.map((d, idx) => {
              const Icon = d.icon;
              return (
                <div 
                  key={idx} 
                  className={`rounded-3xl bg-[#F8FAFC] border-2 border-[#E0F2FE] ${d.borderHover} hover:bg-white hover:shadow-2xl transition-all duration-300 flex flex-col justify-between group overflow-hidden clip-polygon-card relative`}
                >
                  {/* Dynamic Color Accent Top Line */}
                  <div 
                    className="h-1.5 w-0 group-hover:w-full transition-all duration-500" 
                    style={{ backgroundColor: d.color }} 
                  />
                  
                  <div className="p-8 space-y-6">
                    <div className="flex items-center justify-between">
                      <div 
                        className="w-14 h-14 rounded-2xl text-white flex items-center justify-center transition-all duration-300 shadow-md group-hover:scale-110"
                        style={{ backgroundColor: d.color }}
                      >
                        <Icon className="w-7 h-7" />
                      </div>
                      <span className={`text-[11px] font-black uppercase tracking-widest ${d.tagBg} ${d.tagText} px-3 py-1 rounded-full`}>
                        {d.tag}
                      </span>
                    </div>

                    <div className="space-y-3">
                      <h3 className="text-xl sm:text-2xl font-black text-[#16324F] group-hover:text-[#007BFF] transition-colors leading-snug">
                        {d.title}
                      </h3>
                      <p className="text-sm sm:text-base text-[#64748B] font-medium leading-relaxed">
                        {d.desc}
                      </p>
                    </div>
                  </div>

                  <div className="px-8 pb-8 pt-2">
                    <div 
                      className="flex items-center gap-2 text-xs font-bold transition-colors"
                      style={{ color: d.color }}
                    >
                      <span className="uppercase tracking-wider">Execute Channel</span>
                      <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1.5 transition-transform" />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* 5. Frequently Asked Questions (Accessible Accordion) */}
      <section className="py-24 sm:py-32 bg-[#F8FAFC] border-b border-[#E0F2FE]">
        <div className="max-w-4xl mx-auto px-4 sm:px-8 lg:px-12">
          
          <div className="text-center mb-16 space-y-3">
            <span className="text-xs font-extrabold uppercase tracking-widest text-[#007BFF] bg-[#E0F2FE] px-4 py-1.5 rounded-full border border-[#BAE6FD]">
              INQUIRIES
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#16324F]">
              Frequently Asked Questions
            </h2>
            <p className="text-base sm:text-lg text-[#64748B] font-medium">
              Common questions regarding B2B healthcare demand generation.
            </p>
          </div>

          <div className="space-y-4">
            {demandFaqs.map((faq, idx) => (
              <div 
                key={idx} 
                className="bg-white rounded-2xl border-2 border-[#E0F2FE] hover:border-[#BAE6FD] overflow-hidden shadow-sm transition-all duration-200"
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

          {/* 6. Closing Executive Conversion Banner */}
          <div className="mt-20 p-10 sm:p-14 rounded-3xl bg-[#16324F] text-white text-center shadow-2xl relative overflow-hidden space-y-6">
            <div className="absolute inset-0 pointer-events-none opacity-20">
              <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <pattern id="cta-demand-grid" width="32" height="32" patternUnits="userSpaceOnUse">
                    <path d="M 32 0 L 0 0 0 32" fill="none" stroke="#38BDF8" strokeWidth="0.5" />
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#cta-demand-grid)" />
              </svg>
            </div>

            <div className="relative z-10 space-y-4 max-w-2xl mx-auto">
              <span className="text-xs font-black uppercase tracking-widest text-[#38BDF8] bg-[#38BDF8]/15 px-4 py-1.5 rounded-full border border-[#38BDF8]/30 inline-block">
                Start Building Your Demand Engine
              </span>
              <h3 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight">
                Build Your Digital Demand Generation System
              </h3>
              <p className="text-base sm:text-lg text-white/80 font-medium leading-relaxed">
                Drive qualified healthcare B2B demand across search, social, and AI channels.
              </p>
              <div className="pt-4">
                <button
                  type="button"
                  onClick={() => openModal('Demand Page CTA')}
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
