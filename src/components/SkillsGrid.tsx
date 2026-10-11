import React, { useState } from 'react';
import { SKILL_CATEGORIES } from '../data/portfolioData';
import { Sparkles, Check, ChevronRight } from 'lucide-react';

export const SkillsGrid: React.FC = () => {
  const [activeTab, setActiveTab] = useState<number>(0);

  return (
    <section id="skills" className="py-20 md:py-28 bg-[#FAF8F5] border-t border-[#ECE7F8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-bold tracking-wider uppercase text-[#0D9488] mb-2 flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-[#0D9488]" />
            <span>Capabilities Matrix</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#1E1736]">
            Skills & Core Expertise
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#5F5577] leading-relaxed">
            A comprehensive overview of competencies developed across PPC advertising, affiliate platform operations, intent research, and AI workflows.
          </p>
        </div>

        {/* Tab switcher for categories (Functional Buttons) */}
        <div className="flex items-center gap-2 mb-10 overflow-x-auto pb-2 border-b border-[#ECE7F8]">
          {SKILL_CATEGORIES.map((cat, idx) => (
            <button
              key={cat.title}
              onClick={() => setActiveTab(idx)}
              className={`px-4 py-2.5 text-xs font-bold rounded-2xl transition-all duration-200 whitespace-nowrap cursor-pointer ${
                activeTab === idx
                  ? 'bg-[#1E1736] text-white shadow-xs'
                  : 'bg-white text-[#5F5577] hover:text-[#1E1736] hover:bg-[#F0FDFA] border border-[#EDE8F8]'
              }`}
            >
              {cat.title}
            </button>
          ))}
        </div>

        {/* Active Category Overview & Cards */}
        <div className="space-y-6">
          <div className="bg-white border border-[#EDE8F8] p-5 rounded-2xl flex flex-col sm:flex-row sm:items-center justify-between gap-3 shadow-xs">
            <div>
              <h3 className="text-base font-bold text-[#1E1736]">
                {SKILL_CATEGORIES[activeTab].title}
              </h3>
              <p className="text-xs sm:text-sm text-[#5F5577] mt-0.5">
                {SKILL_CATEGORIES[activeTab].description}
              </p>
            </div>
            <div className="flex items-center gap-1.5 text-xs font-semibold text-[#0D9488] bg-[#F0FDFA] px-3 py-1 rounded-full border border-[#CCFBF1] shrink-0">
              <Sparkles className="w-3.5 h-3.5" />
              <span>{SKILL_CATEGORIES[activeTab].skills.length} Core Domains</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SKILL_CATEGORIES[activeTab].skills.map((skill) => (
              <div
                key={skill.name}
                className="bg-white rounded-3xl p-6 sm:p-7 border border-[#EDE8F8] shadow-xs hover:shadow-md hover:border-[#CCFBF1] transition-all duration-200 flex flex-col justify-between space-y-5 group"
              >
                <div>
                  {/* Unboxed level label */}
                  <div className="text-xs font-bold text-[#0D9488] mb-1">
                    {skill.level}
                  </div>

                  <h4 className="text-lg font-bold text-[#1E1736] group-hover:text-[#0D9488] transition-colors">
                    {skill.name}
                  </h4>

                  <p className="mt-3 text-xs sm:text-sm text-[#5F5577] leading-relaxed">
                    {skill.focus}
                  </p>
                </div>

                {/* Sub-capabilities (Zero-pill compliant clean unboxed tags) */}
                <div className="pt-4 border-t border-[#F2EDFA]">
                  <div className="text-xs text-[#71658E] flex flex-wrap items-center gap-1.5">
                    {skill.tags.map((tag, tIdx) => (
                      <React.Fragment key={tag}>
                        <span className="font-medium text-[#473E60]">{tag}</span>
                        {tIdx < skill.tags.length - 1 && (
                          <span aria-hidden="true" className="text-[#D8CEF6]">/</span>
                        )}
                      </React.Fragment>
                    ))}
                  </div>
                </div>

              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
