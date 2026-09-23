/**
 * MJD Healthcare — Advanced GEO + AEO Structured Data Engine
 *
 * GEO = Generative Engine Optimization
 *   → Makes MJD Healthcare citable by ChatGPT, Perplexity, Google AI Overviews,
 *     Gemini, Claude, and other large language model search systems.
 *   → Strategy: Rich entity definitions, HowTo schemas, ItemList, DefinedTerm,
 *     expert Person schema, AboutPage narrative, Article schemas, Speakable.
 *
 * AEO = Answer Engine Optimization
 *   → Wins featured snippets, voice assistant answers, "People Also Ask" boxes,
 *     and direct answers in Google/Bing.
 *   → Strategy: FAQPage, HowTo, Speakable, Q&A structured data, definitive
 *     factual statements, concise answer-ready descriptions.
 *
 * RULES: Zero content or design changes. Pure structured data injection.
 */

import { useEffect } from 'react';

const SITE_URL = 'https://www.mjdhealthcare.in';
const LOGO_URL = 'https://www.mjdhealthcare.in/logo-removebg-preview.png';

// ══════════════════════════════════════════════════════════════
// SECTION 1: CORE ENTITY SCHEMAS
// (Always injected — define MJD Healthcare as a known entity to AI)
// ══════════════════════════════════════════════════════════════

/**
 * Organization — Primary entity definition.
 * AI engines use this to understand WHO MJD Healthcare is.
 */
const ORGANIZATION_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  '@id': `${SITE_URL}/#organization`,
  name: 'MJD Healthcare',
  alternateName: ['MJD Healthcare Consultancy', 'MJD Healthcare Advisory'],
  url: SITE_URL,
  logo: {
    '@type': 'ImageObject',
    url: LOGO_URL,
    width: 400,
    height: 120,
    caption: 'MJD Healthcare — B2B Healthcare Commercialization Advisory India',
  },
  description:
    'MJD Healthcare is India\'s specialist B2B healthcare commercialization and market access advisory firm. Founded to bridge the gap between healthcare innovation and institutional adoption, MJD Healthcare helps medical device manufacturers, pharmaceutical companies, MedTech startups, hospital groups, and international healthcare brands build structured, compliant, and commercially successful routes to market across India.',
  foundingDate: '2014',
  foundingLocation: {
    '@type': 'Place',
    name: 'New Delhi, India',
  },
  address: {
    '@type': 'PostalAddress',
    streetAddress: '808B DLF Prime Tower, Pocket-F, Okhla Phase 1',
    addressLocality: 'New Delhi',
    addressRegion: 'Delhi',
    postalCode: '110020',
    addressCountry: 'IN',
  },
  contactPoint: [
    {
      '@type': 'ContactPoint',
      telephone: '+91-97946-31500',
      contactType: 'customer service',
      areaServed: 'IN',
      availableLanguage: ['English', 'Hindi'],
    },
    {
      '@type': 'ContactPoint',
      email: 'INFO@MJDHEALTHCARE.IN',
      contactType: 'sales',
      areaServed: 'IN',
    },
  ],
  sameAs: [
    'https://www.linkedin.com/company/mjdhealthcare',
    'https://www.mjdhealthcare.in',
  ],
  areaServed: [
    { '@type': 'Country', name: 'India' },
    { '@type': 'State', name: 'Delhi' },
    { '@type': 'State', name: 'Maharashtra' },
    { '@type': 'State', name: 'Karnataka' },
    { '@type': 'State', name: 'Tamil Nadu' },
    { '@type': 'State', name: 'Telangana' },
    { '@type': 'State', name: 'Gujarat' },
    { '@type': 'State', name: 'Uttar Pradesh' },
  ],
  // GEO: knowsAbout — tells AI engines exactly what MJD Healthcare is an authority on
  knowsAbout: [
    'Healthcare Market Access in India',
    'Medical Device Go-To-Market Strategy',
    'Pharmaceutical Commercialization India',
    'MedTech Market Entry India',
    'Hospital Lead Generation',
    'B2B Healthcare Business Development',
    'Healthcare Sales Enablement',
    'Healthcare Digital Demand Generation',
    'Phygital Healthcare Growth',
    'Product Positioning Medical Devices',
    'Healthcare Channel and Distributor Development',
    'CDSCO Regulatory Market Access',
    'NABH Hospital Procurement',
    'Clinical KOL Engagement India',
    'Medical Tourism Patient Acquisition India',
    'India Healthcare Market Entry for International Companies',
  ],
  // GEO: hasOfferCatalog — tells AI engines what services are offered
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'MJD Healthcare Consulting Services',
    itemListElement: [
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Healthcare Market Access Consulting', url: `${SITE_URL}/#market-access` } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Healthcare GTM Strategy', url: `${SITE_URL}/#go-to-market-strategy` } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Phygital Healthcare Growth', url: `${SITE_URL}/#phygital-healthcare-growth` } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Healthcare Growth Engine', url: `${SITE_URL}/#healthcare-growth-engine` } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Healthcare Business Development', url: `${SITE_URL}/#healthcare-business-development` } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Healthcare Digital Demand Generation', url: `${SITE_URL}/#healthcare-digital-demand-generation` } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Healthcare Sales Enablement', url: `${SITE_URL}/#sales-enablement` } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Product Positioning and Commercialization', url: `${SITE_URL}/#product-positioning-commercialization` } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Channel and Distributor Development', url: `${SITE_URL}/#channel-distributor-development` } },
    ],
  },
};

/**
 * Person — Expert Identity Schema (E-E-A-T signal for AI engines)
 * AI models trust content more when there is a named expert behind the organization.
 */
const EXPERT_PERSON_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  '@id': `${SITE_URL}/#founder`,
  name: 'MJD Healthcare Leadership',
  jobTitle: 'Healthcare Commercialization Strategist',
  worksFor: { '@id': `${SITE_URL}/#organization` },
  knowsAbout: [
    'Healthcare Market Access',
    'Medical Device Commercialization',
    'Pharmaceutical GTM Strategy',
    'Hospital Institutional Sales',
    'Healthcare Business Development India',
    'Clinical KOL Engagement',
    'B2B Healthcare Growth',
  ],
  description:
    'The leadership team at MJD Healthcare brings over a decade of hands-on experience in healthcare commercialization, medical device market access, pharma GTM strategy, and phygital growth execution across India\'s institutional hospital and clinical markets.',
};

/**
 * AboutPage — Rich organizational narrative for AI comprehension (GEO)
 * AI engines read AboutPage schema to understand organizational context and cite it.
 */
const ABOUT_PAGE_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'AboutPage',
  '@id': `${SITE_URL}/#aboutpage`,
  url: `${SITE_URL}/#about`,
  name: 'About MJD Healthcare',
  description:
    'MJD Healthcare is a specialist B2B healthcare consulting and market access advisory firm headquartered in New Delhi, India. The firm combines deep healthcare domain expertise with structured commercial frameworks to help medical device manufacturers, pharmaceutical companies, MedTech innovators, and hospital groups achieve faster institutional adoption and sustainable revenue growth across India.',
  breadcrumb: {
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
      { '@type': 'ListItem', position: 2, name: 'About MJD Healthcare', item: `${SITE_URL}/#about` },
    ],
  },
  mainEntity: { '@id': `${SITE_URL}/#organization` },
  publisher: { '@id': `${SITE_URL}/#organization` },
  speakable: {
    '@type': 'SpeakableSpecification',
    cssSelector: ['h1', 'h2', '.hero-description', '#about'],
  },
};

/**
 * WebSite — Site identity with SearchAction (AEO: enables sitelinks search box)
 */
const WEBSITE_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': `${SITE_URL}/#website`,
  name: 'MJD Healthcare',
  url: SITE_URL,
  description:
    'India\'s B2B healthcare commercialization and market access advisory. GTM strategy, market access, phygital growth, digital demand, and institutional sales for medical device and pharma companies.',
  inLanguage: 'en-IN',
  potentialAction: {
    '@type': 'SearchAction',
    target: { '@type': 'EntryPoint', urlTemplate: `${SITE_URL}/?s={search_term_string}` },
    'query-input': 'required name=search_term_string',
  },
  publisher: { '@id': `${SITE_URL}/#organization` },
};

// ══════════════════════════════════════════════════════════════
// SECTION 2: AEO — FAQPage Schema (Featured Snippets + Voice AI)
// Every question targets a real search query AI engines receive
// ══════════════════════════════════════════════════════════════

const FAQ_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  speakable: {
    '@type': 'SpeakableSpecification',
    cssSelector: ['#faq'],
  },
  mainEntity: [
    // ── Brand differentiation questions
    {
      '@type': 'Question',
      name: 'What is MJD Healthcare?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'MJD Healthcare is a specialist B2B healthcare commercialization and market access advisory firm based in New Delhi, India. The firm helps medical device manufacturers, pharmaceutical companies, MedTech startups, hospital groups, and international healthcare brands build structured commercial strategies, access institutional hospital markets, and generate qualified sales pipelines across India.',
      },
    },
    {
      '@type': 'Question',
      name: 'What does MJD Healthcare do?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'MJD Healthcare provides end-to-end healthcare commercialization services including: healthcare market access consulting, go-to-market (GTM) strategy, phygital growth execution, healthcare business development, digital demand generation, sales enablement, product positioning and commercialization, and channel and distributor development for medical device, pharma, and MedTech companies in India.',
      },
    },
    {
      '@type': 'Question',
      name: 'How is MJD Healthcare different from a traditional healthcare marketing agency?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Most marketing agencies focus on brand awareness, vanity digital metrics, and social reach. MJD Healthcare is a commercialization advisory and market access practice. We focus on hospital procurement clearance, institutional sales pipelines, clinical buyer validation, and formulary committee adoption. We measure success by commercial traction and contract value, not impressions or clicks.',
      },
    },
    // ── Service-specific AEO questions
    {
      '@type': 'Question',
      name: 'What is healthcare market access consulting in India?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Healthcare market access consulting in India involves helping medical device and pharmaceutical companies navigate regulatory approval through CDSCO, secure institutional placement on hospital formularies and procurement lists, negotiate pricing with hospital purchase committees, engage clinical KOLs for product validation, and achieve commercial adoption across hospital networks. MJD Healthcare specializes in this multi-stakeholder process for the Indian healthcare market.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is a healthcare GTM strategy?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A healthcare go-to-market (GTM) strategy is a structured commercial plan that defines how a medical device, pharmaceutical product, or MedTech solution enters and scales in a specific healthcare market. It covers product positioning, target buyer segmentation (surgeons, hospital administrators, biomedical departments), channel selection, pricing strategy, digital demand generation, field sales execution, and milestone-based revenue targets. MJD Healthcare builds GTM strategies specifically calibrated for India\'s institutional hospital market.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is phygital healthcare growth?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Phygital healthcare growth is a hybrid commercial model that integrates physical field sales activities (hospital rep visits, KOL meetings, demo unit placements) with digital demand generation (account-based marketing, HCP-targeted digital campaigns, LinkedIn outreach, healthcare SEO). MJD Healthcare\'s phygital approach accelerates hospital adoption by combining human institutional relationships with targeted digital pre-qualification, reducing traditional sales cycles from 12-18 months to 90-120 days.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do you generate leads for medical device companies in India?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'MJD Healthcare generates qualified leads for medical device companies in India through a multi-channel approach: account-based marketing (ABM) targeting specific hospital accounts, HCP-directed digital campaigns on LinkedIn and healthcare platforms, hospital outreach to biomedical purchase committees, KOL engagement programs, clinical webinars and CME events, targeted SEO content driving inbound clinician inquiries, and WhatsApp/field rep follow-up sequences. All leads are pre-qualified against institutional buying criteria before handover to sales teams.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do you build a hospital distributor network in India?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'MJD Healthcare builds hospital distributor networks in India through: channel landscape mapping across Tier 1, 2, and 3 markets, distributor identification and qualification against clinical reach and institutional relationships, distributor appointment with structured commercial agreements, margin structuring and sales target setting, distributor training on product clinical value, and distributor performance tracking through CRM and field reporting systems. This creates a scalable, governed distribution architecture rather than ad hoc dealer relationships.',
      },
    },
    {
      '@type': 'Question',
      name: 'What types of engagement models does MJD Healthcare offer?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'MJD Healthcare offers two core engagement models: (1) Strategic Market Opportunity Assessment and GTM Architecture Sprints — project-based engagements producing a complete market access and commercialization roadmap; and (2) Retained Phygital Commercial Execution — multi-month embedded market access and demand acceleration partnerships with defined deliverables, milestone reviews, and transparent commercial KPI reporting.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the typical timeline to achieve institutional hospital traction in India?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'While enterprise hospital sales cycles in India traditionally span 12 to 18 months, MJD Healthcare\'s Phygital model accelerates clinical qualification significantly. Initial targeted decision-maker engagements and demo trials typically commence within 4 to 8 weeks. Most client partners observe qualified procurement evaluations and tender entries within 90 to 120 days of execution commencement.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can MJD Healthcare help international healthcare companies enter the Indian market?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. MJD Healthcare specializes in India market entry for global medical device, pharmaceutical, and MedTech companies. The firm provides market assessment and sizing, regulatory navigation through CDSCO and BIS, GTM strategy calibrated to Indian hospital procurement culture, distributor identification and appointment, institutional key account access to corporate hospital chains (Apollo, Fortis, Max, Narayana, Manipal), and phygital demand generation to create pre-qualified hospital pipelines from day one.',
      },
    },
    {
      '@type': 'Question',
      name: 'What industries does MJD Healthcare serve?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'MJD Healthcare serves 10 specialized healthcare verticals: (1) Medical Devices — capital equipment and surgical consumables; (2) MedTech and Healthcare Technology — robotics, AI diagnostics, Health IT; (3) Pharmaceuticals — specialty formulations and life sciences; (4) Healthcare Startups — seed to Series B clinical innovators; (5) Diagnostics and Pathology — IVD instruments, labs, POC testing; (6) Hospitals and Healthcare Providers — multi-specialty and corporate networks; (7) Medical Equipment and Hospital Infrastructure — CapEx and OT infrastructure; (8) Healthcare Service Providers — B2B operations and advisory; (9) International Healthcare Companies Entering India — cross-border market access; (10) Medical Tourism and International Patient Services — cross-border patient acquisition.',
      },
    },
    {
      '@type': 'Question',
      name: 'How does MJD Healthcare ensure compliance with healthcare regulations?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Every market access protocol, clinical value document, and digital outreach sequence at MJD Healthcare is strictly governed by regional medical device advertising regulations, biomedical clearance frameworks, the Drugs and Cosmetics Act provisions, data privacy rules, and institutional conflict of interest codes applicable to hospital purchasing. MJD Healthcare never recommends or implements approaches that compromise institutional compliance or regulatory integrity.',
      },
    },
    {
      '@type': 'Question',
      name: 'Which cities in India does MJD Healthcare operate?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'MJD Healthcare is headquartered in New Delhi (DLF Prime Tower, Okhla Phase 1, New Delhi 110020) and operates across pan-India healthcare markets including Delhi-NCR, Mumbai, Bangalore, Chennai, Hyderabad, Kolkata, Pune, Ahmedabad, Chandigarh, Lucknow, Jaipur, and major Tier 2 and Tier 3 markets with active hospital infrastructure.',
      },
    },
  ],
};

// ══════════════════════════════════════════════════════════════
// SECTION 3: GEO — ItemList Schemas
// AI engines extract "what services does X provide" from ItemList
// ══════════════════════════════════════════════════════════════

const SERVICES_ITEMLIST_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  '@id': `${SITE_URL}/#services-list`,
  name: 'MJD Healthcare Consulting Services',
  description: 'Complete list of healthcare commercialization and market access services offered by MJD Healthcare in India.',
  url: `${SITE_URL}/#services`,
  numberOfItems: 9,
  itemListOrder: 'https://schema.org/ItemListOrderAscending',
  itemListElement: [
    {
      '@type': 'ListItem',
      position: 1,
      name: 'Healthcare Market Access Consulting',
      url: `${SITE_URL}/#market-access`,
      description: 'Navigating CDSCO, NABH, hospital formularies, pricing negotiations, and institutional clinical adoption pathways for medical device and pharma companies in India.',
    },
    {
      '@type': 'ListItem',
      position: 2,
      name: 'Healthcare Go-To-Market (GTM) Strategy',
      url: `${SITE_URL}/#go-to-market-strategy`,
      description: 'Structured commercialization planning covering product positioning, target buyer mapping, channel architecture, digital demand, and milestone-based revenue execution for healthcare companies entering or scaling in India.',
    },
    {
      '@type': 'ListItem',
      position: 3,
      name: 'Phygital Healthcare Growth',
      url: `${SITE_URL}/#phygital-healthcare-growth`,
      description: 'Integrated physical field sales and digital demand generation model combining hospital rep outreach, KOL engagement, and account-based digital marketing for faster institutional adoption.',
    },
    {
      '@type': 'ListItem',
      position: 4,
      name: 'Healthcare Growth Engine',
      url: `${SITE_URL}/#healthcare-growth-engine`,
      description: 'Multi-channel commercial system combining ABM, hospital outreach, KOL engagement, and digital pipelines to drive sustainable healthcare revenue growth.',
    },
    {
      '@type': 'ListItem',
      position: 5,
      name: 'Healthcare Business Development',
      url: `${SITE_URL}/#healthcare-business-development`,
      description: 'B2B hospital partnership development, institutional sales outreach, clinical champion engagement, tender management, and distributor relationship building.',
    },
    {
      '@type': 'ListItem',
      position: 6,
      name: 'Healthcare Digital Demand Generation',
      url: `${SITE_URL}/#healthcare-digital-demand-generation`,
      description: 'ABM campaigns, HCP-targeted digital marketing, LinkedIn outreach, healthcare SEO content, and lead generation pipelines targeting Indian hospitals and clinicians.',
    },
    {
      '@type': 'ListItem',
      position: 7,
      name: 'Healthcare Sales Enablement',
      url: `${SITE_URL}/#sales-enablement`,
      description: 'Clinical value dossiers, product pitch frameworks, field rep training programs, objection handling playbooks, and hospital engagement scripts for medical device and pharma sales teams.',
    },
    {
      '@type': 'ListItem',
      position: 8,
      name: 'Product Positioning and Commercialization',
      url: `${SITE_URL}/#product-positioning-commercialization`,
      description: 'Evidence-based product positioning translating clinical specifications into institutional value propositions that hospital procurement committees, biomedical engineers, and KOLs respond to.',
    },
    {
      '@type': 'ListItem',
      position: 9,
      name: 'Channel and Distributor Development',
      url: `${SITE_URL}/#channel-distributor-development`,
      description: 'Distributor network design, dealer channel building, and partnership development for medical device and pharma companies across India\'s Tier 1, 2, and 3 markets.',
    },
  ],
};

const INDUSTRIES_ITEMLIST_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  '@id': `${SITE_URL}/#industries-list`,
  name: 'Healthcare Industries Served by MJD Healthcare',
  description: 'The 10 specialized healthcare industry verticals served by MJD Healthcare in India.',
  url: `${SITE_URL}/#industries`,
  numberOfItems: 10,
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Medical Devices — Capital Equipment and Surgical Consumables', url: `${SITE_URL}/#industries` },
    { '@type': 'ListItem', position: 2, name: 'MedTech and Healthcare Technology — Robotics, AI Diagnostics, Health IT', url: `${SITE_URL}/#industries` },
    { '@type': 'ListItem', position: 3, name: 'Pharmaceuticals — Specialty Formulations and Life Sciences', url: `${SITE_URL}/#industries` },
    { '@type': 'ListItem', position: 4, name: 'Healthcare Startups — Seed to Series B Clinical Innovators', url: `${SITE_URL}/#industries` },
    { '@type': 'ListItem', position: 5, name: 'Diagnostics and Pathology — IVD Instruments, Labs, POC Testing', url: `${SITE_URL}/#industries` },
    { '@type': 'ListItem', position: 6, name: 'Hospitals and Healthcare Providers — Multi-Specialty and Corporate Networks', url: `${SITE_URL}/#industries` },
    { '@type': 'ListItem', position: 7, name: 'Medical Equipment and Hospital Infrastructure — CapEx and OT Infrastructure', url: `${SITE_URL}/#industries` },
    { '@type': 'ListItem', position: 8, name: 'Healthcare Service Providers — B2B Healthcare Operations and Advisory', url: `${SITE_URL}/#industries` },
    { '@type': 'ListItem', position: 9, name: 'International Healthcare Companies Entering India — Cross-Border Market Access', url: `${SITE_URL}/#industries` },
    { '@type': 'ListItem', position: 10, name: 'Medical Tourism and International Patient Services — Cross-Border Patient Acquisition', url: `${SITE_URL}/#industries` },
  ],
};

// ══════════════════════════════════════════════════════════════
// SECTION 4: GEO/AEO — HowTo Schemas
// AI engines cite HowTo schemas when users ask "how does X work"
// ══════════════════════════════════════════════════════════════

const HOWTO_MARKET_ACCESS = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'How MJD Healthcare\'s Market Access Process Works for Medical Devices in India',
  description: 'A structured 6-step healthcare market access process for medical device and pharmaceutical companies seeking institutional adoption in Indian hospital networks.',
  totalTime: 'P90D',
  estimatedCost: { '@type': 'MonetaryAmount', currency: 'INR', value: 'Contact for pricing' },
  step: [
    {
      '@type': 'HowToStep',
      position: 1,
      name: 'Market Landscape Assessment',
      text: 'MJD Healthcare conducts a comprehensive mapping of the target hospital segment, competitor positioning, regulatory pathway requirements (CDSCO/BIS/NABH), and institutional procurement committee structures relevant to the product category.',
      url: `${SITE_URL}/#market-access`,
    },
    {
      '@type': 'HowToStep',
      position: 2,
      name: 'Clinical Value Proposition Architecture',
      text: 'Development of evidence-based clinical dossiers, health economic models, and institutional value frameworks that translate product specifications into hospital CFO-approved ROI narratives and surgeon-specific clinical benefit statements.',
      url: `${SITE_URL}/#market-access`,
    },
    {
      '@type': 'HowToStep',
      position: 3,
      name: 'Regulatory and Compliance Pathway Navigation',
      text: 'Structured guidance through CDSCO device registration, NABH procurement framework alignment, hospital biomedical committee clearance requirements, and institutional conflict-of-interest protocols for clinical demonstrations.',
      url: `${SITE_URL}/#market-access`,
    },
    {
      '@type': 'HowToStep',
      position: 4,
      name: 'KOL and Clinical Champion Engagement',
      text: 'Identification, profiling, and engagement of Key Opinion Leaders (KOLs), department heads, and clinical champions within target hospital accounts who drive formulary committee decisions and institutional adoption.',
      url: `${SITE_URL}/#market-access`,
    },
    {
      '@type': 'HowToStep',
      position: 5,
      name: 'Institutional Sales Pipeline Activation',
      text: 'Targeted outreach to hospital procurement committees, biomedical directors, and administrative authorities with structured demo unit protocols, commercial trial agreements, and performance-linked purchase frameworks.',
      url: `${SITE_URL}/#market-access`,
    },
    {
      '@type': 'HowToStep',
      position: 6,
      name: 'Commercial Adoption and Scale',
      text: 'Conversion of procurement evaluations into signed hospital supply contracts, consumable and service agreements, and multi-hospital network rollouts — with continuous sales pipeline tracking and repeat institutional order management.',
      url: `${SITE_URL}/#market-access`,
    },
  ],
};

const HOWTO_GTM_STRATEGY = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'How MJD Healthcare Builds a Healthcare GTM Strategy',
  description: 'The 5-step framework MJD Healthcare uses to build a go-to-market strategy for medical device, pharma, and MedTech companies entering or scaling in India.',
  step: [
    {
      '@type': 'HowToStep',
      position: 1,
      name: 'Market Opportunity and Segmentation Analysis',
      text: 'Defining total addressable market size, priority hospital segments, buyer personas (surgeons, biomedical, CFO, pharmacy), and competitive landscape across India\'s major healthcare markets.',
    },
    {
      '@type': 'HowToStep',
      position: 2,
      name: 'Product Positioning and Differentiation Framework',
      text: 'Building a clear clinical and commercial positioning that differentiates the product from existing alternatives on the basis of clinical outcomes, health economics, operational efficiency, or patient safety.',
    },
    {
      '@type': 'HowToStep',
      position: 3,
      name: 'Channel Architecture Design',
      text: 'Selecting and structuring the optimal commercial delivery model: direct institutional sales, distributor-led coverage, hybrid phygital model, or key account management for corporate hospital chains.',
    },
    {
      '@type': 'HowToStep',
      position: 4,
      name: 'Demand Generation and Pipeline Building',
      text: 'Activating targeted digital demand generation, institutional field outreach, KOL programs, and clinical event marketing to create a qualified pipeline of hospital buyer conversations.',
    },
    {
      '@type': 'HowToStep',
      position: 5,
      name: 'Commercial Execution and Revenue Milestone Management',
      text: 'Deploying the GTM plan with clear commercial KPIs, weekly pipeline reviews, channel performance tracking, and iterative strategy refinement to achieve revenue milestones within the target timeline.',
    },
  ],
};

// ══════════════════════════════════════════════════════════════
// SECTION 5: GEO — DefinedTerm Schemas
// AI engines use DefinedTerm to understand industry vocabulary
// associated with MJD Healthcare's expertise domain
// ══════════════════════════════════════════════════════════════

const DEFINED_TERMS = [
  {
    '@context': 'https://schema.org',
    '@type': 'DefinedTerm',
    name: 'Healthcare Market Access',
    description: 'The process by which a medical device, pharmaceutical product, or healthcare technology achieves regulatory approval, pricing acceptance, institutional formulary placement, and clinical adoption within a target healthcare market. In India, this involves CDSCO registration, NABH compliance, hospital procurement committee clearance, and KOL validation.',
    inDefinedTermSet: `${SITE_URL}/#healthcare-glossary`,
    url: `${SITE_URL}/#market-access`,
  },
  {
    '@context': 'https://schema.org',
    '@type': 'DefinedTerm',
    name: 'Phygital Healthcare Growth',
    description: 'A hybrid commercial strategy that integrates physical field sales activities (hospital visits, KOL engagement, demo units) with digital demand generation (ABM, HCP-targeted campaigns, LinkedIn) to accelerate healthcare product adoption. The phygital model reduces traditional 12-18 month hospital sales cycles to 90-120 days.',
    inDefinedTermSet: `${SITE_URL}/#healthcare-glossary`,
    url: `${SITE_URL}/#phygital-healthcare-growth`,
  },
  {
    '@context': 'https://schema.org',
    '@type': 'DefinedTerm',
    name: 'Healthcare GTM Strategy',
    description: 'A healthcare go-to-market strategy is a structured commercial plan defining how a medical device, pharmaceutical, or MedTech product enters and scales in a healthcare market — covering product positioning, buyer segmentation, channel selection, regulatory navigation, digital demand, and revenue milestones.',
    inDefinedTermSet: `${SITE_URL}/#healthcare-glossary`,
    url: `${SITE_URL}/#go-to-market-strategy`,
  },
  {
    '@context': 'https://schema.org',
    '@type': 'DefinedTerm',
    name: 'Clinical KOL Engagement',
    description: 'Key Opinion Leader (KOL) engagement in healthcare involves identifying, profiling, and building structured relationships with senior clinicians, department heads, and academic physicians who influence hospital purchasing decisions, formulary committee outcomes, and peer adoption of new medical technologies.',
    inDefinedTermSet: `${SITE_URL}/#healthcare-glossary`,
    url: `${SITE_URL}/#market-access`,
  },
];

// ══════════════════════════════════════════════════════════════
// SECTION 6: GEO — Article Schemas for Insights Content
// AI engines cite Article schemas as authoritative sources
// ══════════════════════════════════════════════════════════════

const ARTICLE_SCHEMAS = [
  {
    '@context': 'https://schema.org',
    '@type': 'Article',
    '@id': `${SITE_URL}/#article-market-access-playbook`,
    headline: 'The Modern Medical Device Market Access Playbook: Bypassing the 18-Month Hospital Committee Inertia',
    description: 'How device innovators use clinical consensus building and risk-sharing commercial contracts to clear formulary boards without endless deliberation.',
    datePublished: '2024-10-01',
    dateModified: '2024-10-01',
    author: { '@id': `${SITE_URL}/#organization` },
    publisher: { '@id': `${SITE_URL}/#organization` },
    inLanguage: 'en-IN',
    about: [
      { '@type': 'Thing', name: 'Healthcare Market Access India' },
      { '@type': 'Thing', name: 'Medical Device Hospital Procurement' },
      { '@type': 'Thing', name: 'Hospital Formulary Committee' },
    ],
    url: `${SITE_URL}/#insights`,
    speakable: {
      '@type': 'SpeakableSpecification',
      cssSelector: ['#insights article:first-child h3', '#insights article:first-child p'],
    },
  },
  {
    '@context': 'https://schema.org',
    '@type': 'Article',
    '@id': `${SITE_URL}/#article-gtm-2025`,
    headline: 'Healthcare GTM Strategy in 2025: Why Traditional Sales Teams Need Phygital Demand Engines',
    description: 'Why relying entirely on rep territory coverage is failing, and how account-based digital targeting creates pre-sold institutional appointments.',
    datePublished: '2024-11-01',
    dateModified: '2024-11-01',
    author: { '@id': `${SITE_URL}/#organization` },
    publisher: { '@id': `${SITE_URL}/#organization` },
    inLanguage: 'en-IN',
    about: [
      { '@type': 'Thing', name: 'Healthcare GTM Strategy' },
      { '@type': 'Thing', name: 'Phygital Sales Model' },
      { '@type': 'Thing', name: 'Account Based Marketing Healthcare' },
    ],
    url: `${SITE_URL}/#insights`,
  },
  {
    '@context': 'https://schema.org',
    '@type': 'Article',
    '@id': `${SITE_URL}/#article-health-economics`,
    headline: 'Quantifying Clinical Value for Hospital CFOs: How to Position High-CapEx Medical Equipment',
    description: 'A blueprint for translating precision engineering specifications into clear return-on-investment models that hospital financial officers approve.',
    datePublished: '2024-12-01',
    dateModified: '2024-12-01',
    author: { '@id': `${SITE_URL}/#organization` },
    publisher: { '@id': `${SITE_URL}/#organization` },
    inLanguage: 'en-IN',
    about: [
      { '@type': 'Thing', name: 'Health Economics Medical Devices' },
      { '@type': 'Thing', name: 'Hospital CFO Decision Making' },
      { '@type': 'Thing', name: 'Medical Device ROI Positioning' },
    ],
    url: `${SITE_URL}/#insights`,
  },
];

// ══════════════════════════════════════════════════════════════
// SECTION 7: Per-Page Service Schemas (Enhanced for GEO)
// ══════════════════════════════════════════════════════════════

const SERVICE_SCHEMAS = {
  'market-access': {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': `${SITE_URL}/#service-market-access`,
    name: 'Healthcare Market Access Consulting India',
    serviceType: 'Healthcare Market Access',
    category: 'Healthcare Consulting',
    description: 'MJD Healthcare\'s market access consulting helps medical device and pharmaceutical companies navigate India\'s complex institutional procurement landscape including CDSCO regulatory pathways, NABH hospital procurement frameworks, hospital formulary committees, pricing negotiations, KOL validation, and institutional clinical adoption across India\'s public and private hospital networks.',
    provider: { '@id': `${SITE_URL}/#organization` },
    areaServed: { '@type': 'Country', name: 'India' },
    url: `${SITE_URL}/#market-access`,
    audience: {
      '@type': 'Audience',
      audienceType: 'Medical Device Manufacturers, Pharmaceutical Companies, MedTech Firms',
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Market Access Services',
      itemListElement: [
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'CDSCO Regulatory Navigation' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Hospital Formulary Committee Strategy' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Clinical KOL Engagement Program' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Institutional Pricing and Reimbursement Advisory' } },
      ],
    },
  },
  'go-to-market-strategy': {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': `${SITE_URL}/#service-gtm`,
    name: 'Healthcare Go-To-Market Strategy India',
    serviceType: 'Go-To-Market Consulting',
    category: 'Healthcare Strategy Consulting',
    description: 'Structured GTM strategy for medical device manufacturers, pharmaceutical companies, and MedTech startups entering or scaling in India. Covers market sizing, product positioning, institutional buyer mapping, channel architecture, digital demand activation, and milestone-based commercial execution.',
    provider: { '@id': `${SITE_URL}/#organization` },
    areaServed: { '@type': 'Country', name: 'India' },
    url: `${SITE_URL}/#go-to-market-strategy`,
  },
  'phygital-healthcare-growth': {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': `${SITE_URL}/#service-phygital`,
    name: 'Phygital Healthcare Growth India',
    serviceType: 'Phygital Commercial Execution',
    category: 'Healthcare Growth Consulting',
    description: 'Integrated physical field sales and digital demand generation for healthcare companies. Combines KOL outreach, hospital rep engagement, and account-based digital marketing into a unified phygital growth engine that reduces hospital sales cycles from 18 months to 90-120 days.',
    provider: { '@id': `${SITE_URL}/#organization` },
    areaServed: { '@type': 'Country', name: 'India' },
    url: `${SITE_URL}/#phygital-healthcare-growth`,
  },
  'healthcare-growth-engine': {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': `${SITE_URL}/#service-growth-engine`,
    name: 'Healthcare Growth Engine India',
    serviceType: 'Multi-Channel Revenue Growth',
    category: 'Healthcare Revenue Consulting',
    description: 'A multi-channel healthcare commercial system combining account-based marketing, hospital outreach, KOL engagement, and digital demand pipelines to drive sustainable healthcare revenue growth for medical device and pharma companies across Indian markets.',
    provider: { '@id': `${SITE_URL}/#organization` },
    areaServed: { '@type': 'Country', name: 'India' },
    url: `${SITE_URL}/#healthcare-growth-engine`,
  },
  'healthcare-business-development': {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': `${SITE_URL}/#service-bd`,
    name: 'Healthcare Business Development India',
    serviceType: 'B2B Healthcare Business Development',
    category: 'Healthcare Sales Consulting',
    description: 'B2B healthcare business development including hospital partnership development, institutional sales outreach, clinical champion engagement, tender management, and distributor relationship building for medical device and pharma companies across India.',
    provider: { '@id': `${SITE_URL}/#organization` },
    areaServed: { '@type': 'Country', name: 'India' },
    url: `${SITE_URL}/#healthcare-business-development`,
  },
  'healthcare-digital-demand-generation': {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': `${SITE_URL}/#service-digital`,
    name: 'Healthcare Digital Demand Generation India',
    serviceType: 'Healthcare Digital Marketing',
    category: 'Healthcare Lead Generation',
    description: 'Account-based marketing (ABM), HCP-targeted digital campaigns, LinkedIn physician outreach, healthcare SEO content, and lead generation pipelines for medical device, pharma, and MedTech companies targeting Indian hospitals and clinicians.',
    provider: { '@id': `${SITE_URL}/#organization` },
    areaServed: { '@type': 'Country', name: 'India' },
    url: `${SITE_URL}/#healthcare-digital-demand-generation`,
  },
  'sales-enablement': {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': `${SITE_URL}/#service-sales-enablement`,
    name: 'Healthcare Sales Enablement India',
    serviceType: 'Sales Enablement',
    category: 'Healthcare Sales Training',
    description: 'End-to-end healthcare sales enablement including clinical value dossiers, product pitch frameworks, field rep training, objection handling playbooks, hospital engagement scripts, and ROI calculators for medical device, pharma, and MedTech sales teams in India.',
    provider: { '@id': `${SITE_URL}/#organization` },
    areaServed: { '@type': 'Country', name: 'India' },
    url: `${SITE_URL}/#sales-enablement`,
  },
  'product-positioning-commercialization': {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': `${SITE_URL}/#service-positioning`,
    name: 'Medical Device Product Positioning and Commercialization India',
    serviceType: 'Product Commercialization Strategy',
    category: 'Healthcare Commercialization',
    description: 'Evidence-based product positioning and commercialization strategies translating medical device and pharma clinical specifications into institutional value propositions that hospital procurement committees, biomedical engineers, and clinical KOLs approve and adopt.',
    provider: { '@id': `${SITE_URL}/#organization` },
    areaServed: { '@type': 'Country', name: 'India' },
    url: `${SITE_URL}/#product-positioning-commercialization`,
  },
  'channel-distributor-development': {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': `${SITE_URL}/#service-channel`,
    name: 'Healthcare Channel and Distributor Development India',
    serviceType: 'Channel Partner Development',
    category: 'Healthcare Distribution Strategy',
    description: 'Distributor network design and channel partnership building for medical device companies, pharma manufacturers, and MedTech firms targeting hospitals, clinics, and diagnostic labs across India\'s Tier 1, 2, and 3 markets.',
    provider: { '@id': `${SITE_URL}/#organization` },
    areaServed: { '@type': 'Country', name: 'India' },
    url: `${SITE_URL}/#channel-distributor-development`,
  },
};

// ══════════════════════════════════════════════════════════════
// SECTION 8: BreadcrumbList per page
// ══════════════════════════════════════════════════════════════

const PAGE_BREADCRUMBS = {
  home: null,
  about: [
    { name: 'Home', item: `${SITE_URL}/` },
    { name: 'About MJD Healthcare', item: `${SITE_URL}/#about` },
  ],
  services: [
    { name: 'Home', item: `${SITE_URL}/` },
    { name: 'Services', item: `${SITE_URL}/#services` },
  ],
  industries: [
    { name: 'Home', item: `${SITE_URL}/` },
    { name: 'Industries We Serve', item: `${SITE_URL}/#industries` },
  ],
  contact: [
    { name: 'Home', item: `${SITE_URL}/` },
    { name: 'Contact', item: `${SITE_URL}/#contact` },
  ],
  'market-access': [
    { name: 'Home', item: `${SITE_URL}/` },
    { name: 'Services', item: `${SITE_URL}/#services` },
    { name: 'Healthcare Market Access', item: `${SITE_URL}/#market-access` },
  ],
  'go-to-market-strategy': [
    { name: 'Home', item: `${SITE_URL}/` },
    { name: 'Services', item: `${SITE_URL}/#services` },
    { name: 'GTM Strategy', item: `${SITE_URL}/#go-to-market-strategy` },
  ],
  'phygital-healthcare-growth': [
    { name: 'Home', item: `${SITE_URL}/` },
    { name: 'Services', item: `${SITE_URL}/#services` },
    { name: 'Phygital Healthcare Growth', item: `${SITE_URL}/#phygital-healthcare-growth` },
  ],
  'healthcare-growth-engine': [
    { name: 'Home', item: `${SITE_URL}/` },
    { name: 'Services', item: `${SITE_URL}/#services` },
    { name: 'Healthcare Growth Engine', item: `${SITE_URL}/#healthcare-growth-engine` },
  ],
  'healthcare-business-development': [
    { name: 'Home', item: `${SITE_URL}/` },
    { name: 'Services', item: `${SITE_URL}/#services` },
    { name: 'Business Development', item: `${SITE_URL}/#healthcare-business-development` },
  ],
  'healthcare-digital-demand-generation': [
    { name: 'Home', item: `${SITE_URL}/` },
    { name: 'Services', item: `${SITE_URL}/#services` },
    { name: 'Digital Demand Generation', item: `${SITE_URL}/#healthcare-digital-demand-generation` },
  ],
  'sales-enablement': [
    { name: 'Home', item: `${SITE_URL}/` },
    { name: 'Services', item: `${SITE_URL}/#services` },
    { name: 'Sales Enablement', item: `${SITE_URL}/#sales-enablement` },
  ],
  'product-positioning-commercialization': [
    { name: 'Home', item: `${SITE_URL}/` },
    { name: 'Services', item: `${SITE_URL}/#services` },
    { name: 'Product Positioning', item: `${SITE_URL}/#product-positioning-commercialization` },
  ],
  'channel-distributor-development': [
    { name: 'Home', item: `${SITE_URL}/` },
    { name: 'Services', item: `${SITE_URL}/#services` },
    { name: 'Channel Development', item: `${SITE_URL}/#channel-distributor-development` },
  ],
};

function makeBreadcrumb(crumbs) {
  if (!crumbs || crumbs.length === 0) return null;
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: crumbs.map((c, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: c.name,
      item: c.item,
    })),
  };
}

// ══════════════════════════════════════════════════════════════
// INJECTOR — fires on every page navigation
// ══════════════════════════════════════════════════════════════

export function injectStructuredData(pageKey) {
  // Always-on schemas (brand entity + AI comprehension)
  const schemas = [
    ORGANIZATION_SCHEMA,
    EXPERT_PERSON_SCHEMA,
    WEBSITE_SCHEMA,
  ];

  // Home page: full GEO/AEO schema set
  if (pageKey === 'home') {
    schemas.push(
      FAQ_SCHEMA,
      SERVICES_ITEMLIST_SCHEMA,
      INDUSTRIES_ITEMLIST_SCHEMA,
      HOWTO_MARKET_ACCESS,
      HOWTO_GTM_STRATEGY,
      ...ARTICLE_SCHEMAS,
      ...DEFINED_TERMS
    );
  }

  // About page
  if (pageKey === 'about') {
    schemas.push(ABOUT_PAGE_SCHEMA);
  }

  // Services overview
  if (pageKey === 'services') {
    schemas.push(SERVICES_ITEMLIST_SCHEMA);
  }

  // Industries page
  if (pageKey === 'industries') {
    schemas.push(INDUSTRIES_ITEMLIST_SCHEMA);
  }

  // Per-service HowTo schemas
  if (pageKey === 'market-access') {
    schemas.push(HOWTO_MARKET_ACCESS);
  }
  if (pageKey === 'go-to-market-strategy') {
    schemas.push(HOWTO_GTM_STRATEGY);
  }

  // Per-service Service schema
  if (SERVICE_SCHEMAS[pageKey]) {
    schemas.push(SERVICE_SCHEMAS[pageKey]);
  }

  // Breadcrumb
  const breadcrumb = makeBreadcrumb(PAGE_BREADCRUMBS[pageKey]);
  if (breadcrumb) schemas.push(breadcrumb);

  // Remove previously injected schemas
  document.querySelectorAll('script[data-mjd-schema]').forEach(el => el.remove());

  // Inject all schemas fresh
  schemas.forEach((schema) => {
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.setAttribute('data-mjd-schema', 'true');
    script.textContent = JSON.stringify(schema);
    document.head.appendChild(script);
  });
}

export function useStructuredData(currentPage) {
  useEffect(() => {
    injectStructuredData(currentPage);
  }, [currentPage]);
}
