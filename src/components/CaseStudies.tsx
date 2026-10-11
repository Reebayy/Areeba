import React, { useState } from 'react';
import { CASE_STUDIES, CaseStudyItem } from '../data/portfolioData';
import { ExternalLink, CheckCircle2, ArrowRight, X, Layers, Target, Search, BarChart3 } from 'lucide-react';
import ppcImage from '../assets/images/ppc_campaign_dashboard_1791391721929.jpg';
import affiliateImage from '../assets/images/affiliate_deal_platform_1791391737135.jpg';
import workflowImage from '../assets/images/ai_marketing_workflow_1791391756096.jpg';

export const CaseStudies: React.FC = () => {
  const [filter, setFilter] = useState<'All' | 'PPC' | 'Affiliate' | 'Research' | 'Analytics'>('All');
  const [selectedStudy, setSelectedStudy] = useState<CaseStudyItem | null>(null);

  const getImage = (key: string) => {
    switch (key) {
      case 'ppc':
        return ppcImage;
      case 'affiliate':
        return affiliateImage;
      case 'workflow':
        return workflowImage;
      default:
        return ppcImage;
    }
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'PPC':
        return Target;
      case 'Affiliate':
        return Layers;
      case 'Research':
        return Search;
      case 'Analytics':
        return BarChart3;
      default:
        return Target;
    }
  };

  const filteredStudies = filter === 'All'
    ? CASE_STUDIES
    : CASE_STUDIES.filter((item) => item.category === filter);

  return (
    <section id="work" className="py-20 md:py-28 bg-[#FAF8F5] border-t border-[#ECE7F8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-3xl">
            <div className="text-xs font-bold tracking-wider uppercase text-[#0D9488] mb-2 flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-[#0D9488]" />
              <span>Featured Case Studies</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#1E1736]">
              Featured Work & Performance Areas
            </h2>
            <p className="mt-4 text-base sm:text-lg text-[#5F5577] leading-relaxed">
              Real-world execution workflows spanning paid search advertising, coupon portal structuring, intent research, and performance tracking.
            </p>
          </div>

          {/* Segmented Filter Control (Functional Buttons) */}
          <div className="flex items-center gap-1.5 p-1.5 bg-white rounded-2xl border border-[#EDE8F8] shadow-xs self-start md:self-auto overflow-x-auto max-w-full">
            {(['All', 'PPC', 'Affiliate', 'Research', 'Analytics'] as const).map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-3.5 py-1.5 text-xs font-bold rounded-xl whitespace-nowrap transition-all duration-150 cursor-pointer ${
                  filter === cat
                    ? 'bg-[#1E1736] text-white shadow-xs'
                    : 'text-[#5F5577] hover:text-[#1E1736] hover:bg-[#F0FDFA]'
                }`}
              >
                {cat === 'All' ? 'All Work' : cat}
              </button>
            ))}
          </div>
        </div>

        {/* Bento Grid Layout of Case Studies */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredStudies.map((study) => {
            const Icon = getCategoryIcon(study.category);
            return (
              <div
                key={study.id}
                className="bg-white rounded-3xl border border-[#EDE8F8] overflow-hidden shadow-sm hover:shadow-lg hover:border-[#DDD4FA] transition-all duration-300 flex flex-col group"
              >
                {/* Visual Preview */}
                <div className="relative aspect-[16/9] overflow-hidden bg-[#F3EEFC]">
                  <img
                    src={getImage(study.imageKey)}
                    alt={study.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
                  
                  {/* Category Indicator overlay */}
                  <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-md px-3 py-1 rounded-xl border border-white/60 shadow-xs flex items-center gap-1.5 text-xs font-semibold text-[#1E1736]">
                    <Icon className="w-3.5 h-3.5 text-[#0D9488]" />
                    <span>{study.category} Focus</span>
                  </div>
                </div>

                {/* Content Area */}
                <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between space-y-5">
                  <div>
                    {/* Unboxed metadata kicker */}
                    <div className="text-xs text-[#0D9488] font-bold mb-2 flex items-center gap-2">
                      <span>{study.tagline}</span>
                    </div>

                    <h3 className="text-xl sm:text-2xl font-extrabold text-[#1E1736] group-hover:text-[#0D9488] transition-colors">
                      {study.title}
                    </h3>

                    <p className="mt-3 text-sm text-[#5F5577] leading-relaxed line-clamp-3">
                      {study.context}
                    </p>
                  </div>

                  {/* Highlights & Trigger */}
                  <div className="pt-4 border-t border-[#F2EDFA] flex items-center justify-between">
                    {/* Unboxed tools list */}
                    <div className="text-xs text-[#71658E]">
                      {study.toolsUsed.slice(0, 3).join(' · ')}
                    </div>

                    <button
                      onClick={() => setSelectedStudy(study)}
                      className="inline-flex items-center gap-1 text-xs font-bold text-[#0D9488] hover:text-[#0F766E] transition-colors cursor-pointer group/btn"
                    >
                      <span>Explore Workflow</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 transition-transform" />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Interactive Deep-Dive Modal */}
        {selectedStudy && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#1E1736]/60 backdrop-blur-sm animate-in fade-in duration-200">
            <div
              className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto border border-[#EDE8F8] shadow-2xl p-6 sm:p-8 space-y-6 relative"
              role="dialog"
              aria-modal="true"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedStudy(null)}
                className="absolute top-5 right-5 p-2 rounded-xl text-[#5F5577] hover:text-[#1E1736] hover:bg-[#F4EFFF] transition-colors cursor-pointer"
                aria-label="Close dialog"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Modal Header */}
              <div>
                <div className="text-xs font-bold uppercase tracking-wider text-[#0D9488] mb-1">
                  {selectedStudy.category} Strategy & Execution
                </div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-[#1E1736]">
                  {selectedStudy.title}
                </h3>
                <p className="mt-1 text-sm text-[#0D9488] font-semibold">
                  {selectedStudy.tagline}
                </p>
              </div>

              {/* Context & Objective */}
              <div className="space-y-3 bg-[#FAF8F5] p-4 rounded-2xl border border-[#EDE8F8]">
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-[#1E1736]">
                    The Challenge & Context
                  </h4>
                  <p className="text-xs sm:text-sm text-[#5F5577] mt-1 leading-relaxed">
                    {selectedStudy.context}
                  </p>
                </div>
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-[#1E1736]">
                    Primary Objective
                  </h4>
                  <p className="text-xs sm:text-sm text-[#5F5577] mt-1 leading-relaxed">
                    {selectedStudy.objective}
                  </p>
                </div>
              </div>

              {/* Workflow breakdown */}
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#0D9488] mb-3">
                  Step-by-Step Implementation Workflow
                </h4>
                <div className="space-y-2.5">
                  {selectedStudy.workflow.map((step, idx) => (
                    <div key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-[#473E60]">
                      <div className="w-5 h-5 rounded-full bg-[#F0FDFA] text-[#0D9488] border border-[#CCFBF1] flex items-center justify-center font-bold text-xs shrink-0 mt-0.5 font-mono">
                        {idx + 1}
                      </div>
                      <span className="leading-relaxed">{step}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Key Outcomes */}
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#0D9488] mb-3">
                  Key Outcomes & Deliverables
                </h4>
                <div className="space-y-2">
                  {selectedStudy.keyOutcomes.map((outcome, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#473E60]">
                      <CheckCircle2 className="w-4 h-4 text-[#0D9488] shrink-0 mt-0.5" />
                      <span className="leading-relaxed">{outcome}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tools & CTA */}
              <div className="pt-4 border-t border-[#ECE7F8] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="text-xs text-[#5F5577]">
                  <span className="font-semibold text-[#1E1736]">Tools Utilized:</span>{' '}
                  {selectedStudy.toolsUsed.join(' · ')}
                </div>

                <button
                  onClick={() => setSelectedStudy(null)}
                  className="px-5 py-2.5 text-xs font-bold text-white bg-[#1E1736] hover:bg-[#134E4A] rounded-xl transition-colors cursor-pointer"
                >
                  Close Case Study
                </button>
              </div>

            </div>
          </div>
        )}

      </div>
    </section>
  );
};
