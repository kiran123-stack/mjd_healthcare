import React, { useState, useEffect, useRef } from 'react';
import { useModal } from '../context/ModalContext';

const servicesList = [
  { num: '01', name: 'Market Access', page: 'market-access', href: '/market-access/' },
  { num: '02', name: 'Go-To-Market Strategy', page: 'go-to-market-strategy', href: '/go-to-market-strategy/' },
  { num: '03', name: 'Phygital Healthcare Growth', page: 'phygital-healthcare-growth', href: '/phygital-healthcare-growth/' },
  { num: '04', name: 'Healthcare Growth Engine', page: 'healthcare-growth-engine', href: '/healthcare-growth-engine/' },
  { num: '05', name: 'Healthcare Business Development', page: 'healthcare-business-development', href: '/healthcare-business-development/' },
  { num: '06', name: 'Digital Demand Generation', page: 'healthcare-digital-demand-generation', href: '/healthcare-digital-demand-generation/' },
  { num: '07', name: 'Sales Enablement', page: 'sales-enablement', href: '/sales-enablement/' },
  { num: '08', name: 'Product Positioning', page: 'product-positioning-commercialization', href: '/product-positioning-commercialization/' },
  { num: '09', name: 'Channel Development', page: 'channel-distributor-development', href: '/channel-distributor-development/' },
  { num: '10', name: 'Industries We Serve', page: 'industries', href: '/industries/' }
];

export default function Header({ currentPage = 'home', onNavigate }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const dropdownRef = useRef(null);
  const { openModal } = useModal();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNavClick = (e, page, targetAnchor) => {
    if (e) e.preventDefault();
    setServicesDropdownOpen(false);
    setMobileOpen(false);
    if (onNavigate) {
      onNavigate(page, targetAnchor);
    }
  };

  const handleServiceSelect = (e, svc) => {
    if (e) e.preventDefault();
    setServicesDropdownOpen(false);
    setMobileOpen(false);
    if (onNavigate) {
      onNavigate(svc.page, null);
    }
  };

  const navItems = [
    { label: 'Home', page: 'home', anchor: null },
    { label: 'Services', page: 'services', anchor: null, hasDropdown: true },
    { label: 'Approach', page: 'home', anchor: '#approach' },
    { label: 'Solutions', page: 'home', anchor: '#solutions' },
    { label: 'Who We Help', page: 'home', anchor: '#who-we-help' },
    { label: 'Insights', page: 'home', anchor: '#insights' },
    { label: 'About Us', page: 'about', anchor: null },
    { label: 'Contact', page: 'contact', anchor: null },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md shadow-[0_2px_20px_rgba(22,50,79,0.08)]'
          : 'bg-white/90 backdrop-blur-sm'
      } border-b border-[#E0F2FE]/80`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 h-20 flex items-center justify-between gap-6">
        
        {/* Logo */}
        <a 
          href="/" 
          onClick={(e) => handleNavClick(e, 'home', null)}
          className="flex items-center gap-3 shrink-0 group cursor-pointer"
        >
          <img
            src="/logo-removebg-preview.png"
            alt="MJD Healthcare"
            className="h-10 sm:h-12 w-auto object-contain transition-transform group-hover:scale-[1.02]"
          />
        </a>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-7">
          {navItems.map(({ label, page, anchor, hasDropdown }) => {
            const isActive = 
              (page === 'contact' && currentPage === 'contact') ||
              (page === 'services' && currentPage === 'services') ||
              (page === 'about' && currentPage === 'about') || 
              (page === 'home' && currentPage === 'home' && !anchor);

            if (hasDropdown) {
              return (
                <div
                  key={label}
                  className="relative group py-6"
                  onMouseEnter={() => setServicesDropdownOpen(true)}
                  onMouseLeave={() => setServicesDropdownOpen(false)}
                  ref={dropdownRef}
                >
                  <a
                    href="#services"
                    onClick={(e) => handleNavClick(e, 'services', null)}
                    className={`text-[14px] font-semibold transition-colors flex items-center gap-1 cursor-pointer py-1 ${
                      isActive ? 'text-[#007BFF] font-black' : 'text-[#16324F]/80 hover:text-[#007BFF]'
                    }`}
                  >
                    <span>{label}</span>
                    <span className={`material-symbols-outlined text-[16px] transition-transform duration-200 ${servicesDropdownOpen ? 'rotate-180 text-[#007BFF]' : ''}`}>
                      expand_more
                    </span>
                    {isActive && (
                      <span className="absolute bottom-4 left-0 w-full h-[2px] bg-[#007BFF] rounded-full" />
                    )}
                  </a>

                  {/* Mega Menu Dropdown Container */}
                  {servicesDropdownOpen && (
                    <div className="absolute top-full left-1/2 -translate-x-1/2 w-[700px] bg-white border border-[#E0F2FE] rounded-2xl shadow-[0_12px_40px_rgba(22,50,79,0.12)] p-6 space-y-4 animate-in fade-in slide-in-from-top-2 duration-200">
                      
                      {/* Mega Menu Header */}
                      <div className="flex items-center justify-between pb-3 border-b border-[#E0F2FE]">
                        <div>
                          <div className="text-[11px] font-extrabold uppercase tracking-widest text-[#007BFF]">
                            MJD HEALTHCARE SERVICES &amp; SECTORS
                          </div>
                          <p className="text-xs font-medium text-[#64748B]">
                            Build the commercial path to healthcare growth.
                          </p>
                        </div>
                        <a
                          href="#services"
                          onClick={(e) => handleNavClick(e, 'services', null)}
                          className="inline-flex items-center gap-1 text-xs font-black uppercase tracking-wider text-[#007BFF] hover:underline"
                        >
                          <span>Explore Overview</span>
                          <span className="material-symbols-outlined text-[14px]">arrow_forward</span>
                        </a>
                      </div>

                      {/* 2-Column Grid of 10 Services & Sectors */}
                      <div className="grid grid-cols-2 gap-2">
                        {servicesList.map((svc) => (
                          <a
                            key={svc.num}
                            href={svc.href}
                            onClick={(e) => handleServiceSelect(e, svc)}
                            className="flex items-center gap-2.5 p-2.5 rounded-xl hover:bg-[#F8FAFC] border border-transparent hover:border-[#E0F2FE] transition-all group/item"
                          >
                            <span className="text-xs font-black text-[#007BFF] font-mono shrink-0">
                              {svc.num}
                            </span>
                            <span className="text-xs font-bold text-[#16324F] group-hover/item:text-[#007BFF] transition-colors truncate">
                              {svc.name}
                            </span>
                          </a>
                        ))}
                      </div>

                    </div>
                  )}

                </div>
              );
            }

            return (
              <a
                key={label}
                href={page === 'contact' ? '#contact' : page === 'about' ? '#about' : (anchor || '#')}
                onClick={(e) => handleNavClick(e, page, anchor)}
                className={`text-[14px] font-semibold transition-colors relative py-1 cursor-pointer ${
                  isActive
                    ? 'text-[#007BFF] font-black'
                    : 'text-[#16324F]/80 hover:text-[#007BFF]'
                }`}
              >
                {label}
                {isActive && (
                  <span className="absolute -bottom-1.5 left-0 w-full h-[2px] bg-[#007BFF] rounded-full" />
                )}
              </a>
            );
          })}
        </nav>

        {/* Right CTA Button */}
        <div className="hidden sm:flex items-center">
          <button
            type="button"
            onClick={() => openModal('Header CTA — Rapid Commercial Assessment')}
            className="inline-flex items-center gap-2 text-[12px] font-extrabold uppercase tracking-wider px-6 py-3 rounded-lg bg-[#007BFF] hover:bg-[#0066d6] text-white shadow-md shadow-[#007BFF]/25 hover:shadow-lg hover:shadow-[#007BFF]/35 transition-all duration-200 cursor-pointer"
          >
            <span>TALK TO MJD</span>
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
        <div className="lg:hidden bg-white border-t border-[#E0F2FE] px-6 py-6 space-y-4 shadow-xl max-h-[85vh] overflow-y-auto">
          {navItems.map(({ label, page, anchor, hasDropdown }) => {
            const isActive = 
              (page === 'services' && currentPage === 'services') ||
              (page === 'about' && currentPage === 'about') || 
              (page === 'home' && currentPage === 'home' && !anchor);

            if (hasDropdown) {
              return (
                <div key={label} className="border-b border-[#F1F5F9] pb-2">
                  <div 
                    onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                    className={`flex items-center justify-between py-2.5 text-sm font-bold cursor-pointer ${
                      isActive ? 'text-[#007BFF]' : 'text-[#16324F]'
                    }`}
                  >
                    <span>{label} &amp; Sectors</span>
                    <span className={`material-symbols-outlined text-[18px] text-[#007BFF] transition-transform ${mobileServicesOpen ? 'rotate-180' : ''}`}>
                      expand_more
                    </span>
                  </div>

                  {mobileServicesOpen && (
                    <div className="pl-3 pr-1 py-2 space-y-2 bg-[#F8FAFC] rounded-xl border border-[#E0F2FE] my-2">
                      <a
                        href="#services"
                        onClick={(e) => handleNavClick(e, 'services', null)}
                        className="block text-xs font-black uppercase text-[#007BFF] py-1.5 border-b border-[#E0F2FE]"
                      >
                        Explore All Services →
                      </a>
                      {servicesList.map((svc) => (
                        <a
                          key={svc.num}
                          href={svc.href}
                          onClick={(e) => handleServiceSelect(e, svc)}
                          className="flex items-center gap-2 py-1.5 text-xs font-bold text-[#16324F] hover:text-[#007BFF]"
                        >
                          <span className="text-[#007BFF] font-mono">{svc.num}</span>
                          <span>{svc.name}</span>
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              );
            }

            return (
              <a
                key={label}
                href={page === 'contact' ? '#contact' : page === 'services' ? '#services' : page === 'about' ? '#about' : (anchor || '#')}
                onClick={(e) => handleNavClick(e, page, anchor)}
                className={`flex items-center justify-between py-2.5 text-sm font-bold border-b border-[#F1F5F9] cursor-pointer ${
                  isActive ? 'text-[#007BFF]' : 'text-[#16324F] hover:text-[#007BFF]'
                }`}
              >
                <span>{label}</span>
                <span className="material-symbols-outlined text-[18px] text-[#007BFF]">chevron_right</span>
              </a>
            );
          })}

          <button
            type="button"
            onClick={() => {
              setMobileOpen(false);
              openModal('Mobile Header CTA — Talk to MJD');
            }}
            className="w-full flex items-center justify-center gap-2 text-xs font-extrabold uppercase tracking-wider px-5 py-3.5 rounded-lg bg-[#007BFF] text-white shadow-md mt-4 cursor-pointer"
          >
            TALK TO MJD HEALTHCARE
            <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
          </button>
        </div>
      )}
    </header>
  );
}
