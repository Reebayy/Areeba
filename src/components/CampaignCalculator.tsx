import React, { useState } from 'react';
import { Calculator, ArrowRight, Sparkles, TrendingUp, DollarSign, Percent, MousePointerClick } from 'lucide-react';

export const CampaignCalculator: React.FC = () => {
  const [budget, setBudget] = useState<number>(1500);
  const [cpc, setCpc] = useState<number>(1.25);
  const [cvr, setCvr] = useState<number>(3.5);
  const [payout, setPayout] = useState<number>(45);

  const clicks = Math.round(budget / Math.max(cpc, 0.1));
  const conversions = Math.round(clicks * (cvr / 100));
  const revenue = Math.round(conversions * payout);
  const roas = budget > 0 ? (revenue / budget).toFixed(2) : '0';
  const netProfit = revenue - budget;

  return (
    <section className="py-20 md:py-28 bg-[#FAF9FE] border-t border-[#ECE7F8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-semibold tracking-wider uppercase text-[#7C3AED] mb-2">
            Interactive Simulation
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#1E1736]">
            PPC & Affiliate Performance Simulator
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#5F5577] leading-relaxed">
            Test how targeted search traffic, commercial keyword selection, and optimized coupon conversion pathways impact key campaign metrics.
          </p>
        </div>

        {/* Dashboard Simulation Container */}
        <div className="bg-white rounded-3xl border border-[#EDE8F8] shadow-sm p-6 sm:p-10 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Controls Side */}
          <div className="lg:col-span-6 space-y-6">
            <div className="flex items-center gap-2 pb-4 border-b border-[#F2EDFA]">
              <div className="w-8 h-8 rounded-xl bg-[#F3EEFC] flex items-center justify-center text-[#7C3AED]">
                <Calculator className="w-4 h-4" />
              </div>
              <h3 className="text-base font-bold text-[#1E1736]">
                Campaign Parameters
              </h3>
            </div>

            {/* Parameter 1: Monthly Budget */}
            <div className="space-y-2">
              <div className="flex justify-between text-xs font-semibold">
                <span className="text-[#1E1736]">Monthly PPC Ad Spend ($)</span>
                <span className="text-[#6D28D9] font-mono tabular-nums">${budget.toLocaleString()}</span>
              </div>
              <input
                type="range"
                min="300"
                max="10000"
                step="100"
                value={budget}
                onChange={(e) => setBudget(Number(e.target.value))}
                className="w-full accent-[#7C3AED] cursor-pointer"
              />
              <div className="flex justify-between text-[11px] text-[#71658E]">
                <span>$300 (Starter)</span>
                <span>$10,000 (Scaled)</span>
              </div>
            </div>

            {/* Parameter 2: Average CPC */}
            <div className="space-y-2">
              <div className="flex justify-between text-xs font-semibold">
                <span className="text-[#1E1736]">Average Cost Per Click (CPC)</span>
                <span className="text-[#6D28D9] font-mono tabular-nums">${cpc.toFixed(2)}</span>
              </div>
              <input
                type="range"
                min="0.4"
                max="5.0"
                step="0.05"
                value={cpc}
                onChange={(e) => setCpc(Number(e.target.value))}
                className="w-full accent-[#7C3AED] cursor-pointer"
              />
              <div className="flex justify-between text-[11px] text-[#71658E]">
                <span>$0.40 (Affiliate/Deal)</span>
                <span>$5.00 (High-Comp Search)</span>
              </div>
            </div>

            {/* Parameter 3: Conversion Rate */}
            <div className="space-y-2">
              <div className="flex justify-between text-xs font-semibold">
                <span className="text-[#1E1736]">Target Conversion Rate (CVR)</span>
                <span className="text-[#6D28D9] font-mono tabular-nums">{cvr.toFixed(1)}%</span>
              </div>
              <input
                type="range"
                min="1.0"
                max="8.0"
                step="0.1"
                value={cvr}
                onChange={(e) => setCvr(Number(e.target.value))}
                className="w-full accent-[#7C3AED] cursor-pointer"
              />
              <div className="flex justify-between text-[11px] text-[#71658E]">
                <span>1.0% (Broad Traffic)</span>
                <span>8.0% (Coupon/High-Intent)</span>
              </div>
            </div>

            {/* Parameter 4: Average Payout */}
            <div className="space-y-2">
              <div className="flex justify-between text-xs font-semibold">
                <span className="text-[#1E1736]">Avg Affiliate Commission / Value</span>
                <span className="text-[#6D28D9] font-mono tabular-nums">${payout}</span>
              </div>
              <input
                type="range"
                min="10"
                max="150"
                step="5"
                value={payout}
                onChange={(e) => setPayout(Number(e.target.value))}
                className="w-full accent-[#7C3AED] cursor-pointer"
              />
              <div className="flex justify-between text-[11px] text-[#71658E]">
                <span>$10 (Micro offer)</span>
                <span>$150 (Premium partner)</span>
              </div>
            </div>

          </div>

          {/* Results Side (SaaS Dashboard Metric Cards) */}
          <div className="lg:col-span-6 bg-[#FAF9FE] p-6 sm:p-8 rounded-3xl border border-[#EDE8F8] space-y-6">
            
            <div className="flex items-center justify-between pb-3 border-b border-[#ECE7F8]">
              <span className="text-xs font-bold uppercase tracking-wider text-[#6D28D9]">
                Estimated Outcomes
              </span>
              <span className="text-xs text-[#5F5577]">
                Hypothetical performance modeling
              </span>
            </div>

            <div className="grid grid-cols-2 gap-4">
              
              <div className="bg-white p-4 rounded-2xl border border-[#EDE8F8] shadow-sm">
                <div className="text-xs text-[#71658E] flex items-center gap-1">
                  <MousePointerClick className="w-3.5 h-3.5 text-[#7C3AED]" />
                  <span>Targeted Clicks</span>
                </div>
                <div className="text-2xl font-bold text-[#1E1736] font-mono tabular-nums mt-1">
                  {clicks.toLocaleString()}
                </div>
              </div>

              <div className="bg-white p-4 rounded-2xl border border-[#EDE8F8] shadow-sm">
                <div className="text-xs text-[#71658E] flex items-center gap-1">
                  <TrendingUp className="w-3.5 h-3.5 text-[#7C3AED]" />
                  <span>Conversions</span>
                </div>
                <div className="text-2xl font-bold text-[#1E1736] font-mono tabular-nums mt-1">
                  {conversions.toLocaleString()}
                </div>
              </div>

              <div className="bg-white p-4 rounded-2xl border border-[#EDE8F8] shadow-sm">
                <div className="text-xs text-[#71658E] flex items-center gap-1">
                  <DollarSign className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Est. Revenue</span>
                </div>
                <div className="text-2xl font-bold text-emerald-600 font-mono tabular-nums mt-1">
                  ${revenue.toLocaleString()}
                </div>
              </div>

              <div className="bg-white p-4 rounded-2xl border border-[#EDE8F8] shadow-sm">
                <div className="text-xs text-[#71658E] flex items-center gap-1">
                  <Percent className="w-3.5 h-3.5 text-[#7C3AED]" />
                  <span>Return on Spend (ROAS)</span>
                </div>
                <div className="text-2xl font-bold text-[#6D28D9] font-mono tabular-nums mt-1">
                  {roas}x
                </div>
              </div>

            </div>

            {/* Strategic Notes */}
            <div className="p-4 bg-white rounded-2xl border border-[#EDE8F8] text-xs text-[#5F5577] space-y-2">
              <div className="font-semibold text-[#1E1736] flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-[#7C3AED]" />
                <span>Optimization Levers I Apply:</span>
              </div>
              <p className="leading-relaxed">
                By maintaining strict negative keyword lists, average CPC drops while commercial intent increases. Pairing high-converting coupon placements raises the effective conversion rate from baseline averages.
              </p>
            </div>

            <div className="pt-2 text-center">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 text-xs font-semibold text-[#6D28D9] hover:text-[#4C1D95] transition-colors"
              >
                <span>Discuss customized strategy for your campaigns</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
