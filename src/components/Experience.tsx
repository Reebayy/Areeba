import React, { useState } from 'react';
import { EXPERIENCES } from '../data/portfolioData';
import { Calendar, Check, ChevronDown, ChevronUp, Globe2, ShieldCheck, ArrowUpRight } from 'lucide-react';
import { PerksLogicLogo, CreativeITLogo, AwinLogo, ImpactLogo, FlexOffersLogo, GlobalNetworksLogo } from './Logos';

export const Experience: React.FC = () => {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const toggleExperience = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  const getCompanyLogo = (companyId: string) => {
    if (companyId === 'perks-logic') {
      return <PerksLogicLogo className="h-10" />;
    }
    return <CreativeITLogo className="h-10" />;
  };

  const networks = [
    {
      name: "Awin",
      role: "Global Publisher Partner",
      desc: "Top affiliate network for UK, US & EU merchant partnerships and voucher placements.",
      logo: <AwinLogo className="h-6 sm:h-7" />,
      tag: "UK / US / EU",
    },
    {
      name: "Impact.com",
      role: "Partnership Cloud",
      desc: "Tracking outbound merchant clicks, promo codes, and multi-currency commissions.",
      logo: <ImpactLogo className="h-6 sm:h-7" />,
      tag: "Enterprise Hub",
    },
    {
      name: "FlexOffers",
      role: "Top US & UK Network",
      desc: "Managing high-EPC merchant programs across premier retail, tech & coupon verticals.",
      logo: <FlexOffersLogo className="h-6 sm:h-7" />,
      tag: "US / UK Direct",
    },
  ];

  return (
    <section id="experience" className="py-16 md:py-20 bg-[#FAF8F5] border-t border-[#ECE7F8]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 space-y-12">
        
        {/* Section Header */}
        <div>
          <div className="text-xs font-bold tracking-wider uppercase text-[#0D9488] mb-1.5 flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-[#0D9488]" />
            <span>Verified Career Milestones</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#1E1736]">
            Professional Experience & Publisher Operations
          </h2>
          <p className="mt-2 text-sm text-[#5F5577]">
            Agency tenures across Perks Logic & CreativeIT Sols, alongside hands-on publisher operations across top global affiliate networks.
          </p>
        </div>

        {/* 2 Collapsible Agency Experience Cards */}
        <div className="space-y-4">
          <div className="text-xs font-bold uppercase tracking-wider text-[#0D9488]">
            Agency Roles
          </div>

          {EXPERIENCES.map((exp) => {
            const isExpanded = expandedId === exp.id;
            return (
              <div
                key={exp.id}
                className="bg-white rounded-3xl border border-[#EDE8F8] shadow-xs hover:border-[#CCFBF1] transition-all overflow-hidden"
              >
                {/* Trigger Button Header */}
                <button
                  type="button"
                  onClick={() => toggleExperience(exp.id)}
                  className="w-full p-6 sm:p-7 text-left flex flex-col sm:flex-row sm:items-center justify-between gap-4 cursor-pointer hover:bg-[#F0FDFA]/40 transition-colors"
                  aria-expanded={isExpanded}
                >
                  <div className="flex items-center gap-4">
                    <div className="p-1 bg-[#FAF8F5] rounded-2xl border border-[#EDE8F8]">
                      {getCompanyLogo(exp.id)}
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-bold text-[#0D9488]">
                          {exp.periodLabel}
                        </span>
                        <span className="text-xs text-[#5F5577] flex items-center gap-1 font-mono">
                          <Calendar className="w-3.5 h-3.5 text-[#0D9488]" />
                          {exp.duration}
                        </span>
                      </div>
                      <div className="text-sm font-bold text-[#1E1736] mt-0.5">
                        {exp.role}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 self-end sm:self-auto">
                    <span className="text-xs font-bold px-3 py-1.5 rounded-full bg-[#F0FDFA] text-[#0D9488] border border-[#CCFBF1] hover:bg-[#CCFBF1] transition-colors">
                      {isExpanded ? 'Hide Details' : 'View Full Experience'}
                    </span>
                    <div className="w-8 h-8 rounded-full bg-[#FAF8F5] border border-[#EDE8F8] flex items-center justify-center text-[#0D9488]">
                      {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                    </div>
                  </div>
                </button>

                {/* Expanded Detailed Drawer */}
                {isExpanded && (
                  <div className="px-6 pb-7 sm:px-8 sm:pb-8 pt-2 border-t border-[#F2EDFA] animate-in fade-in duration-200 space-y-5">
                    
                    <div>
                      <h4 className="text-xs font-bold uppercase tracking-wider text-[#0D9488] mb-1.5">
                        Role Overview
                      </h4>
                      <p className="text-sm text-[#473E60] leading-relaxed">
                        {exp.summary}
                      </p>
                    </div>

                    <div>
                      <h4 className="text-xs font-bold uppercase tracking-wider text-[#0D9488] mb-2.5">
                        Core Daily Responsibilities & Deliverables
                      </h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5">
                        {exp.responsibilities.map((resp, idx) => (
                          <div key={idx} className="flex items-start gap-2.5 p-3 rounded-xl bg-[#FAF8F5] border border-[#EDE8F8] text-xs text-[#473E60]">
                            <div className="w-4 h-4 rounded-full bg-[#F0FDFA] flex items-center justify-center text-[#0D9488] shrink-0 mt-0.5">
                              <Check className="w-3 h-3" />
                            </div>
                            <span className="leading-relaxed">{resp}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="pt-3 border-t border-[#F2EDFA] flex flex-wrap items-center justify-between gap-3 text-xs text-[#5F5577]">
                      <div className="flex items-center gap-2">
                        <span className="font-semibold text-[#1E1736]">Applied Competencies:</span>
                        <span>{exp.coreCompetencies.join(' · ')}</span>
                      </div>
                      <span className="text-emerald-700 font-semibold bg-emerald-50 px-2 py-0.5 rounded-md">
                        Verified Office Tenure
                      </span>
                    </div>

                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Top Networks That I work - 3 Round Ball Shapes */}
        <div className="bg-white rounded-3xl border border-[#EDE8F8] p-8 sm:p-12 shadow-xs space-y-8 text-center">
          <div>
            <div className="text-xs font-bold uppercase tracking-wider text-[#0D9488] mb-2 inline-flex items-center gap-1.5 px-3 py-1 bg-[#F0FDFA] rounded-full border border-[#CCFBF1]">
              <Globe2 className="w-3.5 h-3.5 text-[#0D9488]" />
              <span>Publisher Operations</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-[#1E1736]">
              Top Networks That I work
            </h3>
            <p className="text-xs sm:text-sm text-[#5F5577] mt-1.5 max-w-lg mx-auto">
              Premier global affiliate networks managed for brand partnerships, campaign tracking, and voucher distribution
            </p>
          </div>

          {/* 3 Round Ball Shapes */}
          <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10 pt-4">
            {networks.map((net) => (
              <div
                key={net.name}
                className="group relative flex flex-col items-center"
              >
                {/* Round Ball */}
                <div className="w-36 h-36 sm:w-44 sm:h-44 rounded-full bg-gradient-to-b from-[#FAF8F5] via-white to-[#F0FDFA] border-2 border-[#CCFBF1] shadow-[0_10px_30px_rgba(13,148,136,0.08)] group-hover:shadow-[0_14px_35px_rgba(13,148,136,0.18)] group-hover:border-[#0D9488] group-hover:scale-105 transition-all duration-300 flex flex-col items-center justify-center p-5 text-center relative overflow-hidden">
                  {/* Subtle radial inner glow */}
                  <div className="absolute inset-0 bg-radial from-transparent to-[#0D9488]/5 pointer-events-none rounded-full" />
                  
                  {/* Logo Container */}
                  <div className="mb-2 transition-transform duration-300 group-hover:scale-110 flex items-center justify-center">
                    {net.logo}
                  </div>

                  {/* Network Name */}
                  <div className="text-sm sm:text-base font-extrabold text-[#1E1736] tracking-tight mt-1">
                    {net.name}
                  </div>

                  {/* Tag / Role badge */}
                  <div className="text-[10px] font-bold text-[#0D9488] mt-0.5 font-mono">
                    {net.tag}
                  </div>
                </div>

                {/* Subtitle description beneath the ball */}
                <div className="mt-3 text-xs font-semibold text-[#5F5577] max-w-[140px] text-center">
                  {net.role}
                </div>
              </div>
            ))}
          </div>

          {/* Verification footer */}
          <div className="pt-4 flex items-center justify-center gap-2 text-xs font-semibold text-[#0D9488]">
            <ShieldCheck className="w-4 h-4 text-emerald-600" />
            <span>Active Publisher Status on US, UK & Global Merchant Programs</span>
          </div>
        </div>

      </div>
    </section>
  );
};
