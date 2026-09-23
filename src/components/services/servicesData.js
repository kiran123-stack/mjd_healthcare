export const servicesData = [
  {
    number: "01",
    id: "market-access",
    title: "Market Access",
    description: "Build pathways to hospitals, institutions, channels and healthcare decision-makers.",
    href: "/market-access/",
    isFeatured: false,
    visualKey: "network",
    capabilities: [
      "Market & Opportunity Assessment",
      "Hospital & Institutional Access",
      "Government & Institutional Procurement",
      "Channel & Distributor Development",
      "Business Development",
      "Product Positioning",
      "Market Expansion"
    ]
  },
  {
    number: "02",
    id: "go-to-market-strategy",
    title: "Go-To-Market Strategy",
    description: "Define where to compete, how to enter, who to target and how to scale.",
    href: "/go-to-market-strategy/",
    isFeatured: false,
    visualKey: "strategy",
    capabilities: [
      "Market Selection",
      "Customer & Stakeholder Mapping",
      "Product Positioning",
      "Pricing & Commercial Strategy",
      "Channel Strategy",
      "Demand Generation",
      "Sales Enablement"
    ]
  },
  {
    number: "03",
    id: "phygital-healthcare-growth",
    title: "Phygital Healthcare Growth",
    description: "Combine digital demand generation with physical healthcare market activation.",
    href: "/phygital-healthcare-growth/",
    isFeatured: false,
    visualKey: "phygital",
    capabilities: [
      "Healthcare Websites, SEO, AEO, GEO & AI Visibility",
      "Targeted Google, LinkedIn, Meta & WhatsApp Lead Gen",
      "Hospital Engagement & Product Demonstrations",
      "Clinical Meetings & Institutional Outreach",
      "KOL Engagement, CMEs & Channel Activation",
      "CRM & Lead Nurturing Automation"
    ]
  },
  {
    number: "04",
    id: "healthcare-growth-engine",
    title: "Healthcare Growth Engine",
    description: "Connect visibility, leads, sales enablement and market access into one measurable growth system.",
    href: "/healthcare-growth-engine/",
    isFeatured: true,
    image: "/images/service_growth_engine.jpg",
    visualKey: "engine",
    capabilities: [
      "1. Market Intelligence",
      "2. Product Positioning",
      "3. Digital Visibility",
      "4. Demand Generation",
      "5. Lead Qualification",
      "6. Sales Enablement & Market Activation",
      "7. Measurement & Optimization"
    ]
  },
  {
    number: "05",
    id: "healthcare-business-development",
    title: "Healthcare Business Development",
    description: "Identify and develop strategic healthcare opportunities, partnerships and institutional relationships.",
    href: "/healthcare-business-development/",
    isFeatured: false,
    visualKey: "bizdev",
    capabilities: [
      "Market & Opportunity Identification",
      "Account Targeting & Stakeholder Mapping",
      "Business Opportunity Development",
      "Strategic Partnerships",
      "International Market Development"
    ]
  },
  {
    number: "06",
    id: "healthcare-digital-demand-generation",
    title: "Digital Demand Generation",
    description: "Build qualified demand through SEO, AEO, GEO, paid media, content and targeted campaigns.",
    href: "/healthcare-digital-demand-generation/",
    isFeatured: false,
    visualKey: "demand",
    capabilities: [
      "Healthcare SEO, AEO, GEO & AI Search Visibility",
      "Google Ads & Paid Search Campaigns",
      "LinkedIn Marketing & Meta Advertising",
      "High-Converting Landing Pages & Content",
      "WhatsApp Lead Generation & CRM Automation"
    ]
  },
  {
    number: "07",
    id: "sales-enablement",
    title: "Sales Enablement",
    description: "Give sales teams the positioning, messaging and tools needed to convert opportunities.",
    href: "/sales-enablement/",
    isFeatured: false,
    visualKey: "sales",
    capabilities: [
      "Sales Messaging & Value Dossiers",
      "Product Sales Presentations",
      "Competitive Positioning & Objection Handling",
      "Account Targeting & Lead Qualification",
      "Sales & Marketing Alignment"
    ]
  },
  {
    number: "08",
    id: "product-positioning-commercialization",
    title: "Product Positioning & Commercialization",
    description: "Turn technical healthcare products into clear, differentiated commercial propositions.",
    href: "/product-positioning-commercialization/",
    isFeatured: false,
    visualKey: "positioning",
    capabilities: [
      "Product Positioning & Value Proposition",
      "Customer Segmentation",
      "Competitive Positioning & Sales Messaging",
      "Launch Strategy & Marketing Communication",
      "Website & Digital Campaign Messaging",
      "Market-Entry Strategy"
    ]
  },
  {
    number: "09",
    id: "channel-distributor-development",
    title: "Channel & Distributor Development",
    description: "Build a channel that can actually grow your market.",
    href: "/channel-distributor-development/",
    isFeatured: false,
    visualKey: "channel",
    capabilities: [
      "Channel Strategy & Distributor Identification",
      "Partner Evaluation & Selection",
      "Distributor Onboarding & Training",
      "Channel Activation & Performance Tracking"
    ]
  }
];

export const servicePathways = [
  {
    id: "launch",
    title: "New Healthcare Product",
    subtitle: "End-to-end pathway from positioning to hospital adoption",
    steps: [
      { num: "08", name: "Product Positioning", href: "/product-positioning-commercialization/" },
      { num: "02", name: "GTM Strategy", href: "/go-to-market-strategy/" },
      { num: "01", name: "Market Access", href: "/market-access/" },
      { num: "06", name: "Digital Demand", href: "/healthcare-digital-demand-generation/" },
      { num: "07", name: "Sales Enablement", href: "/sales-enablement/" },
      { num: "05", name: "Business Development", href: "/healthcare-business-development/" },
      { num: "04", name: "Market Adoption", href: "/healthcare-growth-engine/" }
    ]
  },
  {
    id: "entry",
    title: "Entering a New Market",
    subtitle: "Strategic roadmap for entering new geographic or institutional segments",
    steps: [
      { num: "01", name: "Market Intelligence", href: "/market-access/" },
      { num: "02", name: "GTM Strategy", href: "/go-to-market-strategy/" },
      { num: "09", name: "Channel Development", href: "/channel-distributor-development/" },
      { num: "01", name: "Market Access", href: "/market-access/" },
      { num: "05", name: "Business Development", href: "/healthcare-business-development/" },
      { num: "06", name: "Demand Generation", href: "/healthcare-digital-demand-generation/" }
    ]
  },
  {
    id: "acceleration",
    title: "Accelerating Existing Growth",
    subtitle: "Optimizing demand, lead flow, and sales execution to scale traction",
    steps: [
      { num: "08", name: "Product Positioning", href: "/product-positioning-commercialization/" },
      { num: "06", name: "Digital Demand", href: "/healthcare-digital-demand-generation/" },
      { num: "03", name: "Lead Generation", href: "/phygital-healthcare-growth/" },
      { num: "07", name: "Sales Enablement", href: "/sales-enablement/" },
      { num: "05", name: "Business Development", href: "/healthcare-business-development/" },
      { num: "04", name: "Growth Measurement", href: "/healthcare-growth-engine/" }
    ]
  }
];

export const businessNeeds = [
  {
    id: "launch-product",
    title: "Launch a Product",
    description: "Position, launch, and clear market access for a new medical device or health product.",
    serviceIds: ["08", "02", "01", "06", "07"]
  },
  {
    id: "enter-market",
    title: "Enter a New Market",
    description: "Expand into new territories, hospital systems, or regional health networks.",
    serviceIds: ["01", "02", "05", "09"]
  },
  {
    id: "reach-buyers",
    title: "Reach More Healthcare Buyers",
    description: "Target clinicians, hospital administrators, procurement leads, and KOLs.",
    serviceIds: ["06", "05", "03", "01"]
  },
  {
    id: "hospital-relations",
    title: "Build Hospital Relationships",
    description: "Navigating hospital committees, formulary boards, and enterprise procurement.",
    serviceIds: ["01", "05", "03", "07"]
  },
  {
    id: "distributor-network",
    title: "Build a Distributor Network",
    description: "Identify, evaluate, onboard, and activate performing healthcare distribution partners.",
    serviceIds: ["09", "01", "05", "07"]
  },
  {
    id: "sales-conversion",
    title: "Improve Sales Conversion",
    description: "Arm your commercial team with high-impact positioning, tools, and qualified leads.",
    serviceIds: ["07", "08", "06", "04"]
  }
];
