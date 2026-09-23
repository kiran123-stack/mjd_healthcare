/**
 * MJD Healthcare — Dynamic SEO Manager
 * Handles per-page meta updates for GEO, AEO, and traditional SEO
 * in the SPA hash-routing environment.
 *
 * Zero content or design changes — purely structural SEO signals.
 */
import { useEffect } from 'react';

const SITE_URL = 'https://www.mjdhealthcare.in';
const OG_IMAGE = 'https://www.mjdhealthcare.in/logo-removebg-preview.png';

/**
 * Per-page SEO metadata map.
 * Each entry covers: title, description, canonical, ogTitle, ogDescription.
 * Keywords are included as secondary signals (still indexed by Bing/Yandex).
 */
const PAGE_META = {
  home: {
    title: 'Healthcare Growth & Market Access Consultancy in India | MJD Healthcare',
    description:
      'MJD Healthcare is India\'s specialist B2B healthcare commercialization advisory. We help medical device manufacturers, pharma companies, MedTech firms, and hospitals with GTM strategy, market access, hospital lead generation, product positioning, and phygital growth execution across India.',
    keywords:
      'healthcare market access India, medical device GTM India, healthcare consulting India, hospital lead generation, B2B healthcare growth, pharmaceutical commercialization, MedTech market entry India, healthcare business development Delhi',
    canonical: `${SITE_URL}/`,
    ogTitle: 'MJD Healthcare — B2B Healthcare Growth & Market Access India',
    ogDescription:
      'Specialist healthcare commercialization advisory helping medical device, pharma, and MedTech companies achieve institutional traction across Indian hospital networks.',
  },
  about: {
    title: 'About MJD Healthcare — B2B Healthcare Commercialization Advisory India',
    description:
      'Learn about MJD Healthcare — India\'s B2B healthcare growth and market access consulting firm based in New Delhi. We combine regulatory intelligence, institutional sales strategy, and phygital execution to help medical device, pharma, and MedTech companies grow commercially.',
    keywords:
      'about MJD Healthcare, healthcare consulting firm India, medical device consultant India, healthcare growth advisory New Delhi, B2B healthcare strategy India',
    canonical: `${SITE_URL}/#about`,
    ogTitle: 'About MJD Healthcare — India\'s B2B Healthcare Commercialization Firm',
    ogDescription:
      'MJD Healthcare is a specialist advisory firm based in New Delhi, helping healthcare businesses build market presence and institutional commercial traction in India.',
  },
  services: {
    title: 'Healthcare Consulting Services — GTM, Market Access, Sales Enablement | MJD Healthcare',
    description:
      'MJD Healthcare offers end-to-end healthcare consulting services including market access, go-to-market strategy, phygital growth, digital demand generation, sales enablement, product positioning, channel development, and healthcare business development for medical device and pharma companies in India.',
    keywords:
      'healthcare consulting services India, medical device market access, healthcare GTM strategy, sales enablement healthcare, product positioning healthcare, channel development healthcare India',
    canonical: `${SITE_URL}/#services`,
    ogTitle: 'Healthcare Consulting Services | MJD Healthcare India',
    ogDescription:
      'Full-spectrum healthcare commercialization services: market access, GTM strategy, sales enablement, digital demand generation, and phygital growth execution in India.',
  },
  'market-access': {
    title: 'Healthcare Market Access Consulting India — CDSCO, NABH, Hospital Formulary | MJD Healthcare',
    description:
      'MJD Healthcare\'s market access consulting helps medical device and pharma companies navigate CDSCO regulatory pathways, NABH hospital procurement frameworks, hospital formulary committees, and institutional adoption across India\'s hospital networks.',
    keywords:
      'healthcare market access India, CDSCO market access, NABH hospital procurement, medical device market access India, hospital formulary India, pharma market access consulting',
    canonical: `${SITE_URL}/#market-access`,
    ogTitle: 'Healthcare Market Access Consulting India | MJD Healthcare',
    ogDescription:
      'Navigate CDSCO, NABH, and hospital procurement pathways with MJD Healthcare\'s specialist market access consulting for medical devices and pharmaceuticals in India.',
  },
  'go-to-market-strategy': {
    title: 'Healthcare GTM Strategy India — Medical Device & Pharma Go-To-Market | MJD Healthcare',
    description:
      'MJD Healthcare builds structured healthcare go-to-market strategies for medical device manufacturers, pharma companies, and MedTech startups entering or scaling in India. We align product positioning, institutional outreach, channel selection, and digital demand into a coherent GTM architecture.',
    keywords:
      'healthcare GTM strategy India, medical device go-to-market India, pharma GTM strategy, MedTech market entry India, healthcare product launch India, go-to-market consulting healthcare',
    canonical: `${SITE_URL}/#go-to-market-strategy`,
    ogTitle: 'Healthcare GTM Strategy India | MJD Healthcare',
    ogDescription:
      'Expert go-to-market strategy for medical devices, pharma, and MedTech companies entering or scaling in India\'s complex healthcare market.',
  },
  'phygital-healthcare-growth': {
    title: 'Phygital Healthcare Growth Strategy — Physical & Digital Commercial Execution | MJD Healthcare',
    description:
      'MJD Healthcare\'s Phygital model integrates physical field sales, institutional outreach, and digital demand generation into a unified healthcare growth engine. Ideal for medical device companies, hospital groups, and pharma businesses seeking faster adoption across India.',
    keywords:
      'phygital healthcare growth, phygital marketing healthcare India, digital healthcare sales India, hybrid healthcare growth strategy, medical device field sales India, omnichannel healthcare India',
    canonical: `${SITE_URL}/#phygital-healthcare-growth`,
    ogTitle: 'Phygital Healthcare Growth Strategy | MJD Healthcare India',
    ogDescription:
      'Blend physical field outreach with digital demand generation for faster hospital adoption and institutional traction across India.',
  },
  'healthcare-growth-engine': {
    title: 'Healthcare Growth Engine — Multi-Channel Demand & Revenue Architecture | MJD Healthcare',
    description:
      'MJD Healthcare\'s Growth Engine is a multi-channel commercial system combining account-based marketing, hospital outreach, KOL engagement, and digital demand pipelines to drive sustainable healthcare revenue growth for medical device and pharma companies across Indian markets.',
    keywords:
      'healthcare growth engine India, hospital revenue growth consulting, account-based marketing healthcare, KOL engagement medical devices, multi-channel healthcare growth, healthcare revenue consulting India',
    canonical: `${SITE_URL}/#healthcare-growth-engine`,
    ogTitle: 'Healthcare Growth Engine | MJD Healthcare India',
    ogDescription:
      'A structured multi-channel commercial engine driving hospital account acquisition, KOL engagement, and institutional sales growth for healthcare companies in India.',
  },
  'healthcare-business-development': {
    title: 'Healthcare Business Development India — Institutional Sales & Partnerships | MJD Healthcare',
    description:
      'MJD Healthcare offers specialist B2B healthcare business development services including hospital partnership development, institutional sales outreach, clinical champion engagement, tender management, and distributor relationship building for medical device and pharma companies in India.',
    keywords:
      'healthcare business development India, hospital partnership development, institutional healthcare sales India, medical device BD India, pharma business development, tender management healthcare',
    canonical: `${SITE_URL}/#healthcare-business-development`,
    ogTitle: 'Healthcare Business Development India | MJD Healthcare',
    ogDescription:
      'B2B healthcare business development — hospital partnerships, institutional sales, tender management, and clinical champion outreach for medical devices and pharma in India.',
  },
  'healthcare-digital-demand-generation': {
    title: 'Healthcare Digital Demand Generation — Lead Gen, ABM & HCP Marketing | MJD Healthcare',
    description:
      'MJD Healthcare\'s digital demand generation practice delivers account-based marketing (ABM), HCP-targeted digital campaigns, LinkedIn outreach, SEO-driven healthcare content, and lead generation pipelines for medical device, pharma, and MedTech companies targeting Indian hospitals and clinicians.',
    keywords:
      'healthcare digital marketing India, medical device lead generation India, HCP marketing India, account-based marketing healthcare, healthcare ABM India, digital demand generation pharma India',
    canonical: `${SITE_URL}/#healthcare-digital-demand-generation`,
    ogTitle: 'Healthcare Digital Demand Generation India | MJD Healthcare',
    ogDescription:
      'ABM-driven digital demand generation, HCP marketing, and hospital lead generation pipelines for medical devices, pharma, and MedTech in India.',
  },
  'sales-enablement': {
    title: 'Healthcare Sales Enablement — Clinical Pitch Decks, Rep Training & Tools | MJD Healthcare',
    description:
      'MJD Healthcare provides end-to-end healthcare sales enablement including clinical value dossiers, product pitch frameworks, field rep training, objection handling playbooks, hospital engagement scripts, and ROI calculators designed for medical device, pharma, and MedTech sales teams in India.',
    keywords:
      'healthcare sales enablement India, medical device sales training, clinical value dossier, hospital sales collateral India, pharma sales enablement, rep training healthcare India',
    canonical: `${SITE_URL}/#sales-enablement`,
    ogTitle: 'Healthcare Sales Enablement India | MJD Healthcare',
    ogDescription:
      'Clinical pitch decks, rep training, value dossiers, and hospital engagement playbooks for medical device and pharma sales teams in India.',
  },
  'product-positioning-commercialization': {
    title: 'Medical Device Product Positioning & Commercialization India | MJD Healthcare',
    description:
      'MJD Healthcare builds evidence-based product positioning and commercialization strategies for medical devices, diagnostics, and pharma brands in India. We translate clinical specifications into institutional value propositions that hospital procurement committees, biomedical engineers, and clinical KOLs respond to.',
    keywords:
      'medical device product positioning India, healthcare commercialization consulting India, diagnostic device positioning, pharma brand positioning India, clinical value proposition medical device, hospital procurement strategy India',
    canonical: `${SITE_URL}/#product-positioning-commercialization`,
    ogTitle: 'Medical Device Product Positioning & Commercialization | MJD Healthcare India',
    ogDescription:
      'Evidence-based product positioning and commercialization for medical devices, diagnostics, and pharma in India\'s institutional healthcare market.',
  },
  'channel-distributor-development': {
    title: 'Healthcare Channel & Distributor Development India | MJD Healthcare',
    description:
      'MJD Healthcare designs and builds distributor networks, dealer channels, and healthcare channel partnerships for medical device companies, pharma manufacturers, and MedTech firms targeting hospitals, clinics, and diagnostic labs across India\'s Tier 1, 2, and 3 markets.',
    keywords:
      'healthcare distributor development India, medical device channel partner India, healthcare dealer network India, pharma distribution India, MedTech distributor appointment India, healthcare channel strategy',
    canonical: `${SITE_URL}/#channel-distributor-development`,
    ogTitle: 'Healthcare Channel & Distributor Development India | MJD Healthcare',
    ogDescription:
      'Build distributor networks and channel partnerships for medical devices and pharma across India\'s Tier 1, 2, and 3 hospital and clinic markets.',
  },
  industries: {
    title: 'Industries We Serve — Medical Devices, Pharma, Hospitals, MedTech | MJD Healthcare India',
    description:
      'MJD Healthcare serves 10 healthcare industry verticals including medical devices, MedTech and AI diagnostics, pharmaceuticals, healthcare startups, diagnostics and pathology labs, hospitals and clinical networks, medical equipment infrastructure, international healthcare market entry, and medical tourism patient services.',
    keywords:
      'healthcare industries India MJD, medical device consulting India, pharma consulting India, hospital growth consulting, MedTech startup India consulting, diagnostics lab growth India, medical tourism India consulting, international healthcare India',
    canonical: `${SITE_URL}/#industries`,
    ogTitle: 'Healthcare Industries We Serve | MJD Healthcare India',
    ogDescription:
      '10 specialized healthcare verticals — medical devices, pharma, MedTech, hospitals, diagnostics, startups, and international healthcare companies entering India.',
  },
  contact: {
    title: 'Contact MJD Healthcare — New Delhi Healthcare Growth Consulting | MJD Healthcare',
    description:
      'Contact MJD Healthcare, India\'s specialist healthcare commercialization advisory based at DLF Prime Tower, New Delhi. Reach us on WhatsApp +91 97946 31500 or email INFO@MJDHEALTHCARE.IN to schedule a healthcare growth consultation.',
    keywords:
      'contact MJD Healthcare, MJD Healthcare New Delhi, healthcare consultant contact India, medical device consulting contact, DLF Prime Tower healthcare consulting',
    canonical: `${SITE_URL}/#contact`,
    ogTitle: 'Contact MJD Healthcare — New Delhi India',
    ogDescription:
      'Schedule a healthcare growth consultation with MJD Healthcare. Located at DLF Prime Tower, Okhla Phase 1, New Delhi. Call +91 97946 31500 or email INFO@MJDHEALTHCARE.IN.',
  },
};

/**
 * Updates the document <head> with per-page SEO + GEO + AEO metadata.
 * Called on every page navigation in the SPA.
 *
 * GEO (Generative Engine Optimization) signals added:
 *   - ai-content-type: tells AI crawlers (Perplexity, Bing AI, ChatGPT) what type of content this is
 *   - subject / coverage: machine-readable topic signals
 *   - DC.subject: Dublin Core subject for AI librarian crawlers
 *   - classification: content domain classification
 *   - category: page content category
 *
 * AEO signals added:
 *   - snippet-type: hints for featured snippet eligibility
 *   - speakable: marks pages as voice-assistant compatible
 */
export function updatePageSEO(pageKey) {
  const meta = PAGE_META[pageKey] || PAGE_META['home'];

  // ── Title
  document.title = meta.title;

  // ── Helper: set or create a <meta> tag
  const setMeta = (selector, attrName, attrVal, content) => {
    let el = document.querySelector(selector);
    if (!el) {
      el = document.createElement('meta');
      el.setAttribute(attrName, attrVal);
      document.head.appendChild(el);
    }
    el.setAttribute('content', content);
  };

  // ── Helper: set or create a <link> tag
  const setLink = (rel, href) => {
    let el = document.querySelector(`link[rel="${rel}"]`);
    if (!el) {
      el = document.createElement('link');
      el.setAttribute('rel', rel);
      document.head.appendChild(el);
    }
    el.setAttribute('href', href);
  };

  // ── Standard SEO
  setMeta('meta[name="description"]', 'name', 'description', meta.description);
  setMeta('meta[name="keywords"]', 'name', 'keywords', meta.keywords);
  setLink('canonical', meta.canonical);

  // ── Open Graph (LinkedIn, WhatsApp, Facebook shares)
  setMeta('meta[property="og:title"]', 'property', 'og:title', meta.ogTitle);
  setMeta('meta[property="og:description"]', 'property', 'og:description', meta.ogDescription);
  setMeta('meta[property="og:url"]', 'property', 'og:url', meta.canonical);
  setMeta('meta[property="og:image"]', 'property', 'og:image', OG_IMAGE);
  setMeta('meta[property="og:type"]', 'property', 'og:type', 'website');
  setMeta('meta[property="og:site_name"]', 'property', 'og:site_name', 'MJD Healthcare');
  setMeta('meta[property="og:locale"]', 'property', 'og:locale', 'en_IN');

  // ── Twitter / X Card
  setMeta('meta[name="twitter:title"]', 'name', 'twitter:title', meta.ogTitle);
  setMeta('meta[name="twitter:description"]', 'name', 'twitter:description', meta.ogDescription);
  setMeta('meta[name="twitter:image"]', 'name', 'twitter:image', OG_IMAGE);

  // ── GEO: AI Crawler Discovery Signals
  // These meta tags help Perplexity, ChatGPT browsing, Bing AI, and Google AI
  // understand the content type, authority level, and topical domain of each page.
  setMeta('meta[name="subject"]', 'name', 'subject', meta.keywords.split(',')[0].trim());
  setMeta('meta[name="coverage"]', 'name', 'coverage', 'India');
  setMeta('meta[name="classification"]', 'name', 'classification', 'Healthcare Consulting, B2B Healthcare, Medical Device Commercialization');
  setMeta('meta[name="category"]', 'name', 'category', 'Healthcare Business Consulting');
  setMeta('meta[name="DC.subject"]', 'name', 'DC.subject', meta.keywords.split(',').slice(0, 4).join('; '));
  setMeta('meta[name="DC.description"]', 'name', 'DC.description', meta.description);
  setMeta('meta[name="DC.publisher"]', 'name', 'DC.publisher', 'MJD Healthcare');
  setMeta('meta[name="DC.language"]', 'name', 'DC.language', 'en-IN');
  setMeta('meta[name="DC.coverage"]', 'name', 'DC.coverage', 'India');
  setMeta('meta[name="DC.rights"]', 'name', 'DC.rights', 'Copyright 2026 MJD Healthcare');

  // ── AEO: Featured Snippet + Voice Eligibility Signals
  setMeta('meta[name="speakable"]', 'name', 'speakable', 'true');

  // ── E-E-A-T: Expertise, Experience, Authoritativeness, Trust signals
  // These help Google Quality Raters and AI engines assess content trustworthiness
  setMeta('meta[name="author"]', 'name', 'author', 'MJD Healthcare');
  setMeta('meta[name="publisher"]', 'name', 'publisher', 'MJD Healthcare');
  setMeta('meta[name="expertise"]', 'name', 'expertise', 'Healthcare Commercialization, Market Access, Medical Device GTM, Pharma Strategy');
  setMeta('meta[name="audience"]', 'name', 'audience', 'Medical Device Manufacturers, Pharma Companies, MedTech Startups, Hospital Groups');
}

/**
 * React hook — call at the top of MainContent with currentPage.
 * Runs updatePageSEO on every page navigation.
 */
export function useSEO(currentPage) {
  useEffect(() => {
    updatePageSEO(currentPage);
  }, [currentPage]);
}
