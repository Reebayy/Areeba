export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  duration: string;
  periodLabel: string;
  location?: string;
  summary: string;
  responsibilities: string[];
  coreCompetencies: string[];
}

export interface SkillCategory {
  title: string;
  description: string;
  skills: {
    name: string;
    level: string;
    focus: string;
    tags: string[];
  }[];
}

export interface CaseStudyItem {
  id: string;
  title: string;
  category: 'PPC' | 'Affiliate' | 'Research' | 'Analytics';
  tagline: string;
  imageKey: string;
  context: string;
  objective: string;
  workflow: string[];
  keyOutcomes: string[];
  toolsUsed: string[];
}

export interface ToolkitItem {
  name: string;
  category: string;
  roleInWorkflow: string;
  badge: string;
  capabilities: string[];
}

export const PERSONAL_INFO = {
  name: "Areeba Imran",
  headline: "Affiliate Marketer | PPC & Performance Marketing",
  shortBio: "I build and optimize performance-driven marketing campaigns using PPC, affiliate strategies, research and AI-powered workflows.",
  email: "contactreebay@gmail.com",
  phone: "03147035745",
  phoneInternational: "+92 314 7035745",
  whatsappUrl: "https://wa.me/923147035745",
  linkedinUrl: "https://www.linkedin.com/in/areebaimran12/",
  instagramUrl: "https://www.instagram.com/imareeby/",
  status: "Available for PPC & Affiliate Opportunities",
  experienceYears: "4+ Years",
  specialties: ["Google PPC", "Affiliate Platforms", "Keyword Discovery", "AI Automation"],
  publisherNetworks: ["Awin", "Impact.com", "FlexOffers", "Global US/UK Networks"],
};

export interface ServiceItem {
  id: string;
  title: string;
  category: string;
  description: string;
  highlights: string[];
}

export const SERVICES: ServiceItem[] = [
  {
    id: "digital-marketing",
    title: "Digital Marketing",
    category: "Full-Funnel Growth",
    description: "End-to-end performance marketing strategies designed to acquire qualified users, optimize marketing spend, and generate verifiable ROI.",
    highlights: ["Funnel Strategy", "Multi-Channel Acquisition", "Conversion Optimization"]
  },
  {
    id: "affiliate-marketing",
    title: "Affiliate Marketing",
    category: "Partnerships & Distribution",
    description: "Managing top publisher networks (Awin, Impact.com, FlexOffers), optimizing merchant partnerships, and driving commission revenue.",
    highlights: ["Publisher Network Setup", "Voucher Deal Distribution", "Merchant Attribution"]
  },
  {
    id: "google-ads",
    title: "Google Ads",
    category: "Paid Search & PPC",
    description: "High-intent Search Ads, ad group architecture, commercial keyword bidding, negative match lists, and quality score maximization.",
    highlights: ["Commercial Search Ads", "Bid Pacing & Audit", "Negative Keyword Lists"]
  },
  {
    id: "meta-ads",
    title: "Meta Ads",
    category: "Paid Social & Retargeting",
    description: "Laser-focused Facebook & Instagram campaigns, custom audience segmentation, lookalike scaling, and high-converting creative testing.",
    highlights: ["Audience Targeting", "Creative Split-Testing", "Retargeting Campaigns"]
  },
  {
    id: "website-dev",
    title: "Website Dev",
    category: "Coupon & Deal Platforms",
    description: "Structuring high-converting coupon and deal platforms, merchant directory categorization, and frictionless affiliate redirect paths.",
    highlights: ["Deal & Coupon Portals", "Merchant Taxonomy", "Frictionless UX"]
  },
  {
    id: "ecommerce-services",
    title: "Ecommerce Services",
    category: "Store & Product Growth",
    description: "Profitable product research, merchant offer curation, seasonal flash sale campaigns, and average order value (AOV) optimization.",
    highlights: ["Product Gap Research", "Promo Placement", "Revenue Scaling"]
  }
];

export const EXPERIENCES: ExperienceItem[] = [
  {
    id: "perks-logic",
    company: "Perks Logic",
    role: "Digital & Affiliate Marketing Specialist (PPC & Growth)",
    duration: "1 Year",
    periodLabel: "Affiliate & Digital Marketing Tenure",
    summary: "Led integrated digital marketing, affiliate operations, and high-intent paid search campaigns across multiple merchant verticals, scaling deal portals with data-driven audience research and AI-assisted workflow execution.",
    responsibilities: [
      "Designed and managed comprehensive digital & affiliate marketing campaigns, combining targeted Google PPC search with high-converting partner offers.",
      "Conducted keyword selection, compelling ad copy drafting, negative keyword filtering, and daily budget optimization.",
      "Structured and refined coupon & affiliate website layouts to maximize user engagement and offer visibility.",
      "Executed product and keyword research to identify profitable merchant niches and emerging deal opportunities.",
      "Monitored and evaluated outbound clicks, conversion rates, and overall campaign ROI to guide budget reallocations.",
      "Leveraged AI-assisted workflows to accelerate market research, brainstorm fresh ad copy variations, and plan campaign calendars."
    ],
    coreCompetencies: ["Digital Marketing", "Affiliate Operations", "Google Ads", "Coupon Platforms", "Budget Pacing", "ROI Tracking"]
  },
  {
    id: "creative-it-sols",
    company: "CreativeIT Sols",
    role: "Digital & Affiliate Marketing Executive (PPC & Web Strategy)",
    duration: "3 Years",
    periodLabel: "Long-term Foundation",
    summary: "Spearheaded full-funnel digital marketing and affiliate growth operations, from hands-on Google & Meta campaign setups to coupon portal curation and conversion analytics.",
    responsibilities: [
      "Led end-to-end digital marketing and affiliate initiatives, PPC campaign setups, daily bidding adjustments, and ad group restructuring.",
      "Maintained and enhanced coupon and deal websites, coordinating merchant offer placements and banner positions.",
      "Conducted deep competitive research on merchant payout models, conversion velocity, and search volume.",
      "Implemented tracking links, UTM conventions, and conversion evaluation to ensure transparent performance auditing.",
      "Utilized modern AI tools to expedite keyword clustering, create variant messaging, and streamline routine campaign documentation."
    ],
    coreCompetencies: ["Digital Marketing", "Affiliate Strategy", "PPC Management", "Conversion Attribution", "Performance Auditing"]
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: "Paid Acquisition & PPC",
    description: "Laser-focused search and performance advertising designed to drive qualified traffic with controlled ad spend.",
    skills: [
      {
        name: "Google Ads / PPC Management",
        level: "Advanced Specialization",
        focus: "Search campaigns, ad copywriting, bid pacing, quality score refinement, and negative keyword pruning.",
        tags: ["Search Ads", "Bidding Tactics", "Negative Match", "Quality Score"]
      },
      {
        name: "Facebook Ads Optimization",
        level: "Proficient Core",
        focus: "Targeting setup, demographic segmentation, ad creative testing, and foundational optimization.",
        tags: ["Campaign Setup", "Interest Targeting", "Creative Testing"]
      },
      {
        name: "Performance & ROI Tracking",
        level: "Data Rigor",
        focus: "Click auditing, conversion tracking, affiliate attribution, and return-on-ad-spend (ROAS) analysis.",
        tags: ["Click Analytics", "UTM Tracking", "Conversion Audit", "ROI Calculations"]
      }
    ]
  },
  {
    title: "Affiliate & Platform Growth",
    description: "Building high-converting digital real estate for coupon, voucher, and merchant deal distribution.",
    skills: [
      {
        name: "Coupon & Deal Website Architecture",
        level: "Core Strength",
        focus: "Designing intuitive deal directories, category taxonomy, store pages, and high-visibility voucher placements.",
        tags: ["Deal Portals", "Voucher UX", "Merchant Categories", "Offer Placement"]
      },
      {
        name: "Affiliate Network Operations",
        level: "Specialized",
        focus: "Partner offer selection, commission rate comparison, affiliate link generation, and offer lifecycle management.",
        tags: ["Merchant Curation", "Link Tracking", "Commission Models"]
      },
      {
        name: "Keyword Research & SEO Basics",
        level: "Foundational",
        focus: "Commercial search intent discovery, search volume evaluation, SERP competitive analysis, and on-page optimization.",
        tags: ["Intent Mapping", "Search Volumes", "Meta Structures", "SERP Analysis"]
      }
    ]
  },
  {
    title: "Creatives & AI Automation",
    description: "Supercharging creative production and campaign ideation with cutting-edge AI toolsets.",
    skills: [
      {
        name: "Canva for Marketing Creatives",
        level: "Practical Proficiency",
        focus: "Designing high-CTR display banners, social promotional graphics, and deal showcase imagery.",
        tags: ["Display Banners", "Social Visuals", "Brand Consistency", "Promo Creatives"]
      },
      {
        name: "AI-Powered Marketing Workflows",
        level: "Innovative Execution",
        focus: "Utilizing modern AI for ad copy ideation, keyword cluster generation, audience persona outlines, and workflow automation.",
        tags: ["Prompt Engineering", "Copy Variations", "Content Roadmaps", "Market Synthesis"]
      }
    ]
  }
];

export const CASE_STUDIES: CaseStudyItem[] = [
  {
    id: "ppc-campaigns",
    title: "PPC Campaign Architecture & Budget Efficiency",
    category: "PPC",
    tagline: "Optimizing Google Search campaigns for commercial-intent keywords and conversion efficiency.",
    imageKey: "ppc",
    context: "Paid search requires strict alignment between user query intent, high-relevance ad copy, and targeted landing destinations to maximize ROAS without ad budget waste.",
    objective: "Eliminate low-converting search terms, enhance Click-Through Rates (CTR), and preserve target cost per acquisition across active campaigns.",
    workflow: [
      "Rigorous keyword filtering focusing on high-commercial-intent modifiers ('buy', 'discount', 'coupon code', 'review').",
      "Drafted 3-4 responsive search ad copy variants per ad group highlighting clear value propositions and strong CTAs.",
      "Structured extensive negative keyword lists to cut irrelevant spend from day one.",
      "Daily bid adjustments based on device, schedule, and historical conversion responsiveness."
    ],
    keyOutcomes: [
      "Enhanced ad relevance and improved expected Click-Through Rates across key ad groups.",
      "Minimized budget leakage by actively pruning non-converting search queries.",
      "Established stable budget pacing across Google Ads account operations."
    ],
    toolsUsed: ["Google Ads", "Keyword Planner", "AI Copy Assistant", "Spreadsheet Analytics"]
  },
  {
    id: "affiliate-deal-portal",
    title: "Coupon & Deal Website Structure & Offer Placement",
    category: "Affiliate",
    tagline: "Building intuitive user pathways for discount discovery and frictionless outbound affiliate clicks.",
    imageKey: "affiliate",
    context: "Deal platforms succeed when shoppers find authentic discounts rapidly. Cluttered navigation and stale promotions immediately increase bounce rates.",
    objective: "Design a clean, categorized deal structure that highlights top-performing merchant vouchers and guides user intent toward verified conversions.",
    workflow: [
      "Organized intuitive merchant taxonomy into popular shopping categories and trending deals.",
      "Structured visual hierarchy: prominent 'Copy Code' interactive triggers, verified expiry badges, and direct store links.",
      "Curated top merchant placements above the fold to capture immediate user attention.",
      "Embedded UTM and affiliate tracking parameters into all outbound redirect links."
    ],
    keyOutcomes: [
      "Streamlined voucher discovery flow reducing time-to-click for shoppers.",
      "Clear visual categorization for seasonal merchant campaigns and flash sales.",
      "Seamless integration of affiliate tracking links with verified destination verification."
    ],
    toolsUsed: ["Deal Portal CMS", "Affiliate Networks", "Canva Graphics", "Link Audit Tools"]
  },
  {
    id: "keyword-product-research",
    title: "Product & Keyword Intent Discovery",
    category: "Research",
    tagline: "Uncovering profitable niche opportunities and high-intent buyer queries before launching spend.",
    imageKey: "workflow",
    context: "Entering competitive affiliate niches without deep research leads to high CPCs and stagnant commissions. Upfront search intent mapping is critical.",
    objective: "Identify under-served search queries with strong buyer intent and evaluate merchant product viability.",
    workflow: [
      "Queried search volume, competition density, and CPC estimates using Google Keyword Planner and SEO tools.",
      "Clustered search queries into informational, navigational, and high-converting commercial intent buckets.",
      "Assessed merchant conversion rates, commission percentages, and cookie duration windows.",
      "Compiled actionable target lists for campaign launch priority."
    ],
    keyOutcomes: [
      "Identified high-intent long-tail keywords with balanced competition.",
      "Prioritized merchant partnerships offering optimal commission payouts and high conversion velocity.",
      "Built structured keyword repositories used across both PPC campaigns and portal content."
    ],
    toolsUsed: ["Google Keyword Planner", "Search Console", "Competitor Research", "AI Topic Clustering"]
  },
  {
    id: "performance-tracking",
    title: "Performance Tracking & Conversion Attribution",
    category: "Analytics",
    tagline: "Continuous monitoring of outbound clicks, affiliate network conversions, and campaign ROI.",
    imageKey: "ppc",
    context: "Performance marketing is only as strong as its attribution. Discrepancies between ad clicks and recorded affiliate sales can distort ROI decisions.",
    objective: "Maintain reliable reporting across campaign clicks, affiliate network dashboards, and net return on ad spend.",
    workflow: [
      "Established standardized UTM naming taxonomy across all active PPC ad campaigns.",
      "Cross-referenced Google Ads click logs against affiliate network conversion reports.",
      "Monitored key performance metrics: Click-Through Rate (CTR), Cost Per Click (CPC), and Conversion Rate (CVR).",
      "Reallocated daily budget from stagnant ad groups to proven high-performing merchant offers."
    ],
    keyOutcomes: [
      "Transparent multi-channel attribution and accurate visibility into profitable offers.",
      "Data-backed budget allocation preventing overspending on underperforming campaigns.",
      "Actionable reporting routines for continuous performance refinement."
    ],
    toolsUsed: ["Google Ads Reporting", "Affiliate Dashboards", "UTM Builder", "Data Analytics"]
  }
];

export const MARKETING_TOOLKIT: ToolkitItem[] = [
  {
    name: "Google Ads",
    category: "PPC & Search",
    badge: "Core Platform",
    roleInWorkflow: "Primary search advertising network for targeting high-intent buyer searches, building structured ad groups, and managing daily bidding.",
    capabilities: ["Search Campaigns", "Keyword Bidding", "Negative Match Lists", "Responsive Search Ads"]
  },
  {
    name: "Facebook Ads",
    category: "Paid Social",
    badge: "Ad Setup & Optimization",
    roleInWorkflow: "Audience targeting, demographic segmentation, and creative testing for complementary social acquisition.",
    capabilities: ["Audience Targeting", "Campaign Structuring", "Creative Testing", "Basic Optimization"]
  },
  {
    name: "Coupon & Deal CMS",
    category: "Affiliate Infrastructure",
    badge: "Platform Architecture",
    roleInWorkflow: "Structuring deal portals, managing merchant store directories, and placing promotional coupon vouchers.",
    capabilities: ["Offer Placement", "Store Taxonomy", "Deal Expiry Audits", "Voucher UX Layout"]
  },
  {
    name: "Canva",
    category: "Creative Production",
    badge: "Visual Assets",
    roleInWorkflow: "Designing clean marketing creatives, display banner variations, and promotional assets for affiliate websites.",
    capabilities: ["Display Ads", "Social Creatives", "Promo Banners", "Visual Formatting"]
  },
  {
    name: "SEO Basics & Keywords",
    category: "Organic Discovery",
    badge: "Intent Analysis",
    roleInWorkflow: "Discovering commercial search queries, conducting competitor SERP analysis, and applying on-page SEO best practices.",
    capabilities: ["Intent Discovery", "Keyword Clustering", "Meta Titles & Headers", "SERP Inspection"]
  },
  {
    name: "AI Tools & Workflows",
    category: "Marketing Automation",
    badge: "AI-Assisted Efficiency",
    roleInWorkflow: "Accelerating ad copy variations, brainstorming content topics, analyzing market trends, and automating repetitive research.",
    capabilities: ["Ad Copy Iterations", "Market Research Synthesis", "Content Outlining", "Workflow Automation"]
  }
];

export const EDUCATION_AND_CERTS = {
  education: [
    {
      degree: "Intermediate in Medical Science",
      year: "2024",
      institution: "Higher Secondary Board",
      focus: "Rigorous analytical and scientific training that built strong foundations in data discipline, methodical problem solving, and research ethics."
    }
  ],
  certifications: [
    {
      title: "Digital Marketing & Affiliate Marketing",
      provider: "Online Learning / Self-Training",
      focus: "Comprehensive hands-on study covering PPC fundamentals, performance tracking, affiliate networks, coupon platform mechanics, and search advertising."
    }
  ]
};
