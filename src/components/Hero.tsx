import React from 'react';
import { ArrowRight, Sparkles, Target } from 'lucide-react';
import areebaReadingPortrait from '../assets/images/areeba_reading_square_1791706141652.jpg';
import { GoogleAdsLogo } from './Logos';

export const Hero: React.FC = () => {
  return (
    <section className="relative pt-24 pb-14 md:pt-32 md:pb-20 overflow-hidden">
      {/* Refined subtle ambient background: warm cozy glow not too heavy */}
      <div 
        aria-hidden="true" 
        className="absolute top-8 left-1/2 -translate-x-1/2 w-[850px] h-[480px] bg-gradient-to-tr from-[#0D9488]/12 via-[#FDE68A]/15 to-[#FAF8F5] blur-3xl pointer-events-none -z-10" 
      />
      <div 
        aria-hidden="true" 
        className="absolute top-1/4 -right-28 w-72 h-72 bg-[#0F766E]/10 rounded-full blur-3xl pointer-events-none -z-10" 
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Main Hero Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-center">
          
          {/* Left Column: Core Narrative & Clean CTAs */}
          <div className="lg:col-span-7 space-y-5">
            
            {/* Visual Kicker */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/95 border border-[#CCFBF1] shadow-xs text-xs font-semibold text-[#0D9488]">
              <Sparkles className="w-3.5 h-3.5 text-[#0D9488]" />
              <span>Affiliate Publisher & Performance Marketer</span>
              <span aria-hidden="true" className="text-[#99F6E4]">·</span>
              <span className="text-[#059669] flex items-center gap-1 font-mono">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                Available for Projects
              </span>
            </div>

            {/* Typography */}
            <div className="space-y-2.5">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#1E1736] leading-[1.08]">
                Areeba
              </h1>
              <p className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-[#1E1736] via-[#0F766E] to-[#0D9488] bg-clip-text text-transparent">
                Affiliate Marketer | PPC & Performance Marketing
              </p>
              <p className="text-base sm:text-lg text-[#5F5577] max-w-xl leading-relaxed">
                I build and optimize performance-driven marketing campaigns using PPC, affiliate strategies, research and AI-powered workflows.
              </p>
            </div>

            {/* Action CTAs */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href="#services"
                className="inline-flex items-center gap-2 px-6 py-3.5 text-xs sm:text-sm font-bold text-white bg-gradient-to-r from-[#1E1736] via-[#134E4A] to-[#0D9488] hover:from-[#115E59] hover:to-[#0F766E] rounded-full shadow-md hover:shadow-[0_6px_22px_rgba(13,148,136,0.25)] transition-all duration-200 active:scale-95"
              >
                <span>View My Services</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#about"
                className="inline-flex items-center gap-2 px-5 py-3.5 text-xs sm:text-sm font-bold text-[#1E1736] bg-white hover:bg-[#F0FDFA] border border-[#CCFBF1] rounded-full shadow-xs hover:shadow-sm transition-all duration-200 active:scale-95"
              >
                <span>About Me</span>
              </a>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-5 py-3.5 text-xs sm:text-sm font-bold text-[#0D9488] bg-[#F0FDFA] hover:bg-[#CCFBF1] rounded-full transition-all duration-200 active:scale-95"
              >
                <span>Let's Connect</span>
              </a>
            </div>

          </div>

          {/* Right Column: Uploaded Reading Portrait with Cozy Teal Accent */}
          <div className="lg:col-span-5 relative flex justify-center">
            <div className="relative w-full max-w-sm sm:max-w-md">
              
              {/* Soft emerald/teal ambient halo matching sofa & atmosphere */}
              <div className="absolute -inset-3 bg-gradient-to-tr from-[#0D9488]/30 via-[#2DD4BF]/20 to-[#FDE68A]/20 rounded-[2.5rem] opacity-70 blur-xl"></div>

              {/* Main portrait frame */}
              <div className="relative bg-white p-3 rounded-[2rem] shadow-[0_16px_50px_rgba(13,148,136,0.12)] border border-[#CCFBF1]">
                
                {/* Photo frame */}
                <div className="relative overflow-hidden rounded-[1.6rem] aspect-square bg-[#F0FDFA]">
                  <img
                    src={areebaReadingPortrait}
                    alt="Areeba – Performance Marketer"
                    className="w-full h-full object-cover object-center scale-100 hover:scale-105 transition-transform duration-500 ease-out"
                    loading="eager"
                    referrerPolicy="no-referrer"
                  />
                  {/* Subtle lower gradient overlay for depth */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#134E4A]/30 via-transparent to-transparent pointer-events-none" />
                </div>

                {/* Clean Name & Payout Badge */}
                <div className="mt-3 p-3 bg-[#F0FDFA] rounded-2xl border border-[#CCFBF1] flex items-center justify-between">
                  <div>
                    <div className="text-sm font-extrabold text-[#1E1736]">Areeba</div>
                    <div className="text-xs font-semibold text-[#0D9488]">Affiliate & PPC Growth</div>
                  </div>
                  <div className="px-2.5 py-1 rounded-xl bg-white text-[#0D9488] font-bold text-xs border border-[#CCFBF1] font-mono shadow-xs">
                    $15K/Mo Payouts
                  </div>
                </div>

              </div>

              {/* Floating Google Ads Top Badge */}
              <div className="hidden sm:flex absolute -top-4 -right-4 bg-white/95 backdrop-blur-md px-3.5 py-2 rounded-2xl border border-[#CCFBF1] shadow-lg shadow-[#0D9488]/10 items-center gap-2">
                <GoogleAdsLogo className="h-4" showText={false} />
                <span className="text-xs font-bold text-[#1E1736]">Google Ads Certified</span>
              </div>

              {/* Floating Search Partner Bottom Badge */}
              <div className="hidden sm:flex absolute -bottom-4 -left-4 bg-white/95 backdrop-blur-md px-3.5 py-2 rounded-2xl border border-[#CCFBF1] shadow-lg shadow-[#0D9488]/10 items-center gap-2">
                <Target className="w-4 h-4 text-[#0D9488]" />
                <span className="text-xs font-bold text-[#1E1736]">PPC & Performance</span>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
