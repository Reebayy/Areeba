import React from 'react';
import { GoogleAdsLogo, MetaLogo, AwinLogo, ImpactLogo } from './Logos';
import { Sparkles, Palette } from 'lucide-react';

export const Toolkit: React.FC = () => {
  const tools = [
    {
      name: "Google Ads",
      tag: "PPC & Search Bidding",
      logo: <GoogleAdsLogo className="h-5" showText={false} />,
    },
    {
      name: "Meta Ads",
      tag: "Audience & Social Ads",
      logo: <MetaLogo className="h-4" showText={false} />,
    },
    {
      name: "Awin",
      tag: "Publisher Network",
      logo: <AwinLogo className="h-4" />,
    },
    {
      name: "Impact.com",
      tag: "Affiliate Tracking",
      logo: <ImpactLogo className="h-4" />,
    },
    {
      name: "Canva",
      tag: "Ad Creatives & Banners",
      logo: (
        <div className="w-6 h-6 rounded-lg bg-gradient-to-tr from-[#00C4CC] to-[#7D2AE8] flex items-center justify-center text-white font-extrabold text-[11px]">
          C
        </div>
      ),
    },
    {
      name: "AI Automation",
      tag: "Copy & Intent Research",
      logo: (
        <div className="w-6 h-6 rounded-lg bg-[#EDE7FD] flex items-center justify-center text-[#7C3AED]">
          <Sparkles className="w-3.5 h-3.5" />
        </div>
      ),
    },
  ];

  return (
    <section id="toolkit" className="py-12 bg-[#FAF9FE] border-t border-[#ECE7F8]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Compact Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6">
          <div>
            <div className="text-[11px] font-bold tracking-wider uppercase text-[#7C3AED]">
              Core Tech Stack
            </div>
            <h2 className="text-2xl font-extrabold text-[#1E1736]">
              Marketing Toolkit
            </h2>
          </div>
          <p className="text-xs text-[#5F5577] max-w-sm">
            Key software and partner platforms leveraged daily for campaign configuration, tracking, and asset production.
          </p>
        </div>

        {/* Ultra-compact visualization grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
          {tools.map((t) => (
            <div
              key={t.name}
              className="p-3.5 bg-white rounded-2xl border border-[#EDE8F8] shadow-xs hover:border-[#DDD4FA] hover:shadow-sm transition-all flex flex-col items-center text-center justify-center gap-2 group"
            >
              <div className="p-1.5 rounded-xl bg-[#FAF9FE] group-hover:scale-105 transition-transform">
                {t.logo}
              </div>
              <div className="min-w-0 w-full">
                <div className="text-xs font-bold text-[#1E1736] truncate">
                  {t.name}
                </div>
                <div className="text-[10px] text-[#71658E] truncate mt-0.5">
                  {t.tag}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
