import React from 'react';

// Elegant Clear Girl Avatar Icon for Header Logo
export const GirlAvatarIcon: React.FC<{ className?: string }> = ({ className = "w-8 h-8" }) => (
  <div className={`relative rounded-full overflow-hidden bg-gradient-to-tr from-[#0D9488] via-[#14B8A6] to-[#5EEAD4] p-[1.5px] shadow-sm flex items-center justify-center shrink-0 ${className}`}>
    <div className="w-full h-full rounded-full bg-[#134E4A] flex items-center justify-center overflow-hidden">
      <svg viewBox="0 0 48 48" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Soft Background Gradient */}
        <rect width="48" height="48" fill="#134E4A" />
        
        {/* Teal Hijab / Headscarf Outer Wrap */}
        <path
          d="M24 6C15 6 11 12 11 20C11 27 13 36 15 42H33C35 36 37 27 37 20C37 12 33 6 24 6Z"
          fill="#0D9488"
        />

        {/* Hijab Inner Frame / Fold */}
        <path
          d="M24 8C17 8 13.5 13 13.5 21C13.5 27 15.5 35 18 39C20.5 40 27.5 40 30 39C32.5 35 34.5 27 34.5 21C34.5 13 31 8 24 8Z"
          fill="#14B8A6"
        />

        {/* Clear Face Oval */}
        <ellipse cx="24" cy="22" rx="7.5" ry="9" fill="#FEEBC8" />

        {/* Soft Under-scarf Band */}
        <path
          d="M17.5 16C19 14.2 21.5 13.2 24 13.2C26.5 13.2 29 14.2 30.5 16C29 15.2 26.5 14.5 24 14.5C21.5 14.5 19 15.2 17.5 16Z"
          fill="#CCFBF1"
        />

        {/* Expressive Eyebrows */}
        <path d="M19 18C20 17.3 21.5 17.5 22.2 18" stroke="#78350F" strokeWidth="1" strokeLinecap="round" />
        <path d="M25.8 18C26.5 17.5 28 17.3 29 18" stroke="#78350F" strokeWidth="1" strokeLinecap="round" />

        {/* Clear Eyes with Eyelashes */}
        <ellipse cx="20.5" cy="20.5" rx="1.4" ry="1.4" fill="#451A03" />
        <ellipse cx="27.5" cy="20.5" rx="1.4" ry="1.4" fill="#451A03" />
        <circle cx="21" cy="20" r="0.4" fill="white" />
        <circle cx="28" cy="20" r="0.4" fill="white" />

        {/* Cute Nose */}
        <path d="M24 21.5V23.5H24.8" stroke="#D97706" strokeWidth="0.8" strokeLinecap="round" strokeLinejoin="round" />

        {/* Warm Friendly Smile */}
        <path d="M22 25.5C22.8 26.8 25.2 26.8 26 25.5" stroke="#B45309" strokeWidth="1.1" strokeLinecap="round" />

        {/* Hijab Chest Drape / Collar */}
        <path
          d="M16 34C18 31 21 29 24 29C27 29 30 31 32 34C35 39 37 44 38 48H10C11 44 13 39 16 34Z"
          fill="#0F766E"
        />

        {/* Elegant Hijab Lapel Fold */}
        <path
          d="M24 29L21 48H27L24 29Z"
          fill="#115E59"
          opacity="0.4"
        />
      </svg>
    </div>
  </div>
);

// FlexOffers official brand logo
export const FlexOffersLogo: React.FC<{ className?: string }> = ({ className = "h-6" }) => (
  <div className={`inline-flex items-center gap-2 ${className}`}>
    <svg viewBox="0 0 160 40" className="h-full w-auto" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Dynamic FlexOffers F geometric symbol */}
      <defs>
        <linearGradient id="flexGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#10B981" />
          <stop offset="100%" stopColor="#0284C7" />
        </linearGradient>
      </defs>
      <path d="M8 8H24C26.2 8 28 9.8 28 12C28 14.2 26.2 16 24 16H14V20H22C24.2 20 26 21.8 26 24C26 26.2 24.2 28 22 28H14V34H8V8Z" fill="url(#flexGradient)" />
      <circle cx="27" cy="12" r="3" fill="#10B981" />
      {/* FlexOffers wordmark */}
      <text x="36" y="27" fill="#1E1736" fontSize="21" fontWeight="800" fontFamily="system-ui, -apple-system, sans-serif" letterSpacing="-0.5px">
        flex<tspan fill="#0284C7" fontWeight="600">offers</tspan>
      </text>
    </svg>
  </div>
);

// Global Tier-1 Networks (CJ / Rakuten / ShareASale) Logo Mark
export const GlobalNetworksLogo: React.FC<{ className?: string }> = ({ className = "h-6" }) => (
  <div className={`inline-flex items-center gap-2 ${className}`}>
    <div className="h-full aspect-square rounded-xl bg-gradient-to-tr from-[#1E1B4B] via-[#0D9488] to-[#10B981] p-1.5 flex items-center justify-center text-white shadow-xs">
      <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
        <path d="M2 12h20" />
      </svg>
    </div>
    <span className="font-extrabold text-[#1E1736] tracking-tight text-sm">
      Global <span className="text-[#0D9488]">US/UK</span>
    </span>
  </div>
);

// Impact.com official brand logo
export const ImpactLogo: React.FC<{ className?: string; light?: boolean }> = ({ className = "h-6", light = false }) => (
  <div className={`inline-flex items-center gap-2 ${className}`}>
    <svg viewBox="0 0 160 44" className="h-full w-auto" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="16" cy="12" r="4.5" fill={light ? "#FFFFFF" : "#6366F1"} />
      <circle cx="16" cy="22" r="4" fill={light ? "#E0E7FF" : "#818CF8"} />
      <path d="M12 30C12 27.79 13.79 26 16 26C18.21 26 20 27.79 20 30C20 32.21 18.21 34 16 34C13.79 34 12 32.21 12 30Z" fill={light ? "#C7D2FE" : "#A5B4FC"} />
      <text x="32" y="30" fill={light ? "#FFFFFF" : "#1E1736"} fontSize="24" fontWeight="800" fontFamily="system-ui, -apple-system, sans-serif" letterSpacing="-0.5px">
        impact<tspan fill={light ? "#C7D2FE" : "#818CF8"} fontSize="18">.com</tspan>
      </text>
    </svg>
  </div>
);

// Awin official brand logo
export const AwinLogo: React.FC<{ className?: string; light?: boolean }> = ({ className = "h-6", light = false }) => (
  <div className={`inline-flex items-center gap-2 ${className}`}>
    <svg viewBox="0 0 130 40" className="h-full w-auto" fill="none" xmlns="http://www.w3.org/2000/svg">
      <polygon points="6,32 16,8 24,32" fill="#FBBF24" opacity="0.9" />
      <polygon points="12,32 22,4 30,32" fill="#EF4444" opacity="0.95" />
      <polygon points="18,32 28,12 36,32" fill="#F97316" />
      <text x="42" y="27" fill={light ? "#FFFFFF" : "#1E1736"} fontSize="22" fontWeight="800" fontFamily="system-ui, -apple-system, sans-serif" letterSpacing="2px">
        AWIN
      </text>
    </svg>
  </div>
);

// Google Ads official 3-color logo
export const GoogleAdsLogo: React.FC<{ className?: string; showText?: boolean }> = ({ className = "h-6", showText = true }) => (
  <div className={`inline-flex items-center gap-2 ${className}`}>
    <svg viewBox="0 0 40 40" className="h-full aspect-square" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12.3 8.2L20.8 22.8C22.1 25.1 21.3 28 19 29.3C16.7 30.6 13.8 29.8 12.5 27.5L4 12.9C2.7 10.6 3.5 7.7 5.8 6.4C8.1 5.1 11 5.9 12.3 8.2Z" fill="#4285F4" />
      <path d="M27.7 8.2L36 22.8C37.3 25.1 36.5 28 34.2 29.3C31.9 30.6 29 29.8 27.7 27.5L19.4 12.9C18.1 10.6 18.9 7.7 21.2 6.4C23.5 5.1 26.4 5.9 27.7 8.2Z" fill="#FBBC04" />
      <circle cx="12.5" cy="27.5" r="4.5" fill="#34A853" />
    </svg>
    {showText && (
      <span className="font-semibold text-current text-sm sm:text-base tracking-tight">
        Google <span className="font-bold text-[#4285F4]">Ads</span>
      </span>
    )}
  </div>
);

// Meta official loop logo
export const MetaLogo: React.FC<{ className?: string; showText?: boolean }> = ({ className = "h-5", showText = true }) => (
  <div className={`inline-flex items-center gap-1.5 ${className}`}>
    <svg viewBox="0 0 36 24" className="h-full aspect-[3/2]" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M26.2 3.1C24.4 3.1 22.7 4 21.6 5.6C19.7 2.8 16.5 2.5 13.4 3.8C10.2 5.1 8 8.4 8 12C8 15.6 10.2 18.9 13.4 20.2C16.5 21.5 19.7 21.2 21.6 18.4C22.7 20 24.4 20.9 26.2 20.9C29.6 20.9 32.4 17.8 32.4 13.9C32.4 10.1 29.6 3.1 26.2 3.1ZM13.8 17.5C11.6 17.5 9.8 15.1 9.8 12C9.8 8.9 11.6 6.5 13.8 6.5C16.1 6.5 17.9 8.9 17.9 12C17.9 15.1 16.1 17.5 13.8 17.5ZM26.2 17.5C24.6 17.5 23.3 16 23.3 13.9C23.3 11.8 24.6 6.5 26.2 6.5C27.8 6.5 29.1 8.9 29.1 12C29.1 15.1 27.8 17.5 26.2 17.5Z"
        fill="url(#metaGradient)"
      />
      <defs>
        <linearGradient id="metaGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#0081FB" />
          <stop offset="50%" stopColor="#0064E0" />
          <stop offset="100%" stopColor="#0051C6" />
        </linearGradient>
      </defs>
    </svg>
    {showText && <span className="font-semibold text-current text-xs">Meta</span>}
  </div>
);

// Perks Logic official logo matching user screenshot
export const PerksLogicLogo: React.FC<{ className?: string }> = ({ className = "h-12" }) => (
  <div className={`inline-flex items-center gap-3 ${className}`}>
    <svg viewBox="0 0 54 54" className="h-full aspect-square" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="pjGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#F59E0B" />
          <stop offset="50%" stopColor="#EF4444" />
          <stop offset="100%" stopColor="#EC4899" />
        </linearGradient>
      </defs>
      <rect width="54" height="54" rx="14" fill="#FFF7ED" stroke="#FED7AA" strokeWidth="1.5" />
      <path d="M14 14H28C32.4 14 36 17.6 36 22C36 26.4 32.4 30 28 30H20V40H14V14Z" fill="url(#pjGradient)" />
      <path d="M28 32H38V36C38 38.2 36.2 40 34 40H30" stroke="url(#pjGradient)" strokeWidth="3.5" strokeLinecap="round" />
      <circle cx="26" cy="22" r="3" fill="#FFFFFF" />
      <rect x="36" y="14" width="3" height="3" fill="#F59E0B" />
      <rect x="40" y="18" width="3" height="3" fill="#EF4444" />
      <rect x="38" y="24" width="3" height="3" fill="#EC4899" />
    </svg>
    <div className="flex flex-col text-left">
      <span className="font-extrabold text-[#D97706] tracking-wider text-sm leading-tight uppercase font-sans">
        PERKS LOGIC
      </span>
      <span className="text-[10px] text-[#9A3412] font-medium tracking-tight">
        Affiliate Marketing & PPC Agency
      </span>
    </div>
  </div>
);

// CreativeIT Sols official branding
export const CreativeITLogo: React.FC<{ className?: string }> = ({ className = "h-12" }) => (
  <div className={`inline-flex items-center gap-3 ${className}`}>
    <div className="h-full aspect-square rounded-2xl bg-gradient-to-tr from-[#1E1B4B] via-[#4338CA] to-[#7C3AED] p-2 flex items-center justify-center text-white shadow-sm border border-[#C7D2FE]/40">
      <svg viewBox="0 0 28 28" className="w-6 h-6" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M6 14C6 9.58 9.58 6 14 6C17.5 6 20.5 8.2 21.6 11.3" stroke="#A5B4FC" strokeWidth="2.5" strokeLinecap="round" />
        <path d="M22 14C22 18.42 18.42 22 14 22C10.5 22 7.5 19.8 6.4 16.7" stroke="#FFFFFF" strokeWidth="2.5" strokeLinecap="round" />
        <circle cx="14" cy="14" r="3" fill="#38BDF8" />
      </svg>
    </div>
    <div className="flex flex-col text-left">
      <span className="font-extrabold text-[#1E1B4B] tracking-tight text-sm leading-tight">
        CreativeIT <span className="text-[#6D28D9]">Sols</span>
      </span>
      <span className="text-[10px] text-[#6366F1] font-medium tracking-tight">
        Affiliate Marketing & PPC Advertising
      </span>
    </div>
  </div>
);
