import React, { useState } from 'react';

// Clean SVG Vector Marks for each service type
const SVGVisuals = {
  network: (
    <svg viewBox="0 0 80 80" className="w-14 h-14 opacity-40 group-hover:opacity-90 transition-all duration-300 text-[#007BFF]">
      <circle cx="20" cy="40" r="6" fill="currentColor" />
      <circle cx="60" cy="20" r="6" fill="currentColor" />
      <circle cx="60" cy="60" r="6" fill="currentColor" />
      <path d="M26 37 L54 23 M26 43 L54 57" stroke="currentColor" strokeWidth="2.5" strokeDasharray="3 3" />
    </svg>
  ),
  strategy: (
    <svg viewBox="0 0 80 80" className="w-14 h-14 opacity-40 group-hover:opacity-90 transition-all duration-300 text-[#007BFF]">
      <path d="M15 65 L40 15 L65 65" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
      <circle cx="40" cy="15" r="5" fill="currentColor" />
      <path d="M25 45 L55 45" stroke="currentColor" strokeWidth="2" strokeDasharray="4 4" />
    </svg>
  ),
  phygital: (
    <svg viewBox="0 0 80 80" className="w-14 h-14 opacity-40 group-hover:opacity-90 transition-all duration-300 text-[#007BFF]">
      <rect x="15" y="20" width="22" height="40" rx="4" fill="none" stroke="currentColor" strokeWidth="2.5" />
      <circle cx="55" cy="40" r="16" fill="none" stroke="currentColor" strokeWidth="2.5" strokeDasharray="4 4" />
      <path d="M37 40 L39 40" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
    </svg>
  ),
  engine: (
    <svg viewBox="0 0 80 80" className="w-16 h-16 opacity-50 group-hover:opacity-90 transition-all duration-300 text-[#38BDF8]">
      <circle cx="40" cy="40" r="28" fill="none" stroke="currentColor" strokeWidth="3" strokeDasharray="8 4" />
      <circle cx="40" cy="40" r="12" fill="none" stroke="currentColor" strokeWidth="2" />
      <path d="M40 12 L40 68 M12 40 L68 40" stroke="currentColor" strokeWidth="1.5" opacity="0.5" />
    </svg>
  ),
  bizdev: (
    <svg viewBox="0 0 80 80" className="w-14 h-14 opacity-40 group-hover:opacity-90 transition-all duration-300 text-[#007BFF]">
      <rect x="20" y="20" width="18" height="18" rx="3" fill="none" stroke="currentColor" strokeWidth="2.5" />
      <rect x="42" y="42" width="18" height="18" rx="3" fill="none" stroke="currentColor" strokeWidth="2.5" />
      <path d="M38 29 L51 29 L51 42" fill="none" stroke="currentColor" strokeWidth="2" />
    </svg>
  ),
  demand: (
    <svg viewBox="0 0 80 80" className="w-14 h-14 opacity-40 group-hover:opacity-90 transition-all duration-300 text-[#007BFF]">
      <path d="M15 55 Q 30 20 45 40 T 70 15" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
      <circle cx="70" cy="15" r="4" fill="currentColor" />
    </svg>
  ),
  sales: (
    <svg viewBox="0 0 80 80" className="w-14 h-14 opacity-40 group-hover:opacity-90 transition-all duration-300 text-[#007BFF]">
      <rect x="18" y="15" width="44" height="50" rx="4" fill="none" stroke="currentColor" strokeWidth="2.5" />
      <path d="M28 30 H52 M28 42 H44 M28 54 H36" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
    </svg>
  ),
  positioning: (
    <svg viewBox="0 0 80 80" className="w-14 h-14 opacity-40 group-hover:opacity-90 transition-all duration-300 text-[#007BFF]">
      <polygon points="40,12 65,30 65,60 40,70 15,60 15,30" fill="none" stroke="currentColor" strokeWidth="2.5" />
      <circle cx="40" cy="40" r="8" fill="currentColor" />
    </svg>
  ),
  channel: (
    <svg viewBox="0 0 80 80" className="w-14 h-14 opacity-40 group-hover:opacity-90 transition-all duration-300 text-[#007BFF]">
      <path d="M40 15 V40 M40 40 L20 65 M40 40 L60 65" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
      <circle cx="40" cy="15" r="5" fill="currentColor" />
      <circle cx="20" cy="65" r="5" fill="currentColor" />
      <circle cx="60" cy="65" r="5" fill="currentColor" />
    </svg>
  )
};

export default function ServiceCard({ service, onSelect }) {
  const [expanded, setExpanded] = useState(false);

  const { number, title, description, href, capabilities, isFeatured, visualKey, image } = service;

  if (isFeatured) {
    // Feature Card Treatment for Service 04 Healthcare Growth Engine (Spacious Split Banner Layout)
    return (
      <div 
        className="group relative bg-gradient-to-br from-[#16324F] via-[#1A3D63] to-[#0F243B] text-white rounded-3xl overflow-hidden border-2 border-[#38BDF8]/40 shadow-xl transition-all duration-300 hover:-translate-y-1 hover:border-[#38BDF8] hover:shadow-[0_16px_50px_rgba(56,189,248,0.22)] flex flex-col lg:flex-row items-stretch"
      >
        {/* Left Side: Text & Capabilities (Generous Spacing) */}
        <div className="p-8 sm:p-10 lg:w-3/5 space-y-6 flex flex-col justify-between">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#38BDF8]/20 border border-[#38BDF8]/40 text-xs font-black uppercase tracking-widest text-[#38BDF8]">
                <span className="w-2 h-2 rounded-full bg-[#38BDF8] animate-pulse" />
                CORE FEATURE SERVICE
              </div>
              <span className="text-4xl font-extrabold text-[#38BDF8] font-mono">
                {number}
              </span>
            </div>

            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight leading-snug">
              {title}
            </h3>

            <p className="text-sm sm:text-base font-medium text-white/85 leading-relaxed">
              {description}
            </p>

            {/* Architecture Steps List */}
            <div className="pt-4 border-t border-white/10 space-y-3">
              <h4 className="text-xs font-extrabold uppercase tracking-widest text-[#38BDF8]">
                Connected Growth Engine System Architecture
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {capabilities.map((cap) => (
                  <div key={cap} className="flex items-center gap-2 text-xs font-bold text-white/90 bg-white/5 border border-white/10 px-3.5 py-2.5 rounded-xl">
                    <span className="material-symbols-outlined text-[16px] text-[#38BDF8]">check_circle</span>
                    <span>{cap}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="pt-6 border-t border-white/10 flex items-center justify-between">
            <a
              href={href}
              onClick={(e) => {
                if (onSelect) {
                  e.preventDefault();
                  onSelect(service);
                }
              }}
              className="inline-flex items-center gap-2 text-xs sm:text-sm font-black uppercase tracking-wider text-[#38BDF8] group-hover:text-white transition-colors cursor-pointer"
            >
              <span>Explore Growth Engine System</span>
              <span className="material-symbols-outlined text-[18px] transition-transform group-hover:translate-x-2">
                arrow_forward
              </span>
            </a>
            <span className="text-[11px] font-bold text-white/50 hidden sm:inline">Unified Commercial System</span>
          </div>
        </div>

        {/* Right Side: High-Impact Control Room Image */}
        {image && (
          <div className="lg:w-2/5 relative min-h-[280px] lg:min-h-full overflow-hidden border-t lg:border-t-0 lg:border-l border-white/10">
            <img 
              src={image} 
              alt={title} 
              className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 opacity-90"
            />
            <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-[#16324F] via-transparent to-transparent opacity-80" />
            <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 text-xs font-bold text-white text-left">
              <span className="text-[#38BDF8] font-black uppercase tracking-wider block mb-0.5">Real-time Analytics</span>
              <span>Positioning + Visibility + Demand + Sales Enablement + Access</span>
            </div>
          </div>
        )}
      </div>
    );
  }

  // Standard Premium Editorial B2B Consulting Card (Spacious Spacing & Clean Typography)
  return (
    <div 
      className="group relative bg-white border border-[#E0F2FE] hover:border-[#38BDF8] rounded-3xl p-8 sm:p-9 shadow-[0_4px_24px_rgba(22,50,79,0.04)] hover:shadow-[0_12px_36px_rgba(56,189,248,0.14)] transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between"
    >
      <div className="space-y-5 text-left">
        
        {/* Top Header: Number & Vector Mark */}
        <div className="flex items-center justify-between pb-2 border-b border-[#F1F5F9]">
          <span className="text-3xl sm:text-4xl font-black text-[#16324F]/20 font-mono group-hover:text-[#007BFF] transition-colors">
            {number}
          </span>
          {SVGVisuals[visualKey] || SVGVisuals.network}
        </div>

        {/* Title & Description */}
        <div className="space-y-2.5">
          <h3 className="text-2xl font-black text-[#16324F] group-hover:text-[#007BFF] transition-colors tracking-tight leading-snug">
            {title}
          </h3>

          <p className="text-sm font-medium text-[#64748B] leading-relaxed">
            {description}
          </p>
        </div>

        {/* Capabilities Preview / Accordion */}
        <div className="space-y-2.5 pt-2">
          <button
            type="button"
            onClick={() => setExpanded(!expanded)}
            className="flex items-center gap-1.5 text-xs font-extrabold uppercase tracking-wider text-[#007BFF] hover:text-[#0056b3] focus:outline-none cursor-pointer"
          >
            <span>{expanded ? 'Hide Key Capabilities' : 'Key Capabilities'}</span>
            <span className={`material-symbols-outlined text-[16px] transition-transform duration-200 ${expanded ? 'rotate-180' : ''}`}>
              expand_more
            </span>
          </button>

          {expanded ? (
            <ul className="space-y-2 pt-2 pl-3 border-l-2 border-[#007BFF]/30">
              {capabilities.map((cap) => (
                <li key={cap} className="flex items-start gap-2 text-xs font-bold text-[#16324F]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#007BFF] mt-1.5 shrink-0" />
                  <span>{cap}</span>
                </li>
              ))}
            </ul>
          ) : (
            <div className="flex flex-wrap gap-2 pt-1">
              {capabilities.slice(0, 4).map((cap) => (
                <span key={cap} className="text-[11px] font-bold text-[#16324F]/80 bg-[#F8FAFC] border border-[#E0F2FE] px-3 py-1.5 rounded-lg">
                  {cap}
                </span>
              ))}
              {capabilities.length > 4 && (
                <span className="text-[11px] font-extrabold text-[#007BFF] bg-[#E0F2FE]/70 px-2.5 py-1.5 rounded-lg">
                  +{capabilities.length - 4} more
                </span>
              )}
            </div>
          )}
        </div>
      </div>

      {/* Card Footer Link */}
      <div className="pt-6 mt-6 border-t border-[#E0F2FE] flex items-center justify-between">
        <a
          href={href}
          onClick={(e) => {
            if (onSelect) {
              e.preventDefault();
              onSelect(service);
            }
          }}
          className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#007BFF] group-hover:text-[#0056b3] transition-colors cursor-pointer"
        >
          <span>Explore Service</span>
          <span className="material-symbols-outlined text-[16px] transition-transform group-hover:translate-x-1.5">
            arrow_forward
          </span>
        </a>
      </div>
    </div>
  );
}
