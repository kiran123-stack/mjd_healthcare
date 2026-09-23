import React from 'react';

const systemLayers = [
  {
    phase: "STRATEGY",
    color: "#0066FF",
    icon: "track_changes",
    services: ["GTM Strategy", "Product Positioning"]
  },
  {
    phase: "ACCESS",
    color: "#0070F3",
    icon: "domain",
    services: ["Market Access", "Channel Development"]
  },
  {
    phase: "DEMAND",
    color: "#0284C7",
    icon: "campaign",
    services: ["Digital Demand Gen", "Phygital Growth"]
  },
  {
    phase: "SALES",
    color: "#1E4976",
    icon: "badge",
    services: ["Sales Enablement", "Business Development"]
  },
  {
    phase: "ADOPTION",
    color: "#0F2942",
    icon: "verified",
    services: ["Hospital Adoption", "Clinical Clearance"]
  },
  {
    phase: "GROWTH",
    color: "#059669",
    icon: "auto_graph",
    services: ["Healthcare Growth Engine"]
  }
];

export default function ServicesSystem() {
  return (
    <section className="relative w-full bg-white text-[#16324F] py-20 sm:py-28 border-b border-[#E0F2FE]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 space-y-12">
        
        {/* Header - High Contrast WCAG AA Compliant Typography */}
        <div className="max-w-3xl text-left space-y-4">
          <div className="inline-flex items-center gap-2.5 text-xs sm:text-sm font-extrabold uppercase tracking-[0.2em] text-[#0066FF]">
            <span className="w-2.5 h-2.5 rounded-full bg-[#0066FF] animate-pulse" />
            <span>THE MJD SERVICES SYSTEM</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black leading-[1.2] tracking-tight text-[#16324F]">
            From Strategy to Market Adoption.
          </h2>

          <p className="text-base sm:text-lg font-medium text-[#334155] leading-relaxed">
            MJD's services are built as connected commercial capabilities working together around a unified growth continuum — eliminating the gaps between market entry planning, digital visibility, hospital procurement clearance, and sales conversion.
          </p>
        </div>

        {/* Large Strategic Diagram Container - Fully Responsive Grid (1 column on mobile, 2 on tablet, 6 on desktop) */}
        <div className="bg-[#F8FAFC] border-2 border-[#CBD5E1] rounded-3xl p-6 sm:p-10 shadow-sm space-y-8">
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-5">
            
            {systemLayers.map((layer, i) => (
              <div key={layer.phase} className="relative group flex flex-col justify-between">
                
                {/* Arrow Connector for desktop */}
                {i < systemLayers.length - 1 && (
                  <div className="hidden lg:block absolute -right-3.5 top-8 z-10 text-[#0066FF] opacity-50">
                    <span className="material-symbols-outlined text-[24px]">chevron_right</span>
                  </div>
                )}

                {/* Layer Box - Spacious padding (p-5 sm:p-6) & WCAG accessible text (14px/16px) */}
                <div className="h-full bg-white hover:bg-[#F1F5F9] border border-[#CBD5E1] hover:border-[#0066FF] rounded-2xl p-5 sm:p-6 transition-all duration-200 flex flex-col justify-between space-y-4 shadow-sm">
                  
                  <div>
                    {/* Step Number & Icon */}
                    <div className="flex items-center justify-between pb-3 border-b border-[#E2E8F0] mb-3">
                      <span className="text-xs font-black tracking-widest text-[#0066FF] font-mono bg-[#E0F2FE] px-2.5 py-1 rounded-md">
                        STEP 0{i + 1}
                      </span>
                      <span className="material-symbols-outlined text-[22px] text-[#0066FF]">
                        {layer.icon}
                      </span>
                    </div>

                    <h3 className="text-base sm:text-lg font-black tracking-wider text-[#16324F] uppercase">
                      {layer.phase}
                    </h3>
                  </div>

                  {/* Revealed Services Pill Stack - Accessible 14px Text */}
                  <div className="space-y-2 pt-2">
                    {layer.services.map((svc) => (
                      <div 
                        key={svc}
                        className="text-xs sm:text-sm font-bold text-[#1e293b] bg-[#F8FAFC] px-3 py-2 rounded-xl border border-[#CBD5E1] group-hover:border-[#0066FF]/40 transition-colors"
                      >
                        {svc}
                      </div>
                    ))}
                  </div>

                </div>

              </div>
            ))}

          </div>

          {/* Bottom Callout - Accessible font sizes */}
          <div className="pt-6 border-t border-[#CBD5E1] flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs sm:text-sm font-bold text-[#334155]">
            <div className="flex items-center gap-2.5">
              <span className="material-symbols-outlined text-[20px] text-[#0066FF]">info</span>
              <span>Each layer reveals connected growth capabilities designed for healthcare adoption.</span>
            </div>
            <a 
              href="#services-directory" 
              className="text-[#0066FF] hover:underline font-extrabold inline-flex items-center gap-1.5 shrink-0 text-sm"
            >
              <span>Browse Complete Directory Below</span>
              <span className="material-symbols-outlined text-[16px]">arrow_downward</span>
            </a>
          </div>

        </div>

      </div>
    </section>
  );
}
