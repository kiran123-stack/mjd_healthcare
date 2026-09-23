import React, { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useModal } from '../context/ModalContext';
import {
  Layers,
  ArrowRight,
  CheckCircle2,
  ChevronDown,
  Globe,
  Building2,
  Check,
  Zap,
  Target,
  Users,
  ShieldCheck,
  TrendingUp,
  Cpu,
  BarChart3,
  Award,
  ArrowUpRight
} from 'lucide-react';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const phygitalFaqs = [
  { q: "What is Phygital marketing?", a: "Phygital marketing combines digital marketing with physical customer engagement to create a connected customer acquisition and conversion journey." },
  { q: "Why is Phygital important for healthcare?", a: "Healthcare purchasing often involves multiple stakeholders and requires trust, clinical discussion, product evaluation and institutional engagement. Combining digital and physical channels can support this complex journey." },
  { q: "Is Phygital the same as digital marketing?", a: "No. Digital marketing focuses primarily on online channels. Phygital connects online demand generation with offline market and sales activation." },
  { q: "Can Phygital marketing help medical device companies?", a: "Yes. Medical devices often require product education, clinical engagement, demonstrations and institutional sales in addition to digital visibility." },
  { q: "Does MJD provide both digital and physical support?", a: "Depending on the engagement model, MJD can combine digital demand generation with physical market activation and business development." },
  { q: "Can Phygital marketing generate B2B healthcare leads?", a: "Yes. Digital targeting can generate and qualify opportunities while physical engagement can help progress relevant institutional accounts." }
];

const digitalCapabilities = [
  "Healthcare Website Development & Optimization",
  "Healthcare SEO (Search Engine Optimization)",
  "AEO (Answer Engine Optimization) & GEO (Generative Engine Optimization)",
  "AI-Search Visibility Across ChatGPT & Perplexity",
  "Targeted Google, LinkedIn, Meta Paid Campaigns",
  "Direct Email & WhatsApp Lead Nurturing Systems",
  "High-Converting Healthcare Content & Landing Pages",
  "CRM Automation & Lead Qualification Workflows"
];

const physicalCapabilities = [
  "Hospital & Institutional Procurement Engagement",
  "On-site Product Demonstrations & Clinical OT Trials",
  "Surgeon & Key Opinion Leader (KOL) Meetings",
  "Healthcare Business Development & Account Targeting",
  "Regional Distributor Identification & Onboarding",
  "Government & Public Sector Institutional Outreach",
  "Medical Conferences, Workshops & CME Event Activation",
  "Field Market Visits & Territory Sales Activation"
];

const phygitalSteps = [
  {
    num: "01",
    stage: "DISCOVER",
    subtitle: "Digital Awareness & First Touch",
    desc: "Your target customer discovers your brand digitally via search, LinkedIn, or targeted ads.",
    tag: "Search • ABM • AI Answer Engines",
    metric: "Target Stakeholder Reach"
  },
  {
    num: "02",
    stage: "UNDERSTAND",
    subtitle: "Evidence Consumption & Due Diligence",
    desc: "They consume clinical evidence, surgeon whitepapers, and CFO payback data.",
    tag: "Clinical Papers • Payback ROI Data",
    metric: "Institutional Engagement"
  },
  {
    num: "03",
    stage: "ENGAGE",
    subtitle: "Commercial Dialogue Initiation",
    desc: "The opportunity enters a structured commercial discussion with healthcare specialists.",
    tag: "Qualified Consultation • Sales Alignment",
    metric: "Qualified Accounts"
  },
  {
    num: "04",
    stage: "VALIDATE",
    subtitle: "Technical & Clinical Due Diligence",
    desc: "Clinical, technical, and biomedical safety requirements are addressed.",
    tag: "Biomedical Dossier • Regulatory Proof",
    metric: "Safety & Compliance Pass"
  },
  {
    num: "05",
    stage: "EXPERIENCE",
    subtitle: "Physical Hands-On Trial",
    desc: "Physical in-hospital demonstrations or wet-labs support clinical evaluation.",
    tag: "OT Demonstrations • Surgeon Evaluation",
    metric: "Clinical Endorsement"
  },
  {
    num: "06",
    stage: "CONVERT",
    subtitle: "Procurement Committee Contract",
    desc: "The opportunity moves through procurement committee approval into purchase contracts.",
    tag: "Procurement Board • Contract Execution",
    metric: "Signed Supply Contract"
  },
  {
    num: "07",
    stage: "EXPAND",
    subtitle: "Network & Regional Scale",
    desc: "Accounts, regional hospital branches, and distributor networks scale.",
    tag: "Branch Expansion • National Territory",
    metric: "Multi-Year Growth"
  }
];

export default function PhygitalGrowthPage({ onNavigateHome }) {
  const { openModal } = useModal();
  const [openFaq, setOpenFaq] = useState(null);
  const [activeTab, setActiveTab] = useState('digital');
  const [activeStepIndex, setActiveStepIndex] = useState(0);

  const toggleFaq = (idx) => setOpenFaq(openFaq === idx ? null : idx);

  const scrollyRef = useRef(null);
  const pinContainerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Pinned Viewport Scrollytelling Animation
      if (scrollyRef.current && pinContainerRef.current) {
        ScrollTrigger.create({
          trigger: scrollyRef.current,
          start: 'top top',
          end: '+=2500',
          pin: pinContainerRef.current,
          scrub: 0.5,
          anticipatePin: 1,
          onUpdate: (self) => {
            const stepCount = phygitalSteps.length;
            const index = Math.min(
              stepCount - 1,
              Math.floor(self.progress * stepCount)
            );
            setActiveStepIndex(index);
          }
        });
      }
    });

    return () => ctx.revert();
  }, []);

  const activeStep = phygitalSteps[activeStepIndex];

  return (
    <div className="bg-[#F8FAFC] text-[#16324F] font-manrope selection:bg-[#007BFF]/20 selection:text-[#007BFF] overflow-x-hidden">
      
      {/* 1. Top Breadcrumb & Status Navigation */}
      <div className="bg-[#0B1528] border-b border-white/10 py-3.5 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 flex items-center justify-between text-xs sm:text-sm font-semibold">
          <div className="flex items-center gap-2 text-slate-300">
            <button
              type="button"
              onClick={onNavigateHome}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Home
            </button>
            <span className="text-slate-600">/</span>
            <span className="text-slate-400">Services</span>
            <span className="text-slate-600">/</span>
            <span className="text-[#38BDF8] font-bold">Phygital Healthcare Growth</span>
          </div>
          <div className="hidden sm:flex items-center gap-2 text-xs font-bold tracking-wider text-[#38BDF8] bg-white/10 px-3.5 py-1.5 rounded-full border border-white/15">
            <Layers className="w-3.5 h-3.5 text-[#38BDF8]" />
            <span className="uppercase">Hybrid Execution Model</span>
          </div>
        </div>
      </div>

      {/* 2. Hero Section — Exact match to Reference */}
      <section className="relative w-full min-h-[620px] lg:min-h-[700px] flex flex-col justify-between overflow-hidden bg-[#0A1124]">
        {/* Full Corporate Meeting Strategy Background */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=1920&q=80"
            alt="Corporate Strategic Team Meeting"
            className="w-full h-full object-cover brightness-[0.38] contrast-125 scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0A1124]/85 via-[#0A1124]/70 to-[#0A1124]" />
        </div>

        {/* Hero Content matching reference layout */}
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-8 lg:px-12 pt-20 sm:pt-28 pb-10 text-center flex flex-col items-center">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.25em] text-[#38BDF8] bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/15 mb-6">
            <span className="w-2 h-2 rounded-full bg-[#38BDF8] animate-pulse" />
            <span>Integrated Physical + Digital Execution</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-[1.18] tracking-tight max-w-4xl">
            Digital Gets You Seen. Physical Builds Trust.{' '}
            <span className="text-[#38BDF8]">Together, They Drive Growth.</span>
          </h1>

          <p className="mt-6 text-base sm:text-lg text-slate-300 font-normal leading-relaxed max-w-3xl">
            Healthcare buying is different. A digital campaign can create awareness. But a hospital purchase may require clinical discussion, product demonstration, procurement interaction, evaluation and multiple stakeholder approvals. That is why MJD Healthcare combines Physical + Digital execution.
          </p>

          {/* Reference Two Buttons: Primary Blue + Secondary Outline */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <button
              type="button"
              onClick={() => openModal('Phygital Growth Assessment Request')}
              className="px-8 py-3.5 rounded-lg bg-[#007BFF] hover:bg-[#0069d9] text-white text-sm font-bold tracking-wide shadow-lg shadow-[#007BFF]/30 transition-all duration-300 cursor-pointer flex items-center gap-2 transform hover:-translate-y-0.5"
            >
              <span>GET STARTED</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <button
              type="button"
              onClick={() => {
                const el = document.getElementById('scrollytelling-section');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
              className="px-7 py-3.5 rounded-lg bg-transparent hover:bg-white/10 text-white text-sm font-semibold tracking-wide border border-white/40 transition-all duration-300 cursor-pointer"
            >
              ABOUT US &rarr;
            </button>
          </div>

          {/* Reference Circular Video Trigger Badge */}
          <div className="mt-10 flex items-center gap-3.5 text-left bg-white/10 backdrop-blur-md px-5 py-2.5 rounded-full border border-white/15">
            <div className="w-10 h-10 rounded-full bg-[#007BFF] text-white flex items-center justify-center shadow-lg cursor-pointer hover:scale-105 transition-transform">
              <Zap className="w-4 h-4 fill-white" />
            </div>
            <div>
              <span className="text-xs font-bold text-white block leading-tight">Hybrid Commercial Engine</span>
              <span className="text-[11px] text-slate-300">Watch Closed-Loop Overview</span>
            </div>
          </div>
        </div>

        {/* Reference Organic Wave Separator */}
        <div className="relative z-10 w-full leading-none overflow-hidden text-[#F8FAFC]">
          <svg
            className="w-full h-14 sm:h-20 lg:h-24"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
            fill="currentColor"
          >
            <path d="M0,0 C150,90 350,-40 500,45 C650,130 900,10 1200,40 L1200,120 L0,120 Z" />
          </svg>
        </div>
      </section>

      {/* 3. Reference Section: "Why people choose our services" with Left Text & 3 Right Cards */}
      <section className="relative z-20 pb-20 sm:pb-24 max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 -mt-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Sub-Header (Matching Reference: Small Tag + Bold Title + Paragraph) */}
          <div className="lg:col-span-4 space-y-4 lg:pr-4">
            <span className="text-xs font-extrabold uppercase tracking-widest text-[#007BFF] block">
              WHY CHOOSE US
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F172A] tracking-tight leading-[1.2]">
              Why healthcare leaders choose our hybrid model
            </h2>
            <p className="text-sm text-[#64748B] leading-relaxed font-normal">
              Digital inbound creates visibility. Physical activation closes clinical evaluations inside hospital systems. We unify both into a high-performance commercial engine.
            </p>
            <div className="pt-2">
              <button
                type="button"
                onClick={() => openModal('Phygital Model Briefing')}
                className="px-6 py-3 rounded-lg bg-[#007BFF] text-white text-xs font-bold tracking-wide hover:bg-[#0062cc] transition-all shadow-md inline-flex items-center gap-2"
              >
                <span>EXPLORE SERVICES</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Right 3 Cards (Matching Reference: Icon with glow, Title, Text, and Blue "READ MORE" link) */}
          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-3 gap-6">
            {/* Card 1 */}
            <div className="p-7 rounded-2xl bg-white border border-[#E2E8F0] shadow-sm hover:shadow-xl hover:border-[#007BFF]/40 transition-all duration-300 group flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-[#E0F2FE] text-[#007BFF] flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                  <Globe className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-[#0F172A] mb-2 group-hover:text-[#007BFF] transition-colors">
                  IT Solutions &amp; Digital
                </h3>
                <p className="text-xs text-[#64748B] leading-relaxed font-normal">
                  Healthcare SEO, AEO, AI-search, LinkedIn ABM, Google, Meta, Email &amp; WhatsApp workflows engineered for doctors.
                </p>
              </div>
              <div className="mt-6 pt-3 border-t border-[#F1F5F9]">
                <button
                  type="button"
                  onClick={() => setActiveTab('digital')}
                  className="text-xs font-bold text-[#007BFF] group-hover:underline flex items-center gap-1.5 cursor-pointer"
                >
                  <span>READ MORE</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Card 2 */}
            <div className="p-7 rounded-2xl bg-white border border-[#E2E8F0] shadow-sm hover:shadow-xl hover:border-[#007BFF]/40 transition-all duration-300 group flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-[#E0F2FE] text-[#007BFF] flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                  <Building2 className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-[#0F172A] mb-2 group-hover:text-[#007BFF] transition-colors">
                  IT Consultant &amp; Field
                </h3>
                <p className="text-xs text-[#64748B] leading-relaxed font-normal">
                  On-site OT trials, surgeon meetings, biomedical audits, and distributor development executed by specialists.
                </p>
              </div>
              <div className="mt-6 pt-3 border-t border-[#F1F5F9]">
                <button
                  type="button"
                  onClick={() => setActiveTab('physical')}
                  className="text-xs font-bold text-[#007BFF] group-hover:underline flex items-center gap-1.5 cursor-pointer"
                >
                  <span>READ MORE</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Card 3 */}
            <div className="p-7 rounded-2xl bg-white border border-[#E2E8F0] shadow-sm hover:shadow-xl hover:border-[#007BFF]/40 transition-all duration-300 group flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-[#E0F2FE] text-[#007BFF] flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-[#0F172A] mb-2 group-hover:text-[#007BFF] transition-colors">
                  Institutional Security
                </h3>
                <p className="text-xs text-[#64748B] leading-relaxed font-normal">
                  Closed-loop CRM tracking, procurement committee approvals, biomedical compliance, and multi-unit contracts.
                </p>
              </div>
              <div className="mt-6 pt-3 border-t border-[#F1F5F9]">
                <button
                  type="button"
                  onClick={() => openModal('Institutional Security Inquiry')}
                  className="text-xs font-bold text-[#007BFF] group-hover:underline flex items-center gap-1.5 cursor-pointer"
                >
                  <span>READ MORE</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 4. Reference Section: "Connecting people & technology" (Split Collage with Trophy Badge & Dual Feature Pills) */}
      <section className="py-20 sm:py-24 bg-white border-y border-[#E2E8F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Column: Reference-Style Layered Image Collage with Anchored Blue 100+ Trophy Badge */}
            <div className="lg:col-span-6 relative">
              <div className="relative pl-6 sm:pl-10 pb-6 sm:pb-10">
                {/* Secondary Background Image */}
                <div className="w-48 sm:w-60 h-56 sm:h-72 rounded-2xl overflow-hidden shadow-lg border-2 border-white absolute -top-4 left-0 z-0">
                  <img
                    src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80"
                    alt="Corporate Business Consultant"
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Primary Main Image */}
                <div className="relative z-10 ml-20 sm:ml-28 w-64 sm:w-80 h-72 sm:h-96 rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
                  <img
                    src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80"
                    alt="Corporate Team Strategic Planning"
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Blue 100+ Badge Anchored on Image (Matching Reference Exactly) */}
                <div className="absolute bottom-2 left-6 sm:left-12 z-20 bg-[#007BFF] text-white p-5 rounded-2xl shadow-2xl border-4 border-white flex items-center gap-3.5">
                  <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center text-white shrink-0">
                    <Award className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-3xl font-black block leading-none">100+</span>
                    <span className="text-xs text-sky-100 font-bold mt-1 block">
                      Institutional &amp; Device Projects
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Reference Text + Dual Feature Pills + Blue Action Button */}
            <div className="lg:col-span-6 space-y-6">
              <div className="space-y-2">
                <span className="text-xs font-extrabold uppercase tracking-widest text-[#007BFF] block">
                  WHY CHOOSE US
                </span>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F172A] tracking-tight leading-[1.2]">
                  Connecting people &amp; technology
                </h2>
                <p className="text-sm sm:text-base text-[#64748B] font-normal leading-relaxed">
                  Healthcare purchasing involves clinicians, biomedical engineers, CFOs, and procurement directors. We connect your cutting-edge medical technologies with the exact institutional decision-makers through continuous digital reach and hands-on clinical engagement.
                </p>
              </div>

              {/* Reference Dual Feature Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-4 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0] flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-[#E0F2FE] text-[#007BFF] flex items-center justify-center shrink-0">
                    <Zap className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-[#0F172A]">Precision Elite Services</h4>
                    <span className="text-[11px] text-[#64748B]">Digital SEO &amp; ABM</span>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0] flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-[#E0F2FE] text-[#007BFF] flex items-center justify-center shrink-0">
                    <Users className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-[#0F172A]">Urgent Support for Clients</h4>
                    <span className="text-[11px] text-[#64748B]">Dedicated Territory Team</span>
                  </div>
                </div>
              </div>

              {/* Interactive Capability Switcher Tabs */}
              <div className="pt-2">
                <div className="flex rounded-xl bg-[#F1F5F9] p-1.5 border border-[#E2E8F0] mb-4">
                  <button
                    type="button"
                    onClick={() => setActiveTab('digital')}
                    className={`flex-1 py-2 px-3 rounded-lg text-xs font-bold transition-all cursor-pointer flex items-center justify-center gap-2 ${
                      activeTab === 'digital'
                        ? 'bg-white text-[#007BFF] shadow-sm'
                        : 'text-[#64748B] hover:text-[#0F172A]'
                    }`}
                  >
                    <Globe className="w-3.5 h-3.5" />
                    <span>Digital Engine (8)</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setActiveTab('physical')}
                    className={`flex-1 py-2 px-3 rounded-lg text-xs font-bold transition-all cursor-pointer flex items-center justify-center gap-2 ${
                      activeTab === 'physical'
                        ? 'bg-[#16324F] text-white shadow-sm'
                        : 'text-[#64748B] hover:text-[#0F172A]'
                    }`}
                  >
                    <Building2 className="w-3.5 h-3.5" />
                    <span>Physical Engine (8)</span>
                  </button>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {(activeTab === 'digital' ? digitalCapabilities : physicalCapabilities).map((item, idx) => (
                    <div
                      key={idx}
                      className="p-3 rounded-lg bg-[#F8FAFC] border border-[#E2E8F0] flex items-center gap-2.5 text-xs font-medium text-[#1E293B]"
                    >
                      <Check className="w-3.5 h-3.5 text-[#007BFF] shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Reference Blue Button */}
              <div className="pt-2">
                <button
                  type="button"
                  onClick={() => openModal('Phygital Growth Assessment Request')}
                  className="px-8 py-3.5 rounded-lg bg-[#007BFF] hover:bg-[#0069d9] text-white text-xs sm:text-sm font-bold tracking-wide shadow-md cursor-pointer inline-flex items-center gap-2 transition-all transform hover:-translate-y-0.5"
                >
                  <span>SEE MORE &rarr;</span>
                </button>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 5. PINNED VIEWPORT SCROLLYTELLING ENGINE — EXACT MATCH TO REFERENCE 2 */}
      <section
        id="scrollytelling-section"
        ref={scrollyRef}
        className="relative bg-[#E8E6DF] text-[#111111]"
      >
        {/* Pinned Viewport Container */}
        <div
          ref={pinContainerRef}
          className="w-full min-h-screen flex flex-col justify-between py-10 sm:py-14 px-6 sm:px-12 lg:px-20 max-w-7xl mx-auto overflow-hidden"
        >
          {/* Top Header Bar */}
          <div className="flex items-center justify-between border-b border-black/15 pb-4">
            <span className="text-xs sm:text-sm font-extrabold uppercase tracking-[0.2em] text-black/60">
              The Phygital Journey — 7 Stages
            </span>
            <div className="flex items-center gap-3">
              <span className="text-xs font-bold uppercase tracking-wider text-black/40">
                Stage
              </span>
              <span className="text-xs sm:text-sm font-black text-black">
                {phygitalSteps[activeStepIndex]?.num || '01'} / 07
              </span>
            </div>
          </div>

          {/* Full-Width Accordion Rows */}
          <div className="flex-1 flex flex-col justify-center divide-y divide-black/15 py-4">
            {phygitalSteps.map((step, idx) => {
              const isActive = idx === activeStepIndex;
              const isPast = idx < activeStepIndex;

              return (
                <div
                  key={step.stage}
                  className={`stage-row-${idx} transition-colors duration-500 py-4 sm:py-6 cursor-pointer select-none`}
                  onClick={() => setActiveStepIndex(idx)}
                >
                  <div className="grid grid-cols-12 gap-4 sm:gap-8 items-start">
                    
                    {/* Big Number (01, 02, 03...) */}
                    <div className="col-span-2 sm:col-span-1">
                      <span className={`text-2xl sm:text-4xl lg:text-5xl font-black tracking-tighter block transition-colors duration-300 ${
                        isActive ? 'text-black' : isPast ? 'text-black/50' : 'text-black/25'
                      }`}>
                        {step.num}
                      </span>
                    </div>

                    {/* Stage Title & Collapsible Sub-Bullets */}
                    <div className="col-span-10 sm:col-span-5 lg:col-span-5 space-y-3">
                      <h3 className={`text-2xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight leading-none transition-colors duration-300 ${
                        isActive ? 'text-black' : isPast ? 'text-black/50' : 'text-black/25'
                      }`}>
                        {step.stage}
                      </h3>

                      {/* Expanding details on active stage matching Reference 2 */}
                      <div
                        className={`overflow-hidden transition-all duration-500 ease-in-out ${
                          isActive ? 'max-h-48 opacity-100 pt-3' : 'max-h-0 opacity-0 pt-0'
                        }`}
                      >
                        <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.2em] text-black/50 block mb-2">
                          [ HOW WE EXECUTE ]
                        </span>
                        <div className="space-y-1 text-xs sm:text-sm font-semibold text-black/80">
                          {step.tag.split('•').map((t, i) => (
                            <div key={i} className="flex items-center gap-2">
                              <span className="w-1.5 h-1.5 rounded-full bg-black/50" />
                              <span>{t.trim()}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Right Column: Expanding Editorial Paragraph & Output Tag */}
                    <div className="col-span-12 sm:col-span-6 lg:col-span-6 pt-2 sm:pt-1">
                      <div
                        className={`overflow-hidden transition-all duration-500 ease-in-out ${
                          isActive
                            ? 'max-h-60 opacity-100'
                            : 'max-h-12 sm:max-h-14 opacity-30'
                        }`}
                      >
                        <p className={`text-xs sm:text-sm lg:text-base font-medium leading-relaxed ${
                          isActive ? 'text-black font-semibold' : 'text-black/50 line-clamp-2'
                        }`}>
                          {step.desc}
                        </p>

                        {isActive && (
                          <div className="mt-3 inline-flex items-center gap-2 bg-black/5 px-3 py-1.5 rounded-md border border-black/10 text-xs font-bold text-black uppercase tracking-wider">
                            <span>Output:</span>
                            <span className="text-[#007BFF] font-black">{step.metric}</span>
                          </div>
                        )}
                      </div>
                    </div>

                  </div>
                </div>
              );
            })}
          </div>

          {/* Bottom Progress Bar */}
          <div className="border-t border-black/15 pt-4 flex items-center justify-between text-xs text-black/50 font-semibold">
            <span>Scroll downward to cycle through all 7 stages</span>
            <div className="w-48 sm:w-64 h-1.5 bg-black/10 rounded-full overflow-hidden">
              <div
                className="h-full bg-black transition-all duration-300 rounded-full"
                style={{ width: `${((activeStepIndex + 1) / phygitalSteps.length) * 100}%` }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* 6. Corporate Philosophy Banner */}
      <section className="relative py-20 sm:py-24 bg-[#0A1124] text-white overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 opacity-20">
          <img
            src="https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=1600&q=80"
            alt="Corporate Strategic Consultation"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-[#0A1124]/90" />

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-8 lg:px-12 text-center space-y-6">
          <span className="inline-block text-xs font-bold uppercase tracking-[0.25em] text-[#38BDF8] bg-white/10 px-4 py-1.5 rounded-full border border-white/15">
            OUR PHILOSOPHY
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white leading-tight tracking-tight">
            Don't choose between digital and physical.<br />
            <span className="text-[#38BDF8]">Build a system where both strengthen each other.</span>
          </h2>
          <div className="p-5 sm:p-6 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 text-xs sm:text-sm font-semibold text-slate-100 inline-block shadow-lg leading-relaxed">
            Digital generates opportunity → Physical accelerates trust → Sales converts opportunity → Data improves next cycle.
          </div>
        </div>
      </section>

      {/* 7. FAQs Section */}
      <section className="py-20 sm:py-24 bg-[#F8FAFC]">
        <div className="max-w-4xl mx-auto px-4 sm:px-8 lg:px-12">
          
          <div className="text-center mb-14 space-y-2">
            <span className="text-xs font-bold uppercase tracking-widest text-[#007BFF]">
              INQUIRIES
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F172A] tracking-tight">
              Frequently Asked Questions
            </h2>
            <p className="text-sm text-[#64748B] font-normal">
              Direct answers to common questions about our hybrid commercial engagement model.
            </p>
          </div>

          <div className="space-y-3.5">
            {phygitalFaqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={idx}
                  className={`bg-white rounded-2xl border transition-all duration-200 overflow-hidden ${
                    isOpen ? 'border-[#007BFF] shadow-sm' : 'border-[#E2E8F0] hover:border-slate-300'
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => toggleFaq(idx)}
                    className="w-full p-6 text-left font-bold text-[#0F172A] flex items-center justify-between gap-4 cursor-pointer hover:bg-slate-50/60 transition-colors"
                  >
                    <span className="text-base sm:text-lg">{faq.q}</span>
                    <ChevronDown
                      className={`w-5 h-5 text-[#007BFF] shrink-0 transition-transform duration-300 ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <div className="px-6 pb-6 text-sm text-[#64748B] font-normal leading-relaxed border-t border-[#F1F5F9] pt-4">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Executive CTA Conversion Block */}
          <div className="mt-16 p-8 sm:p-12 rounded-3xl bg-[#0F172A] text-white text-center shadow-2xl space-y-5 border border-white/10 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-80 h-80 bg-[#38BDF8]/10 rounded-full blur-3xl pointer-events-none" />
            
            <span className="inline-block text-xs font-bold uppercase tracking-widest text-[#38BDF8] bg-white/10 px-3 py-1 rounded-md border border-white/15">
              HYBRID COMMERCIAL ENGINE
            </span>
            <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
              Build Your Phygital Growth Approach
            </h3>
            <p className="text-sm sm:text-base text-slate-300 font-normal max-w-xl mx-auto leading-relaxed">
              Connect digital demand with physical market activation today.
            </p>
            <div className="pt-3">
              <button
                type="button"
                onClick={() => openModal('Phygital Page CTA')}
                className="px-8 py-4 rounded-xl bg-[#007BFF] hover:bg-[#0069d9] text-white text-sm font-bold tracking-wide cursor-pointer inline-flex items-center gap-2.5 shadow-lg shadow-[#007BFF]/30 transition-all duration-300 transform hover:-translate-y-0.5"
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

