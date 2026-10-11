import React from 'react';
import { ArrowUp, Mail, Phone, MessageCircle } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-white border-t border-[#ECE7F8] py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Brand & Title */}
          <div className="text-center md:text-left">
            <a href="#" className="text-lg font-bold text-[#1E1736]">
              Areeba Imran
            </a>
            <p className="text-xs text-[#5F5577] mt-1">
              Affiliate Marketer | PPC & Performance Marketing Specialist
            </p>
            <div className="flex items-center justify-center md:justify-start gap-3 mt-2 text-xs text-[#71658E]">
              <a href={`tel:${PERSONAL_INFO.phone}`} className="hover:text-[#7C3AED] transition-colors font-mono">
                {PERSONAL_INFO.phoneInternational}
              </a>
              <span>·</span>
              <a href={PERSONAL_INFO.whatsappUrl} target="_blank" rel="noopener noreferrer" className="text-[#059669] hover:underline font-medium">
                WhatsApp
              </a>
            </div>
          </div>

          {/* Quick Anchor Links */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-[#5F5577]">
            <a href="#about" className="hover:text-[#0D9488] transition-colors">About</a>
            <a href="#networks" className="hover:text-[#0D9488] transition-colors">Networks</a>
            <a href="#services" className="hover:text-[#0D9488] transition-colors">Services</a>
            <a href="#experience" className="hover:text-[#0D9488] transition-colors">Experience</a>
            <a href="#work" className="hover:text-[#0D9488] transition-colors">Case Studies</a>
            <a href="#skills" className="hover:text-[#0D9488] transition-colors">Skills</a>
            <a href="#contact" className="hover:text-[#0D9488] transition-colors">Contact</a>
          </div>

          {/* Social Links, Contact email & Back to top */}
          <div className="flex items-center gap-3">
            {/* LinkedIn */}
            <a
              href={PERSONAL_INFO.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-xl text-[#0A66C2] bg-[#FAF8F5] hover:bg-[#EFF6FF] border border-[#EDE8F8] transition-colors"
              title="LinkedIn Profile"
              aria-label="LinkedIn Profile"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76a1.68 1.68 0 1 0 0-3.36 1.68 1.68 0 0 0 0 3.36m1.4 9.74v-8.37H5.06v8.37h2.8z" />
              </svg>
            </a>

            {/* Instagram */}
            <a
              href={PERSONAL_INFO.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-xl text-[#E1306C] bg-[#FAF8F5] hover:bg-[#FDF2F8] border border-[#EDE8F8] transition-colors"
              title="Instagram Profile"
              aria-label="Instagram Profile"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </a>

            {/* Email link */}
            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="text-xs text-[#0D9488] hover:underline flex items-center gap-1.5 font-bold ml-2"
            >
              <Mail className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">{PERSONAL_INFO.email}</span>
            </a>

            <button
              onClick={scrollToTop}
              className="p-2 rounded-xl bg-[#FAF8F5] hover:bg-[#F0FDFA] text-[#5F5577] hover:text-[#0D9488] border border-[#EDE8F8] transition-colors cursor-pointer ml-1"
              aria-label="Scroll to top of page"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>

        </div>

        <div className="mt-8 pt-6 border-t border-[#F2EDFA] text-center text-xs text-[#71658E]">
          © {new Date().getFullYear()} Areeba Imran. All rights reserved. Phone: {PERSONAL_INFO.phone} · {PERSONAL_INFO.email}
        </div>
      </div>
    </footer>
  );
};
