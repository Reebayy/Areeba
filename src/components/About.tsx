import React, { useState } from 'react';
import { Award, CheckCircle2, X, TrendingUp, DollarSign, Database, FileSpreadsheet } from 'lucide-react';
import areebaReadingPhoto from '../assets/images/areeba_reading_square_1791706141652.jpg';

export const About: React.FC = () => {
  const [certModalOpen, setCertModalOpen] = useState(false);

  const highlights = [
    "Google PPC & Search Intent",
    "Website Strategy",
    "Global Tier-1 Affiliate Networks",
    "Ecommerce Operations",
    "Team Work & Collaboration",
    "End-to-End Campaign Delivery",
  ];

  return (
    <section id="about" className="py-16 md:py-24 bg-[#FAF8F5] border-t border-[#ECE7F8] relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
          <div>
            <div className="text-xs font-bold tracking-wider uppercase text-[#0D9488] mb-1.5 flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-[#0D9488]" />
              <span>Professional Profile</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#1E1736]">
              About Me
            </h2>
          </div>

          {/* Interactive Certified Badge */}
          <button
            onClick={() => setCertModalOpen(true)}
            className="inline-flex items-center gap-2 px-4 py-2 bg-white hover:bg-[#F0FDFA] border border-[#CCFBF1] rounded-full text-xs font-bold text-[#0D9488] shadow-xs hover:shadow-sm transition-all cursor-pointer self-start sm:self-auto"
          >
            <Award className="w-4 h-4 text-[#0D9488]" />
            <span>Verified Credentials & Degree</span>
          </button>
        </div>

        {/* Clean, Focused About Me Card */}
        <div className="bg-white p-7 sm:p-10 rounded-3xl border border-[#EDE8F8] shadow-xs relative overflow-hidden">
          
          {/* Subtle top background decorative glow */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-bl from-[#CCFBF1]/40 via-transparent to-transparent pointer-events-none rounded-full blur-2xl" />

          <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left compact profile badge with small neat photo badge */}
            <div className="lg:col-span-4 flex flex-col items-center sm:items-start text-center sm:text-left p-6 rounded-2xl bg-[#FAF8F5] border border-[#ECE7F8]">
              
              <div className="flex items-center gap-4 mb-4">
                {/* Small transparent-styled photo badge */}
                <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-2xl overflow-hidden border-2 border-[#CCFBF1] shadow-xs bg-[#F0FDFA] shrink-0">
                  <img
                    src={areebaReadingPhoto}
                    alt="Areeba"
                    className="w-full h-full object-cover object-center"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0D9488]/20 to-transparent pointer-events-none" />
                </div>

                <div>
                  <div className="text-lg font-black text-[#1E1736]">Areeba</div>
                  <div className="text-xs font-bold text-[#0D9488]">Performance Marketer</div>
                  <div className="text-[11px] text-[#5F5577] mt-0.5 font-medium">Affiliate & Google PPC</div>
                </div>
              </div>

              {/* 3 Quick Highlight Pills */}
              <div className="w-full grid grid-cols-2 gap-2 pt-3 border-t border-[#EDE8F8]">
                <div className="p-2.5 bg-white rounded-xl border border-[#EDE8F8] text-center">
                  <div className="text-sm font-extrabold text-[#134E4A] font-mono">70+</div>
                  <div className="text-[10px] text-[#0D9488] font-bold">Search Campaigns</div>
                </div>
                <div className="p-2.5 bg-white rounded-xl border border-[#EDE8F8] text-center">
                  <div className="text-sm font-extrabold text-[#134E4A] font-mono">$15K/Mo</div>
                  <div className="text-[10px] text-[#0D9488] font-bold">Affiliate Payouts</div>
                </div>
              </div>

              <div className="w-full mt-2 p-2 bg-[#F0FDFA] rounded-xl border border-[#CCFBF1] text-center">
                <span className="text-xs font-bold text-[#0D9488]">4+ Years Agency Tenure</span>
              </div>
            </div>

            {/* Right: Core narrative and concise strengths */}
            <div className="lg:col-span-8 space-y-5">
              <div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-[#1E1736] leading-tight">
                  The Story Behind Areeba
                </h3>
                
                <p className="mt-3 text-sm sm:text-base text-[#473E60] leading-relaxed">
                  At <strong className="text-[#134E4A] font-bold">Perks Logic</strong>, I have managed <strong className="text-[#0D9488] font-bold">70+ search campaigns</strong> across affiliate brands and generated up to <strong className="text-[#0D9488] font-bold">$15K in monthly affiliate commissions</strong>. Alongside PPC and affiliate marketing, I have strong experience in Excel and data management.
                </p>

                <p className="mt-2 text-xs sm:text-sm text-[#5F5577] leading-relaxed">
                  Experienced across <strong className="text-[#1E1736] font-semibold">CreativeIT Sols</strong> (3 Years) and <strong className="text-[#1E1736] font-semibold">Perks Logic</strong> (1 Year), with focus on data-backed search intent, merchant taxonomy, and measurable ROAS.
                </p>
              </div>

              {/* Exact user requested operational scope */}
              <div className="pt-4 border-t border-[#F2EDFA]">
                <div className="text-xs font-bold uppercase tracking-wider text-[#0D9488] mb-3">
                  Key Focus Areas
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {highlights.map((item, idx) => (
                    <div key={idx} className="flex items-center gap-2 p-2 rounded-xl bg-[#FAF8F5] border border-[#EDE8F8] text-xs font-semibold text-[#1E1736]">
                      <CheckCircle2 className="w-4 h-4 text-[#0D9488] shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>

          </div>

        </div>

        {/* Credentials Modal */}
        {certModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#1E1736]/60 backdrop-blur-sm animate-in fade-in duration-200">
            <div className="bg-white rounded-3xl max-w-lg w-full border border-[#EDE8F8] shadow-2xl p-6 sm:p-8 space-y-6 relative">
              <button
                onClick={() => setCertModalOpen(false)}
                className="absolute top-5 right-5 p-2 rounded-xl text-[#5F5577] hover:text-[#1E1736] hover:bg-[#F4EFFF] transition-colors cursor-pointer"
                aria-label="Close credentials popup"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-2xl bg-[#CCFBF1] flex items-center justify-center text-[#0D9488]">
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#1E1736]">
                    Verified Credentials
                  </h3>
                  <div className="text-xs text-[#5F5577]">
                    Academic and professional qualifications
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="p-4 bg-[#FAF9FE] rounded-2xl border border-[#EDE8F8] space-y-1">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-[#0D9488]">Professional Certification</span>
                    <span className="text-[10px] font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-md">Verified</span>
                  </div>
                  <h4 className="text-sm font-bold text-[#1E1736]">Digital Marketing & Affiliate Marketing</h4>
                  <p className="text-xs text-[#5F5577] pt-1">
                    Hands-on training covering PPC campaign setup, performance tracking, affiliate networks, voucher platform architecture, and keyword optimization.
                  </p>
                </div>

                <div className="p-4 bg-[#FAF9FE] rounded-2xl border border-[#EDE8F8] space-y-1">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-[#0D9488]">Academic Education</span>
                    <span className="text-[10px] font-semibold text-[#5F5577] font-mono">Completed 2024</span>
                  </div>
                  <h4 className="text-sm font-bold text-[#1E1736]">Intermediate in Medical Science</h4>
                  <p className="text-xs text-[#5F5577] pt-1">
                    Analytical foundations in research ethics, data discipline, controlled testing, and spreadsheet data management.
                  </p>
                </div>
              </div>

              <div className="pt-2 text-center">
                <button
                  onClick={() => setCertModalOpen(false)}
                  className="w-full py-2.5 text-xs font-bold text-white bg-[#134E4A] hover:bg-[#115E59] rounded-xl transition-colors cursor-pointer"
                >
                  Close Credentials
                </button>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
