import React, { useState } from 'react';
import { useModal } from '../context/ModalContext';
import {
  TrendingUp,
  ArrowRight,
  CheckCircle2,
  ChevronDown,
  Search,
  Target,
  Globe,
  Zap,
  Users,
  Briefcase,
  BarChart3,
  RefreshCw,
  Layers,
  Award,
  ShieldCheck,
  Sparkles,
  Compass,
  ArrowUpRight,
  Activity,
  Check
} from 'lucide-react';

const IMAGES = {
  heroCorporate: "https://images.unsplash.com/photo-1542744094-3a31f272c490?auto=format&fit=crop&w=1920&q=80",
  dataAnalytics: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
  strategyMeeting: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1000&q=80",
  executiveReview: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1000&q=80",
  corporateOffice: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1000&q=80"
};

const growthEngineFaqs = [
  { q: "What is a healthcare Growth Engine?", a: "A healthcare Growth Engine is a connected system that combines market intelligence, positioning, digital visibility, demand generation, lead generation, sales enablement and measurement to create repeatable business growth." },
  { q: "How is a Growth Engine different from digital marketing?", a: "Digital marketing is one component of the Growth Engine. The Growth Engine connects digital marketing with sales, business development, market access and commercial measurement." },
  { q: "Can MJD build a Growth Engine for medical device companies?", a: "Yes. The system can be designed around the medical device company's target market, product, sales model, hospital strategy and growth objectives." },
  { q: "Does the Growth Engine include SEO?", a: "Yes. SEO, AEO and AI-search visibility can form an important part of the digital visibility layer." },
  { q: "Does the Growth Engine include lead generation?", a: "Yes. Lead generation and qualification are central components of the model." },
  { q: "Can MJD integrate marketing with sales?", a: "Yes. MJD's approach is designed to connect demand generation with sales enablement, business development and market activation." },
  { q: "How do you measure the Growth Engine?", a: "Depending on the business model, measurement can include qualified leads, meetings, opportunities, conversion rates, acquisition costs, account engagement and revenue contribution." },
  { q: "Is the Growth Engine suitable for healthcare startups?", a: "Yes. It can be scaled according to the startup's stage, market, budget and commercial objective." }
];

export default function GrowthEnginePage({ onNavigateHome }) {
  const { openModal } = useModal();
  const [openFaq, setOpenFaq] = useState(null);
  const toggleFaq = (idx) => setOpenFaq(openFaq === idx ? null : idx);

  return (
    <div className="bg-[#F8FAFC] text-[#0F172A] font-manrope selection:bg-[#007BFF]/20 selection:text-[#007BFF] overflow-x-hidden min-h-screen">
      
      {/* 1. Breadcrumb Navigation */}
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
            <span className="text-slate-400">Services</span>
            <span className="text-slate-600">/</span>
            <span className="text-[#38BDF8] font-bold">Healthcare Growth Engine</span>
          </div>
          <div className="hidden sm:flex items-center gap-2 text-xs font-bold tracking-wider text-[#38BDF8] bg-white/10 px-4 py-2 rounded-full border border-white/15">
            <TrendingUp className="w-4 h-4 text-[#38BDF8]" />
            <span className="uppercase">Core Commercial System</span>
          </div>
        </div>
      </div>

      {/* 2. Hero Section: Full-Bleed Corporate Boardroom Visual Background with Accessible Scrim */}
      <section className="relative w-full min-h-[640px] lg:min-h-[740px] flex flex-col justify-center overflow-hidden bg-[#0A1124] py-24 sm:py-32 lg:py-36">
        {/* Full background corporate strategy boardroom photography */}
        <div className="absolute inset-0">
          <img
            src={IMAGES.heroCorporate}
            alt="Corporate Strategic Team Collaboration"
            className="w-full h-full object-cover brightness-[0.32] contrast-125 scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0A1124]/90 via-[#0A1124]/80 to-[#0A1124]" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-6 sm:px-10 lg:px-16 text-center space-y-8">
          <div className="inline-flex items-center gap-2.5 text-xs sm:text-sm font-extrabold uppercase tracking-[0.25em] text-[#38BDF8] bg-white/10 backdrop-blur-md px-5 py-2.5 rounded-full border border-white/15">
            <span className="w-2.5 h-2.5 rounded-full bg-[#38BDF8] animate-pulse" />
            <span>Healthcare Growth Engine</span>
          </div>
          
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-[1.16] tracking-tight">
            Don't Just Generate Leads.{' '}
            <span className="text-[#38BDF8]">Build a System That Generates Growth.</span>
          </h1>

          <p className="text-lg sm:text-xl text-slate-200 font-normal leading-relaxed max-w-4xl mx-auto">
            Most companies treat marketing, sales and business development as separate functions. That creates gaps. Marketing generates leads. Sales follows up. Business development searches for opportunities. Management tries to understand what is actually working. MJD Healthcare brings these functions together into one Healthcare Growth Engine.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-5 pt-4">
            <button
              type="button"
              onClick={() => openModal('Growth Engine Audit Request')}
              className="px-9 py-4 rounded-xl bg-[#007BFF] hover:bg-[#0069d9] text-white text-sm sm:text-base font-bold uppercase tracking-wider shadow-xl shadow-[#007BFF]/30 transition-all duration-300 cursor-pointer flex items-center gap-3 transform hover:-translate-y-0.5"
            >
              <span>Deploy Healthcare Growth Engine</span>
              <ArrowRight className="w-5 h-5" />
            </button>
            <button
              type="button"
              onClick={() => {
                const el = document.getElementById('growth-components');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
              className="px-8 py-4 rounded-xl bg-white/10 hover:bg-white/20 text-white text-sm sm:text-base font-semibold tracking-wide border border-white/20 transition-all duration-300 cursor-pointer"
            >
              Explore 7 Components &rarr;
            </button>
          </div>

          {/* Clean trust highlights */}
          <div className="pt-6 flex flex-wrap items-center justify-center gap-8 text-xs sm:text-sm font-semibold text-slate-300 border-t border-white/10 max-w-3xl mx-auto">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#38BDF8]" />
              <span>Full-Funnel Closed Loop</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#38BDF8]" />
              <span>Marketing &amp; Sales Synchronization</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#38BDF8]" />
              <span>Measurable Pipeline Attribution</span>
            </div>
          </div>
        </div>
      </section>

      {/* 3. The System Formula Banner with Data Visual Backdrop */}
      <section className="relative py-20 sm:py-24 bg-[#0F172A] text-white overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 opacity-15">
          <img
            src={IMAGES.dataAnalytics}
            alt="Business Data Analytics Visualization"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-[#0F172A]/90" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8">
            <div className="space-y-3 max-w-3xl">
              <span className="text-xs font-bold text-[#38BDF8] uppercase tracking-[0.25em] block">
                THE SYSTEM FORMULA
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white leading-tight tracking-tight">
                Positioning + Visibility + Demand + Leads + Sales Enablement + Market Access + Measurement
              </h2>
            </div>
            <div className="text-xs sm:text-sm font-extrabold uppercase tracking-widest text-[#38BDF8] bg-white/10 px-6 py-4 rounded-2xl border border-white/15 shrink-0 shadow-lg">
              Repeatable Revenue System
            </div>
          </div>
        </div>
      </section>

      {/* 4. 7 Components of Growth Engine (Asymmetric Corporate Grid with Visuals) */}
      <section id="growth-components" className="py-24 sm:py-32 lg:py-36 bg-white border-b border-[#E2E8F0]">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
          
          <div className="max-w-3xl mb-16 sm:mb-20 space-y-4">
            <div className="inline-flex items-center gap-2 text-xs sm:text-sm font-extrabold uppercase tracking-[0.2em] text-[#007BFF]">
              <span className="w-2.5 h-2.5 rounded-full bg-[#007BFF]" />
              <span>7 SYSTEM COMPONENTS</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0F172A] tracking-tight leading-tight">
              The 7 Components of the Growth Engine
            </h2>
            <p className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed">
              Every stage of your commercial expansion engineered into one coordinated system.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
            {[
              {
                num: "01",
                title: "Market Intelligence",
                desc: "Understand where opportunity exists across market segments, customer profiles, competitors, geography, search demand, institutional opportunities, and market gaps.",
                icon: Search,
                tag: "Segmentation & Heatmaps"
              },
              {
                num: "02",
                title: "Positioning",
                desc: "Make the product easier to understand and choose by defining value proposition, differentiation, messaging, customer-specific positioning, and competitive advantage.",
                icon: Target,
                tag: "Value Architecture"
              },
              {
                num: "03",
                title: "Digital Visibility",
                desc: "Make the brand discoverable where healthcare decision-makers search: website, SEO, local SEO, AEO, GEO, AI-search visibility, healthcare content, LinkedIn, Google, Meta, YouTube.",
                icon: Globe,
                tag: "Omnichannel Organic Reach"
              },
              {
                num: "04",
                title: "Demand Generation",
                desc: "Create targeted demand rather than random traffic through campaigns, landing pages, account targeting, lead magnets, and healthcare B2B campaigns.",
                icon: Zap,
                tag: "High-Intent Inbound"
              },
              {
                num: "05",
                title: "Lead Generation & Qualification",
                desc: "Turn traffic into qualified opportunities with lead capture, lead qualification, lead scoring, CRM, WhatsApp workflows, email workflows, and sales handover.",
                icon: Users,
                tag: "Institutional Lead Scoring"
              },
              {
                num: "06",
                title: "Sales Enablement & Market Activation",
                desc: "Connect demand generation with sales decks, product presentations, account targeting, hospital engagement, business development, and distributor onboarding.",
                icon: Briefcase,
                tag: "Field Readiness & KOLs"
              },
              {
                num: "07",
                title: "Measurement & Optimization",
                desc: "Track metrics that matter: qualified leads, cost per lead, cost per qualified opportunity, conversion rates, channel performance, and revenue contribution.",
                icon: BarChart3,
                tag: "Attribution & Unit Economics",
                featured: true
              }
            ].map((c) => {
              const Icon = c.icon;
              return (
                <div
                  key={c.num}
                  className={`group p-8 sm:p-10 rounded-3xl border-2 transition-all duration-300 flex flex-col justify-between transform hover:-translate-y-1.5 ${
                    c.featured
                      ? 'md:col-span-2 lg:col-span-3 bg-gradient-to-br from-[#0F172A] to-[#162847] text-white border-slate-700 shadow-2xl'
                      : 'bg-[#F8FAFC] border-[#E2E8F0] hover:border-[#007BFF] hover:bg-white hover:shadow-xl hover:shadow-[#007BFF]/10'
                  }`}
                >
                  <div className="space-y-5">
                    <div className="flex items-center justify-between pb-4 border-b border-slate-200/20">
                      <span className={`text-xs font-bold uppercase tracking-wider px-3.5 py-1.5 rounded-full ${
                        c.featured
                          ? 'bg-[#38BDF8]/20 text-[#38BDF8] border border-[#38BDF8]/30'
                          : 'bg-[#E0F2FE] text-[#007BFF] border border-[#BAE6FD]'
                      }`}>
                        COMPONENT {c.num}
                      </span>
                      <div className={`w-12 h-12 rounded-2xl flex items-center justify-center transition-all duration-300 shadow-sm ${
                        c.featured
                          ? 'bg-white/10 text-[#38BDF8]'
                          : 'bg-[#E0F2FE] text-[#007BFF] group-hover:bg-[#007BFF] group-hover:text-white'
                      }`}>
                        <Icon className="w-6 h-6 transition-transform group-hover:scale-110" />
                      </div>
                    </div>
                    
                    <h3 className={`text-xl sm:text-2xl font-black tracking-tight ${
                      c.featured ? 'text-white' : 'text-[#0F172A] group-hover:text-[#007BFF] transition-colors'
                    }`}>
                      {c.title}
                    </h3>
                    
                    <p className={`text-base font-normal leading-relaxed ${
                      c.featured ? 'text-slate-300' : 'text-slate-600'
                    }`}>
                      {c.desc}
                    </p>
                  </div>

                  <div className={`mt-6 pt-4 border-t flex items-center justify-between text-xs font-semibold ${
                    c.featured ? 'border-white/10 text-[#38BDF8]' : 'border-slate-200/60 text-[#007BFF]'
                  }`}>
                    <span>{c.tag}</span>
                    <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </div>
                </div>
              );
            })}
          </div>

          {/* Embedded Corporate Photography Pair */}
          <div className="mt-14 grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="rounded-2xl overflow-hidden border border-[#E2E8F0] shadow-md group relative">
              <img
                src={IMAGES.strategyMeeting}
                alt="Executive Strategy Consultation"
                className="w-full h-64 sm:h-72 object-cover group-hover:scale-105 transition-transform duration-700 brightness-90"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A1124]/85 via-transparent to-transparent" />
              <div className="absolute bottom-5 left-6 right-6 text-white">
                <span className="text-xs font-bold text-[#38BDF8] uppercase tracking-wider block mb-1">
                  Strategy Alignment
                </span>
                <h4 className="text-lg font-bold">Cross-Functional Leadership Consensus</h4>
              </div>
            </div>

            <div className="rounded-2xl overflow-hidden border border-[#E2E8F0] shadow-md group relative">
              <img
                src={IMAGES.executiveReview}
                alt="Business Data Analytics and Revenue Measurement"
                className="w-full h-64 sm:h-72 object-cover group-hover:scale-105 transition-transform duration-700 brightness-90"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A1124]/85 via-transparent to-transparent" />
              <div className="absolute bottom-5 left-6 right-6 text-white">
                <span className="text-xs font-bold text-[#38BDF8] uppercase tracking-wider block mb-1">
                  Analytics &amp; ROI
                </span>
                <h4 className="text-lg font-bold">Closed-Loop Commercial Attribution</h4>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 5. The MJD Growth Loop (8 Connected Steps) */}
      <section className="py-24 sm:py-32 lg:py-36 bg-[#F8FAFC] border-b border-[#E2E8F0]">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
          <div className="max-w-3xl mb-16 sm:mb-20 space-y-4">
            <span className="text-xs sm:text-sm font-extrabold uppercase tracking-widest text-[#007BFF] block">
              CONTINUOUS OPTIMIZATION
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0F172A] tracking-tight leading-tight">
              The MJD Growth Loop
            </h2>
            <p className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed">
              8 interconnected steps that optimize lead flow into signed contract revenue.
            </p>
          </div>

          <div className="space-y-4">
            {[
              { step: "ATTRACT", num: "01", desc: "Create visibility among the right hospital and clinical audience.", focus: "Targeted Inbound & Authority" },
              { step: "ENGAGE", num: "02", desc: "Convert attention into meaningful interaction and clinical interest.", focus: "Clinical Evidence & Content" },
              { step: "QUALIFY", num: "03", desc: "Identify commercially relevant procurement and clinical opportunities.", focus: "Account Sizing & Due Diligence" },
              { step: "ACTIVATE", num: "04", desc: "Move prospects into active sales, OT trials, and hospital engagement.", focus: "Field Demonstration & Trials" },
              { step: "CONVERT", num: "05", desc: "Support the institutional journey towards procurement purchase.", focus: "Procurement Clearance & PO" },
              { step: "MEASURE", num: "06", desc: "Track what creates real commercial value across channels.", focus: "Pipeline CAC & Attribution" },
              { step: "OPTIMIZE", num: "07", desc: "Improve the system continuously based on field sales data.", focus: "Conversion Funnel Tuning" },
              { step: "GROW", num: "08", desc: "Scale the channels, regional markets and hospital accounts that work.", focus: "Regional & Multi-Account Scale" }
            ].map((loop) => (
              <div 
                key={loop.step} 
                className="p-6 sm:p-8 rounded-2xl bg-white border-2 border-[#E2E8F0] hover:border-[#007BFF] transition-all duration-300 shadow-sm hover:shadow-md flex flex-col md:flex-row md:items-center justify-between gap-6 group transform hover:-translate-y-0.5"
              >
                <div className="flex items-start sm:items-center gap-6">
                  <span className="w-12 h-12 rounded-xl bg-[#F1F5F9] group-hover:bg-[#007BFF] group-hover:text-white transition-colors text-lg sm:text-xl font-black text-[#007BFF] flex items-center justify-center shrink-0">
                    {loop.num}
                  </span>
                  <div className="space-y-1">
                    <div className="flex flex-wrap items-center gap-3">
                      <h3 className="text-lg sm:text-xl font-black text-[#0F172A] group-hover:text-[#007BFF] transition-colors tracking-tight">
                        {loop.step}
                      </h3>
                      <span className="text-xs font-bold text-slate-500 bg-slate-100 px-2.5 py-0.5 rounded-full">
                        {loop.focus}
                      </span>
                    </div>
                    <p className="text-sm sm:text-base text-slate-600 font-normal leading-relaxed">
                      {loop.desc}
                    </p>
                  </div>
                </div>

                <div className="shrink-0 flex items-center gap-2">
                  <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#007BFF] bg-[#E0F2FE] px-4 py-2 rounded-xl group-hover:bg-[#007BFF] group-hover:text-white transition-all">
                    <span>Step {loop.num}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Sector Models (Tailored for Healthcare Realities) */}
      <section className="py-24 sm:py-32 lg:py-36 bg-white border-b border-[#E2E8F0]">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
          <div className="max-w-3xl mb-16 space-y-4">
            <span className="text-xs sm:text-sm font-extrabold uppercase tracking-widest text-[#007BFF] block">
              TAILORED GROWTH ENGINES
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0F172A] tracking-tight leading-tight">
              Built for Your Specific Healthcare Model
            </h2>
            <p className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed">
              Different healthcare segments require distinct commercial pathways.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10">
            {/* Model A */}
            <div className="p-8 sm:p-10 rounded-3xl bg-[#F8FAFC] border-2 border-[#E2E8F0] space-y-5 hover:border-[#007BFF] hover:bg-white hover:shadow-xl transition-all duration-300 flex flex-col justify-between">
              <div className="space-y-4">
                <span className="text-xs font-bold uppercase text-[#007BFF] bg-[#E0F2FE] px-3.5 py-1.5 rounded-full border border-[#BAE6FD] inline-block">
                  MODEL A
                </span>
                <h3 className="text-2xl font-black text-[#0F172A]">For Medical Devices</h3>
                <div className="p-4 rounded-xl bg-white border border-[#E2E8F0] text-xs sm:text-sm font-medium text-slate-700 leading-relaxed space-y-2">
                  <span className="font-bold text-[#007BFF] block uppercase tracking-wider text-[11px]">Commercial Pathway:</span>
                  Product → Market → Hospital → Doctor → Procurement → Demonstration → Evaluation → Purchase → Repeat Order
                </div>
              </div>
              <div className="pt-4 border-t border-slate-200 text-xs font-bold text-slate-500">
                Optimized for MedTech &amp; Capital Equipment
              </div>
            </div>

            {/* Model B */}
            <div className="p-8 sm:p-10 rounded-3xl bg-[#F8FAFC] border-2 border-[#E2E8F0] space-y-5 hover:border-[#007BFF] hover:bg-white hover:shadow-xl transition-all duration-300 flex flex-col justify-between">
              <div className="space-y-4">
                <span className="text-xs font-bold uppercase text-[#007BFF] bg-[#E0F2FE] px-3.5 py-1.5 rounded-full border border-[#BAE6FD] inline-block">
                  MODEL B
                </span>
                <h3 className="text-2xl font-black text-[#0F172A]">For Healthcare Providers</h3>
                <div className="p-4 rounded-xl bg-white border border-[#E2E8F0] text-xs sm:text-sm font-medium text-slate-700 leading-relaxed space-y-2">
                  <span className="font-bold text-[#007BFF] block uppercase tracking-wider text-[11px]">Commercial Pathway:</span>
                  Search → Discovery → Trust → Enquiry → Appointment → Treatment → Retention → Referral
                </div>
              </div>
              <div className="pt-4 border-t border-slate-200 text-xs font-bold text-slate-500">
                Optimized for Hospitals &amp; Specialty Clinics
              </div>
            </div>

            {/* Model C */}
            <div className="p-8 sm:p-10 rounded-3xl bg-[#F8FAFC] border-2 border-[#E2E8F0] space-y-5 hover:border-[#007BFF] hover:bg-white hover:shadow-xl transition-all duration-300 flex flex-col justify-between">
              <div className="space-y-4">
                <span className="text-xs font-bold uppercase text-[#007BFF] bg-[#E0F2FE] px-3.5 py-1.5 rounded-full border border-[#BAE6FD] inline-block">
                  MODEL C
                </span>
                <h3 className="text-2xl font-black text-[#0F172A]">For Healthcare Startups</h3>
                <div className="p-4 rounded-xl bg-white border border-[#E2E8F0] text-xs sm:text-sm font-medium text-slate-700 leading-relaxed space-y-2">
                  <span className="font-bold text-[#007BFF] block uppercase tracking-wider text-[11px]">Commercial Pathway:</span>
                  Market Validation → Positioning → Launch → Visibility → Lead Generation → Adoption → Scale
                </div>
              </div>
              <div className="pt-4 border-t border-slate-200 text-xs font-bold text-slate-500">
                Optimized for HealthTech &amp; Early-Stage Innovators
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. FAQs Section */}
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
              Direct insights into designing and scaling your commercial healthcare engine.
            </p>
          </div>

          <div className="space-y-4">
            {growthEngineFaqs.map((faq, idx) => {
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

          {/* 8. Executive Consultation Card */}
          <div className="mt-16 p-8 sm:p-12 rounded-3xl bg-[#0F172A] text-white text-center shadow-2xl space-y-6 border border-white/10 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-80 h-80 bg-[#38BDF8]/10 rounded-full blur-3xl pointer-events-none" />
            
            <span className="inline-block text-xs font-bold uppercase tracking-widest text-[#38BDF8] bg-white/10 px-4 py-1.5 rounded-full border border-white/15">
              GROWTH SYSTEM AUDIT
            </span>
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight">
              Build Your Healthcare Growth Engine
            </h3>
            <p className="text-base sm:text-lg text-slate-300 font-normal max-w-2xl mx-auto leading-relaxed">
              Transition from random marketing activities to a connected commercial growth system.
            </p>
            <div className="pt-2">
              <button
                type="button"
                onClick={() => openModal('Growth Engine Page CTA')}
                className="px-9 py-4 rounded-xl bg-[#007BFF] hover:bg-[#0069d9] text-white text-sm sm:text-base font-bold uppercase tracking-wider cursor-pointer inline-flex items-center gap-3 shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-0.5"
              >
                <span>Talk to MJD Healthcare</span>
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
}


