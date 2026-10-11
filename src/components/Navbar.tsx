import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, MessageCircle } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { GirlAvatarIcon } from './Logos';

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Experience', href: '#experience' },
    { label: 'Case Studies', href: '#work' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-4 sm:px-6">
      <div
        className={`max-w-6xl mx-auto transition-all duration-300 ${
          scrolled
            ? 'mt-3 bg-white/80 backdrop-blur-xl border border-[#EDE8F8] shadow-[0_10px_35px_rgba(91,33,182,0.08)] py-2 px-5 sm:px-6 rounded-full'
            : 'mt-5 bg-white/60 backdrop-blur-md border border-[#ECE7F8]/80 shadow-[0_4px_20px_rgba(91,33,182,0.03)] py-2.5 px-5 sm:px-6 rounded-full'
        }`}
      >
        <div className="flex items-center justify-between">
          
          {/* Zone 1: Girl Avatar Logo + Clean "Areeba" Wordmark */}
          <a
            href="#"
            className="flex items-center gap-2.5 group"
            aria-label="Areeba Homepage"
          >
            {/* Elegant Girl Avatar Icon */}
            <GirlAvatarIcon className="w-8 h-8 sm:w-9 sm:h-9 group-hover:scale-105 transition-transform" />
            
            {/* Single wordmark "Areeba" */}
            <div className="flex flex-col text-left">
              <span className="text-base font-extrabold tracking-tight text-[#1E1736] group-hover:text-[#0D9488] transition-colors leading-tight">
                Areeba
              </span>
              <span className="text-[9px] font-semibold tracking-wider uppercase text-[#0D9488] leading-none">
                PPC & Performance
              </span>
            </div>
          </a>

          {/* Zone 2: Navigation Links */}
          <nav className="hidden md:flex items-center gap-6 text-xs font-semibold text-[#5F5577] tracking-wide">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="hover:text-[#0D9488] transition-colors relative py-1 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[#0D9488] hover:after:w-full after:transition-all after:duration-200"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Zone 3: Modern Action Buttons */}
          <div className="flex items-center gap-2 sm:gap-3">
            
            {/* WhatsApp Quick Pill */}
            <a
              href={PERSONAL_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-[#065F46] bg-[#ECFDF5] hover:bg-[#D1FAE5] border border-[#A7F3D0] rounded-full transition-all hover:shadow-xs active:scale-95"
              title="Chat on WhatsApp"
            >
              <MessageCircle className="w-3.5 h-3.5 text-[#059669]" />
              <span>WhatsApp</span>
            </a>

            {/* Let's Connect */}
            <a
              href="#contact"
              className="inline-flex items-center gap-1.5 px-4 sm:px-5 py-2 text-xs font-bold text-white bg-gradient-to-r from-[#1E1736] via-[#134E4A] to-[#0D9488] hover:from-[#115E59] hover:to-[#0F766E] rounded-full shadow-sm hover:shadow-[0_4px_16px_rgba(13,148,136,0.3)] transition-all duration-200 active:scale-95 whitespace-nowrap"
            >
              <span>Let's Connect</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>

            {/* Mobile menu trigger */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-1.5 rounded-full text-[#1E1736] hover:bg-[#ECE6F8] transition-colors"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-3 p-4 bg-white/95 backdrop-blur-xl border border-[#ECE7F8] rounded-2xl shadow-xl space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-2 text-xs font-semibold text-[#1E1736] hover:bg-[#F0FDFA] rounded-xl transition-colors"
              >
                {link.label}
              </a>
            ))}

            <div className="pt-2 border-t border-[#ECE7F8]">
              <a
                href={PERSONAL_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full py-2 text-xs font-semibold text-[#065F46] bg-[#ECFDF5] rounded-xl"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp: {PERSONAL_INFO.phone}</span>
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
