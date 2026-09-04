import React, { useState, useEffect } from 'react';
import { useModal } from '../context/ModalContext';

const WHATSAPP_NUMBER = "919876543210";

const servicesList = [
  { id: 'seo', label: 'Healthcare SEO', icon: 'search' },
  { id: 'ads', label: 'Google Ads & Demand Gen', icon: 'ads_click' },
  { id: 'web', label: 'Conversion-Led Web Platform', icon: 'laptop_mac' },
  { id: 'brand', label: 'Brand & Clinical Differentiation', icon: 'verified' },
  { id: 'gtm', label: 'GTM & Formulary Access', icon: 'explore' },
  { id: 'phygital', label: 'Phygital Doctor Outreach', icon: 'hub' },
  { id: 'ai', label: 'AI Patient Ingestion Systems', icon: 'psychology' },
  { id: 'custom', label: 'Exploratory Commercial Audit', icon: 'help_outline' }
];

const orgTypes = [
  'Hospital Network / Chain',
  'Multi-Specialty Clinic',
  'Medical Device Manufacturer',
  'Healthcare SaaS / HealthTech',
  'Diagnostic & Lab Network',
  'Pharmaceutical / Biotech',
  'Other Healthcare Enterprise'
];

const timelines = [
  'Start Immediately (Within 14 Days)',
  'Within 30–45 Days',
  'Next Quarter (Q2/Q3 Roadmap)',
  'Exploring Feasibility'
];

const budgets = [
  'Under ₹50,000 / mo',
  '₹50,000 – ₹1.5 Lakh / mo',
  '₹1.5 Lakh – ₹3 Lakh / mo',
  '₹3 Lakh – ₹6 Lakh / mo',
  'Enterprise Scale (₹6 Lakh+)'
];

export default function AssessmentModal() {
  const { isOpen, modalTopic, closeModal } = useModal();
  
  const [selectedServices, setSelectedServices] = useState(['GTM & Formulary Access', 'Phygital Doctor Outreach']);
  const [name, setName] = useState('');
  const [org, setOrg] = useState('');
  const [orgType, setOrgType] = useState('Hospital Network / Chain');
  const [timeline, setTimeline] = useState('Start Immediately (Within 14 Days)');
  const [budget, setBudget] = useState('₹50,000 – ₹1.5 Lakh / mo');
  const [goal, setGoal] = useState('');
  const [notes, setNotes] = useState('');

  // Handle ESC key to close
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) closeModal();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, closeModal]);

  if (!isOpen) return null;

  const toggleService = (svcLabel) => {
    if (svcLabel === 'Exploratory Commercial Audit') {
      setSelectedServices(['Exploratory Commercial Audit']);
      return;
    }
    const filtered = selectedServices.filter(s => s !== 'Exploratory Commercial Audit');
    if (filtered.includes(svcLabel)) {
      setSelectedServices(filtered.filter(s => s !== svcLabel));
    } else {
      setSelectedServices([...filtered, svcLabel]);
    }
  };

  const getWhatsAppMessage = () => {
    const servicesStr = selectedServices.length > 0 
      ? selectedServices.join(', ') 
      : 'Comprehensive Commercial Assessment';

    return `*MJD Healthcare — Strategic Commercial Assessment*
━━━━━━━━━━━━━━━━━━━━━━━━━━
🎯 *Session Scope:* ${modalTopic || 'Market Acceleration'}
⚡ *Required Services:* ${servicesStr}
👤 *Executive:* ${name.trim() || 'Senior Healthcare Leader'}
🏥 *Organization:* ${org.trim() ? `${org.trim()} (${orgType})` : orgType}
⏳ *Timeline:* ${timeline}
💼 *Budget Allocation:* ${budget}
🎯 *Core Goal:* ${goal.trim() || 'Accelerate institutional revenue & clinical access'}
📝 *Requirements / Notes:* ${notes.trim() || 'None provided'}
━━━━━━━━━━━━━━━━━━━━━━━━━━
_Confidential executive submission via MJD Healthcare Advisory Portal_`;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const finalMsg = getWhatsAppMessage();
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(finalMsg)}`;
    window.open(url, '_blank');
    closeModal();
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
      
      {/* Cinematic Dark Backdrop */}
      <div 
        onClick={closeModal}
        className="fixed inset-0 bg-[#050B14]/80 backdrop-blur-md transition-opacity duration-300" 
      />

      {/* Luxury Modal Container */}
      <div className="relative z-10 w-full max-w-2xl max-h-[92vh] overflow-y-auto rounded-3xl bg-white text-[#16324F] shadow-[0_30px_90px_rgba(0,0,0,0.4)] border border-[#E2E8F0] p-6 sm:p-8 space-y-6 animate-scaleUp">
        
        {/* Top Header */}
        <div className="flex items-start justify-between gap-4 pb-4 border-b border-[#F1F5F9]">
          <div className="space-y-1.5">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E0F2FE] text-[10.5px] font-extrabold uppercase tracking-wider text-[#007BFF]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#007BFF] animate-pulse" />
              {modalTopic || 'Commercial Acceleration Brief'}
            </div>
            
            <h3 className="text-2xl sm:text-3xl font-black text-[#16324F] tracking-tight leading-tight">
              Design Your <span className="text-[#007BFF]">Healthcare Growth Plan.</span>
            </h3>
            
            <p className="text-xs sm:text-sm font-medium text-[#64748B]">
              Configure your strategic requirements below to establish a direct WhatsApp consultation with MJD Senior Partners.
            </p>
          </div>

          <button
            type="button"
            onClick={closeModal}
            className="w-9 h-9 rounded-full bg-[#F1F5F9] hover:bg-[#E2E8F0] flex items-center justify-center text-[#64748B] hover:text-[#16324F] transition-all shrink-0 cursor-pointer shadow-sm"
            aria-label="Close dialog"
          >
            <span className="material-symbols-outlined text-[20px]">close</span>
          </button>
        </div>

        {/* Section 1: Strategic Requirements Pill Grid */}
        <div className="space-y-2.5">
          <div className="flex items-center justify-between">
            <label className="text-xs font-black uppercase tracking-wider text-[#16324F]">
              Select Strategic Scope <span className="text-[#64748B] font-medium lowercase">(pick one or more)</span>
            </label>
            <span className="text-[11px] font-bold text-[#007BFF] bg-[#E0F2FE] px-2.5 py-0.5 rounded-full">
              {selectedServices.length} Selected
            </span>
          </div>

          <div className="flex flex-wrap gap-2">
            {servicesList.map((svc) => {
              const isSelected = selectedServices.includes(svc.label);
              return (
                <button
                  type="button"
                  key={svc.id}
                  onClick={() => toggleService(svc.label)}
                  className={`inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full text-xs font-bold transition-all cursor-pointer ${
                    isSelected
                      ? 'bg-[#007BFF] text-white shadow-md shadow-[#007BFF]/25 border border-[#007BFF] scale-[1.02]'
                      : 'bg-[#F8FAFC] text-[#334155] border border-[#CBD5E1] hover:border-[#007BFF] hover:bg-[#F0F8FF]'
                  }`}
                >
                  <span className={`material-symbols-outlined text-[15px] ${isSelected ? 'text-white' : 'text-[#007BFF]'}`}>
                    {svc.icon}
                  </span>
                  <span>{svc.label}</span>
                  {isSelected && (
                    <span className="material-symbols-outlined text-[14px]">check</span>
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* Section 2: Executive Details Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          
          {/* Row 1: Your Name | Organisation | Type */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5">
            <div>
              <label className="block text-[11px] font-black uppercase tracking-wider text-[#16324F] mb-1.5">
                Your Name &amp; Title
              </label>
              <div className="relative">
                <input
                  type="text"
                  placeholder="Dr. Arjun Shah, MD"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full bg-[#F8FAFC] border border-[#CBD5E1] focus:border-[#007BFF] focus:bg-white rounded-xl pl-3.5 pr-8 py-2.5 text-xs sm:text-sm text-[#16324F] placeholder-[#94A3B8] outline-none transition-all shadow-sm"
                />
                <span className="material-symbols-outlined absolute right-2.5 top-1/2 -translate-y-1/2 text-[#94A3B8] text-[17px] pointer-events-none">
                  person
                </span>
              </div>
            </div>

            <div>
              <label className="block text-[11px] font-black uppercase tracking-wider text-[#16324F] mb-1.5">
                Organisation Name
              </label>
              <div className="relative">
                <input
                  type="text"
                  placeholder="e.g. Apex Health Systems"
                  value={org}
                  onChange={(e) => setOrg(e.target.value)}
                  className="w-full bg-[#F8FAFC] border border-[#CBD5E1] focus:border-[#007BFF] focus:bg-white rounded-xl pl-3.5 pr-8 py-2.5 text-xs sm:text-sm text-[#16324F] placeholder-[#94A3B8] outline-none transition-all shadow-sm"
                />
                <span className="material-symbols-outlined absolute right-2.5 top-1/2 -translate-y-1/2 text-[#94A3B8] text-[17px] pointer-events-none">
                  domain
                </span>
              </div>
            </div>

            <div>
              <label className="block text-[11px] font-black uppercase tracking-wider text-[#16324F] mb-1.5">
                Sector Type
              </label>
              <div className="relative">
                <select
                  value={orgType}
                  onChange={(e) => setOrgType(e.target.value)}
                  className="w-full bg-[#F8FAFC] border border-[#CBD5E1] focus:border-[#007BFF] focus:bg-white rounded-xl px-3 py-2.5 text-xs text-[#16324F] outline-none transition-all shadow-sm cursor-pointer"
                >
                  {orgTypes.map((t) => (
                    <option key={t} value={t}>{t}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          {/* Row 2: Timeline | Monthly Budget | Main Goal */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5">
            <div>
              <label className="block text-[11px] font-black uppercase tracking-wider text-[#16324F] mb-1.5">
                Target Timeline
              </label>
              <select
                value={timeline}
                onChange={(e) => setTimeline(e.target.value)}
                className="w-full bg-[#F8FAFC] border border-[#CBD5E1] focus:border-[#007BFF] focus:bg-white rounded-xl px-3 py-2.5 text-xs text-[#16324F] outline-none transition-all shadow-sm cursor-pointer"
              >
                {timelines.map((tl) => (
                  <option key={tl} value={tl}>{tl}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-[11px] font-black uppercase tracking-wider text-[#16324F] mb-1.5">
                Monthly Budget
              </label>
              <select
                value={budget}
                onChange={(e) => setBudget(e.target.value)}
                className="w-full bg-[#F8FAFC] border border-[#CBD5E1] focus:border-[#007BFF] focus:bg-white rounded-xl px-3 py-2.5 text-xs text-[#16324F] outline-none transition-all shadow-sm cursor-pointer"
              >
                {budgets.map((b) => (
                  <option key={b} value={b}>{b}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-[11px] font-black uppercase tracking-wider text-[#16324F] mb-1.5">
                Primary Goal
              </label>
              <div className="relative">
                <input
                  type="text"
                  placeholder="e.g. Hospital formulary clearance"
                  value={goal}
                  onChange={(e) => setGoal(e.target.value)}
                  className="w-full bg-[#F8FAFC] border border-[#CBD5E1] focus:border-[#007BFF] focus:bg-white rounded-xl pl-3.5 pr-8 py-2.5 text-xs sm:text-sm text-[#16324F] placeholder-[#94A3B8] outline-none transition-all shadow-sm"
                />
                <span className="material-symbols-outlined absolute right-2.5 top-1/2 -translate-y-1/2 text-[#94A3B8] text-[17px] pointer-events-none">
                  flag
                </span>
              </div>
            </div>
          </div>

          {/* Section 3: Textarea for Project Details */}
          <div>
            <label className="block text-[11px] font-black uppercase tracking-wider text-[#16324F] mb-1.5">
              Project Context &amp; Key Requirements
            </label>
            <textarea
              rows={3}
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              placeholder="Brief context on your medical product, target hospitals, or timeline..."
              className="w-full bg-[#F8FAFC] border border-[#CBD5E1] focus:border-[#007BFF] focus:bg-white rounded-xl p-3 text-xs sm:text-sm text-[#16324F] placeholder-[#94A3B8] outline-none transition-all shadow-sm resize-none"
            />
          </div>

          {/* Section 4: WhatsApp Launch CTA */}
          <div className="pt-1">
            <button
              type="submit"
              className="w-full py-4 rounded-2xl bg-[#25D366] hover:bg-[#20bd5a] text-[#050B14] font-black text-xs sm:text-sm uppercase tracking-wider shadow-lg shadow-[#25D366]/30 hover:shadow-xl hover:scale-[1.01] transition-all flex items-center justify-center gap-2.5 cursor-pointer group"
            >
              <svg className="w-5 h-5 fill-current text-[#050B14]" viewBox="0 0 24 24">
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
              </svg>
              <span>Connect on WhatsApp</span>
              <span className="material-symbols-outlined text-[18px] group-hover:translate-x-1 transition-transform">
                arrow_forward
              </span>
            </button>
          </div>

          <p className="text-[10px] text-[#64748B] text-center pt-1">
            🔒 Bilateral NDA protected · Direct senior partner WhatsApp dispatch channel.
          </p>

        </form>

      </div>

      </div>
  );
}
