import React from 'react';

export default function Footer() {
  return (
    <footer className="w-full bg-[#16324F] text-white border-t border-white/10 pt-16 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-10 border-b border-white/10">

          {/* Brand Column */}
          <div className="md:col-span-4 space-y-4">
            <img
              src="/logo-removebg-preview.png"
              alt="MJD Healthcare"
              className="h-16 sm:h-20 w-auto brightness-0 invert opacity-95 transition-transform hover:scale-105"
            />
            <p className="text-sm font-medium text-white/70 max-w-sm leading-relaxed">
              Healthcare Growth & Market Access Consultancy. Helping healthcare businesses turn market opportunities into commercial growth through structured regulatory, pricing, and adoption pathways.
            </p>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#38BDF8]/10 border border-[#38BDF8]/30 text-xs font-semibold text-[#38BDF8] uppercase tracking-wider">
              <span className="w-1.5 h-1.5 rounded-full bg-[#38BDF8] animate-pulse" />
              Global Advisory Active
            </div>
          </div>

          <div className="md:col-span-2 space-y-4">
            <h4 className="text-xs font-extrabold uppercase tracking-widest text-[#38BDF8]">Consulting Practices</h4>
            <ul className="space-y-2 text-sm font-medium text-white/65">
              {['Market Entry & Access','Commercial Strategy','Payer & HTA Navigation','Value Dossier Framing'].map(l => (
                <li key={l}><a href="#solutions" className="hover:text-[#38BDF8] transition-colors">{l}</a></li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-2 space-y-4">
            <h4 className="text-xs font-extrabold uppercase tracking-widest text-[#38BDF8]">Ecosystem & Access</h4>
            <ul className="space-y-2 text-sm font-medium text-white/65">
              {['Biopharma Ventures','MedTech Innovators','Digital Health Platforms','Growth Acceleration'].map(l => (
                <li key={l}><a href="#who-we-help" className="hover:text-[#38BDF8] transition-colors">{l}</a></li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-2 space-y-4">
            <h4 className="text-xs font-extrabold uppercase tracking-widest text-[#38BDF8]">Strategic Intelligence</h4>
            <ul className="space-y-2 text-sm font-medium text-white/65">
              {['Access Dossiers','Regulatory Shifts','Pricing Benchmarks','Market Playbooks'].map(l => (
                <li key={l}><a href="#insights" className="hover:text-[#38BDF8] transition-colors">{l}</a></li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-2 space-y-4">
            <h4 className="text-xs font-extrabold uppercase tracking-widest text-[#38BDF8]">Firm</h4>
            <ul className="space-y-2 text-sm font-medium text-white/65">
              {['Partners & Leadership','Our Methodology','Advisory Assessment','Global Offices'].map(l => (
                <li key={l}><a href="#about" className="hover:text-[#38BDF8] transition-colors">{l}</a></li>
              ))}
            </ul>
          </div>
        </div>

        <div className="pt-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 text-xs font-semibold text-white/40">
          <div>© 2025 MJD Healthcare Advisory Partners. All rights reserved.</div>
          <div className="flex flex-wrap items-center gap-5">
            {['Regulatory Disclaimers','Privacy Architecture','Terms of Engagement','Conflict of Interest Policy'].map(l => (
              <a key={l} href="#" className="hover:text-[#38BDF8] transition-colors">{l}</a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
