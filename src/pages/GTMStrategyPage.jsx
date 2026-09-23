import React, { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useModal } from '../context/ModalContext';
import {
  Compass,
  ArrowRight,
  CheckCircle2,
  ChevronDown,
  Target,
  Users,
  DollarSign,
  Network,
  TrendingUp,
  FileCheck,
  ShieldCheck,
  Activity,
  Layers,
  Phone,
  Mail,
  MapPin,
  Send
} from 'lucide-react';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const gtmFaqs = [
  { q: "What is a healthcare GTM strategy?", a: "A healthcare GTM strategy defines how a healthcare product or service will enter, compete, sell and scale within its target market." },
  { q: "What is a medical device GTM strategy?", a: "It is a commercial strategy covering target markets, stakeholders, product positioning, channels, demand generation, sales execution and adoption for a medical device." },
  { q: "When should a company develop a GTM strategy?", a: "Before launching a new product, entering a new geography, changing its positioning, developing a new channel or attempting to accelerate sales." },
  { q: "Can MJD create a GTM strategy for a MedTech startup?", a: "Yes. MJD can structure GTM according to the startup's product maturity, target market, commercial model and growth objectives." },
  { q: "Does GTM include marketing?", a: "Yes. MJD's GTM approach connects marketing with market access, sales and business development rather than treating marketing as a separate activity." },
  { q: "Can MJD support GTM execution?", a: "Yes. Depending on the engagement, MJD can support both GTM strategy and execution through digital demand generation, business development, institutional outreach and sales enablement." }
];

const gtmPillarsData = [
  {
    num: "01",
    title: "Market Selection",
    desc: "Identify markets where your product has the strongest commercial opportunity across geography, hospital segment, specialty, customer type, institution type, and channel opportunity.",
    icon: Target,
    focus: "Epidemiological Sizing & Account Prioritization",
    deliverable: "Target Hospital & Specialty Heatmap"
  },
  {
    num: "02",
    title: "Customer & Stakeholder Mapping",
    desc: "Map all decision influencers: doctors, clinical departments, hospital management, procurement, biomedical teams, finance, distributors, and institutional buyers.",
    icon: Users,
    focus: "Multi-Stakeholder Consensus Mapping",
    deliverable: "Institutional Buying Committee Matrix"
  },
  {
    num: "03",
    title: "Product Positioning",
    desc: "Define clinical value, commercial value, operational value, economic value, differentiation, and competitive advantage to answer why the market should choose your product.",
    icon: FileCheck,
    focus: "Clinical Efficacy & Economic Framing",
    deliverable: "Surgeon & CFO Commercial Dossiers"
  },
  {
    num: "04",
    title: "Pricing & Commercial Strategy",
    desc: "Evaluate price positioning, commercial models, channel margins, institutional pricing, competitive benchmarks, and payback models.",
    icon: DollarSign,
    focus: "Capital vs. Reagent Rental Modeling",
    deliverable: "Institutional Pricing & Margin Structure"
  },
  {
    num: "05",
    title: "Channel Strategy",
    desc: "Determine whether growth should come through direct sales, distributors, regional partners, institutional partnerships, digital acquisition, or hybrid channels.",
    icon: Network,
    focus: "Pan-India Dealer & Territory Governance",
    deliverable: "Channel Architecture & Distributor SLAs"
  },
  {
    num: "06",
    title: "Demand Generation",
    desc: "Build digital and physical demand via SEO, AEO, GEO, landing pages, LinkedIn, Google, Meta, email, WhatsApp, healthcare content, and account-based outreach.",
    icon: TrendingUp,
    focus: "Omnichannel HCP & Procurement Inbound",
    deliverable: "Physician & Hospital Demand Funnel"
  },
  {
    num: "07",
    title: "Sales Enablement",
    desc: "Equip sales teams with product presentations, sales decks, objection handling, competitive positioning, lead qualification, and account targeting.",
    icon: Compass,
    focus: "Institutional Conversion Toolkits",
    deliverable: "Sales Detailing Decks & Battlecards"
  }
];

export default function GTMStrategyPage({ onNavigateHome }) {
  const { openModal } = useModal();
  const [openFaq, setOpenFaq] = useState(null);
  const [contactName, setContactName] = useState('');
  const [contactEmail, setContactEmail] = useState('');
  const [contactPhone, setContactPhone] = useState('');
  const [contactMessage, setContactMessage] = useState('');
  const [formSubmitted, setFormSubmitted] = useState(false);
  const pageContainerRef = useRef(null);

  const toggleFaq = (idx) => setOpenFaq(openFaq === idx ? null : idx);

  const handleQuickSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => {
      openModal(`GTM Inquiry from ${contactName || 'Client'}: ${contactMessage}`);
    }, 400);
  };

  // Scroll-Triggered Animation System
  useEffect(() => {
    if (typeof window === 'undefined') return;

    // Respect reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      // 1. Hero Content subtle fade-up
      gsap.fromTo(
        '.anim-hero-text',
        { opacity: 0, y: 28 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power2.out',
          stagger: 0.12,
        }
      );

      // 2. Hero 3 Grounded Cards Staggered Reveal
      gsap.fromTo(
        '.anim-hero-card',
        { opacity: 0, y: 35 },
        {
          opacity: 1,
          y: 0,
          duration: 0.75,
          stagger: 0.15,
          ease: 'power2.out',
          delay: 0.25,
        }
      );

      // 3. "SERVIÇOS" Section Header & 3-Column Items Scroll Reveal
      gsap.fromTo(
        '.anim-service-header',
        { opacity: 0, y: 24 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: '.anim-service-header',
            start: 'top 85%',
            once: true,
          }
        }
      );

      gsap.fromTo(
        '.anim-service-card',
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.08,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: '.anim-services-grid',
            start: 'top 82%',
            once: true,
          }
        }
      );

      // 4. Strategic Pathways Section Reveal
      gsap.fromTo(
        '.anim-pathway-card',
        { opacity: 0, y: 32 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          stagger: 0.18,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: '.anim-pathways-grid',
            start: 'top 82%',
            once: true,
          }
        }
      );

      // 5. Core Principle Callout Section Reveal
      gsap.fromTo(
        '.anim-principle-block',
        { opacity: 0, y: 28, scale: 0.99 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: '.anim-principle-block',
            start: 'top 82%',
            once: true,
          }
        }
      );

      // 6. FAQs Items Staggered Scroll Reveal
      gsap.fromTo(
        '.anim-faq-item',
        { opacity: 0, y: 18 },
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
          stagger: 0.07,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: '.anim-faqs-grid',
            start: 'top 85%',
            once: true,
          }
        }
      );

      // 7. "Fale Conosco" Bottom Contact Section Reveal
      gsap.fromTo(
        '.anim-contact-box',
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.75,
          stagger: 0.15,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: '.anim-contact-section',
            start: 'top 80%',
            once: true,
          }
        }
      );
    }, pageContainerRef);

    // Refresh triggers to ensure exact layout alignment
    const timer = setTimeout(() => {
      ScrollTrigger.refresh();
    }, 120);

    return () => {
      clearTimeout(timer);
      ctx.revert();
    };
  }, []);

  return (
    <div ref={pageContainerRef} className="bg-white text-[#16324F] font-manrope selection:bg-[#E0F2FE] selection:text-[#0284C7] overflow-x-hidden">
      
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
            <span className="text-[#007BFF] font-black uppercase tracking-wider">Go-To-Market Strategy</span>
          </div>
          <div className="hidden sm:inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[#0066FF] font-extrabold bg-[#E0F2FE] px-3.5 py-1.5 rounded-md border border-[#BAE6FD]">
            <Compass className="w-4 h-4 text-[#0066FF]" />
            <span>Commercial Launch Practice</span>
          </div>
        </div>
      </div>

      {/* 2. Hero Section: Exact replication of Reference Design
          - Authentic corporate desk / laptop background photo with soft lighting
          - Left-aligned bold heading, thesis paragraph, and dark rectangular button
          - 3 Grounded dark navy cards at the bottom with circular centered icons
      */}
      <section className="relative w-full bg-[#1A2634] pt-20 sm:pt-28 pb-16 sm:pb-24 overflow-hidden">
        {/* Authentic Corporate Strategy Desk Photography Background */}
        <img 
          src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=2000&q=85" 
          alt="Healthcare Business Strategy and Planning" 
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        {/* Subtle Warm Scrim Overlay matching reference */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#16273A]/90 via-[#16273A]/80 to-[#101E2E]/95" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 z-10 space-y-16">
          
          {/* Top Half: Headline, Paragraph, and Dark Action Button */}
          <div className="max-w-2xl text-left space-y-6">
            <h1 className="anim-hero-text text-3xl sm:text-4xl lg:text-[44px] font-extrabold text-white leading-[1.2] tracking-tight">
              Build the Right Market Before You Build the Sales Pipeline.
            </h1>

            <p className="anim-hero-text text-sm sm:text-base text-slate-200 font-medium leading-relaxed">
              Launching a healthcare product without a structured GTM strategy can lead to wasted sales effort, weak positioning and slow market adoption. MJD Healthcare develops practical Go-To-Market strategies for medical devices, MedTech, healthcare products and healthcare businesses.
            </p>

            <div className="anim-hero-text pt-2">
              <button
                type="button"
                onClick={() => openModal('GTM Strategy Assessment Request')}
                className="px-7 py-3.5 rounded-sm bg-[#16324F] hover:bg-[#0066FF] border border-white/25 text-white text-xs sm:text-sm font-extrabold uppercase tracking-wider shadow-md hover:shadow-lg transition-all duration-200 cursor-pointer inline-flex items-center gap-2 focus-ring"
              >
                <span>Structure Your GTM Launch</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Bottom Half: 3 Grounded Dark Navy Cards with Centered Circular Icons
              Matches the exact 3 cards from reference (CONFIANÇA, CREDIBILIDADE, ÉTICA)
          */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
            
            {/* Card 1: Target Market Selection */}
            <div className="anim-hero-card p-8 rounded-sm bg-[#132233] border border-white/10 text-white text-center space-y-4 shadow-xl hover:border-white/30 hover:-translate-y-1 transition-all duration-300">
              <div className="w-14 h-14 rounded-full border border-white/30 flex items-center justify-center mx-auto text-[#38BDF8]">
                <Target className="w-6 h-6" />
              </div>
              <h3 className="text-base font-extrabold uppercase tracking-wider text-white">
                TARGET MARKET SELECTION
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed font-medium">
                Institutional Customer Segmentation. Identifying high-opportunity hospital chains, clinical specialties, and geographic territories.
              </p>
            </div>

            {/* Card 2: Value Positioning */}
            <div className="anim-hero-card p-8 rounded-sm bg-[#132233] border border-white/10 text-white text-center space-y-4 shadow-xl hover:border-white/30 hover:-translate-y-1 transition-all duration-300">
              <div className="w-14 h-14 rounded-full border border-white/30 flex items-center justify-center mx-auto text-[#38BDF8]">
                <FileCheck className="w-6 h-6" />
              </div>
              <h3 className="text-base font-extrabold uppercase tracking-wider text-white">
                VALUE POSITIONING
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed font-medium">
                Clinical &amp; Commercial Framing. Translating engineering specs into surgeon outcome dossiers and CFO payback calculators.
              </p>
            </div>

            {/* Card 3: Commercial Execution */}
            <div className="anim-hero-card p-8 rounded-sm bg-[#132233] border border-white/10 text-white text-center space-y-4 shadow-xl hover:border-white/30 hover:-translate-y-1 transition-all duration-300">
              <div className="w-14 h-14 rounded-full border border-white/30 flex items-center justify-center mx-auto text-[#38BDF8]">
                <TrendingUp className="w-6 h-6" />
              </div>
              <h3 className="text-base font-extrabold uppercase tracking-wider text-white">
                COMMERCIAL EXECUTION
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed font-medium">
                Demand &amp; Sales Enablement. Equipping sales reps with competitive battlecards, pitch presentations, and account pipelines.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* 3. "SERVIÇOS" Section: Exact replication of Reference Design
          - Centered uppercase section title: SERVIÇOS / WHAT OUR GTM STRATEGY COVERS
          - Centered subtitle
          - 3-Column Clean Editorial Grid on Pure White Background
          - Each item has: Square outline icon box on left, Bold title on right, Description below, "saiba mais →" link at bottom
      */}
      <section className="py-20 sm:py-24 bg-white border-b border-[#E2E8F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 space-y-14">
          
          {/* Centered Header with Scroll Animation */}
          <div className="anim-service-header text-center space-y-2 max-w-2xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#16324F] tracking-tight uppercase">
              SERVICES // GTM ARCHITECTURE
            </h2>
            <p className="text-sm text-[#64748B] font-medium">
              Explore our core commercialization disciplines and strategic capabilities
            </p>
          </div>

          {/* 3-Column Grid matching reference with Staggered Scroll Animation */}
          <div className="anim-services-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-12 text-left">
            
            {gtmPillarsData.map((pillar) => {
              const Icon = pillar.icon;
              return (
                <div key={pillar.num} className="anim-service-card flex items-start gap-4 group hover:-translate-y-0.5 transition-transform duration-200">
                  {/* Square Outline Icon Box */}
                  <div className="w-12 h-12 rounded-sm border border-[#CBD5E1] bg-[#F8FAFC] flex items-center justify-center shrink-0 text-[#16324F] group-hover:border-[#0066FF] group-hover:text-[#0066FF] group-hover:bg-[#E0F2FE]/30 transition-colors">
                    <Icon className="w-5 h-5" />
                  </div>

                  {/* Content */}
                  <div className="space-y-2">
                    <h3 className="text-base font-bold text-[#16324F] tracking-tight group-hover:text-[#0066FF] transition-colors">
                      {pillar.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#64748B] font-medium leading-relaxed">
                      {pillar.desc}
                    </p>
                    <button
                      type="button"
                      onClick={() => openModal(`GTM Discipline: ${pillar.title}`)}
                      className="text-xs font-bold text-[#0066FF] hover:underline inline-flex items-center gap-1 cursor-pointer pt-1"
                    >
                      <span>saiba mais / inspect scope</span>
                      <ArrowRight className="w-3 h-3" />
                    </button>
                  </div>
                </div>
              );
            })}

            {/* 8th Service Item: Connected GTM Chain (Completes the 3-column layout) */}
            <div className="anim-service-card flex items-start gap-4 group hover:-translate-y-0.5 transition-transform duration-200">
              <div className="w-12 h-12 rounded-sm border border-[#CBD5E1] bg-[#F8FAFC] flex items-center justify-center shrink-0 text-[#16324F] group-hover:border-[#0066FF] group-hover:text-[#0066FF] group-hover:bg-[#E0F2FE]/30 transition-colors">
                <Layers className="w-5 h-5" />
              </div>
              <div className="space-y-2">
                <h3 className="text-base font-bold text-[#16324F] tracking-tight group-hover:text-[#0066FF] transition-colors">
                  The Connected Healthcare GTM Chain
                </h3>
                <p className="text-xs sm:text-sm text-[#64748B] font-medium leading-relaxed">
                  Market → Product → Positioning → Channel → Demand → Sales → Adoption → Growth. A connected progression across all 8 commercial milestones.
                </p>
                <button
                  type="button"
                  onClick={() => openModal('Connected Healthcare GTM Chain Inquiry')}
                  className="text-xs font-bold text-[#0066FF] hover:underline inline-flex items-center gap-1 cursor-pointer pt-1"
                >
                  <span>saiba mais / inspect scope</span>
                  <ArrowRight className="w-3 h-3" />
                </button>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 4. Strategic Trajectories: Product Launches vs Market Expansion */}
      <section className="py-20 bg-[#F8FAFC] border-b border-[#E2E8F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 space-y-12">
          
          <div className="text-center space-y-2 max-w-2xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#16324F] tracking-tight uppercase">
              STRATEGIC PATHWAYS
            </h2>
            <p className="text-sm text-[#64748B] font-medium">
              Tailored execution frameworks for new technology introductions and portfolio scaling
            </p>
          </div>

          <div className="anim-pathways-grid grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch text-left">
            
            {/* Left: Product Launches */}
            <div className="anim-pathway-card p-8 sm:p-10 rounded-sm bg-white border border-[#CBD5E1] shadow-sm space-y-6 flex flex-col justify-between hover:border-[#0066FF] transition-colors">
              <div className="space-y-3">
                <span className="text-xs font-bold uppercase tracking-wider text-[#0066FF]">
                  FOR PRODUCT LAUNCHES
                </span>
                <h3 className="text-xl font-bold text-[#16324F]">
                  Structuring a New Product Launch
                </h3>
                <p className="text-sm text-[#64748B] font-medium leading-relaxed">
                  Moving a new healthcare technology from clearance to commercial adoption.
                </p>
                <div className="pt-2 border-t border-[#E2E8F0] divide-y divide-[#F1F5F9]">
                  {["Product", "Target Market", "Positioning", "Launch", "Lead Generation", "Hospital Engagement", "Evaluation", "Conversion"].map((s, idx) => (
                    <div key={s} className="py-2.5 flex items-center justify-between text-xs sm:text-sm font-semibold text-[#16324F]">
                      <div className="flex items-center gap-2.5">
                        <span className="w-5 h-5 rounded-full bg-[#E0F2FE] text-[#0066FF] flex items-center justify-center text-[11px] font-bold">
                          {idx + 1}
                        </span>
                        <span>{s}</span>
                      </div>
                      <span className="text-[11px] text-[#64748B]">Phase 0{idx + 1}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right: Market Expansion */}
            <div className="anim-pathway-card p-8 sm:p-10 rounded-sm bg-[#16324F] text-white border border-[#16324F] shadow-sm space-y-6 flex flex-col justify-between hover:border-[#38BDF8] transition-colors">
              <div className="space-y-3">
                <span className="text-xs font-bold uppercase tracking-wider text-[#38BDF8]">
                  FOR MARKET EXPANSION
                </span>
                <h3 className="text-xl font-bold text-white">
                  Scaling Existing Healthcare Products
                </h3>
                <p className="text-sm text-slate-300 font-medium leading-relaxed">
                  Already selling but want to accelerate sales volume and enter new territories?
                </p>
                <div className="pt-2 border-t border-white/15 divide-y divide-white/10">
                  {["New Territories & States", "New Hospital Chains", "New Customer Segments", "New Distribution Channels", "New Clinical Applications", "Strategic Institutional Partnerships"].map((s) => (
                    <div key={s} className="py-3 flex items-center gap-3 text-xs sm:text-sm font-semibold text-white">
                      <CheckCircle2 className="w-4 h-4 text-[#38BDF8] shrink-0" />
                      <span>{s}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 5. Core GTM Principle Callout with Laboratory Photography */}
      <section className="py-20 bg-white border-b border-[#E2E8F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
          <div className="anim-principle-block grid grid-cols-1 lg:grid-cols-12 gap-8 items-center border border-[#CBD5E1] p-8 sm:p-12 bg-[#F8FAFC] rounded-sm">
            
            <div className="lg:col-span-5 rounded-sm overflow-hidden border border-[#CBD5E1]">
              <img 
                src="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1000&q=80" 
                alt="Medical Device Engineering and Diagnostic Laboratory" 
                className="w-full h-64 sm:h-72 object-cover object-center"
              />
            </div>

            <div className="lg:col-span-7 space-y-4 text-left">
              <span className="text-xs font-bold uppercase tracking-widest text-[#0066FF]">
                OUR GTM PRINCIPLE
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#16324F] leading-snug">
                Don't ask only: <span className="text-[#DC2626]">“How do we sell this product?”</span><br />
                Ask: <span className="text-[#0066FF]">“Where does this product have the strongest opportunity, who needs it, who influences the decision, and what will make them adopt it?”</span>
              </h2>
              <p className="text-sm sm:text-base text-[#64748B] font-medium leading-relaxed">
                That is where effective healthcare GTM strategy begins.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* 6. FAQs */}
      <section className="py-20 bg-[#F8FAFC] border-b border-[#E2E8F0]">
        <div className="max-w-4xl mx-auto px-4 sm:px-8 lg:px-12 space-y-10">
          <div className="text-center space-y-2">
            <span className="text-xs font-bold uppercase tracking-widest text-[#0066FF]">INQUIRIES</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#16324F]">Frequently Asked Questions</h2>
          </div>

          <div className="anim-faqs-grid space-y-3.5 text-left">
            {gtmFaqs.map((faq, idx) => (
              <div key={idx} className="anim-faq-item bg-white rounded-sm border border-[#CBD5E1] overflow-hidden shadow-xs">
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
        </div>
      </section>

      {/* 7. "Fale conosco" Contact / Consultation Section: Exact replication of Reference Design
          - Deep dark navy / charcoal full-bleed background
          - Split 2-column layout:
            - Left: Clean form (Name, Email, Phone, Message, Submit)
            - Right: Bold "Fale conosco / Connect with MJD Healthcare", subtitle, direct contact phone & channels
      */}
      <section className="anim-contact-section relative w-full bg-[#142334] py-20 sm:py-24 text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left Column: Form Fields (Matches the reference contact form layout) */}
            <div className="anim-contact-box lg:col-span-7 bg-white/5 border border-white/10 p-8 sm:p-10 rounded-sm shadow-xl text-left space-y-6">
              <h3 className="text-xl font-extrabold text-white pb-2 border-b border-white/10">
                Request a Commercial GTM Assessment
              </h3>

              {formSubmitted ? (
                <div className="p-6 rounded-sm bg-[#0066FF]/20 border border-[#0066FF] text-center space-y-2">
                  <CheckCircle2 className="w-8 h-8 text-[#38BDF8] mx-auto" />
                  <div className="text-base font-bold text-white">Inquiry Received</div>
                  <p className="text-xs text-slate-200">Our Healthcare Commercial Practice will contact you shortly.</p>
                </div>
              ) : (
                <form onSubmit={handleQuickSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1">
                      Your Name / Company
                    </label>
                    <input 
                      type="text" 
                      required
                      value={contactName}
                      onChange={(e) => setContactName(e.target.value)}
                      placeholder="e.g. Dr. Rajesh Verma / OrthoTech Systems"
                      className="w-full px-4 py-3 rounded-sm bg-white/10 border border-white/20 text-white placeholder-slate-400 text-sm focus:outline-none focus:border-[#38BDF8]"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1">
                        Your Email
                      </label>
                      <input 
                        type="email" 
                        required
                        value={contactEmail}
                        onChange={(e) => setContactEmail(e.target.value)}
                        placeholder="name@company.com"
                        className="w-full px-4 py-3 rounded-sm bg-white/10 border border-white/20 text-white placeholder-slate-400 text-sm focus:outline-none focus:border-[#38BDF8]"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1">
                        Phone / WhatsApp
                      </label>
                      <input 
                        type="tel" 
                        value={contactPhone}
                        onChange={(e) => setContactPhone(e.target.value)}
                        placeholder="+91 98450 00000"
                        className="w-full px-4 py-3 rounded-sm bg-white/10 border border-white/20 text-white placeholder-slate-400 text-sm focus:outline-none focus:border-[#38BDF8]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1">
                      Message / Product Launch Scope
                    </label>
                    <textarea 
                      rows="3"
                      value={contactMessage}
                      onChange={(e) => setContactMessage(e.target.value)}
                      placeholder="Specify your product maturity, target hospitals, or commercial launch objectives..."
                      className="w-full px-4 py-3 rounded-sm bg-white/10 border border-white/20 text-white placeholder-slate-400 text-sm focus:outline-none focus:border-[#38BDF8]"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 rounded-sm bg-[#0066FF] hover:bg-[#0052cc] text-white text-xs sm:text-sm font-extrabold uppercase tracking-wider shadow-md transition-colors cursor-pointer flex items-center justify-center gap-2"
                  >
                    <span>ENVIAR / SUBMIT GTM INQUIRY</span>
                    <Send className="w-4 h-4" />
                  </button>
                </form>
              )}
            </div>

            {/* Right Column: "Fale conosco" Information Block (Matches Reference) */}
            <div className="anim-contact-box lg:col-span-5 text-left space-y-6">
              <div className="space-y-2">
                <span className="text-xs font-bold uppercase tracking-widest text-[#38BDF8]">
                  FALE CONOSCO // DIRECT CONSULTATION
                </span>
                <h3 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                  Connect with MJD Healthcare
                </h3>
              </div>

              <p className="text-sm text-slate-300 leading-relaxed font-medium">
                Connect directly with our commercial advisors to evaluate institutional access, distributor networks, or hospital commercialization for your healthcare technology.
              </p>

              <div className="pt-4 space-y-4 border-t border-white/15">
                <div>
                  <span className="text-xs text-slate-400 uppercase tracking-wider block">
                    Direct Advisory Line / WhatsApp
                  </span>
                  <div className="text-2xl sm:text-3xl font-extrabold text-[#38BDF8] tracking-tight mt-1">
                    +91 98450 12345
                  </div>
                </div>

                <div className="space-y-2 pt-2 text-xs text-slate-300">
                  <div className="flex items-center gap-2">
                    <Mail className="w-4 h-4 text-[#38BDF8]" />
                    <span>advisory@mjdhealthcare.com</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-[#38BDF8]" />
                    <span>Mumbai • New Delhi • Bangalore • Pan-India</span>
                  </div>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

    </div>
  );
}
