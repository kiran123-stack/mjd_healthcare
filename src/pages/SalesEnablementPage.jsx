import React, { useState } from 'react';
import { useModal } from '../context/ModalContext';
import {
  Compass,
  ArrowRight,
  ChevronDown,
  FileText,
  Target,
  ShieldCheck,
  Award,
  Users,
  Briefcase,
  CheckCircle2,
  TrendingUp,
  Activity,
  Layers,
  Sparkles,
  Zap,
  Play,
  ChevronsRight,
  Globe,
  Building2
} from 'lucide-react';

const IMAGES = {
  // 1. Modern Architectural Atrium Headquarters
  corporateArchitecture: 'https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=1400&q=80',
  // 2. High-Impact Sales Presentation & Commercial Analytics Detailer
  salesPresentation: 'https://images.unsplash.com/photo-1531497865144-0464ef8fb9a9?auto=format&fit=crop&w=1200&q=80',
  // 3. Executive Consulting Workshop & Field Enablement Team
  teamBriefing: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=1200&q=80',
  // 4. Majestic Mountain Summit Representing Peak Sales Conversion
  clearHorizon: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=1200&q=80'
};

const salesEnablementFaqs = [
  { q: "What is healthcare sales enablement?", a: "Healthcare sales enablement provides sales teams with the strategy, content, messaging, tools and processes required to engage healthcare buyers and convert opportunities." },
  { q: "What is medical device sales enablement?", a: "It is the process of equipping medical device sales teams with product positioning, presentations, account targeting, competitive messaging and sales tools." },
  { q: "Can MJD create sales presentations?", a: "Yes. MJD can develop structured commercial and product presentations for different healthcare stakeholders." },
  { q: "Does sales enablement include sales training?", a: "Training can be incorporated where required, but MJD's core focus is building the commercial framework, messaging and tools that enable sales performance." },
  { q: "How does sales enablement improve healthcare sales?", a: "It helps sales teams communicate value more clearly, target better accounts, handle objections and create a more consistent sales process." }
];

const enablementAssets = [
  {
    title: "Sales Messaging",
    desc: "Develop clear messaging explaining what the product does, who it is for, why it matters, why it is different, and why the customer should consider it.",
    icon: FileText,
    color: "#007BFF",
    tag: "Value Narrative",
    tagBg: "bg-[#E0F2FE]",
    tagText: "text-[#007BFF]",
    iconBg: "bg-[#E0F2FE]",
    iconColor: "text-[#007BFF]",
    borderHover: "hover:border-[#007BFF]"
  },
  {
    title: "Product Sales Presentations",
    desc: "Structured sales decks for hospital meetings, doctor briefings, procurement committees, distributor onboarding, and product demonstrations.",
    icon: Award,
    color: "#8B5CF6",
    tag: "Executive Decks",
    tagBg: "bg-[#EDE9FE]",
    tagText: "text-[#7C3AED]",
    iconBg: "bg-[#EDE9FE]",
    iconColor: "text-[#7C3AED]",
    borderHover: "hover:border-[#8B5CF6]"
  },
  {
    title: "Product Positioning Translation",
    desc: "Convert technical specifications into commercially relevant value propositions for clinicians, CFOs, and procurement leads.",
    icon: Compass,
    color: "#10B981",
    tag: "Clinical Translation",
    tagBg: "bg-[#D1FAE5]",
    tagText: "text-[#059669]",
    iconBg: "bg-[#D1FAE5]",
    iconColor: "text-[#059669]",
    borderHover: "hover:border-[#10B981]"
  },
  {
    title: "Account Targeting Systems",
    desc: "Help sales teams prioritize high-opportunity accounts rather than approaching every prospect equally.",
    icon: Target,
    color: "#F59E0B",
    tag: "Tiered Prioritization",
    tagBg: "bg-[#FEF3C7]",
    tagText: "text-[#D97706]",
    iconBg: "bg-[#FEF3C7]",
    iconColor: "text-[#D97706]",
    borderHover: "hover:border-[#F59E0B]"
  },
  {
    title: "Objection Handling Frameworks",
    desc: "Structure responses around common commercial, clinical, operational, and financial objections.",
    icon: ShieldCheck,
    color: "#F43F5E",
    tag: "Objection Defense",
    tagBg: "bg-[#FFE4E6]",
    tagText: "text-[#E11D48]",
    iconBg: "bg-[#FFE4E6]",
    iconColor: "text-[#E11D48]",
    borderHover: "hover:border-[#F43F5E]"
  },
  {
    title: "Competitive Positioning Battlecards",
    desc: "Knowledge cards giving sales reps clear talking points on why your product should be selected over alternatives.",
    icon: Users,
    color: "#06B6D4",
    tag: "Head-to-Head Intel",
    tagBg: "bg-[#CFFAFE]",
    tagText: "text-[#0891B2]",
    iconBg: "bg-[#CFFAFE]",
    iconColor: "text-[#0891B2]",
    borderHover: "hover:border-[#06B6D4]"
  }
];

const enablementChainSteps = [
  {
    num: "01",
    chain: "RIGHT ACCOUNT",
    desc: "Prioritizing high-opportunity hospital chains.",
    detail: "Segmenting tertiary hospitals and multispecialty networks with active capital budgets.",
    color: "#007BFF"
  },
  {
    num: "02",
    chain: "RIGHT STAKEHOLDER",
    desc: "Mapping surgeons, procurement officers, and CFOs.",
    detail: "Identifying clinical champions, biomedical evaluators, and purchase committee sign-offs.",
    color: "#8B5CF6"
  },
  {
    num: "03",
    chain: "RIGHT MESSAGE",
    desc: "Translating engineering specs into clinical & commercial ROI.",
    detail: "Customizing messaging for surgeon clinical outcomes versus hospital CFO DRG margins.",
    color: "#10B981"
  },
  {
    num: "04",
    chain: "RIGHT SALES TOOL",
    desc: "Equipping reps with battlecards, whitepapers, and payback decks.",
    detail: "Digital interactive CLM detailers, objection cheat-sheets, and hospital payback calculators.",
    color: "#F59E0B"
  },
  {
    num: "05",
    chain: "RIGHT ENGAGEMENT",
    desc: "Conducting structured wet-labs, OT demos, and C-suite briefings.",
    detail: "Managing hands-on evaluation protocols that shorten the hospital trial cycle.",
    color: "#F43F5E"
  },
  {
    num: "06",
    chain: "RIGHT FOLLOW-UP",
    desc: "Managing rate contracts, vendor codes, and tender entries.",
    detail: "Accelerating administrative empanelment, biomedical clearance, and vendor code issuance.",
    color: "#06B6D4"
  },
  {
    num: "07",
    chain: "CONVERSION",
    desc: "Closing signed hospital supply agreements and recurring orders.",
    detail: "Securing signed institutional master contracts and establishing automated re-order protocols.",
    color: "#16324F"
  }
];

export default function SalesEnablementPage({ onNavigateHome }) {
  const { openModal } = useModal();
  const [openFaq, setOpenFaq] = useState(null);
  const [activeChainStep, setActiveChainStep] = useState(0);

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
            <span className="text-[#007BFF] font-black uppercase tracking-wider">Sales Enablement</span>
          </div>
          <div className="hidden sm:flex items-center gap-2 text-xs uppercase tracking-widest text-[#007BFF] font-extrabold bg-[#E0F2FE] px-4 py-1.5 rounded-full border border-[#BAE6FD]">
            <Award className="w-4 h-4 text-[#007BFF]" />
            <span>Commercial Enablement Practice</span>
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
                  Healthcare Sales Enablement
                </span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-[1.12] tracking-tight">
                Give Your Sales Team More Than a <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#38BDF8] to-[#00D2FF]">Product Catalogue.</span>
              </h1>

              <p className="text-base sm:text-lg lg:text-xl text-white/80 font-medium leading-relaxed max-w-2xl">
                A strong product does not automatically create strong sales. Sales teams need the right message, tools, targeting, product story and commercial information to move healthcare buyers towards a decision. MJD Healthcare builds sales enablement systems for medical device, MedTech and healthcare businesses.
              </p>

              <div className="flex flex-wrap items-center gap-4 pt-4">
                <button
                  type="button"
                  onClick={() => openModal('Sales Enablement Audit Request')}
                  className="px-9 py-4.5 rounded-xl bg-[#007BFF] hover:bg-[#0056b3] text-white text-xs sm:text-sm font-extrabold uppercase tracking-wider shadow-2xl shadow-[#007BFF]/40 hover:shadow-[#007BFF]/60 hover:scale-105 transition-all duration-300 cursor-pointer flex items-center gap-3 group"
                >
                  <span>Equip Your Sales Team</span>
                  <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1.5 transition-transform" />
                </button>
              </div>
            </div>

            {/* Right Column: Visual Image 2 (Earth Globe Digital Network) with Overlapping Metric Chips */}
            <div className="lg:col-span-5 relative flex justify-center animate-slide-right">
              
              <div className="relative w-full max-w-md rounded-3xl overflow-hidden shadow-2xl border-4 border-white/20 bg-[#0A1128] group">
                <img
                  src={IMAGES.salesPresentation}
                  alt="Executive healthcare sales presentation and commercial analytics detailer"
                  className="w-full h-80 sm:h-96 object-cover object-center transform group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#16324F] via-transparent to-transparent pointer-events-none" />

                <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between pointer-events-none">
                  <div className="space-y-1">
                    <span className="text-[10px] font-black uppercase tracking-widest text-[#38BDF8]">Ecosystem Reach</span>
                    <p className="text-sm font-bold text-white">Pan-India Hospital Formulary Coverage</p>
                  </div>
                  <div className="w-10 h-10 rounded-xl bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/30">
                    <Globe className="w-5 h-5 text-[#38BDF8]" />
                  </div>
                </div>
              </div>

              {/* Floating Glassmorphic Pill */}
              <div className="absolute -top-6 -left-4 sm:-left-6 bg-white/95 backdrop-blur-md p-4 rounded-2xl shadow-xl border border-[#E0F2FE] text-[#16324F] flex items-center gap-3 animate-float max-w-xs">
                <div className="w-10 h-10 rounded-xl bg-[#007BFF] text-white flex items-center justify-center shrink-0">
                  <TrendingUp className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-black uppercase tracking-wider">Field Impact</div>
                  <div className="text-[11px] text-[#007BFF] font-black">+180% Deal Conversion</div>
                </div>
              </div>

            </div>

          </div>

          {/* 3 Highlights Row Below Hero */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-16 sm:pt-20">
            <div className="p-8 rounded-3xl bg-white/10 backdrop-blur-md border border-white/20 text-white space-y-3 transform hover:-translate-y-1.5 transition-all duration-300">
              <div className="flex items-center justify-between">
                <span className="text-xs font-black text-[#38BDF8] uppercase tracking-widest">01 / COMMERCIAL DECKS</span>
                <FileText className="w-5 h-5 text-[#38BDF8]" />
              </div>
              <h3 className="text-xl font-black text-white">Surgeon &amp; C-Suite Pitch Decks</h3>
              <p className="text-sm text-white/80 font-medium leading-relaxed">
                Tailored presentations for OT directors, hospital procurement, and CFO review boards.
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-white/10 backdrop-blur-md border border-white/20 text-white space-y-3 transform hover:-translate-y-1.5 transition-all duration-300">
              <div className="flex items-center justify-between">
                <span className="text-xs font-black text-[#00D2FF] uppercase tracking-widest">02 / OBJECTION PLAYBOOKS</span>
                <ShieldCheck className="w-5 h-5 text-[#00D2FF]" />
              </div>
              <h3 className="text-xl font-black text-white">Clinical Objection Handling</h3>
              <p className="text-sm text-white/80 font-medium leading-relaxed">
                Equipping field reps to handle clinical inertia, switching cost queries, and trial delays.
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-white/10 backdrop-blur-md border border-white/20 text-white space-y-3 transform hover:-translate-y-1.5 transition-all duration-300">
              <div className="flex items-center justify-between">
                <span className="text-xs font-black text-[#38BDF8] uppercase tracking-widest">03 / COMPETITIVE BATTLECARDS</span>
                <Target className="w-5 h-5 text-[#38BDF8]" />
              </div>
              <h3 className="text-xl font-black text-white">Competitive Positioning</h3>
              <p className="text-sm text-white/80 font-medium leading-relaxed">
                Clear talking points on why your device should be selected over market incumbent brands.
              </p>
            </div>
          </div>

        </div>

        {/* Organic Wave Divider (Direct from thecuddlecrew.com reference) */}
        <div className="absolute bottom-0 inset-x-0 overflow-hidden leading-none pointer-events-none">
          <svg className="relative block w-full h-12 sm:h-20" viewBox="0 0 1000 100" preserveAspectRatio="none">
            <path fill="#F8FAFC" d="M500,97C126.7,96.3,0.8,19.8,0,0v100l1000,0V1C1000,19.4,873.3,97.8,500,97z" />
          </svg>
        </div>
      </section>

      {/* 3. Stat Counter Banner (Inspired by thecuddlecrew.com Counter Grid) */}
      <section className="py-12 bg-[#F8FAFC] border-b border-[#E0F2FE]">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            
            <div className="p-6 rounded-2xl bg-white border border-[#E0F2FE] shadow-sm text-center space-y-1 hover:shadow-md transition-shadow">
              <div className="text-3xl sm:text-4xl font-black text-[#007BFF]">100+</div>
              <div className="text-xs sm:text-sm font-bold text-[#64748B] uppercase tracking-wider">Hospitals Mapped</div>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-[#E0F2FE] shadow-sm text-center space-y-1 hover:shadow-md transition-shadow">
              <div className="text-3xl sm:text-4xl font-black text-[#10B981]">4.2x</div>
              <div className="text-xs sm:text-sm font-bold text-[#64748B] uppercase tracking-wider">Faster Clearance</div>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-[#E0F2FE] shadow-sm text-center space-y-1 hover:shadow-md transition-shadow">
              <div className="text-3xl sm:text-4xl font-black text-[#8B5CF6]">91%</div>
              <div className="text-xs sm:text-sm font-bold text-[#64748B] uppercase tracking-wider">Rep OT Confidence</div>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-[#E0F2FE] shadow-sm text-center space-y-1 hover:shadow-md transition-shadow">
              <div className="text-3xl sm:text-4xl font-black text-[#F59E0B]">10+</div>
              <div className="text-xs sm:text-sm font-bold text-[#64748B] uppercase tracking-wider">Years Experience</div>
            </div>

          </div>
        </div>
      </section>

      {/* 4. Conversational Side-by-Side "Talk-Through" Narrative (Image 3: Team Briefing) */}
      <section className="py-24 sm:py-32 lg:py-36 bg-white border-b border-[#E0F2FE] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left Column: Image 3 (Team Briefing) with Video/Briefing Trigger Badge */}
            <div className="lg:col-span-5 relative flex flex-col items-center justify-center">
              
              <div className="relative w-full rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-[#16324F] group">
                <img
                  src={IMAGES.teamBriefing}
                  alt="Sales enablement team presentation and field coaching"
                  className="w-full h-80 sm:h-96 object-cover object-center transform group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#16324F]/85 via-transparent to-transparent pointer-events-none" />

                <div className="absolute bottom-6 inset-x-6 text-center pointer-events-none">
                  <span className="text-[11px] font-black uppercase tracking-widest text-[#38BDF8] bg-[#16324F]/90 px-3 py-1 rounded-md border border-white/20">
                    Field Detailing Telemetry
                  </span>
                </div>
              </div>

              {/* Floating Video/Briefing Trigger (Modeled after reference site) */}
              <div 
                onClick={() => openModal('Sales Enablement Briefing Protocol')}
                className="absolute -bottom-6 bg-white/95 backdrop-blur-md px-6 py-4 rounded-2xl shadow-xl border-2 border-[#BAE6FD] flex items-center gap-3 cursor-pointer hover:border-[#007BFF] hover:scale-105 transition-all duration-300"
              >
                <div className="w-11 h-11 rounded-full bg-[#007BFF] text-white flex items-center justify-center shadow-md animate-pulse">
                  <Play className="w-4 h-4 fill-white ml-0.5" />
                </div>
                <div>
                  <div className="text-xs font-black text-[#16324F] uppercase tracking-wider">Field Video Briefing</div>
                  <div className="text-[11px] text-[#007BFF] font-bold">Watch Commercial Navigator Playbook</div>
                </div>
              </div>

            </div>

            {/* Right Column: Conversational "Talk-Through" Narrative */}
            <div className="lg:col-span-7 space-y-6 lg:pl-4">
              
              <div className="inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-[0.2em] text-[#007BFF]">
                <span className="w-2.5 h-2.5 rounded-full bg-[#007BFF]" />
                <span>WHO WE ARE &amp; WHY THIS MATTERS</span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#16324F] leading-tight">
                Beyond the Product Brochure: Transforming Reps Into Clinical Navigators
              </h2>

              <p className="text-base sm:text-lg text-[#475569] font-medium leading-relaxed">
                In specialized healthcare markets, product features do not close deals. Surgeons evaluate surgical ergonomics and clinical trial outcomes, while hospital CFOs evaluate DRG payback and purchase committee compliance. MJD builds the strategic architecture that empowers sales representatives to master both conversations with precision.
              </p>

              {/* 4 Conversational Benefit Cards with Double-Arrow Icons (cuddlecrew.com style) */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                
                <div className="p-4 rounded-2xl bg-[#F8FAFC] border border-[#E0F2FE] hover:border-[#007BFF] shadow-sm flex items-center gap-3 transition-all duration-300">
                  <div className="w-10 h-10 rounded-full bg-[#E0F2FE] text-[#007BFF] flex items-center justify-center shrink-0">
                    <ChevronsRight className="w-5 h-5" />
                  </div>
                  <span className="text-sm font-bold text-[#16324F]">Clinical &amp; Commercial ROI Translation</span>
                </div>

                <div className="p-4 rounded-2xl bg-[#F8FAFC] border border-[#E0F2FE] hover:border-[#8B5CF6] shadow-sm flex items-center gap-3 transition-all duration-300">
                  <div className="w-10 h-10 rounded-full bg-[#EDE9FE] text-[#7C3AED] flex items-center justify-center shrink-0">
                    <ChevronsRight className="w-5 h-5" />
                  </div>
                  <span className="text-sm font-bold text-[#16324F]">Surgeon &amp; OT Nurse Buy-In</span>
                </div>

                <div className="p-4 rounded-2xl bg-[#F8FAFC] border border-[#E0F2FE] hover:border-[#10B981] shadow-sm flex items-center gap-3 transition-all duration-300">
                  <div className="w-10 h-10 rounded-full bg-[#D1FAE5] text-[#059669] flex items-center justify-center shrink-0">
                    <ChevronsRight className="w-5 h-5" />
                  </div>
                  <span className="text-sm font-bold text-[#16324F]">CFO &amp; Procurement Clearance</span>
                </div>

                <div className="p-4 rounded-2xl bg-[#F8FAFC] border border-[#E0F2FE] hover:border-[#F59E0B] shadow-sm flex items-center gap-3 transition-all duration-300">
                  <div className="w-10 h-10 rounded-full bg-[#FEF3C7] text-[#D97706] flex items-center justify-center shrink-0">
                    <ChevronsRight className="w-5 h-5" />
                  </div>
                  <span className="text-sm font-bold text-[#16324F]">Signed Master Supply Agreements</span>
                </div>

              </div>

            </div>

          </div>
        </div>
      </section>

      {/* 5. Comprehensive Sales Enablement Assets (Vibrant Cards with Circular Icon Containers) */}
      <section className="py-24 sm:py-32 lg:py-36 bg-[#F8FAFC] border-b border-[#E0F2FE]">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
          
          <div className="max-w-3xl mb-16 space-y-3">
            <div className="inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-[0.2em] text-[#007BFF]">
              <span className="w-2.5 h-2.5 rounded-full bg-[#007BFF]" />
              <span>WHAT WE BUILD</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#16324F]">
              Comprehensive Sales Enablement Assets
            </h2>
            <p className="text-base sm:text-lg text-[#475569] font-medium leading-relaxed">
              Purpose-built commercial tools designed to equip sales teams for every stage of institutional engagement.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {enablementAssets.map((se, idx) => {
              const Icon = se.icon;
              return (
                <div 
                  key={idx} 
                  className={`rounded-3xl bg-white border-2 border-[#E0F2FE] ${se.borderHover} hover:shadow-2xl transition-all duration-300 flex flex-col justify-between group overflow-hidden relative p-8 sm:p-9`}
                >
                  {/* Top Colored Accent Stripe */}
                  <div 
                    className="h-1.5 absolute top-0 inset-x-0 transition-all duration-500" 
                    style={{ backgroundColor: se.color }} 
                  />

                  <div className="space-y-6 pt-2">
                    <div className="flex items-center justify-between">
                      {/* Circular Icon Container (Modeled after reference site) */}
                      <div 
                        className={`w-16 h-16 rounded-full ${se.iconBg} ${se.iconColor} flex items-center justify-center transition-all duration-300 shadow-sm group-hover:scale-110`}
                      >
                        <Icon className="w-7 h-7" />
                      </div>
                      <span className={`text-[11px] font-black uppercase tracking-widest ${se.tagBg} ${se.tagText} px-3 py-1 rounded-full`}>
                        {se.tag}
                      </span>
                    </div>

                    <div className="space-y-3">
                      <h3 className="text-xl sm:text-2xl font-black text-[#16324F] group-hover:text-[#007BFF] transition-colors leading-snug">
                        {se.title}
                      </h3>
                      <p className="text-sm sm:text-base text-[#64748B] font-medium leading-relaxed">
                        {se.desc}
                      </p>
                    </div>
                  </div>

                  <div className="pt-6 border-t border-[#F1F5F9] mt-6">
                    <div 
                      className="flex items-center gap-2 text-xs font-bold transition-colors"
                      style={{ color: se.color }}
                    >
                      <span className="uppercase tracking-wider">Deploy Framework</span>
                      <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1.5 transition-transform" />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* 6. The MJD Sales Enablement Chain (7-Step Interactive Progression) */}
      <section className="py-24 sm:py-32 lg:py-36 bg-white border-b border-[#E0F2FE] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
          
          <div className="max-w-3xl mb-16 space-y-3">
            <span className="text-xs font-extrabold uppercase tracking-widest text-[#007BFF] bg-[#E0F2FE] px-4 py-1.5 rounded-full border border-[#BAE6FD]">
              OUR FRAMEWORK
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#16324F]">
              The MJD Sales Enablement Chain
            </h2>
            <p className="text-base sm:text-lg text-[#475569] font-medium leading-relaxed">
              A continuous, linked execution chain ensuring sales efforts convert into signed hospital agreements.
            </p>
          </div>

          <div className="space-y-4">
            {enablementChainSteps.map((item, idx) => {
              const isSelected = activeChainStep === idx;
              const isEven = idx % 2 === 0;

              return (
                <div 
                  key={item.chain} 
                  onClick={() => setActiveChainStep(idx)}
                  className={`p-6 sm:p-8 rounded-3xl transition-all duration-300 cursor-pointer border-2 ${
                    isSelected 
                      ? 'bg-white border-[#007BFF] shadow-2xl scale-[1.01]' 
                      : 'bg-[#F8FAFC] border-[#E0F2FE] hover:border-[#BAE6FD] shadow-sm'
                  } ${isEven ? 'hover:translate-x-1.5' : 'hover:-translate-x-1.5'} group`}
                >
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                    
                    <div className="flex items-center gap-6">
                      <div 
                        className="w-14 h-14 rounded-full text-white flex items-center justify-center font-black text-xl shadow-md shrink-0 group-hover:scale-105 transition-transform"
                        style={{ backgroundColor: item.color }}
                      >
                        {item.num}
                      </div>
                      <div>
                        <div className="flex items-center gap-3">
                          <span className="text-xs font-black uppercase tracking-widest text-[#007BFF]">
                            Step {item.num}
                          </span>
                          <span className="text-xs font-semibold text-[#64748B] bg-white px-2.5 py-0.5 rounded-md border border-[#E2E8F0]">
                            {item.detail}
                          </span>
                        </div>
                        <h3 className="text-lg sm:text-xl font-black text-[#16324F] group-hover:text-[#007BFF] transition-colors tracking-tight mt-1">
                          {item.chain}
                        </h3>
                        <p className="text-xs sm:text-sm text-[#64748B] font-medium mt-0.5 leading-relaxed">
                          {item.desc}
                        </p>
                      </div>
                    </div>

                    <div className="shrink-0">
                      <span className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#007BFF] bg-[#E0F2FE] px-4 py-2 rounded-xl">
                        <span>Phase {item.num}</span>
                        <ArrowRight className="w-4 h-4" />
                      </span>
                    </div>

                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* 7. Image 4 Section: Clear Horizons / Broad Commercial Expansion Banner */}
      <section className="relative py-24 sm:py-32 bg-[#16324F] text-white overflow-hidden">
        {/* Pristine Horizon / Ocean Image 4 */}
        <div className="absolute inset-0 z-0">
          <img
            src={IMAGES.clearHorizon}
            alt="Clear ocean horizon representing boundless commercial healthcare opportunities"
            className="w-full h-full object-cover object-center opacity-30 filter brightness-110 contrast-125"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#16324F] via-[#16324F]/85 to-transparent" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 relative z-10 text-center space-y-6">
          <span className="text-xs font-black uppercase tracking-widest text-[#38BDF8] bg-[#38BDF8]/20 px-4 py-1.5 rounded-full border border-[#38BDF8]/40 inline-block">
            Scale Across Territories
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white max-w-3xl mx-auto leading-tight">
            Clear Commercial Horizons for Your Field Force
          </h2>
          <p className="text-base sm:text-lg text-white/80 max-w-2xl mx-auto font-medium leading-relaxed">
            Eliminate territory friction, distributor confusion, and delayed evaluations. Empower your teams with predictable hospital commercial pathways.
          </p>
          <div className="pt-2">
            <button
              type="button"
              onClick={() => openModal('Territory Expansion Consultation')}
              className="px-8 py-4 rounded-xl bg-white text-[#16324F] hover:bg-[#E0F2FE] text-xs sm:text-sm font-extrabold uppercase tracking-wider shadow-xl transition-all cursor-pointer inline-flex items-center gap-2"
            >
              <span>Map Your Territory Pathway</span>
              <ArrowRight className="w-4 h-4 text-[#007BFF]" />
            </button>
          </div>
        </div>
      </section>

      {/* 8. Frequently Asked Questions (Accessible Accordion) */}
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
              Key considerations for healthcare and medical device sales enablement.
            </p>
          </div>

          <div className="space-y-4">
            {salesEnablementFaqs.map((faq, idx) => (
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

          {/* 9. Closing Executive Conversion Banner */}
          <div className="mt-20 p-10 sm:p-14 rounded-3xl bg-[#16324F] text-white text-center shadow-2xl relative overflow-hidden space-y-6">
            <div className="absolute inset-0 pointer-events-none opacity-20">
              <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <pattern id="cta-sales-grid" width="32" height="32" patternUnits="userSpaceOnUse">
                    <path d="M 32 0 L 0 0 0 32" fill="none" stroke="#38BDF8" strokeWidth="0.5" />
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#cta-sales-grid)" />
              </svg>
            </div>

            <div className="relative z-10 space-y-4 max-w-2xl mx-auto">
              <span className="text-xs font-black uppercase tracking-widest text-[#38BDF8] bg-[#38BDF8]/15 px-4 py-1.5 rounded-full border border-[#38BDF8]/30 inline-block">
                Equip Your Commercial Force
              </span>
              <h3 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight">
                Build Your Sales Enablement Framework
              </h3>
              <p className="text-base sm:text-lg text-white/80 font-medium leading-relaxed">
                Equip your sales representatives and distributors with high-converting commercial tools.
              </p>
              <div className="pt-6 flex flex-col sm:flex-row items-center justify-center gap-4">
                <button
                  type="button"
                  onClick={() => openModal('Sales Enablement Page CTA')}
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
