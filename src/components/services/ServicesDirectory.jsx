import React, { useState, useMemo } from 'react';
import ServiceCard from './ServiceCard';
import { servicesData } from './servicesData';

const filterCategories = [
  { id: "ALL", label: "All Services" },
  { id: "STRATEGY", label: "Strategy & GTM" },
  { id: "ACCESS", label: "Market Access" },
  { id: "DEMAND", label: "Demand Generation" },
  { id: "SALES", label: "Sales & Biz Dev" },
  { id: "CHANNEL", label: "Channel & Positioning" }
];

export default function ServicesDirectory({ onNavigate }) {
  const [activeFilter, setActiveFilter] = useState("ALL");
  const [searchQuery, setSearchQuery] = useState("");

  const handleCardSelect = (service) => {
    // Navigate directly to the dedicated service page when clicking Explore
    if (onNavigate) {
      onNavigate(service.id, null);
    } else {
      window.location.hash = `#${service.id}`;
    }
  };

  const filteredServices = useMemo(() => {
    return servicesData.filter((svc) => {
      const matchesSearch = 
        svc.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        svc.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        svc.capabilities.some(c => c.toLowerCase().includes(searchQuery.toLowerCase()));

      if (!matchesSearch) return false;

      if (activeFilter === "ALL") return true;
      if (activeFilter === "STRATEGY" && (svc.id === "go-to-market-strategy" || svc.id === "product-positioning-commercialization")) return true;
      if (activeFilter === "ACCESS" && (svc.id === "market-access" || svc.id === "phygital-healthcare-growth")) return true;
      if (activeFilter === "DEMAND" && (svc.id === "healthcare-digital-demand-generation" || svc.id === "phygital-healthcare-growth" || svc.id === "healthcare-growth-engine")) return true;
      if (activeFilter === "SALES" && (svc.id === "sales-enablement" || svc.id === "healthcare-business-development")) return true;
      if (activeFilter === "CHANNEL" && (svc.id === "channel-distributor-development" || svc.id === "product-positioning-commercialization")) return true;

      return false;
    });
  }, [activeFilter, searchQuery]);

  // Service lookup by number for asymmetric grid mapping
  const getSvc = (num) => filteredServices.find(s => s.number === num);

  return (
    <section id="services-directory" className="relative w-full bg-[#F8FAFC] py-16 sm:py-24 border-b border-[#E0F2FE]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 space-y-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-3 max-w-2xl text-left">
            <div className="flex items-center gap-2 text-xs sm:text-[13px] font-extrabold uppercase tracking-[0.18em] text-[#007BFF]">
              <span className="w-2.5 h-2.5 rounded-full bg-[#007BFF] animate-pulse" />
              <span>OUR SERVICES</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-[46px] font-black text-[#16324F] leading-[1.25] tracking-tight">
              Explore Our Healthcare Growth Services
            </h2>

            <p className="text-sm sm:text-base font-medium text-[#64748B] leading-relaxed">
              Targeted capabilities engineered to solve specific healthcare commercial hurdles — from hospital formulary access and GTM strategy to digital lead acceleration and channel development.
            </p>
          </div>

          {/* Quick Search */}
          <div className="w-full md:w-72 shrink-0">
            <div className="relative">
              <input
                type="text"
                placeholder="Search services or capabilities..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-white border border-[#CBD5E1] focus:border-[#007BFF] rounded-xl text-xs sm:text-sm font-semibold text-[#16324F] placeholder-[#94A3B8] focus:outline-none shadow-sm transition-all"
              />
              <span className="material-symbols-outlined absolute left-3 top-3.5 text-[18px] text-[#94A3B8]">
                search
              </span>
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery("")}
                  className="absolute right-3 top-3.5 text-[#94A3B8] hover:text-[#16324F]"
                >
                  <span className="material-symbols-outlined text-[16px]">close</span>
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Category Filters */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none border-b border-[#E0F2FE]">
          {filterCategories.map((cat) => (
            <button
              key={cat.id}
              type="button"
              onClick={() => setActiveFilter(cat.id)}
              className={`px-4 py-2 rounded-lg text-xs font-extrabold tracking-wider uppercase whitespace-nowrap transition-all duration-200 cursor-pointer ${
                activeFilter === cat.id
                  ? 'bg-[#007BFF] text-white shadow-md shadow-[#007BFF]/20'
                  : 'bg-white text-[#16324F]/70 hover:text-[#007BFF] hover:bg-[#E0F2FE]/50 border border-[#E0F2FE]'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Service Cards Layout */}
        {activeFilter === "ALL" && !searchQuery ? (
          /* Asymmetric PRD Layout when viewing all services */
          <div className="space-y-6">
            
            {/* Row 1: 01 Market Access (Feature Header Card) */}
            {getSvc("01") && (
              <div className="w-full">
                <ServiceCard service={getSvc("01")} onSelect={handleCardSelect} />
              </div>
            )}

            {/* Row 2: 02 GTM Strategy & 03 Phygital Healthcare Growth */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {getSvc("02") && <ServiceCard service={getSvc("02")} onSelect={handleCardSelect} />}
              {getSvc("03") && <ServiceCard service={getSvc("03")} onSelect={handleCardSelect} />}
            </div>

            {/* Row 3: 04 Growth Engine (Core Feature Card ~2/3) + 05 Biz Dev (~1/3) */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
              <div className="lg:col-span-7 xl:col-span-8 flex">
                {getSvc("04") && <div className="w-full flex"><ServiceCard service={getSvc("04")} onSelect={handleCardSelect} /></div>}
              </div>
              <div className="lg:col-span-5 xl:col-span-4 flex">
                {getSvc("05") && <div className="w-full flex"><ServiceCard service={getSvc("05")} onSelect={handleCardSelect} /></div>}
              </div>
            </div>

            {/* Row 4: 06 Digital Demand & 07 Sales Enablement */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {getSvc("06") && <ServiceCard service={getSvc("06")} onSelect={handleCardSelect} />}
              {getSvc("07") && <ServiceCard service={getSvc("07")} onSelect={handleCardSelect} />}
            </div>

            {/* Row 5: 08 Product Positioning & 09 Channel Development */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {getSvc("08") && <ServiceCard service={getSvc("08")} onSelect={handleCardSelect} />}
              {getSvc("09") && <ServiceCard service={getSvc("09")} onSelect={handleCardSelect} />}
            </div>

          </div>
        ) : (
          /* Filtered or Searched Grid View */
          <div>
            {filteredServices.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredServices.map((service) => (
                  <ServiceCard 
                    key={service.id} 
                    service={service} 
                    onSelect={handleCardSelect} 
                  />
                ))}
              </div>
            ) : (
              <div className="text-center py-16 bg-white border border-[#E0F2FE] rounded-2xl p-8 space-y-4">
                <span className="material-symbols-outlined text-[48px] text-[#94A3B8]">search_off</span>
                <h3 className="text-lg font-bold text-[#16324F]">No matching services found</h3>
                <p className="text-xs text-[#64748B]">Try searching for another capability like "hospital", "positioning", "SEO", or clear the filter.</p>
                <button
                  type="button"
                  onClick={() => { setActiveFilter("ALL"); setSearchQuery(""); }}
                  className="px-4 py-2 bg-[#007BFF] text-white text-xs font-bold rounded-lg uppercase tracking-wider"
                >
                  Reset Filters
                </button>
              </div>
            )}
          </div>
        )}

      </div>
    </section>
  );
}
