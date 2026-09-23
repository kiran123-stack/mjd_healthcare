import React, { useEffect } from 'react';
import ServicesHero from '../components/services/ServicesHero';
import ServicesSystem from '../components/services/ServicesSystem';
import ServicesDirectory from '../components/services/ServicesDirectory';
import ServiceRelationships from '../components/services/ServiceRelationships';
import BusinessNeedSelector from '../components/services/BusinessNeedSelector';
import ServicesCTA from '../components/services/ServicesCTA';
import { useModal } from '../context/ModalContext';

export default function ServicesPage({ onNavigate }) {
  const { openModal } = useModal();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    document.title = "Healthcare Consulting & Growth Services | MJD Healthcare India";
  }, []);

  const handleNavigatePage = (pageKey) => {
    if (onNavigate) {
      onNavigate(pageKey, null);
    } else {
      window.location.hash = `#${pageKey}`;
    }
  };

  return (
    <div className="w-full bg-[#F8FAFC]">
      {/* 1. Services Hero (Full-bleed Background Image Hero) */}
      <ServicesHero />

      {/* 2. Services System (Horizontal Strategic Diagram on Dark Canvas) */}
      <ServicesSystem />

      {/* Strategic Editorial Showcase 01: Hospital Market Access */}
      <section className="w-full bg-white py-14 border-b border-[#E0F2FE]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="bg-gradient-to-r from-[#16324F] to-[#1E4976] rounded-3xl overflow-hidden shadow-xl grid grid-cols-1 lg:grid-cols-12 items-center">
            
            <div className="lg:col-span-7 p-8 sm:p-12 space-y-5 text-left text-white">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#38BDF8]/20 border border-[#38BDF8]/40 text-xs font-black uppercase tracking-widest text-[#38BDF8]">
                <span className="w-2 h-2 rounded-full bg-[#38BDF8] animate-pulse" />
                HOSPITAL MARKET ACCESS SPOTLIGHT
              </div>

              <h3 className="text-3xl sm:text-4xl font-black text-white leading-tight">
                Clearing Hospital Formulary &amp; Biomedical Procurement Committees
              </h3>

              <p className="text-sm sm:text-base font-medium text-white/85 leading-relaxed">
                We bridge the gap between technical device engineering and clinical procurement acceptance — helping medical device and MedTech innovators build direct pathways to major hospital chains, apex healthcare institutes, and government procurement bodies.
              </p>

              <div className="flex flex-wrap items-center gap-4 pt-2">
                <button
                  type="button"
                  onClick={() => handleNavigatePage('market-access')}
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#38BDF8] hover:bg-[#0EA5E9] text-[#16324F] text-xs font-extrabold uppercase tracking-wider shadow-md transition-all cursor-pointer"
                >
                  <span>Explore Market Access Page →</span>
                </button>
                <button
                  type="button"
                  onClick={() => openModal('Market Access Strategy Consultation')}
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#007BFF] hover:bg-[#0066d6] text-white text-xs font-extrabold uppercase tracking-wider shadow-md transition-all cursor-pointer"
                >
                  <span>Request Assessment</span>
                  <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                </button>
              </div>
            </div>

            <div className="lg:col-span-5 h-72 sm:h-96 lg:h-full relative overflow-hidden">
              <img 
                src="/images/service_market_access.jpg" 
                alt="Hospital Procurement Committee Review" 
                className="w-full h-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-[#16324F] via-transparent to-transparent opacity-80" />
            </div>

          </div>
        </div>
      </section>

      {/* 3. Complete Services Directory */}
      <ServicesDirectory onNavigate={handleNavigatePage} />

      {/* 4. Service Relationships (Interactive 3-Pathway Flow) */}
      <ServiceRelationships />

      {/* Strategic Editorial Showcase 02: Phygital Demand & Clinical Activation */}
      <section className="w-full bg-[#16324F] py-14 text-white border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="bg-white/5 border border-white/15 rounded-3xl overflow-hidden shadow-xl grid grid-cols-1 lg:grid-cols-12 items-center">
            
            <div className="lg:col-span-5 h-72 sm:h-96 lg:h-full relative overflow-hidden order-2 lg:order-1">
              <img 
                src="/images/service_phygital.jpg" 
                alt="Digital Demand Meeting Physical Hospital Activation" 
                className="w-full h-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-l from-[#16324F] via-transparent to-transparent opacity-80" />
            </div>

            <div className="lg:col-span-7 p-8 sm:p-12 space-y-5 text-left text-white order-1 lg:order-2">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#38BDF8]/20 border border-[#38BDF8]/40 text-xs font-black uppercase tracking-widest text-[#38BDF8]">
                <span className="w-2 h-2 rounded-full bg-[#38BDF8] animate-pulse" />
                PHYGITAL GROWTH ENGINE
              </div>

              <h3 className="text-3xl sm:text-4xl font-black text-white leading-tight">
                Digital Gets You Seen. Physical Builds Trust.
              </h3>

              <p className="text-sm sm:text-base font-medium text-white/85 leading-relaxed">
                Combining online decision-maker targeting (SEO, AEO, LinkedIn, Meta, WhatsApp) with on-the-ground hospital demonstrations, clinical meetings, and distributor development creates an unstoppable commercial momentum.
              </p>

              <div className="flex flex-wrap items-center gap-4 pt-2">
                <button
                  type="button"
                  onClick={() => handleNavigatePage('phygital-healthcare-growth')}
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#38BDF8] hover:bg-[#0EA5E9] text-[#16324F] text-xs font-extrabold uppercase tracking-wider shadow-md transition-all cursor-pointer"
                >
                  <span>Explore Phygital Page →</span>
                </button>
                <button
                  type="button"
                  onClick={() => openModal('Phygital Growth Strategy Consultation')}
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#007BFF] hover:bg-[#0066d6] text-white text-xs font-extrabold uppercase tracking-wider shadow-md transition-all cursor-pointer"
                >
                  <span>Talk to MJD</span>
                  <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                </button>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 5. Business Need Selector */}
      <BusinessNeedSelector />

      {/* 6. Final Services CTA */}
      <ServicesCTA />
    </div>
  );
}
