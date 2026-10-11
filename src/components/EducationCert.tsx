import React from 'react';
import { EDUCATION_AND_CERTS } from '../data/portfolioData';
import { GraduationCap, Award, BookOpen, Calendar, CheckCircle } from 'lucide-react';

export const EducationCert: React.FC = () => {
  return (
    <section id="education" className="py-20 md:py-28 bg-[#FAF9FE] border-t border-[#ECE7F8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="text-xs font-semibold tracking-wider uppercase text-[#7C3AED] mb-2">
            Academic & Training Background
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#1E1736]">
            Education & Certifications
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#5F5577] leading-relaxed">
            Scientific training combined with dedicated self-directed marketing mastery.
          </p>
        </div>

        {/* 2-Column Split: Education & Certification */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Education Card */}
          <div className="bg-white rounded-3xl p-8 border border-[#EDE8F8] shadow-sm flex flex-col justify-between space-y-6">
            <div>
              <div className="flex items-center justify-between pb-6 border-b border-[#F2EDFA]">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-[#F3EEFC] flex items-center justify-center text-[#7C3AED]">
                    <GraduationCap className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#1E1736]">
                      Academic Education
                    </h3>
                    <div className="text-xs text-[#5F5577]">
                      Higher Secondary Qualifications
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-1.5 text-xs font-mono font-semibold text-[#6D28D9] bg-[#F3EEFC] px-3 py-1.5 rounded-xl">
                  <Calendar className="w-3.5 h-3.5" />
                  <span>2024</span>
                </div>
              </div>

              <div className="mt-6 space-y-4">
                {EDUCATION_AND_CERTS.education.map((item, idx) => (
                  <div key={idx} className="space-y-2">
                    <h4 className="text-lg font-bold text-[#1E1736]">
                      {item.degree}
                    </h4>
                    <div className="text-xs font-medium text-[#7C3AED]">
                      Completed 2024 · Medical Science Focus
                    </div>
                    <p className="text-sm text-[#5F5577] leading-relaxed pt-2">
                      {item.focus}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-[#F2EDFA]">
              <div className="text-xs text-[#71658E] flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-emerald-600" />
                <span>Analytical thinking, empirical problem-solving, and disciplined research methodology.</span>
              </div>
            </div>
          </div>

          {/* Certification Card */}
          <div className="bg-white rounded-3xl p-8 border border-[#EDE8F8] shadow-sm flex flex-col justify-between space-y-6">
            <div>
              <div className="flex items-center justify-between pb-6 border-b border-[#F2EDFA]">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-[#F3EEFC] flex items-center justify-center text-[#7C3AED]">
                    <Award className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#1E1736]">
                      Professional Certification
                    </h3>
                    <div className="text-xs text-[#5F5577]">
                      Industry Skills & Applied Training
                    </div>
                  </div>
                </div>

                <div className="text-xs font-semibold text-[#6D28D9] bg-[#F3EEFC] px-3 py-1.5 rounded-xl">
                  Self-Trained
                </div>
              </div>

              <div className="mt-6 space-y-4">
                {EDUCATION_AND_CERTS.certifications.map((item, idx) => (
                  <div key={idx} className="space-y-2">
                    <h4 className="text-lg font-bold text-[#1E1736]">
                      {item.title}
                    </h4>
                    <div className="text-xs font-medium text-[#7C3AED]">
                      {item.provider}
                    </div>
                    <p className="text-sm text-[#5F5577] leading-relaxed pt-2">
                      {item.focus}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-[#F2EDFA]">
              <div className="text-xs text-[#71658E] flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-emerald-600" />
                <span>Continuous ongoing learning across evolving Google Ads updates & AI workflows.</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
