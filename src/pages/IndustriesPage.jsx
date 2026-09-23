import React from 'react';
import { useModal } from '../context/ModalContext';
import {
  Building2,
  Stethoscope,
  Activity,
  Rocket,
  Search,
  Building,
  Briefcase,
  Globe,
  ArrowRight,
  CheckCircle2,
  Layers,
  Award,
  ShieldCheck,
  Sparkles,
  ChevronsRight,
  TrendingUp,
  Cpu,
  Plane,
  MapPin,
  Clock,
  Compass,
  FileCheck2,
  Users
} from 'lucide-react';

const IMAGES = {
  // 1. "big hospital outsite" - Imposing glass medical center & tertiary healthcare campus exterior
  hospitalExterior: 'https://images.unsplash.com/photo-1586773860418-d37222d8fce3?auto=format&fit=crop&w=1400&q=80',
  // 2. "travel pic" - High-altitude aviation / airplane wing above clouds for international medical transit
  flightTravel: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=80',
  // 3. "people" - Confident multidisciplinary clinical team & healthcare executives in modern medical center
  medicalTeam: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=1200&q=80',
  // 4. "people" - Doctor & clinical director consulting on diagnostics with tablet
  doctorConsulting: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1200&q=80',
  // 5. Strategic boardroom workshop & commercial advisory session
  strategicWorkshop: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1200&q=80',
  // 6. High-tech hospital surgical suite, OT robotics & capital medical equipment
  surgicalEquipment: 'https://images.unsplash.com/photo-1581594693702-fbdc51b2763b?auto=format&fit=crop&w=1200&q=80',
  // 7. Modern international airport transit concourse for medical tourism & global entry
  globalTransit: 'https://images.unsplash.com/photo-1520085601670-ee14aa5fa3e8?auto=format&fit=crop&w=1200&q=80'
};

const industriesList = [
  {
    id: "med-devices",
    num: "01",
    name: "Medical Devices",
    subtitle: "Capital Equipment & Surgical Consumables",
    icon: Stethoscope,
    color: "#007BFF",
    tagBg: "bg-[#E0F2FE]",
    tagText: "text-[#007BFF]",
    iconBg: "bg-[#E0F2FE]",
    iconColor: "text-[#007BFF]",
    borderHover: "hover:border-[#007BFF]",
    desc: "From product launch to hospital adoption, we help medical device companies build the right market strategy.",
    support: "Market access, GTM strategy, product positioning, hospital outreach, lead generation, sales enablement, distributor development and institutional business development.",
    bestFor: "Manufacturers, OEMs, emerging device companies and companies launching new products in India."
  },
  {
    id: "medtech",
    num: "02",
    name: "MedTech & Healthcare Technology",
    subtitle: "Robotics, AI Diagnostics & Health IT",
    icon: Activity,
    color: "#8B5CF6",
    tagBg: "bg-[#EDE9FE]",
    tagText: "text-[#7C3AED]",
    iconBg: "bg-[#EDE9FE]",
    iconColor: "text-[#7C3AED]",
    borderHover: "hover:border-[#8B5CF6]",
    desc: "Innovative healthcare technology needs more than a good product. It needs the right positioning, buyers and adoption strategy.",
    support: "GTM strategy, market entry, product positioning, digital demand generation, hospital engagement, KOL outreach and sales enablement.",
    bestFor: "AI diagnostic platforms, surgical robotics, remote monitoring, health software."
  },
  {
    id: "pharmaceuticals",
    num: "03",
    name: "Pharmaceuticals",
    subtitle: "Specialty Formulations & Life Sciences",
    icon: Building2,
    color: "#10B981",
    tagBg: "bg-[#D1FAE5]",
    tagText: "text-[#059669]",
    iconBg: "bg-[#D1FAE5]",
    iconColor: "text-[#059669]",
    borderHover: "hover:border-[#10B981]",
    desc: "We help pharmaceutical companies strengthen their commercial presence and identify opportunities for market expansion.",
    support: "Product and brand positioning, GTM planning, business development, channel strategy, digital marketing, lead generation and market expansion.",
    bestFor: "Pharma manufacturers, emerging brands, third-party manufacturers and PCD/pharma businesses."
  },
  {
    id: "startups",
    num: "04",
    name: "Healthcare Startups",
    subtitle: "Seed to Series B Clinical Innovators",
    icon: Rocket,
    color: "#F59E0B",
    tagBg: "bg-[#FEF3C7]",
    tagText: "text-[#D97706]",
    iconBg: "bg-[#FEF3C7]",
    iconColor: "text-[#D97706]",
    borderHover: "hover:border-[#F59E0B]",
    desc: "A strong healthcare idea needs a commercially viable route to market.",
    support: "Market validation, GTM strategy, healthcare business development, digital presence, lead generation, partnerships and sales enablement.",
    bestFor: "Early-stage healthtech, biotech, and MedTech founders looking for commercial traction."
  },
  {
    id: "diagnostics",
    num: "05",
    name: "Diagnostics & Pathology",
    subtitle: "IVD Instruments, Labs & POC Testing",
    icon: Search,
    color: "#F43F5E",
    tagBg: "bg-[#FFE4E6]",
    tagText: "text-[#E11D48]",
    iconBg: "bg-[#FFE4E6]",
    iconColor: "text-[#E11D48]",
    borderHover: "hover:border-[#F43F5E]",
    desc: "Diagnostics businesses operate in a highly competitive market where trust, accessibility and institutional relationships matter.",
    support: "Digital demand generation, hospital and clinic partnerships, referral network development, market expansion, positioning and patient acquisition strategies.",
    bestFor: "Diagnostic chains, independent pathology labs, IVD equipment providers."
  },
  {
    id: "hospitals",
    num: "06",
    name: "Hospitals & Healthcare Providers",
    subtitle: "Multi-Specialty & Corporate Networks",
    icon: Building,
    color: "#06B6D4",
    tagBg: "bg-[#CFFAFE]",
    tagText: "text-[#0891B2]",
    iconBg: "bg-[#CFFAFE]",
    iconColor: "text-[#0891B2]",
    borderHover: "hover:border-[#06B6D4]",
    desc: "For hospitals and healthcare providers, growth is about reaching the right patients and building sustainable referral and institutional relationships.",
    support: "Digital marketing, local SEO, lead generation, patient acquisition, brand positioning, referral partnerships and growth campaigns.",
    bestFor: "Hospitals, clinics, dental clinics, specialty centres, IVF centres."
  },
  {
    id: "equipment",
    num: "07",
    name: "Medical Equipment & Hospital Infrastructure",
    subtitle: "Hospital CapEx & OT Infrastructure",
    icon: Building2,
    color: "#16324F",
    tagBg: "bg-[#E2E8F0]",
    tagText: "text-[#1E293B]",
    iconBg: "bg-[#E2E8F0]",
    iconColor: "text-[#1E293B]",
    borderHover: "hover:border-[#16324F]",
    desc: "Medical equipment businesses often depend on institutional sales, distributors and long procurement cycles.",
    support: "Market mapping, product positioning, institutional outreach, distributor development, lead generation, sales enablement and GTM strategy.",
    bestFor: "OT equipment suppliers, ICU bed manufacturers, hospital turn-key contractors."
  },
  {
    id: "service-providers",
    num: "08",
    name: "Healthcare Service Providers",
    subtitle: "B2B Healthcare Operations & Advisory",
    icon: Briefcase,
    color: "#0D9488",
    tagBg: "bg-[#CCFBF1]",
    tagText: "text-[#0F766E]",
    iconBg: "bg-[#CCFBF1]",
    iconColor: "text-[#0F766E]",
    borderHover: "hover:border-[#0D9488]",
    desc: "Healthcare services require a different growth approach from product businesses.",
    support: "B2B lead generation, digital marketing, partnership development, market expansion, business development and sales strategy.",
    bestFor: "Clinical research organizations, healthcare IT integrators, biomedical maintenance providers."
  },
  {
    id: "international-entry",
    num: "09",
    name: "International Healthcare Companies Entering India",
    subtitle: "Cross-Border Market Access",
    icon: Globe,
    color: "#6366F1",
    tagBg: "bg-[#E0E7FF]",
    tagText: "text-[#4338CA]",
    iconBg: "bg-[#E0E7FF]",
    iconColor: "text-[#4338CA]",
    borderHover: "hover:border-[#6366F1]",
    desc: "Entering India requires more than simply finding a distributor.",
    support: "Market assessment, GTM strategy, partner identification, distributor development, institutional access, business development and local market activation.",
    bestFor: "Global MedTech, device, and digital health brands establishing an Indian foothold."
  },
  {
    id: "medical-tourism",
    num: "10",
    name: "Medical Tourism & International Patient Services",
    subtitle: "Cross-Border Healthcare Acquisition",
    icon: Plane,
    color: "#0284C7",
    tagBg: "bg-[#E0F2FE]",
    tagText: "text-[#0284C7]",
    iconBg: "bg-[#E0F2FE]",
    iconColor: "text-[#0284C7]",
    borderHover: "hover:border-[#0284C7]",
    desc: "International patient acquisition requires coordinated digital marketing, healthcare partnerships and patient conversion processes.",
    support: "International lead generation, market development, hospital partnerships, patient acquisition, digital campaigns and India market coordination.",
    bestFor: "Corporate hospital chains, medical tourism facilitators, specialty centers."
  }
];

export default function IndustriesPage({ onNavigateHome }) {
  const { openModal } = useModal();

  return (
    <div className="bg-[#F8FAFC] text-[#16324F] font-manrope selection:bg-[#38BDF8]/20 selection:text-[#0284C7] overflow-x-hidden">
      
      {/* Hidden SVG Definitions for Scalable Custom Clip Paths */}
      <svg className="absolute w-0 h-0 pointer-events-none" aria-hidden="true">
        <defs>
          {/* Scalable Airplane Silhouette Clip Path */}
          <clipPath id="airplaneClip" clipPathUnits="objectBoundingBox">
            <path d="M 0.50 0.02 L 0.56 0.28 L 0.98 0.44 L 0.98 0.52 L 0.56 0.48 L 0.56 0.78 L 0.72 0.88 L 0.72 0.96 L 0.50 0.90 L 0.28 0.96 L 0.28 0.88 L 0.44 0.78 L 0.44 0.48 L 0.02 0.52 L 0.02 0.44 L 0.44 0.28 Z" />
          </clipPath>
        </defs>
      </svg>

      {/* 1. Breadcrumb & Navigation */}
      <div className="bg-white border-b border-[#E0F2FE] py-4 sticky top-0 z-30 shadow-sm backdrop-blur-md bg-white/95">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 flex items-center justify-between text-xs sm:text-sm font-bold text-[#64748B]">
          <div className="flex items-center gap-2">
            <button type="button" onClick={onNavigateHome} className="hover:text-[#007BFF] transition-colors cursor-pointer">
              Home
            </button>
            <span className="text-[#CBD5E1]">/</span>
            <span className="text-[#007BFF] font-black uppercase tracking-wider">Industries We Serve</span>
          </div>
          <div className="hidden sm:flex items-center gap-2 text-xs uppercase tracking-widest text-[#007BFF] font-extrabold bg-[#E0F2FE] px-4 py-1.5 rounded-full border border-[#BAE6FD]">
            <Building2 className="w-4 h-4 text-[#007BFF]" />
            <span>10 Domain Verticals</span>
          </div>
        </div>
      </div>

      {/* 2. DISTINCT HERO SECTION: Asymmetric Multi-Clip Geometric Mosaic */}
      {/* Fulfills: Distinct Layout, Hexagon Clip-path, Travel Clip-path, Hospital Outside Image, Travel Pic, People */}
      <section className="relative w-full bg-[#0A1128] text-white pt-24 pb-32 sm:pt-28 sm:pb-36 lg:pt-32 lg:pb-44 overflow-hidden">
        
        {/* Subtle Geometric Background Elements */}
        <div className="absolute inset-0 opacity-15 pointer-events-none">
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#007BFF] rounded-full filter blur-[120px]" />
          <div className="absolute bottom-10 left-10 w-96 h-96 bg-[#38BDF8] rounded-full filter blur-[120px]" />
          <div 
            className="w-full h-full"
            style={{
              backgroundImage: 'radial-gradient(rgba(255, 255, 255, 0.12) 1px, transparent 1px)',
              backgroundSize: '32px 32px'
            }}
          />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 relative z-10">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
            
            {/* Left Column: Bold Narrative & Sector Indicators */}
            <div className="lg:col-span-6 space-y-8 animate-slide-left">
              
              <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-xl bg-white/10 text-[#38BDF8] border border-[#38BDF8]/40 text-xs sm:text-sm font-extrabold uppercase tracking-[0.2em] backdrop-blur-md">
                <span className="w-2 h-2 rounded-full bg-[#38BDF8] animate-pulse" />
                <span>Sector Specialization • 10 Verticals</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-[3.75rem] font-black text-white leading-[1.12] tracking-tight">
                Healthcare Growth Built Around <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#38BDF8] via-[#60A5FA] to-[#00D2FF]">Your Market.</span>
              </h1>

              <p className="text-base sm:text-lg text-white/85 font-medium leading-relaxed max-w-xl">
                Healthcare is not a one-size-fits-all market. A medical device company, diagnostic business, hospital or healthcare startup faces very different buyers, sales cycles and market challenges. MJD Healthcare works with healthcare businesses to understand their market, build the right commercial strategy and create a practical path from visibility to business growth.
              </p>

              {/* Dynamic Sector Highlights Pills */}
              <div className="flex flex-wrap gap-2 pt-2">
                {[
                  "Medical Devices",
                  "MedTech Robotics",
                  "Pharmaceuticals",
                  "Hospitals & OT",
                  "Diagnostics IVD",
                  "Medical Tourism"
                ].map((tag, idx) => (
                  <span
                    key={idx}
                    className="text-xs font-bold px-3 py-1.5 rounded-lg bg-white/10 text-white/90 border border-white/15 backdrop-blur-xs"
                    style={{ clipPath: 'polygon(5% 0%, 100% 0%, 95% 100%, 0% 100%)' }}
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Corporate CTA Button (rounded-xl, no pill) */}
              <div className="flex flex-wrap items-center gap-4 pt-4">
                <button
                  type="button"
                  onClick={() => openModal('Industries Sector Assessment Request')}
                  className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl bg-[#007BFF] hover:bg-[#0066d6] text-white text-xs sm:text-sm font-extrabold uppercase tracking-wider shadow-lg shadow-[#007BFF]/25 hover:shadow-xl hover:shadow-[#007BFF]/35 transition-all duration-200 cursor-pointer group"
                >
                  <span>Select Your Sector Strategy</span>
                  <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                </button>

                <button
                  type="button"
                  onClick={() => openModal('Clinical GTM Audit Consultation')}
                  className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-white/10 hover:bg-white/20 text-white border border-white/20 text-xs sm:text-sm font-extrabold uppercase tracking-wider backdrop-blur-md transition-all duration-200 cursor-pointer"
                >
                  <span>Schedule Domain Audit</span>
                </button>
              </div>

            </div>

            {/* Right Column: Distinctive 3-Tiered Multi-Clip Mosaic (Images: Hospital Exterior + Flight Travel + People) */}
            <div className="lg:col-span-6 relative flex items-center justify-center min-h-[460px] sm:min-h-[520px] lg:min-h-[580px] animate-slide-right">
              
              {/* Centerpiece 1: HEXAGONAL PORTAL — "Big Hospital Outside" */}
              <div className="relative z-10 w-72 h-72 sm:w-88 sm:h-88 lg:w-96 lg:h-96 flex items-center justify-center group">
                
                {/* Outer glowing border hexagon */}
                <div 
                  className="absolute inset-0 bg-gradient-to-tr from-[#007BFF] via-[#38BDF8] to-[#10B981] p-1.5 transition-transform duration-700 group-hover:scale-105"
                  style={{ clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)' }}
                >
                  {/* Inner Image Container with Hexagon Clip */}
                  <div 
                    className="w-full h-full bg-[#16324F] overflow-hidden"
                    style={{ clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)' }}
                  >
                    <img
                      src={IMAGES.hospitalExterior}
                      alt="Modern tertiary hospital campus and medical center exterior building"
                      className="w-full h-full object-cover object-center transform group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0A1128]/80 via-transparent to-transparent" />
                  </div>
                </div>

                {/* Hexagon Center Label */}
                <div className="absolute bottom-6 bg-[#0A1128]/95 backdrop-blur-md px-4 py-2 rounded-xl border border-white/20 text-center shadow-xl z-20">
                  <span className="text-[10px] font-black uppercase tracking-wider text-[#38BDF8] block">Tertiary Care Networks</span>
                  <span className="text-xs sm:text-sm font-black text-white">100+ Hospitals Mapped</span>
                </div>
              </div>

              {/* Satellite 2: TOP-RIGHT SATELLITE — "Travel Pic" (Aviation / Airplane in Flight) with Angled Clip */}
              <div 
                className="absolute -top-4 right-0 sm:right-2 z-20 w-44 h-44 sm:w-52 sm:h-52 rounded-2xl overflow-hidden shadow-2xl border-2 border-[#38BDF8]/60 group transition-all duration-500 hover:scale-105"
                style={{ clipPath: 'polygon(15% 0%, 100% 0%, 85% 100%, 0% 100%)' }}
              >
                <img
                  src={IMAGES.flightTravel}
                  alt="High altitude airplane wing flight representing cross-border healthcare and medical tourism"
                  className="w-full h-full object-cover object-center transform group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A1128]/85 via-transparent to-transparent" />
                
                {/* Floating Tag */}
                <div className="absolute bottom-3 left-4 right-4 text-left">
                  <div className="inline-flex items-center gap-1.5 text-[9px] font-black uppercase tracking-wider text-[#38BDF8] bg-black/60 px-2 py-0.5 rounded backdrop-blur-xs">
                    <Plane className="w-3 h-3" />
                    <span>Global Access</span>
                  </div>
                  <div className="text-xs font-black text-white leading-tight mt-0.5">Medical Tourism</div>
                </div>
              </div>

              {/* Satellite 3: BOTTOM-LEFT SATELLITE — "People" (Clinical Leadership & Healthcare Executives) */}
              <div 
                className="absolute -bottom-6 left-0 sm:left-2 z-20 w-48 h-40 sm:w-56 sm:h-44 rounded-2xl overflow-hidden shadow-2xl border-2 border-white/30 group transition-all duration-500 hover:scale-105"
                style={{ clipPath: 'polygon(0% 0%, 88% 0%, 100% 85%, 12% 100%)' }}
              >
                <img
                  src={IMAGES.medicalTeam}
                  alt="Healthcare executives and clinical team collaborating in hospital corridor"
                  className="w-full h-full object-cover object-center transform group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A1128]/90 via-transparent to-transparent" />
                
                {/* Floating Tag */}
                <div className="absolute bottom-3 left-3 right-3 text-left">
                  <div className="inline-flex items-center gap-1 text-[9px] font-black uppercase tracking-wider text-[#10B981] bg-black/60 px-2 py-0.5 rounded backdrop-blur-xs">
                    <Users className="w-3 h-3" />
                    <span>Clinical Team</span>
                  </div>
                  <div className="text-xs font-black text-white leading-tight mt-0.5">Leadership Advisory</div>
                </div>
              </div>

              {/* Floating Floating Metric Chip Top-Left */}
              <div className="absolute top-8 left-2 sm:left-6 z-20 bg-white/95 backdrop-blur-md rounded-2xl p-3 shadow-2xl border border-white/50 text-[#16324F] flex items-center gap-3 transform hover:scale-105 transition-transform">
                <div className="w-9 h-9 rounded-xl bg-[#007BFF]/10 text-[#007BFF] flex items-center justify-center font-black">
                  <Layers className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[10px] font-black uppercase tracking-wider text-[#64748B]">Sector Focus</div>
                  <div className="text-sm font-black text-[#16324F]">10 Verticals</div>
                </div>
              </div>

            </div>

          </div>

          {/* 3 Core Value Pillars (Locked Content) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16 pt-12 border-t border-white/10">
            <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm space-y-2 hover:bg-white/10 transition-all">
              <div className="flex items-center justify-between text-[#38BDF8] mb-1">
                <span className="text-xs font-black uppercase tracking-widest">01 / MEDICAL DEVICES &amp; CAPEX</span>
                <Stethoscope className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-black text-white">Hardware &amp; Surgical Devices</h3>
              <p className="text-sm text-white/70 font-medium leading-relaxed">
                OT equipment, surgical implants, critical care, and hospital capital hardware.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm space-y-2 hover:bg-white/10 transition-all">
              <div className="flex items-center justify-between text-[#38BDF8] mb-1">
                <span className="text-xs font-black uppercase tracking-widest">02 / MEDTECH &amp; DIAGNOSTICS</span>
                <Activity className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-black text-white">AI Diagnostics &amp; Health IT</h3>
              <p className="text-sm text-white/70 font-medium leading-relaxed">
                Reagent rental models, hospital IT integration, and digital diagnostic tools.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm space-y-2 hover:bg-white/10 transition-all">
              <div className="flex items-center justify-between text-[#38BDF8] mb-1">
                <span className="text-xs font-black uppercase tracking-widest">03 / INTERNATIONAL &amp; PROVIDERS</span>
                <Globe className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-black text-white">Cross-Border &amp; Hospital Chains</h3>
              <p className="text-sm text-white/70 font-medium leading-relaxed">
                India market entry for foreign MedTech brands and patient acquisition for hospital networks.
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
              <Layers className="w-6 h-6" />
            </div>
            <div className="text-3xl sm:text-4xl font-black text-[#16324F] tracking-tight">10+</div>
            <div className="text-xs sm:text-sm font-bold text-[#64748B] mt-1 uppercase tracking-wider">Specialized Verticals</div>
            <p className="text-xs text-[#94A3B8] mt-2 leading-relaxed">Tailored commercial pathways for device, pharma &amp; tech.</p>
          </div>

          <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-xl border border-[#E0F2FE] hover:border-[#8B5CF6] transition-all transform hover:-translate-y-1">
            <div className="w-12 h-12 rounded-full bg-[#EDE9FE] text-[#8B5CF6] flex items-center justify-center mb-4 font-black">
              <Building2 className="w-6 h-6" />
            </div>
            <div className="text-3xl sm:text-4xl font-black text-[#16324F] tracking-tight">100+</div>
            <div className="text-xs sm:text-sm font-bold text-[#64748B] mt-1 uppercase tracking-wider">Hospitals Mapped</div>
            <p className="text-xs text-[#94A3B8] mt-2 leading-relaxed">Direct access to clinical champions and purchase committees.</p>
          </div>

          <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-xl border border-[#E0F2FE] hover:border-[#10B981] transition-all transform hover:-translate-y-1">
            <div className="w-12 h-12 rounded-full bg-[#D1FAE5] text-[#10B981] flex items-center justify-center mb-4 font-black">
              <TrendingUp className="w-6 h-6" />
            </div>
            <div className="text-3xl sm:text-4xl font-black text-[#16324F] tracking-tight">4.2x</div>
            <div className="text-xs sm:text-sm font-bold text-[#64748B] mt-1 uppercase tracking-wider">Faster Market Entry</div>
            <p className="text-xs text-[#94A3B8] mt-2 leading-relaxed">Pre-calibrated regulatory, GTM and channel frameworks.</p>
          </div>

          <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-xl border border-[#E0F2FE] hover:border-[#F59E0B] transition-all transform hover:-translate-y-1">
            <div className="w-12 h-12 rounded-full bg-[#FEF3C7] text-[#D97706] flex items-center justify-center mb-4 font-black">
              <Award className="w-6 h-6" />
            </div>
            <div className="text-3xl sm:text-4xl font-black text-[#16324F] tracking-tight">10+</div>
            <div className="text-xs sm:text-sm font-bold text-[#64748B] mt-1 uppercase tracking-wider">Years Advisory</div>
            <p className="text-xs text-[#94A3B8] mt-2 leading-relaxed">Hands-on leadership across Indian healthcare markets.</p>
          </div>

        </div>
      </section>

      {/* 4. Conversational Side-by-Side "Talk-Through" Narrative Section */}
      <section className="py-24 sm:py-32 lg:py-36">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left Side: Editorial Image 4 (Doctor Consulting & Clinical Advisory) with Chamfered Clip Path */}
            <div className="lg:col-span-6 relative">
              <div 
                className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-white group"
                style={{ clipPath: 'polygon(0 0, 100% 0, 100% 90%, 90% 100%, 0 100%)' }}
              >
                <img
                  src={IMAGES.doctorConsulting}
                  alt="Doctor and clinical administrator reviewing hospital digital diagnostics"
                  className="w-full h-[420px] sm:h-[490px] object-cover object-center transform group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#16324F]/85 via-transparent to-transparent" />
                
                {/* Floating Consultation Trigger Card */}
                <div className="absolute bottom-6 left-6 right-6 p-5 rounded-2xl bg-white/95 backdrop-blur-md shadow-2xl border border-[#E0F2FE] flex items-center justify-between gap-4">
                  <div className="flex items-center gap-3.5">
                    <div className="w-12 h-12 rounded-xl bg-[#007BFF] text-white flex items-center justify-center shrink-0 shadow-md">
                      <Building2 className="w-6 h-6" />
                    </div>
                    <div>
                      <span className="text-[11px] font-black uppercase tracking-wider text-[#007BFF] block">Sector Advisory</span>
                      <span className="text-sm font-black text-[#16324F]">Healthcare Domain Assessment</span>
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={() => openModal('Sector Strategy Assessment Briefing')}
                    className="p-3 rounded-xl bg-[#F0F9FF] hover:bg-[#E0F2FE] text-[#007BFF] transition-colors cursor-pointer shrink-0"
                    aria-label="Request sector assessment briefing"
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
                <span>Sector Specialization Imperative</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-black text-[#16324F] leading-tight tracking-tight">
                Why Generic Healthcare Marketing Fails in <span className="text-[#007BFF]">Specialized Verticals.</span>
              </h2>

              <p className="text-base sm:text-lg text-[#475569] font-medium leading-relaxed">
                Medical device procurement operates under rigid biomedical evaluation committees and hospital CFO margins. Digital diagnostics depend on physician workflow adoption and reagent utilization. Hospital providers require geo-targeted patient trust and doctor referral networks. At MJD Healthcare, we never apply generic B2B templates—we engineer commercialization systems native to your specific healthcare sector.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-4.5 rounded-2xl bg-white border border-[#E0F2FE] shadow-sm hover:shadow-md transition-shadow flex items-start gap-3">
                  <div className="w-7 h-7 rounded-lg bg-[#E0F2FE] text-[#007BFF] flex items-center justify-center shrink-0 mt-0.5">
                    <ChevronsRight className="w-4 h-4" />
                  </div>
                  <p className="text-xs sm:text-sm font-bold text-[#16324F] leading-snug">
                    Aligns market entry dossiers with sector-specific CDSCO, NABH, and clinical trial requirements.
                  </p>
                </div>

                <div className="p-4.5 rounded-2xl bg-white border border-[#E0F2FE] shadow-sm hover:shadow-md transition-shadow flex items-start gap-3">
                  <div className="w-7 h-7 rounded-lg bg-[#EDE9FE] text-[#8B5CF6] flex items-center justify-center shrink-0 mt-0.5">
                    <ChevronsRight className="w-4 h-4" />
                  </div>
                  <p className="text-xs sm:text-sm font-bold text-[#16324F] leading-snug">
                    Customizes sales collateral for OT surgeons, biomedical directors, or diagnostic pathologists.
                  </p>
                </div>

                <div className="p-4.5 rounded-2xl bg-white border border-[#E0F2FE] shadow-sm hover:shadow-md transition-shadow flex items-start gap-3">
                  <div className="w-7 h-7 rounded-lg bg-[#D1FAE5] text-[#10B981] flex items-center justify-center shrink-0 mt-0.5">
                    <ChevronsRight className="w-4 h-4" />
                  </div>
                  <p className="text-xs sm:text-sm font-bold text-[#16324F] leading-snug">
                    Configures capital purchase, reagent rental, pay-per-use, or hospital fee-for-service models.
                  </p>
                </div>

                <div className="p-4.5 rounded-2xl bg-white border border-[#E0F2FE] shadow-sm hover:shadow-md transition-shadow flex items-start gap-3">
                  <div className="w-7 h-7 rounded-lg bg-[#FEF3C7] text-[#D97706] flex items-center justify-center shrink-0 mt-0.5">
                    <ChevronsRight className="w-4 h-4" />
                  </div>
                  <p className="text-xs sm:text-sm font-bold text-[#16324F] leading-snug">
                    Leverages pre-mapped hospital KOL networks to validate novel clinical propositions upfront.
                  </p>
                </div>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* 5. 10 Healthcare Sectors Grid (Vibrant Multi-Colored Cards) */}
      <section className="py-24 sm:py-32 bg-white border-y border-[#E0F2FE]">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
          
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="text-xs font-extrabold uppercase tracking-widest text-[#007BFF] bg-[#E0F2FE] px-4 py-1.5 rounded-full border border-[#BAE6FD]">
              OUR SECTOR EXPERTISE
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#16324F] tracking-tight">
              10 Healthcare Sectors We Support
            </h2>
            <p className="text-base sm:text-lg text-[#64748B] font-medium leading-relaxed">
              Pre-calibrated GTM and market access pathways tailored to your industry.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
            {industriesList.map((ind) => {
              const Icon = ind.icon;
              return (
                <div 
                  key={ind.id} 
                  className={`relative p-8 sm:p-10 rounded-3xl bg-[#F8FAFC] border-2 border-[#E2E8F0] ${ind.borderHover} hover:bg-white hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1.5 flex flex-col justify-between group overflow-hidden`}
                >
                  {/* Top Color Accent Line */}
                  <div 
                    className="absolute top-0 left-0 right-0 h-1.5 group-hover:h-2 transition-all duration-300"
                    style={{ backgroundColor: ind.color }}
                  />

                  <div className="space-y-6">
                    {/* Header Row: 64px Circular Icon & Title */}
                    <div className="flex items-start justify-between gap-4 pb-5 border-b border-[#E2E8F0]">
                      <div className="flex items-center gap-4">
                        <div className={`w-16 h-16 rounded-2xl ${ind.iconBg} ${ind.iconColor} flex items-center justify-center shrink-0 shadow-md group-hover:scale-110 transition-transform duration-300`}>
                          <Icon className="w-8 h-8" />
                        </div>
                        <div>
                          <div className="text-xs font-bold text-[#007BFF] uppercase tracking-wider mb-1">
                            {ind.subtitle}
                          </div>
                          <h3 className="text-xl sm:text-2xl font-black text-[#16324F] group-hover:text-[#007BFF] transition-colors leading-tight">
                            {ind.name}
                          </h3>
                        </div>
                      </div>
                      <span className="text-2xl font-black text-[#94A3B8] font-mono group-hover:text-[#16324F] transition-colors shrink-0">
                        {ind.num}
                      </span>
                    </div>

                    {/* Description */}
                    <p className="text-sm text-[#475569] font-medium leading-relaxed">
                      {ind.desc}
                    </p>

                    {/* Support Scope Box */}
                    <div className="p-5 rounded-2xl bg-white border border-[#E2E8F0] space-y-2 group-hover:border-[#007BFF]/30 transition-colors shadow-xs">
                      <div className="text-xs font-black uppercase tracking-wider text-[#16324F] flex items-center gap-1.5">
                        <CheckCircle2 className="w-4 h-4 text-[#007BFF]" />
                        <span>Key Support Scope:</span>
                      </div>
                      <p className="text-xs sm:text-sm text-[#64748B] font-medium leading-relaxed">
                        {ind.support}
                      </p>
                    </div>
                  </div>

                  <div className="pt-6 mt-6 border-t border-[#E2E8F0] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                    <span className="text-xs text-[#64748B] font-bold">
                      <strong className="text-[#16324F]">Best for:</strong> {ind.bestFor}
                    </span>
                    <button
                      type="button"
                      onClick={() => openModal(`Sector Strategy — ${ind.name}`)}
                      className="text-xs font-black text-[#007BFF] hover:text-[#0056b3] uppercase tracking-wider inline-flex items-center gap-1.5 cursor-pointer shrink-0 group-hover:translate-x-1 transition-transform"
                    >
                      <span>Explore Sector</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* 6. DEDICATED CROSS-BORDER & MEDICAL TOURISM FEATURE (Image 5: Airport Concourse & Flight Transit) */}
      {/* Featuring Scalable Airplane Clip-Path & Aerodynamic Geometry */}
      <section className="py-24 sm:py-32 bg-[#F1F5F9] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 relative z-10">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-widest text-[#0284C7] bg-[#E0F2FE] px-4 py-1.5 rounded-full border border-[#BAE6FD]">
                <Plane className="w-4 h-4 text-[#0284C7]" />
                <span>Cross-Border &amp; Medical Tourism</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-black text-[#16324F] leading-tight tracking-tight">
                Unlocking Global Patients &amp; Foreign Market Entry into <span className="text-[#0284C7]">India.</span>
              </h2>

              <p className="text-base text-[#475569] font-medium leading-relaxed">
                India represents both a powerhouse destination for cross-border medical travel and one of the highest-growth recipient markets for international MedTech manufacturers. We build dedicated commercial funnels that connect foreign innovators with Indian hospital purchase committees and coordinate multi-country patient referral corridors.
              </p>

              <div className="space-y-4 pt-2">
                <div className="flex items-start gap-4 p-4 rounded-2xl bg-white border border-[#E2E8F0] shadow-sm">
                  <div className="w-10 h-10 rounded-xl bg-[#E0F2FE] text-[#0284C7] flex items-center justify-center shrink-0 mt-0.5">
                    <Globe className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-black text-[#16324F]">International Healthcare Companies Entering India</h4>
                    <p className="text-xs text-[#64748B] mt-1 leading-relaxed">
                      Complete regulatory navigation, GTM calibration, distributor appointment, and direct key account access to corporate hospital chains.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 rounded-2xl bg-white border border-[#E2E8F0] shadow-sm">
                  <div className="w-10 h-10 rounded-xl bg-[#E0F2FE] text-[#0284C7] flex items-center justify-center shrink-0 mt-0.5">
                    <Plane className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-black text-[#16324F]">Medical Tourism &amp; Patient Acquisition Corridors</h4>
                    <p className="text-xs text-[#64748B] mt-1 leading-relaxed">
                      Cross-border digital campaigns, facilitator alignment, and clinical intake workflows across GCC, SAARC, CIS, and African markets.
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-4">
                <button
                  type="button"
                  onClick={() => openModal('Cross-Border Healthcare Strategy')}
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-[#007BFF] hover:bg-[#0066d6] text-white text-xs sm:text-sm font-extrabold uppercase tracking-wider shadow-lg shadow-[#007BFF]/25 hover:shadow-xl transition-all duration-200 cursor-pointer"
                >
                  <span>Build International Pathway</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Right Visual: International Transit Hub + Airplane Silhouette Portal */}
            <div className="lg:col-span-6 relative flex items-center justify-center">
              
              {/* Primary Image: Modern Airport Concourse / Global Transit */}
              <div 
                className="w-full h-80 sm:h-96 rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-white group"
                style={{ clipPath: 'polygon(10% 0%, 100% 0%, 90% 100%, 0% 100%)' }}
              >
                <img
                  src={IMAGES.globalTransit}
                  alt="Modern international airport transit terminal for cross-border patient services"
                  className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A1128]/70 via-transparent to-transparent" />
              </div>

              {/* Airplane-Clipped Floating Mini Badge Portal (Image: Aviation Flight) */}
              <div 
                className="absolute -bottom-6 -left-4 sm:left-4 w-32 h-32 sm:w-40 sm:h-40 bg-gradient-to-tr from-[#007BFF] to-[#38BDF8] p-1 shadow-2xl z-20 group hover:scale-110 transition-transform duration-500"
                style={{ clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)' }}
              >
                <div 
                  className="w-full h-full overflow-hidden"
                  style={{ clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)' }}
                >
                  <img
                    src={IMAGES.flightTravel}
                    alt="Aviation flight wing"
                    className="w-full h-full object-cover object-center"
                  />
                  <div className="absolute inset-0 bg-[#007BFF]/30" />
                </div>
              </div>

              {/* Floating Corridor Pill Badge */}
              <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-md rounded-xl px-4 py-2.5 shadow-xl border border-[#E0F2FE] flex items-center gap-2.5">
                <Compass className="w-5 h-5 text-[#007BFF]" />
                <div>
                  <div className="text-[10px] font-black uppercase tracking-wider text-[#64748B]">Global Network</div>
                  <div className="text-xs font-black text-[#16324F]">25+ Source Corridors</div>
                </div>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* 7. MEDICAL HARDWARE, CAPEX & OT INFRASTRUCTURE SHOWCASE (Image 6: OT Surgical Suite) */}
      <section className="py-24 sm:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Visual: OT High-Tech Equipment in Chamfered Octagonal Clip */}
            <div className="lg:col-span-6 relative order-2 lg:order-1">
              <div 
                className="relative w-full h-80 sm:h-96 rounded-3xl overflow-hidden shadow-2xl border-4 border-[#E2E8F0] bg-white group"
                style={{ clipPath: 'polygon(15% 0%, 85% 0%, 100% 15%, 100% 85%, 85% 100%, 15% 100%, 0% 85%, 0% 15%)' }}
              >
                <img
                  src={IMAGES.surgicalEquipment}
                  alt="High-tech surgical suite, hospital OT equipment and medical device infrastructure"
                  className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#16324F]/80 via-transparent to-transparent" />
                
                {/* Floating CapEx Badge */}
                <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-white/95 backdrop-blur-md shadow-lg border border-[#E2E8F0] flex items-center justify-between">
                  <div>
                    <span className="text-[10px] font-black uppercase tracking-wider text-[#007BFF] block">Hospital Infrastructure</span>
                    <span className="text-xs sm:text-sm font-black text-[#16324F]">OT &amp; Biomedical Committee Alignment</span>
                  </div>
                  <div className="w-8 h-8 rounded-lg bg-[#E0F2FE] text-[#007BFF] flex items-center justify-center font-black">
                    <ShieldCheck className="w-4 h-4" />
                  </div>
                </div>
              </div>
            </div>

            {/* Content: Device & CapEx Procurement */}
            <div className="lg:col-span-6 space-y-6 order-1 lg:order-2">
              <div className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-widest text-[#007BFF] bg-[#E0F2FE] px-3.5 py-1.5 rounded-full border border-[#BAE6FD]">
                <Stethoscope className="w-3.5 h-3.5 text-[#007BFF]" />
                <span>Capital Equipment &amp; OT Devices</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-black text-[#16324F] leading-tight tracking-tight">
                Navigating High-Value Hospital Procurement &amp; <span className="text-[#007BFF]">Biomedical Approvals.</span>
              </h2>

              <p className="text-base text-[#475569] font-medium leading-relaxed">
                Hospital capital equipment involves complex stakeholder consensus: surgeons evaluate clinical ergonomics, biomedical engineers inspect compliance, and hospital CFOs demand verifiable ROI. We structure technical dossiers, clinician trial protocols, and distributor enablement programs that turn multi-month sales friction into standardized hospital orders.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-4 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0]">
                  <div className="text-xs font-black text-[#16324F] mb-1">Commercial Trial Protocols</div>
                  <p className="text-xs text-[#64748B]">Streamlined 14-day OT evaluation agreements that de-risk adoption.</p>
                </div>

                <div className="p-4 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0]">
                  <div className="text-xs font-black text-[#16324F] mb-1">CapEx / OpEx Financial Engineering</div>
                  <p className="text-xs text-[#64748B]">Pay-per-case, reagent rental, and EMI models suited for Tier 2/3 hospitals.</p>
                </div>
              </div>

              <div className="pt-2">
                <button
                  type="button"
                  onClick={() => openModal('Device Commercialization Strategy')}
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-[#007BFF] hover:bg-[#0066d6] text-white text-xs sm:text-sm font-extrabold uppercase tracking-wider shadow-lg shadow-[#007BFF]/25 hover:shadow-xl transition-all duration-200 cursor-pointer"
                >
                  <span>Accelerate Device Procurement</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* 8. STRATEGIC COLLABORATION & ALIGNMENT (Image 7: Boardroom Strategy Workshop) */}
      <section className="relative py-24 sm:py-32 bg-[#0A1128] text-white overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-25">
          <img
            src={IMAGES.strategicWorkshop}
            alt="Healthcare executives and commercial strategy advisory workshop"
            className="w-full h-full object-cover object-center filter contrast-125"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0A1128] via-[#0A1128]/85 to-[#0A1128]" />
        </div>

        <div className="max-w-5xl mx-auto px-4 sm:px-8 lg:px-12 relative z-10 text-center space-y-8">
          <div className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-widest text-[#38BDF8] bg-[#38BDF8]/20 px-4 py-2 rounded-full border border-[#38BDF8]/40">
            <Globe className="w-4 h-4 text-[#38BDF8]" />
            <span>Elevate Your Sector Strategy</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight">
            Every Healthcare Sector Has Its Own Path to Market Leadership.
          </h2>

          <p className="text-base sm:text-lg lg:text-xl text-white/85 font-medium leading-relaxed max-w-3xl mx-auto">
            Whether launching medical devices, scaling digital pathology, or securing pan-India distributor networks, specialized market access transforms complex healthcare commercialization into predictable institutional growth.
          </p>

          <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
            <button
              type="button"
              onClick={() => openModal('Industries Sector Consultation')}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-[#007BFF] hover:bg-[#0066d6] text-white text-xs sm:text-sm font-extrabold uppercase tracking-wider shadow-lg shadow-[#007BFF]/25 hover:shadow-xl transition-all duration-200 cursor-pointer"
            >
              <span>Consult Our Sector Practice</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* 7. Value & Final Conversion Banner */}
      <section className="py-20 bg-[#F8FAFC]">
        <div className="max-w-5xl mx-auto px-4 sm:px-8 lg:px-12">
          
          <div className="p-10 sm:p-14 lg:p-16 rounded-3xl bg-[#16324F] text-white text-center shadow-2xl border-2 border-white/10 space-y-6 relative overflow-hidden">
            <div className="absolute -right-16 -bottom-16 w-64 h-64 bg-[#007BFF]/20 rounded-full filter blur-3xl" />
            <div className="absolute -left-16 -top-16 w-64 h-64 bg-[#38BDF8]/20 rounded-full filter blur-3xl" />
            
            <div className="relative z-10 space-y-4">
              <span className="text-xs font-black uppercase tracking-widest text-[#38BDF8] bg-white/10 px-4 py-1.5 rounded-full border border-white/20">
                ONE HEALTHCARE PARTNER. MULTIPLE GROWTH CHALLENGES.
              </span>

              <h3 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
                Strategy. Market Access. Business Development. Digital Demand. Phygital Execution.
              </h3>

              <p className="text-base sm:text-lg text-white/80 font-medium max-w-2xl mx-auto leading-relaxed">
                Ready to build your healthcare growth strategy?
              </p>

              {/* Contact Information Bar */}
              <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-xs sm:text-sm font-bold text-[#38BDF8] pt-2">
                <span>WhatsApp: +91 9794631500</span>
                <span>•</span>
                <span>Email: INFO@MJDHEALTHCARE.IN</span>
              </div>

              {/* Clean Harmonized Corporate Action Buttons */}
              <div className="pt-6 flex flex-col sm:flex-row items-center justify-center gap-4">
                <button
                  type="button"
                  onClick={() => openModal('Industries Page Bottom CTA')}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-[#007BFF] hover:bg-[#0066d6] text-white text-xs sm:text-sm font-extrabold uppercase tracking-wider shadow-lg shadow-[#007BFF]/25 hover:shadow-xl transition-all duration-200 cursor-pointer"
                >
                  <span>Talk to MJD Healthcare</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <button
                  type="button"
                  onClick={() => openModal('Sector Strategy Assessment Request')}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl bg-white/10 hover:bg-white/20 text-white border border-white/25 text-xs sm:text-sm font-extrabold uppercase tracking-wider backdrop-blur-md transition-all duration-200 cursor-pointer"
                >
                  <span>Request Sector Assessment</span>
                  <ArrowRight className="w-4 h-4 text-[#38BDF8]" />
                </button>
              </div>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
}
