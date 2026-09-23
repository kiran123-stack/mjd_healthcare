import React, { useState, useEffect } from 'react';
import { useModal } from '../context/ModalContext';

const heroBgImage = "https://res.cloudinary.com/q1rn5v9m/image/upload/v1789720904/ChatGPT_Image_Sep_18_2026_01_39_45_AM.png";

// Real Social Network SVG Icons (LinkedIn, Instagram, Facebook, YouTube)
const SocialIcons = {
  linkedin: (
    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
    </svg>
  ),
  instagram: (
    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
    </svg>
  ),
  facebook: (
    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
      <path d="M12 2.04C6.5 2.04 2 6.53 2 12.06C2 17.06 5.66 21.21 10.44 21.96V14.96H7.9V12.06H10.44V9.85C10.44 7.34 11.93 5.96 14.22 5.96C15.31 5.96 16.45 6.15 16.45 6.15V8.62H15.19C13.95 8.62 13.56 9.39 13.56 10.18V12.06H16.34L15.89 14.96H13.56V21.96A10 10 0 0 0 22 12.06C22 6.53 17.5 2.04 12 2.04Z"/>
    </svg>
  ),
  youtube: (
    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
      <path d="M10 15l5.19-3L10 9v6m11.56-7.83c.13.47.22 1.1.28 1.9.07.8.1 1.49.1 2.09L22 12c0 2.19-.16 3.8-.44 4.83-.25.9-.83 1.48-1.73 1.73-.47.13-1.33.22-2.65.28-1.3.07-2.49.1-3.59.1L12 19c-4.19 0-6.8-.16-7.83-.44-.9-.25-1.48-.83-1.73-1.73-.13-.47-.22-1.1-.28-1.9-.07-.8-.1-1.49-.1-2.09L2 12c0-2.19.16-3.8.44-4.83.25-.9.83-1.48 1.73-1.73.47-.13 1.33-.22 2.65-.28 1.3-.07 2.49-.1 3.59-.1L12 5c4.19 0 6.8.16 7.83.44.9.25 1.48.83 1.73 1.73z"/>
    </svg>
  )
};

export default function ContactPage({ onNavigateHome }) {
  const { openModal } = useModal();
  const [formData, setFormData] = useState({
    fullname: '',
    email: '',
    subject: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    document.title = "Contact Us | MJD Healthcare India";
  }, []);

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.fullname || !formData.email) return;
    setSubmitted(true);
  };

  return (
    <div className="w-full bg-[#F8FAFC]">
      
      {/* ── 1. HERO BANNER WITH VINTAGE CONTRAST EFFECT (NO BLUR) ── */}
      <section className="relative w-full bg-[#16324F] text-white py-20 sm:py-28 overflow-hidden flex items-center">
        {/* Background Image with Vintage Sepia/Vignette Effect (No blur as requested) */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat filter sepia-[0.25] contrast-[1.15] saturate-[0.9] z-0"
          style={{ backgroundImage: `url('${heroBgImage}')` }}
        />

        {/* Vintage Dark Overlay & Vignette for Crisp Text Readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#16324F]/95 via-[#16324F]/80 to-[#16324F]/65 z-1" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(22,50,79,0.85)_100%)] z-1" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 w-full flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-[0.2em] text-[#38BDF8]">
              <span className="w-2.5 h-2.5 rounded-full bg-[#38BDF8] animate-pulse" />
              <span>MJD HEALTHCARE CONTACTS</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight drop-shadow-lg">
              Contacts
            </h1>
          </div>

          {/* Breadcrumb */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs font-bold text-white/90 shadow-lg">
            <a 
              href="/" 
              onClick={(e) => { e.preventDefault(); if (onNavigateHome) onNavigateHome(); }}
              className="hover:text-[#38BDF8] transition-colors cursor-pointer"
            >
              Home
            </a>
            <span className="text-white/40">/</span>
            <span className="text-[#38BDF8]">Contacts</span>
          </div>
        </div>
      </section>


      {/* ── 2. MAIN CONTACT SECTION (Spacious Grid with Exact Padding Fixes) ── */}
      <section className="relative w-full py-16 sm:py-24 border-b border-[#E0F2FE]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            
            {/* Left Column: Heading + Description + Contact Details Grid */}
            <div className="lg:col-span-6 space-y-8 text-left">
              
              <div className="space-y-4">
                <span className="text-xs font-extrabold uppercase tracking-[0.18em] text-[#007BFF]">
                  GET IN TOUCH
                </span>

                <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-black text-[#16324F] leading-[1.25] tracking-tight">
                  We are always ready to help you and answer your questions
                </h2>

                <p className="text-sm sm:text-base font-medium text-[#64748B] leading-relaxed max-w-xl">
                  Whether you are launching a product, entering a new market, expanding hospital penetration, or building a connected growth strategy, MJD Healthcare brings strategy and execution together.
                </p>
              </div>

              {/* Contact Details Cards — Spacious Padding & Clean Margins */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 pt-4 border-t border-[#E0F2FE]">
                
                {/* 1. Address Card */}
                <div className="sm:col-span-2 bg-white border border-[#E0F2FE] hover:border-[#38BDF8] px-6 py-5 rounded-2xl shadow-sm space-y-2 transition-all">
                  <div className="flex items-center gap-2.5 text-xs font-black uppercase tracking-wider text-[#007BFF]">
                    <span className="material-symbols-outlined text-[20px]">location_on</span>
                    <span>ADDRESS</span>
                  </div>
                  <p className="text-xs sm:text-sm font-extrabold text-[#16324F] leading-relaxed break-words">
                    808B DLF PRIME TOWER, POCKET-F, OKHLA PHASE 1, NEW DELHI 110020
                  </p>
                </div>

                {/* 2. Phone / WhatsApp Card */}
                <div className="bg-white border border-[#E0F2FE] hover:border-[#38BDF8] px-6 py-5 rounded-2xl shadow-sm space-y-2 transition-all">
                  <div className="flex items-center gap-2.5 text-xs font-black uppercase tracking-wider text-[#007BFF]">
                    <span className="material-symbols-outlined text-[20px]">call</span>
                    <span>CONTACT</span>
                  </div>
                  <div className="text-xs sm:text-sm font-extrabold text-[#007BFF]">
                    <a href="tel:+919794631500" className="hover:underline">+91 97946 31500</a>
                  </div>
                </div>

                {/* 3. Email Card */}
                <div className="bg-white border border-[#E0F2FE] hover:border-[#38BDF8] px-6 py-5 rounded-2xl shadow-sm space-y-2 transition-all min-w-0">
                  <div className="flex items-center gap-2.5 text-xs font-black uppercase tracking-wider text-[#007BFF]">
                    <span className="material-symbols-outlined text-[20px]">mail</span>
                    <span>MAIL US</span>
                  </div>
                  <div className="text-xs sm:text-sm font-extrabold text-[#007BFF] truncate">
                    <a href="mailto:INFO@MJDHEALTHCARE.IN" className="hover:underline">INFO@MJDHEALTHCARE.IN</a>
                  </div>
                </div>

                {/* 4. Social Network Card with Real Working Links */}
                <div className="sm:col-span-2 bg-white border border-[#E0F2FE] hover:border-[#38BDF8] px-6 py-5 rounded-2xl shadow-sm space-y-3 transition-all">
                  <div className="flex items-center gap-2.5 text-xs font-black uppercase tracking-wider text-[#007BFF]">
                    <span className="material-symbols-outlined text-[20px]">share</span>
                    <span>SOCIAL NETWORK</span>
                  </div>

                  <div className="flex items-center gap-4 pt-1">
                    {[
                      { 
                        key: 'linkedin', 
                        label: 'LinkedIn', 
                        url: 'https://www.linkedin.com/company/mjdhealthcare/?originalSubdomain=in', 
                        hoverBg: 'hover:bg-[#0A66C2] hover:text-white' 
                      },
                      { 
                        key: 'youtube', 
                        label: 'YouTube', 
                        url: 'https://www.youtube.com/@MJDHealthcare', 
                        hoverBg: 'hover:bg-[#FF0000] hover:text-white' 
                      },
                      { 
                        key: 'instagram', 
                        label: 'Instagram', 
                        url: 'https://www.instagram.com/mjdhealthcare/', 
                        hoverBg: 'hover:bg-gradient-to-tr hover:from-[#f09433] hover:via-[#dc2743] hover:to-[#bc1888] hover:text-white' 
                      },
                      { 
                        key: 'facebook', 
                        label: 'Facebook', 
                        url: 'https://www.facebook.com/people/Mjd-Healthcare-1/61592106786872/#', 
                        hoverBg: 'hover:bg-[#1877F2] hover:text-white' 
                      }
                    ].map((s) => (
                      <a
                        key={s.label}
                        href={s.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`w-11 h-11 rounded-full bg-[#F1F5F9] text-[#16324F] flex items-center justify-center transition-all duration-200 shadow-sm hover:scale-110 ${s.hoverBg}`}
                        title={s.label}
                      >
                        {SocialIcons[s.key]}
                      </a>
                    ))}
                  </div>
                </div>

              </div>

            </div>

            {/* Right Column: Contact Form */}
            <div className="lg:col-span-6 w-full">
              <div className="bg-[#F1F5F9]/90 border border-[#E0F2FE] rounded-3xl p-8 sm:p-10 shadow-sm space-y-6">
                
                <div className="space-y-2 text-left">
                  <h3 className="text-2xl font-black text-[#16324F]">
                    Get In Touch
                  </h3>
                  <p className="text-xs sm:text-sm font-medium text-[#64748B]">
                    Define your goals and identify areas where we can add value to your business.
                  </p>
                </div>

                {submitted ? (
                  <div className="bg-white border-2 border-[#10B981]/40 rounded-2xl p-6 text-center space-y-3">
                    <span className="material-symbols-outlined text-[48px] text-[#10B981]">check_circle</span>
                    <h4 className="text-lg font-black text-[#16324F]">Thank You for Reaching Out!</h4>
                    <p className="text-xs font-medium text-[#64748B]">
                      Your message has been dispatched to MJD Healthcare Advisory Team. We will respond within 24 business hours.
                    </p>
                    <button
                      type="button"
                      onClick={() => { setSubmitted(false); setFormData({ fullname: '', email: '', subject: '', message: '' }); }}
                      className="text-xs font-bold text-[#007BFF] underline pt-2 cursor-pointer"
                    >
                      Send Another Message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4 text-left">
                    
                    <div>
                      <label className="block text-xs font-bold text-[#16324F] uppercase tracking-wider mb-1.5">
                        Fullname
                      </label>
                      <input
                        type="text"
                        name="fullname"
                        required
                        placeholder="Your full name"
                        value={formData.fullname}
                        onChange={handleChange}
                        className="w-full px-4 py-3.5 bg-white border border-[#CBD5E1] focus:border-[#007BFF] rounded-xl text-sm font-medium text-[#16324F] placeholder-[#94A3B8] focus:outline-none transition-all shadow-sm"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-[#16324F] uppercase tracking-wider mb-1.5">
                        Email
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        placeholder="INFO@MJDHEALTHCARE.IN"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3.5 bg-white border border-[#CBD5E1] focus:border-[#007BFF] rounded-xl text-sm font-medium text-[#16324F] placeholder-[#94A3B8] focus:outline-none transition-all shadow-sm"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-[#16324F] uppercase tracking-wider mb-1.5">
                        Subject
                      </label>
                      <input
                        type="text"
                        name="subject"
                        placeholder="E.g., Market Access / GTM Assessment"
                        value={formData.subject}
                        onChange={handleChange}
                        className="w-full px-4 py-3.5 bg-white border border-[#CBD5E1] focus:border-[#007BFF] rounded-xl text-sm font-medium text-[#16324F] placeholder-[#94A3B8] focus:outline-none transition-all shadow-sm"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-[#16324F] uppercase tracking-wider mb-1.5">
                        Message
                      </label>
                      <textarea
                        name="message"
                        rows={4}
                        placeholder="Tell us about your healthcare business, products, or commercial goals..."
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full px-4 py-3.5 bg-white border border-[#CBD5E1] focus:border-[#007BFF] rounded-xl text-sm font-medium text-[#16324F] placeholder-[#94A3B8] focus:outline-none transition-all shadow-sm resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-[#16324F] hover:bg-[#007BFF] text-white text-xs font-extrabold uppercase tracking-wider transition-all duration-200 shadow-md flex items-center justify-center gap-2 cursor-pointer mt-2"
                    >
                      <span>Send Message</span>
                      <span className="material-symbols-outlined text-[16px]">send</span>
                    </button>

                  </form>
                )}

              </div>
            </div>

          </div>

        </div>
      </section>


      {/* ── 3. MAP LOCATION SECTION (Okhla Phase 1 New Delhi Map) ── */}
      <section className="relative w-full bg-white py-12 border-b border-[#E0F2FE]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          
          <div className="w-full h-80 sm:h-96 rounded-3xl overflow-hidden border-2 border-[#E0F2FE] relative shadow-sm bg-[#E2E8F0]">
            <iframe
              title="MJD Healthcare Location Map - Okhla Phase 1 New Delhi"
              src="https://maps.google.com/maps?q=DLF%20Prime%20Tower%20Okhla%20Phase%201%20New%20Delhi%20110020&t=&z=14&ie=UTF8&iwloc=&output=embed"
              className="w-full h-full border-0 filter grayscale contrast-125 opacity-90"
              allowFullScreen=""
              loading="lazy"
            />
            
            <div className="absolute top-6 left-6 bg-white/95 backdrop-blur-md border border-[#E0F2FE] p-4 rounded-2xl shadow-lg max-w-sm text-left hidden sm:block">
              <div className="flex items-center gap-2 text-[11px] font-black uppercase text-[#007BFF] mb-1">
                <span className="material-symbols-outlined text-[16px]">domain</span>
                MJD HEALTHCARE HEADQUARTERS
              </div>
              <p className="text-xs font-bold text-[#16324F]">808B DLF PRIME TOWER, POCKET-F, OKHLA PHASE 1, NEW DELHI 110020</p>
              <p className="text-[11px] text-[#64748B] mt-1">CONTACT: +91 97946 31500 | MAIL: INFO@MJDHEALTHCARE.IN</p>
              <a 
                href="https://maps.google.com/?q=808B+DLF+PRIME+TOWER+OKHLA+PHASE+1+NEW+DELHI+110020" 
                target="_blank" 
                rel="noreferrer"
                className="text-[10px] font-bold text-[#007BFF] hover:underline block mt-2"
              >
                Open in Google Maps →
              </a>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
}
