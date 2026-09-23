import React, { useState } from 'react';
import { businessNeeds, servicesData } from './servicesData';
import { useModal } from '../../context/ModalContext';

export default function BusinessNeedSelector() {
  const [selectedNeedId, setSelectedNeedId] = useState('launch-product');
  const { openModal } = useModal();

  const selectedNeed = businessNeeds.find(n => n.id === selectedNeedId) || businessNeeds[0];
  
  const recommendedServices = servicesData.filter(s => 
    selectedNeed.serviceIds.includes(s.number)
  );

  return (
    <section className="relative w-full bg-[#F8FAFC] py-20 sm:py-28 border-b border-[#E0F2FE]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 space-y-12">
        
        {/* Header */}
        <div className="max-w-3xl text-left space-y-4">
          <div className="inline-flex items-center gap-2.5 text-xs sm:text-sm font-extrabold uppercase tracking-[0.2em] text-[#0066FF]">
            <span className="w-2.5 h-2.5 rounded-full bg-[#0066FF] animate-pulse" />
            <span>FIND THE RIGHT SERVICE</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#16324F] leading-[1.2] tracking-tight">
            What Are You Trying to Achieve?
          </h2>

          <p className="text-base sm:text-lg font-medium text-[#334155] leading-relaxed">
            Select your current commercial challenge below to see the exact MJD service capabilities engineered to solve it.
          </p>
        </div>

        {/* Desktop Split & Mobile Responsive Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Left Column: Selectable Business Needs (6 Options) */}
          <div className="lg:col-span-5 space-y-3.5">
            <span className="text-xs font-black uppercase tracking-widest text-[#475569] block mb-2">
              Select Your Commercial Goal
            </span>

            {businessNeeds.map((need) => {
              const isSelected = need.id === selectedNeedId;
              return (
                <button
                  key={need.id}
                  type="button"
                  onClick={() => setSelectedNeedId(need.id)}
                  className={`w-full text-left p-5 rounded-2xl border-2 transition-all duration-200 cursor-pointer flex items-center justify-between gap-4 ${
                    isSelected
                      ? 'bg-[#16324F] border-[#16324F] text-white shadow-lg'
                      : 'bg-white border-[#CBD5E1] text-[#16324F] hover:border-[#0066FF] hover:bg-white'
                  }`}
                >
                  <div className="space-y-1">
                    <h3 className={`text-base sm:text-lg font-bold ${isSelected ? 'text-white' : 'text-[#16324F]'}`}>
                      {need.title}
                    </h3>
                    <p className={`text-xs sm:text-sm font-medium line-clamp-2 ${isSelected ? 'text-white/80' : 'text-[#475569]'}`}>
                      {need.description}
                    </p>
                  </div>

                  <span className={`material-symbols-outlined text-[24px] shrink-0 ${isSelected ? 'text-[#38BDF8]' : 'text-[#64748B]'}`}>
                    {isSelected ? 'check_circle' : 'chevron_right'}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Right Column: Dynamically Recommended Capabilities */}
          <div className="lg:col-span-7 bg-white border-2 border-[#CBD5E1] rounded-3xl p-6 sm:p-10 shadow-sm space-y-8">
            
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#E2E8F0] pb-5">
              <div className="space-y-1">
                <span className="text-xs font-extrabold uppercase tracking-widest text-[#0066FF]">
                  RECOMMENDED SERVICE CAPABILITIES
                </span>
                <h4 className="text-2xl font-black text-[#16324F]">
                  For: {selectedNeed.title}
                </h4>
              </div>

              <button
                type="button"
                onClick={() => openModal(`Objective Discussion: ${selectedNeed.title}`)}
                className="inline-flex items-center gap-2 text-xs sm:text-sm font-extrabold uppercase tracking-wider px-5 py-3 rounded-xl bg-[#0066FF] text-white shadow-md hover:bg-[#0052cc] transition-colors cursor-pointer shrink-0"
              >
                <span>Discuss This Goal</span>
                <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
              </button>
            </div>

            <p className="text-sm sm:text-base font-medium text-[#334155] leading-relaxed">
              {selectedNeed.description} To achieve this outcome effectively, MJD deploys the following connected services:
            </p>

            {/* List of Recommended Service Cards */}
            <div className="space-y-4">
              {recommendedServices.map((svc) => (
                <div 
                  key={svc.id}
                  className="p-5 rounded-2xl border border-[#CBD5E1] bg-[#F8FAFC] hover:bg-white hover:border-[#0066FF] transition-all flex items-start justify-between gap-4 group shadow-xs"
                >
                  <div className="space-y-1.5">
                    <div className="flex items-center gap-2.5">
                      <span className="text-xs font-black text-[#0066FF] font-mono bg-[#E0F2FE] px-2.5 py-0.5 rounded-md">
                        {svc.number}
                      </span>
                      <h5 className="text-base font-black text-[#16324F] group-hover:text-[#0066FF] transition-colors">
                        {svc.title}
                      </h5>
                    </div>
                    <p className="text-xs sm:text-sm font-medium text-[#475569] leading-relaxed">
                      {svc.description}
                    </p>
                  </div>

                  <a
                    href={svc.href}
                    onClick={(e) => {
                      e.preventDefault();
                      openModal(`Inquire Service: ${svc.title}`);
                    }}
                    className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-extrabold text-[#0066FF] hover:underline shrink-0 pt-1"
                  >
                    <span>Details</span>
                    <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                  </a>
                </div>
              ))}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
