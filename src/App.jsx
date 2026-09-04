import React, { useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import TheChallenge from "./components/TheChallenge";
import TheDifferentiator from "./components/TheDifferentiator";
import GrowthEngine from "./components/GrowthEngine";
import PhygitalModel from "./components/PhygitalModel";
import Solutions from "./components/Solutions";
import WhoWeHelp from "./components/WhoWeHelp";
import MarketAccessExplainer from "./components/MarketAccessExplainer";
import FinalCTA from "./components/FinalCTA";
import WhatsAppWidget from "./components/WhatsAppWidget";
import AssessmentModal from "./components/AssessmentModal";
import Footer from "./components/Footer";
import { ModalProvider, useModal } from "./context/ModalContext";
import { useGsapAnimations } from "./utils/useGsap";

const faqs = [
  { q: "How is MJD Healthcare different from a traditional healthcare marketing agency?", a: "Most marketing agencies focus on brand awareness, vanity digital metrics, and social reach. MJD Healthcare is a commercialization advisory and market access practice. We focus on hospital procurement clearance, institutional sales pipelines, clinical buyer validation, and formulary committee adoption. We measure success by commercial traction and contract value." },
  { q: "What types of engagement models does MJD Healthcare offer?", a: "We structure our work around two core models: Strategic Market Opportunity Assessment and GTM Architecture Sprints, and Retained Phygital Commercial Execution — multi-month embedded market access and demand acceleration partnerships with clear milestone deliverables." },
  { q: "What is the typical timeline to achieve institutional traction?", a: "While enterprise hospital sales cycles traditionally span 12 to 18 months, our Phygital model accelerates clinical qualification. Initial targeted decision-maker engagements and demo trials typically commence in weeks 4 to 8. Most client partners observe qualified procurement evaluations and tender entries within 90 to 120 days of execution." },
  { q: "How do you ensure full compliance with healthcare regulations and hospital policies?", a: "Every market access protocol, clinical value document, and digital outreach sequence is strictly governed by regional medical device advertising regulations, biomedical clearance frameworks, data privacy rules, and institutional conflict of interest codes. We never compromise institutional compliance." }
];

const imgCase = "https://lh3.googleusercontent.com/aida-public/AB6AXuBQLKfDNJxzQS_O5EFhXtuNxMmpunbwtlc-sB-HFIwXEUvk9i7KGvXYFPz6T00rg0VJef7K4_l5w6F2qR8zMCJqief42zqEecxVyzyTPFhzVmKewMc_Vk7WWdslaiimfMwqZ0_jqsDTqxbBjpLCUYgKXxQXtEIj_PDLnj6jmbd2AA1WXNGINp-JsGL45Mi6qQNqOwZLCgf8yN2nMk5ZtI0sgHxh7OaxXk77mbf7kFh4qcGGSSZBO742VA";

function SectionLabel({ children, centered = false }) {
  return (
    <div className={`flex items-center ${centered ? 'justify-center' : ''} gap-2 text-xs sm:text-[13px] font-extrabold uppercase tracking-[0.18em] text-[#007BFF] mb-3`}>
      <span className="w-2 h-2 rounded-full bg-[#007BFF] animate-pulse" />
      <span>{children}</span>
    </div>
  );
}

function BigH2({ children, light = false, centered = false, className = "", style = {} }) {
  return (
    <h2 
      className={`text-3xl sm:text-4xl lg:text-[46px] font-black ${light ? 'text-white' : 'text-[#16324F]'} leading-[1.28] sm:leading-[1.3] tracking-tight mb-5 ${centered ? 'text-center' : ''} ${className}`}
      style={style}
    >
      {children}
    </h2>
  );
}

function MainContent() {
  const [openFaq, setOpenFaq] = useState(null);
  const toggleFaq = (i) => setOpenFaq(openFaq === i ? null : i);
  const { openModal } = useModal();
  
  // Initialize GSAP micro-animations
  useGsapAnimations();

  return (
    <div style={{fontFamily:'Manrope,sans-serif',background:'#F8FAFC',color:'#16324F',overflowX:'hidden'}}>
      {/* Scroll-Driven Dynamic Top Reading Progress Bar */}
      <div 
        id="scroll-progress-bar"
        className="fixed top-0 left-0 right-0 h-[3.5px] bg-gradient-to-r from-[#007BFF] via-[#00D2FF] to-[#10B981] z-[100] origin-left scale-x-0"
      />

      <Header />
      <main style={{paddingTop:80}}>

        {/* ── SECTION 01 HERO (Exact replica of user design) ── */}
        <div id="hero" className="scroll-mt-24">
          <Hero />
        </div>

        {/* ── SECTION 02 THE CHALLENGE (Exact replica of user design) ── */}
        <div id="approach" className="scroll-mt-24">
          <TheChallenge />
        </div>

        {/* ── SECTION 03 THE DIFFERENTIATOR (Exact replica of user design) ── */}
        <TheDifferentiator />

        {/* ── SECTION 04 GROWTH ENGINE (Exact replica of user design) ── */}
        <GrowthEngine />

        {/* ── SECTION 05 PHYGITAL MODEL (Exact replica of user design) ── */}
        <PhygitalModel />

        {/* ── SECTION 06 SOLUTIONS (Exact replica of user design) ── */}
        <Solutions />

        {/* ── SECTION 07 WHO WE HELP (Exact attractive card redesign) ── */}
        <WhoWeHelp />

        {/* ── SECTION 08 MARKET ACCESS EXPLAINER (Exact replica of user design) ── */}
        <MarketAccessExplainer />

        {/* ── SECTION 09 WHY MJD ── */}
        <section id="why-mjd" style={{background:'#FFFFFF',borderBottom:'1px solid #E0F2FE',padding:'6rem 0'}}>
          <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
            <SectionLabel>Institutional Competence</SectionLabel>
            <BigH2 style={{maxWidth:820}}>Healthcare Expertise. <span className="text-[#007BFF]">Strategic Thinking. Commercial Execution.</span></BigH2>
            <p style={{fontWeight:500,color:'#64748B',fontSize:'1.1rem',lineHeight:1.7,maxWidth:640,marginBottom:'3rem'}}>Why leading healthcare device enterprises choose MJD over traditional consumer marketing agencies and slow management consultancies.</p>
            <div style={{borderTop:'1px solid #E0F2FE',borderBottom:'1px solid #E0F2FE'}}>
              {[
                {n:'01',t:'Deep Healthcare Understanding',d:'We understand hospital hierarchies, medical jargon, ethical boundaries, procurement politics, and clinical trial implications. We do not require a six-month onboarding curve.'},
                {n:'02',t:'Commercial Rigor',d:'We judge our work by signed supply contracts, trial conversions, tender awards, and pipeline value — not clicks, impressions, or abstract social brand awareness.'},
                {n:'03',t:'Phygital Execution Engine',d:'We seamlessly merge enterprise digital precision with on-the-ground hospital access. The digital arm generates and pre-qualifies demand; the physical arm clears institutional gates.'},
                {n:'04',t:'Sales-Oriented Marketing',d:'Every content piece, clinical whitepaper, and executive briefing is engineered to advance an institutional conversation toward an active procurement evaluation.'},
                {n:'05',t:'Direct Market Access Pathways',d:'Decades of relationships across major multi-specialty chains, apex academic institutes, medical boards, and healthcare supply chains give our partners immediate credibility.'}
              ].map(item=>(
                <div 
                  key={item.n} 
                  onClick={() => openModal(`Why MJD Pillar: ${item.t}`)}
                  className="grid grid-cols-1 md:grid-cols-12 gap-5 items-baseline group cursor-pointer" 
                  style={{padding:'2rem 0.5rem',borderBottom:'1px solid rgba(224,242,254,0.6)',transition:'all 0.2s'}} 
                  onMouseEnter={e=>e.currentTarget.style.background='#F8FAFC'} 
                  onMouseLeave={e=>e.currentTarget.style.background='transparent'}
                >
                  <div className="md:col-span-2" style={{fontSize:48,fontWeight:800,color:'#38BDF8',opacity:0.35,lineHeight:1}}>{item.n}</div>
                  <div className="md:col-span-4"><h3 style={{fontWeight:800,fontSize:20,color:'#16324F'}} className="group-hover:text-[#007BFF] transition-colors">{item.t}</h3></div>
                  <div className="md:col-span-6"><p style={{fontWeight:500,fontSize:15,color:'#64748B',lineHeight:1.7}}>{item.d}</p></div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── SECTION 10 TRACK RECORD ── */}
        <section id="track-record" style={{background:'#16324F',borderBottom:'1px solid rgba(255,255,255,0.08)',padding:'6rem 0'}}>
          <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
            <div style={{textAlign:'center',marginBottom:'3.5rem'}}>
              <SectionLabel centered>Track Record</SectionLabel>
              <BigH2 light centered>Built on Real Healthcare <span className="text-[#007BFF]">Commercial Experience.</span></BigH2>
            </div>
            <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(200px,1fr))',border:'1px solid rgba(255,255,255,0.08)',borderRadius:20,overflow:'hidden',background:'rgba(255,255,255,0.04)'}}>
              {[
                {v:'140+',l:'Healthcare Projects',d:'Delivered across medical devices, diagnostics, and life sciences.'},
                {v:'650+',l:'Institutions Engaged',d:'Active relationships across tertiary hospitals and health networks.'},
                {v:'85+',l:'Products Commercialized',d:'Brought from regulatory clearance to multi-center clinical adoption.'},
                {v:'18+',l:'Years Domain Focus',d:'Average healthcare leadership and market access team tenure.'},
                {v:'₹420Cr+',l:'Pipeline Influenced',d:'Documented commercial contract value accelerated for clients.'}
              ].map((stat,i)=>(
                <div 
                  key={stat.l} 
                  onClick={() => openModal(`Track Record Verification: ${stat.l}`)}
                  style={{padding:'2rem',textAlign:'center',borderLeft:i?'1px solid rgba(255,255,255,0.08)':undefined,cursor:'pointer'}}
                  className="hover:bg-white/5 transition-colors"
                >
                  <div style={{fontWeight:800,fontSize:46,letterSpacing:'-0.03em',lineHeight:1,color:'#38BDF8',marginBottom:8}}>{stat.v}</div>
                  <div style={{fontWeight:800,fontSize:11,letterSpacing:'0.08em',textTransform:'uppercase',color:'#FFFFFF',marginBottom:6}}>{stat.l}</div>
                  <p style={{fontWeight:500,fontSize:12,color:'rgba(255,255,255,0.6)',lineHeight:1.5}}>{stat.d}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── SECTION 11 CASE STUDY ── */}
        <section id="case-studies" style={{background:'#F8FAFC',borderBottom:'1px solid #E0F2FE',padding:'6rem 0'}}>
          <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
            <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8" style={{marginBottom:'3.5rem'}}>
              <div style={{maxWidth:640}}>
                <SectionLabel>Case In Point</SectionLabel>
                <BigH2>Healthcare Growth, <span className="text-[#007BFF]">Demonstrated Through Execution.</span></BigH2>
              </div>
              <button 
                type="button"
                onClick={() => openModal('Case Study Full Dossier Request')}
                style={{fontWeight:800,fontSize:12,letterSpacing:'0.08em',textTransform:'uppercase',color:'#007BFF',background:'none',border:'none',display:'inline-flex',alignItems:'center',gap:6,flexShrink:0,cursor:'pointer'}}
              >
                Request Full Case Studies <span className="material-symbols-outlined" style={{fontSize:16}}>arrow_forward</span>
              </button>
            </div>
            <div style={{background:'#FFFFFF',border:'2px solid #E0F2FE',borderRadius:20,overflow:'hidden',boxShadow:'0 4px 24px rgba(22,50,79,0.07)'}}>
              <div style={{position:'relative',height:300}}>
                <img src={imgCase} alt="Case Study — Surgical Robotics" style={{width:'100%',height:'100%',objectFit:'cover',display:'block'}}/>
                <div style={{position:'absolute',inset:0,background:'linear-gradient(to top,rgba(22,50,79,0.65) 0%,transparent 70%)',pointerEvents:'none'}}/>
                <div style={{position:'absolute',top:16,left:16,display:'flex',alignItems:'center',gap:8,padding:'8px 14px',background:'rgba(255,255,255,0.9)',backdropFilter:'blur(12px)',borderRadius:100,border:'1px solid rgba(56,189,248,0.5)',fontSize:11,fontWeight:800,color:'#0EA5E9'}}>
                  <span style={{width:8,height:8,borderRadius:'50%',background:'#38BDF8'}}/>Field Case Study // Surgical Robotics Suite
                </div>
              </div>
              <div style={{padding:'2.5rem'}}>
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 pb-6 mb-6 border-b border-[#E0F2FE]">
                  <div>
                    <div style={{fontSize:11,fontWeight:800,letterSpacing:'0.08em',textTransform:'uppercase',color:'#38BDF8',marginBottom:8}}>Specialty Surgical Hardware · Class II Diagnostic Device</div>
                    <h3 style={{fontWeight:800,fontSize:22,color:'#16324F'}}>Scaling a Class II Diagnostic &amp; Surgical Device Across 120+ Corporate &amp; Multi-Specialty Hospital Networks</h3>
                  </div>
                  <div style={{flexShrink:0,padding:'8px 16px',borderRadius:100,background:'#E0F2FE',border:'1px solid rgba(56,189,248,0.4)',fontSize:11,fontWeight:800,color:'#0EA5E9',whiteSpace:'nowrap',alignSelf:'flex-start'}}>Timeline: 6 Months</div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-5 gap-6" style={{marginBottom:'1.5rem'}}>
                  {[
                    {l:'01 / Challenge',c:'red',t:'Biomedical Inertia',d:'Product stalled in biomedical reviews for 14 months due to procurement uncertainty and vague clinician demand.'},
                    {l:'02 / Strategy',c:'sky',t:'Dual-Track Framing',d:'Developed a surgeon-specific surgical speed dossier paired with a CFO analysis proving 22% faster OT turnaround.'},
                    {l:'03 / Execution',c:'sky',t:'Phygital Sprint',d:'ABM blitz to 350+ surgical department heads, followed by demo units deployed across 45 hospitals.'},
                    {l:'04 / Result',c:'sky',t:'42 Contracts',d:'Secured 42 signed hospital supply contracts in 6 months, reducing the average sales cycle from 14 months to 72 days.'},
                    {l:'05 / Impact',c:'green',t:'Rs.28.5 Cr Added',d:'Resulted in 380% revenue expansion and opened an institutional recurring supply pipeline for consumable cartridges.'}
                  ].map(step=>(
                    <div key={step.l} onClick={() => openModal(`Case Study Detail: ${step.t}`)} className="cursor-pointer hover:opacity-80 transition-opacity">
                      <div style={{fontSize:10,fontWeight:800,letterSpacing:'0.06em',textTransform:'uppercase',color:step.c==='red'?'#EF4444':step.c==='green'?'#10B981':'#38BDF8',display:'flex',alignItems:'center',gap:4,marginBottom:6}}>
                        <span style={{width:5,height:5,borderRadius:'50%',background:step.c==='red'?'#EF4444':step.c==='green'?'#10B981':'#38BDF8'}}/>{step.l}
                      </div>
                      <h4 style={{fontWeight:800,fontSize:16,color:'#16324F',marginBottom:4}}>{step.t}</h4>
                      <p style={{fontWeight:500,fontSize:13,color:'#64748B',lineHeight:1.5}}>{step.d}</p>
                    </div>
                  ))}
                </div>
                <div style={{padding:'1rem',borderRadius:12,background:'#E0F2FE',border:'1px solid rgba(56,189,248,0.4)',display:'flex',alignItems:'center',justifyContent:'space-between',fontSize:12,fontWeight:700}}>
                  <span style={{color:'#64748B'}}>Key Metric: <span style={{color:'#0EA5E9'}}>14 Months to 72 Days Procurement Cycle</span></span>
                  <button 
                    type="button"
                    onClick={() => openModal('Download Full Surgical Robotics Case Study')}
                    style={{color:'#007BFF',background:'none',border:'none',cursor:'pointer',display:'flex',alignItems:'center',gap:4,fontWeight:800}}
                  >
                    Download Case Study <span className="material-symbols-outlined" style={{fontSize:14}}>download</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── SECTION 12 INSIGHTS ── */}
        <section style={{background:'#FFFFFF',borderBottom:'1px solid #E0F2FE',padding:'6rem 0'}} id="insights">
          <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
            <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8" style={{marginBottom:'3.5rem'}}>
              <div style={{maxWidth:600}}>
                <SectionLabel>Strategic Intelligence</SectionLabel>
                <BigH2>Healthcare Growth <span className="text-[#007BFF]">Insights.</span></BigH2>
                <p style={{fontWeight:500,color:'#64748B',fontSize:'1.1rem',lineHeight:1.7}}>Authoritative analysis on healthcare market access, procurement shifts, and commercialization mechanics.</p>
              </div>
              <button 
                type="button"
                onClick={() => openModal('Explore All Healthcare Insights')}
                style={{fontWeight:800,fontSize:12,letterSpacing:'0.08em',textTransform:'uppercase',color:'#007BFF',background:'none',border:'none',display:'inline-flex',alignItems:'center',gap:6,flexShrink:0,cursor:'pointer'}}
              >
                Explore All Insights <span className="material-symbols-outlined" style={{fontSize:16}}>arrow_forward</span>
              </button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {type:'Report · 12 Min Read',tag:'Market Access',date:'Oct 2024',t:'The Modern Medical Device Market Access Playbook: Bypassing the 18-Month Hospital Committee Inertia.',d:'How device innovators use clinical consensus building and risk-sharing commercial contracts to clear formulary boards without endless deliberation.'},
                {type:'Analysis · 9 Min Read',tag:'GTM Architecture',date:'Nov 2024',t:'Healthcare GTM Strategy in 2025: Why Traditional Sales Teams Need Phygital Demand Engines.',d:'Why relying entirely on rep territory coverage is failing, and how account-based digital targeting creates pre-sold institutional appointments.'},
                {type:'Briefing · 15 Min Read',tag:'Health Economics',date:'Dec 2024',t:'Quantifying Clinical Value for Hospital CFOs: How to Position High-CapEx Medical Equipment.',d:'A blueprint for translating precision engineering specifications into clear return-on-investment models that hospital financial officers approve.'}
              ].map(art=>(
                <article 
                  key={art.t} 
                  onClick={() => openModal(`Read Intelligence Dossier: ${art.t}`)}
                  style={{padding:'1.75rem',borderRadius:20,background:'#F8FAFC',border:'2px solid #E0F2FE',display:'flex',flexDirection:'column',justifyContent:'space-between',transition:'all 0.2s',cursor:'pointer'}} 
                  onMouseEnter={e=>{e.currentTarget.style.borderColor='#38BDF8';e.currentTarget.style.background='#FFFFFF';e.currentTarget.style.boxShadow='0 4px 20px rgba(56,189,248,0.10)'}} 
                  onMouseLeave={e=>{e.currentTarget.style.borderColor='#E0F2FE';e.currentTarget.style.background='#F8FAFC';e.currentTarget.style.boxShadow='none'}}
                >
                  <div>
                    <div style={{display:'flex',alignItems:'center',justifyContent:'space-between',paddingBottom:12,marginBottom:14,borderBottom:'1px solid #E0F2FE',fontSize:11,fontWeight:700}}>
                      <span style={{color:'#64748B'}}>{art.type}</span><span style={{color:'#38BDF8',textTransform:'uppercase'}}>{art.tag}</span>
                    </div>
                    <h3 style={{fontWeight:800,fontSize:17,color:'#16324F',marginBottom:10,lineHeight:1.4}}>{art.t}</h3>
                    <p style={{fontWeight:500,fontSize:13,color:'#64748B',lineHeight:1.6}}>{art.d}</p>
                  </div>
                  <div style={{paddingTop:16,marginTop:8,borderTop:'1px solid #E0F2FE',display:'flex',alignItems:'center',justifyContent:'space-between',fontSize:12,fontWeight:700}}>
                    <span style={{color:'#64748B'}}>{art.date}</span>
                    <span style={{color:'#007BFF',display:'flex',alignItems:'center',gap:4,fontWeight:800}}>Read Dossier <span className="material-symbols-outlined" style={{fontSize:14}}>arrow_forward</span></span>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ── SECTION 13 FAQ ── */}
        <section id="faq" style={{background:'#F8FAFC',borderBottom:'1px solid #E0F2FE',padding:'6rem 0'}}>
          <div style={{maxWidth:800,margin:'0 auto',padding:'0 1rem'}}>
            <SectionLabel>Inquiries &amp; Protocols</SectionLabel>
            <BigH2 style={{marginBottom:'2.5rem'}}>
              Frequently Asked Questions About <span className="text-[#007BFF]">Healthcare Growth &amp; Market Access.</span>
            </BigH2>
            <div style={{borderTop:'1px solid #E0F2FE'}}>
              {faqs.map((faq,idx)=>(
                <div key={idx} style={{borderBottom:'1px solid #E0F2FE',padding:'1.25rem 0'}}>
                  <button type="button" onClick={()=>toggleFaq(idx)} style={{width:'100%',display:'flex',alignItems:'center',justifyContent:'space-between',gap:16,background:'none',border:'none',cursor:'pointer',textAlign:'left',padding:0,fontFamily:'Manrope,sans-serif'}}>
                    <span style={{fontWeight:800,fontSize:17,color:'#16324F',lineHeight:1.4}}>{faq.q}</span>
                    <span style={{flexShrink:0,width:32,height:32,borderRadius:'50%',background:'#E0F2FE',border:'1px solid rgba(56,189,248,0.4)',display:'flex',alignItems:'center',justifyContent:'center',color:'#38BDF8',transition:'transform 0.2s',transform:openFaq===idx?'rotate(45deg)':'rotate(0deg)'}}>
                      <span className="material-symbols-outlined" style={{fontSize:18}}>add</span>
                    </span>
                  </button>
                  {openFaq===idx&&<div style={{fontWeight:500,fontSize:15,color:'#64748B',lineHeight:1.7,paddingTop:12,maxWidth:680}}>{faq.a}</div>}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── SECTION 14 FINAL CTA (Exact replica of user design) ── */}
        <FinalCTA />
      </main>

      <Footer />
      <WhatsAppWidget />
      <AssessmentModal />
    </div>
  );
}

export default function App() {
  return (
    <ModalProvider>
      <MainContent />
    </ModalProvider>
  );
}
