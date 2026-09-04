import React, { useState, useEffect } from 'react';
import { useModal } from '../context/ModalContext';

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { openModal } = useModal();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md shadow-[0_2px_20px_rgba(22,50,79,0.08)]'
          : 'bg-white/90 backdrop-blur-sm'
      } border-b border-[#E0F2FE]/80`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 h-20 flex items-center justify-between gap-6">
        
        {/* Real Logo */}
        <a href="/" className="flex items-center gap-3 shrink-0 group">
          <img
            src="/logo-removebg-preview.png"
            alt="MJD Healthcare"
            className="h-10 sm:h-12 w-auto object-contain transition-transform group-hover:scale-[1.02]"
          />
        </a>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {[
            { label: 'Approach', href: '#approach' },
            { label: 'Solutions', href: '#solutions' },
            { label: 'Who We Help', href: '#who-we-help' },
            { label: 'Insights', href: '#market-access-explainer' },
            { label: 'About Us', href: '#why-mjd' },
          ].map(({ label, href }) => (
            <a
              key={label}
              href={href}
              className="text-[14px] font-semibold text-[#16324F]/80 hover:text-[#007BFF] transition-colors relative py-1"
            >
              {label}
            </a>
          ))}
        </nav>

        {/* Right CTA Button */}
        <div className="hidden sm:flex items-center">
          <button
            type="button"
            onClick={() => openModal('Header CTA — Rapid Commercial Assessment')}
            className="inline-flex items-center gap-2 text-[12px] font-extrabold uppercase tracking-wider px-6 py-3 rounded-lg bg-[#007BFF] hover:bg-[#0066d6] text-white shadow-md shadow-[#007BFF]/25 hover:shadow-lg hover:shadow-[#007BFF]/35 transition-all duration-200 cursor-pointer"
          >
            <span>GET YOUR MARKET OPPORTUNITY ASSESSMENT</span>
            <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
          </button>
        </div>

        {/* Mobile menu button */}
        <button
          type="button"
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden p-2 rounded-lg bg-[#E0F2FE] text-[#16324F] hover:bg-[#BAE6FD] transition-colors"
          aria-label="Toggle menu"
        >
          <span className="material-symbols-outlined text-[24px]">{mobileOpen ? 'close' : 'menu'}</span>
        </button>
      </div>

      {/* Mobile drawer */}
      {mobileOpen && (
        <div className="lg:hidden bg-white border-t border-[#E0F2FE] px-6 py-6 space-y-4 shadow-xl">
          {[
            { label: 'Approach', href: '#approach' },
            { label: 'Solutions', href: '#solutions' },
            { label: 'Who We Help', href: '#who-we-help' },
            { label: 'Insights', href: '#insights' },
            { label: 'About Us', href: '#about' },
          ].map(({ label, href }) => (
            <a
              key={label}
              href={href}
              onClick={() => setMobileOpen(false)}
              className="flex items-center justify-between py-2.5 text-sm font-bold text-[#16324F] hover:text-[#007BFF] border-b border-[#F1F5F9]"
            >
              {label}
              <span className="material-symbols-outlined text-[18px] text-[#007BFF]">chevron_right</span>
            </a>
          ))}
          <button
            type="button"
            onClick={() => {
              setMobileOpen(false);
              openModal('Mobile Header CTA — Rapid Commercial Assessment');
            }}
            className="w-full flex items-center justify-center gap-2 text-xs font-extrabold uppercase tracking-wider px-5 py-3.5 rounded-lg bg-[#007BFF] text-white shadow-md mt-4 cursor-pointer"
          >
            GET YOUR MARKET OPPORTUNITY ASSESSMENT
            <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
          </button>
        </div>
      )}
    </header>
  );
}
