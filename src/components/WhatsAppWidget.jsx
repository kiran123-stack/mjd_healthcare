import React, { useState } from 'react';

const WHATSAPP_NUMBER = "919876543210"; // Configurable WhatsApp business number

export default function WhatsAppWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [msg, setMsg] = useState('');

  const sendToWhatsApp = (text) => {
    const messageToSend = text || msg || "Hello MJD Healthcare Partners, I would like to inquire about market access and commercial advisory for our healthcare product.";
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(messageToSend)}`;
    window.open(url, '_blank');
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      
      {/* Expandable Chat Box */}
      {isOpen && (
        <div className="mb-3 w-[320px] sm:w-[360px] rounded-3xl bg-[#0B131F]/95 backdrop-blur-xl border border-[#1E334D] shadow-[0_20px_50px_rgba(0,0,0,0.5)] p-5 text-white animate-float-alt transition-all">
          
          {/* Header */}
          <div className="flex items-center justify-between pb-3 border-b border-white/10">
            <div className="flex items-center gap-3">
              <div className="relative">
                <img
                  src="/majid.png"
                  alt="Majid - Senior Partner"
                  className="w-10 h-10 rounded-full object-cover border border-[#25D366]"
                />
                <span className="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full bg-[#25D366] ring-2 ring-[#0B131F] animate-pulse" />
              </div>
              <div>
                <h4 className="text-xs font-black text-white leading-none">
                  MJD Advisory Desk
                </h4>
                <span className="text-[10px] font-semibold text-[#25D366] flex items-center gap-1 mt-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#25D366]" />
                  Senior Partners Online
                </span>
              </div>
            </div>

            <button
              onClick={() => setIsOpen(false)}
              className="w-7 h-7 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white/70 hover:text-white transition-colors"
            >
              <span className="material-symbols-outlined text-[16px]">close</span>
            </button>
          </div>

          {/* Quick Prompts */}
          <div className="py-3 space-y-2">
            <div className="text-[10.5px] font-extrabold uppercase tracking-wider text-[#38BDF8]">
              Quick Advisory Inquiry
            </div>
            
            <button
              onClick={() => sendToWhatsApp("Hi, I want to assess hospital market access for our medical device.")}
              className="w-full text-left p-2.5 rounded-xl bg-white/5 hover:bg-[#007BFF]/20 border border-white/10 hover:border-[#007BFF] text-xs font-medium text-white/90 transition-all flex items-center justify-between group"
            >
              <span>🏥 Medical Device Market Access</span>
              <span className="material-symbols-outlined text-[14px] text-[#38BDF8] group-hover:translate-x-0.5 transition-transform">arrow_forward</span>
            </button>

            <button
              onClick={() => sendToWhatsApp("Hi, we are facing hospital formulary and procurement deadlock. Need advisory support.")}
              className="w-full text-left p-2.5 rounded-xl bg-white/5 hover:bg-[#007BFF]/20 border border-white/10 hover:border-[#007BFF] text-xs font-medium text-white/90 transition-all flex items-center justify-between group"
            >
              <span>📋 Hospital Formulary Clearance</span>
              <span className="material-symbols-outlined text-[14px] text-[#38BDF8] group-hover:translate-x-0.5 transition-transform">arrow_forward</span>
            </button>

            <button
              onClick={() => sendToWhatsApp("Hi, looking to scale commercial distributor networks across regional hospital chains.")}
              className="w-full text-left p-2.5 rounded-xl bg-white/5 hover:bg-[#007BFF]/20 border border-white/10 hover:border-[#007BFF] text-xs font-medium text-white/90 transition-all flex items-center justify-between group"
            >
              <span>📈 Commercial Distribution & Scale</span>
              <span className="material-symbols-outlined text-[14px] text-[#38BDF8] group-hover:translate-x-0.5 transition-transform">arrow_forward</span>
            </button>
          </div>

          {/* Custom Message Input */}
          <div className="pt-2">
            <div className="flex gap-2">
              <input
                type="text"
                placeholder="Type your inquiry..."
                value={msg}
                onChange={(e) => setMsg(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && sendToWhatsApp()}
                className="flex-grow bg-[#152234] border border-[#1E334D] focus:border-[#25D366] rounded-xl px-3 py-2 text-xs text-white placeholder-white/40 outline-none transition-all"
              />
              <button
                onClick={() => sendToWhatsApp()}
                className="px-3.5 py-2 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] text-[#070D18] font-black flex items-center justify-center transition-all shadow-md shadow-[#25D366]/30"
              >
                <span className="material-symbols-outlined text-[18px]">send</span>
              </button>
            </div>
            <p className="text-[10px] text-white/40 mt-2 text-center">
              Direct encrypted WhatsApp conversation with senior life-sciences leadership.
            </p>
          </div>

        </div>
      )}

      {/* Floating Launcher Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="group relative flex items-center gap-3 pl-4 pr-5 py-3 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-white font-extrabold text-xs sm:text-sm uppercase tracking-wider shadow-[0_10px_25px_rgba(37,211,102,0.45)] hover:shadow-[0_15px_35px_rgba(37,211,102,0.6)] hover:scale-105 transition-all duration-300"
      >
        {/* Pulse Glow Effect */}
        <span className="absolute -inset-1 rounded-full bg-[#25D366] opacity-40 blur-md group-hover:opacity-75 animate-ping pointer-events-none" />

        {/* WhatsApp Icon SVG */}
        <svg
          className="w-6 h-6 fill-current relative z-10 text-white"
          viewBox="0 0 24 24"
        >
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
        </svg>

        <span className="relative z-10 font-bold hidden sm:inline">
          {isOpen ? 'Close Advisory Chat' : 'Chat on WhatsApp'}
        </span>

        {/* Unread Alert Dot */}
        <span className="w-2 h-2 rounded-full bg-white relative z-10 animate-pulse" />
      </button>

    </div>
  );
}
