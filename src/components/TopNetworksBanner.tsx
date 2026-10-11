import React from 'react';
import { AwinLogo, ImpactLogo, FlexOffersLogo, GlobalNetworksLogo } from './Logos';
import { ShieldCheck, ArrowUpRight, Globe2 } from 'lucide-react';

export const TopNetworksBanner: React.FC = () => {
  const networks = [
    {
      name: "Awin",
      role: "Global Publisher Partner",
      desc: "Top affiliate network for UK, US & EU brand partnerships and voucher placements.",
      logo: <AwinLogo className="h-5" />,
      tag: "UK / US / EU",
    },
    {
      name: "Impact.com",
      role: "Partnership Cloud",
      desc: "Tracking outbound merchant clicks, promo codes, and multi-currency commissions.",
      logo: <ImpactLogo className="h-5" />,
      tag: "Enterprise Hub",
    },
    {
      name: "FlexOffers",
      role: "Top US & UK Network",
      desc: "Managing high-EPC merchant programs across premier retail, tech & coupon verticals.",
      logo: <FlexOffersLogo className="h-5" />,
      tag: "US / UK Direct",
    },
    {
      name: "Global Tier-1 Networks",
      role: "US, UK & Global Programs",
      desc: "Publisher operations across CJ Affiliate, Rakuten & ShareASale for international offers.",
      logo: <GlobalNetworksLogo className="h-5" />,
      tag: "Tier-1 Markets",
    },
  ];

  return (
    <section id="networks" className="py-12 md:py-16 bg-[#FAF8F5] border-t border-[#ECE7F8] relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="bg-white rounded-3xl border border-[#EDE8F8] p-6 sm:p-8 shadow-xs">
          
          {/* Section Header */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-[#F2EDFA]">
            <div>
              <div className="text-xs font-bold tracking-wider uppercase text-[#0D9488] mb-1.5 flex items-center gap-1.5">
                <Globe2 className="w-3.5 h-3.5 text-[#0D9488]" />
                <span>Publisher Operations</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-[#1E1736]">
                Top Networks & Platforms Handled as Publisher
              </h3>
              <p className="text-xs sm:text-sm text-[#5F5577] mt-1">
                Hands-on publisher operations across leading US, UK and international affiliate platforms
              </p>
            </div>

            <div className="flex items-center gap-1.5 text-xs font-semibold text-[#0D9488] bg-[#F0FDFA] px-3.5 py-1.5 rounded-full border border-[#CCFBF1] self-start sm:self-auto shrink-0 shadow-xs">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              <span>Active Publisher Operations</span>
            </div>
          </div>

          {/* 4 Compact Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-6">
            {networks.map((net) => (
              <div
                key={net.name}
                className="p-4 rounded-2xl bg-[#FAF8F5] border border-[#EDE8F8] hover:border-[#CCFBF1] hover:bg-white hover:shadow-xs transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div className="p-1.5 bg-white rounded-xl shadow-xs border border-[#EDE8F8]/60">
                      {net.logo}
                    </div>
                    <span className="text-[10px] font-bold text-[#0D9488] bg-white px-2 py-0.5 rounded-md border border-[#EDE8F8]">
                      {net.tag}
                    </span>
                  </div>

                  <div className="text-sm font-bold text-[#1E1736]">
                    {net.name}
                  </div>
                  <div className="text-xs font-semibold text-[#0D9488]">
                    {net.role}
                  </div>
                  <p className="text-xs text-[#5F5577] mt-1.5 leading-relaxed">
                    {net.desc}
                  </p>
                </div>

                <div className="pt-3 mt-3 border-t border-[#F2EDFA] flex items-center justify-between text-[11px] text-[#473E60] font-medium">
                  <span>Verified Publisher</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#0D9488] opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};
