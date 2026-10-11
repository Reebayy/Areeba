import React, { useState } from 'react';
import { Sparkles, Code2, TrendingUp, Layers, Target, Share2, PenTool, ShoppingBag, CheckCircle2, ArrowUpRight } from 'lucide-react';

interface DisciplineService {
  id: string;
  discipline: string;
  title: string;
  badge: string;
  category: 'MARKETING' | 'PAID ADS' | 'WEB & ECOMMERCE';
  icon: React.ReactNode;
  description: string;
  deliverables: string[];
  competencies: string[];
}

export const Services: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<'ALL' | 'MARKETING' | 'PAID ADS' | 'WEB & ECOMMERCE'>('ALL');

  const servicesData: DisciplineService[] = [
    {
      id: "digital-marketing",
      discipline: "DISCIPLINE 01",
      title: "Digital Marketing & Growth",
      badge: "Strategy & Funnels",
      category: "MARKETING",
      icon: <TrendingUp className="w-5 h-5 text-white" />,
      description: "Data-backed customer acquisition, conversion optimization, and sustainable audience expansion engineered to maximize business ROI.",
      deliverables: [
        "Full-Funnel Acquisition Strategy",
        "Conversion Rate Optimization (CRO)",
        "Excel Analytics & Data Modeling",
        "Brand Strategy & Positioning"
      ],
      competencies: [
        "Digital Strategy", "Funnel Optimization", "Data Analytics", "Excel Reporting", "Lead Generation"
      ]
    },
    {
      id: "affiliate-marketing",
      discipline: "DISCIPLINE 02",
      title: "Affiliate Marketing & Networks",
      badge: "Publisher & Deals",
      category: "MARKETING",
      icon: <Layers className="w-5 h-5 text-white" />,
      description: "Publisher operations across Awin, Impact.com & FlexOffers, structuring coupon deal platforms, and driving $15K+ monthly commissions.",
      deliverables: [
        "Publisher Account Management",
        "Voucher & Coupon Deal Placements",
        "Merchant Relationship Scaling",
        "Attribution & Outbound Link Tracking"
      ],
      competencies: [
        "Awin Network", "Impact.com", "FlexOffers", "Voucher Portals", "Commission Scaling", "Deal Placement"
      ]
    },
    {
      id: "google-ads",
      discipline: "DISCIPLINE 03",
      title: "Google Ads & Paid Search (PPC)",
      badge: "PPC & Search",
      category: "PAID ADS",
      icon: <Target className="w-5 h-5 text-white" />,
      description: "High-intent Search ad groups, daily bid pacing, negative keyword harvesting, and Quality Score optimization across 70+ affiliate campaigns.",
      deliverables: [
        "Commercial Search Ad Campaigns",
        "Quality Score & CPC Management",
        "Negative Keyword Filtering",
        "ROAS Scaling & Budget Pacing"
      ],
      competencies: [
        "Google Ads", "Search Bidding", "Negative Match", "Quality Score", "ROAS Scaling"
      ]
    },
    {
      id: "meta-ads",
      discipline: "DISCIPLINE 04",
      title: "Meta Ads & Paid Social",
      badge: "Facebook & Instagram",
      category: "PAID ADS",
      icon: <Share2 className="w-5 h-5 text-white" />,
      description: "Targeted Facebook and Instagram advertising campaigns leveraging custom audience segmentation, lookalike models, and creative split-testing.",
      deliverables: [
        "Audience Research & Demographic Sets",
        "High-CTR Creative Split Testing",
        "Retargeting & Engagement Funnels",
        "CPA Reduction & Scale"
      ],
      competencies: [
        "Meta Ads", "Audience Targeting", "Lookalike Audiences", "Creative Testing", "Social Retargeting"
      ]
    },
    {
      id: "website-dev",
      discipline: "DISCIPLINE 05",
      title: "Website Development & UI/UX",
      badge: "Frontend & CMS",
      category: "WEB & ECOMMERCE",
      icon: <Code2 className="w-5 h-5 text-white" />,
      description: "Modern, responsive, and performance-focused affiliate coupon portals and landing pages engineered for clean navigation and instant click-outs.",
      deliverables: [
        "High-Converting Coupon Portals",
        "Responsive Mobile-First UI/UX",
        "Store & Merchant Taxonomy Setup",
        "Fast Page Speed Optimization"
      ],
      competencies: [
        "Coupon Portals", "Responsive Design", "WordPress", "Landing Pages", "UI/UX Layout", "Fast Loading"
      ]
    },
    {
      id: "ecommerce-services",
      discipline: "DISCIPLINE 06",
      title: "Ecommerce Services & Products",
      badge: "Merchants & Offers",
      category: "WEB & ECOMMERCE",
      icon: <ShoppingBag className="w-5 h-5 text-white" />,
      description: "Product gap research, high-margin merchant offer curation, seasonal flash sale calendars, and conversion rate optimization for online stores.",
      deliverables: [
        "High-Intent Product Gap Research",
        "Seasonal Promotional Deal Calendars",
        "Merchant Payout & EPC Audits",
        "Conversion Funnel Evaluation"
      ],
      competencies: [
        "Product Research", "Offer Curation", "EPC Audits", "Merchant Strategy", "AOV Growth"
      ]
    }
  ];

  const filteredServices = activeFilter === 'ALL'
    ? servicesData
    : servicesData.filter(s => s.category === activeFilter);

  return (
    <section id="services" className="py-16 md:py-24 bg-[#FAF8F5] border-t border-[#ECE7F8]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header matching User Reference Design */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl space-y-3">
            
            {/* Pill Badge matching reference */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1E1736] text-white text-xs font-bold tracking-wider uppercase shadow-xs">
              <Sparkles className="w-3.5 h-3.5 text-[#2DD4BF]" />
              <span>CORE CAPABILITIES</span>
            </div>

            {/* Big Bold Heading matching reference */}
            <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-[#1E1736] font-display">
              Services Offered
            </h2>

            {/* Subtitle */}
            <p className="text-sm sm:text-base text-[#5F5577] leading-relaxed">
              Combining commercial digital marketing, paid advertising management, and web development to build fast, high-converting digital assets.
            </p>
          </div>

          {/* Filter Pills matching reference */}
          <div className="flex items-center gap-1.5 p-1.5 bg-white rounded-full border border-[#EDE8F8] shadow-xs self-start lg:self-auto overflow-x-auto max-w-full">
            {(['ALL', 'MARKETING', 'PAID ADS', 'WEB & ECOMMERCE'] as const).map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-4 py-1.5 text-xs font-bold rounded-full whitespace-nowrap transition-all duration-200 cursor-pointer ${
                  activeFilter === filter
                    ? 'bg-[#1E1736] text-white shadow-xs'
                    : 'text-[#5F5577] hover:text-[#1E1736] hover:bg-[#F0FDFA]'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        {/* 2-Column Grid of Discipline Cards matching user reference */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
          {filteredServices.map((service) => (
            <div
              key={service.id}
              className="bg-white rounded-[2rem] p-6 sm:p-8 border border-[#EDE8F8] shadow-xs hover:border-[#CCFBF1] hover:shadow-md transition-all duration-300 flex flex-col justify-between group"
            >
              <div className="space-y-4">
                
                {/* Header row: Discipline kicker + Category Badge */}
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-extrabold tracking-wider uppercase text-[#0D9488]">
                    {service.discipline}
                  </span>
                  <span className="text-[11px] font-bold text-[#473E60] bg-[#FAF8F5] px-3 py-1 rounded-full border border-[#EDE8F8]">
                    {service.badge}
                  </span>
                </div>

                {/* Title Lockup with Dark Icon Badge matching reference */}
                <div className="flex items-start gap-3.5 pt-1">
                  <div className="w-11 h-11 rounded-2xl bg-[#1E1736] flex items-center justify-center shrink-0 shadow-xs group-hover:scale-105 transition-transform">
                    {service.icon}
                  </div>
                  <h3 className="text-xl sm:text-2xl font-extrabold text-[#1E1736] leading-snug group-hover:text-[#0D9488] transition-colors">
                    {service.title}
                  </h3>
                </div>

                {/* Description */}
                <p className="text-xs sm:text-sm text-[#5F5577] leading-relaxed pt-1">
                  {service.description}
                </p>

                {/* "WHAT I DELIVER" Sub-Card matching reference */}
                <div className="mt-4 p-4 sm:p-5 rounded-2xl bg-[#FAF8F5] border border-[#EDE8F8]/90 space-y-3">
                  <div className="text-[11px] font-extrabold uppercase tracking-wider text-[#1E1736] flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-[#0D9488]" />
                    <span>WHAT I DELIVER</span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-[#372E54]">
                    {service.deliverables.map((deliv, idx) => (
                      <div key={idx} className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#0D9488] shrink-0 mt-0.5" />
                        <span className="leading-snug">{deliv}</span>
                      </div>
                    ))}
                  </div>
                </div>

              </div>

              {/* Bottom Competencies Pills matching reference */}
              <div className="mt-6 pt-4 border-t border-[#F2EDFA] space-y-2">
                <div className="text-[10px] font-extrabold uppercase tracking-wider text-[#71658E]">
                  CORE COMPETENCIES
                </div>
                <div className="flex flex-wrap items-center gap-1.5">
                  {service.competencies.map((comp) => (
                    <span
                      key={comp}
                      className="inline-flex items-center gap-1.5 text-[11px] font-medium text-[#473E60] bg-[#FAF8F5] px-2.5 py-1 rounded-full border border-[#EDE8F8]"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-[#0D9488]" />
                      <span>{comp}</span>
                    </span>
                  ))}
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
